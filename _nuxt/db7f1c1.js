(window.webpackJsonp=window.webpackJsonp||[]).push([[34,36,85],{653:function(e,t,o){"use strict";var r=o(31),n=o(12),l=o(154),d=o(51),c=o(36),f=o(94),v=o(194),h=o(126),m=o(14),_=o(112),C=o(111).f,w=o(84).f,k=o(41).f,x=o(656).trim,y="Number",$=n.Number,I=$.prototype,N=f(_(I))==y,S=function(e){var t,o,r,n,l,d,c,code,f=h(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=x(f)).charCodeAt(0))||45===t){if(88===(o=f.charCodeAt(2))||120===o)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+f}for(d=(l=f.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>n)return NaN;return parseInt(l,r)}return+f};if(l(y,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var P,M=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof M&&(N?m((function(){I.valueOf.call(o)})):f(o)!=y)?v(new $(S(t)),o,M):S(t)},E=r?C($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;E.length>R;R++)c($,P=E[R])&&!c(M,P)&&k(M,P,w($,P));M.prototype=I,I.constructor=M,d(n,y,M)}},656:function(e,t,o){var r=o(72),n="["+o(657)+"]",l=RegExp("^"+n+n+"*"),d=RegExp(n+n+"*$"),c=function(e){return function(t){var o=String(r(t));return 1&e&&(o=o.replace(l,"")),2&e&&(o=o.replace(d,"")),o}};e.exports={start:c(1),end:c(2),trim:c(3)}},657:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},658:function(e,t,o){"use strict";o.r(t);var r={props:{show:Boolean,title:{type:String,default:null},yes:{type:String,default:function(){return this.$t("yes")}},no:{type:String,default:function(){return this.$t("no")}}},mounted:function(){this._keyListener=function(e){"Escape"===e.key&&(e.preventDefault(),this.hideModal())},document.addEventListener("keydown",this._keyListener.bind(this))},beforeDestroy:function(){document.removeEventListener("keydown",this._keyListener)},methods:{hideModal:function(){this.$emit("hide-modal")},resolve:function(){this.$emit("resolve")}}},n=o(16),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{on:{close:e.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[e._v(e._s(e.$t("confirm")))]),e._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:e.hideModal}},[o("i",{staticClass:"material-icons"},[e._v("close")])])])])]),e._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",[e._v(e._s(e.title))])]),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),e._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:e.hideModal}},[e._v("\n          "+e._s(e.no)+"\n        ")]),e._v(" "),o("button",{staticClass:"icon primary",on:{click:e.resolve}},[e._v("\n          "+e._s(e.yes)+"\n        ")])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartModal:o(192).default})},686:function(e,t,o){"use strict";o.r(t);o(653),o(17),o(124);var r=o(2),n=o(78),l=r.a.extend({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},request:{type:Object,default:function(){}},folderPath:{type:String,default:null},requestIndex:{type:Number,default:null},doc:Boolean},data:function(){return{dragging:!1,confirmRemove:!1}},computed:{isSelected:function(){return this.picked&&"gql-my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex}},methods:{pick:function(){this.$emit("select",{picked:{pickedType:"gql-my-request",folderPath:this.folderPath,requestIndex:this.requestIndex}})},selectRequest:function(){this.savingMode?this.pick():this.$store.commit("postwoman/selectGraphqlRequest",{request:this.request})},dragStart:function(e){var t=e.dataTransfer;this.dragging=!this.dragging,t.setData("folderPath",this.folderPath),t.setData("requestIndex",this.requestIndex)},removeRequest:function(){Object(n.s)(this.folderPath,this.requestIndex),this.$toast.error(this.$t("deleted").toString(),{icon:"delete"}),this.confirmRemove=!1}}}),d=o(16),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{class:["row-wrapper transition duration-150 ease-in-out",{"bg-bgDarkColor":e.dragging}],attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1}}},[o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.doc?"":e.$t("use_request"),expression:"!doc ? $t('use_request') : ''"}],staticClass:"icon",on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?o("i",{staticClass:"mx-3 text-green-400 material-icons"},[e._v("check_circle")]):o("i",{staticClass:"material-icons"},[e._v("description")]),e._v(" "),o("span",[e._v(e._s(e.request.name))])])]),e._v(" "),e.savingMode?e._e():o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("more"),expression:"$t('more')"}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("edit-request",{request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath})}}},[o("i",{staticClass:"material-icons"},[e._v("edit")]),e._v(" "),o("span",[e._v(e._s(e.$t("edit")))])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){e.confirmRemove=!0}}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v(e._s(e.$t("delete")))])])])])],2)],1),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("are_you_sure_remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartConfirmModal:o(658).default})},689:function(e,t,o){"use strict";o.r(t);o(653),o(17),o(124);var r=o(2),n=o(78),l=r.a.extend({name:"Folder",props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},folder:{type:Object,default:function(){}},folderIndex:{type:Number,default:null},collectionIndex:{type:Number,default:null},folderPath:{type:String,default:null},doc:Boolean,isFiltered:Boolean},data:function(){return{showChildren:!1,dragging:!1,confirmRemove:!1}},computed:{isSelected:function(){return this.picked&&"gql-my-folder"===this.picked.pickedType&&this.picked.folderPath===this.folderPath}},methods:{pick:function(){this.$emit("select",{picked:{pickedType:"gql-my-folder",folderPath:this.folderPath}})},toggleShowChildren:function(){this.savingMode&&this.pick(),this.showChildren=!this.showChildren},removeFolder:function(){Object(n.r)(this.folderPath),this.$toast.error(this.$t("deleted").toString(),{icon:"delete"})},dropEvent:function(e){var t=e.dataTransfer;this.dragging=!this.dragging;var o=t.getData("folderPath"),r=t.getData("requestIndex");Object(n.o)(o,r,this.folderPath)}}}),d=o(16),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{class:["row-wrapper transition duration-150 ease-in-out",{"bg-bgDarkColor":e.dragging}],on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent(t)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1}}},[o("div",[o("button",{staticClass:"icon",on:{click:e.toggleShowChildren}},[o("i",{directives:[{name:"show",rawName:"v-show",value:!e.showChildren&&!e.isFiltered,expression:"!showChildren && !isFiltered"}],staticClass:"material-icons"},[e._v("arrow_right")]),e._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.showChildren||e.isFiltered,expression:"showChildren || isFiltered"}],staticClass:"material-icons"},[e._v("arrow_drop_down")]),e._v(" "),e.isSelected?o("i",{staticClass:"mx-3 text-green-400 material-icons"},[e._v("check_circle")]):o("i",{staticClass:"material-icons"},[e._v("folder_open")]),e._v(" "),o("span",[e._v(e._s(e.folder.name))])])]),e._v(" "),e.savingMode?e._e():o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("add-folder",{folder:e.folder,path:e.folderPath})}}},[o("i",{staticClass:"material-icons"},[e._v("create_new_folder")]),e._v(" "),o("span",[e._v(e._s(e.$t("new_folder")))])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("edit-folder",{folder:e.folder,folderPath:e.folderPath})}}},[o("i",{staticClass:"material-icons"},[e._v("edit")]),e._v(" "),o("span",[e._v(e._s(e.$t("edit")))])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){e.confirmRemove=!0}}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v(e._s(e.$t("delete")))])])])])],2)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren||e.isFiltered,expression:"showChildren || isFiltered"}]},[o("ul",{staticClass:"flex-col"},e._l(e.folder.folders,(function(t,r){return o("li",{key:t.name,staticClass:"ml-8 border-l border-brdColor"},[o("CollectionsGraphqlFolder",{attrs:{picked:e.picked,"saving-mode":e.savingMode,folder:t,"folder-index":r,"folder-path":e.folderPath+"/"+r,"collection-index":e.collectionIndex,doc:e.doc,"is-filtered":e.isFiltered},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},select:function(t){return e.$emit("select",t)}}})],1)})),0),e._v(" "),o("ul",{staticClass:"flex-col"},e._l(e.folder.requests,(function(t,r){return o("li",{key:r,staticClass:"flex ml-8 border-l border-brdColor"},[o("CollectionsGraphqlRequest",{attrs:{picked:e.picked,"saving-mode":e.savingMode,request:t,"collection-index":e.collectionIndex,"folder-index":e.folderIndex,"folder-path":e.folderPath,"folder-name":e.folder.name,"request-index":r,doc:e.doc},on:{"edit-request":function(t){return e.$emit("edit-request",t)},select:function(t){return e.$emit("select",t)}}})],1)})),0),e._v(" "),e.folder.folders&&0===e.folder.folders.length&&e.folder.requests&&0===e.folder.requests.length?o("ul",[o("li",{staticClass:"flex ml-8 border-l border-brdColor"},[o("p",{staticClass:"info"},[o("i",{staticClass:"material-icons"},[e._v("not_interested")]),e._v("\n          "+e._s(e.$t("folder_empty"))+"\n        ")])])]):e._e()]),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("are_you_sure_remove_folder")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeFolder}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CollectionsGraphqlFolder:o(689).default,CollectionsGraphqlRequest:o(686).default,SmartConfirmModal:o(658).default})}}]);