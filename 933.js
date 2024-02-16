/*! For license information please see 933.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[933],{5798:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=t.isValid=t.checkdigit=void 0;const n=r(2476);function o(e){return((10-e.substring(0,12).split("").map((e=>Number(e))).reduce(((e,t,r)=>e+t*(r%2?3:1)))%10)%10).toString()}t.checkdigit=o;const i=/^[0-9]{13}$/;function a(e){return i.test(e)&&o(e)===e[12]}t.isValid=a,t.encode=function(e){if(!a(e))throw new Error("Invalid EAN13 code");const[t,r]=c[e[0]],o=e.substring(1,7),i=e.substring(7,13),l=[{type:"quietZone",text:e[0],width:11},Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(o.split("").map(((e,r)=>n.Encoding[e][t[r]])).join(""))),{text:o}),Object.assign({type:"marker"},(0,n.dataWithWidth)("01010")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(i.split("").map(((e,t)=>n.Encoding[e][r[t]])).join(""))),{text:i}),Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),{type:"quietZone",width:7}];return{width:l.reduce(((e,t)=>e+t.width),0),groups:l}};const c={0:["LLLLLL","RRRRRR"],1:["LLGLGG","RRRRRR"],2:["LLGGLG","RRRRRR"],3:["LLGGGL","RRRRRR"],4:["LGLLGG","RRRRRR"],5:["LGGLLG","RRRRRR"],6:["LGGGLL","RRRRRR"],7:["LGLGLG","RRRRRR"],8:["LGLGGL","RRRRRR"],9:["LGGLGL","RRRRRR"]}},4292:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=t.isValid=t.checkdigit=void 0;const n=r(2476);function o(e){return((10-e.substring(0,7).split("").map((e=>Number(e))).reduce(((e,t,r)=>e+t*(r%2?1:3)))%10)%10).toString()}t.checkdigit=o;const i=/^[0-9]{8}$/;function a(e){return i.test(e)&&o(e)===e[7]}t.isValid=a,t.encode=function(e){if(!a(e))throw new Error("Invalid EAN8 code");const[t,r]=["LLLL","RRRR"],o=e.substring(0,4),i=e.substring(4,8),c=[{type:"quietZone",width:7},Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(o.split("").map(((e,r)=>n.Encoding[e][t[r]])).join(""))),{text:o}),Object.assign({type:"marker"},(0,n.dataWithWidth)("01010")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(i.split("").map(((e,t)=>n.Encoding[e][r[t]])).join(""))),{text:i}),Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),{type:"quietZone",width:7}];return{width:c.reduce(((e,t)=>e+t.width),0),groups:c}}},2476:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Encoding=t.dataWithWidth=void 0,t.dataWithWidth=function(e){return{data:e,width:e.length}},t.Encoding={0:{L:"0001101",G:"0100111",R:"1110010"},1:{L:"0011001",G:"0110011",R:"1100110"},2:{L:"0010011",G:"0011011",R:"1101100"},3:{L:"0111101",G:"0100001",R:"1000010"},4:{L:"0100011",G:"0011101",R:"1011100"},5:{L:"0110001",G:"0111001",R:"1001110"},6:{L:"0101111",G:"0000101",R:"1010000"},7:{L:"0111011",G:"0010001",R:"1000100"},8:{L:"0110111",G:"0001001",R:"1001000"},9:{L:"0001011",G:"0010111",R:"1110100"}}},7698:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=t.isValid=void 0;const n=r(5798),o=r(4292);function i(e,t){return"auto"!==e?e:13===t.length?"ean13":8===t.length?"ean8":void 0}t.isValid=function(e,{format:t="auto"}={}){const r=i(t,e);if(!r)throw new Error("Unable to determine format of EAN value");if("ean13"===r)return(0,n.isValid)(e);if("ean8"===r)return(0,o.isValid)(e);throw Error(`Format ${r} not supported`)},t.encode=function(e,{format:t="auto"}={}){const r=i(t,e);if(!r)throw new Error("Unable to determine format of EAN value");if("ean13"===r)return(0,n.encode)(e);if("ean8"===r)return(0,o.encode)(e);throw Error(`Format ${r} not supported`)}},3680:(e,t,r)=>{t.V=void 0;const n=r(1085),o=r(7698);t.V=({value:e,height:t=70,width:r,flat:i=!1})=>{const a=(0,o.encode)(e);let c=0;return(0,n.jsx)("svg",Object.assign({viewBox:`0 0 ${a.width} 70`,height:t,width:r,textAnchor:"middle",dominantBaseline:"bottom",fontSize:11,fontFamily:"monospace",shapeRendering:"crispedges"},{children:a.groups.map(((e,t)=>{const r=("quietZone"!==e.type||e.text)&&(0,n.jsxs)("g",{children:["quietZone"!==e.type&&e.data.split("").map(((t,r)=>"1"===t?(0,n.jsx)("rect",{x:c+r,y:0,width:1,height:"marker"!==e.type||i?60:66},r):null)),e.text&&(0,n.jsx)("text",Object.assign({x:c+e.width/2,y:69},{children:e.text}))]},t);return c+=e.width,r}))}))}},6549:(e,t,r)=>{r.r(t),r.d(t,{default:()=>le});var n=r(4041),o=r(8283),i=r(6333),a=r(5380),c=r(4084),l=r(7698),u=r(3680);function s(e){var t=e.barcode,r=e.className;return(0,n.useMemo)((function(){try{(0,l.encode)(t)}catch(e){return!1}return!0}),[t])?n.createElement("div",{className:r},n.createElement(u.V,{value:t})):null}var f=r(7883);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){var n;return n=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==p(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=/^EAN: (\d{13}$)/,v=function(){var e;return null===(e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(e){return e.match(y)})))||void 0===e?void 0:e.replace(y,"$1")},b=function(e){return Number((e.filter((function(e){return!e.match(/Oszczędź/)})).pop()||"0").replace(/[^0-9,\.]/g,"").replace(",","."))},g=function(e){var t=e.price,r=e._history,n=void 0===r?{}:r;return Object.entries(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(h({},Date.now(),{price:t}),n)).reduce((function(e,t){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(r,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=(o[0],o[1].price);return function(t){return Object.assign(e,0<t&&t<e.priceMin?{priceMin:t}:{},t>e.priceMax?{priceMax:t}:{})}(b(i))}),function(e){return{priceNow:e,priceMin:e,priceMax:e}}(b(t)))},E=r(3373),w=r.n(E),A=r(2591),j=r.n(A),O=r(1740),C=r.n(O),R=r(8128),x=r.n(R),L=r(855),S=r.n(L),_=r(3051),k=r.n(_),N=r(3656),G=r.n(N),M=r(6960),P={};P.styleTagTransform=G(),P.setAttributes=S(),P.insert=x().bind(null,"head"),P.domAPI=C(),P.insertStyleElement=k(),j()(M.A,P);const F=M.A&&M.A.locals?M.A.locals:void 0;function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}var T=["priceTo"],I=["priceFrom"],U=["_created","_updated"],B=["images","srcSet"];function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=W(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==W(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(){q=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:R(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",d="suspendedYield",m="executing",h="completed",y={};function v(){}function b(){}function g(){}var E={};u(E,a,(function(){return this}));var w=Object.getPrototypeOf,A=w&&w(w(k([])));A&&A!==r&&n.call(A,a)&&(E=A);var j=g.prototype=v.prototype=Object.create(E);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==W(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function R(t,r,n){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=x(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?h:d,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=h,n.method="throw",n.arg=u.arg)}}}function x(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(W(t)+" is not iterable")}return b.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=u(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},O(C.prototype),u(C.prototype,c,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new C(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(j),u(j,l,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function K(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var z={title:1,brand:1,_price:1,_priceChangeMax:1,_priceChangeMin:1,_stars:-1,_created:-1,_updated:-1},J=[0,100,200,500,1e3,1500,2e3,3e3,4e3,5e3,1e4,15e3,2e4,25e3],Q=[-100,-50,-30,-20,-10,-5,0,5,10,20,30,50,100],X=(0,i.$)(function(){var e,t=(e=q().mark((function e(t){var r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/products/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){K(i,n,o,a,c,"next",e)}function c(e){K(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()),Z=function(e){return"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e)," zł")},ee=function(e,t){return"".concat(new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(100*(e/t-1)),"%")},te=function(e,t){return 0===t||e.priceNow>0&&(t>0?100*(e.priceNow/e.priceMin-1)>=t:100*(e.priceNow/e.priceMax-1)<=t)};function re(e){var t=e.item;return n.createElement("div",null,n.createElement("span",null,n.createElement("b",null," cena: ".concat(Z(t.priceNow)," "))),t.priceMin<t.priceNow&&n.createElement("span",null," / min: ".concat(Z(t.priceMin)," (").concat(ee(t.priceNow,t.priceMin),") ")),t.priceNow<t.priceMax&&n.createElement("span",null," / max: ".concat(Z(t.priceMax)," (").concat(ee(t.priceNow,t.priceMax),") ")))}function ne(e){var t=e.version,r=void 0===t?"v1":t,o=X.read(r).results,i=(0,n.useMemo)((function(){return{brand:[""].concat(o.map((function(e){return e.brand})).filter(Boolean).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[o]),l=H((0,n.useState)((function(){return{brand:i.brand[0],category:"",search:"",onlyMinimal:!0,onlyPromoted:!1,onlyReduced:!1,priceFrom:J[0],priceTo:J[J.length-1],priceChange:0}})),2),u=l[0],p=l[1],d=H((0,f.A)(u.search),1)[0],m=H((0,n.useState)((function(){return Object.keys(z).pop()})),2),h=m[0],y=m[1],E=(0,n.useCallback)((function(e){var t=e.target;return p((function(e){var r=e.priceTo,n=V(e,T),o=Number(t.value);return D(D({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[]),w=(0,n.useCallback)((function(e){var t=e.target;return p((function(e){var r=e.priceFrom,n=V(e,I),o=Number(t.value);return D(D({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[]),A=(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return D(D({},e),{},{priceChange:Number(t.value)})}))}),[]);console.log({filters:u,results:o});var j=(0,n.useMemo)((function(){return o.map((function(e){var t=e._created,r=e._updated,n=void 0===r?t:r,o=V(e,U);return D(D(D({_title:o.title.toLowerCase(),_price:b(o.price),_stars:Number(o.stars.replace(/[^0-9]/g,"")),_created:t,_updated:n,_history:{}},o),function(e){return D(D({},e),{},{_priceChangeMin:100*(e.priceNow/e.priceMin-1),_priceChangeMax:100*(e.priceNow/e.priceMax-1)})}(g(o))),{},{barcode:v(o.label)})})).filter((function(e){return(e._title.match(d)||d.trim()===String(e.id))&&u.priceFrom<=e.priceNow&&e.priceNow<=u.priceTo&&te(e,u.priceChange)&&(!u.brand||[e.brand].includes(u.brand))&&(!u.onlyMinimal||e.priceNow===e.priceMin)&&(!u.onlyPromoted||e.proms.length>0)&&(!u.onlyReduced||e.price.length>1)}))}),[o,d,u.brand,u.priceFrom,u.priceTo,u.priceChange,u.onlyMinimal,u.onlyPromoted,u.onlyReduced]),O=(0,n.useMemo)((function(){return j.sort((function(e,t){return e[h]===t[h]?e._created>t._created?1:-1:z[h]*(e[h]>t[h]?1:-1)}))}),[j,h]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:u.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return D(D({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Brand"),n.createElement("select",{value:u.brand,onChange:(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return D(D({},e),{},{brand:t.value})}))}),[])},i.brand.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:h,onChange:(0,n.useCallback)((function(e){var t=e.target;return y(t.value)}),[])},Object.entries(z).map((function(e){var t=H(e,2),r=t[0];return t[1],n.createElement("option",{key:r,value:r},r)})))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.onlyMinimal,onChange:(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return D(D({},e),{},{onlyMinimal:t.checked})}))}),[])}),n.createElement("span",null,"Minimal")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.onlyPromoted,onChange:(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return D(D({},e),{},{onlyPromoted:t.checked})}))}),[])}),n.createElement("span",null,"Promoted")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.onlyReduced,onChange:(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return D(D({},e),{},{onlyReduced:t.checked})}))}),[])}),n.createElement("span",null,"Reduced")),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:J[0],max:J[J.length-1],value:u.priceFrom,onChange:E}),n.createElement("datalist",{id:"price-list"},J.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," zł"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:J[0],max:J[J.length-1],value:u.priceTo,onChange:w}),n.createElement("span",null,"".concat(u.priceFrom,"-").concat(u.priceTo," zł")))," ",n.createElement("label",null,n.createElement("span",null,"Price Change"),n.createElement("input",{type:"range",list:"price-change-list",min:Q[0],max:Q[Q.length-1],value:u.priceChange,onChange:A}),n.createElement("datalist",{id:"price-change-list"},Q.map((function(e){return n.createElement("option",{key:e,value:e})}))),n.createElement("span",null,"".concat(u.priceChange,"%"))))),n.createElement("div",null,"Found ".concat(j.length," products out of a total of ").concat(o.length)),n.createElement("ol",null,O.slice(0,100).map((function(e){var t=e.images,r=e.srcSet,o=V(e,B);return n.createElement("li",{key:o.id,className:F.Row},n.createElement(a.Z,{className:F.Gallery,images:t,srcSet:r}),o.barcode&&n.createElement(s,{className:F.Barcode,barcode:o.barcode}),n.createElement("h3",null,n.createElement(c.N,{href:o.url},o.title)),n.createElement("h4",null,o.brand),o.label&&n.createElement("div",null,o.label.join(" | ")),n.createElement(re,{item:o}),n.createElement(ae,{item:o}),n.createElement(ie,{history:Object.entries(o._history).reverse(),item:o}),o.reviews&&n.createElement(ce,{reviews:o.reviews}))}))))}var oe=1;function ie(e){var t=e.history,r=e.item,o=H((0,n.useState)((function(){return!(t.length>oe)})),2),i=o[0],a=o[1];return n.createElement("div",{className:F.History},(i?t:t.slice(0,oe)).map((function(e,t,o){var i=H(e,2),a=i[0],c=i[1];return n.createElement(ae,{key:t,item:c,prev:t>0?o[t-1][1]:r,time:Number(a)})})),!1===i&&n.createElement(c.N,{onClick:function(e){return e.preventDefault(),a(!0)}},"Show more..."))}function ae(e){var t=e.item,r=e.prev,i=e.time,a=void 0===i?t._updated||t._created:i;return n.createElement("div",{className:w()(F.Details,r&&F.separator)},n.createElement("div",{className:F.Sidebar},a&&n.createElement("div",{className:F.Date},(0,o.GP)(a,"yyyy-MM-dd HH:mm")),n.createElement("h5",null,t.price.join(" ")),n.createElement("div",{className:w()(F.Feature,r&&r.stars!==t.stars&&F.changed)},t.stars)),t.proms&&n.createElement("div",{className:w()(F.Feature,r&&r.proms!==t.proms&&F.changed)},t.proms.join(" | ")),n.createElement("ul",{className:w()(F.Feature,r&&r.links.join(":")!==t.links.join(":")&&F.changed)},t.links.map((function(e,t){return n.createElement("li",{key:t},e)}))))}function ce(e){var t=e.reviews,r=H((0,n.useState)(!1),2),o=r[0],i=r[1];return n.createElement("div",null,n.createElement("div",null,n.createElement(c.N,{onClick:function(e){return e.preventDefault(),i((function(e){return!e}))}},o?"Hide reviews":"Show reviews")),o&&n.createElement("ul",null,t.map((function(e,t){var r=e.author,o=e.body,i=e.date,a=e.rating,c=void 0===a?"-":a;return n.createElement("li",{key:t},n.createElement("div",null,n.createElement("b",null,i,", ",r," (",c,")")),n.createElement("div",null,o))}))))}function le(){return n.createElement("div",{className:F.Section},n.createElement("h2",null,"Products"),n.createElement(ne,null))}},7883:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(4041);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){var t,r,i=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1],l=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(l.current),l.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(l.current)}}),[e]),[a]}},6960:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(2001),o=r.n(n),i=r(935),a=r.n(i)()(o());a.push([e.id,".KUxoC6psSrrMeYM5oAlM{color:purple}.KUxoC6psSrrMeYM5oAlM h4{margin:.5em 0}.KUxoC6psSrrMeYM5oAlM h5{margin:.25em 0}.mfYsAqyyqNlAHcqIZRYo{clear:both}.IUsVGkhlVQfyeVKDBe0W{float:left;width:200px;height:150px}.bjKwkJ10mgVeKE66YVYI{float:right}.oYFC57M7QUXHd0bHx90u{clear:both}.oYFC57M7QUXHd0bHx90u .d4EGmd7WGzC6jR642U4i{float:right;text-align:right;margin:0 2em}.oYFC57M7QUXHd0bHx90u .hCevawnmB_dy9ljh4Xeg.WHvJJI0E40Qb_2xC6kaz{color:#8a2be2}.oYFC57M7QUXHd0bHx90u.eCohJhUTkuxKnSmXSCp6{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}","",{version:3,sources:["webpack://./src/containers/Products/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,yBACE,aAAA,CAEF,yBACE,cAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,WAAA,CAEF,sBACE,UAAA,CACA,4CACE,WAAA,CACA,gBAAA,CACA,YAAA,CAGA,iEACE,aAAA,CAGJ,2CACE,4BAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  h4 {\n    margin: 0.5em 0;\n  }\n  h5 {\n    margin: 0.25em 0;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Barcode {\n  float: right;\n}\n.Details {\n  clear: both;\n  .Sidebar {\n    float: right;\n    text-align: right;\n    margin: 0 2em;\n  }\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  &.separator {\n    border-top: 1px solid lightgray;\n    margin-top: 0.5em;\n    padding-top: 0.5em;\n  }\n}\n"],sourceRoot:""}]),a.locals={Section:"KUxoC6psSrrMeYM5oAlM",Row:"mfYsAqyyqNlAHcqIZRYo",Gallery:"IUsVGkhlVQfyeVKDBe0W",Barcode:"bjKwkJ10mgVeKE66YVYI",Details:"oYFC57M7QUXHd0bHx90u",Sidebar:"d4EGmd7WGzC6jR642U4i",Feature:"hCevawnmB_dy9ljh4Xeg",changed:"WHvJJI0E40Qb_2xC6kaz",separator:"eCohJhUTkuxKnSmXSCp6"};const c=a},3335:(e,t,r)=>{var n=r(4041),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,s=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:s,props:i,_owner:c.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},1085:(e,t,r)=>{e.exports=r(3335)},5833:(e,t,r)=>{r.d(t,{B:()=>a});var n=r(4353),o=r(2185),i=r(869);function a(e,t){return void 0===t&&(t=n.E),(0,o.N)((function(r,n){var o=null,a=null,c=null,l=function(){if(o){o.unsubscribe(),o=null;var e=a;a=null,n.next(e)}};function u(){var r=c+e,i=t.now();if(i<r)return o=this.schedule(void 0,r-i),void n.add(o);l()}r.subscribe((0,i._)(n,(function(r){a=r,c=t.now(),o||(o=t.schedule(u,e),n.add(o))}),(function(){l(),n.complete()}),void 0,(function(){a=o=null})))}))}}}]);
//# sourceMappingURL=933.js.map