# Generated by Django 2.2.24 on 2021-09-15 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="MigrateLog",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "desc",
                    models.CharField(
                        default="migrate_switch=1是启动迁移，0为停止迁移；migrate_num_once控制单次迁移量，默认为500。", max_length=128
                    ),
                ),
                ("migrate_switch", models.BooleanField(default=True, verbose_name="迁移任务开关,默认为打开状态")),
                ("migrate_num_once", models.IntegerField(default=500, verbose_name="单次数据迁移量,默认为500")),
                ("template_in_pipeline_start", models.IntegerField(default=1, verbose_name="template迁移起点")),
                ("component_in_template_start", models.IntegerField(default=1, verbose_name="componet迁移起点")),
                ("instance_in_pipeline_start", models.IntegerField(default=1, verbose_name="instance迁移起点")),
                ("component_execute_data_start", models.IntegerField(default=1, verbose_name="componentExecute迁移起点")),
                ("template_in_pipeline_migrated", models.IntegerField(default=0, verbose_name="template已迁移量")),
                ("component_in_template_migrated", models.IntegerField(default=0, verbose_name="component已迁移量")),
                ("instance_in_pipeline_migrated", models.IntegerField(default=0, verbose_name="instance已迁移量")),
                (
                    "component_execute_data_migrated",
                    models.IntegerField(default=0, verbose_name="componentExecute已迁移量"),
                ),
                ("template_in_pipeline_finished", models.IntegerField(default=False, verbose_name="template迁移状态")),
                ("component_in_template_finished", models.IntegerField(default=False, verbose_name="component迁移状态")),
                ("instance_in_pipeline_finished", models.IntegerField(default=False, verbose_name="instance迁移状态")),
                (
                    "component_execute_data_finished",
                    models.IntegerField(default=False, verbose_name="componentExecute迁移状态"),
                ),
                ("template_in_pipeline_end", models.IntegerField(default=500, verbose_name="template迁移终点")),
                ("component_in_template_end", models.IntegerField(default=500, verbose_name="component迁移终点")),
                ("instance_in_pipeline_end", models.IntegerField(default=500, verbose_name="instance迁移终点")),
                ("component_execute_data_end", models.IntegerField(default=500, verbose_name="componentExecute迁移终点")),
                ("template_in_pipeline_count", models.IntegerField(default=0, verbose_name="template数据总量")),
                ("component_in_template_count", models.IntegerField(default=0, verbose_name="component数据总量")),
                ("instance_in_pipeline_count", models.IntegerField(default=0, verbose_name="instance数据总量")),
                ("component_execute_data_count", models.IntegerField(default=0, verbose_name="componentExecute数据总量")),
            ],
        ),
    ]
