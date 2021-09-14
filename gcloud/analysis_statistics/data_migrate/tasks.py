# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community
Edition) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""


import logging


from django.db.models import Q
from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from celery.task import periodic_task

from pipeline.contrib.statistics.models import (
    TemplateInPipeline,
    ComponentInTemplate,
    InstanceInPipeline,
    ComponentExecuteData,
)
from pipeline.models import PipelineInstance, PipelineTemplate
from pipeline.core.constants import PE
from pipeline.engine.utils import calculate_elapsed_time
from pipeline.contrib.periodic_task.djcelery.tzcrontab import TzAwareCrontab

from gcloud.analysis_statistics.models import (
    TemplateInStatistics,
    TemplateNodeTemplate,
    TaskflowExecutedNodeStatistics,
    TaskflowStatistics,
)
from gcloud.tasktmpl3.models import TaskTemplate
from gcloud.taskflow3.models import TaskFlowInstance
from gcloud.analysis_statistics.data_migrate.models import MigrateLog

logger = logging.getLogger("celery")


def migrate_template(start, end):
    """
    @summary: 执行“TemplateInPipeline-->TemplateInStatistics”的迁移
    param start:TemplateInPipeline表的主键
    param end:TemplateInPipeline表的主键
    return success:是否成功
    """

    # 查询出所有目标记录
    condition = Q()
    condition.children.append(("id__gte", start))
    condition.children.append(("id__lt", end))
    template_in_pipeline_records = TemplateInPipeline.objects.filter(condition)

    # 构造数据源字典
    data_source_list = []
    for template_in_pipeline_inst in template_in_pipeline_records:
        try:
            template_id = template_in_pipeline_inst.template_id
            pipeline_template = PipelineTemplate.objects.get(template_id=template_id)
            task_template = TaskTemplate.objects.get(pipeline_template__id=pipeline_template.id)
            data_source_list.append(
                {
                    "template_in_pipeline_inst": template_in_pipeline_inst,
                    "pipeline_template": pipeline_template,
                    "task_template": task_template,
                }
            )
        except ObjectDoesNotExist:
            continue

    for data_source_item in data_source_list:
        pipeline_template = data_source_item["pipeline_template"]
        template_in_pipeline_inst = data_source_item["template_in_pipeline_inst"]
        task_template = data_source_item["task_template"]
        kwargs = {
            "template_id": pipeline_template.id,
            "task_template_id": task_template.id,
            "atom_total": template_in_pipeline_inst.atom_total,
            "subprocess_total": template_in_pipeline_inst.subprocess_total,
            "gateways_total": template_in_pipeline_inst.gateways_total,
            "project_id": task_template.project.id,
            "category": task_template.category,
            "template_creator": pipeline_template.creator,
            "template_create_time": pipeline_template.create_time,
            "template_edit_time": pipeline_template.edit_time,
        }
        # 计算输入输出变量个数
        input_count = 0
        output_count = 0
        data = pipeline_template.data
        for constant in data[PE.constants].values():
            if constant["source_type"] == "component_outputs":
                output_count += 1
            else:
                input_count += 1
        kwargs["input_count"] = input_count
        kwargs["output_count"] = output_count
        try:
            with transaction.atomic():
                templatestatistics = TemplateInStatistics.objects.create(**kwargs)
                templatestatistics.save()
        except Exception:
            logger.warning("TemplateInStatistics插入失败，自动回滚")
    return True


def migrate_component(start, end):
    """
    @summary: 执行“ComponentInTemplate-->TemplateNodeTemplate”的迁移
    param start:ComponentInTemplate表的主键
    param end:ComponentInTemplate表的主键
    return success:是否成功
    """

    # 查询出所有目标记录
    condition = Q()
    condition.children.append(("id__gte", start))
    condition.children.append(("id__lt", end))
    component_in_template_records = ComponentInTemplate.objects.filter(condition)
    # 构建数据源
    data_source_list = []
    for component_in_template_inst in component_in_template_records:
        try:
            template_id = component_in_template_inst.template_id
            pipeline_template = PipelineTemplate.objects.get(template_id=template_id)
            task_template = TaskTemplate.objects.get(pipeline_template__id=pipeline_template.id)
            data_source_list.append(
                {
                    "pipeline_template": pipeline_template,
                    "task_template": task_template,
                    "component_in_template_inst": component_in_template_inst,
                }
            )
        except ObjectDoesNotExist:
            continue

    # 迁移
    for data_source_item in data_source_list:
        component = data_source_item["component_in_template_inst"]
        pipeline_template = data_source_item["pipeline_template"]
        task_template = data_source_item["task_template"]
        kwargs = dict(
            component_code=component.component_code,
            template_id=pipeline_template.id,
            task_template_id=task_template.id,
            project_id=task_template.project.id,
            category=task_template.category,
            node_id=component.node_id,
            is_sub=component.is_sub,
            subprocess_stack=component.subprocess_stack,
            version=component.version,
            template_creator=pipeline_template.creator,
            template_create_time=pipeline_template.create_time,
            template_edit_time=pipeline_template.edit_time,
        )
        try:
            with transaction.atomic():
                templatenodetemplate = TemplateNodeTemplate.objects.create(**kwargs)
                templatenodetemplate.save()
        except Exception:
            logger.warning("TemplateNodeTemplate插入失败，自动回滚")
    return True


