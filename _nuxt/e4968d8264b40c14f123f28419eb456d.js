ace.define("ace/snippets/snippets",["require","exports","module"],(function(e,t,n){"use strict";t.snippetText="# snippets for making snippets :)\nsnippet snip\n\tsnippet ${1:trigger}\n\t\t${2}\nsnippet msnip\n\tsnippet ${1:trigger} ${2:description}\n\t\t${3}\nsnippet v\n\t{VISUAL}\n",t.scope="snippets"})),ace.require(["ace/snippets/snippets"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));