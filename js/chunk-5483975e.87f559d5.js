(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5483975e"],{"1d0b":function(t,e,a){"use strict";a("471d")},2238:function(t,e,a){"use strict";a("e611")},"471d":function(t,e,a){},"47a5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("page-filter-source",{ref:"pageFilter",attrs:{loading:t.tableLoading},on:{"on-filter-apply":t.onFilterApply}})],1),a("div",{attrs:{id:"mainItem"}},[a("Row",{staticClass:"contentsItem"},[a("Card",{attrs:{shadow:""}},[a("div",{staticClass:"checkBoxItemRightAbsolute",staticStyle:{position:"absolute"}},[a("Checkbox",{staticStyle:{"font-size":"14px","margin-right":"40px"},on:{"on-change":t.changeCheckbox},model:{value:t.checkStatus,callback:function(e){t.checkStatus=e},expression:"checkStatus"}},[t._v("显示数字标签")]),t.visible?a("a",{on:{click:t.previewFun}},[t._v("点击预览")]):t._e(),a("Tooltip",{attrs:{content:"关闭预览"}},[a("Button",{attrs:{id:"closeBtn"},on:{click:t.closeFun}},[t._v("X")])],1)],1),a("tabs-list-source",{ref:"tabsList",attrs:{"page-rooter":"profitLoss1","tab-pane-data":t.tabPaneData,"field-formaters":t.field_formaters,"known-fields":t.profit_fields,"line-chart-data":t.lineChartData,"check-status":t.checkStatus,"preview-status":t.previewStatus},on:{"on-tab-refresh":t.selectTab}},[a("template",{slot:"refresh"},[a("div",{staticStyle:{width:"100%",height:"auto",overflow:"hidden"}},[a("chart-group",{ref:"chartGroup",attrs:{"select-mode":"default","known-fields":t.profit_fields,"all-chart-groups":t.chartGroups,"default-chart-groups":t.defaultChartGroups},on:{"on-chart-group-change":t.handleChartGroupChange,"on-chart-group-refresh":t.handleChartGroupRefresh}})],1)])],2)],1),t.chartLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),a("Row",{staticStyle:{"margin-top":"5px"}},[a("Card",{attrs:{shadow:""}},[a("table-data",{ref:"table",attrs:{data:t.tableData,cur_sys_name:t.cur_sys_name,"table-loading":t.tableLoading,days:t.days,"all-app":t.allApp,"footer-data":t.totalData,"page-reset":t.pageReset,"page-data":t.pageData,"field-formaters":t.field_formaters,"known-fields":t.profit_fields,dimensions:t.currDimensions,metrics:t.metrics,"default-dimensions":t.defaultDimensions,"all-dimensions":t.allDimensions,"all-metrics":t.allMetrics,"sync-dimensions":t.syncDimensions,"sync-metrics":t.syncMetrics,"no-download-modal":!0,"page-rooter":"profitLoss"},on:{"on-click-cell":t.onClickCell,"on-sort-change":t.handleSortChange,"metrics-ok":t.metricsOk,"on-table-refresh":t.handleTableRefresh,"on-download":t.download,"on-page-change":t.pageChange,"on-page-size-change":t.pageSizeChange,"on-page-reset-true":t.pageResetFalse,"on-dimensions-change":t.handleDimensionsChange}})],1),t.downloadLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},i=[],n=(a("8e6e"),a("55dd"),a("456d"),a("c5f6"),a("2909")),s=(a("5df3"),a("ac6a"),a("20d6"),a("28a5"),a("ade3")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",{ref:"filter",staticClass:"filter-selection"},[a("div",[a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[0],"max-tag-text-length":this.maxTagTextArr[0],placeholder:"项目组-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(0)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(0)},mouseleave:function(e){return t.mouseleaveFun()},change:t.projectsChange},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.projects.length)+"/"+t._s(t.allProjects.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.projects=t.allProjects,t.projectsChange(t.projects)}}},[t._v("全选")])],1)],1)}}]),model:{value:t.projects,callback:function(e){t.projects=e},expression:"projects"}},t._l(t.allProjects,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[1],"max-tag-text-length":this.maxTagTextArr[1],placeholder:"App-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(1)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(1)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.apps.length)+"/"+t._s(t.canSelectAllApp.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.apps=t.canSelectAllApp.map((function(t){return t.app_id}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.apps,callback:function(e){t.apps=e},expression:"apps"}},t._l(t.canSelectAllApp,(function(e){return a("Option",{key:e.app_id,attrs:{value:e.app_id}},[t._v(t._s(e.app_name)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[2],"max-tag-text-length":this.maxTagTextArr[2],placeholder:"traffic source",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(2)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(2)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.traffic_source.length)+"/"+t._s(t.all_traffic_source.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.traffic_source=t.all_traffic_source.map((function(t){return t.traffic_source}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.traffic_source,callback:function(e){t.traffic_source=e},expression:"traffic_source"}},t._l(t.all_traffic_source,(function(e){return a("Option",{key:e.traffic_source,attrs:{value:e.traffic_source}},[t._v(t._s(e.traffic_source)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[3],"max-tag-text-length":this.maxTagTextArr[3],placeholder:"utm source",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(3)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(3)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.utm_source.length)+"/"+t._s(t.all_utm_source.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.utm_source=t.all_utm_source.map((function(t){return t.utm_source}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.utm_source,callback:function(e){t.utm_source=e},expression:"utm_source"}},t._l(t.all_utm_source,(function(e){return a("Option",{key:e.utm_source,attrs:{value:e.utm_source}},[t._v(t._s(e.utm_source)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[4],"max-tag-text-length":this.maxTagTextArr[4],placeholder:"utm campaign",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(4)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(4)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.utm_campaign.length)+"/"+t._s(t.all_utm_campaign.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.utm_campaign=t.all_utm_campaign.map((function(t){return t.utm_campaign}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.utm_campaign,callback:function(e){t.utm_campaign=e},expression:"utm_campaign"}},t._l(t.all_utm_campaign,(function(e){return a("Option",{key:e.utm_campaign,attrs:{value:e.utm_campaign}},[t._v(t._s(e.utm_campaign)+"\n      ")])})),1),a("div",{staticClass:"inline-width-div"},[a("span",[t._v("search term")]),a("a-select",{staticClass:"inline-width-like",model:{value:t.adLike,callback:function(e){t.adLike=e},expression:"adLike"}},t._l(t.allLike,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label)+"\n        ")])})),1),a("Input",{staticStyle:{width:"130px"},attrs:{placeholder:"输入关键字"},model:{value:t.adWord,callback:function(e){t.adWord=e},expression:"adWord"}})],1),a("DatePicker",{staticClass:"inline-width",attrs:{type:"daterange",options:t.daterangeoption,clearable:!1,placement:"bottom-start",placeholder:"选择日期范围"},model:{value:t.rangeDates,callback:function(e){t.rangeDates=e},expression:"rangeDates"}}),a("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.handleSubmit}},[t._v("Apply Filter")])],1),a("div",{staticClass:"optionsContents",attrs:{id:"optionsContent"}},t._l(t.tmpOptions,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0)])},l=[],c=a("2f62"),u=a("90de"),h=a("9839"),p=a("4b65"),d=(a("1ef0"),a("1157")),f=a.n(d);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={name:"page-filter-source",components:{ASelect:h["d"],Option:h["d"].Option,VNodes:{functional:!0,render:function(t,e){return e.props.vnodes}}},data:function(){return{adLike:"LIKE",adWord:"",allLike:[{label:"包含",value:"LIKE"},{label:"不含",value:"NOT LIKE"}],projects:[],allProjects:[],apps:[],canSelectAllApp:[],countries:["US"],allCountries:[],traffic_source:[],utm_source:[],utm_campaign:[],all_traffic_source:[],all_utm_source:[],all_utm_campaign:[],allApp:[],allAppTypes:[],canSelectAllAppType:[],appTypes:[],daterangeoption:{},rangeDates:[],maxTagArr:[1,1,1,1,1],maxTagTextArr:[20,20,20,20,20],tmpAllOptions:[],tmpOptions:[],mark:0}},props:{pageRooter:{type:String,default:function(){return null}},loading:{type:Boolean,default:function(){return!1}}},methods:g(g({},Object(c["b"])(["getAllProject","getAllAppForDashboard","getAllAppType","getAllCountry","getASOSourceFiltering"])),{},{handleSubmit:function(t){var e={projects:this.projects,apps:this.apps,appTypes:this.appTypes,rangeDates:this.rangeDates,adLike:this.adLike,adWord:this.adWord.trim(),traffic_source:this.traffic_source,utm_source:this.utm_source,utm_campaign:this.utm_campaign};this.$emit("on-filter-apply",e)},projectsChange:function(t){var e=this;this.apps=[],this.projects.length>0?this.canSelectAllApp=this.allApp.filter((function(t){return e.projects.findIndex((function(e){return e===t.project}))>=0})):this.canSelectAllApp=[].concat(this.allApp)},maxTagCountfun:function(t){return this.maxTagCountObj&&this.maxTagCountObj[t]?this.maxTagCountObj[t]:1},focusFun:function(t){this.mark=1,f()("#optionsContent").length&&f()("#optionsContent").css({display:"none"}),this.maxTagArr=[1,1,1,1,1,1,1,1,1,1],this.maxTagTextArr=[20,20,20,20,20,20,20,20,20,20];var e=this;setTimeout((function(){e.maxTagArr.splice(t,0,10),e.maxTagTextArr.splice(t,0,100)}),500)},blurFun:function(){this.mark=0,this.maxTagArr.findIndex((function(t){return 10===t}))>=0&&(this.maxTagArr=[1,1,1,1,1,1,1,1,1,1],this.maxTagTextArr=[20,20,20,20,20,20,20,20,20,20]),this.setItemValues()},mouseenterFun:function(t){if(1!==this.mark){this.tmpOptions=this.tmpAllOptions[t];var e=Object(p["g"])(this.$refs["filter"].$el.clientWidth,t),a=document.getElementById("optionsContent");f()("#optionsContent").length&&this.tmpOptions&&this.tmpOptions.length>0&&a&&(f()("#optionsContent").css({display:"block",left:e.left+"px"}),a.style.setProperty("top",e.top+"px","important"))}},mouseleaveFun:function(){this.hideContentItem(),this.setItemValues()},setItemValues:function(){var t=this;this.tmpAllOptions[0]=this.projects;var e=[];this.apps&&this.apps.map((function(a,r){t.canSelectAllApp&&t.canSelectAllApp.map((function(t,r){a===t.app_id&&e.push(t.app_name)}))})),this.tmpAllOptions[1]=e,this.tmpAllOptions[2]=this.traffic_source,this.tmpAllOptions[3]=this.utm_source,this.tmpAllOptions[4]=this.utm_campaign},getFilter:function(){return{projects:this.projects,apps:this.apps,appTypes:this.appTypes,rangeDates:[Object(p["c"])(this.rangeDates[0]),Object(p["c"])(this.rangeDates[1])],time_type:Object(p["i"])(this.rangeDates),adLike:this.adLike,adWord:this.adWord.trim(),traffic_source:this.traffic_source,utm_source:this.utm_source,utm_campaign:this.utm_campaign}},setFilter:function(t){this.projects=t.projects,this.apps=t.apps,this.appTypes=t.appTypes,this.rangeDates=t.rangeDates,this.adLike=t.adLike,this.adWord=t.adWord,this.traffic_source=t.traffic_source,this.utm_source=t.utm_source,this.utm_campaign=t.utm_campaign,t.time_type&&(this.rangeDates=Object(u["f"])(t.time_type))},hideContentItem:function(){f()("#optionsContent").length&&f()("#optionsContent").css({display:"none"})}}),mounted:function(){var t=this;this.daterangeoption=Object(u["b"])();var e={group_by:["traffic_source"],multi_sort:[{field:"traffic_source",order:"ascending"}]},a={group_by:["utm_source"],sort:{field:"utm_source",order:"ascending"}},r={group_by:["utm_campaign"],multi_sort:[{field:"utm_campaign",order:"ascending"}]};Promise.all([this.getAllProject(),this.getAllAppType(),this.getAllCountry(),this.getAllAppForDashboard("source_dimension"),this.getASOSourceFiltering(e),this.getASOSourceFiltering(a),this.getASOSourceFiltering(r)]).then((function(e){t.allAppTypes=e[1],t.allCountries=e[2],t.canSelectAllAppType=[].concat(t.allAppTypes),t.allApp=e[3],t.canSelectAllApp=[].concat(t.allApp),t.allProjects=e[0].filter((function(e){return t.allApp.findIndex((function(t){return t.project===e}))>=0}));for(var a=0;a<e[4].data.length;a++)if("Other"===e[4].data[a].traffic_source){var r;(r=e[4].data).splice.apply(r,[a,1].concat(Object(n["a"])(e[4].data.splice(e[4].data.length-1,1,e[4].data[a]))));break}t.all_traffic_source=e[4].data,t.all_utm_source=e[5].data,t.all_utm_campaign=e[6].data}))},created:function(){this.rangeDates=Object(u["f"])("country_dimension")}},v=_,b=(a("1d0b"),a("2877")),y=Object(b["a"])(v,o,l,!1,null,"1526a6a0",null),D=y.exports,O=a("3dd2"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["profitLoss"===t.pageRooter?a("RadioGroup",{staticClass:"radioWapper",model:{value:t.tabItem,callback:function(e){t.tabItem=e},expression:"tabItem"}},t._l(t.tabPaneData,(function(e,r){return a("Radio",{key:r,staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{label:e.label}},[t._v(t._s(e.value))])})),1):t._e(),"profitLoss"===t.pageRooter?a("Divider"):t._e(),a("Tabs",{class:["profitLoss"===t.pageRooter?"hideTabItem":"tabItems"],attrs:{animated:!1},on:{"on-click":t.selectTab},model:{value:t.tabItem,callback:function(e){t.tabItem=e},expression:"tabItem"}},t._l(t.tabPaneData,(function(e,r){return a("TabPane",{key:r,attrs:{label:e.value,name:e.label}},[1==e.showGroup?t._t("refresh"):t._e(),e.label===t.tabItem&&"line"===e.chartType?a("group-line-chart",{ref:"child",refInFor:!0,attrs:{"field-formaters":t.fieldFormaters,"known-fields":t.knownFields,"chart-data":t.lineChartData[r],status:t.checkStatus,previewStatus:t.previewStatus,"money-type":t.moneyType}}):t._e(),e.label===t.tabItem&&"bar"===e.chartType?a("group-bar-chart",{ref:"child",refInFor:!0,attrs:{"field-formaters":t.fieldFormaters,"known-fields":t.knownFields,"chart-data":t.lineChartData[r],status:t.checkStatus,previewStatus:t.previewStatus,"money-type":t.moneyType}}):t._e()],2)})),1)],1)},x=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"dom",style:{width:t.previewStatus?t.client_width:"auto"}})},k=[],C=(a("7f7f"),a("313e")),A=a.n(C),F=a("6612"),j=a.n(F),T={name:"group-bar-chart",props:{chartData:{type:Object,default:function(){return{legendData:[],xAxisData:[],values:[]}}},knownFields:{type:Array,default:function(){return[]}},fieldFormaters:{type:Object,default:function(){return{}}},defaultFormater:{type:String,default:function(){return""}},xAxisType:{type:String,default:function(){return"日期"}},status:{type:Boolean,default:function(){return!1}},previewStatus:{type:Boolean,default:function(){return!1}},moneyType:{type:String,default:function(){return null}},events:{type:Array,default:function(){return[]}},inverseStatus:{type:Boolean,default:function(){return!1}}},data:function(){return{dom:null,client_width:1400,client_height:500}},methods:{resize:function(){this.dom.resize()},wrapOption:function(t){var e=[],a=this.fieldFormaters[this.chartData.chartField];null==a&&(a=this.defaultFormater);for(var r=parseInt(this.chartData.xAxisData.length/15),i=0;i<this.chartData.values.length;i++)e.push({data:this.chartData.values[i].data,stack:this.chartData.values[i].stack,name:this.chartData.values[i].name,z:this.chartData.values[i].z,type:"bar",showAllSymbol:!0,itemStyle:{normal:{color:this.chartData.values[i].itemColor,label:{show:this.status,color:this.chartData.values[i].textColor?this.chartData.values[i].textColor:"",formatter:function(e){if(e.dataIndex%(r+1)!==0)return"";var i=j()(e.value).format(a);return t&&i&&i.indexOf("$")>-1&&(i="¥"+i.substring(i.indexOf("$")+1,i.length)),i}}}}});var n=0===this.chartData.values.length,s=[];this.chartData.groups&&(s=this.chartData.groups.findIndex((function(t){return"total"===t}))>=0?[{label:"Total",val:"total"}]:Object(p["j"])(this.knownFields,this.chartData.groups));var o=this.xAxisType,l=this.events,c=this.chartData.xAxisData,u=Object.hasOwnProperty.call(this.chartData,"grid")?this.chartData.grid.left:"1.2%";return{title:{show:n,text:"暂无数据",left:"center",top:"center",textStyle:{color:"#464c5b",fontSize:16,fontWeight:400}},animation:!1,tooltip:{trigger:"item",axisPointer:{type:"shadow",label:{formatter:function(e){if("y"===e.axisDimension){var r=j()(e.value).format(a);return t&&r&&r.indexOf("$")>-1&&(r="¥"+r.substring(r.indexOf("$")+1,r.length)),r}var i=e.value;if(l.length>0){i="转化率 ";var n=c.findIndex((function(t){return t===e.value}));i+=n+1+": ",i+=l[n]+"  "+(n+2)+": ",i+=l[n+1]}return i},backgroundColor:"#6a7985"}},formatter:function(e){var r=j()(e.value).format(a);t&&r&&r.indexOf("$")>-1&&(r="¥"+r.substring(r.indexOf("$")+1,r.length));for(var i=o+(""!==o?": ":"")+e.name,n=0;n<s.length;n++)i+="<br/>",i+=s[n].label,i+=": ",i+=e.data.label;return i+="<br/>",i+=e.seriesName,i+=": ",i+=r,i}},legend:{formatter:function(t){return t?(t.length>32&&(t=t.slice(0,32)+"..."),t):""},tooltip:{show:!0},orient:"horizontal",left:"3.2%",icon:"rect",bottom:0,data:this.chartData.legendData},grid:{top:"10%",left:u||"1.2%",right:"1.2%",bottom:"3%",height:"80%",width:"auto",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,axisLabel:{rotate:15,interval:r},axisLine:{onZero:!this.inverseStatus},data:this.chartData.xAxisData}],yAxis:[{inverse:!!this.inverseStatus,type:"value",axisLabel:{formatter:function(e){var r=j()(e).format(a);return t&&r&&r.indexOf("$")>-1&&(r="¥"+r.substring(r.indexOf("$")+1,r.length)),r}}}],series:e}},renderChart:function(){var t=this,e=this.wrapOption(this.moneyType);this.$nextTick((function(){t.dom=A.a.init(t.$refs.dom),t.dom.setOption(e,!0),t.autoHeight=t.previewStatus?500:350,t.dom.resize({height:t.autoHeight}),Object(u["m"])(window,"resize",t.resize)}))},reRenderChartSeries:function(){var t=this,e=this.wrapOption(this.moneyType),a=this.dom.getOption();null!=a&&(a.series=e.series),this.$nextTick((function(){t.dom=A.a.init(t.$refs.dom),t.dom.setOption(a,!0),t.autoHeight=t.previewStatus?500:350,t.dom.resize({height:t.autoHeight}),Object(u["m"])(window,"resize",t.resize)}))},callMethod:function(t){},_expandable:function(){this.client_width=document.body.clientWidth,this.client_height=document.body.clientHeight}},watch:{chartData:{deep:!0,handler:function(t,e){this.renderChart()}},status:function(t){this.reRenderChartSeries()},previewStatus:function(t){this.reRenderChartSeries()}},mounted:function(){this.renderChart(),this._expandable();var t=this;window.onresize=function(){t._expandable()}},beforeDestroy:function(){Object(u["l"])(window,"resize",this.resize)}},P=T,L=Object(b["a"])(P,S,k,!1,null,null,null),I=L.exports,R=a("88e6"),N=a("7ba5"),G={name:"tabs-list-source",components:{GroupBarChart:I,GroupLineChart:R["a"],GroupMixtureChart:N["a"]},props:{tabValue:{type:String,default:function(){return"name1"}},pageRooter:{type:String,default:function(){return""}},fieldFormaters:{type:Object,default:function(){return{}}},knownFields:{type:Array,default:function(){return[]}},lineChartData:{type:Array,default:function(){return[]}},tabPaneData:{type:Array,default:function(){return[]}},checkStatus:{type:Boolean,default:function(){return!1}},previewStatus:{type:Boolean,default:function(){return!1}},moneyType:{type:String,default:function(){return null}}},data:function(){return{tabItem:"name1"}},methods:{selectTab:function(t){this.$emit("on-tab-refresh",t)}}},J=G,$=(a("2238"),Object(b["a"])(J,w,x,!1,null,null,null)),z=$.exports,E=a("bdcb"),q=(a("ca62"),a("4481"));function B(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?B(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var W={name:"profit-loss",components:{PageFilterSource:D,ChartGroup:O["a"],TabsListSource:z,TableData:E["a"]},data:function(){return{ChartDes:"*只有dimensions已选项中同时包含日期、AppName、国家，表格中才会展示榜单排名以及推荐位。",cur_sys_name:"aso_source_data",showGroupBy:!0,inited:!1,rowGutter:20,filteredCountry:!1,tabPaneData:[{label:"name1",value:"GP转化率",chartType:"line",showGroup:1},{label:"name2",value:"GP展示用户",chartType:"bar",showGroup:0},{label:"name3",value:"GP获取用户",chartType:"bar",showGroup:0}],chartFields:["store_listing_visitors","store_listing_acquisitions","store_listing_rate"],chartGroups:["app_name","traffic_source"],defaultChartGroups:["app_name"],defaultDimensions:["app_name","traffic_source","date"],knownDimensions:["year","year_quarterly","year_month","date","project","app_name","app_type","traffic_source","utm_source","utm_campaign","search_term"],knownMetrics:["store_listing_visitors","store_listing_acquisitions","store_listing_rate"],inFields:[["projects","project"],["apps","app_id"],["traffic_source","traffic_source"],["utm_campaign","utm_campaign"],["utm_source","utm_source"]],likeFields:[["adWord","adLike","search_term"]],metrics:[],currFilterApply:{},currSortField:{},currDimensions:[],currMetrics:[],currDownloadParams:{},currPageIndex:1,currPageSize:100,currChartGroups:[],curTabName:"name1",lineChartData:[],pageReset:!1,tableLoading:!0,chartLoading:!0,downloadLoading:!1,syncDimensions:[],syncMetrics:[],checkStatus:!1,previewStatus:!1,visible:!0}},computed:M(M({},Object(c["d"])({field_formaters:function(t){return t.dashboard_field.field_formaters},profit_fields:function(t){return t.dashboard_field.profit_fields},allApp:function(t){return t.app_reporting.allApp},tableData:function(t){if(!0===this.inited)return t.aso_source.aso_table_data.data},totalData:function(t){if(!0===this.inited){var e=t.aso_source.aso_table_total_data.data;if(e&&e.length>0)return e[0]}},pageData:function(t){if(!0===this.inited){var e=t.aso_source.aso_table_data,a={page_size:e.page_size,has_next:e.has_next,has_prev:e.has_prev,total_num:e.total_num};return a}}})),{},{allDimensions:function(){return Object(p["j"])(this.profit_fields,this.knownDimensions)},allMetrics:function(){return Object(p["j"])(this.profit_fields,this.knownMetrics)},days:function(){var t=Object(p["h"])(this.currFilterApply,"aso_source_data");return t}}),methods:M(M({},Object(c["b"])(["getDimensionChartData","getASOSourceData","getSourceTableAll","getSourceTableTotalAll","dowloadSourceDataExcel"])),{},{onFilterApply:function(t){this.currFilterApply=JSON.parse(JSON.stringify(t)),this.currSortField={},this.currDimensions=JSON.parse(JSON.stringify(this.currDimensions)),this.currFilterApply.countries&&this.currFilterApply.countries.length>0?this.filteredCountry=!0:this.filteredCountry=!1,this.currPageIndex=1,this.pageReset=!0,this.updatePageData(1)},handleSortChange:function(t,e,a){this.currPageIndex=1,this.currSortField={key:t.key,order:t.order},this.pageReset=!0,this.updateTableData(2)},handleTableRefresh:function(t,e){if(this.currDimensions=JSON.parse(JSON.stringify(t)),0===this.currDimensions.length){this.currDimensionsLength=0;var a=JSON.stringify(this.knownDimensions);this.currDimensions=JSON.parse(a)}else this.currDimensionsLength=1;if(this.currMetrics=e,this.currSortField={},this.currMetrics=e,this.metrics=e,0===this.currMetrics.length){var r=JSON.stringify(this.knownMetrics);this.currMetrics=JSON.parse(r),this.metrics=JSON.parse(r)}this.currPageIndex=1,this.updateTableData(1),this.updateTotalData(),this.pageReset=!0},handleDimensionsChange:function(t){this.syncDimensions=JSON.parse(JSON.stringify(t))},metricsOk:function(t){this.currMetrics=t,this.metrics=t,this.syncMetrics=JSON.parse(JSON.stringify(t)),this.metrics.length<=0&&(this.metrics=JSON.parse(JSON.stringify(this.knownMetrics)),this.syncMetrics=JSON.parse(JSON.stringify(this.knownMetrics)))},download:function(t){this.currDownloadParams=JSON.parse(JSON.stringify(t)),this.downloadFile()},pageChange:function(t){this.currPageIndex=t,this.updateTableData(1)},pageSizeChange:function(t){this.currPageSize=t,this.pageReset=!0,this.updateTableData(1,1)},onClickCell:function(t,e){var a=this;"title_path"===e&&(t.column.render=function(r,i){if(i.index===t.index)return r("span",i.row[e]);var n=i.row[e];return null!=n&&(n=n.split("\n")[0]+(n.split("\n").length>1?"...":"")),r("span",{style:{color:"#1890FF",cursor:"pointer"},on:{click:function(){a.onClickCell(i,e)}}},n)})},showError:function(t){this.$Modal.error({title:"Error",content:t})},pageResetFalse:function(){this.pageReset=!1},changeCheckbox:function(t){this.checkStatus=t,this.lineChartData.status=t},onSelectPageInfo:function(t){var e=JSON.parse(t);this.$refs.pageFilter.setFilter(e.filter),this.$refs.chartGroup.chartGroups=e.chart_group,this.currChartGroups=e.chart_group,this.$refs.tabsList.tabItem=e.cur_chart,this.checkStatus=e.checkStatus,this.$refs.table.$refs.childTableDimensions.setData(e.dimensions),this.currDimensions=JSON.parse(JSON.stringify(e.dimensions.dimensions.length>0?e.dimensions.dimensions:this.knownDimensions)),this.metrics=JSON.parse(JSON.stringify(e.dimensions.metrics.length>0?e.dimensions.metrics:this.knownMetrics)),e.filter.time_type&&(e.filter.rangeDates=Object(u["f"])(e.filter.time_type)),this.onFilterApply(e.filter)},onGetPageInfo:function(t){var e=this.$refs.pageFilter.getFilter(),a=this.currChartGroups,r=this.$refs.tabsList.tabItem,i=this.$refs.table.$refs.childTableDimensions.getData(),n=JSON.stringify({filter:e,chart_group:a,cur_chart:r,checkStatus:this.checkStatus,dimensions:i});q["a"].$emit("setPageInfo",t,n)},previewFun:function(){var t=document.getElementsByClassName("checkBoxItemRightAbsolute")[0];t.style.position="static",this.visible=!1,this.previewStatus=!0,t.style.position="absolute";var e=document.getElementsByClassName("contentsItem");this.$nextTick((function(){if(f()("#mainItem").length&&f()("#closeBtn").length&&e){var t=document.body.clientWidth;f()("#mainItem").css({width:t+"px",height:"100vh",background:"rgba(0,0,0,.8)",position:"fixed",top:"0",left:"0",zIndex:"1000"}),f()("#closeBtn").css({position:"fixed",top:"10%",right:"0",zIndex:"1000",marginTop:"12px",marginRight:"12px",display:"block"}),e[0].style.top="8%"}}))},closeFun:function(){this.visible=!0,this.previewStatus=!1,f()("#mainItem").length&&f()("#closeBtn").length&&(f()("#mainItem").css({width:"auto",height:"auto",position:"static",background:"#ffffff"}),f()("#closeBtn").css({display:"none"}))},wrapChartReqParams:function(t){0===this.currChartGroups.length&&(this.currChartGroups=this.defaultChartGroups);var e,a=JSON.stringify(["date"]);"store_listing_visitors"!==t&&"store_listing_acquisitions"!==t||(a=JSON.stringify(["traffic_source","app_name","date"]),e=[t]),"store_listing_rate"===t&&(this.currChartGroups.findIndex((function(t){return"total"===t}))<0&&(a=JSON.stringify(this.currChartGroups.concat(["date"]))),e=["store_listing_rate"]);var r={time_range:Object(p["r"])(this.currFilterApply,"aso_source_data"),group_by:a,filtering:Object(p["m"])(this.currFilterApply,this.inFields,this.likeFields),fields:Object(p["l"])(e)};return r},wrapTableReqParams:function(t,e){var a=[];this.currDimensions.forEach((function(t,e){var r={field:t,order:"ascending"};a.push(r)}));var r={time_range:Object(p["r"])(this.currFilterApply,"aso_source_data"),page:JSON.stringify({count:2===t||1===e?1:this.currPageIndex,size:this.currPageSize}),filtering:Object(p["m"])(this.currFilterApply,this.inFields,this.likeFields),group_by:Object(p["n"])(this.currDimensions),fields:Object(p["l"])(this.knownMetrics),multi_sort:Object(p["q"])(this.currSortField,t,a,this.currDimensionsLength),query_type:"table",des:"表格数据请求"};return r},wrapTotalReqParams:function(){var t={time_range:Object(p["r"])(this.currFilterApply,"aso_source_data"),filtering:Object(p["m"])(this.currFilterApply,this.inFields,this.likeFields),fields:Object(p["l"])(this.knownMetrics),des:"表格数据汇总"};return t},updatePageData:function(t){var e=this;this.chartLoading=!0,this.tableLoading=!0;var a=this.wrapChartReqParams("store_listing_visitors"),r=this.wrapChartReqParams("store_listing_acquisitions"),i=this.wrapChartReqParams("store_listing_rate"),n=this.wrapTableReqParams(t);Promise.all([this.getASOSourceData(M(M({},a),{},{type:"store_listing_visitors"})),this.getASOSourceData(M(M({},r),{},{type:"store_listing_acquisitions"})),this.getASOSourceData(M(M({},i),{},{type:"store_listing_rate"})),this.getSourceTableAll(n),this.getSourceTableTotalAll(this.wrapTotalReqParams())]).then((function(t){e.inited=!0,e.tableLoading=!1,e.chartLoading=!1,e.getLineChartData()})).catch((function(t){e.tableLoading=!1,e.chartLoading=!1,e.showError(t)}))},handleLineData:function(t){if(t){var e=!0;return t.values.forEach((function(t,a){t.forEach((function(t,a){if(t)return e=!1,e}))})),e}},handleChartData:function(t,e){for(var a=[],r=0;r<t.length;r++){for(var i=t[r],n=!1,s=0;s<a.length;s++){var o=a[s];if(i.date===o.date&&i.app_name===o.app_name){o[i.traffic_source]=i[e],n=!0;break}}if(!n){var l={};l.date=i.date,l.app_name=i.app_name,l[i.traffic_source]=i[e],a.push(l)}}return a},getLineChartData:function(){var t,e=[],a=[],r=[],i=[],s={},o={},l=["Google Play explore","Google Play search","Third-party referrals","Other"];if(!0===this.inited){var c=this.handleChartData(this.$store.state.aso_source.aso_store_listing_visitors.data,"store_listing_visitors"),u=this.handleChartData(this.$store.state.aso_source.aso_store_listing_acquisitions.data,"store_listing_acquisitions");a=Object(p["t"])(c,l,["app_name"]),r=Object(p["t"])(u,l,["app_name"]),i=Object(p["t"])(this.$store.state.aso_source.aso_store_listing_rate.data,["store_listing_rate"],this.currChartGroups),i&&this.handleLineData(i[0])&&(i[0].xAxisData=[])}if(a){for(var h=0;h<a.length;h++){for(var d=a[h].legendData.length-1;d>=0;d--)"/"!==a[h].legendData[d]&&""!==a[h].legendData[d]||(a[h].legendData.splice(d,1),a[h].values.splice(d,1));0===a[h].legendData.length&&(a[h].values=[])}for(var f=!1,m=0;m<a.length;m++){var g=a[m].values.some((function(t,e){return t.some((function(t,e){return t}))}));a[m].exit_one=g,g&&(f=!0)}if(!f)for(var _=0;_<a.length;_++)a[_].values=[],a[_].xAxisData=[]}if(r){for(var v=0;v<r.length;v++){for(var b=r[v].legendData.length-1;b>=0;b--)"/"!==r[v].legendData[b]&&""!==r[v].legendData[b]||(r[v].legendData.splice(b,1),r[v].values.splice(b,1));0===r[v].legendData.length&&(r[v].values=[])}for(var y=!1,D=0;D<r.length;D++){var O=r[D].values.some((function(t,e){return t.some((function(t,e){return t}))}));r[D].exit_one=O,O&&(y=!0)}if(!y)for(var w=0;w<r.length;w++)r[w].values=[],r[w].xAxisData=[]}var x={"Google Play explore":{color:"#4472c4"},"Google Play search":{color:"#ed7d31"},"Third-party referrals":{color:"#a5a5a5"},Other:{color:"#ffbf01"}};if(a&&a.length>0){for(var S=[],k=[],C=function(t){for(var e=a[t],r=x[a[t].chartField],i=function(i){for(var n={},s=e.values[i],o=0;o<s.length;o++)s[o]&&(s[o]=Number(s[o].toFixed(2)),0===s[o]&&(s[o]=null));var l=[];e.values[i].forEach((function(e){l.push({label:a[t].legendData[i],value:e})})),n.data=l,n.stack="".concat(a[0].legendData.indexOf(a[t].legendData[i])),n.itemColor=r.color,n.name=a[t].chartField,n.z=100,k.push(n)},n=0;n<e.values.length;n++)i(n);a[t].exit_one&&S.push(a[t].chartField)},A=0;A<a.length;A++)C(A);a[0]&&(s.chartField=this.chartFields[0],s.childFieldsOther=l,s.groups=Object(n["a"])(a[0].groups),s.legendData=S,s.xAxisData=Object(n["a"])(a[0].xAxisData),s.values=k)}if(r&&r.length>0){for(var F=[],j=[],T=function(t){for(var e=r[t],i=x[r[t].chartField],n=function(a){for(var n={},s=e.values[a],o=0;o<s.length;o++)s[o]&&(s[o]=Number(s[o].toFixed(2)),0===s[o]&&(s[o]=null));var l=[];e.values[a].forEach((function(e){l.push({label:r[t].legendData[a],value:e})})),n.data=l,n.stack="".concat(r[0].legendData.indexOf(r[t].legendData[a])),n.itemColor=i.color,n.name=r[t].chartField,n.z=100,j.push(n)},s=0;s<e.values.length;s++)n(s);a[t].exit_one&&F.push(r[t].chartField)},P=0;P<r.length;P++)T(P);r[0]&&(o.chartField=this.chartFields[1],o.childFieldsOther=l,o.groups=Object(n["a"])(r[0].groups),o.legendData=F,o.xAxisData=Object(n["a"])(r[0].xAxisData),o.values=j)}if(i)for(var L=0;L<i.length;L++)for(var I=i[L].legendData.length-1;I>=0;I--)"/"!==i[L].legendData[I]&&""!==i[L].legendData[I]||(i[L].legendData.splice(I,1),i[L].values.splice(I,1));if(i&&0!==Object.keys(i).length||(i=[{chartField:this.chartFields[1],legendData:[],xAxisData:[],values:[]}]),i.forEach((function(t){t.grid={left:"2.8%"}})),this.changeBarDataStack(s),this.changeBarDataStack(o),(t=e).push.apply(t,Object(n["a"])(i)),e.push(s),e.push(o),!this.inited){e=[];for(var R=0;R<this.chartFields.length;R++)e.push({chartField:this.chartFields[R],legendData:[],xAxisData:[],values:[]})}this.lineChartData=e},changeBarDataStack:function(t){for(var e={},a=0;a<t.values.length;a++){var r=t.values[a];Object.hasOwnProperty.call(e,r.stack)||(e[r.stack]=0);for(var i=0;i<r.data.length;i++){var n=r.data[i];n.value&&(e[r.stack]+=n.value)}}var s=[];for(var o in e)s.push({value:e[o],key:o});s.sort((function(t,e){return e.value-t.value})),t.values.forEach((function(t,e){if(t.stack)for(var a=0;a<s.length;a++)if(t.stack===s[a].key){t.stack="".concat(a);break}})),t.values.sort((function(t,e){return e.stack-t.stack}))},updateChartData:function(){var t=this;this.chartLoading=!0;var e=this.wrapChartReqParams();this.getDimensionChartData(e).then((function(e){t.chartLoading=!1})).catch((function(e){t.chartLoading=!1,t.showError(e)}))},handleChartGroupChange:function(t){this.currChartGroups=t},handleChartGroupRefresh:function(){var t=this;this.chartLoading=!0;var e=this.wrapChartReqParams("store_listing_visitors"),a=this.wrapChartReqParams("store_listing_acquisitions"),r=this.wrapChartReqParams("store_listing_rate");Promise.all([this.getASOSourceData(M(M({},e),{},{type:"store_listing_visitors"})),this.getASOSourceData(M(M({},a),{},{type:"store_listing_acquisitions"})),this.getASOSourceData(M(M({},r),{},{type:"store_listing_rate"}))]).then((function(e){t.chartLoading=!1,t.getLineChartData()})).catch((function(e){t.chartLoading=!1,t.showError(e)}))},selectTab:function(t){this.curTabName=t},updateTableData:function(t,e){var a=this;this.tableLoading=!0;var r=this.wrapTableReqParams(t,e);r.des="表格数据请求2",this.getSourceTableAll(r).then((function(t){a.tableLoading=!1})).catch((function(t){a.tableLoading=!1,a.showError(t)}))},updateTotalData:function(){var t=this,e=this.wrapTotalReqParams();e.des="表格数据汇总2",this.getSourceTableTotalAll(e).then((function(t){})).catch((function(e){return t.showError(e)}))},wrapDownloadReqParams:function(){var t=[];this.currDownloadParams.dimensions.forEach((function(e,a){var r={field:e,order:"ascending"};t.push(r)}));var e={time_range:Object(p["r"])(this.currFilterApply,"aso_source_data"),filtering:Object(p["m"])(this.currFilterApply,this.inFields,this.likeFields),group_by:Object(p["n"])(this.currDownloadParams.dimensions,!0),fields:Object(p["l"])(this.currDownloadParams.metrics),file_format:this.currDownloadParams.fileFormat,pageRooter:"aso_source_data",query_type:"table",multi_sort:t};return e},downloadFile:function(){var t=this;this.downloadLoading=!0;var e=this.wrapDownloadReqParams();this.dowloadSourceDataExcel(e).then((function(e){t.downloadLoading=!1;var a=document.createElement("a");a.href=e.url,a.click()})).catch((function(e){t.downloadLoading=!1,t.showError(e)}))},setDefaultDimensionsAndMetrics:function(){var t=JSON.stringify(this.defaultDimensions);this.currDimensions=JSON.parse(t),this.syncDimensions=JSON.parse(t),t=JSON.stringify(this.knownMetrics),this.metrics=JSON.parse(t),this.currMetrics=JSON.parse(t),this.syncMetrics=JSON.parse(t)}}),mounted:function(){this.setDefaultDimensionsAndMetrics(),this.updatePageData();var t=this;q["a"].$on("selectPageInfo",(function(e){t.onSelectPageInfo(e)})),q["a"].$on("getPageInfo",(function(e){t.onGetPageInfo(e)}))},beforeDestroy:function(){q["a"].$off("selectPageInfo"),q["a"].$off("getPageInfo")}},V=W,H=(a("7c66"),Object(b["a"])(V,r,i,!1,null,"644859e2",null));e["default"]=H.exports},"640e":function(t,e,a){},"7c66":function(t,e,a){"use strict";a("640e")},e611:function(t,e,a){}}]);