(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{840:function(t,e,o){"use strict";o.r(e);var l={props:{show:Boolean,tokens:{type:Array,default:()=>[]}},methods:{clearContent(t,e){this.$emit("clear-content",t,e)},useOAuthToken(t){this.$emit("use-oauth-token",t)},removeOAuthToken(t){this.$emit("remove-oauth-token",t)},hideModal(){this.$emit("hide-modal")}}},n=o(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("manage_token")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("div",{staticClass:"row-wrapper"},[o("label",[t._v(t._s(t.$t("token_list")))]),t._v(" "),0!=t.tokens.length?o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("clear"),expression:"$t('clear')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:function(e){return t.clearContent("tokens",e)}}},[o("i",{staticClass:"material-icons"},[t._v("clear_all")])])]):t._e()]),t._v(" "),t._l(t.tokens,(function(e,l){return o("ul",{key:l},[o("li",[o("input",{attrs:{placeholder:"name "+(l+1)},domProps:{value:e.name},on:{change:function(e){return t.$store.commit("setOAuthTokenName",{index:l,value:e.target.value})}}})]),t._v(" "),o("li",[o("input",{attrs:{readonly:""},domProps:{value:e.value}})]),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("li",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("use_token"),expression:"$t('use_token')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:function(o){return t.useOAuthToken(e.value)}}},[o("i",{staticClass:"material-icons"},[t._v("input")])])]),t._v(" "),o("li",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("delete"),expression:"$t('delete')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:function(e){return t.removeOAuthToken(l)}}},[o("i",{staticClass:"material-icons"},[t._v("delete")])])])])])})),t._v(" "),0===t.tokens.length?o("p",{staticClass:"info"},[t._v("\n      "+t._s(t.$t("empty"))+"\n    ")]):t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(150).default})}}]);