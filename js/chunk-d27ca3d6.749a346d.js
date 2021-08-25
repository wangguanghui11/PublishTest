(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d27ca3d6"],{"30d9":function(e,t,n){},4974:function(e,t,n){"use strict";n("8a16")},"57b1":function(e,t,n){"use strict";n("e247")},"5bea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",[n("fruit-console-tables",{ref:"tables",attrs:{topadd:"",stripe:"",editable:"",searchable:"",batchDelete:!1,"search-place":"top",columns:e.columns,selectData:[{key:"project",value:e.allProject}],loading:e.loading},on:{"on-add":e.handleAddUser,"on-delete":e.handleDelete,"on-auth-setting":e.handleAuthSetting,"on-reset-password":e.handleResetPassword,"on-batch-delete":e.handleBatchDelete,"on-selection-change":e.handleSelectionChange},model:{value:e.allAccount,callback:function(t){e.allAccount=t},expression:"allAccount"}}),n("Modal",{attrs:{title:"添加用户"},model:{value:e.addUserModal,callback:function(t){e.addUserModal=t},expression:"addUserModal"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("b",[e._v("Account & Authority >> Add")])]),n("Card",[n("Form",{ref:"formAddUser",attrs:{model:e.addUserModel,rules:e.ruleValidateAddUser}},[n("FormItem",{attrs:{label:"项目组",prop:"project"}},[n("Select",{attrs:{placeholder:"Select project",filterable:""},model:{value:e.addUserModel.project,callback:function(t){e.$set(e.addUserModel,"project",t)},expression:"addUserModel.project"}},e._l(e.allProject,(function(t){return n("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1),n("FormItem",{attrs:{label:"User Email",prop:"email"}},[n("Input",{attrs:{placeholder:"输入公司邮箱"},model:{value:e.addUserModel.email,callback:function(t){e.$set(e.addUserModel,"email",t)},expression:"addUserModel.email"}})],1),n("FormItem",{attrs:{label:"New Password",prop:"password"}},[n("div",[n("icon",{staticStyle:{"line-height":"1px"},attrs:{type:"md-eye"+(e.showPassword?"-off":""),size:20},on:{click:e.handleShowPassword}}),n("Input",{attrs:{placeholder:"输入密码",type:e.showPassword?"text":"password"},model:{value:e.addUserModel.password,callback:function(t){e.$set(e.addUserModel,"password",t)},expression:"addUserModel.password"}})],1)])],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.handleAddUserCancel}},[e._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:e.handleAddUserNext}},[e._v("下一步")])],1)],1),n("Modal",{attrs:{title:"重置密码","footer-hide":""},model:{value:e.resetPwdModal,callback:function(t){e.resetPwdModal=t},expression:"resetPwdModal"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:e.resetPwdIcon,size:18}}),n("b",[e._v(" "+e._s(e.resetPwdTitle))])],1),n("Form",{ref:"formx",attrs:{model:e.formModel,rules:e.ruleValidate,"label-width":130}},[n("FormItem",{attrs:{label:"User Email",prop:"email"}},[n("span",[e._v(e._s(e.formModel.email))])]),n("FormItem",{attrs:{label:"New password",prop:"password"}},[n("Input",{attrs:{placeholder:"Enter a new password"},model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formx")}}},[e._v("Submit")]),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formx")}}},[e._v("Reset")])],1)],1)],1),n("Modal",{attrs:{title:"权限设置",width:"820",styles:{top:"20px"}},model:{value:e.authSettingModal,callback:function(t){e.authSettingModal=t},expression:"authSettingModal"}},[n("span",[e._v(e._s(e.authSettingModel.email)+" >> 权限设置")]),n("Divider"),n("div",{staticClass:"user-type"},[n("label",{staticClass:"user-type-label"},[e._v("User Type:")]),n("Select",{model:{value:e.authSettingModel.account_type,callback:function(t){e.$set(e.authSettingModel,"account_type",t)},expression:"authSettingModel.account_type"}},e._l(e.allUserType.filter((function(e){return 0!=e.id})),(function(t,a){return n("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),n("Divider"),n("p",[e._v("选择对该成员开放的应用：")]),n("br"),n("Card",[n("Select",{staticStyle:{"margin-right":"8px",width:"300px"},attrs:{placeholder:"Select project",multiple:"","max-tag-count":1,filterable:""},model:{value:e.findProject,callback:function(t){e.findProject=t},expression:"findProject"}},e._l(e.allProject,(function(t){return n("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.appKeyword,expression:"appKeyword"}],staticStyle:{"margin-right":"8px"},attrs:{placeholder:"搜索应用"},domProps:{value:e.appKeyword},on:{input:function(t){t.target.composing||(e.appKeyword=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkBoxAllApps,expression:"checkBoxAllApps"}],staticStyle:{"margin-right":"4px"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkBoxAllApps)?e._i(e.checkBoxAllApps,null)>-1:e.checkBoxAllApps},on:{change:function(t){var n=e.checkBoxAllApps,a=t.target,l=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.checkBoxAllApps=n.concat([i])):o>-1&&(e.checkBoxAllApps=n.slice(0,o).concat(n.slice(o+1)))}else e.checkBoxAllApps=l}}}),n("label",[e._v("全选("+e._s(e.authSettingModel.checkedApps.length+e.authSettingModel.checkedTestApps.length)+")")]),n("Divider",{attrs:{type:"vertical"}}),n("label",{staticStyle:{"margin-right":"8px"}},[e._v("包含后续的应用")]),n("i-switch",{attrs:{"true-color":"#0083FA","false-color":"#A0A0A0",disabled:!e.checkBoxAllApps},model:{value:e.authSettingModel.checkedAllApp,callback:function(t){e.$set(e.authSettingModel,"checkedAllApp",t)},expression:"authSettingModel.checkedAllApp"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])]),n("Divider"),n("div",{staticStyle:{height:"290px",overflow:"auto"}},[e._l(e.authSettingModel.allApps.filter((function(t){return(""==e.appKeyword||t.app_name.toLowerCase().indexOf(e.appKeyword.toLowerCase())>=0)&&(0===e.findProject.length||e.findProject.indexOf(t.project)>=0)})),(function(t,a){return n("div",{key:a+t.app_id,staticClass:"inline-width"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.authSettingModel.checkedApps,expression:"authSettingModel.checkedApps"}],staticClass:"app-list",attrs:{type:"checkbox",id:t.app_id},domProps:{value:t.app_id,checked:Array.isArray(e.authSettingModel.checkedApps)?e._i(e.authSettingModel.checkedApps,t.app_id)>-1:e.authSettingModel.checkedApps},on:{change:function(n){var a=e.authSettingModel.checkedApps,l=n.target,i=!!l.checked;if(Array.isArray(a)){var o=t.app_id,s=e._i(a,o);l.checked?s<0&&e.$set(e.authSettingModel,"checkedApps",a.concat([o])):s>-1&&e.$set(e.authSettingModel,"checkedApps",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.authSettingModel,"checkedApps",i)}}}),n("Card",{staticStyle:{float:"left",width:"150px"}},[n("Icon",{attrs:{type:"ios-game-controller-b-outline"}}),n("Divider",{attrs:{type:"vertical"}}),n("label",[e._v(" "+e._s(t.app_name))])],1)],1)])})),e._l(e.authSettingModel.allTestApps.filter((function(t){return(""==e.appKeyword||t.app_name.toLowerCase().indexOf(e.appKeyword.toLowerCase())>=0)&&(0===e.findProject.length||e.findProject.indexOf(t.project)>=0)})),(function(t,a){return n("div",{key:a+t.app_id,staticClass:"inline-width"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.authSettingModel.checkedTestApps,expression:"authSettingModel.checkedTestApps"}],staticClass:"app-list",attrs:{type:"checkbox",id:t.app_id},domProps:{value:t.app_id,checked:Array.isArray(e.authSettingModel.checkedTestApps)?e._i(e.authSettingModel.checkedTestApps,t.app_id)>-1:e.authSettingModel.checkedTestApps},on:{change:function(n){var a=e.authSettingModel.checkedTestApps,l=n.target,i=!!l.checked;if(Array.isArray(a)){var o=t.app_id,s=e._i(a,o);l.checked?s<0&&e.$set(e.authSettingModel,"checkedTestApps",a.concat([o])):s>-1&&e.$set(e.authSettingModel,"checkedTestApps",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.authSettingModel,"checkedTestApps",i)}}}),n("Card",{staticStyle:{float:"left",width:"150px"}},[n("Icon",{attrs:{type:"ios-game-controller-b-outline"}}),n("Divider",{attrs:{type:"vertical"}}),n("label",[e._v(" "+e._s(t.app_name))])],1)],1)])}))],2)],1),n("Divider"),n("p",[e._v("选择对该成员开放的界面：")]),n("br"),n("Card",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.funKeyword,expression:"funKeyword"}],staticStyle:{"margin-right":"8px"},attrs:{placeholder:"搜索界面"},domProps:{value:e.funKeyword},on:{input:function(t){t.target.composing||(e.funKeyword=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkBoxAllFuns,expression:"checkBoxAllFuns"}],staticStyle:{"margin-right":"4px"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkBoxAllFuns)?e._i(e.checkBoxAllFuns,null)>-1:e.checkBoxAllFuns},on:{change:function(t){var n=e.checkBoxAllFuns,a=t.target,l=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&(e.checkBoxAllFuns=n.concat([i])):o>-1&&(e.checkBoxAllFuns=n.slice(0,o).concat(n.slice(o+1)))}else e.checkBoxAllFuns=l}}}),n("label",[e._v("全选("+e._s(e.authSettingModel.checkedFuns.length)+")")]),n("Divider",{attrs:{type:"vertical"}}),n("label",{staticStyle:{"margin-right":"8px"}},[e._v("包含后续新开发的界面")]),n("i-switch",{attrs:{"true-color":"#0083FA","false-color":"#A0A0A0",disabled:!e.checkBoxAllFuns},model:{value:e.authSettingModel.checkedAllFun,callback:function(t){e.$set(e.authSettingModel,"checkedAllFun",t)},expression:"authSettingModel.checkedAllFun"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])]),n("Divider"),n("div",{staticStyle:{height:"145px",overflow:"auto"}},e._l(this.displayAllFun,(function(t,a){return n("div",{key:a},[t.item.length>0?n("div",{staticStyle:{border:"1px solid #fff"}},[n("label",{staticClass:"fun-group-list"},[e._v(e._s(t.title))]),n("div",e._l(t.item,(function(t,a){return n("div",{key:a,staticClass:"inline-width"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.authSettingModel.checkedFuns,expression:"authSettingModel.checkedFuns"}],attrs:{type:"checkbox",id:t.id},domProps:{value:t.id,checked:Array.isArray(e.authSettingModel.checkedFuns)?e._i(e.authSettingModel.checkedFuns,t.id)>-1:e.authSettingModel.checkedFuns},on:{change:function(n){var a=e.authSettingModel.checkedFuns,l=n.target,i=!!l.checked;if(Array.isArray(a)){var o=t.id,s=e._i(a,o);l.checked?s<0&&e.$set(e.authSettingModel,"checkedFuns",a.concat([o])):s>-1&&e.$set(e.authSettingModel,"checkedFuns",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.authSettingModel,"checkedFuns",i)}}}),n("label",[e._v(" "+e._s(t.name))])])])})),0)]):e._e()])})),0)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[e.addUserFlag?n("Button",{attrs:{type:"text"},on:{click:e.handleAdduserBack}},[e._v("上一步")]):n("Button",{attrs:{type:"text"},on:{click:e.handleAuthSettingCancel}},[e._v("取消")]),e.addUserFlag?n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAuthSettingOk(e.handleSaveAddUser)}}},[e._v("确定")]):n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAuthSettingOk(e.handleUpdateAuthSetting)}}},[e._v("确定")])],1)],1)],1)],1)},l=[],i=(n("8e6e"),n("28a5"),n("aef6"),n("5df3"),n("ade3")),o=(n("456d"),n("ac6a"),n("7f7f"),n("cd9b")),s=n("2f62"),c=n("7e31"),r=n("f2d4");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"account-and-authority",components:{FruitConsoleTables:o["a"]},data:function(){var e=this;return{initData:!1,rowEvent:{name:"",index:-1},columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"项目组",key:"project",sortable:!0,searchable:!0,isSelect:!0},{title:"User-Email",key:"email",sortable:!0,searchable:!0},{title:"User-Type",key:"account_type",sortable:!0,render:function(t,n){var a=e.allUserType.filter((function(e){return e.id===n.row.account_type}))[0].name;return t("span",a)}},{title:"Last-updated-date",key:"last_updated_date",sortable:!0},{title:"Operator",key:"operator",sortable:!0},{title:"Handle",key:"handle",options:["delete"],button:[function(e,t,n){return e("Tooltip",{props:{placement:"top",content:"权限设置"}},[e("Icon",{props:{type:"md-settings",size:26,color:"#9999FF"},on:{click:function(){n.$emit("on-auth-setting",t)}}})])},function(e,t,n){return e("Tooltip",{props:{placement:"top",content:"重置密码"}},[e("Icon",{props:{type:"md-medical",size:26,color:"#009966"},on:{click:function(){n.$emit("on-reset-password",t)}}})])}]}],addUserModal:!1,resetPwdModal:!1,authSettingModal:!1,resetPwdIcon:"ios-medical",resetPwdTitle:"Reset Password",addUserFlag:!1,showPassword:!1,displayAllFun:{},formModel:{email:"",password:"",account_type:""},ruleValidate:{password:[{required:!0,validator:c["a"],trigger:"blur"}]},addUserModel:{project:"",email:"",password:""},ruleValidateAddUser:{email:[{required:!0,message:"The email cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"},{validator:this.handleCheckEMail,trigger:"blur"}],project:[{required:!0,message:"The project cannot be empty",trigger:"blur"}],password:[{required:!0,validator:c["a"],trigger:"blur"}]},authSettingModel:{email:"",account_type:"",allApps:[],allTestApps:[],checkedAllApp:!1,checkedApps:[],checkedTestApps:[],allFuns:[],allFunCount:0,checkedAllFun:!1,checkedFuns:[],loadFinish:!1},appKeyword:"",funKeyword:"",checkBoxAllApps:!1,checkBoxAllFuns:!1,selectedRows:[],allProject:[],findProject:[],loading:!0}},watch:{checkBoxAllApps:function(){var e=this;!0===this.authSettingModel.loadFinish&&(this.authSettingModel.checkedApps=[],this.authSettingModel.checkedTestApps=[],this.checkBoxAllApps?(this.authSettingModel.allApps.forEach((function(t){e.authSettingModel.checkedApps.push(t.app_id)})),this.authSettingModel.allTestApps.forEach((function(t){e.authSettingModel.checkedTestApps.push(t.app_id)}))):this.authSettingModel.checkedAllApp=!1)},"authSettingModel.checkedApps":function(){var e=this;this.authSettingModel.loadFinish=!1,this.authSettingModel.checkedApps.length<this.authSettingModel.allApps.length||this.authSettingModel.checkedTestApps.length<this.authSettingModel.allTestApps.length?(this.checkBoxAllApps=!1,this.authSettingModel.checkedAllApp=!1):this.authSettingModel.checkedApps.length===this.authSettingModel.allApps.length&&this.authSettingModel.checkedTestApps.length===this.authSettingModel.allTestApps.length&&(this.checkBoxAllApps=!0),this.$nextTick((function(){e.authSettingModel.loadFinish=!0}))},"authSettingModel.checkedTestApps":function(){var e=this;this.authSettingModel.loadFinish=!1,this.authSettingModel.checkedApps.length<this.authSettingModel.allApps.length||this.authSettingModel.checkedTestApps.length<this.authSettingModel.allTestApps.length?(this.checkBoxAllApps=!1,this.authSettingModel.checkedAllApp=!1):this.authSettingModel.checkedApps.length===this.authSettingModel.allApps.length&&this.authSettingModel.checkedTestApps.length===this.authSettingModel.allTestApps.length&&(this.checkBoxAllApps=!0),this.$nextTick((function(){e.authSettingModel.loadFinish=!0}))},checkBoxAllFuns:function(){var e=this;if(!0===this.authSettingModel.loadFinish)if(this.authSettingModel.checkedFuns=[],this.checkBoxAllFuns){var t=this.authSettingModel.allFuns;Object.keys(t).forEach((function(n){t[n].item.forEach((function(t){e.authSettingModel.checkedFuns.push(t.id)}))}))}else this.authSettingModel.checkedAllFun=!1},"authSettingModel.checkedFuns":function(){var e=this;this.authSettingModel.loadFinish=!1,this.authSettingModel.checkedFuns.length<this.authSettingModel.allFunCount?(this.checkBoxAllFuns=!1,this.authSettingModel.checkedAllFun=!1):this.authSettingModel.checkedFuns.length===this.authSettingModel.allFunCount&&(this.checkBoxAllFuns=!0),this.$nextTick((function(){e.authSettingModel.loadFinish=!0}))},funKeyword:function(){var e=this;""===this.funKeyword?this.displayAllFun=this.allFunctions:(this.displayAllFun={},Object.keys(this.allFunctions).forEach((function(t){e.displayAllFun[t]={},e.displayAllFun[t].title=e.allFunctions[t].title,e.displayAllFun[t].item=[],e.allFunctions[t].item.forEach((function(n){n.name.toLowerCase().indexOf(e.funKeyword.toLowerCase())>=0&&e.displayAllFun[t].item.push(n)}))})))}},methods:h(h({},Object(s["b"])(["getAllUserType","getAllAccount","postAccount","putAccount","deleteAccount","batchDeleteAccount","getAllApp","getAppAndFunByEmail","getTestAppByEmail","postAppAndFun","getAllProject","getAllTestAppByAdmin","postAuthTestApp"])),{},{handleAddUser:function(){var e=this;this.addUserModal=!0,this.showPassword=!1,this.addUserModel.project="",this.addUserModel.email="",this.addUserModel.password="",this.addUserFlag=!0,this.authSettingModel.loadFinish=!1,this.handleResetAuthSetting(),this.$nextTick((function(){e.authSettingModel.loadFinish=!0}))},handleDelete:function(e){var t=this;this.deleteAccount(e.row).then((function(e){t.$Message.success("Delete Success!")})).catch((function(e){t.$Modal.error({title:"Error",content:e})}))},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(n){n&&"formx"===e&&t.putAccount(t.formModel).then((function(e){t.resetPwdModal=!1,t.$Modal.success({title:"重置密码成功",content:t.formModel.email+"的密码重置成功，请记住该密码（"+t.formModel.password+"）"})})).catch((function(e){t.$Modal.error({title:"Error",content:e})}))}))},handleSelectionChange:function(e){this.selectedRows=e},handleBatchDelete:function(){var e=this;if(this.selectedRows.length>0){var t=this;this.$Modal.confirm({title:"warning",content:"Are you sure to delete the selected?",onOk:function(){t.batchDeleteAccount(e.selectedRows).then((function(e){t.$Message.success("Batch delete Success!")})).catch((function(e){t.$Message.error(e)}))},onCancel:function(){}})}else this.$Modal.info({title:"Info",content:"You have not chosen"})},handleShowPassword:function(){this.showPassword=!this.showPassword},handleAddUserCancel:function(){this.addUserModal=!1},handleAddUserNext:function(){var e=this;this.$refs["formAddUser"].validate((function(t){t&&(e.addUserModal=!1,e.authSettingModal=!0,e.authSettingModel.email=e.addUserModel.email)}))},handleAdduserBack:function(){this.addUserModal=!0,this.authSettingModal=!1},handleReset:function(e){"formx"===e?this.formModel.password="":"formAddUser"===e&&this.$refs[e].resetFields()},handleResetAuthSetting:function(){this.appKeyword="",this.findProject=[],this.funKeyword="",this.checkBoxAllApps=!1,this.checkBoxAllFuns=!1,this.authSettingModel.email="",this.authSettingModel.account_type=2,this.authSettingModel.checkedAllApp=!1,this.authSettingModel.checkedApps=[],this.authSettingModel.checkedTestApps=[],this.authSettingModel.checkedAllFun=!1,this.authSettingModel.checkedFuns=[]},handleAuthSetting:function(e){var t=this;this.addUserFlag=!1,Promise.all([this.getAppAndFunByEmail(e.row.email),this.getTestAppByEmail(e.row.email)]).then((function(n){t.authSettingModel.loadFinish=!1,t.handleResetAuthSetting(),t.authSettingModel.email=e.row.email,t.authSettingModel.account_type=n[0].account_type,n[0].account_apps.forEach((function(e){"all"===e.app_id?t.authSettingModel.checkedAllApp=!0:t.authSettingModel.checkedApps.push(e.app_id)})),n[1].forEach((function(e){"all"!==e.app_id&&t.authSettingModel.checkedTestApps.push(e.app_id)})),n[0].account_function.forEach((function(e){if("all"===e.function_name?t.authSettingModel.checkedAllFun=!0:t.authSettingModel.checkedFuns.push(e.function_name),t.authSettingModel.checkedAllFun){t.authSettingModel.checkedFuns=[];var n=t.authSettingModel.allFuns;Object.keys(n).forEach((function(e){n[e].item.forEach((function(e){t.authSettingModel.checkedFuns.push(e.id)}))}))}})),t.checkBoxAllApps=t.authSettingModel.checkedApps.length===t.authSettingModel.allApps.length&&t.authSettingModel.checkedTestApps.length===t.authSettingModel.allTestApps.length,t.checkBoxAllFuns=t.authSettingModel.checkedFuns.length===t.authSettingModel.allFunCount,t.$nextTick((function(){t.authSettingModel.loadFinish=!0})),t.authSettingModal=!0})).catch((function(e){t.$Modal.error({title:"Error",content:e})}))},handleAuthSettingOk:function(e){if(1===this.authSettingModel.account_type)0===this.authSettingModel.checkedApps.length&&0===this.authSettingModel.checkedTestApps.length||0===this.authSettingModel.checkedFuns.length?this.$Modal.confirm({title:"警告",content:"该账号只能查看account界面，确定保存吗？",onOk:function(){e()}}):e();else if(2===this.authSettingModel.account_type){var t;if(0===this.authSettingModel.checkedApps.length&&0===this.authSettingModel.checkedTestApps.length||0===this.authSettingModel.checkedFuns.length)0===this.authSettingModel.checkedApps.length&&0===this.authSettingModel.checkedTestApps.length&&0===this.authSettingModel.checkedFuns.length?t="该账号尚没有任何权限，无法保存":0===this.authSettingModel.checkedApps.length&&0===this.authSettingModel.checkedTestApps.length?t="该账号没有应用权限，无法保存":0===this.authSettingModel.checkedFuns.length&&(t="该账号没有查看任何界面的权限，无法保存"),this.$Modal.error({title:"警告",content:t});else e()}},handleUpdateAuthSetting:function(){var e=this;Promise.all([this.postAppAndFun(this.authSettingModel),this.postAuthTestApp(this.authSettingModel)]).then((function(t){e.$Message.success("Update Success!")})).catch((function(t){e.$Modal.error({title:"Error",content:t})})),this.authSettingModal=!1},handleSaveAddUser:function(){var e=this,t={};t.addUserModel=this.addUserModel,t.authSettingModel=this.authSettingModel,this.postAccount(t).then((function(t){e.postAuthTestApp(e.authSettingModel).then((function(t){e.authSettingModal=!1,e.$Message.success("Add Success!")}))})).catch((function(t){e.$Modal.error({title:"Error",content:t})}))},handleAuthSettingCancel:function(){this.authSettingModal=!1},handleResetPassword:function(e){this.resetPwdModal=!0,this.formModel={email:e.row.email,password:"",account_type:e.row.account_type}},handleCheckEMail:function(e,t,n){var a="@bianfeng.com";t.endsWith(a)?n():n(new Error("请使用"+a))}}),computed:h({},Object(s["d"])({allUserType:function(e){return e.user_type.allUserType},allAccount:function(e){if(!0===this.initData)return e.account_and_authority.allAccount.map((function(e){return e.last_updated_date=e.updated_at.split(".")[0],e}))},allFunctions:function(){var e=this,t={};return this.authSettingModel.allFunCount=0,r["g"].forEach((function(n){!0!==n.hideInMenu&&(t.hasOwnProperty(n.belong)||(t[n.belong]={},t[n.belong].title=n.belong_title,t[n.belong].item=[]),n.id.indexOf("account_and_authority")<0&&(t[n.belong].item.push({id:n.id,name:n.title}),e.authSettingModel.allFunCount++))})),this.authSettingModel.allFuns=t,t}})),mounted:function(){var e=this;Promise.all([this.getAllUserType(),this.getAllAccount(),this.getAllApp("authority"),this.getAllProject(),this.getAllTestAppByAdmin()]).then((function(t){e.initData=!0,e.authSettingModel.allApps=t[2],e.displayAllFun=e.allFunctions,e.allProject=t[3],e.authSettingModel.allTestApps=t[4],e.loading=!1}))}},p=u,g=(n("57b1"),n("2877")),f=Object(g["a"])(p,a,l,!1,null,null,null);t["default"]=f.exports},"7e31":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t,n){if(""===t||void 0===t||null==t)n(new Error("密码要大于八位并且包括字母、数字和特殊字符"));else{var a=/^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{8,}$/;a.test(t)||""===t?n():n(new Error("密码要大于八位并且包括字母、数字和特殊字符"))}}},"8a16":function(e,t,n){},aef6:function(e,t,n){"use strict";var a=n("5ca1"),l=n("9def"),i=n("d2c8"),o="endsWith",s=""[o];a(a.P+a.F*n("5147")(o),"String",{endsWith:function(e){var t=i(this,e,o),n=arguments.length>1?arguments[1]:void 0,a=l(t.length),c=void 0===n?a:Math.min(l(n),a),r=String(e);return s?s.call(t,r,c):t.slice(c-r.length,c)===r}})},cd9b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.searchable&&"top"===e.searchPlace?n("div",{staticClass:"search-con search-con-top"},[e._l(e.columns,(function(t){return[!0===t.searchable&&!0===t.isSelect?n("a-select",{key:"search-col-"+t.key,staticClass:"search-select",staticStyle:{top:"-4px",position:"relative","font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",optionFilterProp:"children",placeholder:"Select "+t.title,"max-tag-count":e.maxTagCountfun(t.key),"max-tag-text-length":e.maxTagTextfun(t.key)},on:{change:function(n){return e.handleSelectChange(t.key)},focus:function(n){return e.focusFun(t)},mouseenter:function(n){return e.mouseenterFun(t)},mouseleave:function(t){return e.mouseleaveFun()},blur:function(t){return e.blurFun()}},model:{value:e.searchValues[t.key],callback:function(n){e.$set(e.searchValues,t.key,n)},expression:"searchValues[item.key]"}},[e._l(e.selectData,(function(a){return a.key===t.key?e._l(a.value,(function(t){return n("Option",{key:"search-col-"+t,attrs:{value:t}},[e._v(e._s(t))])})):e._e()}))],2):!0===t.searchable?n("Input",{key:"search-col-"+t.key,staticClass:"search-input",attrs:{clearable:"",placeholder:"Input "+t.title},on:{"on-change":e.handleClear},model:{value:e.searchValues[t.key],callback:function(n){e.$set(e.searchValues,t.key,n)},expression:"searchValues[item.key]"}}):e._e()]})),n("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[n("Icon",{attrs:{type:"search"}}),e._v("\n      搜索\n    ")],1)],2):e._e(),e.topadd?n("div",{staticClass:"search-con search-con-top"},[n("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.onAdd}},[n("Icon",{attrs:{type:"ios-add"}}),e._v("\n      ADD\n    ")],1),e.batchDelete?n("Button",{staticClass:"search-btn",attrs:{type:"error"},on:{click:e.onBatchDelete}},[n("Icon",{attrs:{type:"md-trash"}}),e._v("\n      BATCH DELETE\n    ")],1):e._e(),e.showDownload?n("Button",{staticClass:"search-btn",staticStyle:{float:"right"},attrs:{type:"primary",icon:"ios-cloud-download-outline"},on:{click:e.onDownload}},[e._v("\n      "+e._s(e.downloadName)+"\n    ")]):e._e()],1):e._e(),n("Table",{ref:"tablesMain",attrs:{data:e.insideTableData,columns:e.insideColumns,stripe:e.stripe,border:e.border,"show-header":e.showHeader,width:e.width,height:e.height,loading:e.loading,"disabled-hover":e.disabledHover,"highlight-row":e.highlightRow,"row-class-name":e.rowClassName,size:e.size,"no-data-text":e.noDataText,"no-filtered-data-text":e.noFilteredDataText},on:{"on-current-change":e.onCurrentChange,"on-select":e.onSelect,"on-select-cancel":e.onSelectCancel,"on-select-all":e.onSelectAll,"on-selection-change":e.onSelectionChange,"on-sort-change":e.onSortChange,"on-filter-change":e.onFilterChange,"on-row-click":e.onRowClick,"on-row-dblclick":e.onRowDblclick,"on-expand":e.onExpand}},[e._t("header",null,{slot:"header"}),e._t("footer",null,{slot:"footer"}),e._t("loading",null,{slot:"loading"})],2),e.searchable&&"bottom"===e.searchPlace?n("div",{staticClass:"search-con search-con-top"},[n("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,(function(t){return"handle"!==t.key?n("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v("\n        "+e._s(t.title)+"\n      ")]):e._e()})),1),n("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[n("Icon",{attrs:{type:"search"}}),e._v("  搜索\n    ")],1)],1):e._e(),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}}),n("div",{attrs:{id:"optionsContent"}},e._l(e.tmpOptions,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)],1)},l=[],i=(n("456d"),n("ac6a"),n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tables-edit-outer"},[e.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:e.value},on:{input:e.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[e._v(e._s(e.value))]),e.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:e.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):e._e()],1)])}),o=[],s={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(e){this.$emit("input",e)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},c=s,r=(n("4974"),n("2877")),d=Object(r["a"])(c,i,o,!1,null,null,null),h=d.exports,u=n("0c0f"),p=(n("30d9"),n("1157")),g=n.n(p),f=n("9839"),m={name:"FruitConsoleTables",components:{ASelect:f["d"],Option:f["d"].Option},props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},selectData:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},topadd:{type:Boolean,default:!1},batchDelete:{type:Boolean,default:!0},showDownload:{type:Boolean,default:!1},downloadName:{type:String,default:"Download"},searchPlace:{type:String,default:"top"}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:"",searchValues:{},tmpOptions:[],maxTagCountObj:{},maxTaglengthObj:{},client_width:1360,mark:0}},methods:{suportEdit:function(e,t){var n=this;return e.render=function(e,t){return e(h,{props:{params:t,value:n.insideTableData[t.index][t.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(e){n.edittingText=e},"on-start-edit":function(e){n.edittingCellId="editting-".concat(e.index,"-").concat(e.column.key),n.$emit("on-start-edit",e)},"on-cancel-edit":function(e){n.edittingCellId="",n.$emit("on-cancel-edit",e)},"on-save-edit":function(e){n.value[e.row.initRowIndex][e.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(e,{value:n.edittingText})),n.edittingCellId=""}}})},e},surportHandle:function(e){var t=this,n=e.options||[],a=[];n.forEach((function(e){u["a"][e]&&a.push(u["a"][e])}));var l=e.button?[].concat(a,e.button):a;return e.render=function(e,n){return n.tableData=t.value,e("div",l.map((function(a){return a(e,n,t)})))},e},handleColumns:function(e){var t=this;this.insideColumns=e.map((function(e,n){var a=e;return a.editable&&(a=t.suportEdit(a,n)),"handle"===a.key&&(a=t.surportHandle(a)),a}))},setDefaultSearchKey:function(){this.searchKey="handle"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(e){""===e.target.value&&this.handleSearch()},handleSearch:function(){var e=this;this.insideTableData=this.value;for(var t=Object.keys(this.searchValues).filter((function(e){return""!==e.trim()})),n=function(n){var a=t[n];if("string"===typeof e.searchValues[a]&&e.searchValues[a]){var l=e.searchValues[a];e.insideTableData=e.insideTableData.filter((function(e){return e[a]&&e[a].toLowerCase().indexOf(l.toLowerCase())>-1}))}else if(e.searchValues[a]instanceof Array&&e.searchValues[a].length>0){for(var i=[],o=function(t){var n=e.searchValues[a][t];i=i.concat(e.insideTableData.filter((function(e){return e[a].toLowerCase().indexOf(n.toLowerCase())>-1}))),e.insideTableData=e.insideTableData.filter((function(e){return e[a].toLowerCase().indexOf(n.toLowerCase())<0}))},s=0;s<e.searchValues[a].length;s++)o(s);e.insideTableData=i}},a=0;a<t.length;a++)n(a)},handleTableData:function(){this.insideTableData=this.value.map((function(e,t){var n=e;return n.initRowIndex=t,n}))},exportCsv:function(e){this.$refs.tablesMain.exportCsv(e)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(e,t){this.$emit("on-current-change",e,t)},onSelect:function(e,t){this.$emit("on-select",e,t)},onSelectCancel:function(e,t){this.$emit("on-select-cancel",e,t)},onSelectAll:function(e){this.$emit("on-select-all",e)},onSelectionChange:function(e){this.$emit("on-selection-change",e)},onSortChange:function(e,t,n){this.$emit("on-sort-change",e,t,n)},onFilterChange:function(e){this.$emit("on-filter-change",e)},onRowClick:function(e,t){this.$emit("on-row-click",e,t)},onRowDblclick:function(e,t){this.$emit("on-row-dblclick",e,t)},onExpand:function(e,t){this.$emit("on-expand",e,t)},onAdd:function(){this.$emit("on-add")},onBatchDelete:function(){this.$emit("on-batch-delete")},onDownload:function(){this.$emit("on-download")},maxTagCountfun:function(e,t){return this.maxTagCountObj&&this.maxTagCountObj[e]?this.maxTagCountObj[e]:1},maxTagTextfun:function(e,t){return this.maxTaglengthObj&&this.maxTaglengthObj[e]?this.maxTaglengthObj[e]:20},handleSelectChange:function(e){this.$emit("on-search-select-change",e,this.searchValues[e])},blurFun:function(){this.mark=0,this.maxTagCountObj={},this.maxTaglengthObj={}},mouseenterFun:function(e){if(1!==this.mark){var t={},n=1;this.columns&&this.columns.map((function(e,a){e.searchable&&(t[e.key]=n++)}));var a,l,i=t[e.key];this.client_width<1500?(a=2===i||5===i?320:3===i||6===i?620:17,l=1===i||2===i||3===i?48:80):this.client_width>1700?(a=2===i||7===i?320:3===i||8===i?623:44===i?900:5===i?1145:15,l=1===i||2===i||3===i||4===i||5===i?48:80):(a=1===i||5===i?17:2===i||6===i?320:3===i?620:15,l=0===i||1===i||2===i||3===i?48:80),this.tmpOptions=this.searchValues[e.key];var o=document.getElementById("optionsContent");o&&this.searchValues[e.key]&&(o.style.display="block",o.style.left=a+"px",o.style.setProperty("top",l+"px","important"))}},mouseleaveFun:function(){this.hideContentItem()},hideContentItem:function(){g()("#optionsContent").length&&g()("#optionsContent").css({display:"none"})},focusFun:function(e){this.mark=1,this.hideContentItem();var t=this;setTimeout((function(){t.maxTagCountObj={},t.maxTagCountObj[e.key]=100,t.maxTaglengthObj={},t.maxTaglengthObj[e.key]=100}),500)},clearSearch:function(e){this.searchValues[e]&&(this.searchValues[e]=[])},_expandable:function(){this.client_width=document.body.clientWidth}},watch:{columns:function(e){this.handleColumns(e),this.setDefaultSearchKey()},value:function(e){this.handleTableData(),this.searchable&&this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData(),this._expandable();var e=this;window.onresize=function(){e._expandable()}}},A=m,k=Object(r["a"])(A,a,l,!1,null,null,null);t["a"]=k.exports},e247:function(e,t,n){}}]);