(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1176:function(e,t,a){},1429:function(e,t,a){"use strict";a(1176)},590:function(e,t,a){"use strict";a.r(t);a(26),a(49),a(50);var n=a(16),r=a.n(n),i=a(0),o=a.n(i),s=a(5),l=a.n(s),c=a(4),u=a.n(c),d=(a(67),a(23),a(82),a(37),a(27),a(81),a(314),a(22),a(24),a(127),a(38),a(187),a(1)),p=a(1109),f=a.n(p),b=a(6),g=a(7),m=a(102),v=a(666);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={name:"Mandate",components:{BkUserSelector:f.a,PageHeader:v.a},mixins:[m.a],props:{id:[Number,String]},data:function(){return{projectLoading:!1,project:{},descEditing:!1,descData:{value:""},agent:{},editingAgent:{},isAgentDialogShow:!1,agentLoading:!1,staffGroup:[],staffGroupDetail:{},deletingStaffDetail:{},isStaffDialogShow:!1,isDeleteStaffDialogShow:!1,staffGroupLoading:!1,labelList:[],labelLoading:!1,isLabelDialogShow:!1,deletingLabelDetail:{},isDeleteLabelDialogShow:!1,labelDetail:{},labelCount:{},userApi:"".concat(window.MEMBER_SELECTOR_DATA_HOST,"/api/c/compapi/v2/usermanage/fs_list_users/"),colorDropdownShow:!1,colorList:b.d,darkColorList:b.b,descRules:{value:[{max:512,message:d.a.t("项目描述不能超过")+512+d.a.t("个字符"),trigger:"blur"}]},schemeNameRules:{name:[{required:!0,message:d.a.t("必填项"),trigger:"blur"},{max:50,message:d.a.t("分组名称不能超过")+50+d.a.t("个字符"),trigger:"blur"}]},labelRules:{color:[{required:!0,message:d.a.t("必填项"),trigger:"blur"}],name:[{required:!0,message:d.a.t("必填项"),trigger:"blur"},{max:50,message:d.a.t("标签名称不能超过")+50+d.a.t("个字符"),trigger:"blur"}]},pending:{desc:!1,agent:!1,staff:!1,delete:!1,label:!1,deleteLabel:!1}}},computed:_({},Object(g.e)({username:function(e){return o()(this,void 0),e.username}.bind(void 0)})),created:function(){this.getProjectDetail(),this.getAgentData(),this.getStaffGroupData(),this.getTplLabels()},methods:_(_({},Object(g.b)("project",["loadProjectDetail","getProjectConfig","updateProject","updateProjectConfig","getProjectStaffGroupList","createProjectStaffGroup","updateProjectStaffGroup","delProjectStaffGroup","getProjectLabelsWithDefault","updateTemplateLabel","createTemplateLabel","delTemplateLabel","getlabelsCitedCount"])),{},{getProjectDetail:function(){var e=this;return r()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.projectLoading=!0,t.prev=1,t.next=4,e.loadProjectDetail(e.id);case 4:e.project=t.sent,e.descData.value=e.project.desc,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,e.projectLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},getAgentData:function(){var e=this;return r()(u.a.mark((function t(){var a,n,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.agentLoading=!0,t.prev=1,t.next=4,e.getProjectConfig(e.id);case 4:(a=t.sent).result&&(n=a.data,r=n.executor_proxy,i=n.executor_proxy_exempts,e.agent={executor_proxy:r,executor_proxy_exempts:i}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,e.agentLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},onOpenDescEdit:function(){var e=this;if(this.hasPermission(["project_edit"],this.project.auth_actions))this.descEditing=!0,this.$nextTick(function(){o()(this,e),this.$refs.descInput.focus()}.bind(this));else{var t={project:[{id:this.project.id,name:this.project.name}]};this.applyForPermission(["project_edit"],this.project.auth_actions,t)}},onEditDesc:function(){var e=this;this.$refs.descForm.validate().then(function(){var t=r()(u.a.mark((function t(a){var n,r,i,o,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=19;break}if(!e.pending.desc){t.next=3;break}return t.abrupt("return");case 3:return e.pending.desc=!0,t.prev=4,n=e.project,r=n.id,i=n.name,o=n.timeZone,s={id:r,name:i,time_zone:o,desc:e.descData.value},t.next=9,e.updateProject(s);case 9:e.project=t.sent,e.descEditing=!1,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0);case 16:return t.prev=16,e.pending.desc=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[4,13,16,19]])})));return function(e){return t.apply(this,arguments)}}())},updateAgentData:function(){var e=this;return r()(u.a.mark((function t(){var a,n,r,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.pending.agent){t.next=2;break}return t.abrupt("return");case 2:return e.pending.agent=!0,t.prev=3,a={id:e.id,executor_proxy:e.editingAgent.executor_proxy.join(","),executor_proxy_exempts:e.editingAgent.executor_proxy_exempts.join(",")},t.next=7,e.updateProjectConfig(a);case 7:(n=t.sent).result&&(e.isAgentDialogShow=!1,r=n.data,i=r.executor_proxy,o=r.executor_proxy_exempts,e.agent={executor_proxy:i,executor_proxy_exempts:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0);case 14:return t.prev=14,e.pending.agent=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[3,11,14,17]])})))()},getStaffGroupData:function(){var e=this;return r()(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.staffGroupLoading=!0,t.prev=1,t.next=4,e.getProjectStaffGroupList({project_id:e.id});case 4:(a=t.sent).result&&(e.staffGroup=a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,e.staffGroupLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},onEditAgent:function(){var e=this;this.isAgentDialogShow=!0,this.editingAgent={executor_proxy:this.agent.executor_proxy.split(",").filter(function(t){return o()(this,e),t.trim()}.bind(this)),executor_proxy_exempts:this.agent.executor_proxy_exempts.split(",").filter(function(t){return o()(this,e),t.trim()}.bind(this))}},onEditStaffGroup:function(e,t){var a=this,n={name:"",members:[]};"edit"===e&&(n={type:e,id:t.id,name:t.name,members:t.members.split(",").filter(function(e){return o()(this,a),e.trim()}.bind(this))});this.staffGroupDetail=n,this.isStaffDialogShow=!0},editStaffGroupConfirm:function(){var e=this;if(!this.pending.staff){this.pending.staff=!0;try{this.$refs.schemeForm.validate().then(function(){var t=r()(u.a.mark((function t(a){var n,r,i,o,s,l,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=14;break}if(r=e.staffGroupDetail,i=r.type,o=r.id,s=r.name,l=r.members,c={data:{name:s,members:l.join(","),project_id:e.id}},"edit"!==i){t.next=10;break}return c.id=o,t.next=7,e.updateProjectStaffGroup(c);case 7:n=t.sent,t.next=13;break;case 10:return t.next=12,e.createProjectStaffGroup(c);case 12:n=t.sent;case 13:n.result&&(e.isStaffDialogShow=!1,e.getStaffGroupData());case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(e){console.log(e)}finally{this.pending.staff=!1}}},onDelStaffGroup:function(e){this.deletingStaffDetail=_({},e),this.isDeleteStaffDialogShow=!0},deleteStaffGroupConfirm:function(){var e=this;return r()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.pending.staff){t.next=2;break}return t.abrupt("return");case 2:return e.pending.staff=!0,t.prev=3,t.next=6,e.delProjectStaffGroup(e.deletingStaffDetail.id);case 6:t.sent.result&&(e.isDeleteStaffDialogShow=!1,e.getStaffGroupData()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:return t.prev=13,e.pending.staff=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,10,13,16]])})))()},getTplLabels:function(){var e=this;return r()(u.a.mark((function t(){var a,n,r,i,s,l=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.labelLoading=!0,e.labelCount={},t.prev=2,t.next=5,e.getProjectLabelsWithDefault(e.id);case 5:if(!(a=t.sent).result){t.next=17;break}if(n=[],r=[],a.data.forEach(function(e){o()(this,l),e.is_default?n.push(e):r.push(e)}.bind(this)),e.labelList=[].concat(r,n),!(a.data.length>0)){t.next=17;break}return i=a.data.map(function(e){return o()(this,l),e.id}.bind(this)).join(","),t.next=15,e.getlabelsCitedCount({ids:i,project_id:e.id});case 15:(s=t.sent).result&&(e.labelCount=s.data);case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),console.log(t.t0);case 22:return t.prev=22,e.labelLoading=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,this,[[2,19,22,25]])})))()},onEditLabel:function(e,t){this.labelDetail="edit"===e?_(_({},t),{},{type:"edit"}):{color:"#1c9574",name:"",description:""},this.isLabelDialogShow=!0,this.colorDropdownShow=!1},onSelectColor:function(e){this.labelDetail.color=e},editLabelConfirm:function(){var e=this;if(!this.pending.label){this.pending.label=!0;try{this.$refs.labelForm.validate().then(function(){var t=r()(u.a.mark((function t(a){var n,r,i,o,s,l,c,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=14;break}if(r=e.labelDetail,i=r.type,o=r.color,s=r.name,l=r.description,c=r.id,d={creator:e.username,project_id:Number(e.id),color:o,name:s,description:l},"edit"!==i){t.next=10;break}return d.id=c,t.next=7,e.updateTemplateLabel(d);case 7:n=t.sent,t.next=13;break;case 10:return t.next=12,e.createTemplateLabel(d);case 12:n=t.sent;case 13:n.result&&(e.isLabelDialogShow=!1,e.getTplLabels());case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(e){console.log(e)}finally{this.pending.label=!1}}},onDelLabel:function(e){this.deletingLabelDetail=_({},e),this.isDeleteLabelDialogShow=!0},deleteLabelGroupConfirm:function(){var e=this;return r()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.pending.deleteLabel){t.next=2;break}return t.abrupt("return");case 2:return e.pending.deleteLabel=!0,t.prev=3,t.next=6,e.delTemplateLabel(e.deletingLabelDetail.id);case 6:t.sent.result&&(e.isDeleteLabelDialogShow=!1,e.getTplLabels()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:return t.prev=13,e.pending.deleteLabel=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,10,13,16]])})))()}})},k=(a(1429),a(9)),w=Object(k.a)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mandate-wrapper"},[a("page-header",{staticClass:"mandate-header"},[a("i",{staticClass:"back-icon bk-icon icon-arrows-left",on:{click:function(t){return e.$router.push({name:"projectHome"})}}}),e._v(" "),a("span",[e._v(e._s(e.$t("项目配置")))])]),e._v(" "),a("div",{staticClass:"mandate-page-content"},[a("section",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.projectLoading,opacity:1,zIndex:100},expression:"{ isLoading: projectLoading, opacity: 1, zIndex: 100 }"}],staticClass:"project-info"},[e.project.name?[a("div",{staticClass:"icon"},[e._v(e._s(e.project.name[0]))])]:e._e(),e._v(" "),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"title"},[a("h4",[e._v(e._s(e.project.name))]),e._v(" "),a("div",{staticClass:"ext-info"},[a("span",[e._v("ID "),a("span",{staticClass:"value"},[e._v(e._s(e.project.id))])]),e._v(" "),a("span",[e._v("CC_ID "),a("span",{staticClass:"value"},[e._v(e._s(e.project.bk_biz_id))])]),e._v(" "),a("span",[e._v("时区 "),a("span",{staticClass:"value"},[e._v(e._s(e.project.time_zone))])])])]),e._v(" "),a("div",{staticClass:"desc"},[e.descEditing?a("bk-form",{ref:"descForm",attrs:{model:e.descData,rules:e.descRules}},[a("bk-form-item",{attrs:{"label-width":0,property:"value"}},[a("bk-input",{ref:"descInput",attrs:{type:"textarea",rows:4},on:{blur:e.onEditDesc},model:{value:e.descData.value,callback:function(t){e.$set(e.descData,"value",t)},expression:"descData.value"}})],1)],1):[a("span",[e._v(e._s(e.project.desc||"--"))]),e._v(" "),a("span",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!e.hasPermission(["project_edit"],e.project.auth_actions)},expression:"{ active: !hasPermission(['project_edit'], project.auth_actions) }"}],staticClass:"common-icon-edit icon-btn",class:{"text-permission-disable":!e.hasPermission(["project_edit"],e.project.auth_actions)},on:{click:e.onOpenDescEdit}})]],2)])],2),e._v(" "),a("section",{staticClass:"mandate-section"},[a("div",{staticClass:"title"},[e._v("\n                "+e._s(e.$t("执行代理人设置"))+"\n                "),a("bk-button",{attrs:{theme:"primary"},on:{click:e.onEditAgent}},[e._v(e._s(e.$t("编辑")))])],1),e._v(" "),a("bk-form",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.agentLoading,opacity:1,zIndex:100},expression:"{ isLoading: agentLoading, opacity: 1, zIndex: 100 }"}],staticClass:"agent-form"},[a("bk-form-item",{attrs:{label:e.$t("执行代理人")}},[a("div",{staticClass:"user-list"},[e._v(e._s(e.agent.executor_proxy||"--"))])]),e._v(" "),a("bk-form-item",{attrs:{label:e.$t("白名单用户")}},[a("div",{staticClass:"user-list"},[e._v(e._s(e.agent.executor_proxy_exempts||"--"))])])],1)],1),e._v(" "),a("section",{staticClass:"mandate-section"},[a("div",{staticClass:"title"},[e._v("\n                "+e._s(e.$t("人员分组设置"))+"("+e._s(e.staffGroup.length)+")\n                "),a("bk-button",{attrs:{theme:"primary"},on:{click:function(t){return e.onEditStaffGroup("create")}}},[e._v(e._s(e.$t("增加分组")))])],1),e._v(" "),a("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.staffGroupLoading,opacity:1,zIndex:100},expression:"{ isLoading: staffGroupLoading, opacity: 1, zIndex: 100 }"}],attrs:{data:e.staffGroup}},[a("bk-table-column",{attrs:{label:e.$t("序号"),width:150,property:"id"}}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("分组名称"),width:300,property:"name"}}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("成员")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(t.row.members||"--")+"\n                    ")]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("操作"),width:300},scopedSlots:e._u([{key:"default",fn:function(t){return[a("bk-button",{attrs:{text:!0},on:{click:function(a){return e.onEditStaffGroup("edit",t.row)}}},[e._v(e._s(e.$t("编辑")))]),e._v(" "),a("bk-button",{attrs:{text:!0},on:{click:function(a){return e.onDelStaffGroup(t.row)}}},[e._v(e._s(e.$t("删除")))])]}}])})],1)],1),e._v(" "),a("section",{staticClass:"mandate-section"},[a("div",{staticClass:"title"},[e._v("\n                "+e._s(e.$t("标签设置"))+"("+e._s(e.labelList.length)+")\n                "),a("bk-button",{attrs:{theme:"primary"},on:{click:function(t){return e.onEditLabel("create")}}},[e._v(e._s(e.$t("新增标签")))])],1),e._v(" "),a("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.labelLoading,opacity:1,zIndex:100},expression:"{ isLoading: labelLoading, opacity: 1, zIndex: 100 }"}],attrs:{data:e.labelList}},[a("bk-table-column",{attrs:{label:e.$t("标签名称"),property:"name","min-width":150},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"label-name",style:{background:t.row.color,color:e.darkColorList.includes(t.row.color)?"#fff":"#262e4f"}},[e._v("\n                            "+e._s(t.row.name))])]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("标签描述"),"min-width":300},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(t.row.description||"--")+"\n                    ")]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("标签引用"),width:200},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(e.labelCount[t.row.id]?e.labelCount[t.row.id].length:0)+e._s(e.$t("个流程在引用"))+"\n                    ")]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("系统默认标签"),width:300},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(t.row.is_default?e.$t("是"):e.$t("否"))+"\n                    ")]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:e.$t("操作"),width:200},scopedSlots:e._u([{key:"default",fn:function(t){return[a("bk-popover",{attrs:{disabled:!t.row.is_default,content:e.$t("默认标签不支持编辑删除")}},[a("bk-button",{attrs:{text:!0,disabled:t.row.is_default},on:{click:function(a){return e.onEditLabel("edit",t.row)}}},[e._v("\n                                "+e._s(e.$t("编辑"))+"\n                            ")])],1),e._v(" "),a("bk-popover",{attrs:{disabled:!t.row.is_default,content:e.$t("默认标签不支持编辑删除")}},[a("bk-button",{attrs:{text:!0,disabled:t.row.is_default},on:{click:function(a){return e.onDelLabel(t.row)}}},[e._v("\n                                "+e._s(e.$t("删除"))+"\n                            ")])],1)]}}])})],1)],1)]),e._v(" "),a("bk-dialog",{attrs:{width:"600","ext-cls":"common-dialog","header-position":"left","render-directive":"if","mask-close":!1,"auto-close":!1,title:e.$t("执行代理人设置"),loading:e.pending.agent,value:e.isAgentDialogShow},on:{confirm:e.updateAgentData,cancel:function(t){e.isAgentDialogShow=!1}}},[a("bk-form",{staticClass:"agent-dialog",attrs:{model:e.editingAgent}},[a("bk-form-item",{attrs:{label:e.$t("执行代理人")}},[a("bk-user-selector",{attrs:{api:e.userApi,multiple:!1},model:{value:e.editingAgent.executor_proxy,callback:function(t){e.$set(e.editingAgent,"executor_proxy",t)},expression:"editingAgent.executor_proxy"}})],1),e._v(" "),a("bk-form-item",{attrs:{label:e.$t("白名单用户")}},[a("bk-user-selector",{attrs:{"fixed-height":!1,api:e.userApi},model:{value:e.editingAgent.executor_proxy_exempts,callback:function(t){e.$set(e.editingAgent,"executor_proxy_exempts",t)},expression:"editingAgent.executor_proxy_exempts"}})],1)],1)],1),e._v(" "),a("bk-dialog",{attrs:{width:"600","ext-cls":"common-dialog","header-position":"left","render-directive":"if","mask-close":!1,"auto-close":!1,title:e.$t("人员分组设置"),loading:e.pending.staff,value:e.isStaffDialogShow},on:{confirm:e.editStaffGroupConfirm,cancel:function(t){e.isStaffDialogShow=!1}}},[a("bk-form",{ref:"schemeForm",staticClass:"scheme-dialog",attrs:{model:e.staffGroupDetail,rules:e.schemeNameRules}},[a("bk-form-item",{attrs:{property:"name",label:e.$t("分组名称"),required:!0}},[a("bk-input",{model:{value:e.staffGroupDetail.name,callback:function(t){e.$set(e.staffGroupDetail,"name",t)},expression:"staffGroupDetail.name"}})],1),e._v(" "),a("bk-form-item",{attrs:{label:e.$t("成员")}},[a("bk-user-selector",{attrs:{api:e.userApi},model:{value:e.staffGroupDetail.members,callback:function(t){e.$set(e.staffGroupDetail,"members",t)},expression:"staffGroupDetail.members"}})],1)],1)],1),e._v(" "),a("bk-dialog",{attrs:{"mask-close":!1,"auto-close":!1,"header-position":"left","ext-cls":"common-dialog",title:e.$t("删除"),width:"400",loading:e.pending.delete,value:e.isDeleteStaffDialogShow},on:{confirm:e.deleteStaffGroupConfirm,cancel:function(t){e.isDeleteStaffDialogShow=!1}}},[a("div",{staticClass:"delete-dialog"},[e._v("\n            "+e._s(e.$t("确认删除")+'"'+e.deletingStaffDetail.name+'"?')+"\n        ")])]),e._v(" "),a("bk-dialog",{attrs:{width:"600","ext-cls":"common-dialog","header-position":"left","render-directive":"if","mask-close":!1,"auto-close":!1,title:e.$t("标签设置"),loading:e.pending.label,value:e.isLabelDialogShow},on:{confirm:e.editLabelConfirm,cancel:function(t){e.isLabelDialogShow=!1}}},[a("bk-form",{ref:"labelForm",staticClass:"label-dialog",attrs:{model:e.labelDetail,rules:e.labelRules}},[a("bk-form-item",{attrs:{property:"color",label:e.$t("颜色"),required:!0}},[a("bk-dropdown-menu",{ref:"dropdown",staticClass:"color-dropdown",attrs:{trigger:"click"},on:{show:function(t){e.colorDropdownShow=!0},hide:function(t){e.colorDropdownShow=!1}}},[a("div",{staticClass:"dropdown-trigger-btn",attrs:{slot:"dropdown-trigger"},slot:"dropdown-trigger"},[a("span",{staticClass:"color-block",style:{background:e.labelDetail.color}}),e._v(" "),a("i",{class:["bk-icon icon-angle-down",{"icon-flip":e.colorDropdownShow}]})]),e._v(" "),a("div",{staticClass:"color-list",attrs:{slot:"dropdown-content"},slot:"dropdown-content"},[a("div",{staticClass:"tip"},[e._v(e._s(e.$t("选择颜色")))]),e._v(" "),a("div",e._l(e.colorList,(function(t){return a("span",{key:t,staticClass:"color-item color-block",style:{background:t},on:{click:function(a){e.labelDetail.color=t}}})})),0)])])],1),e._v(" "),a("bk-form-item",{attrs:{property:"name",label:e.$t("名称"),required:!0}},[a("bk-input",{model:{value:e.labelDetail.name,callback:function(t){e.$set(e.labelDetail,"name",t)},expression:"labelDetail.name"}})],1),e._v(" "),a("bk-form-item",{attrs:{label:e.$t("描述")}},[a("bk-input",{attrs:{type:"textarea"},model:{value:e.labelDetail.description,callback:function(t){e.$set(e.labelDetail,"description",t)},expression:"labelDetail.description"}})],1)],1)],1),e._v(" "),a("bk-dialog",{attrs:{"mask-close":!1,"auto-close":!1,"header-position":"left","ext-cls":"common-dialog",title:e.$t("删除"),width:"400",loading:e.pending.deleteLabel,value:e.isDeleteLabelDialogShow},on:{confirm:e.deleteLabelGroupConfirm,cancel:function(t){e.isDeleteLabelDialogShow=!1}}},[a("div",{staticClass:"delete-dialog"},[e._v("\n            "+e._s(e.$t("确认删除")+'"'+e.deletingLabelDetail.name+'"?')+"\n        ")])])],1)}),[],!1,null,"589578fa",null);t.default=w.exports},645:function(e,t,a){},666:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(23),a(621),{name:"PageHeader",inject:["reload"],props:{selfReload:{type:Boolean,default:!1},tabList:{type:Array,default:function(){return r()(this,void 0),[]}.bind(void 0)}},methods:{tabChange:function(e){if(this.$route.name===e.routerName)return this.selfReload?this.$emit("tabChange",e):this.reload(),!1;this.$router.push({name:e.routerName,params:e.params,query:e.query})}}}),o=(a(667),a(9)),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[e._t("default",(function(){return[e.tabList.length?a("ul",{staticClass:"tab-list"},e._l(e.tabList,(function(t,n){return a("li",{key:n,class:["tab-item",{active:e.$route.name===t.routerName}],on:{click:function(a){return e.tabChange(t)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])})),0):e._e()]})),e._v(" "),a("div",{staticClass:"expand"},[e._t("expand")],2)],2)}),[],!1,null,"7b08c71f",null);t.a=s.exports},667:function(e,t,a){"use strict";a(645)}}]);