ace.define("ace/mode/textile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,c=function(){this.$rules={start:[{token:function(e){return"h"==e.charAt(0)?"markup.heading."+e.charAt(1):"markup.heading"},regex:"h1|h2|h3|h4|h5|h6|bq|p|bc|pre",next:"blocktag"},{token:"keyword",regex:"[\\*]+|[#]+"},{token:"text",regex:".+"}],blocktag:[{token:"keyword",regex:"\\. ",next:"start"},{token:"keyword",regex:"\\(",next:"blocktagproperties"}],blocktagproperties:[{token:"keyword",regex:"\\)",next:"blocktag"},{token:"string",regex:"[a-zA-Z0-9\\-_]+"},{token:"keyword",regex:"#"}]}};o.inherits(c,r),t.TextileHighlightRules=c})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,c=e.findMatchingBracket({row:t,column:r});if(!c||c.row==t)return 0;var h=this.$getIndent(e.getLine(c.row));e.replace(new o(t,0,t,r-1),h)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/textile",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/textile_highlight_rules","ace/mode/matching_brace_outdent"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,c=e("./textile_highlight_rules").TextileHighlightRules,h=e("./matching_brace_outdent").MatchingBraceOutdent,l=function(){this.HighlightRules=c,this.$outdent=new h,this.$behaviour=this.$defaultBehaviour};o.inherits(l,r),function(){this.type="text",this.getNextLineIndent=function(e,line,t){return"intag"==e?t:""},this.checkOutdent=function(e,line,input){return this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/textile",this.snippetFileId="ace/snippets/textile"}.call(l.prototype),t.Mode=l})),ace.require(["ace/mode/textile"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));