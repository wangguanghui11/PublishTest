(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5d0a"],{"1b03":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",[r("fruit-console-tables",{ref:"tables",attrs:{topadd:"",stripe:"",editable:"",searchable:"",batchDelete:!1,"search-place":"top",selectData:[{key:"app_name",value:t.canSelectApp}],columns:t.columns,loading:t.loading},on:{"on-edit":t.handleEdit,"on-add":t.handleAdd,"on-delete":t.handleDelete,"on-batch-delete":t.handleBatchDelete,"on-selection-change":t.handleSelectionChange},model:{value:t.allCountryGroup,callback:function(e){t.allCountryGroup=e},expression:"allCountryGroup"}}),r("Modal",{attrs:{"footer-hide":!0,width:450},model:{value:t.showDragDrawer,callback:function(e){t.showDragDrawer=e},expression:"showDragDrawer"}},[r("div",{staticStyle:{"margin-right":"30px"}},[r("country-group-form",{attrs:{"row-event":t.rowEvent,"form-model":t.countryGroup,"all-app":t.allApp,"all-country":t.allCountry,"all-country-group":t.allCountryGroup,"form-show":t.showDragDrawer},on:{"on-submit":t.handleSubmit}})],1)])],1)],1)},n=[],a=(r("8e6e"),r("456d"),r("ac6a"),r("5df3"),r("28a5"),r("7f7f"),r("ade3")),u=r("cd9b"),l=r("7d75"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{"border-bottom":"1px solid #e8eaec","padding-top":"1px","padding-right":"16px","padding-bottom":"14px","padding-left":"16px","line-height":"1","margin-bottom":"16px","font-size":"14px"},attrs:{slot:"header"},slot:"header"},[r("Icon",{attrs:{type:"add"===t.rowEvent.name?"ios-add":"ios-create",size:18}}),r("b",[t._v(" "+t._s("add"===t.rowEvent.name?"Add country group":"Update country group"))])],1),r("Form",{ref:"formx",attrs:{model:t.formModel,rules:t.ruleValidate,"label-width":140}},[r("FormItem",{attrs:{label:"App name",prop:"app_id"}},[r("Select",{attrs:{placeholder:"Select app",disabled:"add"!==t.rowEvent.name,filterable:""},model:{value:t.formModel.app_id,callback:function(e){t.$set(t.formModel,"app_id",e)},expression:"formModel.app_id"}},t._l(t.allApp,(function(e){return r("Option",{key:e.app_id,attrs:{value:e.app_id}},[t._v(t._s(e.app_name))])})),1)],1),r("FormItem",{attrs:{label:"Country Group Name",prop:"country_group_name"}},[r("Input",{attrs:{placeholder:"Enter country group name"},model:{value:t.formModel.country_group_name,callback:function(e){t.$set(t.formModel,"country_group_name",e)},expression:"formModel.country_group_name"}})],1),r("FormItem",{attrs:{label:"Country Group",prop:"country_group"}},[r("RadioGroup",{on:{"on-change":t.handleCountryTypeChange},model:{value:t.countryType,callback:function(e){t.countryType=e},expression:"countryType"}},[r("Radio",{attrs:{label:"default"}},[t._v("Default")]),r("Radio",{attrs:{label:"select"}},[t._v("Custom")])],1),r("Select",{directives:[{name:"show",rawName:"v-show",value:"select"===t.countryType,expression:"countryType==='select'"}],attrs:{multiple:"",filterable:"",placeholder:"Select country"},model:{value:t.formModel.country_group,callback:function(e){t.$set(t.formModel,"country_group",e)},expression:"formModel.country_group"}},t._l(t.allCountry,(function(e){return r("Option",{key:e.country_id,attrs:{value:e.country_id}},[t._v(t._s(e.country_name))])})),1)],1),r("FormItem",{staticStyle:{"margin-bottom":"5px"}},[r("Button",{staticStyle:{float:"right","margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formx")}}},[t._v("Submit")]),r("Button",{staticStyle:{float:"right"},on:{click:function(e){return t.handleReset("formx")}}},[t._v("Reset")])],1)],1)],1)},c=[],p=(r("4f7f"),r("20d6"),{name:"country-group-form",props:{rowEvent:{type:Object,default:function(){return{name:"",country_group_id:""}}},formModel:{type:Object,default:function(){return{app_id:"",country_group_id:"",country_group_name:"",country_group:[]}}},allApp:{type:Array,default:function(){return[]}},allCountry:{type:Array,default:function(){return[]}},allCountryGroup:{type:Array,default:function(){return[]}},formShow:{type:Boolean,default:!1}},data:function(){return{ruleValidate:{app_id:[{required:!0,message:"Please select the app",trigger:"change"}],country_group_name:[{required:!0,message:"The country group name cannot be empty",trigger:"blur"}],country_group:[{required:!1,type:"array",message:"The country group list cannot be empty"}]},countryType:"default"}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(t){if("default"===e.countryType)e.formModel.country_group=["default"];else{if(0===e.formModel.country_group.length)return void e.$Modal.error({title:"Error",content:"The country group list cannot be empty!"});if(e.formModel.country_group.findIndex((function(t){return"default"===t}))>=0)return void e.$Modal.error({title:"Error",content:"The country group list cannot be empty!"})}var r=e.validateForm(e.formModel.app_id,e.formModel.country_group);!1===r?e.$Modal.error({title:"Error",content:"The combination of App and CountryGroup is illegal!"}):e.$emit("on-submit",e.formModel)}}))},handleReset:function(t){this.$refs[t].resetFields(),this.formModel.country_group=[]},handleCountryTypeChange:function(t){},validateForm:function(t,e){var r=new Set(e);return this.allCountry&&this.allCountry.length>0&&this.allCountry.forEach((function(e,o){if(r.has(e.country_id)&&e.app_id!==t)return!1})),!0}},computed:{showAdd:function(){return"add"===this.rowEvent.name&&!0===this.formShow}},watch:{showAdd:function(t,e){!0===t&&this.handleReset("formx")},formModel:function(){this.formModel.country_group.findIndex((function(t){return"default"===t}))>=0?this.countryType="default":this.countryType="select"}}}),d=p,s=r("2877"),y=Object(s["a"])(d,i,c,!1,null,null,null),f=y.exports,h=r("2f62");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"country-group",components:{FruitConsoleTables:u["a"],DragDrawer:l["a"],CountryGroupForm:f},data:function(){var t=this;return{initData:!1,rowEvent:{name:"",country_group_id:""},columns:[{title:"序号",key:"id",width:60,render:function(t,e){var r=e?e.index+1:"-";return t("div",r)}},{title:"App-Name",key:"app_name",searchable:!0,isSelect:!0},{title:"Country-Group-Name",key:"country_group_name",searchable:!0},{title:"Country-Group",key:"country_group",render:function(e,r){for(var o=r.row.country_group,n=[],a=0;a<o.length;a++){var u="";if("default"===o[a])u="Default";else for(var l=0;l<t.allCountry.length;l++)if(o[a]===t.allCountry[l].country_id){u=t.allCountry[l].country_name;break}n.push(e("Button",{props:{type:"success",ghost:!0,size:"small"}},[e("Icon",{props:{type:"md-flag",size:16,color:"Default"===u?"green":"#FF0000"}}),e("span",u)]))}return e("div",n)}},{title:"Last-updated-date",key:"last_updated_date"},{title:"Operator",key:"operator"},{title:"Handle",key:"handle",options:["edit","delete"]}],showDragDrawer:!1,width1:360,placement:!1,draggable:!0,countryGroup:{},selectedRows:[],canSelectApp:[],loading:!0}},methods:g(g({},Object(h["b"])(["getAllApp","getAllCountry","getAllCountryGroup","postCountryGroup","putCountryGroup","deleteCountryGroup","batchDeleteCountryGroup"])),{},{handleAdd:function(){this.rowEvent={name:"add",country_group_id:""}},handleEdit:function(t){this.rowEvent={name:"edit",country_group_id:t.row.country_group_id}},handleDelete:function(t){var e=this;this.deleteCountryGroup(t.row).then((function(t){e.$Message.success("Delete Success!")})).catch((function(t){e.$Modal.error({title:"Error",content:t})}))},handleSelectionChange:function(t){this.selectedRows=t},handleBatchDelete:function(){var t=this;if(this.selectedRows.length>0){var e=this;this.$Modal.confirm({title:"warning",content:"Are you sure to delete the selected?",onOk:function(){e.batchDeleteCountryGroup(t.selectedRows).then((function(t){e.$Message.success("Batch delete Success!")})).catch((function(t){e.$Message.error(t)}))},onCancel:function(){}})}else this.$Modal.info({title:"Info",content:"You have not chosen"})},handleSubmit:function(t){var e=this;if("add"===this.rowEvent.name)this.postCountryGroup(t).then((function(t){e.hideForm(),e.$Message.success("Add Success!")})).catch((function(t){e.$Modal.error({title:"Error",content:t})}));else if("edit"===this.rowEvent.name){var r=this.getCountryGroup(this.rowEvent.country_group_id),o=Object.assign({},t,{country_group_id:r.country_group_id});this.putCountryGroup(o).then((function(t){e.hideForm(),e.$Message.success("Update Success!")})).catch((function(t){e.$Modal.error({title:"Error",content:t})}))}},getCountryGroup:function(t){return this.allCountryGroup.filter((function(e){return e.country_group_id===t}))[0]},showForm:function(){this.showDragDrawer=!0},hideForm:function(){this.showDragDrawer=!1}}),computed:g({placementComputed:function(){return this.placement?"left":"right"}},Object(h["d"])({allApp:function(t){return t.app_setting.allApp},allCountry:function(t){return t.country.allCountry},allCountryGroup:function(t){if(!0===this.initData)return t.country_group.allCountryGroup.map((function(e){return e.app_name=t.app_setting.allApp.filter((function(t){return t.app_id===e.app_id}))[0].app_name,e.state=!0,e.last_updated_date=e.updated_at.split(".")[0],e}))}})),watch:{rowEvent:{deep:!0,handler:function(t,e){if("add"===t.name)this.countryGroup={app_id:"",country_group_id:"",country_group_name:""},this.showForm();else if("edit"===t.name){var r=this.getCountryGroup(t.country_group_id);this.countryGroup={app_id:r.app_id,country_group_id:r.country_group_id,country_group_name:r.country_group_name,country_group:r.country_group},this.showForm()}}}},mounted:function(){var t=this;this.getAllApp().then((function(e){var r=e;t.canSelectApp=r.map((function(t){return t.app_name})),Promise.all([t.getAllCountry(r),t.getAllCountryGroup(r)]).then((function(e){t.initData=!0,t.loading=!1}))}))}},b=_,v=Object(s["a"])(b,o,n,!1,null,null,null);e["default"]=v.exports}}]);