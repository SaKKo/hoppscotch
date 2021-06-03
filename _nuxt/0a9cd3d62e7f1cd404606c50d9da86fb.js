ace.define("ace/ext/static_highlight",["require","exports","module","ace/edit_session","ace/layer/text","ace/config","ace/lib/dom","ace/lib/lang"],(function(e,t,n){"use strict";var o=e("../edit_session").EditSession,r=e("../layer/text").Text,c=e("../config"),l=e("../lib/dom"),h=e("../lib/lang").escapeHTML;function d(e){this.type=e,this.style={},this.textContent=""}d.prototype.cloneNode=function(){return this},d.prototype.appendChild=function(e){this.textContent+=e.toString()},d.prototype.toString=function(){var e=[];if("fragment"!=this.type){e.push("<",this.type),this.className&&e.push(" class='",this.className,"'");var t=[];for(var n in this.style)t.push(n,":",this.style[n]);t.length&&e.push(" style='",t.join(""),"'"),e.push(">")}return this.textContent&&e.push(this.textContent),"fragment"!=this.type&&e.push("</",this.type,">"),e.join("")};var f={createTextNode:function(e,element){return h(e)},createElement:function(e){return new d(e)},createFragment:function(){return new d("fragment")}},m=function(){this.config={},this.dom=f};m.prototype=r.prototype;var _=function(e,t,n){var o=e.className.match(/lang-(\w+)/),r=t.mode||o&&"ace/mode/"+o[1];if(!r)return!1;var c=t.theme||"ace/theme/textmate",data="",h=[];if(e.firstElementChild)for(var d=0,i=0;i<e.childNodes.length;i++){var f=e.childNodes[i];3==f.nodeType?(d+=f.data.length,data+=f.data):h.push(d,f)}else data=e.textContent,t.trim&&(data=data.trim());_.render(data,r,c,t.firstLineNumber,!t.showGutter,(function(t){l.importCssString(t.css,"ace_highlight"),e.innerHTML=t.html;for(var o=e.firstChild.firstChild,i=0;i<h.length;i+=2){var r=t.session.doc.indexToPosition(h[i]),c=h[i+1],d=o.children[r.row];d&&d.appendChild(c)}n&&n()}))};_.render=function(input,e,t,n,r,l){var h,d=1,f=o.prototype.$modes;function m(){var o=_.renderSync(input,e,t,n,r);return l?l(o):o}return"string"==typeof t&&(d++,c.loadModule(["theme",t],(function(e){t=e,--d||m()}))),e&&"object"==typeof e&&!e.getTokenizer&&(e=(h=e).path),"string"==typeof e&&(d++,c.loadModule(["mode",e],(function(t){f[e]&&!h||(f[e]=new t.Mode(h)),e=f[e],--d||m()}))),--d||m()},_.renderSync=function(input,e,t,n,r){n=parseInt(n||1,10);var c=new o("");c.setUseWorker(!1),c.setMode(e);var l=new m;l.setSession(c),Object.keys(l.$tabStrings).forEach((function(e){if("string"==typeof l.$tabStrings[e]){var t=f.createFragment();t.textContent=l.$tabStrings[e],l.$tabStrings[e]=t}})),c.setValue(input);var h=c.getLength(),d=f.createElement("div");d.className=t.cssClass;var _=f.createElement("div");_.className="ace_static_highlight"+(r?"":" ace_show_gutter"),_.style["counter-reset"]="ace_line "+(n-1);for(var y=0;y<h;y++){var v=f.createElement("div");if(v.className="ace_line",!r){var x=f.createElement("span");x.className="ace_gutter ace_gutter-cell",x.textContent="",v.appendChild(x)}l.$renderLine(v,y,!1),v.textContent+="\n",_.appendChild(v)}return d.appendChild(_),{css:".ace_static_highlight {font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;font-size: 12px;white-space: pre-wrap}.ace_static_highlight .ace_gutter {width: 2em;text-align: right;padding: 0 3px 0 0;margin-right: 3px;contain: none;}.ace_static_highlight.ace_show_gutter .ace_line {padding-left: 2.6em;}.ace_static_highlight .ace_line { position: relative; }.ace_static_highlight .ace_gutter-cell {-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;top: 0;bottom: 0;left: 0;position: absolute;}.ace_static_highlight .ace_gutter-cell:before {content: counter(ace_line, decimal);counter-increment: ace_line;}.ace_static_highlight {counter-reset: ace_line;}"+t.cssText,html:d.toString(),session:c}},n.exports=_,n.exports.highlight=_})),ace.require(["ace/ext/static_highlight"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));