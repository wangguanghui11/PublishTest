(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624766b8"],{3614:function(t,e,a){},"3dd2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-selection",staticStyle:{float:"left"}},[a("span",[t._v("Group by")]),a("a-select",{staticClass:"inline-width",staticStyle:{width:"230px","margin-right":"10px","margin-left":"10px","font-size":"12px"},attrs:{mode:t.selectMode,filterable:"",showArrow:"","max-tag-count":1,"max-tag-text-length":20,placeholder:"至少选择一个",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(0)},blur:function(e){return t.blurFun()},change:t.handleChartGroupChange,mouseenter:function(e){return t.mouseenterFun(0)},mouseleave:function(e){return t.mouseleaveFun()}},model:{value:t.chartGroups,callback:function(e){t.chartGroups=e},expression:"chartGroups"}},t._l(t.allOptions,(function(e,i){return a("a-option",{key:i,attrs:{value:e.val}},[t._v(t._s(e.label)+"\n      ")])})),1),a("Button",{attrs:{type:"primary",disabled:t.disableRefreshButton},on:{click:t.handleRefresh}},[t._v("刷新")]),a("div",{staticClass:"optionsContents",attrs:{id:"optionsContentItem"}},t._l(t.tmpOptions,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0)],1)},n=[],r=(a("20d6"),a("4b65")),s=a("9839"),o=a("1157"),l=a.n(o),c={name:"chart-group",components:{ASelect:s["d"],AOption:s["d"].Option},props:{selectMode:{type:String,default:"multiple"},knownFields:{type:Array,default:function(){return[]}},allChartGroups:{type:Array,default:function(){return[]}},defaultChartGroups:{type:Array,default:function(){return[]}}},data:function(){return{chartGroups:[],tmpAllOptions:[],tmpOptions:[],mark:0}},computed:{allOptions:function(){var t=Object(r["j"])(this.knownFields,this.allChartGroups);return t.push({label:"Total",val:"total"}),t},disableRefreshButton:function(){return 0===this.chartGroups.length}},methods:{handleChartGroupChange:function(t){if("string"!==typeof t){if(t.length>1){var e=t.findIndex((function(t){return"total"===t}));0===e?t=t.filter((function(t){return"total"!==t})):e>0&&(t=["total"]),this.chartGroups=t}this.$emit("on-chart-group-change",t)}else this.$emit("on-chart-group-change",[t])},handleRefresh:function(){this.$emit("on-chart-group-refresh")},initChartGroups:function(){this.chartGroups=this.defaultChartGroups},mouseenterFun:function(t){if("default"!==this.selectMode&&1!==this.mark){this.tmpOptions=this.tmpAllOptions[t];var e=84,a=48,i=document.getElementById("optionsContentItem");l()("#optionsContentItem").length&&this.tmpOptions&&this.tmpOptions.length>0&&i&&(l()("#optionsContentItem").css({display:"block",left:e+"px"}),i.style.setProperty("top",a+"px","important"))}},mouseleaveFun:function(){"default"!==this.selectMode&&(this.hideContentItem(),this.setItemValues())},focusFun:function(t){"default"!==this.selectMode&&(this.mark=1,l()("#optionsContentItem").length&&l()("#optionsContentItem").css({display:"none"}),setTimeout((function(){}),500))},blurFun:function(){"default"!==this.selectMode&&(this.mark=0,this.setItemValues())},hideContentItem:function(){l()("#optionsContentItem").length&&l()("#optionsContentItem").css({display:"none"})},setItemValues:function(){var t=this,e=[];this.chartGroups.map((function(a,i){t.allOptions.map((function(t,i){a===t.val&&e.push(t.label)}))})),this.tmpAllOptions[0]=e}},mounted:function(){this.chartGroups=this.defaultChartGroups,this.setItemValues()}},u=c,p=(a("ccd5"),a("2877")),h=Object(p["a"])(u,i,n,!1,null,"759bf7c6",null);e["a"]=h.exports},"3e7f":function(t,e,a){},"85e4":function(t,e,a){"use strict";a("3e7f")},"88e6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"dom",style:{width:t.previewStatus?t.client_width:"auto"}})},n=[],r=(a("7f7f"),a("28a5"),a("20d6"),a("ac6a"),a("313e")),s=a.n(r),o=a("90de"),l=a("6612"),c=a.n(l),u=a("4b65"),p={name:"group-line-chart",props:{chartData:{type:Object,default:function(){return{legendData:[],xAxisData:[],values:[]}}},knownFields:{type:Array,default:function(){return[]}},fieldFormaters:{type:Object,default:function(){return{}}},defaultFormater:{type:String,default:function(){return""}},xAxisType:{type:String,default:function(){return"日期"}},status:{type:Boolean,default:function(){return!1}},previewStatus:{type:Boolean,default:function(){return!1}},moneyType:{type:String,default:function(){return null}},events:{type:Array,default:function(){return[]}},inverseStatus:{type:Boolean,default:function(){return!1}}},data:function(){return{dom:null,client_width:1400,client_height:500}},methods:{resize:function(){this.dom.resize()},wrapOption:function(t){var e=this,a=[],i=this.fieldFormaters[this.chartData.chartField];null==i&&(i=this.defaultFormater);var n="数值";null!=this.chartData.chartField&&(n=this.knownFields.filter((function(t){return t.val===e.chartData.chartField}))[0].label);for(var r=parseInt(this.chartData.xAxisData.length/15),s=0;s<this.chartData.values.length;s++)a.push({name:this.chartData.legendData[s],type:"line",showAllSymbol:!0,data:this.chartData.values[s],itemStyle:{normal:{label:{show:this.status,formatter:function(e){if(e.dataIndex%(r+1)!==0)return"";var a=c()(e.value).format(i);return t&&a&&a.indexOf("$")>-1&&(a="¥"+a.substring(a.indexOf("$")+1,a.length)),a}}}}});var o=0===this.chartData.legendData.length,l=[];this.chartData.groups&&(l=this.chartData.groups.findIndex((function(t){return"total"===t}))>=0?[{label:"Total",val:"total"}]:Object(u["j"])(this.knownFields,this.chartData.groups));var p=this.xAxisType,h=this.events,d=this.chartData.xAxisData,f=Object.hasOwnProperty.call(this.chartData,"grid")?this.chartData.grid.left:"1.2%";return{title:{show:o,text:"暂无数据",left:"center",top:"center",textStyle:{color:"#464c5b",fontSize:16,fontWeight:400}},animation:!1,tooltip:{trigger:"item",axisPointer:{type:"cross",label:{formatter:function(e){if("y"===e.axisDimension){var a=c()(e.value).format(i);return t&&a&&a.indexOf("$")>-1&&(a="¥"+a.substring(a.indexOf("$")+1,a.length)),a}var n=e.value;if(h.length>0){n="转化率 ";var r=d.findIndex((function(t){return t===e.value}));n+=r+1+": ",n+=h[r]+"  "+(r+2)+": ",n+=h[r+1]}return n},backgroundColor:"#6a7985"}},formatter:function(e){var a=e.seriesName.split("/"),r=c()(e.value).format(i);t&&r&&r.indexOf("$")>-1&&(r="¥"+r.substring(r.indexOf("$")+1,r.length));for(var s=p+(""!==p?": ":"")+e.name,o=0;o<l.length;o++)s+="<br/>",s+=l[o].label,s+=": ",s+=a[o];return s+="<br/>",s+=n,s+=": ",s+=r,s}},legend:{formatter:function(t){return t?(t.length>32&&(t=t.slice(0,32)+"..."),t):""},tooltip:{show:!0},orient:"vertical",type:"scroll",right:10,icon:"circle",data:this.chartData.legendData},grid:{top:"10%",left:f||"1.2%",right:"260px",bottom:"3%",height:"80%",width:"auto",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{rotate:15,interval:r},axisLine:{onZero:!this.inverseStatus},data:this.chartData.xAxisData}],yAxis:[{inverse:!!this.inverseStatus,type:"value",axisLabel:{formatter:function(e){var a=c()(e).format(i);return t&&a&&a.indexOf("$")>-1&&(a="¥"+a.substring(a.indexOf("$")+1,a.length)),a}}}],series:a}},renderChart:function(){var t=this,e=this.wrapOption(this.moneyType);this.$nextTick((function(){t.dom=s.a.init(t.$refs.dom),t.dom.setOption(e,!0),t.autoHeight=t.previewStatus?500:350,t.dom.resize({height:t.autoHeight}),Object(o["m"])(window,"resize",t.resize)}))},reRenderChartSeries:function(){var t=this,e=this.wrapOption(this.moneyType),a=this.dom.getOption();null!=a&&(a.series=e.series),this.$nextTick((function(){t.dom=s.a.init(t.$refs.dom),t.dom.setOption(a,!0),t.autoHeight=t.previewStatus?500:350,t.dom.resize({height:t.autoHeight}),Object(o["m"])(window,"resize",t.resize)}))},callMethod:function(t){},_expandable:function(){this.client_width=document.body.clientWidth,this.client_height=document.body.clientHeight}},watch:{chartData:{deep:!0,handler:function(t,e){this.renderChart()}},status:function(t){this.reRenderChartSeries()},previewStatus:function(t){this.reRenderChartSeries()}},mounted:function(){this.renderChart(),this._expandable();var t=this;window.onresize=function(){t._expandable()}},beforeDestroy:function(){Object(o["l"])(window,"resize",this.resize)}},h=p,d=a("2877"),f=Object(d["a"])(h,i,n,!1,null,null,null);e["a"]=f.exports},ccd5:function(t,e,a){"use strict";a("3614")},ebcd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("page-filter",{ref:"pageFilter",attrs:{loading:t.tableLoading},on:{"on-filter-apply":t.onFilterApply}})],1),a("div",{attrs:{id:"mainItem"}},[a("Row",{staticClass:"contentsItem"},[a("Card",{attrs:{shadow:""}},[a("div",{staticStyle:{width:"100%",height:"auto",overflow:"hidden"}},[a("chart-group",{ref:"chartGroup",attrs:{"known-fields":t.mediabuy_campaign_estimate_fields,"all-chart-groups":t.chartGroups,"default-chart-groups":t.defaultChartGroups},on:{"on-chart-group-change":t.handleChartGroupChange,"on-chart-group-refresh":t.handleChartGroupRefresh}}),a("div",{staticClass:"checkBoxItemRight"},[a("Checkbox",{staticStyle:{"font-size":"14px","margin-right":"40px"},on:{"on-change":t.changeCheckbox},model:{value:t.checkStatus,callback:function(e){t.checkStatus=e},expression:"checkStatus"}},[t._v("显示数字标签")]),t.visible?a("a",{on:{click:t.previewFun}},[t._v("点击预览")]):t._e(),a("Tooltip",{attrs:{content:"关闭预览"}},[a("Button",{attrs:{id:"closeBtn"},on:{click:t.closeFun}},[t._v("X")])],1)],1)],1),a("Tabs",{attrs:{animated:!1},on:{"on-click":t.changeTabs},model:{value:t.tabItem,callback:function(e){t.tabItem=e},expression:"tabItem"}},[a("TabPane",{attrs:{label:"Spend",name:"name1"}},["name1"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[0],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"30天预估ROAS",name:"name2"}},["name2"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[1],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"30天预估收入",name:"name3"}},["name3"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[2],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"30天实际ROAS",name:"name4"}},["name4"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[3],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"30天实际收入",name:"name5"}},["name5"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[4],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"LT预估ROAS",name:"name6"}},["name6"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[5],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"LT预估收入",name:"name7"}},["name7"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[6],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1),a("TabPane",{attrs:{label:"Installs",name:"name8"}},["name8"===t.tabItem?a("group-line-chart",{ref:"child",attrs:{"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,"chart-data":t.lineChartData[7],status:t.checkStatus,previewStatus:t.previewStatus}}):t._e()],1)],1)],1),t.chartLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),a("Row",{staticStyle:{"margin-top":"5px"}},[a("Card",{attrs:{shadow:""}},[a("table-data",{ref:"table",attrs:{data:t.tableData,"table-loading":t.tableLoading,days:t.days,"all-app":t.allApp,"footer-data":t.totalData,"page-reset":t.pageReset,"page-data":t.pageData,"field-formaters":t.field_formaters,"known-fields":t.mediabuy_campaign_estimate_fields,dimensions:t.currDimensions,metrics:t.metrics,"default-dimensions":t.defaultDimensions,"all-dimensions":t.allDimensions,"all-metrics":t.allMetrics,"sync-dimensions":t.syncDimensions,"sync-metrics":t.syncMetrics,"page-rooter":"mediabuyCampaignEstimate","search-tag":t.searchTag},on:{"on-sort-change":t.handleSortChange,"metrics-ok":t.metricsOk,"on-table-refresh":t.handleTableRefresh,"on-download":t.download,"on-page-change":t.pageChange,"on-page-size-change":t.pageSizeChange,"on-page-reset-true":t.pageResetFalse,"on-dimensions-change":t.handleDimensionsChange,"on-set-dimensions":t.handleSetDimensions}})],1),t.downloadLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},n=[],r=(a("8e6e"),a("456d"),a("20d6"),a("ac6a"),a("5df3"),a("ade3")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",{ref:"filter",staticClass:"filter-selection"},[a("div",[a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[0],"max-tag-text-length":this.maxTagTextArr[0],placeholder:"项目组-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(0)},blur:function(e){return t.blurFun()},change:t.projectsChange,mouseenter:function(e){return t.mouseenterFun(0)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.projects.length)+"/"+t._s(t.allProjects.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.projects=t.allProjects}}},[t._v("全选")])],1)],1)}}]),model:{value:t.projects,callback:function(e){t.projects=e},expression:"projects"}},t._l(t.allProjects,(function(e){return a("a-option",{key:e,attrs:{value:e}},[t._v(t._s(e)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[1],"max-tag-text-length":this.maxTagTextArr[1],placeholder:"App分类-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(1)},blur:function(e){return t.blurFun()},change:t.appTypeChange,mouseenter:function(e){return t.mouseenterFun(1)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.appTypes.length)+"/"+t._s(t.canSelectAllAppType.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.appTypes=t.canSelectAllAppType.map((function(t){return t.id}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.appTypes,callback:function(e){t.appTypes=e},expression:"appTypes"}},t._l(t.canSelectAllAppType,(function(e){return a("a-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[2],"max-tag-text-length":this.maxTagTextArr[2],placeholder:"App-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(2)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(2)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.apps.length)+"/"+t._s(t.canSelectAllApp.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.apps=t.canSelectAllApp.map((function(t){return t.app_id}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.apps,callback:function(e){t.apps=e},expression:"apps"}},t._l(t.canSelectAllApp,(function(e){return a("a-option",{key:e.app_id,attrs:{value:e.app_id}},[t._v(t._s(e.app_name)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[3],"max-tag-text-length":this.maxTagTextArr[3],placeholder:"国家-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(3)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(3)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.countries.length)+"/"+t._s(t.allCountries.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.countries=t.allCountries.map((function(t){return t.country_id}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.countries,callback:function(e){t.countries=e},expression:"countries"}},t._l(t.allCountries,(function(e){return a("a-option",{key:e.country_id,attrs:{value:e.country_id}},[t._v(t._s(e.country_name+"("+e.country_id+")")+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[4],"max-tag-text-length":this.maxTagTextArr[4],placeholder:"MediaSource-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(4)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(4)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.mediaSources.length)+"/"+t._s(t.allMediaSources.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.mediaSources=t.allMediaSources.map((function(t){return t.id}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.mediaSources,callback:function(e){t.mediaSources=e},expression:"mediaSources"}},t._l(t.allMediaSources,(function(e){return a("a-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name)+"\n      ")])})),1),a("a-select",{staticClass:"inline-width",staticStyle:{"font-size":"12px"},attrs:{mode:"multiple",allowClear:"",filterable:"",showArrow:"",autoClearSearchValue:!1,"max-tag-count":this.maxTagArr[5],"max-tag-text-length":this.maxTagTextArr[5],placeholder:"优化师-全部",optionFilterProp:"children"},on:{focus:function(e){return t.focusFun(5)},blur:function(e){return t.blurFun()},mouseenter:function(e){return t.mouseenterFun(5)},mouseleave:function(e){return t.mouseleaveFun()}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticClass:"select-all-divider"}),a("div",{staticClass:"select-all-div",on:{mousedown:function(t){return t.preventDefault()}}},[a("span",{staticClass:"select-all-span"},[t._v(t._s(t.optimizers.length)+"/"+t._s(t.allOptimizers.length))]),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.optimizers=t.allOptimizers.map((function(t){return t.name}))}}},[t._v("全选")])],1)],1)}}]),model:{value:t.optimizers,callback:function(e){t.optimizers=e},expression:"optimizers"}},t._l(t.allOptimizers,(function(e){return a("a-option",{key:e.name,attrs:{value:e.name}},[t._v(t._s(e.name)+"\n      ")])})),1),a("div",{staticClass:"inline-width-div"},[a("span",[t._v("Campaign")]),a("Select",{staticClass:"inline-width-like",model:{value:t.adsLike,callback:function(e){t.adsLike=e},expression:"adsLike"}},t._l(t.allLike,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label)+"\n        ")])})),1),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"输入关键字"},model:{value:t.adsWord,callback:function(e){t.adsWord=e},expression:"adsWord"}})],1),a("DatePicker",{staticClass:"inline-width",attrs:{type:"daterange",options:t.daterangeoption,clearable:!1,placement:"bottom-start",placeholder:"选择日期范围"},model:{value:t.rangeDates,callback:function(e){t.rangeDates=e},expression:"rangeDates"}}),a("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.handleSubmit}},[t._v("Apply Filter")])],1),a("div",{staticClass:"optionsContents",attrs:{id:"optionsContent"}},t._l(t.tmpOptions,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0)])},o=[],l=(a("7f7f"),a("4f7f"),a("2f62")),c=a("90de"),u=a("4b65"),p=a("9839"),h=(a("1ef0"),a("1157")),d=a.n(h);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"page-filter",components:{ASelect:p["d"],AOption:p["d"].Option,VNodes:{functional:!0,render:function(t,e){return e.props.vnodes}}},data:function(){return{projects:[],apps:[],countries:[],appTypes:[],mediaSources:[],optimizers:[],adsLike:"LIKE",adsWord:"",allProjects:[],canSelectAllAppType:[],canSelectAllApp:[],allApp:[],allCountries:[],allAppTypes:[],allMediaSources:[],allOptimizers:[],daterangeoption:{},rangeDates:[],allLike:[{label:"包含",value:"LIKE"},{label:"不含",value:"NOT LIKE"}],maxTagArr:[1,1,1,1,1,1,1,1,1,1,1,1],maxTagTextArr:[20,20,20,20,20,20,20,20,20,20,20,20],tmpAllOptions:[],tmpOptions:[],mark:0}},props:{loading:{type:Boolean,default:function(){return!1}}},methods:m(m({},Object(l["b"])(["getAllProject","getCampaignRoiApplication","getAllAppType","getAllCountry","getAllMediaSource","getAllOptimizer"])),{},{filterAppAndAppType:function(t,e){this.filterApp(t,e),this.filterAppType(t)},filterAppType:function(t){if(this.canSelectAllAppType=[].concat(this.allAppTypes),t.length>0){for(var e=[],a=0;a<this.canSelectAllApp.length;a++)e.push(this.canSelectAllApp[a].app_type);var i=new Set(e);this.canSelectAllAppType=this.canSelectAllAppType.filter((function(t){return i.has(t.id)})),this.appTypes=this.appTypes.filter((function(t){return i.has(t)}))}},filterApp:function(t,e){if(this.canSelectAllApp=[].concat(this.allApp),t&&t.length>0){this.apps=[];var a=new Set(t);this.canSelectAllApp=this.canSelectAllApp.filter((function(t){return a.has(t.project)}))}if(e&&e.length>0){this.apps=[];var i=new Set(e);this.canSelectAllApp=this.canSelectAllApp.filter((function(t){return i.has(t.app_type)}))}},projectsChange:function(t){this.appTypes=[],this.filterAppAndAppType(t,this.appTypes)},appTypeChange:function(t){this.filterApp(this.projects,t)},handleSubmit:function(t){var e={projects:this.projects,apps:this.apps,countries:this.countries,appTypes:this.appTypes,rangeDates:this.rangeDates,adsLike:this.adsLike,adsWord:this.adsWord.trim(),mediaSources:this.mediaSources,optimizers:this.optimizers};this.$emit("on-filter-apply",e)},maxTagCountfun:function(t){return this.maxTagCountObj&&this.maxTagCountObj[t]?this.maxTagCountObj[t]:1},focusFun:function(t){this.mark=1,d()("#optionsContent").length&&d()("#optionsContent").css({display:"none"}),this.maxTagArr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],this.maxTagTextArr=[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];var e=this;setTimeout((function(){e.maxTagArr.splice(t,0,10),e.maxTagTextArr.splice(t,0,100)}),500)},blurFun:function(){this.mark=0,this.maxTagArr.findIndex((function(t){return 10===t}))>=0&&(this.maxTagArr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],this.maxTagTextArr=[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]),this.setItemValues()},mouseenterFun:function(t){if(1!==this.mark){this.tmpOptions=this.tmpAllOptions[t];var e=Object(u["g"])(this.$refs["filter"].$el.clientWidth,t),a=document.getElementById("optionsContent");d()("#optionsContent").length&&this.tmpOptions&&this.tmpOptions.length>0&&a&&(d()("#optionsContent").css({display:"block",left:e.left+"px"}),a.style.setProperty("top",e.top+"px","important"))}},mouseleaveFun:function(){this.hideContentItem(),this.setItemValues()},setItemValues:function(){var t=this;this.tmpAllOptions[0]=this.projects;var e=[];this.appTypes&&this.appTypes.map((function(a,i){t.allAppTypes&&t.allAppTypes.map((function(t,i){t.id===a&&e.push(t.name)}))})),this.tmpAllOptions[1]=e;var a=[];this.apps&&this.apps.map((function(e,i){t.canSelectAllApp&&t.canSelectAllApp.map((function(t,i){e===t.app_id&&a.push(t.app_name)}))})),this.tmpAllOptions[2]=a;var i=[];this.countries&&this.countries.map((function(e,a){t.allCountries&&t.allCountries.map((function(t,a){e===t.country_id&&i.push(t.country_name+"("+e+")")}))})),this.tmpAllOptions[3]=i,this.tmpAllOptions[4]=this.mediaSources,this.tmpAllOptions[5]=this.optimizers},getFilter:function(){return{projects:this.projects,apps:this.apps,countries:this.countries,appTypes:this.appTypes,adsLike:this.adsLike,adsWord:this.adsWord.trim(),mediaSources:this.mediaSources,optimizers:this.optimizers,rangeDates:[Object(u["c"])(this.rangeDates[0]),Object(u["c"])(this.rangeDates[1])],time_type:Object(u["i"])(this.rangeDates)}},setFilter:function(t){this.projects=t.projects,this.apps=t.apps,this.countries=t.countries,this.appTypes=t.appTypes,this.adsLike=t.adsLike,this.adsWord=t.adsWord,this.mediaSources=t.mediaSources,this.optimizers=t.optimizers,this.rangeDates=t.rangeDates,t.time_type&&(this.rangeDates=Object(c["f"])(t.time_type))},hideContentItem:function(){d()("#optionsContent").length&&d()("#optionsContent").css({display:"none"})}}),mounted:function(){var t=this;this.daterangeoption=Object(c["b"])(),Promise.all([this.getAllProject(),this.getAllAppType(),this.getAllCountry(),this.getCampaignRoiApplication(),this.getAllMediaSource(),this.getAllOptimizer()]).then((function(e){t.allAppTypes=e[1],t.allCountries=e[2],t.allApp=e[3],t.allMediaSources=e[4].filter((function(t){return"organic"!==t.id})),t.canSelectAllApp=[].concat(t.allApp),t.canSelectAllAppType=[].concat(t.allAppTypes),t.allOptimizers=e[5],t.allProjects=e[0].filter((function(e){return t.allApp.findIndex((function(t){return t.project===e}))>=0}))}))},created:function(){this.rangeDates=Object(c["f"])("1 week")}},y=g,b=(a("85e4"),a("2877")),v=Object(b["a"])(y,s,o,!1,null,"c04e5676",null),_=v.exports,S=a("88e6"),w=a("bdcb"),O=a("3dd2"),C=a("4481");a("ca62");function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={name:"mediabuy-campaign-estimate",components:{PageFilter:_,GroupLineChart:S["a"],ChartGroup:O["a"],TableData:w["a"]},data:function(){return{tabItem:"name1",inited:!1,rowGutter:20,chartFields:["spend","roas_pred_day30","revenue_pred_day30","roas_actual_day30","revenue_actual_day30","lt_roas_pred","lt_revenue_pred","installs"],chartGroups:["app_name","country","media_source","optimizer"],defaultDimensions:["date"],knownDimensions:["year","quarterly","month","date","project","app_type","app_name","country","media_source","campaign_name","optimizer"],defaultChartGroups:["app_name"],knownMetrics:["installs","spend","average_cpi","revenue_actual_day0","actual_roas_day0","revenue_pred_factor_30","revenue_pred_day30","profit_pred_day30","roas_pred_day30","revenue_actual_day30","profit_actual_day30","roas_actual_day30","lt_revenue_pred_factor","lt_revenue_pred","lt_profit_pred","lt_roas_pred","retention"],inFields:[["projects","project"],["apps","app_id"],["countries","country"],["appTypes","app_type"],["mediaSources","media_source"],["optimizers","optimizer"]],likeFields:[["adsWord","adsLike","campaign_name"]],metrics:[],currFilterApply:{},currSortField:{},currDimensions:[],currMetrics:[],currDownloadParams:{},currPageIndex:1,currPageSize:100,currChartGroups:[],lineChartData:[],pageReset:!1,tableLoading:!0,chartLoading:!0,downloadLoading:!1,syncDimensions:[],syncMetrics:[],checkStatus:!1,previewStatus:!1,visible:!0,searchParams:{},totalType:[],searchTag:!1}},computed:x(x({},Object(l["d"])({field_formaters:function(t){return t.dashboard_field.field_formaters},mediabuy_campaign_estimate_fields:function(t){return t.dashboard_field.mediabuy_campaign_estimate_fields},allApp:function(t){return t.app_reporting.allApp},tableData:function(t){if(!0===this.inited)return t.mediabuy_campaign_estimate.mediabuyCampaignEstimateTableData.data},totalData:function(t){if(!0===this.inited){var e=t.mediabuy_campaign_estimate.mediabuyCampaignEstimateTotalData.data;if(e&&e.length>0)return e[0]}},pageData:function(t){if(!0===this.inited){var e=t.mediabuy_campaign_estimate.mediabuyCampaignEstimateTableData;return{page_size:e.page_size,has_next:e.has_next,has_prev:e.has_prev,total_num:e.total_num}}}})),{},{allDimensions:function(){var t=Object(u["j"])(this.mediabuy_campaign_estimate_fields,this.knownDimensions),e=Object(u["d"])(t,this.searchParams);return e},allMetrics:function(){return Object(u["j"])(this.mediabuy_campaign_estimate_fields,this.knownMetrics)},days:function(){var t=Object(u["h"])(this.currFilterApply);return t}}),methods:x(x({},Object(l["b"])(["getMediabuyCampaignEstimateChartData","getMediabuyCampaignEstimateTableData","getMediabuyCampaignEstimateTotalData","getMediabuyCampaignEstimateDownloadUrl"])),{},{delComposeData:function(t){return t&&t.filter((function(t){return"age"!==t&&"gender"!==t&&"country"!==t&&"pubsite"!==t&&"publisher_platform"!==t&&"platform_position"!==t}))},handleDimensions:function(t){var e=[];return t.indexOf("country")>=0||t.indexOf("pubsite")>=0?e.push("country"):t.indexOf("age")>=0||t.indexOf("gender")>=0?e.push("age"):(t.indexOf("platform_position")>=0||t.indexOf("publisher_platform")>=0)&&e.push("publisher_platform"),e},onFilterApply:function(t){this.totalType=[],this.currFilterApply=JSON.parse(JSON.stringify(t)),this.currSortField={},this.currDimensions=JSON.parse(JSON.stringify(this.currDimensions)),this.currPageIndex=1,this.pageReset=!0,this.updatePageData(1)},handleSetDimensions:function(t){this.currDimensions=JSON.parse(JSON.stringify(t))},handleSortChange:function(t,e,a){this.currPageIndex=1,this.currSortField={key:t.key,order:t.order},this.pageReset=!0,this.updateTableData(2)},handleTableRefresh:function(t,e){if(this.totalType=this.handleDimensions(t),this.currDimensions=JSON.parse(JSON.stringify(t)),0===this.currDimensions.length){this.currDimensionsLength=0;var a=JSON.stringify(this.knownDimensions);this.currDimensions=JSON.parse(a)}else this.currDimensionsLength=1;if(this.currMetrics=e,this.currSortField={},this.currMetrics=e,this.metrics=e,0===this.currMetrics.length){var i=JSON.stringify(this.knownMetrics);this.currMetrics=JSON.parse(i),this.metrics=JSON.parse(i)}this.currPageIndex=1,this.updateTableData(1),this.updateTotalData(1),this.pageReset=!0},handleDimensionsChange:function(t){this.syncDimensions=JSON.parse(JSON.stringify(t))},handleChartGroupChange:function(t){this.currChartGroups=t},handleChartGroupRefresh:function(){var t=this;this.chartLoading=!0,Promise.all([this.getMediabuyCampaignEstimateChartData(this.wrapChartReqParams())]).then((function(e){t.chartLoading=!1,t.getLineChartData()})).catch((function(e){t.chartLoading=!1,t.showError(e)}))},getLineChartData:function(){var t=[];if(!0===this.inited&&(t=Object(u["t"])(this.$store.state.mediabuy_campaign_estimate.mediabuyCampaignEstimateChartData.data,this.chartFields,this.currChartGroups)),!t||t.length<=0){t=[];for(var e=0;e<this.chartFields.length;e++)t.push({legendData:[],xAxisData:[],values:[]})}this.lineChartData=t},metricsOk:function(t){this.currMetrics=t,this.metrics=t,this.syncMetrics=JSON.parse(JSON.stringify(t)),this.metrics.length<=0&&(this.metrics=JSON.parse(JSON.stringify(this.knownMetrics)),this.syncMetrics=JSON.parse(JSON.stringify(this.knownMetrics)))},download:function(t){this.currDownloadParams=JSON.parse(JSON.stringify(t)),this.downloadFile()},pageChange:function(t){this.currPageIndex=t,this.updateTableData(1)},pageSizeChange:function(t){this.currPageSize=t,this.pageReset=!0,this.updateTableData(1,1)},setDefaultDimensionsAndMetrics:function(){var t=JSON.stringify(this.defaultDimensions);this.currDimensions=JSON.parse(t),this.syncDimensions=JSON.parse(t),t=JSON.stringify(this.knownMetrics),this.metrics=JSON.parse(t),this.currMetrics=JSON.parse(t),this.syncMetrics=JSON.parse(t)},updateChartData:function(){var t=this;this.chartLoading=!0;var e=this.wrapChartReqParams();this.getMediabuyCampaignEstimateChartData(e).then((function(e){t.chartLoading=!1})).catch((function(e){t.chartLoading=!1,t.showError(e)}))},updateTableData:function(t,e){var a=this;this.tableLoading=!0;var i=this.wrapTableReqParams(t,e);1===t&&(i.total_type=JSON.stringify(this.totalType)),this.getMediabuyCampaignEstimateTableData(i).then((function(t){a.tableLoading=!1})).catch((function(t){a.tableLoading=!1,a.showError(t)}))},updateTotalData:function(t){var e=this,a=this.wrapTotalReqParams();1===t&&(a.total_type=JSON.stringify(this.totalType),this.getMediabuyCampaignEstimateTotalData(a).then((function(t){})).catch((function(t){return e.showError(t)}))),a.group_by&&this.getMediabuyCampaignEstimateTotalData(a).then((function(t){})).catch((function(t){return e.showError(t)}))},updatePageData:function(t){var e=this;this.tableLoading=!0,this.chartLoading=!0,Promise.all([this.getMediabuyCampaignEstimateChartData(this.wrapChartReqParams()),this.getMediabuyCampaignEstimateTableData(this.wrapTableReqParams(t)),this.getMediabuyCampaignEstimateTotalData(this.wrapTotalReqParams())]).then((function(t){e.inited=!0,e.tableLoading=!1,e.chartLoading=!1,e.getLineChartData()})).catch((function(t){e.tableLoading=!1,e.chartLoading=!1,e.showError(t)}))},downloadFile:function(){var t=this;this.downloadLoading=!0;var e=this.wrapDownloadReqParams();this.getMediabuyCampaignEstimateDownloadUrl(e).then((function(e){t.downloadLoading=!1;var a=document.createElement("a");a.href=e.url,a.click()})).catch((function(e){t.downloadLoading=!1,t.showError(e)}))},wrapChartReqParams:function(t){0===this.currChartGroups.length&&(this.currChartGroups=this.defaultChartGroups,this.$refs.chartGroup.initChartGroups());var e=JSON.stringify(["date"]);this.currChartGroups.findIndex((function(t){return"total"===t}))<0&&(e=JSON.stringify(this.currChartGroups.concat(["date"])));var a={time_range:Object(u["r"])(this.currFilterApply),group_by:e,filtering:Object(u["m"])(this.currFilterApply,this.inFields,this.likeFields),fields:Object(u["l"])(this.chartFields)};return a},wrapTableReqParams:function(t,e){var a={time_range:Object(u["r"])(this.currFilterApply),page:JSON.stringify({count:2===t||1===e?1:this.currPageIndex,size:this.currPageSize}),filtering:Object(u["m"])(this.currFilterApply,this.inFields,this.likeFields),group_by:Object(u["n"])(this.currDimensions),fields:Object(u["l"])(this.knownMetrics),sort:Object(u["p"])(this.currSortField,t,this.currDimensions,this.currDimensionsLength)};return 1===t&&(a.total_type=JSON.stringify(this.totalType)),a},wrapTotalReqParams:function(t){var e={time_range:Object(u["r"])(this.currFilterApply),filtering:Object(u["m"])(this.currFilterApply,this.inFields,this.likeFields),fields:Object(u["l"])(this.knownMetrics),query_type:"summary"};return 1===t&&(e.total_type=JSON.stringify(this.totalType)),e},wrapDownloadReqParams:function(){var t=Object(u["l"])(this.currDownloadParams.metrics);null==t&&(t=JSON.stringify(this.knownMetrics));var e=Object(u["n"])(this.currDownloadParams.dimensions,!0),a=null;null==e&&(a="summary");var i={time_range:Object(u["r"])(this.currFilterApply),filtering:Object(u["m"])(this.currFilterApply,this.inFields,this.likeFields),group_by:e,fields:t,file_format:this.currDownloadParams.fileFormat,query_type:a};return i},showError:function(t){this.$Modal.error({title:"Error",content:t})},pageResetFalse:function(){this.pageReset=!1},changeCheckbox:function(t){this.checkStatus=t,this.lineChartData.status=t},changeTabs:function(){},onSelectPageInfo:function(t){var e=JSON.parse(t);this.$refs.pageFilter.setFilter(e.filter),this.$refs.chartGroup.chartGroups=e.chart_group,this.currChartGroups=e.chart_group,this.tabItem=e.cur_chart,this.checkStatus=e.checkStatus,this.$refs.table.$refs.childTableDimensions.setData(e.dimensions),this.currDimensions=JSON.parse(JSON.stringify(e.dimensions.dimensions.length>0?e.dimensions.dimensions:this.knownDimensions)),this.metrics=JSON.parse(JSON.stringify(e.dimensions.metrics.length>0?e.dimensions.metrics:this.knownMetrics)),e.filter.time_type&&(e.filter.rangeDates=Object(c["f"])(e.filter.time_type)),this.onFilterApply(e.filter)},onGetPageInfo:function(t){var e=this.$refs.pageFilter.getFilter(),a=this.currChartGroups,i=this.tabItem,n=this.$refs.table.$refs.childTableDimensions.getData(),r=JSON.stringify({filter:e,chart_group:a,cur_chart:i,checkStatus:this.checkStatus,dimensions:n});C["a"].$emit("setPageInfo",t,r)},previewFun:function(){this.visible=!1,this.previewStatus=!0;var t=document.getElementsByClassName("contentsItem");if(d()("#mainItem").length&&d()("#closeBtn").length&&t){var e=document.body.clientWidth;d()("#mainItem").css({width:e+"px",height:"100vh",background:"rgba(0,0,0,.8)",position:"fixed",top:"0",left:"0",zIndex:"1000"}),d()("#closeBtn").css({position:"fixed",top:"10%",right:"0",zIndex:"1000",marginTop:"12px",marginRight:"12px",display:"block"}),t[0].style.top="8%"}},closeFun:function(){this.visible=!0,this.previewStatus=!1,d()("#mainItem").length&&d()("#closeBtn").length&&(d()("#mainItem").css({width:"auto",height:"auto",position:"static",background:"#ffffff"}),d()("#closeBtn").css({display:"none"}))}}),mounted:function(){this.setDefaultDimensionsAndMetrics(),this.updatePageData();var t=this;C["a"].$on("selectPageInfo",(function(e){t.onSelectPageInfo(e)})),C["a"].$on("getPageInfo",(function(e){t.onGetPageInfo(e)}))},beforeDestroy:function(){C["a"].$off("selectPageInfo"),C["a"].$off("getPageInfo")}},T=D,k=Object(b["a"])(T,i,n,!1,null,null,null);e["default"]=k.exports}}]);