def migrate_instance(start, end):
    """
    @summary: 执行“InstanceInPipeline-->TaskflowStatistics”的迁移
    param start:InstanceInPipeline表的主键
    param end:InstanceInPipeline表的主键
    return success:是否成功
    """

    # 查询出所有目标记录
    condition = Q()
    condition.children.append(("id__gte", start))
    condition.children.append(("id__lt", end))
    instance_in_pipeline_records = InstanceInPipeline.objects.filter(condition)

    # 构建数据源字典
    data_source_list = []
    for instance_in_pipeline in instance_in_pipeline_records:
        try:
            instance_id = instance_in_pipeline.instance_id
            pipeline_instance = PipelineInstance.objects.get(instance_id=instance_id)
            taskflow_instance = TaskFlowInstance.objects.get(pipeline_instance__id=pipeline_instance.id)
            pipeline_template = taskflow_instance.pipeline_instance.template
            task_template = TaskTemplate.objects.get(pipeline_template=pipeline_template)
            data_source_list.append(
                {
                    "pipeline_instance": pipeline_instance,
                    "taskflow_instance": taskflow_instance,
                    "pipeline_template": pipeline_template,
                    "task_template": task_template,
                    "instance_in_pipeline": instance_in_pipeline,
                }
            )
        except Exception:
            continue
    # 构建目标数据对象
    for data_source_item in data_source_list:
        instance = data_source_item["pipeline_instance"]
        taskflow_instance = data_source_item["taskflow_instance"]
        task_template = data_source_item["task_template"]
        instance_in_pipeline = data_source_item["instance_in_pipeline"]
        pipeline_template = data_source_item["pipeline_template"]
        kwargs = dict(
            instance_id=instance.id,
            task_instance_id=taskflow_instance.id,
            atom_total=instance_in_pipeline.atom_total,
            subprocess_total=instance_in_pipeline.subprocess_total,
            gateways_total=instance_in_pipeline.gateways_total,
            project_id=taskflow_instance.project.id,
            category=task_template.category,
            template_id=pipeline_template.id,
            creator=instance.creator,
            create_time=instance.create_time,
            start_time=instance.start_time,
            finish_time=instance.finish_time,
            elapsed_time=calculate_elapsed_time(instance.start_time, instance.finish_time),
            create_method=taskflow_instance.create_method,
        )
        try:
            with transaction.atomic():
                taslflowstatistics = TaskflowStatistics.objects.create(**kwargs)
                taslflowstatistics.save()
        except Exception:
            logger.warning("TaskflowStatistics插入失败，自动回滚")
    return True


def migrate_componentExecuteData(start, end):
    """
    @summary: 执行“ComponentExecuteData-->TaskflowExecutedNodeStatistics”的迁移
    param start:ComponentExecuteData表的主键
    param end:ComponentExecuteData表的主键
    return success:是否成功
    """

    # 查询出所有目标记录
    condition = Q()
    condition.children.append(("id__gte", start))
    condition.children.append(("id__lt", end))
    component_execute_data_records = ComponentExecuteData.objects.filter(condition)
    for component in component_execute_data_records:
        try:
            pipeline_instance = PipelineInstance.objects.get(instance_id=component.instance_id)
            taskflow_instance = TaskFlowInstance.objects.get(pipeline_instance=pipeline_instance)
            pipeline_template = pipeline_instance.template
            task_template = TaskTemplate.objects.get(pipeline_template=pipeline_template)
        except ObjectDoesNotExist:
            continue
        kwargs = dict(
            component_code=component.component_code,
            instance_id=pipeline_instance.id,
            task_instance_id=taskflow_instance.id,
            node_id=component.node_id,
            is_sub=component.is_sub,
            subprocess_stack=component.subprocess_stack,
            started_time=component.started_time,
            archived_time=component.archived_time,
            elapsed_time=component.elapsed_time,
            status=component.status,
            is_skip=component.is_skip,
            is_retry=component.is_retry,
            version=component.version,
            template_id=pipeline_template.id,
            task_template_id=task_template.id,
            project_id=taskflow_instance.project.id,
            instance_create_time=pipeline_instance.create_time,
            instance_start_time=pipeline_instance.start_time,
            instance_finish_time=pipeline_instance.finish_time,
        )
        try:
            with transaction.atomic():
                taskflowexcutednodestatistics = TaskflowExecutedNodeStatistics.objects.create(**kwargs)
                taskflowexcutednodestatistics.save()
        except Exception:
            logger.warning("TaskflowExecutedNodeStatistics插入失败，自动回滚")

    return True


