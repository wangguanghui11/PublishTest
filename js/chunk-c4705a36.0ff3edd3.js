(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4705a36"],{4977:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("fruit-console-tables",{ref:"tables",attrs:{topadd:"",batchDelete:!1,stripe:"",editable:"",searchable:"","search-place":"top",columns:e.columns,selectData:[{key:"project",value:e.canSelectProject},{key:"app_name",value:e.canSelectApp},{key:"media_source",value:e.canSelectMediaSource}],loading:e.loading},on:{"on-add":e.handleAdd,"on-delete":e.handleDelete,"on-selection-change":e.handleSelectionChange,"on-search-select-change":e.handleSearchSelectChange},model:{value:e.tableData,callback:function(t){e.tableData=t},expression:"tableData"}}),a("Modal",{attrs:{"footer-hide":!0,width:450},model:{value:e.showWindowBDrawer,callback:function(t){e.showWindowBDrawer=t},expression:"showWindowBDrawer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:e.formHeadIcon,size:18}}),a("b",[e._v(" "+e._s(e.formHeaderName))])],1),a("div",{staticStyle:{"margin-right":"30px"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":110}},[a("FormItem",{attrs:{label:"项目组",prop:"project"}},[a("Select",{attrs:{placeholder:"Select project",filterable:""},on:{"on-change":function(t){return e.handleSelectChange("project")}},model:{value:e.formValidate.project,callback:function(t){e.$set(e.formValidate,"project",t)},expression:"formValidate.project"}},e._l(e.allProject,(function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"App",prop:"app_id"}},[a("Select",{attrs:{placeholder:"Select app",filterable:""},on:{"on-change":function(t){return e.handleSelectChange("app_name")}},model:{value:e.formValidate.app_id,callback:function(t){e.$set(e.formValidate,"app_id",t)},expression:"formValidate.app_id"}},e._l(e.canSelectAddApp,(function(t){return a("Option",{key:t.app_id,attrs:{value:t.app_id}},[e._v(e._s(t.app_name))])})),1)],1),a("FormItem",{attrs:{label:"Media Source",prop:"media_source"}},[a("Select",{attrs:{placeholder:"Select media source"},model:{value:e.formValidate.media_source,callback:function(t){e.$set(e.formValidate,"media_source",t)},expression:"formValidate.media_source"}},e._l(e.allMediaSource,(function(t,r){return a("Option",{key:r,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),a("FormItem",{attrs:{label:"Media App ID",prop:"media_app_id"}},[a("Input",{attrs:{placeholder:"Enter media app id"},model:{value:e.formValidate.media_app_id,callback:function(t){e.$set(e.formValidate,"media_app_id",t)},expression:"formValidate.media_app_id"}})],1),a("FormItem",{staticStyle:{"margin-bottom":"5px"}},[a("Button",{staticStyle:{float:"right","margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("Submit")]),a("Button",{staticStyle:{float:"right"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("Reset")])],1)],1)],1)])],1)],1)},i=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("5df3"),a("20d6"),a("7f7f"),a("ade3")),n=a("cd9b"),p=a("7d75"),o=a("7217"),c=a("2f62");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"media-app-id-mapping",components:{FruitConsoleTables:n["a"],DragDrawer:p["a"]},data:function(){return{columns:[{title:"序号",key:"id",width:60,render:function(e,t){var a=t?t.index+1:"-";return e("div",a)}},{title:"项目组",key:"project",searchable:!0,isSelect:!0},{title:"App-Name",key:"app_name",searchable:!0,isSelect:!0},{title:"Media-Source",key:"media_source",searchable:!0,isSelect:!0},{title:"Media App ID",key:"media_app_id",searchable:!0},{title:"Last-updated-date",key:"last_updated_date"},{title:"Operator",key:"operator"}],allProject:[],allApp:[],allMediaSource:[],tableData:[],canSelectProject:[],canSelectApp:[],canSelectMediaSource:[],canSelectAddApp:[],showWindowBDrawer:!1,showBDrawer3:!1,width1:300,width2:200,placement:!1,draggable:!0,formHeadIcon:"ios-add",formHeaderName:"Add Media App ID",submitAdd:!0,currFormIndex:-1,formValidate:{project:"",app_id:"",app_name:"",media_source:"",media_app_id:""},ruleValidate:{project:[{required:!0,message:"Please select the project",trigger:"change"}],app_id:[{required:!0,message:"Please select the app",trigger:"change"}],media_source:[{required:!0,message:"Please select the media source",trigger:"change"}],media_app_id:[{required:!0,validator:o["a"],trigger:"blur"}]},selectedRows:[],loading:!0}},methods:s(s({},Object(c["b"])(["getAllProject","getAllMediaSource","getAllApp","getAllMediaAppIdMapping","postMediaAppIdMapping","deleteMediaAppIdMapping"])),{},{handleAdd:function(){this.canSelectAddApp=this.allApp,this.$refs["formValidate"].resetFields(),this.formValidate.state=!1,this.formHeadIcon="ios-add",this.formHeaderName="Add Media App ID",this.submitAdd=!0,this.showWindowBDrawer=!0},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){for(var a=t.formValidate.app_id,r="",i=0;i<t.allApp.length;i++)if(a===t.allApp[i].app_id){r=t.allApp[i].app_name;break}var l={project:t.formValidate.project,app_id:a,app_name:r,media_source:t.formValidate.media_source,media_app_id:t.formValidate.media_app_id};t.submitAdd&&t.postMediaAppIdMapping({mapping:l}).then((function(e){t.tableData.push(e),t.showWindowBDrawer=!1,t.$Message.success("Add Success!")})).catch((function(e){t.$Modal.error({title:"Error",content:e.message})}))}}))},handleDelete:function(e){var t=this;this.deleteMediaAppIdMapping({mapping:e.row}).then((function(e){t.$Message.success("Delete Success!"),t.tableData=t.tableData.filter((function(t){return t.mediabuy_app_id_mapping_id!==e.mediabuy_app_id_mapping_id}))})).catch((function(e){t.$Modal.error({title:"Error",content:e.message})}))},handleSelectionChange:function(e){this.selectedRows=e},handleSearchSelectChange:function(e,t){var a=this;if("project"===e)if(this.$refs.tables.clearSearch("app_name"),0===t.length)this.canSelectApp=this.allApp.map((function(e){return e.app_name}));else{this.canSelectApp=[];for(var r=function(e){t.findIndex((function(t){return t===a.allApp[e].project}))>=0&&a.canSelectApp.findIndex((function(t){return t===a.allApp[e].app_name}))<0&&a.canSelectApp.push(a.allApp[e].app_name)},i=0;i<this.allApp.length;++i)r(i)}},handleReset:function(e){this.$refs[e].resetFields(),this.canSelectAddApp=this.allApp,this.formValidate.state=!1},handleSelectChange:function(e){var t=this;if("project"===e&&this.formValidate.project&&""!==this.formValidate.project)this.canSelectAddApp=this.allApp.filter((function(e){return e.project===t.formValidate.project})).map((function(e){return e})),this.formValidate.app_id="";else if("app_name"===e){var a=this.allApp.findIndex((function(e){return e.app_id===t.formValidate.app_id}));a>=0&&(this.formValidate.project=this.allApp[a].project)}}}),computed:{placementComputed:function(){return this.placement?"left":"right"}},mounted:function(){var e=this;Promise.all([this.getAllProject(),this.getAllApp(),this.getAllMediaSource(),this.getAllMediaAppIdMapping()]).then((function(t){e.allProject=t[0],e.allApp=t[1],e.allMediaSource=t[2].filter((function(e){return"facebook"===e.id||"vungle"===e.id||"fyber"===e.id})),e.tableData=t[3],e.canSelectProject=e.allProject.filter((function(t){return e.allApp.findIndex((function(e){return e.project===t}))>=0})),e.canSelectApp=e.allApp.map((function(e){return e.app_name})),e.canSelectMediaSource=e.allMediaSource.map((function(e){return e.name})),e.canSelectAddApp=e.allApp,e.loading=!1})),this.$store.state.user.access.indexOf("account_and_authority")>=0&&this.columns.push({title:"Handle",key:"handle",options:["delete"]})}},m=u,f=a("2877"),h=Object(f["a"])(m,r,i,!1,null,null,null);t["default"]=h.exports},7217:function(e,t,a){"use strict";function r(e,t,a){return t?!(t.indexOf(" ")>=0)||a(new Error("不能包含空格")):a(new Error("不能为空"))}a.d(t,"a",(function(){return r}))}}]);