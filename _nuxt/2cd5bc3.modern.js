(window.webpackJsonp=window.webpackJsonp||[]).push([[33,35,88],{594:function(e,t,o){var content=o(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("f3a622c6",content,!0,{sourceMap:!1})},602:function(e,t,o){"use strict";o.r(t);var r={props:{on:{type:Boolean,default:!1}},methods:{toggle(){var e=this.$refs.toggle.classList.toggle("on");this.$emit("change",e)}}},n=(o(603),o(12)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"inline-block cursor-pointer",on:{click:function(t){return e.toggle()}}},[o("label",{ref:"toggle",staticClass:"toggle",class:{on:e.on}},[o("span",{staticClass:"handle"})]),e._v(" "),o("label",{staticClass:"pl-0 align-middle cursor-pointer"},[e._t("default")],2)])}),[],!1,null,"795572da",null);t.default=component.exports},603:function(e,t,o){"use strict";o(594)},604:function(e,t,o){var r=o(41)((function(i){return i[1]}));r.push([e.i,".toggle[data-v-795572da]{position:relative;display:inline-block;vertical-align:middle;border-radius:9999px;padding:0px;margin:1rem;cursor:pointer;flex-shrink:0;width:32px;height:16px;border:none;background-color:var(--fg-light-color);box-sizing:initial}.toggle[data-v-795572da],.toggle .handle[data-v-795572da]{transition:all .2s ease-in-out}.toggle .handle[data-v-795572da]{position:absolute;display:inline-block;top:0px;right:0px;bottom:0px;left:0px;border-radius:9999px;pointer-events:none;margin:4px;background-color:var(--bg-color);width:8px;height:8px}.toggle.on[data-v-795572da]{background-color:var(--ac-color);border-color:var(--ac-color)}.toggle.on .handle[data-v-795572da]{background-color:var(--act-color);left:16px}",""]),e.exports=r},614:function(e,t,o){"use strict";var r=o(14),n=o(51),l=o(152),c=o(153),d=o(22),h=o(21),v=d("replace"),m=RegExp.prototype;r({target:"String",proto:!0},{replaceAll:function e(t,o){var r,d,f,_,template,w,$,C,y=n(this);if(null!=t){if((r=l(t))&&!~String(n("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(d=t[v]))return d.call(t,y,o);if(h&&r)return String(y).replace(t,o)}if(f=String(y),""===(_=String(t)))return e.call(f,/(?:)/g,o);if(template=f.split(_),"function"!=typeof o)return template.join(String(o));for($=(w=template[0]).length,C=1;C<template.length;C++)w+=String(o(_,$,f)),$+=_.length+template[C].length,w+=template[C];return w}})},667:function(e,t,o){"use strict";o.r(t);var r=o(3),n=(o(74),o(18),o(20),o(49),o(614),o(68),o(306),o(114),o(15)),l=o(50),c={props:{show:Boolean},data:()=>({fb:n.a,showJsonCode:!1}),subscriptions:()=>({collections:l.n}),computed:{collectionJson(){return JSON.stringify(this.collections,null,2)}},methods:{createCollectionGist(){var e=this;return Object(r.a)((function*(){yield e.$axios.$post("https://api.github.com/gists",{files:{"hoppscotch-collections.json":{content:e.collectionJson}}},{headers:{Authorization:"token ".concat(n.a.currentUser.accessToken),Accept:"application/vnd.github.v3+json"}}).then((t=>{e.$toast.success(e.$t("gist_created"),{icon:"done"}),window.open(t.html_url)})).catch((t=>{e.$toast.error(e.$t("something_went_wrong"),{icon:"error"}),console.log(t)}))}))()},readCollectionGist(){var e=this;return Object(r.a)((function*(){var t=prompt(e.$t("enter_gist_url"));t&&(yield e.$axios.$get("https://api.github.com/gists/".concat(t.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}}).then((t=>{var{files:o}=t,r=JSON.parse(Object.values(o)[0].content);Object(l.A)(r),e.fileImported()})).catch((t=>{e.failedImport(),console.log(t)})))}))()},hideModal(){this.$emit("hide-modal")},openDialogChooseFileToReplaceWith(){this.$refs.inputChooseFileToReplaceWith.click()},openDialogChooseFileToImportFrom(){this.$refs.inputChooseFileToImportFrom.click()},replaceWithJSON(){var e=new FileReader;e.onload=e=>{var{target:t}=e,content=t.result,o=JSON.parse(content);if(o[0])var[r,n,c]=Object.keys(o[0]);else{if(!o.info||!o.info.schema.includes("v2.1.0"))return void this.failedImport();o=[this.parsePostmanCollection(o)]}Object(l.A)(o),this.fileImported()},e.readAsText(this.$refs.inputChooseFileToReplaceWith.files[0]),this.$refs.inputChooseFileToReplaceWith.value=""},importFromJSON(){var e=new FileReader;e.onload=e=>{var{target:t}=e,content=t.result,o=JSON.parse(content);if(o[0])var[r,n,c]=Object.keys(o[0]);else{if(!o.info||!o.info.schema.includes("v2.1.0"))return void this.failedImport();o=JSON.parse(content.replaceAll(/{{([a-z]+)}}/gi,"<<$1>>")),o=[this.parsePostmanCollection(o)]}Object(l.e)(o),this.fileImported()},e.readAsText(this.$refs.inputChooseFileToImportFrom.files[0]),this.$refs.inputChooseFileToImportFrom.value=""},exportJSON(){var text=this.collectionJson;text=text.replace(/\n/g,"\r\n");var e=new Blob([text],{type:"text/json"}),t=document.createElement("a");t.download="hoppscotch-collection.json",t.href=window.URL.createObjectURL(e),t.target="_blank",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),this.$toast.success(this.$t("download_started"),{icon:"done"})},fileImported(){this.$toast.info(this.$t("file_imported"),{icon:"folder_shared"})},failedImport(){this.$toast.error(this.$t("import_failed"),{icon:"error"})},parsePostmanCollection(e){var{info:t,name:o,item:r}=e,n={name:"",folders:[],requests:[]};if(n.name=t?t.name:o,r&&r.length>0)for(var l of r)l.request?Object.prototype.hasOwnProperty.call(n,"folders")?(n.name=t?t.name:o,n.requests.push(this.parsePostmanRequest(l))):(n.name=o||"",n.requests.push(this.parsePostmanRequest(l))):this.hasFolder(l)?n.folders.push(this.parsePostmanCollection(l)):n.requests.push(this.parsePostmanRequest(l));return n},parsePostmanRequest(e){var{name:t,request:o}=e,r={url:"",path:"",method:"",auth:"",httpUser:"",httpPassword:"",passwordFieldType:"password",bearerToken:"",headers:[],params:[],bodyParams:[],rawParams:"",rawInput:!1,contentType:"",requestType:"",name:""};r.name=t;var n=o.url.raw.match(/^(.+:\/\/[^/]+|{[^/]+})(\/[^?]+|).*$/);n&&(r.url=n[1],r.path=n[2]?n[2]:""),r.method=o.method;var l=o.auth?o.auth:"",c=l?l.type:"";"basic"===c?(r.auth="Basic Auth",r.httpUser="username"===l.basic[0].key?l.basic[0].value:l.basic[1].value,r.httpPassword="password"===l.basic[0].key?l.basic[0].value:l.basic[1].value):"oauth2"===c?(r.auth="OAuth 2.0",r.bearerToken="accessToken"===l.oauth2[0].key?l.oauth2[0].value:l.oauth2[1].value):"bearer"===c&&(r.auth="Bearer Token",r.bearerToken=l.bearer[0].value);var d=o.header;if(d)for(var header of(r.headers=d,r.headers))delete header.name,delete header.type;var h=o.url.query;if(h)for(var param of(r.params=h,r.params))delete param.disabled;if(o.body)if("urlencoded"===o.body.mode){var v=o.body.urlencoded;for(var m of(r.bodyParams=v||[],r.bodyParams))delete m.type}else"raw"===o.body.mode&&(r.rawInput=!0,r.rawParams=o.body.raw);return r},hasFolder:e=>Object.prototype.hasOwnProperty.call(e,"item")}},d=o(12),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{on:{close:e.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[e._v(e._s(e.$t("import_export"))+" "+e._s(e.$t("collections")))]),e._v(" "),o("div",[o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:e.readCollectionGist}},[o("i",{staticClass:"material-icons"},[e._v("assignment_returned")]),e._v(" "),o("span",[e._v(e._s(e.$t("import_from_gist")))])])]),e._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{content:e.fb.currentUser?"github.com"!==e.fb.currentUser.provider?e.$t("login_with_github_to")+e.$t("create_secret_gist"):null:e.$t("login_with_github_to")+e.$t("create_secret_gist")},expression:"{\n                content: !fb.currentUser\n                  ? $t('login_with_github_to') + $t('create_secret_gist')\n                  : fb.currentUser.provider !== 'github.com'\n                  ? $t('login_with_github_to') + $t('create_secret_gist')\n                  : null,\n              }",modifiers:{bottom:!0}}]},[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{disabled:!e.fb.currentUser||"github.com"!==e.fb.currentUser.provider},on:{click:e.createCollectionGist}},[o("i",{staticClass:"material-icons"},[e._v("assignment_turned_in")]),e._v(" "),o("span",[e._v(e._s(e.$t("create_secret_gist")))])])])])],2),e._v(" "),o("button",{staticClass:"icon",on:{click:e.hideModal}},[o("i",{staticClass:"material-icons"},[e._v("close")])])],1)])]),e._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("div",{staticClass:"flex flex-col items-start p-2"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("replace_current"),expression:"$t('replace_current')"}],staticClass:"icon",on:{click:e.openDialogChooseFileToReplaceWith}},[o("i",{staticClass:"material-icons"},[e._v("create_new_folder")]),e._v(" "),o("span",[e._v(e._s(e.$t("replace_json")))]),e._v(" "),o("input",{ref:"inputChooseFileToReplaceWith",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:e.replaceWithJSON}})]),e._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("preserve_current"),expression:"$t('preserve_current')"}],staticClass:"icon",on:{click:e.openDialogChooseFileToImportFrom}},[o("i",{staticClass:"material-icons"},[e._v("folder_special")]),e._v(" "),o("span",[e._v(e._s(e.$t("import_json")))]),e._v(" "),o("input",{ref:"inputChooseFileToImportFrom",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:e.importFromJSON}})])]),e._v(" "),e.showJsonCode?o("div",{staticClass:"row-wrapper"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.collectionJson,expression:"collectionJson"}],attrs:{rows:"8",readonly:""},domProps:{value:e.collectionJson},on:{input:function(t){t.target.composing||(e.collectionJson=t.target.value)}}})]):e._e()]),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span",[o("SmartToggle",{attrs:{on:e.showJsonCode},on:{change:function(t){e.showJsonCode=t}}},[e._v("\n          "+e._s(e.$t("show_code"))+"\n        ")])],1),e._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:e.hideModal}},[e._v("\n          "+e._s(e.$t("cancel"))+"\n        ")]),e._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("download_file"),expression:"$t('download_file')"}],staticClass:"icon primary",on:{click:e.exportJSON}},[e._v("\n          "+e._s(e.$t("export"))+"\n        ")])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartToggle:o(602).default,SmartModal:o(150).default})}}]);