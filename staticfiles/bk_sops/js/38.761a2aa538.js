(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1174:function(t,e,a){},1427:function(t,e,a){"use strict";a(1174)},589:function(t,e,a){"use strict";a.r(e);a(38),a(37),a(49),a(50);var n=a(16),r=a.n(n),i=a(5),s=a.n(i),o=a(0),c=a.n(o),u=a(4),l=a.n(u),p=(a(127),a(27),a(81),a(67),a(23),a(80),a(43),a(82),a(22),a(26),a(1)),d=a(7),m=a(675),h=a(611),b=a(695),k=a(28),f=a(687),g=a.n(f),v=a(102),_=a(685);function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var w=[{type:"dateRange",key:"queryTime",placeholder:p.a.t("选择日期时间范围"),label:p.a.t("执行开始"),value:["",""]},{type:"select",label:p.a.t("任务分类"),key:"category",loading:!0,placeholder:p.a.t("请选择分类"),list:[],value:""},{type:"input",key:"creator",label:p.a.t("创建人"),placeholder:p.a.t("请输入创建人"),value:""},{type:"input",key:"executor",label:p.a.t("执行人"),placeholder:p.a.t("请输入执行人"),value:""},{type:"select",label:p.a.t("状态"),key:"statusSync",loading:!1,placeholder:p.a.t("请选择状态"),list:[{value:"nonExecution",name:p.a.t("未执行")},{value:"runing",name:p.a.t("未完成")},{value:"finished",name:p.a.t("完成")}],value:""}],j={name:"appmakerTaskHome",components:{Skeleton:m.a,AdvanceSearchForm:b.a,NoData:h.a},mixins:[v.a,_.a],props:["project_id","app_id"],data:function(){var t=this,e=this.$route.query,a=e.page,n=void 0===a?1:a,r=e.limit,i=void 0===r?15:r,s=e.category,o=void 0===s?"":s,u=e.queryTime,l=void 0===u?"":u,d=e.statusSync,m=void 0===d?"":d,h=e.creator,b=void 0===h?"":h,k=e.executor,f=void 0===k?"":k,g=e.keyword,v=void 0===g?"":g;return{firstLoading:!0,listLoading:!1,searchForm:w.map(function(e){return c()(this,t),this.$route.query[e.key]&&(Array.isArray(e.value)?e.value=this.$route.query[e.key].split(","):e.value=this.$route.query[e.key]),e}.bind(this)),isSearchFormOpen:w.some(function(e){return c()(this,t),this.$route.query[e.key]}.bind(this)),isDeleteDialogShow:!1,taskBasicInfoLoading:!0,theDeleteTemplateId:void 0,pending:{delete:!1,authority:!1},appmakerList:[],executeStatus:[],taskCategory:[],pagination:{current:Number(n),count:0,limit:Number(i),"limit-list":[15,30,50,100]},statusList:[{value:"nonExecution",name:p.a.t("未执行")},{value:"running",name:p.a.t("未完成")},{value:"revoked",name:p.a.t("撤销")},{value:"finished",name:p.a.t("完成")}],requestData:{category:o,creator:b,executor:f,statusSync:m,queryTime:l?l.split(","):["",""],taskName:v}}},computed:x({},Object(d.e)({businessTimezone:function(t){return c()(this,void 0),t.businessTimezone}.bind(void 0)})),created:function(){var t=this;return r()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getBizBaseInfo(),t.onSearchInput=k.a.debounce(t.searchInputhandler,500),e.next=4,t.getAppmakerList();case 4:t.firstLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:x(x(x(x(x({},Object(d.b)("taskList/",["loadTaskList"])),Object(d.b)("task/",["getInstanceStatus"])),Object(d.b)("template/",["loadProjectBaseInfo"])),Object(d.d)("template/",["setProjectBaseInfo"])),{},{getAppmakerList:function(){var t=this;return r()(l.a.mark((function e(){var a,n,r,i,s,o,c,u,p,d,m,h,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.listLoading=!0,e.prev=1,a=t.requestData,n=a.queryTime,r=a.category,i=a.creator,s=a.executor,o=a.statusSync,c=a.taskName,e.t0=o,e.next="nonExecution"===e.t0?6:"running"===e.t0?8:"revoked"===e.t0?12:"finished"===e.t0?14:16;break;case 6:return u=!1,e.abrupt("break",16);case 8:return u=!0,p=!1,d=!1,e.abrupt("break",16);case 12:return d=!0,e.abrupt("break",16);case 14:return p=!0,e.abrupt("break",16);case 16:return m={limit:t.pagination.limit,offset:(t.pagination.current-1)*t.pagination.limit,create_method:"app_maker",create_info:t.app_id,q:c,category:r||void 0,pipeline_instance__creator__contains:i||void 0,pipeline_instance__executor__contains:s||void 0,pipeline_instance__is_started:u,pipeline_instance__is_finished:p,pipeline_instance__is_revoked:d,project__id:t.project_id},n[0]&&n[1]&&(m.pipeline_instance__start_time__gte=g.a.tz(n[0],t.businessTimezone).format("YYYY-MM-DD"),m.pipeline_instance__start_time__lte=g.a.tz(n[1],t.businessTimezone).add("1","d").format("YYYY-MM-DD")),e.next=20,t.loadTaskList(m);case 20:h=e.sent,b=h.objects,t.appmakerList=b,t.pagination.count=h.meta.total_count,t.getExecuteStatus("executeStatus",b),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(1),console.log(e.t1);case 30:return e.prev=30,t.listLoading=!1,e.finish(30);case 33:case"end":return e.stop()}}),e,null,[[1,27,30,33]])})))()},getBizBaseInfo:function(){var t=this;return r()(l.a.mark((function e(){var a,n,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.loadProjectBaseInfo();case 3:a=e.sent,t.taskCategory=a.data.task_categories.map(function(t){return c()(this,r),{value:t.value,name:t.name}}.bind(this)),t.setProjectBaseInfo(a.data),t.taskBasicInfoLoading=!1,(n=t.searchForm.find(function(t){return c()(this,r),"category"===t.key}.bind(this))).list=t.taskCategory,n.loading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})))()},onPageChange:function(t){this.pagination.current=t,this.getAppmakerList()},searchInputhandler:function(t){this.requestData.taskName=t,this.pagination.current=1,this.updateUrl(),this.getAppmakerList()},onTaskPermissonCheck:function(t){var e={task:[{id:t.id,name:t.name}],project:[{id:t.project.id,name:t.project.name}]};this.applyForPermission(["task_view"],t.auth_actions,e)},onSearchFormSubmit:function(t){this.requestData=Object.assign({},this.requestData,t),this.pagination.current=1,this.updateUrl(),this.getAppmakerList()},handlePageLimitChange:function(t){this.pagination.limit=t,this.pagination.current=1,this.updateUrl(),this.getAppmakerList()},updateUrl:function(){var t=this,e=this.pagination,a=e.current,n=e.limit,r=this.requestData,i=r.category,s=r.queryTime,o=r.creator,u=r.executor,l=r.statusSync,p=r.taskName,d={limit:n,category:i,creator:o,executor:u,statusSync:l,page:a,queryTime:s.every(function(e){return c()(this,t),e}.bind(this))?s.join(","):"",keyword:p},m={};Object.keys(d).forEach(function(e){c()(this,t);var a=d[e];(a||0===a||!1===a)&&(m[e]=a)}.bind(this)),this.$router.push({name:"appmakerTaskHome",params:{project_id:this.project_id},query:m})}})},O=(a(1427),a(9)),S=Object(O.a)(j,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appmaker-container"},[a("skeleton",{attrs:{loading:t.firstLoading,loader:"commonList"}},[a("div",{staticClass:"list-wrapper"},[a("advance-search-form",{attrs:{id:"appmakerHome",open:t.isSearchFormOpen,"search-form":t.searchForm,"search-config":{placeholder:t.$t("请输入任务名称")}},on:{onSearchInput:t.onSearchInput,submit:t.onSearchFormSubmit}}),t._v(" "),a("div",{staticClass:"appmaker-table-content"},[a("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:!t.firstLoading&&t.listLoading,opacity:1,zIndex:100},expression:"{ isLoading: !firstLoading && listLoading, opacity: 1, zIndex: 100 }"}],attrs:{data:t.appmakerList,pagination:t.pagination},on:{"page-change":t.onPageChange,"page-limit-change":t.handlePageLimitChange}},[a("bk-table-column",{attrs:{label:"ID",prop:"id",width:"80"}}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("任务名称"),"min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.hasPermission(["task_view"],e.row.auth_actions)?a("router-link",{staticClass:"task-name",attrs:{title:e.row.name,to:{name:"appmakerTaskExecute",params:{app_id:e.row.create_info,project_id:e.row.project.id},query:{instance_id:e.row.id,template_id:e.row.template_id}}}},[t._v("\n                                "+t._s(e.row.name)+"\n                            ")]):a("a",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"text-permission-disable",attrs:{title:e.row.name},on:{click:function(a){return t.onTaskPermissonCheck(e.row)}}},[t._v("\n                                "+t._s(e.row.name)+"\n                            ")])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("执行开始"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            "+t._s(e.row.start_time||"--")+"\n                        ")]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("执行结束"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            "+t._s(e.row.finish_time||"--")+"\n                        ")]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("任务类型"),prop:"category_name",width:"140"}}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("创建人"),prop:"creator_name",width:"140"}}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("执行人"),width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            "+t._s(e.row.executor_name||"--")+"\n                        ")]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:t.$t("状态"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"ui-task-status"},[a("span",{class:t.executeStatus[e.$index]&&t.executeStatus[e.$index].cls}),t._v(" "),t.executeStatus[e.$index]?a("span",{staticClass:"task-status-text"},[t._v(t._s(t.executeStatus[e.$index].text))]):t._e()])]}}])}),t._v(" "),a("div",{staticClass:"empty-data",attrs:{slot:"empty"},slot:"empty"},[a("NoData")],1)],1)],1)],1)])],1)}),[],!1,null,"77fa1b1c",null);e.default=S.exports},685:function(t,e,a){"use strict";a(26),a(38),a(37),a(49),a(22),a(50);var n=a(16),r=a.n(n),i=a(0),s=a.n(i),o=a(5),c=a.n(o),u=a(4),l=a.n(u),p=(a(127),a(184),a(7)),d=a(1);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={methods:h(h({},Object(p.b)("task/",["getInstanceStatus"])),{},{getExecuteStatus:function(t,e){var a=this;this[t]=e.map(function(e,n){s()(this,a);var r={};return e.is_expired?(r.cls="expired bk-icon icon-clock-shape",r.text=d.a.t("已过期")):e.is_finished?(r.cls="finished bk-icon icon-check-circle-shape",r.text=d.a.t("完成")):e.is_revoked?(r.cls="revoke common-icon-dark-circle-shape",r.text=d.a.t("撤销")):e.is_started?(r.cls="loading common-icon-loading",this.getExecuteDetail(t,e,n)):(r.cls="created common-icon-dark-circle-shape",r.text=d.a.t("未执行")),r}.bind(this))},getExecuteDetail:function(t,e,a){var n=this;return r()(l.a.mark((function r(){var i,s,o,c;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i={instance_id:e.id,project_id:e.project.id},r.prev=1,r.next=4,n.getInstanceStatus(i);case 4:if(!(s=r.sent).result){r.next=28;break}o=s.data.state,c={},r.t0=o,r.next="RUNNING"===r.t0||"BLOCKED"===r.t0?11:"READY"===r.t0?14:"SUSPENDED"===r.t0?17:"NODE_SUSPENDED"===r.t0?20:"FAILED"===r.t0?23:26;break;case 11:return c.cls="running common-icon-dark-circle-ellipsis",c.text=d.a.t("执行中"),r.abrupt("break",27);case 14:return c.cls="running common-icon-dark-circle-ellipsis",c.text=d.a.t("排队中"),r.abrupt("break",27);case 17:return c.cls="execute common-icon-dark-circle-pause",c.text=d.a.t("暂停"),r.abrupt("break",27);case 20:return c.cls="execute",c.text=d.a.t("节点暂停"),r.abrupt("break",27);case 23:return c.cls="failed common-icon-dark-circle-close",c.text=d.a.t("失败"),r.abrupt("break",27);case 26:c.text=d.a.t("未知");case 27:n[t].splice(a,1,c);case 28:r.next=33;break;case 30:r.prev=30,r.t1=r.catch(1),console.log(r.t1);case 33:case"end":return r.stop()}}),r,null,[[1,30]])})))()}})};e.a=b}}]);