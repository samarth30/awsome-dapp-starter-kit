(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[19],{1744:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(1705)),l=r(364);function a(e,t){var r,n,u=e.levels;return((u&&0!==u.length?u[u.length-1]-((null===(r=this.electricInput)||void 0===r?void 0:r.test(t))?1:0):e.indentLevel)||0)*((null===(n=this.config)||void 0===n?void 0:n.indentUnit)||0)}u.default.defineMode("graphql-results",(function(e){var t=l.onlineParser({eatWhitespace:function(e){return e.eatSpace()},lexRules:i,parseRules:s,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:a,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}}));var i={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},s={Document:[l.p("{"),l.list("Entry",l.p(",")),l.p("}")],Entry:[l.t("String","def"),l.p(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[l.t("Number","number")],StringValue:[l.t("String","string")],BooleanValue:[l.t("Keyword","builtin")],NullValue:[l.t("Keyword","keyword")],ListValue:[l.p("["),l.list("Value",l.p(",")),l.p("]")],ObjectValue:[l.p("{"),l.list("ObjectField",l.p(",")),l.p("}")],ObjectField:[l.t("String","property"),l.p(":"),"Value"]}}}]);
//# sourceMappingURL=19.7fd5b6c1.chunk.js.map