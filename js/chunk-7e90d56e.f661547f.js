(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e90d56e"],{"0a8d":function(t,e,a){},1797:function(t,e,a){"use strict";a("df5f")},"44e9":function(t,e,a){},"4a69":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"topMenu"}},[a("p",{staticClass:"title"},[a("Icon",{attrs:{type:t.appType,size:24}}),t._v(" "+t._s(t.title))],1),a("Select",{staticStyle:{width:"220px","margin-left":"24px"},attrs:{filterable:"",placeholder:"Change App",clearSingleSelect:"",clearable:""},on:{"on-open-change":t.openChangeApp,"on-change":t.changeApp},model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}},t._l(t.allApp,(function(e,r){return a("Option",{key:r,attrs:{value:e.id}},[t._v(t._s(e.title))])})),1)],1)},s=[],n=(a("28a5"),a("c276")),i={name:"page-filter",data:function(){return{appId:"",title:"",appType:""}},props:{currentAppId:{type:String,default:""},allApp:{type:Array,default:function(){return[]}},pageRooter:{type:String,default:""},crashAppId:{type:String,default:""}},methods:{openChangeApp:function(t){this.appId=""},changeApp:function(t){if(t){var e=this.allApp.filter((function(e){return e.id===t}))[0].title;e!==this.title&&localStorage.removeItem("search-params"),"crash_detail"===this.pageRooter&&(this.$router.push({name:"crash_view",params:{appId:this.appId}}),Object(n["l"])("crashAppId",this.appId)),this.$emit("change-top-menu-name",t)}},setMenuStyle:function(){var t=document.getElementById("topMenu");t&&(t.style.position="fixed",t.style.top="67px",t.style.left="0");var e=document.getElementsByClassName("side-menu-wrapper"),a=document.getElementsByClassName("ivu-menu");e&&e[0]&&(e[0].style.marginTop="90px"),a&&a[0]&&(a[1].style.zIndex=0,a[2].style.zIndex=0)}},destroyed:function(){var t=document.getElementById("topMenu");t&&(t.style.position="inherit");var e=document.getElementsByClassName("side-menu-wrapper"),a=document.getElementsByClassName("ivu-menu");e&&e[0]&&(e[0].style.marginTop="0"),a&&a[0]&&(a[1].style.zIndex=0,a[2].style.zIndex=0)},mounted:function(){var t=this;if(this.setMenuStyle(),this.currentAppId&&this.allApp.length>0){var e=this.currentAppId.split("_");this.appType="android"===e[1]?"logo-android":"logo-apple",this.allApp&&this.allApp.map((function(e,a){e.id===t.currentAppId&&(t.title=e.title)}))}},watch:{currentAppId:{immediate:!0,handler:function(t){var e=this;if(t){var a=t.split("_");this.appType="android"===a[1]?"logo-android":"logo-apple",this.allApp&&this.allApp.map((function(a,r){a.id===t&&(e.title=a.title)}))}}},allApp:{immediate:!0,handler:function(t){var e=this;if(t&&"crash_detail"===this.pageRooter){var a=localStorage.getItem("crashAppId");if(a){var r=a.split("_");this.appType="android"===r[1]?"logo-android":"logo-apple",t&&t.map((function(t,r){t.id===a&&(e.title=t.title)}))}}}},pageRooter:{immediate:!0,handler:function(t){var e=this;if("crash_view"===this.pageRooter){var a=localStorage.getItem("crashAppId");if(a){var r=a.split("_");this.appType="android"===r[1]?"logo-android":"logo-apple",this.allApp&&this.allApp.map((function(t,r){t.id===a&&(e.title=t.title)}))}}}}}},o=i,c=(a("1797"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,null,null);e["a"]=l.exports},"73b9":function(t,e,a){"use strict";a("44e9")},"9c6c0":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"g",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"i",(function(){return l})),a.d(e,"e",(function(){return p})),a.d(e,"j",(function(){return d})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return h})),a.d(e,"a",(function(){return _})),a.d(e,"k",(function(){return f}));var r=a("6612"),s=a.n(r),n=[{id:"today",value:"今天"},{id:"yesterday",value:"昨天"},{id:"day7",value:"最近7天"},{id:"day14",value:"最近14天"},{id:"day30",value:"最近30天"}],i=function(t){var e=[{title:"异常问题",key:"crash_name",render:function(e,a){var r="#"+a.row.crash_num+" "+a.row.crash_name;return e("a",{on:{click:function(){t.clickCrashName(a)}}},r)}},{title:"崩溃设备数",key:"users",width:180},{title:"崩溃次数",key:"crash_count",width:180}];return e},o=function(t){var e=[{title:"Top",key:"top",width:80,render:function(t,e){return t("span",e.index+1)}},{title:"异常问题",key:"crash_name",render:function(e,a){var r="#"+a.row.crash_num+" "+a.row.crash_name;return e("a",{on:{click:function(){t.clickCrashName(a)}}},r)}},{title:"崩溃设备数",key:"crash_users",width:180},{title:"崩溃次数",key:"online_users",width:180},{title:"首次上报时间",key:"first_time",width:180}];return e},c=function(t){var e=[{title:"异常问题",key:"crash_name",render:function(e,a){return e("div",[e("p",[e("a",{on:{click:function(){t.clickCrashName(a)}}},a.row.issue_title)]),e("p",[e("a",{on:{click:function(){t.clickCrashName(a)}}},a.row.issue_subtitle)])])}},{title:"崩溃设备数",key:"users",width:180},{title:"崩溃次数",key:"counts",width:180}];return e},l=function(t){var e=[{title:"Top",key:"top",width:80,render:function(t,e){return t("span",e.index+1)}},{title:"异常问题",key:"crash_name",render:function(e,a){return e("div",[e("p",[e("a",{on:{click:function(){t.clickCrashName(a)}}},a.row.issue_title)]),e("p",[e("a",{on:{click:function(){t.clickCrashName(a)}}},a.row.issue_subtitle)])])}},{title:"崩溃设备数",key:"crash_users",width:180},{title:"崩溃次数",key:"crash_count",width:180},{title:"首次上报时间",key:"first_time",width:180}];return e},p=[{title:"应用版本",key:"appversion",width:120},{title:"首次上报时间",key:"first_time"},{title:"最近上报时间",key:"last_time"},{title:"累计发生次数",key:"total",render:function(t,e){return t("span",s()(e.row.total).format("0,0"))}},{title:"次数占比",key:"rate",render:function(t,e){return t("span",s()(e.row.rate).format("0,0%"))}},{title:"累计影响设备数",key:"devices",render:function(t,e){return t("span",s()(e.row.devices).format("0,0"))}}],d=[{title:"应用版本",key:"app_version",width:120},{title:"首次上报时间",key:"first_time"},{title:"最近上报时间",key:"last_time"},{title:"累计发生次数",key:"total",render:function(t,e){return t("span",s()(e.row.crash_count).format("0,0"))}},{title:"次数占比",key:"rate",render:function(t,e){return t("span",s()(e.row.crash_count_rate).format("0,0%"))}},{title:"累计影响设备数",key:"devices",render:function(t,e){return t("span",s()(e.row.crash_users).format("0,0"))}}],u=["performed an event","did not performed an event","meet a general condition"],h=["is","is not","contains","does not contain"],_=["app version","country","device brand","device model","media source","投放类型","os version"],f=["g_level_id","task_id","item_id","itemid","gemleft","gem_left","af_price","timeline_id","PetRank","Playerlevel","PetLevel","player_level","roomrecipeid"]},b091:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wapper",staticStyle:{position:"relative"}},[t.tabLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),a("Row",{staticClass:"wapperTitle"},[a("a",{on:{click:t.backPage}},[t._v("<< 返回")])]),a("div",{attrs:{id:"titleContent"}},[a("Row",[a("Col",{attrs:{span:"12",id:"crashNameItem"}},[a("p",[a("a",{staticClass:"noPointer"},[t._v("#"+t._s(t.getValue("crash_detail_id"))+" "+t._s(t.getValue("crash_detail_name")))])]),a("p",[t._v(t._s(t.getValue("crash_detail_line")))]),a("p",[t._v("caused by "+t._s(t.basicInfo.caused_by))])]),a("Col",{staticStyle:{"border-left":"1px solid #e8eaec","border-right":"1px solid #e8eaec"},attrs:{span:"6"}},[a("div",{staticClass:"topWapper"},[a("Row",[a("Col",{staticClass:"wordTitle",attrs:{span:"13"}},[t._v("累计崩溃次数"),a("Divider",{staticStyle:{height:"22px"},attrs:{type:"vertical"}})],1),a("Col",{attrs:{span:"11"}},[a("h2",{staticClass:"wordTitle"},[t._v(t._s(t.formateData(t.basicInfo.total)))])])],1)],1)]),a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"topWapper"},[a("Row",[a("Col",{staticClass:"wordTitle",attrs:{span:"13"}},[t._v("累计崩溃设备数"),a("Divider",{staticStyle:{height:"22px"},attrs:{type:"vertical"}})],1),a("Col",{attrs:{span:"11"}},[a("h2",{staticClass:"wordTitle"},[t._v(t._s(t.formateData(t.basicInfo.devices)))])])],1)],1)])],1)],1),a("Card",{staticClass:"card_item"},[a("Table",{class:[t.showTabInfo?"tableItem_2":"tableItem_1"],attrs:{border:"",columns:t.crashDetailColumns,data:t.showTabInfo?t.allVersionRank:t.versionRank}}),a("p",{staticClass:"show_more",on:{click:t.showMoreInfo}},[a("a",[t._v(t._s(t.showTabInfo?"收起":"展开更多"))])])],1),a("Card",{staticClass:"card_item"},[a("p",[t._v("最近一次上报  上报ID：#"+t._s(t.basicInfo.crash_id))]),a("Divider",{staticStyle:{"margin-left":"-12px","margin-right":"-12px"}}),a("Row",{staticClass:"content_wapper"},[a("Col",{attrs:{span:"24"}},[a("p",[t._v("异常进程#线程:")]),a("p",[t._v(t._s(t.basicInfo.pname)+"#"+t._s(t.basicInfo.tname))])])],1),a("Row",{staticClass:"content_wapper"},[a("Col",{attrs:{span:"9"}},[a("p",[t._v("用户ID:")]),a("p",[t._v(t._s(t.basicInfo.user_id))])]),a("Col",{attrs:{span:"6"}},[a("p",[t._v("上报时间: ")]),a("p",[t._v(t._s(t.basicInfo.server_ts))])]),a("Col",{attrs:{span:"5"}},[a("p",[t._v("发生时间: ")]),a("p",[t._v(t._s(t.basicInfo.crash_time))])]),a("Col",{attrs:{span:"4"}},[a("p",[t._v("应用版本: ")]),a("p",[t._v(t._s(t.basicInfo.appversion))])])],1),a("Row",{staticClass:"content_wapper"},[a("Col",{attrs:{span:"9"}},[a("p",[t._v("系统版本: ")]),a("p",[t._v(t._s(t.basicInfo.osversion))])]),a("Col",{attrs:{span:"6"}},[a("p",[t._v("设备品牌:")]),a("p",[t._v(t._s(t.basicInfo.device_brand))])]),a("Col",{attrs:{span:"5"}},[a("p",[t._v("设备型号: ")]),a("p",[t._v(t._s(t.basicInfo.device_type))])]),a("Col",{attrs:{span:"4"}},[a("p",[t._v("国家: ")]),a("p",[t._v(t._s(t.basicInfo.country_code?t.basicInfo.country_code.toUpperCase():""))])])],1)],1),a("Card",{staticClass:"card_item"},[a("p",[t._v("出错堆栈")]),a("Divider",{staticStyle:{"margin-left":"-12px","margin-right":"-12px"}}),a("div",[a("Row",{staticClass:"content_wapper err_content"},[a("Col",{attrs:{span:"1"}},[a("a",[a("Icon",{staticClass:"err_icon",attrs:{type:"logo-buffer",id:"err_icon"}})],1)]),a("Col",{attrs:{span:"23"}},[a("div",{attrs:{id:"errItem"}},[a("p",[a("a",{staticClass:"noPointer"},[t._v("#"+t._s(t.basicInfo.tname))])]),a("p",[a("a",{staticClass:"noPointer"},[t._v(t._s(t.getValue("crash_detail_line")))])]),a("p",[a("a",{staticClass:"noPointer"},[t._v(t._s(t.basicInfo.caused_by))])])])])],1),a("div",{staticClass:"err_message"},t._l(t.basicInfo.stack_trace_info,(function(e,r){return a("div",{key:r},[a("div",{staticClass:"err_message_item"},[a("p",[t._v(t._s(r+1))]),a("p",[t._v(t._s(e))])])])})),0),t.showMessage?t._e():a("div",[a("a",{on:{click:t.showOtherMessage}},[t._v("展开其他线程信息")])]),t.showMessage&&t.basicInfo.other_stack_trace_info&&t.basicInfo.other_stack_trace_info.length>0?a("div",t._l(t.basicInfo.other_stack_trace_info,(function(e,r){return a("div",{key:r},[a("Row",{staticClass:"content_wapper err_content"},[a("Col",{attrs:{span:"1"}},[a("a",[a("Icon",{staticClass:"err_icon",staticStyle:{"line-height":"24px"},attrs:{type:"logo-buffer"}})],1)]),a("Col",{attrs:{span:"23"}},[a("p",[a("a",{on:{click:function(e){return t.showItemData(r)}}},[t._v("t"+t._s(r+1)+".  #"+t._s(e.name))])])])],1),t.status[r]?a("div",{staticClass:"err_message"},t._l(e.stack_trace,(function(r,s){return a("div",{key:r},[t.showItem(s,e.stack_trace)?a("div",{staticClass:"err_message_item"},[a("p",[t._v(t._s(s+1))]),a("p",[t._v(t._s(r))])]):t._e()])})),0):t._e()],1)})),0):t._e()],1)],1)],1)},s=[],n=(a("8e6e"),a("456d"),a("ac6a"),a("5df3"),a("ade3")),i=a("2f62"),o=a("4a69"),c=a("9c6c0"),l=(a("0a8d"),a("1157")),p=a.n(l),d=a("c276"),u=a("6612"),h=a.n(u);function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"crash-detail",components:{PageFilter:o["a"]},data:function(){return{crashDetailColumns:c["e"],currentAppId:"",basicInfo:{},showMessage:!1,showTabInfo:!1,versionRank:[],allVersionRank:[],loading:!1,tabLoading:!1,status:{},tag:0}},computed:f({},Object(i["d"])({tmpCrashCurrentAppId:function(t){return t.crash_view.tmpCurrentAppId},seltedAppId:function(t){return t.crash_view.seltedAppId!==this.tmpCrashCurrentAppId?this.tmpCrashCurrentAppId:t.crash_view.seltedAppId},allApp:function(t){var e=t.crash_view.allApp;return e}})),methods:f(f({},Object(i["b"])(["getAllCrashApp","getBasicDetailOfCrash","getVersionRankOfCrash"])),{},{getValue:function(t){return Object(d["k"])(t)},formateData:function(t){var e="0,0";return t?h()(t).format(e):""},showItemData:function(t){this.$set(this.status,t,!this.status[t])},backPage:function(){this.$router.push({name:"crash_view",params:{appId:this.getValue("crashAppId"),appId2:"12121212"}}),setTimeout((function(){localStorage.removeItem("package_name"),localStorage.removeItem("platform"),localStorage.removeItem("crash_detail_id"),localStorage.removeItem("crash_detail_line"),localStorage.removeItem("crash_detail_name")}),0)},showItem:function(t,e){return t+1!==e.length||!!e[t]},getCarshBasicDetail:function(){var t=this,e={package_name:Object(d["k"])("package_name"),platform:Object(d["k"])("platform"),crash_name:Object(d["k"])("crash_detail_name"),crash_line:Object(d["k"])("crash_detail_line")};this.loading=!0;var a=this;this.tabLoading=!0,Promise.all([this.getBasicDetailOfCrash(e),this.getVersionRankOfCrash(e)]).then((function(e){if(t.loading=!1,t.basicInfo=e[0],e[0]&&e[0].stack_trace){var r=e[0].stack_trace?JSON.parse(e[0].stack_trace):[];t.basicInfo["stack_trace_info"]=r,t.basicInfo["other_stack_trace_info"]=e[0].other_thread_info?JSON.parse(e[0].other_thread_info):[]}t._expandable(),t.allVersionRank=e[1],t.versionRank=e[1]?e[1].slice(0,3):[],setTimeout((function(){a.tabLoading=!1}),1e3)}))},getAllAppList:function(){var t=this;this.loading=!0,this.getAllCrashApp().then((function(t){})).catch((function(e){t.$Message.error(e.message)}))},showMoreInfo:function(){this.showTabInfo=!this.showTabInfo},showOtherMessage:function(){this.showMessage=!0},_expandable:function(){p()("#content-wrapper")&&p()("#content-wrapper").scrollTop(10),setTimeout((function(){var t=p()("#errItem").outerHeight();p()("#err_icon").css({height:t+"px"}),p()("#err_icon").css({"line-height":t+"px"});var e=p()("#crashNameItem").outerHeight();p()(".wordTitle").css({height:e+"px"}),p()(".wordTitle").css({"line-height":e+"px"})}),0)}}),mounted:function(){this.tag=0;var t=this.$route.params.package_name,e=this.$route.params.platform,a=this.$route.params.crash_num,r=this.$route.params.crash_line,s=this.$route.params.crash_name,n=this.$route.params.crashAppId;(r||s||a)&&(this.currentAppId=this.$route.params.crashAppId,Object(d["l"])("crashAppId",n),Object(d["l"])("package_name",t),Object(d["l"])("platform",e),Object(d["l"])("crash_detail_id",a),Object(d["l"])("crash_detail_line",r),Object(d["l"])("crash_detail_name",s),Object(d["l"])("pathObj",JSON.stringify(this.$route.params.pathObj))),this.getCarshBasicDetail(),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(){history.pushState(null,null,document.URL)})),this.getAllAppList(),this._expandable();var i=this;window.onresize=function(){i._expandable()}},watch:{tmpCrashCurrentAppId:{immediate:!0,handler:function(t){var e=this;p()("#content-wrapper")&&p()("#content-wrapper").scrollTop(10),this.tag++,this.tag>1&&(this.$router.push({name:"crash_view",params:{appId:t}}),localStorage.removeItem("search-params"),setTimeout((function(){e.tag=0}),100))}},seltedAppId:{handler:function(t){var e=this;if(t){var a=Object(d["k"])("crashAppId");t!==a&&a&&Object(d["k"])("crash_detail_id")&&(this.$router.push({name:"crash_view",params:{appId:t}}),setTimeout((function(){e.tag=0}),100)),p()("#content-wrapper")&&p()("#content-wrapper").scrollTop(10)}}}}},v=m,g=(a("73b9"),a("2877")),w=Object(g["a"])(v,r,s,!1,null,null,null);e["default"]=w.exports},df5f:function(t,e,a){}}]);