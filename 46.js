/*! For license information please see 46.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[46],{9241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z,getMinMaxPrices:()=>R,getPrice:()=>D});var n=r(2784),o=r(5016),a=r(357),i=r(5726),c=r(891),l=r(9539),u=r(2779),s=r.n(u),f=r(6062),p=r.n(f),m=r(4036),d=r.n(m),h=r(6793),v=r.n(h),y=r(7892),g=r.n(y),b=r(1173),E=r.n(b),A=r(2464),w=r.n(A),C=r(1498),x={};x.styleTagTransform=w(),x.setAttributes=g(),x.insert=v().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=E(),p()(C.Z,x);const S=C.Z&&C.Z.locals?C.Z.locals:void 0;function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var j=["priceTo"],k=["priceFrom"],_=["_created","_updated"],M=["images","srcSet"];function N(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(){U=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:A(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function m(){}function d(){}var h={};l(h,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,a)&&(h=y);var g=d.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function o(n,a,i,c){var l=s(e[n],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==O(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function A(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function I(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var H={title:1,brand:1,_price:1,_stars:-1,_created:-1,_updated:-1},Y=[0,100,200,500,1e3,1500,2e3,3e3,4e3,5e3,1e4,15e3,2e4,25e3],B=(0,a.k)(function(){var e,t=(e=U().mark((function e(t){var r;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/products/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){I(a,n,o,i,c,"next",e)}function c(e){I(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),D=function(e){return Number((e.length>0?e:["0"]).reverse()[0].replace(/[^0-9,\.]/g,"").replace(",","."))},R=function(e){var t=e.price,r=e._history,n=void 0===r?{}:r;return Object.entries(T(G({},Date.now(),{price:t}),n)).reduce((function(e,t){var r=P(t,2),n=(r[0],r[1].price);return function(t){return Object.assign(e,0<t&&t<e.priceMin?{priceMin:t}:{},t>e.priceMax?{priceMax:t}:{})}(D(n))}),function(e){return{priceNow:e,priceMin:e,priceMax:e}}(D(t)))},Z=function(e){return"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e)," PLN")},J=function(e,t){return"".concat(new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(100*(e/t-1)),"%")};function Q(e){var t=e.item;return n.createElement("div",null,n.createElement("span",null,n.createElement("b",null," cena: ".concat(Z(t.priceNow)," "))),t.priceMin<t.priceNow&&n.createElement("span",null," / min: ".concat(Z(t.priceMin)," (").concat(J(t.priceNow,t.priceMin),") ")),t.priceNow<t.priceMax&&n.createElement("span",null," / max: ".concat(Z(t.priceMax)," (").concat(J(t.priceNow,t.priceMax),") ")),n.createElement("pre",null,JSON.stringify({priceNow:t.priceNow,priceMin:t.priceMin,priceMax:t.priceMax},null,2)))}function X(e){var t=e.version,r=void 0===t?"v1":t,o=B.read(r).results,a=(0,n.useMemo)((function(){return{brand:[""].concat(o.map((function(e){return e.brand})).filter(Boolean).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[o]),u=P((0,n.useState)((function(){return{brand:a.brand[0],category:"",search:"",onlyPromoted:!1,onlyReduced:!1,priceFrom:Y[0],priceTo:Y[Y.length-1]}})),2),s=u[0],f=u[1],p=P((0,l.Z)(s.search),1)[0],m=P((0,n.useState)((function(){return Object.keys(H).pop()})),2),d=m[0],h=m[1],v=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceTo,n=N(e,j),o=Number(t.value);return T(T({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[]),y=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceFrom,n=N(e,k),o=Number(t.value);return T(T({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[]);console.log({filters:s,results:o});var g=(0,n.useMemo)((function(){return o.map((function(e){var t=e._created,r=e._updated,n=void 0===r?t:r,o=N(e,_);return T(T({_title:o.title.toLowerCase(),_price:D(o.price),_stars:Number(o.stars.replace(/[^0-9]/g,"")),_created:t,_updated:n,_history:{}},o),R(o))})).filter((function(e){return(e._title.match(p)||p.trim()===String(e.id))&&s.priceFrom<=e._price&&e._price<=s.priceTo&&(!s.brand||[e.brand].includes(s.brand))&&(!s.onlyPromoted||e.proms.length>0)&&(!s.onlyReduced||e.price.length>1)}))}),[o,p,s.brand,s.priceFrom,s.priceTo,s.onlyPromoted,s.onlyReduced]),b=(0,n.useMemo)((function(){return g.sort((function(e,t){return e[d]===t[d]?e._created>t._created?1:-1:H[d]*(e[d]>t[d]?1:-1)}))}),[g,d]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:s.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return T(T({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Brand"),n.createElement("select",{value:s.brand,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return T(T({},e),{},{brand:t.value})}))}),[])},a.brand.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:d,onChange:(0,n.useCallback)((function(e){var t=e.target;return h(t.value)}),[])},Object.entries(H).map((function(e){var t=P(e,2),r=t[0];return t[1],n.createElement("option",{key:r,value:r},r)})))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:Y[0],max:Y[Y.length-1],value:s.priceFrom,onChange:v}),n.createElement("datalist",{id:"price-list"},Y.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:Y[0],max:Y[Y.length-1],value:s.priceTo,onChange:y}),n.createElement("span",null,"".concat(s.priceFrom,"-").concat(s.priceTo," zł"))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:s.onlyPromoted,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return T(T({},e),{},{onlyPromoted:t.checked})}))}),[])}),n.createElement("span",null,"Only Promoted")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:s.onlyReduced,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return T(T({},e),{},{onlyReduced:t.checked})}))}),[])}),n.createElement("span",null,"Only Reduced")))),n.createElement("div",null,"Found ".concat(g.length," products out of a total of ").concat(o.length)),n.createElement("ol",null,b.slice(0,100).map((function(e){var t=e.images,r=e.srcSet,o=N(e,M);return n.createElement("li",{key:o.id,className:S.Row},n.createElement(i.r,{className:S.Gallery,images:t,srcSet:r}),n.createElement("h3",null,n.createElement(c.r,{href:o.url},o.title)),n.createElement("h4",null,o.brand),o.label&&n.createElement("div",null,o.label.join(" | ")),n.createElement(Q,{item:o}),n.createElement(W,{item:o}),n.createElement(K,{history:Object.entries(o._history).reverse(),item:o}),o.reviews&&n.createElement(q,{reviews:o.reviews}))}))))}function K(e){var t=e.history,r=e.item,o=P((0,n.useState)((function(){return!(t.length>1)})),2),a=o[0],i=o[1];return n.createElement("div",{className:S.History},(a?t:t.slice(0,1)).map((function(e,t,o){var a=P(e,2),i=a[0],c=a[1];return n.createElement(W,{key:t,item:c,prev:t>0?o[t-1][1]:r,time:Number(i)})})),!1===a&&n.createElement(c.r,{onClick:function(e){return e.preventDefault(),i(!0)}},"Show more..."))}function W(e){var t=e.item,r=e.prev,a=e.time,i=void 0===a?t._updated||t._created:a;return n.createElement("div",{className:s()(S.Details,r&&S.separator)},n.createElement("div",{className:S.Sidebar},i&&n.createElement("div",{className:S.Date},(0,o.Z)(i,"yyyy-MM-dd HH:mm")),n.createElement("h5",null,t.price.join(" ")),n.createElement("div",{className:s()(S.Feature,r&&r.stars!==t.stars&&S.changed)},t.stars)),t.proms&&n.createElement("div",{className:s()(S.Feature,r&&r.proms!==t.proms&&S.changed)},t.proms.join(" | ")),n.createElement("ul",{className:s()(S.Feature,r&&r.links.join(":")!==t.links.join(":")&&S.changed)},t.links.map((function(e,t){return n.createElement("li",{key:t},e)}))))}function q(e){var t=e.reviews,r=P((0,n.useState)(!1),2),o=r[0],a=r[1];return n.createElement("div",null,n.createElement("div",null,n.createElement(c.r,{onClick:function(e){return e.preventDefault(),a((function(e){return!e}))}},o?"Hide reviews":"Show reviews")),o&&n.createElement("ul",null,t.map((function(e,t){var r=e.author,o=e.body,a=e.date,i=e.rating,c=void 0===i?"-":i;return n.createElement("li",{key:t},n.createElement("div",null,n.createElement("b",null,a,", ",r," (",c,")")),n.createElement("div",null,o))}))))}function z(){return n.createElement("div",{className:S.Section},n.createElement("h2",null,"Products"),n.createElement(X,null))}},9539:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2784);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){var t,r,a=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1],l=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(l.current),l.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(l.current)}}),[e]),[i]}},1498:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([e.id,".KUxoC6psSrrMeYM5oAlM{color:purple}.KUxoC6psSrrMeYM5oAlM h4{margin:.5em 0}.KUxoC6psSrrMeYM5oAlM h5{margin:.25em 0}.mfYsAqyyqNlAHcqIZRYo{clear:both}.IUsVGkhlVQfyeVKDBe0W{float:left;width:200px;height:150px}.oYFC57M7QUXHd0bHx90u{clear:both}.oYFC57M7QUXHd0bHx90u .d4EGmd7WGzC6jR642U4i{float:right;text-align:right;margin:0 2em}.oYFC57M7QUXHd0bHx90u .hCevawnmB_dy9ljh4Xeg.WHvJJI0E40Qb_2xC6kaz{color:#8a2be2}.oYFC57M7QUXHd0bHx90u.eCohJhUTkuxKnSmXSCp6{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}","",{version:3,sources:["webpack://./src/containers/Products/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,yBACE,aAAA,CAEF,yBACE,cAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,UAAA,CACA,4CACE,WAAA,CACA,gBAAA,CACA,YAAA,CAGA,iEACE,aAAA,CAGJ,2CACE,4BAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  h4 {\n    margin: 0.5em 0;\n  }\n  h5 {\n    margin: 0.25em 0;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Details {\n  clear: both;\n  .Sidebar {\n    float: right;\n    text-align: right;\n    margin: 0 2em;\n  }\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  &.separator {\n    border-top: 1px solid lightgray;\n    margin-top: 0.5em;\n    padding-top: 0.5em;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"KUxoC6psSrrMeYM5oAlM",Row:"mfYsAqyyqNlAHcqIZRYo",Gallery:"IUsVGkhlVQfyeVKDBe0W",Details:"oYFC57M7QUXHd0bHx90u",Sidebar:"d4EGmd7WGzC6jR642U4i",Feature:"hCevawnmB_dy9ljh4Xeg",changed:"WHvJJI0E40Qb_2xC6kaz",separator:"eCohJhUTkuxKnSmXSCp6"};const c=i},8871:(e,t,r)=>{r.d(t,{b:()=>i});var n=r(997),o=r(1118),a=r(7394);function i(e,t){return void 0===t&&(t=n.z),(0,o.e)((function(r,n){var o=null,i=null,c=null,l=function(){if(o){o.unsubscribe(),o=null;var e=i;i=null,n.next(e)}};function u(){var r=c+e,a=t.now();if(a<r)return o=this.schedule(void 0,r-a),void n.add(o);l()}r.subscribe((0,a.x)(n,(function(r){i=r,c=t.now(),o||(o=t.schedule(u,e),n.add(o))}),(function(){l(),n.complete()}),void 0,(function(){i=o=null})))}))}}}]);
//# sourceMappingURL=46.js.map