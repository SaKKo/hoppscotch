(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{690:function(t,e,r){"use strict";e.a=function(t){return t>=100&&t<200?{name:"informational",className:"info-response"}:t>=200&&t<300?{name:"successful",className:"success-response"}:t>=300&&t<400?{name:"redirection",className:"redir-response"}:t>=400&&t<500?{name:"client error",className:"cl-error-response"}:t>=500&&t<600?{name:"server error",className:"sv-error-response"}:{name:"unknown",className:"missing-data-response"}}},692:function(t,e,r){var content=r(742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("32073a86",content,!0,{sourceMap:!1})},741:function(t,e,r){"use strict";r(692)},742:function(t,e,r){var n=r(63)((function(i){return i[1]}));n.push([t.i,".stared[data-v-06703ffd]{color:#f8e81c!important}.fade-enter-active[data-v-06703ffd],.fade-leave-active[data-v-06703ffd]{transition:all .2s}.fade-enter[data-v-06703ffd],.fade-leave-to[data-v-06703ffd]{opacity:0}",""]),t.exports=n},762:function(t,e,r){"use strict";r.r(e);var n=r(690),o={props:{entry:{type:Object,default:function(){}},showMore:Boolean},data:function(){return{expand:!1}},computed:{entryStatus:function(){return Object(n.a)(this.entry.status)||{className:""}}}},l=(r(741),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"show-on-large-screen"},[r("span",{staticClass:"p-2 m-2 truncate",class:t.entryStatus.className,style:{"--status-code":t.entry.status}},[t._v("\n      "+t._s(t.entry.method+"   •   "+t.entry.status)+"\n    ")]),t._v(" "),r("li",[r("input",{staticClass:"bg-transparent",attrs:{"aria-label":t.$t("token_req_name"),type:"text",readonly:"",placeholder:t.$t("empty_req_name")},domProps:{value:t.entry.name}})]),t._v(" "),r("span",[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.entry.star?t.$t("remove_star"):t.$t("add_star")},expression:"{\n          content: !entry.star ? $t('add_star') : $t('remove_star'),\n        }"}],staticClass:"icon",class:{stared:t.entry.star},attrs:{"data-testid":"star_button"},on:{click:function(e){return t.$emit("toggle-star")}}},[r("i",{staticClass:"material-icons"},[t._v("\n          "+t._s(t.entry.star?"star":"star_border")+"\n        ")])])]),t._v(" "),r("v-popover",[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("options"),expression:"$t('options')"}],staticClass:"tooltip-target icon"},[r("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),r("template",{slot:"popover"},[r("div",[r("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{"data-testid":"restore_history_entry","aria-label":t.$t("edit")},on:{click:function(e){return t.$emit("use-entry")}}},[r("i",{staticClass:"material-icons"},[t._v("restore")]),t._v(" "),r("span",[t._v(t._s(t.$t("restore")))])])]),t._v(" "),r("div",[r("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{"data-testid":"delete_history_entry","aria-label":t.$t("delete")},on:{click:function(e){return t.$emit("delete-entry")}}},[r("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" "),r("span",[t._v(t._s(t.$t("delete")))])])])])],2)],1),t._v(" "),r("div",{staticClass:"show-on-large-screen"},[r("li",[r("input",{staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("url"),type:"text",readonly:"",placeholder:t.$t("no_url")},domProps:{value:""+t.entry.url+t.entry.path}})])]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.showMore?r("div",{staticClass:"show-on-large-screen"},[r("li",[r("input",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.entry.date,expression:"entry.date"}],staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("time"),type:"text",readonly:""},domProps:{value:t.entry.time}})]),t._v(" "),r("li",[r("input",{staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("duration"),type:"text",readonly:"",placeholder:t.$t("no_duration")},domProps:{value:"Duration: "+t.entry.duration+"ms"}})])]):t._e()])],1)}),[],!1,null,"06703ffd",null);e.default=component.exports}}]);