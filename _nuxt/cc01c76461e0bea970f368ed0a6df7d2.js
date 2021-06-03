ace.define("ace/snippets",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/lib/dom","ace/editor"],(function(e,t,n){"use strict";var r=e("./lib/oop"),o=e("./lib/event_emitter").EventEmitter,c=e("./lib/lang"),h=e("./range").Range,l=e("./range_list").RangeList,d=e("./keyboard/hash_handler").HashHandler,f=e("./tokenizer").Tokenizer,m=e("./clipboard"),v={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,t,n){var text=e.session.getTextRange();return n?text.replace(/\n\r?([ \t]*\S)/g,"\n"+n+"$1"):text},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return m.getText&&m.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(e){return(e.session.$mode||{}).lineCommentStart||""},CURRENT_YEAR:x.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:x.bind(null,{year:"2-digit"}),CURRENT_MONTH:x.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:x.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:x.bind(null,{month:"short"}),CURRENT_DATE:x.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:x.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:x.bind(null,{weekday:"short"}),CURRENT_HOUR:x.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:x.bind(null,{minute:"2-digit"}),CURRENT_SECOND:x.bind(null,{second:"2-digit"})};function x(e){var t=(new Date).toLocaleString("en-us",e);return 1==t.length?"0"+t:t}v.SELECTED_TEXT=v.SELECTION;var _=function(){this.snippetMap={},this.snippetNameMap={}};(function(){r.implement(this,o),this.getTokenizer=function(){return _.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(e){return e=e.substr(1),/^\d+$/.test(e)?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return"(?:[^\\\\"+e+"]|\\\\.)"}var n={regex:"/("+t("/")+"+)/",onMatch:function(e,t,n){var r=n[0];return r.fmtString=!0,r.guard=e.slice(1,-1),r.flag="",""},next:"formatString"};return _.$tokenizer=new f({start:[{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return("}"==r&&n.length||-1!="`$\\".indexOf(r))&&(e=r),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,r){var o=e(t.substr(1));return r.unshift(o[0]),o},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(e,t,n){var r=e.slice(1,-1).replace(/\\[,|\\]|,/g,(function(e){return 2==e.length?e[1]:"\0"})).split("\0").map((function(e){return{value:e}}));return n[0].choices=r,[r[0]]},next:"start"},n,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(e,t,n){return n.length&&n[0].expectElse?(n[0].expectElse=!1,n[0].ifEnd={elseEnd:n[0]},[n[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return"}"==r&&n.length||-1!="`$\\".indexOf(r)?e=r:"n"==r?e="\n":"t"==r?e="\t":-1!="ulULE".indexOf(r)&&(e={changeCase:r,local:r>"a"}),[e]}},{regex:"/\\w*}",onMatch:function(e,t,n){var r=n.shift();return r&&(r.flag=e.slice(1,-1)),this.next=r&&r.tabstopId?"start":"",[r||e]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(e,t,n){return[{text:e.slice(1)}]}},{regex:/\${\w+/,onMatch:function(e,t,n){var r={text:e.slice(2)};return n.unshift(r),[r]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(e,t,n){var r=n.shift();return this.next=r&&r.tabstopId?"start":"",[r||e]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(e,t,n){return n[0].formatFunction=e.slice(2,-1),[n.shift()]},next:"formatString"},n,{regex:/:[\?\-+]?/,onMatch:function(e,t,n){"+"==e[1]&&(n[0].ifEnd=n[0]),"?"==e[1]&&(n[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]})},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map((function(e){return e.value||e}))},this.getVariableValue=function(e,t,n){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";if(t=t.replace(/^TM_/,""),!this.variables.hasOwnProperty(t))return"";var r=this.variables[t];return"function"==typeof r&&(r=this.variables[t](e,t,n)),null==r?"":r},this.variables=v,this.tmStrFormat=function(e,t,n){if(!t.fmt)return e;var r=t.flag||"",o=t.guard;o=new RegExp(o,r.replace(/[^gim]/g,""));var c="string"==typeof t.fmt?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,h=this;return e.replace(o,(function(){var e=h.variables.__;h.variables.__=[].slice.call(arguments);for(var t=h.resolveVariables(c,n),r="E",i=0;i<t.length;i++){var o=t[i];if("object"==typeof o)if(t[i]="",o.changeCase&&o.local){var l=t[i+1];l&&"string"==typeof l&&("u"==o.changeCase?t[i]=l[0].toUpperCase():t[i]=l[0].toLowerCase(),t[i+1]=l.substr(1))}else o.changeCase&&(r=o.changeCase);else"U"==r?t[i]=o.toUpperCase():"L"==r&&(t[i]=o.toLowerCase())}return h.variables.__=e,t.join("")}))},this.tmFormatFunction=function(e,t,n){return"upcase"==t.formatFunction?e.toUpperCase():"downcase"==t.formatFunction?e.toLowerCase():e},this.resolveVariables=function(e,t){for(var n=[],r="",o=!0,i=0;i<e.length;i++){var c=e[i];if("string"!=typeof c){if(c){if(o=!1,c.fmtString){var h=e.indexOf(c,i+1);-1==h&&(h=e.length),c.fmt=e.slice(i+1,h),i=h}if(c.text){var l=this.getVariableValue(t,c.text,r)+"";c.fmtString&&(l=this.tmStrFormat(l,c,t)),c.formatFunction&&(l=this.tmFormatFunction(l,c,t)),l&&!c.ifEnd?(n.push(l),d(c)):!l&&c.ifEnd&&d(c.ifEnd)}else c.elseEnd?d(c.elseEnd):(null!=c.tabstopId||null!=c.changeCase)&&n.push(c)}}else n.push(c),"\n"==c?(o=!0,r=""):o&&(r=/^\t*/.exec(c)[0],o=/\S/.test(c))}function d(t){var n=e.indexOf(t,i+1);-1!=n&&(i=n)}return n},this.insertSnippetForSelection=function(e,t){var cursor=e.getCursorPosition(),line=e.session.getLine(cursor.row),n=e.session.getTabString(),r=line.match(/^\s*/)[0];cursor.column<r.length&&(r=r.slice(0,cursor.column)),t=t.replace(/\r/g,"");var o=this.tokenizeTmSnippet(t);o=(o=this.resolveVariables(o,e)).map((function(e){return"\n"==e?e+r:"string"==typeof e?e.replace(/\t/g,n):e}));var c=[];o.forEach((function(p,i){if("object"==typeof p){var e=p.tabstopId,t=c[e];if(t||((t=c[e]=[]).index=e,t.value="",t.parents={}),-1===t.indexOf(p)){p.choices&&!t.choices&&(t.choices=p.choices),t.push(p);var n=o.indexOf(p,i+1);if(-1!==n){var r=o.slice(i+1,n);r.some((function(e){return"object"==typeof e}))&&!t.value?t.value=r:!r.length||t.value&&"string"==typeof t.value||(t.value=r.join(""))}}}})),c.forEach((function(e){e.length=0}));var h={};function l(e){for(var t=[],i=0;i<e.length;i++){var p=e[i];if("object"==typeof p){if(h[p.tabstopId])continue;p=t[e.lastIndexOf(p,i-1)]||{tabstopId:p.tabstopId}}t[i]=p}return t}for(var i=0;i<o.length;i++){var p=o[i];if("object"==typeof p){var d=p.tabstopId,f=c[d],m=o.indexOf(p,i+1);if(h[d])h[d]===p&&(delete h[d],Object.keys(h).forEach((function(e){f.parents[e]=!0})));else{h[d]=p;var v=f.value;"string"!=typeof v?v=l(v):p.fmt&&(v=this.tmStrFormat(v,p,e)),o.splice.apply(o,[i+1,Math.max(0,m-i)].concat(v,p)),-1===f.indexOf(p)&&f.push(p)}}}var x=0,_=0,text="";o.forEach((function(e){if("string"==typeof e){var t=e.split("\n");t.length>1?(_=t[t.length-1].length,x+=t.length-1):_+=e.length,text+=e}else e&&(e.start?e.end={row:x,column:_}:e.start={row:x,column:_})}));var S=e.getSelectionRange(),E=e.session.replace(S,text),C=new T(e),y=e.inVirtualSelectionMode&&e.selection.index;C.addTabstops(c,S.start,E,y)},this.insertSnippet=function(e,t){var n=this;if(e.inVirtualSelectionMode)return n.insertSnippetForSelection(e,t);e.forEachSelection((function(){n.insertSnippetForSelection(e,t)}),null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";if("html"===(t=t.split("/").pop())||"php"===t){"php"!==t||e.session.$mode.inlinePhp||(t="html");var n=e.getCursorPosition(),r=e.session.getState(n.row);"object"==typeof r&&(r=r[0]),r.substring&&("js-"==r.substring(0,3)?t="javascript":"css-"==r.substring(0,4)?t="css":"php-"==r.substring(0,4)&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],r=this.snippetMap;return r[t]&&r[t].includeScopes&&n.push.apply(n,r[t].includeScopes),n.push("_"),n},this.expandWithTab=function(e,t){var n=this,r=e.forEachSelection((function(){return n.expandSnippetForSelection(e,t)}),null,{keepOrder:!0});return r&&e.tabstopManager&&e.tabstopManager.tabNext(),r},this.expandSnippetForSelection=function(e,t){var n,cursor=e.getCursorPosition(),line=e.session.getLine(cursor.row),r=line.substring(0,cursor.column),o=line.substr(cursor.column),c=this.snippetMap;return this.getActiveScopes(e).some((function(e){var t=c[e];return t&&(n=this.findMatchingSnippet(t,r,o)),!!n}),this),!!n&&(t&&t.dryRun||(e.session.doc.removeInLine(cursor.row,cursor.column-n.replaceBefore.length,cursor.column+n.replaceAfter.length),this.variables.M__=n.matchBefore,this.variables.T__=n.matchAfter,this.insertSnippetForSelection(e,n.content),this.variables.M__=this.variables.T__=null),!0)},this.findMatchingSnippet=function(e,t,n){for(var i=e.length;i--;){var s=e[i];if((!s.startRe||s.startRe.test(t))&&((!s.endRe||s.endRe.test(n))&&(s.startRe||s.endRe)))return s.matchBefore=s.startRe?s.startRe.exec(t):[""],s.matchAfter=s.endRe?s.endRe.exec(n):[""],s.replaceBefore=s.triggerRe?s.triggerRe.exec(t)[0]:"",s.replaceAfter=s.endTriggerRe?s.endTriggerRe.exec(n)[0]:"",s}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){var n=this.snippetMap,r=this.snippetNameMap,o=this;function h(e){return e&&!/^\^?\(.*\)\$?$|^\\b$/.test(e)&&(e="(?:"+e+")"),e||""}function l(e,t,n){return e=h(e),t=h(t),n?(e=t+e)&&"$"!=e[e.length-1]&&(e+="$"):(e+=t)&&"^"!=e[0]&&(e="^"+e),new RegExp(e)}function d(s){s.scope||(s.scope=t||"_"),t=s.scope,n[t]||(n[t]=[],r[t]={});var map=r[t];if(s.name){var e=map[s.name];e&&o.unregister(e),map[s.name]=s}n[t].push(s),s.prefix&&(s.tabTrigger=s.prefix),!s.content&&s.body&&(s.content=Array.isArray(s.body)?s.body.join("\n"):s.body),s.tabTrigger&&!s.trigger&&(!s.guard&&/^\w/.test(s.tabTrigger)&&(s.guard="\\b"),s.trigger=c.escapeRegExp(s.tabTrigger)),(s.trigger||s.guard||s.endTrigger||s.endGuard)&&(s.startRe=l(s.trigger,s.guard,!0),s.triggerRe=new RegExp(s.trigger),s.endRe=l(s.endTrigger,s.endGuard,!0),s.endTriggerRe=new RegExp(s.endTrigger))}e||(e=[]),Array.isArray(e)?e.forEach(d):Object.keys(e).forEach((function(t){d(e[t])})),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){var n=this.snippetMap,r=this.snippetNameMap;function o(s){var e=r[s.scope||t];if(e&&e[s.name]){delete e[s.name];var map=n[s.scope||t],i=map&&map.indexOf(s);i>=0&&map.splice(i,1)}}e.content?o(e):Array.isArray(e)&&e.forEach(o)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");for(var t,n=[],r={},o=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;t=o.exec(e);){if(t[1])try{r=JSON.parse(t[1]),n.push(r)}catch(e){}if(t[4])r.content=t[4].replace(/^\t/gm,""),n.push(r),r={};else{var c=t[2],h=t[3];if("regex"==c){var l=/\/((?:[^\/\\]|\\.)*)|$/g;r.guard=l.exec(h)[1],r.trigger=l.exec(h)[1],r.endTrigger=l.exec(h)[1],r.endGuard=l.exec(h)[1]}else"snippet"==c?(r.tabTrigger=h.match(/^\S*/)[0],r.name||(r.name=h)):c&&(r[c]=h)}}return n},this.getSnippetByName=function(e,t){var n,r=this.snippetNameMap;return this.getActiveScopes(t).some((function(t){var o=r[t];return o&&(n=o[e]),!!n}),this),n}}).call(_.prototype);var T=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=c.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){for(var t="r"==e.action[0],n=this.selectedTabstop||{},r=n.parents||{},o=(this.tabstops||[]).slice(),i=0;i<o.length;i++){var c=o[i],h=c==n||r[c.index];if(c.rangeList.$bias=h?0:1,"remove"==e.action&&c!==n){var l=c.parents&&c.parents[n.index],d=c.rangeList.pointIndex(e.start,l);d=d<0?-d-1:d+1;var f=c.rangeList.pointIndex(e.end,l);f=f<0?-f-1:f-1;for(var m=c.rangeList.ranges.slice(d,f),v=0;v<m.length;v++)this.removeRange(m[v])}c.rangeList.$onChange(e)}var x=this.editor.session;this.$inChange||!t||1!=x.getLength()||x.getValue()||this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(e&&e.hasLinkedRanges&&e.firstNonLinked){this.$inChange=!0;for(var n=this.editor.session,text=n.getTextRange(e.firstNonLinked),i=0;i<e.length;i++){var r=e[i];if(r.linked){var o=r.original,c=t.snippetManager.tmStrFormat(text,o,this.editor);n.replace(r,c)}}this.$inChange=!1}},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty(),i=0;i<this.ranges.length;i++)if(!this.ranges[i].linked){var r=this.ranges[i].contains(e.row,e.column),o=n||this.ranges[i].contains(t.row,t.column);if(r&&o)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);(n=Math.min(Math.max(n,1),t))==t&&(n=0),this.selectTabstop(n),0===n&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];if(t&&this.addTabstopMarkers(t),this.index=e,(t=this.tabstops[this.index])&&t.length){this.selectedTabstop=t;var n=t.firstNonLinked||t;if(t.choices&&(n.cursor=n.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(n);else{var r=this.editor.multiSelect;r.toSingleRange(n);for(var i=0;i<t.length;i++)t.hasLinkedRanges&&t[i].linked||r.addRange(t[i].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},this.addTabstops=function(e,t,n){var r=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!e[0]){var p=h.fromPoints(n,n);E(p.start,t),E(p.end,t),e[0]=[p],e[0].index=0}var o=[this.index+1,0],c=this.ranges;e.forEach((function(e,n){for(var d=this.$openTabstops[n]||e,i=0;i<e.length;i++){var p=e[i],f=h.fromPoints(p.start,p.end||p.start);S(f.start,t),S(f.end,t),f.original=p,f.tabstop=d,c.push(f),d!=e?d.unshift(f):d[i]=f,p.fmtString||d.firstNonLinked&&r?(f.linked=!0,d.hasLinkedRanges=!0):d.firstNonLinked||(d.firstNonLinked=f)}d.firstNonLinked||(d.hasLinkedRanges=!1),d===e&&(o.push(d),this.$openTabstops[n]=d),this.addTabstopMarkers(d),d.rangeList=d.rangeList||new l,d.rangeList.$bias=0,d.rangeList.addList(d)}),this),o.length>2&&(this.tabstops.length&&o.push(o.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,o))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach((function(e){e.markerId||(e.markerId=t.addMarker(e,"ace_snippet-marker","text"))}))},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach((function(e){t.removeMarker(e.markerId),e.markerId=null}))},this.removeRange=function(e){var i=e.tabstop.indexOf(e);-1!=i&&e.tabstop.splice(i,1),-1!=(i=this.ranges.indexOf(e))&&this.ranges.splice(i,1),-1!=(i=e.tabstop.rangeList.ranges.indexOf(e))&&e.tabstop.splice(i,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(-1!=(i=this.tabstops.indexOf(e.tabstop))&&this.tabstops.splice(i,1),this.tabstops.length||this.detach())},this.keyboardHandler=new d,this.keyboardHandler.bindKeys({Tab:function(e){t.snippetManager&&t.snippetManager.expandWithTab(e)||(e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView())},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}})}).call(T.prototype);var S=function(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row},E=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row};e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"),t.snippetManager=new _;var C=e("./editor").Editor;(function(){this.insertSnippet=function(content,e){return t.snippetManager.insertSnippet(this,content,e)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(C.prototype)})),ace.define("ace/ext/emmet",["require","exports","module","ace/keyboard/hash_handler","ace/editor","ace/snippets","ace/range","ace/config","resources","resources","tabStops","resources","utils","actions"],(function(e,t,n){"use strict";var r,o,c=e("../keyboard/hash_handler").HashHandler,h=e("../editor").Editor,l=e("../snippets").snippetManager,d=e("../range").Range,f=e("../config");function m(){}m.prototype={setupContext:function(e){this.ace=e,this.indentation=e.session.getTabString(),r||(r=window.emmet),(r.resources||r.require("resources")).setVariable("indentation",this.indentation),this.$syntax=null,this.$syntax=this.getSyntax()},getSelectionRange:function(){var e=this.ace.getSelectionRange(),t=this.ace.session.doc;return{start:t.positionToIndex(e.start),end:t.positionToIndex(e.end)}},createSelection:function(e,t){var n=this.ace.session.doc;this.ace.selection.setRange({start:n.indexToPosition(e),end:n.indexToPosition(t)})},getCurrentLineRange:function(){var e=this.ace,t=e.getCursorPosition().row,n=e.session.getLine(t).length,r=e.session.doc.positionToIndex({row:t,column:0});return{start:r,end:r+n}},getCaretPos:function(){var e=this.ace.getCursorPosition();return this.ace.session.doc.positionToIndex(e)},setCaretPos:function(e){var t=this.ace.session.doc.indexToPosition(e);this.ace.selection.moveToPosition(t)},getCurrentLine:function(){var e=this.ace.getCursorPosition().row;return this.ace.session.getLine(e)},replaceContent:function(e,t,n,r){null==n&&(n=null==t?this.getContent().length:t),null==t&&(t=0);var o=this.ace,c=o.session.doc,h=d.fromPoints(c.indexToPosition(t),c.indexToPosition(n));o.session.remove(h),h.end=h.start,e=this.$updateTabstops(e),l.insertSnippet(o,e)},getContent:function(){return this.ace.getValue()},getSyntax:function(){if(this.$syntax)return this.$syntax;var e=this.ace.session.$modeId.split("/").pop();if("html"==e||"php"==e){var cursor=this.ace.getCursorPosition(),t=this.ace.session.getState(cursor.row);"string"!=typeof t&&(t=t[0]),t&&((t=t.split("-")).length>1?e=t[0]:"php"==e&&(e="html"))}return e},getProfileName:function(){var e=r.resources||r.require("resources");switch(this.getSyntax()){case"css":return"css";case"xml":case"xsl":return"xml";case"html":var t=e.getVariable("profile");return t||(t=-1!=this.ace.session.getLines(0,2).join("").search(/<!DOCTYPE[^>]+XHTML/i)?"xhtml":"html"),t;default:var n=this.ace.session.$mode;return n.emmetConfig&&n.emmetConfig.profile||"xhtml"}},prompt:function(title){return prompt(title)},getSelection:function(){return this.ace.session.getTextRange()},getFilePath:function(){return""},$updateTabstops:function(e){var t=0,n=null,o=r.tabStops||r.require("tabStops"),c=(r.resources||r.require("resources")).getVocabulary("user"),h={tabstop:function(data){var e=parseInt(data.group,10),r=0===e;r?e=++t:e+=1e3;var c=data.placeholder;c&&(c=o.processText(c,h));var l="${"+e+(c?":"+c:"")+"}";return r&&(n=[data.start,l]),l},escape:function(e){return"$"==e?"\\$":"\\"==e?"\\\\":e}};if(e=o.processText(e,h),c.variables.insert_final_tabstop&&!/\$\{0\}$/.test(e))e+="${0}";else if(n){e=(r.utils?r.utils.common:r.require("utils")).replaceSubstring(e,"${0}",n[0],n[1])}return e}};var v={expand_abbreviation:{mac:"ctrl+alt+e",win:"alt+e"},match_pair_outward:{mac:"ctrl+d",win:"ctrl+,"},match_pair_inward:{mac:"ctrl+j",win:"ctrl+shift+0"},matching_pair:{mac:"ctrl+alt+j",win:"alt+j"},next_edit_point:"alt+right",prev_edit_point:"alt+left",toggle_comment:{mac:"command+/",win:"ctrl+/"},split_join_tag:{mac:"shift+command+'",win:"shift+ctrl+`"},remove_tag:{mac:"command+'",win:"shift+ctrl+;"},evaluate_math_expression:{mac:"shift+command+y",win:"shift+ctrl+y"},increment_number_by_1:"ctrl+up",decrement_number_by_1:"ctrl+down",increment_number_by_01:"alt+up",decrement_number_by_01:"alt+down",increment_number_by_10:{mac:"alt+command+up",win:"shift+alt+up"},decrement_number_by_10:{mac:"alt+command+down",win:"shift+alt+down"},select_next_item:{mac:"shift+command+.",win:"shift+ctrl+."},select_previous_item:{mac:"shift+command+,",win:"shift+ctrl+,"},reflect_css_value:{mac:"shift+command+r",win:"shift+ctrl+r"},encode_decode_data_url:{mac:"shift+ctrl+d",win:"ctrl+'"},expand_abbreviation_with_tab:"Tab",wrap_with_abbreviation:{mac:"shift+ctrl+a",win:"shift+ctrl+a"}},x=new m;for(var _ in t.commands=new c,t.runEmmetCommand=function e(n){if("expand_abbreviation_with_tab"==this.action){if(!n.selection.isEmpty())return!1;var o=n.selection.lead,c=n.session.getTokenAt(o.row,o.column);if(c&&/\btag\b/.test(c.type))return!1}try{x.setupContext(n);var h=r.actions||r.require("actions");if("wrap_with_abbreviation"==this.action)return setTimeout((function(){h.run("wrap_with_abbreviation",x)}),0);var l=h.run(this.action,x)}catch(o){if(!r){var d=t.load(e.bind(this,n));return"expand_abbreviation_with_tab"!=this.action&&d}n._signal("changeStatus","string"==typeof o?o:o.message),f.warn(o),l=!1}return l},v)t.commands.addCommand({name:"emmet:"+_,action:_,bindKey:v[_],exec:t.runEmmetCommand,multiSelectAction:"forEach"});t.updateCommands=function(e,n){n?e.keyBinding.addKeyboardHandler(t.commands):e.keyBinding.removeKeyboardHandler(t.commands)},t.isSupportedMode=function(e){if(!e)return!1;if(e.emmetConfig)return!0;var t=e.$id||e;return/css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(t)},t.isAvailable=function(e,n){if(/(evaluate_math_expression|expand_abbreviation)$/.test(n))return!0;var r=e.session.$mode,o=t.isSupportedMode(r);if(o&&r.$modes)try{x.setupContext(e),/js|php/.test(x.getSyntax())&&(o=!1)}catch(e){}return o};var T=function(e,n){var r=n;if(r){var o=t.isSupportedMode(r.session.$mode);!1===e.enableEmmet&&(o=!1),o&&t.load(),t.updateCommands(r,o)}};t.load=function(e){return"string"!=typeof o?(f.warn("script for emmet-core is not loaded"),!1):(f.loadModule(o,(function(){o=null,e&&e()})),!0)},t.AceEmmetEditor=m,f.defineOptions(h.prototype,"editor",{enableEmmet:{set:function(e){this[e?"on":"removeListener"]("changeMode",T),T({enableEmmet:!!e},this)},value:!0}}),t.setCore=function(e){"string"==typeof e?o=e:r=e}})),ace.require(["ace/ext/emmet"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));