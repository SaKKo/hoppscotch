ace.define("ace/mode/maze_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"keyword.control",regex:/##|``/,comment:"Wall"},{token:"entity.name.tag",regex:/\.\./,comment:"Path"},{token:"keyword.control",regex:/<>/,comment:"Splitter"},{token:"entity.name.tag",regex:/\*[\*A-Za-z0-9]/,comment:"Signal"},{token:"constant.numeric",regex:/[0-9]{2}/,comment:"Pause"},{token:"keyword.control",regex:/\^\^/,comment:"Start"},{token:"keyword.control",regex:/\(\)/,comment:"Hole"},{token:"support.function",regex:/>>/,comment:"Out"},{token:"support.function",regex:/>\//,comment:"Ln Out"},{token:"support.function",regex:/<</,comment:"In"},{token:"keyword.control",regex:/--/,comment:"One use"},{token:"constant.language",regex:/%[LRUDNlrudn]/,comment:"Direction"},{token:["entity.name.function","keyword.other","keyword.operator","keyword.other","keyword.operator","constant.numeric","keyword.operator","keyword.other","keyword.operator","constant.numeric","string.quoted.double","string.quoted.single"],regex:/([A-Za-z][A-Za-z0-9])( *-> *)(?:([-+*\/]=)( *)((?:-)?)([0-9]+)|(=)( *)(?:((?:-)?)([0-9]+)|("[^"]*")|('[^']*')))/,comment:"Assignment function"},{token:["entity.name.function","keyword.other","keyword.control","keyword.other","keyword.operator","keyword.other","keyword.operator","constant.numeric","entity.name.tag","keyword.other","keyword.control","keyword.other","constant.language","keyword.other","keyword.control","keyword.other","constant.language"],regex:/([A-Za-z][A-Za-z0-9])( *-> *)(IF|if)( *)(?:([<>]=?|==)( *)((?:-)?)([0-9]+)|(\*[\*A-Za-z0-9]))( *)(THEN|then)( *)(%[LRUDNlrudn])(?:( *)(ELSE|else)( *)(%[LRUDNlrudn]))?/,comment:"Equality Function"},{token:"entity.name.function",regex:/[A-Za-z][A-Za-z0-9]/,comment:"Function cell"},{token:"comment.line.double-slash",regex:/ *\/\/.*/,comment:"Comment"}]},this.normalizeRules()};l.metaData={fileTypes:["mz"],name:"Maze",scopeName:"source.maze"},n.inherits(l,r),t.MazeHighlightRules=l})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,o){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,l=e("./fold_mode").FoldMode,c=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(c,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var line=e.getLine(o);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var n=this._getFoldWidgetBase(e,t,o);return!n&&this.startRegionRe.test(line)?"start":n},this.getFoldWidgetRange=function(e,t,o,n){var r,line=e.getLine(o);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,o);if(r=line.match(this.foldingStartMarker)){var i=r.index;if(r[1])return this.openingBracketBlock(e,r[1],o,i);var l=e.getCommentFoldRange(o,i+r[0].length,1);return l&&!l.isMultiLine()&&(n?l=this.getSectionRange(e,o):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(r=line.match(this.foldingStopMarker))){i=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],o,i):e.getCommentFoldRange(o,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),o=line.search(/\S/),n=t,l=line.length,c=t+=1,m=e.getLength();++t<m;){var d=(line=e.getLine(t)).search(/\S/);if(-1!==d){if(o>d)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=n)break;if(h.isMultiLine())t=h.end.row;else if(o==d)break}c=t}}return new r(n,l,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,line,t){for(var o=line.search(/\s*$/),n=e.getLength(),l=t,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,m=1;++t<n;){line=e.getLine(t);var d=c.exec(line);if(d&&(d[1]?m--:m++,!m))break}if(t>l)return new r(l,o,t,line.length)}}.call(c.prototype)})),ace.define("ace/mode/maze",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/maze_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,l=e("./maze_highlight_rules").MazeHighlightRules,c=e("./folding/cstyle").FoldMode,m=function(){this.HighlightRules=l,this.foldingRules=new c,this.$behaviour=this.$defaultBehaviour};n.inherits(m,r),function(){this.lineCommentStart="//",this.$id="ace/mode/maze",this.snippetFileId="ace/snippets/maze"}.call(m.prototype),t.Mode=m})),ace.require(["ace/mode/maze"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));