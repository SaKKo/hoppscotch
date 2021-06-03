ace.define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,l=t.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",h=t.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",c=function(){var e=this.createKeywordMapper({keyword:l,"support.function.builtin":h,"invalid.deprecated":"debugger"},"identifier");this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string.start",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string.end",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(e,t,n){var r="-"==e[2]?"indentedHeredoc":"heredoc",o=e.split(this.splitRegex);return n.push(r,o[4]),[{type:"constant",value:o[1]},{type:"text",value:o[2]},{type:"string",value:o[3]},{type:"support.class",value:o[4]},{type:"string",value:o[5]}]},rules:{heredoc:[{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^\t+"},{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(e,t){return"heredoc"===t[0]||"indentedHeredoc"===t[0]?t[0]:e}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:"(?:\\$(?:SHLVL|\\$|\\!|\\?))"},{token:"variable",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*(?==))"},{include:"variables"},{token:"support.function",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*\\s*\\(\\))"},{token:"support.function",regex:"(?:&(?:\\d+))"},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:"(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+)))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))"},{token:"constant.numeric",regex:"(?:(?:[1-9]\\d*)|(?:0))\\b"},{token:e,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};r.inherits(c,o),t.ShHighlightRules=c})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("../../range").Range,l=e("./fold_mode").FoldMode,h=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(h,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var line=e.getLine(n);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(line)?"start":r},this.getFoldWidgetRange=function(e,t,n,r){var o,line=e.getLine(n);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,n);if(o=line.match(this.foldingStartMarker)){var i=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,i);var l=e.getCommentFoldRange(n,i+o[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(o=line.match(this.foldingStopMarker))){i=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,i):e.getCommentFoldRange(n,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),n=line.search(/\S/),r=t,l=line.length,h=t+=1,c=e.getLength();++t<c;){var d=(line=e.getLine(t)).search(/\S/);if(-1!==d){if(n>d)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=r)break;if(f.isMultiLine())t=f.end.row;else if(n==d)break}h=t}}return new o(r,l,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,line,t){for(var n=line.search(/\s*$/),r=e.getLength(),l=t,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++t<r;){line=e.getLine(t);var d=h.exec(line);if(d&&(d[1]?c--:c++,!c))break}if(t>l)return new o(l,n,t,line.length)}}.call(h.prototype)})),ace.define("ace/mode/sh",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sh_highlight_rules","ace/range","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text").Mode,l=e("./sh_highlight_rules").ShHighlightRules,h=e("../range").Range,c=e("./folding/cstyle").FoldMode,d=e("./behaviour/cstyle").CstyleBehaviour,f=function(){this.HighlightRules=l,this.foldingRules=new c,this.$behaviour=new d};r.inherits(f,o),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,line,t){var n=this.$getIndent(line),r=this.getTokenizer().getLineTokens(line,e).tokens;if(r.length&&"comment"==r[r.length-1].type)return n;"start"==e&&(line.match(/^.*[\{\(\[:]\s*$/)&&(n+=t));return n};var e={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(t,line,input){if("\r\n"!==input&&"\r"!==input&&"\n"!==input)return!1;var n=this.getTokenizer().getLineTokens(line.trim(),t).tokens;if(!n)return!1;do{var r=n.pop()}while(r&&("comment"==r.type||"text"==r.type&&r.value.match(/^\s+$/)));return!!r&&("keyword"==r.type&&e[r.value])},this.autoOutdent=function(e,t,n){n+=1;var r=this.$getIndent(t.getLine(n)),o=t.getTabString();r.slice(-o.length)==o&&t.remove(new h(n,r.length-o.length,n,r.length))},this.$id="ace/mode/sh",this.snippetFileId="ace/snippets/sh"}.call(f.prototype),t.Mode=f})),ace.define("ace/mode/dockerfile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/sh_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./sh_highlight_rules").ShHighlightRules,l=function(){o.call(this);for(var e=this.$rules.start,i=0;i<e.length;i++)if("variable.language"==e[i].token){e.splice(i,0,{token:"constant.language",regex:"(?:^(?:FROM|MAINTAINER|RUN|CMD|EXPOSE|ENV|ADD|ENTRYPOINT|VOLUME|USER|WORKDIR|ONBUILD|COPY|LABEL)\\b)",caseInsensitive:!0});break}};r.inherits(l,o),t.DockerfileHighlightRules=l})),ace.define("ace/mode/dockerfile",["require","exports","module","ace/lib/oop","ace/mode/sh","ace/mode/dockerfile_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./sh").Mode,l=e("./dockerfile_highlight_rules").DockerfileHighlightRules,h=e("./folding/cstyle").FoldMode,c=function(){o.call(this),this.HighlightRules=l,this.foldingRules=new h};r.inherits(c,o),function(){this.$id="ace/mode/dockerfile"}.call(c.prototype),t.Mode=c})),ace.require(["ace/mode/dockerfile"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));