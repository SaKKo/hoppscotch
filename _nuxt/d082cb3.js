(window.webpackJsonp=window.webpackJsonp||[]).push([[27,19,28,32,35,91],{654:function(t,e,o){var content=o(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("508630d1",content,!0,{sourceMap:!1})},655:function(t,e,o){"use strict";o.r(e);o(57),o(56),o(93),o(65),o(77);var n=o(2).a.extend({props:{label:{type:String,default:"Section"},noLegend:{type:Boolean,default:!1}},computed:{sectionString:function(){return"".concat(this.$route.path.replace(/\/+$/,""),"/").concat(this.label)}},methods:{collapse:function(){this.$store.commit("setCollapsedSection",this.sectionString)},isCollapsed:function(t){return this.$store.state.theme.collapsedSections.includes(this.sectionString)||!1}}}),r=(o(660),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{attrs:{id:t.label.toLowerCase()}},[t.noLegend?t._e():o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[o("span",[t._v(t._s(t.label))]),t._v(" "),o("i",{staticClass:"ml-2 align-middle material-icons"},[t._v("\n      "+t._s(t.isCollapsed(t.label)?"expand_more":"expand_less")+"\n    ")])]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.isCollapsed(t.label.toLowerCase())}},[t._t("default")],2)])}),[],!1,null,"1a2e43a3",null);e.default=component.exports},660:function(t,e,o){"use strict";o(654)},661:function(t,e,o){var n=o(63)((function(i){return i[1]}));n.push([t.i,"fieldset[data-v-1a2e43a3]{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;background-color:var(--bg-dark-color);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;width:100%}fieldset legend[data-v-1a2e43a3]{padding-left:1rem;padding-right:1rem;color:var(--fg-color);font-weight:700;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}",""]),t.exports=n},664:function(t,e,o){var content=o(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("f3a622c6",content,!0,{sourceMap:!1})},668:function(t,e,o){var n=o(9),r=o(362).values;n({target:"Object",stat:!0},{values:function(t){return r(t)}})},673:function(t,e,o){"use strict";o.r(e);var n={props:{on:{type:Boolean,default:!1}},methods:{toggle:function(){var t=this.$refs.toggle.classList.toggle("on");this.$emit("change",t)}}},r=(o(674),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inline-block cursor-pointer",on:{click:function(e){return t.toggle()}}},[o("label",{ref:"toggle",staticClass:"toggle",class:{on:t.on}},[o("span",{staticClass:"handle"})]),t._v(" "),o("label",{staticClass:"pl-0 align-middle cursor-pointer"},[t._t("default")],2)])}),[],!1,null,"795572da",null);e.default=component.exports},674:function(t,e,o){"use strict";o(664)},675:function(t,e,o){var n=o(63)((function(i){return i[1]}));n.push([t.i,".toggle[data-v-795572da]{position:relative;display:inline-block;vertical-align:middle;border-radius:9999px;padding:0px;margin:1rem;cursor:pointer;flex-shrink:0;width:32px;height:16px;border:none;background-color:var(--fg-light-color);box-sizing:initial}.toggle[data-v-795572da],.toggle .handle[data-v-795572da]{transition:all .2s ease-in-out}.toggle .handle[data-v-795572da]{position:absolute;display:inline-block;top:0px;right:0px;bottom:0px;left:0px;border-radius:9999px;pointer-events:none;margin:4px;background-color:var(--bg-color);width:8px;height:8px}.toggle.on[data-v-795572da]{background-color:var(--ac-color);border-color:var(--ac-color)}.toggle.on .handle[data-v-795572da]{background-color:var(--act-color);left:16px}",""]),t.exports=n},679:function(t,e,o){"use strict";var n=o(9),r=o(72),l=o(196),c=o(197),d=o(19),f=o(24),h=d("replace"),v=RegExp.prototype;n({target:"String",proto:!0},{replaceAll:function t(e,o){var n,d,m,_,template,y,w,C,x=r(this);if(null!=e){if((n=l(e))&&!~String(r("flags"in v?e.flags:c.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(d=e[h]))return d.call(e,x,o);if(f&&n)return String(x).replace(e,o)}if(m=String(x),""===(_=String(e)))return t.call(m,/(?:)/g,o);if(template=m.split(_),"function"!=typeof o)return template.join(String(o));for(w=(y=template[0]).length,C=1;C<template.length;C++)y+=String(o(_,w,m)),w+=_.length+template[C].length,y+=template[C];return y}})},694:function(t,e,o){var content=o(748);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("184a9e90",content,!0,{sourceMap:!1})},731:function(t,e,o){"use strict";o.r(e);o(33),o(17),o(124);var n=o(2),r=o(78),l=n.a.extend({props:{show:Boolean},data:function(){return{name:null}},methods:{addNewCollection:function(){this.name?(Object(r.a)({name:this.name,folders:[],requests:[]}),this.hideModal()):this.$toast.info(this.$t("invalid_collection_name").toString())},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),c=o(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("new_collection")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",{attrs:{for:"selectLabel"}},[t._v(t._s(t.$t("label")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"selectLabel",type:"text",placeholder:t.$t("my_new_collection")},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewCollection(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.addNewCollection}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(192).default})},732:function(t,e,o){"use strict";o.r(e);var n=o(15),r=(o(653),o(33),o(17),o(124),o(38),o(28),o(34),o(48),o(27),o(49),o(2)),l=o(78);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=r.a.extend({props:{show:Boolean,editingCollection:{type:Object,default:function(){}},editingCollectionIndex:{type:Number,default:null}},data:function(){return{name:null}},methods:{saveCollection:function(){if(this.name){var t=d(d({},this.$props.editingCollection),{},{name:this.name});Object(l.g)(this.editingCollectionIndex,t),this.hideModal()}else this.$toast.info(this.$t("invalid_collection_name").toString())},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),h=o(16),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("edit_collection")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",{attrs:{for:"selectLabel"}},[t._v(t._s(t.$t("label")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"selectLabel",type:"text",placeholder:t.editingCollection.name},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveCollection(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.saveCollection}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(192).default})},733:function(t,e,o){"use strict";o.r(e);o(653),o(33);var n=o(2).a.extend({props:{show:Boolean,folderPath:{type:String,default:null},collectionIndex:{type:Number,default:null}},data:function(){return{name:null}},methods:{addFolder:function(){this.$emit("add-folder",{name:this.name,path:this.folderPath||"".concat(this.collectionIndex)}),this.hideModal()},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),r=o(16),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:function(e){return t.$emit("hide-modal")}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("new_folder")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",{attrs:{for:"selectLabel"}},[t._v(t._s(t.$t("label")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"selectLabel",type:"text",placeholder:t.$t("my_new_folder")},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addFolder(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.addFolder}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(192).default})},734:function(t,e,o){"use strict";o.r(e);o(38),o(28),o(34),o(48),o(27),o(49);var n=o(15),r=(o(33),o(2)),l=o(78);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=r.a.extend({props:{show:Boolean,folder:{type:Object,default:function(){}},folderPath:{type:String,default:null}},data:function(){return{name:null}},methods:{editFolder:function(){Object(l.h)(this.folderPath,d(d({},this.folder),{},{name:this.name})),this.hideModal()},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),h=o(16),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:function(e){return t.$emit("hide-modal")}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("edit_folder")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",{attrs:{for:"selectLabel"}},[t._v(t._s(t.$t("label")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"selectLabel",type:"text",placeholder:t.folder.name},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFolder(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.editFolder}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(192).default})},735:function(t,e,o){"use strict";o.r(e);o(38),o(28),o(34),o(48),o(27),o(49);var n=o(15),r=(o(653),o(33),o(2)),l=o(78);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=r.a.extend({props:{show:Boolean,folderPath:{type:String,default:null},request:{type:Object,default:function(){}},requestIndex:{type:Number,default:null}},data:function(){return{requestUpdateData:{name:null}}},methods:{saveRequest:function(){var t=d(d({},this.$props.request),{},{name:this.$data.requestUpdateData.name||this.$props.request.name});Object(l.i)(this.folderPath,this.requestIndex,t),this.hideModal()},hideModal:function(){this.requestUpdateData={name:null},this.$emit("hide-modal")}}}),h=o(16),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("edit_request")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",{attrs:{for:"selectLabel"}},[t._v(t._s(t.$t("label")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.requestUpdateData.name,expression:"requestUpdateData.name"}],attrs:{id:"selectLabel",type:"text",placeholder:t.request.name},domProps:{value:t.requestUpdateData.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveRequest(e)},input:function(e){e.target.composing||t.$set(t.requestUpdateData,"name",e.target.value)}}})]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.saveRequest}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(192).default})},736:function(t,e,o){"use strict";o.r(e);o(47),o(66),o(28),o(67),o(68);var n=o(23),r=o(3),l=(o(56),o(101),o(668),o(38),o(65),o(77),o(679),o(93),o(17),o(35),o(29),o(360),o(33),o(155),o(30),o(18)),c=o(78);function d(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){c=!0,r=t},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw r}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var h={props:{show:Boolean},data:function(){return{fb:l.a,showJsonCode:!1}},subscriptions:function(){return{collections:c.n}},computed:{collectionJson:function(){return JSON.stringify(this.collections,null,2)}},methods:{createCollectionGist:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("https://api.github.com/gists",{files:{"hoppscotch-collections.json":{content:t.collectionJson}}},{headers:{Authorization:"token ".concat(l.a.currentUser.accessToken),Accept:"application/vnd.github.v3+json"}}).then((function(e){t.$toast.success(t.$t("gist_created"),{icon:"done"}),window.open(e.html_url)})).catch((function(e){t.$toast.error(t.$t("something_went_wrong"),{icon:"error"}),console.log(e)}));case 2:case"end":return e.stop()}}),e)})))()},readCollectionGist:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=prompt(t.$t("enter_gist_url"))){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$axios.$get("https://api.github.com/gists/".concat(o.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}}).then((function(e){var o=e.files,n=JSON.parse(Object.values(o)[0].content);Object(c.A)(n),t.fileImported()})).catch((function(e){t.failedImport(),console.log(e)}));case 5:case"end":return e.stop()}}),e)})))()},hideModal:function(){this.$emit("hide-modal")},openDialogChooseFileToReplaceWith:function(){this.$refs.inputChooseFileToReplaceWith.click()},openDialogChooseFileToImportFrom:function(){this.$refs.inputChooseFileToImportFrom.click()},replaceWithJSON:function(){var t=this,e=new FileReader;e.onload=function(e){var content=e.target.result,o=JSON.parse(content);if(o[0]){var r=Object.keys(o[0]),l=Object(n.a)(r,3);l[0],l[1],l[2]}else{if(!o.info||!o.info.schema.includes("v2.1.0"))return void t.failedImport();o=[t.parsePostmanCollection(o)]}Object(c.A)(o),t.fileImported()},e.readAsText(this.$refs.inputChooseFileToReplaceWith.files[0]),this.$refs.inputChooseFileToReplaceWith.value=""},importFromJSON:function(){var t=this,e=new FileReader;e.onload=function(e){var content=e.target.result,o=JSON.parse(content);if(o[0]){var r=Object.keys(o[0]),l=Object(n.a)(r,3);l[0],l[1],l[2]}else{if(!o.info||!o.info.schema.includes("v2.1.0"))return void t.failedImport();o=JSON.parse(content.replaceAll(/{{([a-z]+)}}/gi,"<<$1>>")),o=[t.parsePostmanCollection(o)]}Object(c.e)(o),t.fileImported()},e.readAsText(this.$refs.inputChooseFileToImportFrom.files[0]),this.$refs.inputChooseFileToImportFrom.value=""},exportJSON:function(){var text=this.collectionJson;text=text.replace(/\n/g,"\r\n");var t=new Blob([text],{type:"text/json"}),e=document.createElement("a");e.download="hoppscotch-collection.json",e.href=window.URL.createObjectURL(t),e.target="_blank",e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),this.$toast.success(this.$t("download_started"),{icon:"done"})},fileImported:function(){this.$toast.info(this.$t("file_imported"),{icon:"folder_shared"})},failedImport:function(){this.$toast.error(this.$t("import_failed"),{icon:"error"})},parsePostmanCollection:function(t){var e=t.info,o=t.name,n=t.item,r={name:"",folders:[],requests:[]};if(r.name=e?e.name:o,n&&n.length>0){var l,c=d(n);try{for(c.s();!(l=c.n()).done;){var f=l.value;f.request?Object.prototype.hasOwnProperty.call(r,"folders")?(r.name=e?e.name:o,r.requests.push(this.parsePostmanRequest(f))):(r.name=o||"",r.requests.push(this.parsePostmanRequest(f))):this.hasFolder(f)?r.folders.push(this.parsePostmanCollection(f)):r.requests.push(this.parsePostmanRequest(f))}}catch(t){c.e(t)}finally{c.f()}}return r},parsePostmanRequest:function(t){var e=t.name,o=t.request,n={url:"",path:"",method:"",auth:"",httpUser:"",httpPassword:"",passwordFieldType:"password",bearerToken:"",headers:[],params:[],bodyParams:[],rawParams:"",rawInput:!1,contentType:"",requestType:"",name:""};n.name=e;var r=o.url.raw.match(/^(.+:\/\/[^/]+|{[^/]+})(\/[^?]+|).*$/);r&&(n.url=r[1],n.path=r[2]?r[2]:""),n.method=o.method;var l=o.auth?o.auth:"",c=l?l.type:"";"basic"===c?(n.auth="Basic Auth",n.httpUser="username"===l.basic[0].key?l.basic[0].value:l.basic[1].value,n.httpPassword="password"===l.basic[0].key?l.basic[0].value:l.basic[1].value):"oauth2"===c?(n.auth="OAuth 2.0",n.bearerToken="accessToken"===l.oauth2[0].key?l.oauth2[0].value:l.oauth2[1].value):"bearer"===c&&(n.auth="Bearer Token",n.bearerToken=l.bearer[0].value);var f=o.header;if(f){n.headers=f;var h,v=d(n.headers);try{for(v.s();!(h=v.n()).done;){var header=h.value;delete header.name,delete header.type}}catch(t){v.e(t)}finally{v.f()}}var m=o.url.query;if(m){n.params=m;var _,y=d(n.params);try{for(y.s();!(_=y.n()).done;){delete _.value.disabled}}catch(t){y.e(t)}finally{y.f()}}if(o.body)if("urlencoded"===o.body.mode){var w=o.body.urlencoded;n.bodyParams=w||[];var C,x=d(n.bodyParams);try{for(x.s();!(C=x.n()).done;){delete C.value.type}}catch(t){x.e(t)}finally{x.f()}}else"raw"===o.body.mode&&(n.rawInput=!0,n.rawParams=o.body.raw);return n},hasFolder:function(t){return Object.prototype.hasOwnProperty.call(t,"item")}}},v=o(16),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("import_export"))+" "+t._s(t.$t("collections")))]),t._v(" "),o("div",[o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:t.readCollectionGist}},[o("i",{staticClass:"material-icons"},[t._v("assignment_returned")]),t._v(" "),o("span",[t._v(t._s(t.$t("import_from_gist")))])])]),t._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{content:t.fb.currentUser?"github.com"!==t.fb.currentUser.provider?t.$t("login_with_github_to")+t.$t("create_secret_gist"):null:t.$t("login_with_github_to")+t.$t("create_secret_gist")},expression:"{\n                content: !fb.currentUser\n                  ? $t('login_with_github_to') + $t('create_secret_gist')\n                  : fb.currentUser.provider !== 'github.com'\n                  ? $t('login_with_github_to') + $t('create_secret_gist')\n                  : null,\n              }",modifiers:{bottom:!0}}]},[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{disabled:!t.fb.currentUser||"github.com"!==t.fb.currentUser.provider},on:{click:t.createCollectionGist}},[o("i",{staticClass:"material-icons"},[t._v("assignment_turned_in")]),t._v(" "),o("span",[t._v(t._s(t.$t("create_secret_gist")))])])])])],2),t._v(" "),o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])],1)])]),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("div",{staticClass:"flex flex-col items-start p-2"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("replace_current"),expression:"$t('replace_current')"}],staticClass:"icon",on:{click:t.openDialogChooseFileToReplaceWith}},[o("i",{staticClass:"material-icons"},[t._v("create_new_folder")]),t._v(" "),o("span",[t._v(t._s(t.$t("replace_json")))]),t._v(" "),o("input",{ref:"inputChooseFileToReplaceWith",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:t.replaceWithJSON}})]),t._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("preserve_current"),expression:"$t('preserve_current')"}],staticClass:"icon",on:{click:t.openDialogChooseFileToImportFrom}},[o("i",{staticClass:"material-icons"},[t._v("folder_special")]),t._v(" "),o("span",[t._v(t._s(t.$t("import_json")))]),t._v(" "),o("input",{ref:"inputChooseFileToImportFrom",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:t.importFromJSON}})])]),t._v(" "),t.showJsonCode?o("div",{staticClass:"row-wrapper"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.collectionJson,expression:"collectionJson"}],attrs:{rows:"8",readonly:""},domProps:{value:t.collectionJson},on:{input:function(e){e.target.composing||(t.collectionJson=e.target.value)}}})]):t._e()]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span",[o("SmartToggle",{attrs:{on:t.showJsonCode},on:{change:function(e){t.showJsonCode=e}}},[t._v("\n          "+t._s(t.$t("show_code"))+"\n        ")])],1),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("download_file"),expression:"$t('download_file')"}],staticClass:"icon primary",on:{click:t.exportJSON}},[t._v("\n          "+t._s(t.$t("export"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartToggle:o(673).default,SmartModal:o(192).default})},747:function(t,e,o){"use strict";o(694)},748:function(t,e,o){var n=o(63)((function(i){return i[1]}));n.push([t.i,".virtual-list[data-v-7359f8bc]{max-height:calc(100vh - 270px)}",""]),t.exports=n},755:function(t,e,o){"use strict";o.r(e);o(65),o(77),o(33),o(47),o(17),o(66),o(35),o(28),o(67),o(68),o(29);var n=o(78);function r(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(d)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var c={props:{savingMode:{type:Boolean,default:!1},doc:{type:Boolean,default:!1},picked:{type:Object,default:null},showCollActions:{type:Boolean,default:!0}},data:function(){return{showModalAdd:!1,showModalEdit:!1,showModalImportExport:!1,showModalAddFolder:!1,showModalEditFolder:!1,showModalEditRequest:!1,editingCollection:void 0,editingCollectionIndex:void 0,editingFolder:void 0,editingFolderName:void 0,editingFolderIndex:void 0,editingFolderPath:void 0,editingRequest:void 0,editingRequestIndex:void 0,filterText:""}},subscriptions:function(){return{collections:n.n}},computed:{filteredCollections:function(){var t=this.collections;if(!this.filterText)return t;var e,o=this.filterText.toLowerCase(),n=[],l=r(t);try{for(l.s();!(e=l.n()).done;){var c,d=e.value,f=[],h=[],v=r(d.requests);try{for(v.s();!(c=v.n()).done;){var m=c.value;m.name.toLowerCase().includes(o)&&f.push(m)}}catch(t){v.e(t)}finally{v.f()}var _,y=r(d.folders);try{for(y.s();!(_=y.n()).done;){var w,C=_.value,x=[],$=r(C.requests);try{for($.s();!(w=$.n()).done;){var k=w.value;k.name.toLowerCase().includes(o)&&x.push(k)}}catch(t){$.e(t)}finally{$.f()}if(x.length>0){var O=Object.assign({},C);O.requests=x,h.push(O)}}}catch(t){y.e(t)}finally{y.f()}if(f.length+h.length>0){var M=Object.assign({},d);M.requests=f,M.folders=h,n.push(M)}}}catch(t){l.e(t)}finally{l.f()}return n}},mounted:function(){this._keyListener=function(t){"Escape"===t.key&&(t.preventDefault(),this.showModalAdd=this.showModalEdit=this.showModalImportExport=this.showModalAddFolder=this.showModalEditFolder=this.showModalEditRequest=!1)},document.addEventListener("keydown",this._keyListener.bind(this))},beforeDestroy:function(){document.removeEventListener("keydown",this._keyListener)},methods:{displayModalAdd:function(t){this.showModalAdd=t},displayModalEdit:function(t){this.showModalEdit=t,t||this.resetSelectedData()},displayModalImportExport:function(t){this.showModalImportExport=t},displayModalAddFolder:function(t){this.showModalAddFolder=t,t||this.resetSelectedData()},displayModalEditFolder:function(t){this.showModalEditFolder=t,t||this.resetSelectedData()},displayModalEditRequest:function(t){this.showModalEditRequest=t,t||this.resetSelectedData()},editCollection:function(t,e){this.$data.editingCollection=t,this.$data.editingCollectionIndex=e,this.displayModalEdit(!0)},onAddFolder:function(t){var e=t.name,path=t.path;Object(n.b)(e,path),this.displayModalAddFolder(!1)},addFolder:function(t){var path=t.path;this.$data.editingFolderPath=path,this.displayModalAddFolder(!0)},editFolder:function(t){var e=t.folder,o=t.folderPath;this.editingFolder=e,this.editingFolderPath=o,this.displayModalEditFolder(!0)},editRequest:function(t){var e=t.collectionIndex,o=t.folderIndex,n=t.folderName,r=t.request,l=t.requestIndex;this.$data.editingCollectionIndex=e,this.$data.editingFolderIndex=o,this.$data.editingFolderName=n,this.$data.editingRequest=r,this.$data.editingRequestIndex=l,this.displayModalEditRequest(!0)},resetSelectedData:function(){this.$data.editingCollection=void 0,this.$data.editingCollectionIndex=void 0,this.$data.editingFolder=void 0,this.$data.editingFolderIndex=void 0,this.$data.editingRequest=void 0,this.$data.editingRequestIndex=void 0}}},d=(o(747),o(16)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppSection",{ref:"collections",staticClass:"yellow",attrs:{label:t.$t("collections"),"no-legend":""}},[o("div",{staticClass:"show-on-large-screen"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"rounded-t-lg",attrs:{"aria-label":"Search",type:"search",placeholder:t.$t("search")},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}})]),t._v(" "),o("CollectionsGraphqlAdd",{attrs:{show:t.showModalAdd},on:{"hide-modal":function(e){return t.displayModalAdd(!1)}}}),t._v(" "),o("CollectionsGraphqlEdit",{attrs:{show:t.showModalEdit,"editing-collection":t.editingCollection,"editing-collection-index":t.editingCollectionIndex},on:{"hide-modal":function(e){return t.displayModalEdit(!1)}}}),t._v(" "),o("CollectionsGraphqlAddFolder",{attrs:{show:t.showModalAddFolder,"folder-path":t.editingFolderPath},on:{"add-folder":function(e){return t.onAddFolder(e)},"hide-modal":function(e){return t.displayModalAddFolder(!1)}}}),t._v(" "),o("CollectionsGraphqlEditFolder",{attrs:{show:t.showModalEditFolder,"collection-index":t.editingCollectionIndex,folder:t.editingFolder,"folder-index":t.editingFolderIndex,"folder-path":t.editingFolderPath},on:{"hide-modal":function(e){return t.displayModalEditFolder(!1)}}}),t._v(" "),o("CollectionsGraphqlEditRequest",{attrs:{show:t.showModalEditRequest,"folder-path":t.editingFolderPath,request:t.editingRequest,"request-index":t.editingRequestIndex},on:{"hide-modal":function(e){return t.displayModalEditRequest(!1)}}}),t._v(" "),o("CollectionsGraphqlImportExport",{attrs:{show:t.showModalImportExport},on:{"hide-modal":function(e){return t.displayModalImportExport(!1)}}}),t._v(" "),o("div",{staticClass:"border-b row-wrapper border-brdColor"},[t.showCollActions?o("button",{staticClass:"icon",on:{click:function(e){return t.displayModalAdd(!0)}}},[o("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" "),o("span",[t._v(t._s(t.$t("new")))])]):t._e(),t._v(" "),t.showCollActions?o("button",{staticClass:"icon",on:{click:function(e){return t.displayModalImportExport(!0)}}},[t._v("\n      "+t._s(t.$t("import_export"))+"\n    ")]):t._e()]),t._v(" "),0===t.collections.length?o("p",{staticClass:"info"},[o("i",{staticClass:"material-icons"},[t._v("help_outline")]),t._v("\n    "+t._s(t.$t("create_new_collection"))+"\n  ")]):t._e(),t._v(" "),o("div",{staticClass:"virtual-list"},[o("ul",{staticClass:"flex-col"},t._l(t.filteredCollections,(function(e,n){return o("li",{key:e.name},[o("CollectionsGraphqlCollection",{attrs:{picked:t.picked,name:e.name,"collection-index":n,collection:e,doc:t.doc,"is-filtered":t.filterText.length>0,"saving-mode":t.savingMode},on:{"edit-collection":function(o){return t.editCollection(e,n)},"add-folder":function(e){return t.addFolder(e)},"edit-folder":function(e){return t.editFolder(e)},"edit-request":function(e){return t.editRequest(e)},"select-collection":function(o){return t.$emit("use-collection",e)},select:function(e){return t.$emit("select",e)}}})],1)})),0)]),t._v(" "),t.filterText&&0===t.filteredCollections.length?o("p",{staticClass:"info"},[o("i",{staticClass:"material-icons"},[t._v("not_interested")]),t._v(" "+t._s(t.$t("nothing_found"))+' "'+t._s(t.filterText)+'"\n  ')]):t._e()],1)}),[],!1,null,"7359f8bc",null);e.default=component.exports;installComponents(component,{CollectionsGraphqlAdd:o(731).default,CollectionsGraphqlEdit:o(732).default,CollectionsGraphqlAddFolder:o(733).default,CollectionsGraphqlEditFolder:o(734).default,CollectionsGraphqlEditRequest:o(735).default,CollectionsGraphqlImportExport:o(736).default,CollectionsGraphqlCollection:o(756).default,AppSection:o(655).default})}}]);