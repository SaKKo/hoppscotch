(window.webpackJsonp=window.webpackJsonp||[]).push([[115,17,78,81,88,90],{1341:function(t,e,o){"use strict";o.r(e);var n=o(2),r=o(105),l=o(15),c=o(26),d=o(212),_=n.a.extend({data:()=>({extensionVersion:Object(r.d)()?window.__POSTWOMAN_EXTENSION_HOOK__.getVersion():null,doneButton:'<i class="material-icons">done</i>',fb:l.a,SYNC_COLLECTIONS:!0,SYNC_ENVIRONMENTS:!0,SYNC_HISTORY:!0,PROXY_URL:"",PROXY_KEY:"",EXTENSIONS_ENABLED:!0,PROXY_ENABLED:!0}),subscriptions:()=>({SCROLL_INTO_ENABLED:Object(c.e)("SCROLL_INTO_ENABLED"),PROXY_ENABLED:Object(c.e)("PROXY_ENABLED"),PROXY_URL:Object(c.e)("PROXY_URL"),PROXY_KEY:Object(c.e)("PROXY_KEY"),EXTENSIONS_ENABLED:Object(c.e)("EXTENSIONS_ENABLED"),EXPERIMENTAL_URL_BAR_ENABLED:Object(c.e)("EXPERIMENTAL_URL_BAR_ENABLED"),SYNC_COLLECTIONS:Object(c.e)("syncCollections"),SYNC_ENVIRONMENTS:Object(c.e)("syncEnvironments"),SYNC_HISTORY:Object(c.e)("syncHistory"),currentUser:d.a}),head:()=>({title:"Settings • Hoppscotch"}),computed:{proxySettings(){return{url:this.PROXY_URL,key:this.PROXY_KEY}}},watch:{proxySettings:{deep:!0,handler(t){var{url:e,key:o}=t;this.applySetting("PROXY_URL",e),this.applySetting("PROXY_KEY",o)}}},methods:{applySetting(t,e){Object(c.a)(t,e)},toggleSetting(t){"EXTENSIONS_ENABLED"===t&&this.PROXY_ENABLED&&Object(c.g)("PROXY_ENABLED"),"PROXY_ENABLED"===t&&this.EXTENSIONS_ENABLED&&Object(c.g)("EXTENSIONS_ENABLED"),Object(c.g)(t)},toggleSettings(t,e){this.applySetting(t,e),"syncCollections"===t&&e&&this.syncCollections(),"syncEnvironments"===t&&e&&this.syncEnvironments()},initSettings(){Object(c.a)("syncHistory",!0),Object(c.a)("syncCollections",!0),Object(c.a)("syncEnvironments",!0)},resetProxy(t){var{target:e}=t;Object(c.a)("PROXY_URL","https://proxy.hoppscotch.io/"),e.innerHTML=this.doneButton,this.$toast.info(this.$t("cleared"),{icon:"clear_all"}),setTimeout((()=>e.innerHTML='<i class="material-icons">clear_all</i>'),1e3)},syncCollections(){null!==l.a.currentUser&&this.SYNC_COLLECTIONS&&(this.$store.state.postwoman.collections&&l.a.writeCollections(JSON.parse(JSON.stringify(this.$store.state.postwoman.collections)),"collections"),this.$store.state.postwoman.collectionsGraphql&&l.a.writeCollections(JSON.parse(JSON.stringify(this.$store.state.postwoman.collectionsGraphql)),"collectionsGraphql"))},syncEnvironments(){null!==l.a.currentUser&&this.SYNC_ENVIRONMENTS&&l.a.writeEnvironments(JSON.parse(JSON.stringify(this.$store.state.postwoman.environments)))}}}),m=o(12),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[t.currentUser&&t.currentUser.eaInvited?o("div",[o("Teams")],1):t._e(),t._v(" "),o("AppSection",{ref:"account",attrs:{label:t.$t("account"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("account")))]),t._v(" "),t.fb.currentUser?o("div",[o("button",{staticClass:"icon"},[t.fb.currentUser.photoURL?o("img",{staticClass:"w-6 h-6 rounded-full material-icons",attrs:{src:t.fb.currentUser.photoURL}}):o("i",{staticClass:"material-icons"},[t._v("account_circle")]),t._v(" "),o("span",[t._v("\n              "+t._s(t.fb.currentUser.displayName||t.$t("nothing_found"))+"\n            ")])]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("email")]),t._v(" "),o("span",[t._v("\n              "+t._s(t.fb.currentUser.email||t.$t("nothing_found"))+"\n            ")])]),t._v(" "),o("br"),t._v(" "),o("FirebaseLogout"),t._v(" "),o("p",[o("SmartToggle",{attrs:{on:t.SYNC_COLLECTIONS},on:{change:function(e){return t.toggleSettings("syncCollections",!t.SYNC_COLLECTIONS)}}},[t._v("\n              "+t._s(t.$t("syncCollections")+" "+t.$t("sync"))+"\n              "+t._s(t.SYNC_COLLECTIONS?t.$t("enabled"):t.$t("disabled"))+"\n            ")])],1),t._v(" "),o("p",[o("SmartToggle",{attrs:{on:t.SYNC_ENVIRONMENTS},on:{change:function(e){return t.toggleSettings("syncEnvironments",!t.SYNC_ENVIRONMENTS)}}},[t._v("\n              "+t._s(t.$t("syncEnvironments")+" "+t.$t("sync"))+"\n              "+t._s(t.SYNC_ENVIRONMENTS?t.$t("enabled"):t.$t("disabled"))+"\n            ")])],1),t._v(" "),o("p",[o("SmartToggle",{attrs:{on:t.SYNC_HISTORY},on:{change:function(e){return t.toggleSettings("syncHistory",!t.SYNC_HISTORY)}}},[t._v("\n              "+t._s(t.$t("syncHistory")+" "+t.$t("sync"))+"\n              "+t._s(t.SYNC_HISTORY?t.$t("enabled"):t.$t("disabled"))+"\n            ")])],1),t._v(" "),3!==t.fb.currentSettings.length?o("p",[o("button",{on:{click:t.initSettings}},[o("i",{staticClass:"material-icons"},[t._v("sync")]),t._v(" "),o("span",[t._v(t._s(t.$t("turn_on")+" "+t.$t("sync")))])])]):t._e()],1):o("div",[o("label",[t._v(t._s(t.$t("login_with")))]),t._v(" "),o("p",[o("FirebaseLogin")],1)])])]),t._v(" "),o("AppSection",{ref:"theme",attrs:{label:t.$t("theme"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("theme")))]),t._v(" "),o("SmartColorModePicker"),t._v(" "),o("SmartAccentModePicker"),t._v(" "),o("span",[o("SmartToggle",{attrs:{on:t.SCROLL_INTO_ENABLED},on:{change:function(e){return t.toggleSetting("SCROLL_INTO_ENABLED")}}},[t._v("\n            "+t._s(t.$t("scrollInto_use_toggle"))+"\n            "+t._s(t.SCROLL_INTO_ENABLED?t.$t("enabled"):t.$t("disabled"))+"\n          ")])],1)],1)]),t._v(" "),o("AppSection",{ref:"extensions",attrs:{label:t.$t("extensions"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("extensions")))]),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("SmartToggle",{attrs:{on:t.EXTENSIONS_ENABLED},on:{change:function(e){return t.toggleSetting("EXTENSIONS_ENABLED")}}},[t._v("\n            "+t._s(t.$t("extensions_use_toggle"))+"\n          ")])],1),t._v(" "),null!=t.extensionVersion?o("p",{staticClass:"info"},[t._v("\n          "+t._s(t.$t("extension_version"))+": v"+t._s(t.extensionVersion.major)+"."+t._s(t.extensionVersion.minor)+"\n        ")]):o("p",{staticClass:"info"},[t._v("\n          "+t._s(t.$t("extension_version"))+": "+t._s(t.$t("extension_ver_not_reported"))+"\n        ")])])]),t._v(" "),o("AppSection",{ref:"proxy",attrs:{label:t.$t("proxy"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("proxy")))]),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("span",[o("SmartToggle",{attrs:{on:t.PROXY_ENABLED},on:{change:function(e){return t.toggleSetting("PROXY_ENABLED")}}},[t._v("\n              "+t._s(t.$t("proxy"))+"\n              "+t._s(t.PROXY_ENABLED?t.$t("enabled"):t.$t("disabled"))+"\n            ")])],1),t._v(" "),o("a",{attrs:{href:"https://github.com/hoppscotch/hoppscotch/wiki/Proxy",target:"_blank",rel:"noopener"}},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("wiki"),expression:"$t('wiki')"}],staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("help_outline")])])])]),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("label",{attrs:{for:"url"}},[t._v(t._s(t.$t("url")))]),t._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("reset_default"),expression:"$t('reset_default')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:t.resetProxy}},[o("i",{staticClass:"material-icons"},[t._v("clear_all")])])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.PROXY_URL,expression:"PROXY_URL"}],attrs:{id:"url",type:"url",disabled:!t.PROXY_ENABLED,placeholder:t.$t("url")},domProps:{value:t.PROXY_URL},on:{input:function(e){e.target.composing||(t.PROXY_URL=e.target.value)}}}),t._v(" "),o("p",{staticClass:"info"},[t._v("\n          "+t._s(t.$t("official_proxy_hosting"))+"\n          "),o("br"),t._v("\n          "+t._s(t.$t("read_the"))+"\n          "),o("a",{staticClass:"link",attrs:{href:"https://github.com/hoppscotch/proxyscotch/wiki/Privacy-policy",target:"_blank",rel:"noopener"}},[t._v("\n            "+t._s(t.$t("proxy_privacy_policy"))+" ")]),t._v(".\n        ")])])]),t._v(" "),o("AppSection",{ref:"experiments",attrs:{label:t.$t("experiments"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("experiments")))]),t._v(" "),o("p",{staticClass:"info"},[t._v("\n          "+t._s(t.$t("experiments_notice"))+"\n          "),o("a",{staticClass:"link",attrs:{href:"https://github.com/hoppscotch/hoppscotch/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("contact_us")))]),t._v(".\n        ")]),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("SmartToggle",{attrs:{on:t.EXPERIMENTAL_URL_BAR_ENABLED},on:{change:function(e){return t.toggleSetting("EXPERIMENTAL_URL_BAR_ENABLED")}}},[t._v("\n            "+t._s(t.$t("use_experimental_url_bar"))+"\n          ")])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Teams:o(847).default,FirebaseLogout:o(327).default,SmartToggle:o(602).default,FirebaseLogin:o(316).default,AppSection:o(587).default,SmartColorModePicker:o(848).default,SmartAccentModePicker:o(849).default})},586:function(t,e,o){var content=o(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("508630d1",content,!0,{sourceMap:!1})},587:function(t,e,o){"use strict";o.r(e);o(68),o(49);var n=o(2).a.extend({props:{label:{type:String,default:"Section"},noLegend:{type:Boolean,default:!1}},computed:{sectionString(){return"".concat(this.$route.path.replace(/\/+$/,""),"/").concat(this.label)}},methods:{collapse(){this.$store.commit("setCollapsedSection",this.sectionString)},isCollapsed(t){return this.$store.state.theme.collapsedSections.includes(this.sectionString)||!1}}}),r=(o(591),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{attrs:{id:t.label.toLowerCase()}},[t.noLegend?t._e():o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[o("span",[t._v(t._s(t.label))]),t._v(" "),o("i",{staticClass:"ml-2 align-middle material-icons"},[t._v("\n      "+t._s(t.isCollapsed(t.label)?"expand_more":"expand_less")+"\n    ")])]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.isCollapsed(t.label.toLowerCase())}},[t._t("default")],2)])}),[],!1,null,"1a2e43a3",null);e.default=component.exports},591:function(t,e,o){"use strict";o(586)},592:function(t,e,o){var n=o(41)((function(i){return i[1]}));n.push([t.i,"fieldset[data-v-1a2e43a3]{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;background-color:var(--bg-dark-color);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;width:100%}fieldset legend[data-v-1a2e43a3]{padding-left:1rem;padding-right:1rem;color:var(--fg-color);font-weight:700;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}",""]),t.exports=n},594:function(t,e,o){var content=o(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("f3a622c6",content,!0,{sourceMap:!1})},602:function(t,e,o){"use strict";o.r(e);var n={props:{on:{type:Boolean,default:!1}},methods:{toggle(){var t=this.$refs.toggle.classList.toggle("on");this.$emit("change",t)}}},r=(o(603),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inline-block cursor-pointer",on:{click:function(e){return t.toggle()}}},[o("label",{ref:"toggle",staticClass:"toggle",class:{on:t.on}},[o("span",{staticClass:"handle"})]),t._v(" "),o("label",{staticClass:"pl-0 align-middle cursor-pointer"},[t._t("default")],2)])}),[],!1,null,"795572da",null);e.default=component.exports},603:function(t,e,o){"use strict";o(594)},604:function(t,e,o){var n=o(41)((function(i){return i[1]}));n.push([t.i,".toggle[data-v-795572da]{position:relative;display:inline-block;vertical-align:middle;border-radius:9999px;padding:0px;margin:1rem;cursor:pointer;flex-shrink:0;width:32px;height:16px;border:none;background-color:var(--fg-light-color);box-sizing:initial}.toggle[data-v-795572da],.toggle .handle[data-v-795572da]{transition:all .2s ease-in-out}.toggle .handle[data-v-795572da]{position:absolute;display:inline-block;top:0px;right:0px;bottom:0px;left:0px;border-radius:9999px;pointer-events:none;margin:4px;background-color:var(--bg-color);width:8px;height:8px}.toggle.on[data-v-795572da]{background-color:var(--ac-color);border-color:var(--ac-color)}.toggle.on .handle[data-v-795572da]{background-color:var(--act-color);left:16px}",""]),t.exports=n},660:function(t,e,o){var content=o(726);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("a1bb3ada",content,!0,{sourceMap:!1})},724:function(t,e,o){var content=o(793);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("1090b39a",content,!0,{sourceMap:!1})},725:function(t,e,o){"use strict";o(660)},726:function(t,e,o){var n=o(41)((function(i){return i[1]}));n.push([t.i,"ul[data-v-44549aac]{flex-direction:column}ul[data-v-44549aac],ul li[data-v-44549aac]{display:flex}ul li[data-v-44549aac]{padding-left:16px;border-left:1px solid var(--brd-color)}",""]),t.exports=n},753:function(t,e,o){"use strict";o.r(e);o(68);var n=o(595),r={props:{show:Boolean},data:()=>({name:null}),methods:{addNewTeam(){var t=this.name;this.name="",null!=t&&t.replace(/\s/g,"").length<6?this.$toast.error(this.$t("string_length_insufficient"),{icon:"error"}):(n.c(this.$apollo,t).then((()=>{this.hideModal()})).catch((e=>{console.error(e),this.name=t})),this.hideModal())},hideModal(){this.name=null,this.$emit("hide-modal")}}},l=o(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("ul",[o("li",[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("new_team")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])])])]),t._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("ul",[o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.$t("my_new_team")},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewTeam(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.addNewTeam}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(150).default})},754:function(t,e,o){"use strict";o.r(e);var n=o(595),r={props:{team:{type:Object,default:()=>{}},teamID:{type:String,default:null}},methods:{deleteTeam(){confirm("Are you sure you want to remove this team?")&&n.f(this.$apollo,this.teamID).then((()=>{this.$toast.success(this.$t("new_team_created"),{icon:"done"})})).catch((t=>{this.$toast.error(this.$t("error_occurred"),{icon:"done"}),console.error(t)}))},exitTeam(){confirm("Are you sure you want to exit this team?")&&n.g(this.$apollo,this.teamID).then((()=>{this.$toast.success(this.$t("team_exited"),{icon:"done"})})).catch((t=>{this.$toast.error(this.$t("error_occurred"),{icon:"error"}),console.error(t)}))}}},l=(o(725),o(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row-wrapper"},[o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:"OWNER"===t.team.myRole?t.$t("edit"):"",expression:"team.myRole === 'OWNER' ? $t('edit') : ''",modifiers:{right:!0}}],staticClass:"icon",on:{click:function(e){"OWNER"===t.team.myRole&&t.$emit("edit-team")}}},[o("i",{staticClass:"material-icons"},[t._v("group")]),t._v(" "),o("span",[t._v(t._s(t.team.name))])])]),t._v(" "),o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),o("template",{slot:"popover"},["OWNER"===t.team.myRole?o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){return t.$emit("edit-team")}}},[o("i",{staticClass:"material-icons"},[t._v("create")]),t._v(" "),o("span",[t._v(t._s(t.$t("edit")))])])]):t._e(),t._v(" "),"OWNER"===t.team.myRole?o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:t.deleteTeam}},[o("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" "),o("span",[t._v(t._s(t.$t("delete")))])])]):t._e(),t._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{disabled:"OWNER"===t.team.myRole&&1==t.team.ownersCount},on:{click:t.exitTeam}},[o("i",{staticClass:"material-icons"},[t._v("remove")]),t._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:{content:"OWNER"===t.team.myRole&&1==t.team.ownersCount?t.$t("disable_exit"):""},expression:"{\n              content:\n                team.myRole === 'OWNER' && team.ownersCount == 1\n                  ? $t('disable_exit')\n                  : '',\n            }",modifiers:{left:!0}}]},[o("span",[t._v(t._s(t.$t("exit")))])])])])])],2)],1)}),[],!1,null,"44549aac",null);e.default=component.exports},792:function(t,e,o){"use strict";o(724)},793:function(t,e,o){var n=o(41)((function(i){return i[1]}));n.push([t.i,".virtual-list[data-v-6b416240]{max-height:calc(100vh - 241px)}ul[data-v-6b416240]{display:flex;flex-direction:column}",""]),t.exports=n},847:function(t,e,o){"use strict";o.r(e);var n,r,l=o(205),c=o(83),d=o(15),_={data:()=>({showModalAdd:!1,showModalEdit:!1,editingTeam:{},editingteamID:"",me:{},myTeams:[],fb:d.a}),apollo:{me:{query:Object(c.a)(n||(n=Object(l.a)(["\n        query GetMe {\n          me {\n            uid\n            eaInvited\n          }\n        }\n      "]))),pollInterval:1e5},myTeams:{query:Object(c.a)(r||(r=Object(l.a)(["\n        query GetMyTeams {\n          myTeams {\n            id\n            name\n            myRole\n            ownersCount\n            members {\n              user {\n                displayName\n                email\n                uid\n              }\n              role\n            }\n          }\n        }\n      "]))),pollInterval:1e4}},beforeDestroy(){document.removeEventListener("keydown",this._keyListener)},methods:{displayModalAdd(t){this.showModalAdd=t},displayModalEdit(t){this.showModalEdit=t,t||this.resetSelectedData()},editTeam(t,e){this.editingTeam=t,this.editingteamID=e,this.displayModalEdit(!0)},resetSelectedData(){this.$data.editingTeam=void 0,this.$data.editingteamID=void 0}}},m=(o(792),o(12)),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppSection",{ref:"teams",staticClass:"green",attrs:{icon:"history",label:t.$t("teams"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("teams")))]),t._v(" "),t.fb.currentUser?o("div"):o("div",[o("label",[t._v(t._s(t.$t("login_with")))]),t._v(" "),o("p",[o("FirebaseLogin")],1)])]),t._v(" "),o("TeamsAdd",{attrs:{show:t.showModalAdd},on:{"hide-modal":function(e){return t.displayModalAdd(!1)}}}),t._v(" "),o("TeamsEdit",{attrs:{team:t.myTeams[0],show:t.showModalEdit,"editing-team":t.editingTeam,"editingteam-i-d":t.editingteamID},on:{"hide-modal":function(e){return t.displayModalEdit(!1)}}}),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("div",[o("button",{staticClass:"icon",on:{click:function(e){return t.displayModalAdd(!0)}}},[o("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" "),o("span",[t._v(t._s(t.$t("new")))])])])]),t._v(" "),t.$apollo.queries.myTeams.loading?o("p",{staticClass:"info"},[t._v("\n    "+t._s(t.$t("loading"))+"\n  ")]):t._e(),t._v(" "),0===t.myTeams.length?o("p",{staticClass:"info"},[o("i",{staticClass:"material-icons"},[t._v("help_outline")]),t._v(" "+t._s(t.$t("create_new_team"))+"\n  ")]):o("div",{staticClass:"virtual-list"},[o("ul",{staticClass:"flex-col"},t._l(t.myTeams,(function(e,n){return o("li",{key:"team-"+n},[o("TeamsTeam",{attrs:{"team-i-d":e.id,team:e},on:{"edit-team":function(o){return t.editTeam(e,e.id)}}})],1)})),0)])],1)}),[],!1,null,"6b416240",null);e.default=component.exports;installComponents(component,{FirebaseLogin:o(316).default,TeamsAdd:o(753).default,TeamsEdit:o(830).default,TeamsTeam:o(754).default,AppSection:o(587).default})},848:function(t,e,o){"use strict";o.r(e);var n={data:()=>({colors:["system","light","dark","black"]}),methods:{getIcon(t){switch(t){case"system":return"desktop_windows";case"light":return"wb_sunny";case"dark":return"nights_stay";case"black":return"bedtime";default:return"desktop_windows"}}}},r=o(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col"},[o("label",[o("ColorScheme",{attrs:{placeholder:"...",tag:"span"}},[t._v("\n      "+t._s(t.$t("background"))+":\n      "+t._s(t.$colorMode.preference.charAt(0).toUpperCase()+t.$colorMode.preference.slice(1))+"\n      "),"system"===t.$colorMode.preference?o("span",[t._v("\n        ("+t._s(t.$colorMode.value)+" mode detected)\n      ")]):t._e()])],1),t._v(" "),o("div",t._l(t.colors,(function(e,n){return o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:""+e.charAt(0).toUpperCase()+e.slice(1),expression:"`${color.charAt(0).toUpperCase()}${color.slice(1)}`"}],key:"color-"+n,staticClass:"\n        inline-flex\n        items-center\n        justify-center\n        p-3\n        m-2\n        transition\n        duration-150\n        ease-in-out\n        bg-transparent\n        rounded-full\n        cursor-pointer\n        border-collapseer-2\n        text-fgLightColor\n        hover:text-fgColor\n        hover:shadow-none\n      ",class:[{"bg-actColor":e===t.$colorMode.preference},{"text-acColor hover:text-acColor":e===t.$colorMode.value}],on:{click:function(o){t.$colorMode.preference=e}}},[o("i",{staticClass:"material-icons"},[t._v(t._s(t.getIcon(e)))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},849:function(t,e,o){"use strict";o.r(e);var n={data:()=>({active:localStorage.getItem("THEME_COLOR")||"green",accentColors:["blue","green","teal","indigo","purple","orange","pink","red","yellow"]}),watch:{active(t){localStorage.setItem("THEME_COLOR",t)}},methods:{setActiveColor(t){document.documentElement.setAttribute("data-accent",t),this.active=t},capitalized:t=>"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))}},r=o(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("color"))+":\n    "+t._s(t.capitalized(t.active)))]),t._v(" "),o("div",t._l(t.accentColors,(function(e,n){return o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.capitalized(e),expression:"capitalized(color)"}],key:"color-"+n,staticClass:"\n        inline-flex\n        items-center\n        justify-center\n        p-3\n        m-2\n        transition\n        duration-150\n        ease-in-out\n        bg-transparent\n        rounded-full\n        cursor-pointer\n        hover:shadow-none\n      ",class:["text-"+e+"-400",{"bg-actColor":e===t.active}],on:{click:function(o){return t.setActiveColor(e)}}},[o("i",{staticClass:"material-icons"},[t._v("lens")])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);