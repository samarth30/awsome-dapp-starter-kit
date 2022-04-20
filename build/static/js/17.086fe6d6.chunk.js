(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[17],{1719:function(e,r,n){"use strict";var t,a,i,u,o,c,s;function l(){var e=i,r=[];if(v("{"),!y("}")){do{r.push(f())}while(y(","));v("}")}return{kind:"Object",start:e,end:o,members:r}}function f(){var e=i,r="String"===s?p():null;v("String"),v(":");var n=d();return{kind:"Member",start:e,end:o,key:r,value:n}}function d(){switch(s){case"[":return function(){var e=i,r=[];if(v("["),!y("]")){do{r.push(d())}while(y(","));v("]")}return{kind:"Array",start:e,end:o,values:r}}();case"{":return l();case"String":case"Number":case"Boolean":case"Null":var e=p();return m(),e}v("Value")}function p(){return{kind:s,start:i,end:u,value:JSON.parse(t.slice(i,u))}}function v(e){if(s!==e){var r;if("EOF"===s)r="[end of file]";else if(u-i>1)r="`"+t.slice(i,u)+"`";else{var n=t.slice(i).match(/^.+?\b/);r="`"+(n?n[0]:t[i])+"`"}throw h("Expected "+e+" but found "+r+".")}m()}function h(e){return{message:e,start:i,end:u}}function y(e){if(s===e)return m(),!0}function b(){return u<a&&(u++,c=u===a?0:t.charCodeAt(u)),c}function m(){for(o=u;9===c||10===c||13===c||32===c;)b();if(0!==c){switch(i=u,c){case 34:return s="String",function(){b();for(;34!==c&&c>31;)if(92===c)switch(c=b()){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:b();break;case 117:b(),k(),k(),k(),k();break;default:throw h("Bad character escape sequence.")}else{if(u===a)throw h("Unterminated string.");b()}if(34===c)return void b();throw h("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s="Number",function(){45===c&&b();48===c?b():g();46===c&&(b(),g());69!==c&&101!==c||(43!==(c=b())&&45!==c||b(),g())}();case 102:if("false"!==t.slice(i,i+5))break;return u+=4,b(),void(s="Boolean");case 110:if("null"!==t.slice(i,i+4))break;return u+=3,b(),void(s="Null");case 116:if("true"!==t.slice(i,i+4))break;return u+=3,b(),void(s="Boolean")}s=t[i],b()}else s="EOF"}function k(){if(c>=48&&c<=57||c>=65&&c<=70||c>=97&&c<=102)return b();throw h("Expected hexadecimal digit.")}function g(){if(c<48||c>57)throw h("Expected decimal digit.");do{b()}while(c>=48&&c<=57)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){t=e,a=e.length,i=u=o=-1,b(),m();var r=l();return v("EOF"),r}},1741:function(e,r,n){"use strict";var t=this&&this.__read||function(e,r){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,i=n.call(e),u=[];try{for(;(void 0===r||r-- >0)&&!(t=i.next()).done;)u.push(t.value)}catch(o){a={error:o}}finally{try{t&&!t.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return u},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=a(n(1705)),u=n(80),o=a(n(1719));function c(e,r){if(!e||!r)return[];if(e instanceof u.GraphQLNonNull)return"Null"===r.kind?[[r,'Type "'+e+'" is non-nullable and cannot be null.']]:c(e.ofType,r);if("Null"===r.kind)return[];if(e instanceof u.GraphQLList){var n=e.ofType;return"Array"===r.kind?l(r.values||[],(function(e){return c(n,e)})):c(n,r)}if(e instanceof u.GraphQLInputObjectType){if("Object"!==r.kind)return[[r,'Type "'+e+'" must be an Object.']];var t=Object.create(null),a=l(r.members,(function(r){var n,a=null===(n=null===r||void 0===r?void 0:r.key)||void 0===n?void 0:n.value;t[a]=!0;var i=e.getFields()[a];return i?c(i?i.type:void 0,r.value):[[r.key,'Type "'+e+'" does not have a field "'+a+'".']]}));return Object.keys(e.getFields()).forEach((function(n){t[n]||e.getFields()[n].type instanceof u.GraphQLNonNull&&a.push([r,'Object of type "'+e+'" is missing required field "'+n+'".'])})),a}return"Boolean"===e.name&&"Boolean"!==r.kind||"String"===e.name&&"String"!==r.kind||"ID"===e.name&&"Number"!==r.kind&&"String"!==r.kind||"Float"===e.name&&"Number"!==r.kind||"Int"===e.name&&("Number"!==r.kind||(0|r.value)!==r.value)||(e instanceof u.GraphQLEnumType||e instanceof u.GraphQLScalarType)&&("String"!==r.kind&&"Number"!==r.kind&&"Boolean"!==r.kind&&"Null"!==r.kind||(null===(i=e.parseValue(r.value))||void 0===i||i!==i))?[[r,'Expected value of type "'+e+'".']]:[];var i}function s(e,r,n){return{message:n,severity:"error",type:"validation",from:e.posFromIndex(r.start),to:e.posFromIndex(r.end)}}function l(e,r){return Array.prototype.concat.apply([],e.map(r))}i.default.registerHelper("lint","graphql-variables",(function(e,r,n){if(!e)return[];var a;try{a=o.default(e)}catch(u){if(u.stack)throw u;return[s(n,u,u.message)]}var i=r.variableToType;return i?function(e,r,n){var a=[];return n.members.forEach((function(n){var i;if(n){var u=null===(i=n.key)||void 0===i?void 0:i.value,o=r[u];o?c(o,n.value).forEach((function(r){var n=t(r,2),i=n[0],u=n[1];a.push(s(e,i,u))})):a.push(s(e,n.key,'Variable "$'+u+'" does not appear in any GraphQL query.'))}})),a}(n,i,a):[]}))}}]);
//# sourceMappingURL=17.086fe6d6.chunk.js.map