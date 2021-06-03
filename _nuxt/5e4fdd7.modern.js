(window.webpackJsonp=window.webpackJsonp||[]).push([[21,84,86,87],{599:function(e,t,r){var content=r(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(42).default)("a35352cc",content,!0,{sourceMap:!1})},606:function(e,t,r){"use strict";r.r(t);var n={props:{label:{type:String,default:null},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},data:()=>({isActive:!1}),mounted(){this.isActive=this.selected}},l=r(12),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},607:function(e,t,r){"use strict";r.r(t);var n={props:{styles:{type:String,default:""}},data:()=>({tabs:[]}),created(){this.tabs=this.$children},methods:{selectTab(e){var{id:t}=e;this.tabs.forEach((e=>{e.isActive=e.id===t})),this.$emit("tab-changed",t)}}},l=(r(612),r(12)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"tabs-wrapper"},[r("div",{staticClass:"tabs",class:e.styles},[r("ul",e._l(e.tabs,(function(t,n){return r("li",{key:n,class:{"is-active":t.isActive},attrs:{tabindex:0},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.selectTab(t)}}},[r("a",{attrs:{href:t.href},on:{click:function(r){return e.selectTab(t)}}},[t.icon?r("i",{staticClass:"material-icons"},[e._v("\n            "+e._s(t.icon)+"\n          ")]):e._e(),e._v(" "),t.label?r("span",[e._v(e._s(t.label))]):e._e()])])})),0)]),e._v(" "),r("div",{staticClass:"tabs-details"},[e._t("default")],2)])}),[],!1,null,"4b55aa36",null);t.default=component.exports},612:function(e,t,r){"use strict";r(599)},613:function(e,t,r){var n=r(41)((function(i){return i[1]}));n.push([e.i,".tabs-wrapper[data-v-4b55aa36]{display:flex;flex-direction:column;flex-wrap:nowrap;flex:1 1 0%}.tabs-wrapper .tabs[data-v-4b55aa36]{display:flex;white-space:nowrap;overflow:auto;margin-top:1rem}.tabs-wrapper .tabs ul[data-v-4b55aa36]{display:flex;width:0px}.tabs-wrapper .tabs li[data-v-4b55aa36]{display:inline-flex;outline:2px solid transparent;outline-offset:2px;border-style:none}.tabs-wrapper .tabs li a[data-v-4b55aa36]{display:flex;align-items:center;justify-content:center;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;color:var(--fg-light-color);font-size:0.875rem;line-height:1.25rem;border-radius:0.5rem;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tabs-wrapper .tabs li a .material-icons[data-v-4b55aa36]{margin:1rem}.tabs-wrapper .tabs li:focus a[data-v-4b55aa36], .tabs-wrapper .tabs li a[data-v-4b55aa36]:hover{color:var(--fg-color)}.tabs-wrapper .tabs li.is-active a[data-v-4b55aa36]{background-color:var(--brd-color);color:var(--fg-color)}@media(max-width:768px){ol[data-v-4b55aa36], ul[data-v-4b55aa36]{flex-direction:row}ol[data-v-4b55aa36], ul[data-v-4b55aa36]{flex-wrap:nowrap}}",""]),e.exports=n},661:function(e,t,r){"use strict";r.r(t);r(18),r(20);var n=r(2).a.extend({data:()=>({observer:null}),mounted(){this.observer=new IntersectionObserver((e=>{var[t]=e;t&&t.isIntersecting&&this.$emit("intersecting",t)})),this.observer.observe(this.$refs.container)},beforeDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}}),l=r(12),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"container"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},694:function(e,t,r){"use strict";r.r(t);var n,l=r(205),o=r(83),c=r(212),d={props:{doc:Boolean,show:Boolean},data:()=>({skipTeamsFetching:!0}),subscriptions:()=>({currentUser:c.a}),apollo:{myTeams:{query:Object(o.a)(n||(n=Object(l.a)(["\n        query GetMyTeams {\n          myTeams {\n            id\n            name\n            myRole\n          }\n        }\n      "]))),pollInterval:1e4,skip(){return this.skipTeamsFetching}}},methods:{onTeamSelectIntersect(){this.$apollo.queries.myTeams.refetch(),this.skipTeamsFetching=!1},updateCollectionsType(e){this.$emit("update-collection-type",e)},updateSelectedTeam(e){this.$emit("update-selected-team",e)}}},m=r(12),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",[r("SmartTabs",{attrs:{id:"collections_tab",styles:"m-4"},on:{"tab-changed":e.updateCollectionsType}},[r("SmartTab",{attrs:{id:"my-collections",label:"My Collections",selected:!0}}),e._v(" "),e.currentUser&&e.currentUser.eaInvited&&!e.doc?r("SmartTab",{attrs:{id:"team-collections",label:"Team Collections"}},[r("ul",[r("li",[r("span",{staticClass:"select-wrapper"},[r("SmartIntersection",{on:{intersecting:e.onTeamSelectIntersect}},[r("select",{staticClass:"team",attrs:{id:"team",type:"text",autofocus:""},on:{change:function(t){return e.updateSelectedTeam(e.myTeams[t.target.value])}}},[r("option",{key:void 0,attrs:{hidden:"",disabled:"",selected:""},domProps:{value:void 0}},[e._v("\n                  Select team\n                ")]),e._v(" "),e._l(e.myTeams,(function(t,n){return r("option",{key:n,domProps:{value:n}},[e._v("\n                  "+e._s(t.name)+"\n                ")])}))],2)])],1)])])]):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartTab:r(606).default,SmartIntersection:r(661).default,SmartTabs:r(607).default})}}]);