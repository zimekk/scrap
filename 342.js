/*! For license information please see 342.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[342],{2567:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=t.isValid=t.checkdigit=void 0;const n=r(620);function o(e){return((10-e.substring(0,12).split("").map((e=>Number(e))).reduce(((e,t,r)=>e+t*(r%2?3:1)))%10)%10).toString()}t.checkdigit=o;const a=/^[0-9]{13}$/;function i(e){return a.test(e)&&o(e)===e[12]}t.isValid=i,t.encode=function(e){if(!i(e))throw new Error("Invalid EAN13 code");const[t,r]=c[e[0]],o=e.substring(1,7),a=e.substring(7,13),l=[{type:"quietZone",text:e[0],width:11},Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(o.split("").map(((e,r)=>n.Encoding[e][t[r]])).join(""))),{text:o}),Object.assign({type:"marker"},(0,n.dataWithWidth)("01010")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(a.split("").map(((e,t)=>n.Encoding[e][r[t]])).join(""))),{text:a}),Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),{type:"quietZone",width:7}];return{width:l.reduce(((e,t)=>e+t.width),0),groups:l}};const c={0:["LLLLLL","RRRRRR"],1:["LLGLGG","RRRRRR"],2:["LLGGLG","RRRRRR"],3:["LLGGGL","RRRRRR"],4:["LGLLGG","RRRRRR"],5:["LGGLLG","RRRRRR"],6:["LGGGLL","RRRRRR"],7:["LGLGLG","RRRRRR"],8:["LGLGGL","RRRRRR"],9:["LGGLGL","RRRRRR"]}},4688:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=t.isValid=t.checkdigit=void 0;const n=r(620);function o(e){return((10-e.substring(0,7).split("").map((e=>Number(e))).reduce(((e,t,r)=>e+t*(r%2?1:3)))%10)%10).toString()}t.checkdigit=o;const a=/^[0-9]{8}$/;function i(e){return a.test(e)&&o(e)===e[7]}t.isValid=i,t.encode=function(e){if(!i(e))throw new Error("Invalid EAN8 code");const[t,r]=["LLLL","RRRR"],o=e.substring(0,4),a=e.substring(4,8),c=[{type:"quietZone",width:7},Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(o.split("").map(((e,r)=>n.Encoding[e][t[r]])).join(""))),{text:o}),Object.assign({type:"marker"},(0,n.dataWithWidth)("01010")),Object.assign(Object.assign({type:"data"},(0,n.dataWithWidth)(a.split("").map(((e,t)=>n.Encoding[e][r[t]])).join(""))),{text:a}),Object.assign({type:"marker"},(0,n.dataWithWidth)("101")),{type:"quietZone",width:7}];return{width:c.reduce(((e,t)=>e+t.width),0),groups:c}}},620:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Encoding=t.dataWithWidth=void 0,t.dataWithWidth=function(e){return{data:e,width:e.length}},t.Encoding={0:{L:"0001101",G:"0100111",R:"1110010"},1:{L:"0011001",G:"0110011",R:"1100110"},2:{L:"0010011",G:"0011011",R:"1101100"},3:{L:"0111101",G:"0100001",R:"1000010"},4:{L:"0100011",G:"0011101",R:"1011100"},5:{L:"0110001",G:"0111001",R:"1001110"},6:{L:"0101111",G:"0000101",R:"1010000"},7:{L:"0111011",G:"0010001",R:"1000100"},8:{L:"0110111",G:"0001001",R:"1001000"},9:{L:"0001011",G:"0010111",R:"1110100"}}},2552:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=t.isValid=void 0;const n=r(2567),o=r(4688);function a(e,t){return"auto"!==e?e:13===t.length?"ean13":8===t.length?"ean8":void 0}t.isValid=function(e,{format:t="auto"}={}){const r=a(t,e);if(!r)throw new Error("Unable to determine format of EAN value");if("ean13"===r)return(0,n.isValid)(e);if("ean8"===r)return(0,o.isValid)(e);throw Error(`Format ${r} not supported`)},t.encode=function(e,{format:t="auto"}={}){const r=a(t,e);if(!r)throw new Error("Unable to determine format of EAN value");if("ean13"===r)return(0,n.encode)(e);if("ean8"===r)return(0,o.encode)(e);throw Error(`Format ${r} not supported`)}},704:(e,t,r)=>{t.S=void 0;const n=r(2322),o=r(2552);t.S=({value:e,height:t=70,width:r,flat:a=!1})=>{const i=(0,o.encode)(e);let c=0;return(0,n.jsx)("svg",Object.assign({viewBox:`0 0 ${i.width} 70`,height:t,width:r,textAnchor:"middle",dominantBaseline:"bottom",fontSize:11,fontFamily:"monospace",shapeRendering:"crispedges"},{children:i.groups.map(((e,t)=>{const r=("quietZone"!==e.type||e.text)&&(0,n.jsxs)("g",{children:["quietZone"!==e.type&&e.data.split("").map(((t,r)=>"1"===t?(0,n.jsx)("rect",{x:c+r,y:0,width:1,height:"marker"!==e.type||a?60:66},r):null)),e.text&&(0,n.jsx)("text",Object.assign({x:c+e.width/2,y:69},{children:e.text}))]},t);return c+=e.width,r}))}))}},7129:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ie});var n=r(2784),o=r(5016),a=r(357),i=r(5726),c=r(891),l=r(2552),u=r(704);function s(e){var t=e.barcode,r=e.className;return(0,n.useMemo)((function(){try{(0,l.encode)(t)}catch(e){return!1}return!0}),[t])?n.createElement("div",{className:r},n.createElement(u.S,{value:t})):null}var d=r(9539);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=/^EAN: (\d{13}$)/,y=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null===(e=t.find((function(e){return e.match(m)})))||void 0===e?void 0:e.replace(m,"$1")},v=function(e){return Number((e.filter((function(e){return!e.match(/Oszczędź/)})).pop()||"0").replace(/[^0-9,\.]/g,"").replace(",","."))},g=function(e){var t=e.price,r=e._history,n=void 0===r?{}:r;return Object.entries(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(h({},Date.now(),{price:t}),n)).reduce((function(e,t){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=(o[0],o[1].price);return function(t){return Object.assign(e,0<t&&t<e.priceMin?{priceMin:t}:{},t>e.priceMax?{priceMax:t}:{})}(v(a))}),function(e){return{priceNow:e,priceMin:e,priceMax:e}}(v(t)))},b=r(2779),E=r.n(b),w=r(6062),A=r.n(w),O=r(4036),j=r.n(O),R=r(6793),x=r.n(R),C=r(7892),L=r.n(C),S=r(1173),k=r.n(S),_=r(2464),G=r.n(_),N=r(1498),P={};P.styleTagTransform=G(),P.setAttributes=L(),P.insert=x().bind(null,"head"),P.domAPI=j(),P.insertStyleElement=k(),A()(N.Z,P);const M=N.Z&&N.Z.locals?N.Z.locals:void 0;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var W=["priceTo"],I=["priceFrom"],T=["_created","_updated"],U=["images","srcSet"];function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(){q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new R(o||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d={};function f(){}function p(){}function h(){}var m={};l(m,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(x([])));v&&v!==t&&r.call(v,a)&&(m=v);var g=h.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function o(n,a,i,c){var l=s(e[n],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==F(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=A(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function A(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,A(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function K(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var $={title:1,brand:1,_price:1,_stars:-1,_created:-1,_updated:-1},z=[0,100,200,500,1e3,1500,2e3,3e3,4e3,5e3,1e4,15e3,2e4,25e3],J=[-100,-50,-30,-20,-10,-5,0,5,10,20,30,50,100],Q=(0,a.k)(function(){var e,t=(e=q().mark((function e(t){var r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/products/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){K(a,n,o,i,c,"next",e)}function c(e){K(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),X=function(e){return"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e)," zł")},ee=function(e,t){return"".concat(new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(100*(e/t-1)),"%")};function te(e){var t=e.item;return n.createElement("div",null,n.createElement("span",null,n.createElement("b",null," cena: ".concat(X(t.priceNow)," "))),t.priceMin<t.priceNow&&n.createElement("span",null," / min: ".concat(X(t.priceMin)," (").concat(ee(t.priceNow,t.priceMin),") ")),t.priceNow<t.priceMax&&n.createElement("span",null," / max: ".concat(X(t.priceMax)," (").concat(ee(t.priceNow,t.priceMax),") ")))}function re(e){var t=e.version,r=void 0===t?"v1":t,o=Q.read(r).results,a=(0,n.useMemo)((function(){return{brand:[""].concat(o.map((function(e){return e.brand})).filter(Boolean).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[o]),l=V((0,n.useState)((function(){return{brand:a.brand[0],category:"",search:"",onlyPromoted:!1,onlyReduced:!1,priceFrom:z[0],priceTo:z[z.length-1],priceChange:0}})),2),u=l[0],f=l[1],p=V((0,d.Z)(u.search),1)[0],h=V((0,n.useState)((function(){return Object.keys($).pop()})),2),m=h[0],b=h[1],E=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceTo,n=H(e,W),o=Number(t.value);return B(B({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[]),w=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceFrom,n=H(e,I),o=Number(t.value);return B(B({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[]),A=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return B(B({},e),{},{priceChange:Number(t.value)})}))}),[]);console.log({filters:u,results:o});var O=(0,n.useMemo)((function(){return o.map((function(e){var t=e._created,r=e._updated,n=void 0===r?t:r,o=H(e,T);return B(B(B({_title:o.title.toLowerCase(),_price:v(o.price),_stars:Number(o.stars.replace(/[^0-9]/g,"")),_created:t,_updated:n,_history:{}},o),g(o)),{},{barcode:y(o.label)})})).filter((function(e){return(e._title.match(p)||p.trim()===String(e.id))&&u.priceFrom<=e.priceNow&&e.priceNow<=u.priceTo&&function(e,t){return 0===t||e.priceNow>0&&(t>0?100*(e.priceNow/e.priceMin-1)>=t:100*(e.priceNow/e.priceMax-1)<=t)}(e,u.priceChange)&&(!u.brand||[e.brand].includes(u.brand))&&(!u.onlyPromoted||e.proms.length>0)&&(!u.onlyReduced||e.price.length>1)}))}),[o,p,u.brand,u.priceFrom,u.priceTo,u.priceChange,u.onlyPromoted,u.onlyReduced]),j=(0,n.useMemo)((function(){return O.sort((function(e,t){return e[m]===t[m]?e._created>t._created?1:-1:$[m]*(e[m]>t[m]?1:-1)}))}),[O,m]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:u.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return B(B({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Brand"),n.createElement("select",{value:u.brand,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return B(B({},e),{},{brand:t.value})}))}),[])},a.brand.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:m,onChange:(0,n.useCallback)((function(e){var t=e.target;return b(t.value)}),[])},Object.entries($).map((function(e){var t=V(e,2),r=t[0];return t[1],n.createElement("option",{key:r,value:r},r)})))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.onlyPromoted,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return B(B({},e),{},{onlyPromoted:t.checked})}))}),[])}),n.createElement("span",null,"Only Promoted")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.onlyReduced,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return B(B({},e),{},{onlyReduced:t.checked})}))}),[])}),n.createElement("span",null,"Only Reduced")),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:z[0],max:z[z.length-1],value:u.priceFrom,onChange:E}),n.createElement("datalist",{id:"price-list"},z.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," zł"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:z[0],max:z[z.length-1],value:u.priceTo,onChange:w}),n.createElement("span",null,"".concat(u.priceFrom,"-").concat(u.priceTo," zł")))," ",n.createElement("label",null,n.createElement("span",null,"Price Change"),n.createElement("input",{type:"range",list:"price-change-list",min:J[0],max:J[J.length-1],value:u.priceChange,onChange:A}),n.createElement("datalist",{id:"price-change-list"},J.map((function(e){return n.createElement("option",{key:e,value:e})}))),n.createElement("span",null,"".concat(u.priceChange,"%"))))),n.createElement("div",null,"Found ".concat(O.length," products out of a total of ").concat(o.length)),n.createElement("ol",null,j.slice(0,100).map((function(e){var t=e.images,r=e.srcSet,o=H(e,U);return n.createElement("li",{key:o.id,className:M.Row},n.createElement(i.r,{className:M.Gallery,images:t,srcSet:r}),o.barcode&&n.createElement(s,{className:M.Barcode,barcode:o.barcode}),n.createElement("h3",null,n.createElement(c.r,{href:o.url},o.title)),n.createElement("h4",null,o.brand),o.label&&n.createElement("div",null,o.label.join(" | ")),n.createElement(te,{item:o}),n.createElement(oe,{item:o}),n.createElement(ne,{history:Object.entries(o._history).reverse(),item:o}),o.reviews&&n.createElement(ae,{reviews:o.reviews}))}))))}function ne(e){var t=e.history,r=e.item,o=V((0,n.useState)((function(){return!(t.length>1)})),2),a=o[0],i=o[1];return n.createElement("div",{className:M.History},(a?t:t.slice(0,1)).map((function(e,t,o){var a=V(e,2),i=a[0],c=a[1];return n.createElement(oe,{key:t,item:c,prev:t>0?o[t-1][1]:r,time:Number(i)})})),!1===a&&n.createElement(c.r,{onClick:function(e){return e.preventDefault(),i(!0)}},"Show more..."))}function oe(e){var t=e.item,r=e.prev,a=e.time,i=void 0===a?t._updated||t._created:a;return n.createElement("div",{className:E()(M.Details,r&&M.separator)},n.createElement("div",{className:M.Sidebar},i&&n.createElement("div",{className:M.Date},(0,o.Z)(i,"yyyy-MM-dd HH:mm")),n.createElement("h5",null,t.price.join(" ")),n.createElement("div",{className:E()(M.Feature,r&&r.stars!==t.stars&&M.changed)},t.stars)),t.proms&&n.createElement("div",{className:E()(M.Feature,r&&r.proms!==t.proms&&M.changed)},t.proms.join(" | ")),n.createElement("ul",{className:E()(M.Feature,r&&r.links.join(":")!==t.links.join(":")&&M.changed)},t.links.map((function(e,t){return n.createElement("li",{key:t},e)}))))}function ae(e){var t=e.reviews,r=V((0,n.useState)(!1),2),o=r[0],a=r[1];return n.createElement("div",null,n.createElement("div",null,n.createElement(c.r,{onClick:function(e){return e.preventDefault(),a((function(e){return!e}))}},o?"Hide reviews":"Show reviews")),o&&n.createElement("ul",null,t.map((function(e,t){var r=e.author,o=e.body,a=e.date,i=e.rating,c=void 0===i?"-":i;return n.createElement("li",{key:t},n.createElement("div",null,n.createElement("b",null,a,", ",r," (",c,")")),n.createElement("div",null,o))}))))}function ie(){return n.createElement("div",{className:M.Section},n.createElement("h2",null,"Products"),n.createElement(re,null))}},9539:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2784);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){var t,r,a=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1],l=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(l.current),l.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(l.current)}}),[e]),[i]}},1498:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([e.id,".KUxoC6psSrrMeYM5oAlM{color:purple}.KUxoC6psSrrMeYM5oAlM h4{margin:.5em 0}.KUxoC6psSrrMeYM5oAlM h5{margin:.25em 0}.mfYsAqyyqNlAHcqIZRYo{clear:both}.IUsVGkhlVQfyeVKDBe0W{float:left;width:200px;height:150px}.bjKwkJ10mgVeKE66YVYI{float:right}.oYFC57M7QUXHd0bHx90u{clear:both}.oYFC57M7QUXHd0bHx90u .d4EGmd7WGzC6jR642U4i{float:right;text-align:right;margin:0 2em}.oYFC57M7QUXHd0bHx90u .hCevawnmB_dy9ljh4Xeg.WHvJJI0E40Qb_2xC6kaz{color:#8a2be2}.oYFC57M7QUXHd0bHx90u.eCohJhUTkuxKnSmXSCp6{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}","",{version:3,sources:["webpack://./src/containers/Products/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,yBACE,aAAA,CAEF,yBACE,cAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,WAAA,CAEF,sBACE,UAAA,CACA,4CACE,WAAA,CACA,gBAAA,CACA,YAAA,CAGA,iEACE,aAAA,CAGJ,2CACE,4BAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  h4 {\n    margin: 0.5em 0;\n  }\n  h5 {\n    margin: 0.25em 0;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Barcode {\n  float: right;\n}\n.Details {\n  clear: both;\n  .Sidebar {\n    float: right;\n    text-align: right;\n    margin: 0 2em;\n  }\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  &.separator {\n    border-top: 1px solid lightgray;\n    margin-top: 0.5em;\n    padding-top: 0.5em;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"KUxoC6psSrrMeYM5oAlM",Row:"mfYsAqyyqNlAHcqIZRYo",Gallery:"IUsVGkhlVQfyeVKDBe0W",Barcode:"bjKwkJ10mgVeKE66YVYI",Details:"oYFC57M7QUXHd0bHx90u",Sidebar:"d4EGmd7WGzC6jR642U4i",Feature:"hCevawnmB_dy9ljh4Xeg",changed:"WHvJJI0E40Qb_2xC6kaz",separator:"eCohJhUTkuxKnSmXSCp6"};const c=i},1837:(e,t,r)=>{var n=r(2784),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,s=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:s,props:a,_owner:c.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},2322:(e,t,r)=>{e.exports=r(1837)},8871:(e,t,r)=>{r.d(t,{b:()=>i});var n=r(997),o=r(1118),a=r(7394);function i(e,t){return void 0===t&&(t=n.z),(0,o.e)((function(r,n){var o=null,i=null,c=null,l=function(){if(o){o.unsubscribe(),o=null;var e=i;i=null,n.next(e)}};function u(){var r=c+e,a=t.now();if(a<r)return o=this.schedule(void 0,r-a),void n.add(o);l()}r.subscribe((0,a.x)(n,(function(r){i=r,c=t.now(),o||(o=t.schedule(u,e),n.add(o))}),(function(){l(),n.complete()}),void 0,(function(){i=o=null})))}))}}}]);
//# sourceMappingURL=342.js.map