@periodic_task(run_every=TzAwareCrontab(minute="*/2"))
def migrate_schedule():
    logger.info("\n**********\nstart the statistics migrate schedule ·········\n**********")
    # 获取迁移上下文
    migrate_log, created = MigrateLog.objects.get_or_create(
        id=1,
        defaults={
            "templateInPipeline_count": TemplateInPipeline.objects.count(),
            "componentInTemplate_count": ComponentInTemplate.objects.count(),
            "instanceInPipeline_count": InstanceInPipeline.objects.count(),
            "componenetExecuteData_count": ComponentExecuteData.objects.count(),
        },
    )
    if created:
        logger.info("start the statistics migrate ··········")
    else:
        logger.info("continue the statistics migrate ·········")

    # 判断是否允许迁移
    if not migrate_log.migrate_switch:
        logger.info("\n**********\nthe migrate_switch is closed\n**********")
        return
    # 打印开始迁移日志

    logger.info(
        """migrate process have started.\n
        table\t templateInPipeline\t ComponentInTemplate\t InstanceInPipeline\t ComponentExecuteData\t
        migrated\t {:0}\t {:1}\t {:2}\t {:3}
        """.format(
            migrate_log.templateInPipeline_migrated,
            migrate_log.componentInTemplate_migrated,
            migrate_log.instanceInPipeline_migrated,
            migrate_log.componenetExecuteData_migrated,
        )
    )

    # TemplateInPipeline迁移并更新上下文
    if not migrate_log.templateInPipeline_finished:
        if migrate_template(migrate_log.templateInPipeline_start, migrate_log.templateInPipeline_end):
            migrate_log.templateInPipeline_start = migrate_log.templateInPipeline_end
            migrate_log.templateInPipeline_end += migrate_log.migrate_num_once
            migrate_log.save()
            # 如果起点大于总量就标记完成
            if migrate_log.templateInPipeline_start > migrate_log.templateInPipeline_count:
                migrate_log.templateInPipeline_finished = True
                migrate_log.save()

    # ComponentInTemplate迁移并更新上下文
    if not migrate_log.componentInTemplate_finished:
        if migrate_component(migrate_log.componentInTemplate_start, migrate_log.componentInTemplate_end):
            migrate_log.componentInTemplate_start = migrate_log.componentInTemplate_end
            migrate_log.componentInTemplate_end += migrate_log.migrate_num_once
            migrate_log.save()
            # 如果起点大于总量就标记完成
            if migrate_log.componentInTemplate_start > migrate_log.componentInTemplate_count:
                migrate_log.componentInTemplate_finished = True
                migrate_log.save()

    # InstanceInPipeline迁移并更新上下文
    if not migrate_log.instanceInPipeline_finished:
        if migrate_instance(migrate_log.instanceInPipeline_start, migrate_log.instanceInPipeline_end):
            migrate_log.instanceInPipeline_start = migrate_log.instanceInPipeline_end
            migrate_log.instanceInPipeline_end += migrate_log.migrate_num_once
            migrate_log.save()
            # 如果起点大于总量就标记完成
            if migrate_log.instanceInPipeline_start > migrate_log.instanceInPipeline_count:
                migrate_log.instanceInPipeline_finished = True
                migrate_log.save()

    # ComponentExecuteData迁移并更新上下文
    if not migrate_log.componenetExecuteData_finished:
        if migrate_componentExecuteData(migrate_log.componentExecuteData_start, migrate_log.componenetExecuteData_end):
            migrate_log.componentExecuteData_start = migrate_log.componenetExecuteData_end
            migrate_log.componenetExecuteData_end += migrate_log.migrate_num_once
            migrate_log.save()
            # 如果起点大于总量就标记完成
            if migrate_log.componentExecuteData_start > migrate_log.componenetExecuteData_count:
                migrate_log.componenetExecuteData_finished = True
                migrate_log.save()

    # 如果所有表都迁移完成就关掉迁移任务
    finished = True
    finished = finished and migrate_log.templateInPipeline_finished
    finished = finished and migrate_log.componentInTemplate_finished
    finished = finished and migrate_log.instanceInPipeline_finished
    finished = finished and migrate_log.componenetExecuteData_finished
    if finished:
        migrate_log.migrate_switch = False
        migrate_log.save()
        logger.info("migrate process has finished ! ")
        return

    logger.info("waiting next migrate process·····")