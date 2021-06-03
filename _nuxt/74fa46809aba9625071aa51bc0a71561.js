ace.define("ace/ext/rtl",["require","exports","module","ace/editor","ace/config"],(function(e,t,n){"use strict";var r=[{name:"leftToRight",bindKey:{win:"Ctrl-Alt-Shift-L",mac:"Command-Alt-Shift-L"},exec:function(e){e.session.$bidiHandler.setRtlDirection(e,!1)},readOnly:!0},{name:"rightToLeft",bindKey:{win:"Ctrl-Alt-Shift-R",mac:"Command-Alt-Shift-R"},exec:function(e){e.session.$bidiHandler.setRtlDirection(e,!0)},readOnly:!0}],o=e("../editor").Editor;function d(e,t){var n=t.getSelection().lead;t.session.$bidiHandler.isRtlLine(n.row)&&0===n.column&&(t.session.$bidiHandler.isMoveLeftOperation&&n.row>0?t.getSelection().moveCursorTo(n.row-1,t.session.getLine(n.row-1).length):t.getSelection().isEmpty()?n.column+=1:n.setPosition(n.row,n.column+1))}function l(e){e.editor.session.$bidiHandler.isMoveLeftOperation=/gotoleft|selectleft|backspace|removewordleft/.test(e.command.name)}function c(e,t){var n=t.session;if(n.$bidiHandler.currentRow=null,n.$bidiHandler.isRtlLine(e.start.row)&&"insert"===e.action&&e.lines.length>1)for(var r=e.start.row;r<e.end.row;r++)n.getLine(r+1).charAt(0)!==n.$bidiHandler.RLE&&(n.doc.$lines[r+1]=n.$bidiHandler.RLE+n.getLine(r+1))}function f(e,t){var n=t.session.$bidiHandler,r=t.$textLayer.$lines.cells,o=t.layerConfig.width-t.layerConfig.padding+"px";r.forEach((function(e){var style=e.element.style;n&&n.isRtlLine(e.row)?(style.direction="rtl",style.textAlign="right",style.width=o):(style.direction="",style.textAlign="",style.width="")}))}function h(e){var t=e.$textLayer.$lines;function n(e){var style=e.element.style;style.direction=style.textAlign=style.width=""}t.cells.forEach(n),t.cellCache.forEach(n)}e("../config").defineOptions(o.prototype,"editor",{rtlText:{set:function(e){e?(this.on("change",c),this.on("changeSelection",d),this.renderer.on("afterRender",f),this.commands.on("exec",l),this.commands.addCommands(r)):(this.off("change",c),this.off("changeSelection",d),this.renderer.off("afterRender",f),this.commands.off("exec",l),this.commands.removeCommands(r),h(this.renderer)),this.renderer.updateFull()}},rtl:{set:function(e){this.session.$bidiHandler.$isRtl=e,e?(this.setOption("rtlText",!1),this.renderer.on("afterRender",f),this.session.$bidiHandler.seenBidi=!0):(this.renderer.off("afterRender",f),h(this.renderer)),this.renderer.updateFull()}}})})),ace.require(["ace/ext/rtl"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));