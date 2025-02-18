/*! For license information please see 150.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[150],{3150:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ye});var n=r(4041),o=r(6004),a=r(5519),i=r(5833),l=r(6333),c=r(8576),u=r(3046),s=r(4453),f=r(9475),h=r(1336),d=r(4084),p=r(2591),m=r.n(p),y=r(1740),v=r.n(y),g=r(8128),b=r.n(g),_=r(855),E=r.n(_),w=r(3051),S=r.n(w),O=r(3656),A=r.n(O),C=r(5175),j=r.n(C),P={};P.styleTagTransform=A(),P.setAttributes=E(),P.insert=b().bind(null,"head"),P.domAPI=v(),P.insertStyleElement=S(),m()(j(),P);const L=j()&&j().locals?j().locals:void 0;function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function M(){M=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),l=new x(n||[]);return o(i,"_invoke",{value:C(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",d="suspendedYield",p="executing",m="completed",y={};function v(){}function g(){}function b(){}var _={};u(_,i,(function(){return this}));var E=Object.getPrototypeOf,w=E&&E(E(D([])));w&&w!==r&&n.call(w,i)&&(_=w);var S=b.prototype=v.prototype=Object.create(_);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function r(o,a,i,l){var c=f(e[o],e,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==k(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function C(t,r,n){var o=h;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=j(l,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?m:d,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(k(t)+" is not iterable")}return g.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},O(A.prototype),u(A.prototype,l,(function(){return this})),t.AsyncIterator=A,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new A(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(S),u(S,c,"Generator"),u(S,i,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=D,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function F(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return(t=function(e){var t=function(e){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==k(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=function(e){return new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e)},B=function(e){var t=e.Hotel_OfferUrlWithOfferCode,r=e.Merlin_Id,n=e.Query_AdditionalFiltersQueryString,o=e.Query_AdultsChildenQueryString;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({hotelSlug:t.match(/\/([^\/]+)\?/)[1],offercode:r,airports:n.From,Dates:[n.DateOfDeparture,n.DateOfReturn].join(":")},o)},G=(0,l.$)(function(){var e,t=(e=M().mark((function e(t){var r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({params:t}),e.next=3,fetch("api/holidays/offers/data.json?".concat(new URLSearchParams(t)));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){F(a,n,o,i,l,"next",e)}function l(e){F(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),Q=function(){return n.createElement("span",null,"Loading...")};function I(e){var t=e.item,r=(e.version,x((0,n.useState)([]),2)),o=r[0],a=r[1],i=G.read(B(t)),l=i.HotelOffers,c=i.OffersToLoad,u=i.IsThereMoreOffers,s=i.PageSize;console.log({HotelOffers:l,OffersToLoad:c,IsThereMoreOffers:u,PageSize:s});var f=(0,n.useMemo)((function(){return l}),[l]);return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"PRZELOT"),n.createElement("th",null,"TERMINY"),n.createElement("th",null,"POBYT"),n.createElement("th",null,"POKOJE"),n.createElement("th",null,"WYŻYWIENIE"),n.createElement("th",null,"CENA")),f.map((function(e,t){return[n.createElement("tr",{key:t},n.createElement("td",null,n.createElement("a",{href:"#",onClick:(0,n.useCallback)((function(e){return e.preventDefault(),a((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))}),[])},e.FlightFrom," / ",e.ParsedDepartureTime," ➞"," ",e.ReturnFlightTo," / ",e.ParsedReturnArrivalTime)),n.createElement("td",null,e.ParsedTripDateWithDays),n.createElement("td",null,e.Duration),n.createElement("td",null,e.DescriptionOfRoom),n.createElement("td",null,e.BoardStandardDesc),n.createElement("td",{align:"right"},n.createElement(d.N,{href:"".concat(e.HotelUrl).concat(e.Id).concat(e.FilterData)},H(e.AdultPriceInt))))].concat(o.includes(t)?[n.createElement("tr",{key:"".concat(t,"-details")},n.createElement("td",null),n.createElement("td",{colSpan:5},n.createElement("pre",null,JSON.stringify(e,null,2))))]:[])}))))}function R(e){var t=e.item,r=x((0,n.useState)(!1),2),o=r[0],a=r[1];return n.createElement("div",{className:L.Offers},n.createElement(d.N,{onClick:function(e){return e.preventDefault(),a((function(e){return!e}))}},o?"Hide offers":"Show offers"),o&&n.createElement(n.Suspense,{fallback:n.createElement(Q,null)},n.createElement(I,{item:t})))}var U=r(5044),Y=r.n(U),K={};K.styleTagTransform=A(),K.setAttributes=E(),K.insert=b().bind(null,"head"),K.domAPI=v(),K.insertStyleElement=S(),m()(Y(),K);const z=Y()&&Y().locals?Y().locals:void 0;function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}var J=["priceTo"],W=["priceFrom"],Z=["item"];function $(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function q(){q=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),l=new k(n||[]);return o(i,"_invoke",{value:C(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",d="suspendedYield",p="executing",m="completed",y={};function v(){}function g(){}function b(){}var _={};u(_,i,(function(){return this}));var E=Object.getPrototypeOf,w=E&&E(E(x([])));w&&w!==r&&n.call(w,i)&&(_=w);var S=b.prototype=v.prototype=Object.create(_);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function r(o,a,i,l){var c=f(e[o],e,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==V(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function C(t,r,n){var o=h;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=j(l,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?m:d,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function x(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(V(t)+" is not iterable")}return g.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},O(A.prototype),u(A.prototype,l,(function(){return this})),t.AsyncIterator=A,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new A(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(S),u(S,c,"Generator"),u(S,i,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return(t=function(e){var t=function(e){if("object"!=V(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==V(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||oe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||oe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){if(e){if("string"==typeof e)return ae(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ae(e,t):void 0}}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ie(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}var le={"":"",Hotel_Standard_Stars_Css:"Hotel_Standard_Stars_Css",Hotel_Location_Name:"Hotel_Location_Name",Hotel_Name:"Hotel_Name",Merlin_ParsedStartDate:"Merlin_ParsedStartDate",Merlin_Duration:"Merlin_Duration"},ce={Merlin_FullPriceParsed:1,Merlin_AdultPrice:1,Hotel_AverageRating:-1,Merlin_Duration:1,_created:-1,_updated:-1,_removed:-1},ue=[0,1e4,15e3,2e4,25e3,3e4,1e5],se=(0,l.$)(function(){var e,t=(e=q().mark((function e(t){var r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/holidays/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json().then((function(e){return c.z.object({Query_AdultsChildenQueryString:c.z.string().transform((function(e){return ne(new URLSearchParams(e).entries()).reduce((function(e,t){var r=re(t,2),n=r[0],o=r[1];return Object.assign(e,te({},n,o))}),{})})),Query_AdditionalFiltersQueryString:c.z.string().transform((function(e){return ne(new URLSearchParams(e).entries()).reduce((function(e,t){var r=re(t,2),n=r[0],o=r[1];return Object.assign(e,te({},n,o))}),{})}))}).passthrough().transform((function(e){return ee({Children:e.Query_AdultsChildenQueryString.Children},e)})).array().parseAsync(e)})).then((function(e){return{data:e,options:e.reduce((function(e,t){return["Hotel_Standard_Stars_Css","Hotel_Location_Name","Merlin_Duration","Merlin_ParsedStartFullDate","Merlin_BoardStandardDesc","Children"].reduce((function(e,r){return ee(ee({},e),{},te({},r,Object.assign({},e[r],te({},t[r],t[r]))))}),e)}),{})}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){ie(a,n,o,i,l,"next",e)}function l(e){ie(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function fe(e){var t=e.coordinates,r=t.latitude,o=t.longitude,a="//www.google.pl/maps?t=k&q=loc:".concat(r,"+").concat(o,"&hl=pl");return n.createElement(d.N,{href:a,rel:"",target:"map",style:{margin:"0 .25em"}},n.createElement(s.g,{icon:f.Pcr}))}var he=function(e){return e.options,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({search:"",groupBy:Object.keys(le)[0],sortBy:Object.keys(ce)[0],priceFrom:ue[0],priceTo:ue[ue.length-1],Children:"",Hotel_Location_Name:"",Hotel_Standard_Stars_Css:["four-stars","five-stars","four-stars stars-plus"],Merlin_Duration:[7],Merlin_BoardStandardDesc:"",Merlin_ParsedStartFullDate:""},e)}};function de(e){var t=e.version,r=void 0===t?"v1":t,l=se.read(r),c=l.data,u=l.options;console.log({options:u});var s=re((0,n.useState)(he({options:u})),2),f=s[0],d=s[1],p=(0,n.useMemo)((function(){return c.filter((function(e){return f.priceFrom<=e.Merlin_FullPriceParsed&&e.Merlin_FullPriceParsed<=f.priceTo&&["",e.Children].includes(f.Children)&&(0==f.Hotel_Standard_Stars_Css.length||f.Hotel_Standard_Stars_Css.includes(e.Hotel_Standard_Stars_Css))&&(0==f.Merlin_Duration.length||f.Merlin_Duration.includes(e.Merlin_Duration))&&["",e.Hotel_Location_Name].includes(f.Hotel_Location_Name)&&["",e.Merlin_BoardStandardDesc].includes(f.Merlin_BoardStandardDesc)&&["",e.Merlin_ParsedStartFullDate].includes(f.Merlin_ParsedStartFullDate)&&e.Hotel_Name.toLowerCase().match(f.search.toLowerCase())}))}),[c,f]);console.log(p);var m=(0,n.useMemo)((function(){return new o.B}),[]);(0,n.useEffect)((function(){var e=m.pipe((0,a.F)(),(0,i.B)(400)).subscribe((function(e){return console.log(e)}));return function(){return e.unsubscribe()}}),[m]),(0,n.useEffect)((function(){m.next(f)}),[f]);var y=(0,n.useMemo)((function(){return p.sort((function(e,t){return ce[f.sortBy]*(e[f.sortBy]===t[f.sortBy]?0:(e[f.sortBy]||0)>(t[f.sortBy]||0)?1:-1)}))}),[p,f.sortBy]),v=(0,n.useMemo)((function(){return y.slice(0,100).reduce((function(e,t){return r=t[f.groupBy]||"",Object.assign(e,te({},r,(e[r]||[]).concat(t)));var r}),{})}),[y,f.groupBy]);return console.log({grouped:v}),n.createElement("div",null,n.createElement(pe,{filters:f,setFilters:d,options:u}),n.createElement("div",null,"Found ".concat(p.length," holidays out of a total of ").concat(c.length)," "),Object.entries(v).map((function(e){var t=re(e,2),r=t[0],o=t[1];return n.createElement("section",{key:r},r&&n.createElement("h3",null,r),n.createElement("ol",null,o.map((function(e){return n.createElement("li",{key:e.id,className:z.Row},n.createElement(h.Z,{className:z.Gallery,images:[e.Hotel_ListingImageUrl]}),n.createElement(me,{className:z.Details,item:e}))}))))})))}function pe(e){var t=e.filters,r=e.setFilters,o=e.options,a=(0,n.useCallback)((function(e){var t=e.target;return r((function(e){var r=e.priceTo,n=$(e,J),o=Number(t.value);return ee(ee({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[]),i=(0,n.useCallback)((function(e){var t=e.target;return r((function(e){var r=e.priceFrom,n=$(e,W),o=Number(t.value);return ee(ee({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[]);return n.createElement("fieldset",{className:z.Filters},n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:t.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:t.sortBy,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{sortBy:t.value})}))}),[])},Object.entries(ce).map((function(e){var t=re(e,1)[0];return n.createElement("option",{key:t,value:t},t)})))),n.createElement("label",null,n.createElement("span",null,"GroupBy"),n.createElement("select",{value:t.groupBy,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{groupBy:t.value})}))}),[])},Object.entries(le).map((function(e){var t=re(e,2),r=t[0],o=t[1];return n.createElement("option",{key:r,value:r},o)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:ue[0],max:ue[ue.length-1],value:t.priceFrom,onChange:a}),n.createElement("datalist",{id:"price-list"},ue.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e4,2e4,3e4,4e4,5e4].includes(e)?H(e):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:ue[0],max:ue[ue.length-1],value:t.priceTo,onChange:i}),n.createElement("span",null,"".concat(H(t.priceFrom)," - ").concat(H(t.priceTo))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Children"),n.createElement("select",{value:t.Children,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{Children:t.value})}))}),[])},[""].concat(Object.values(o.Children)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Hotel_Location_Name"),n.createElement("select",{value:t.Hotel_Location_Name,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{Hotel_Location_Name:t.value})}))}),[])},[""].concat(Object.values(o.Hotel_Location_Name)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))),n.createElement("div",null,n.createElement("span",null,"Hotel_Standard_Stars_Css"),Object.values(o.Hotel_Standard_Stars_Css).map((function(e){return n.createElement("label",{key:e},n.createElement("input",{type:"checkbox",checked:t.Hotel_Standard_Stars_Css.includes(e),onChange:(0,n.useCallback)((function(t){var n=t.target;return r((function(t){return ee(ee({},t),{},{Hotel_Standard_Stars_Css:n.checked?t.Hotel_Standard_Stars_Css.concat(e):t.Hotel_Standard_Stars_Css.filter((function(t){return t!==e}))})}))}),[])}),n.createElement("span",null,e))}))),n.createElement("div",null,n.createElement("span",null,"Merlin_Duration"),Object.values(o.Merlin_Duration).map((function(e){return n.createElement("label",{key:e},n.createElement("input",{type:"checkbox",checked:t.Merlin_Duration.includes(e),onChange:(0,n.useCallback)((function(t){var n=t.target;return r((function(t){return ee(ee({},t),{},{Merlin_Duration:n.checked?t.Merlin_Duration.concat(e):t.Merlin_Duration.filter((function(t){return t!==e}))})}))}),[])}),n.createElement("span",null,e))}))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Merlin_BoardStandardDesc"),n.createElement("select",{value:t.Merlin_BoardStandardDesc,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{Merlin_BoardStandardDesc:t.value})}))}),[])},[""].concat(Object.values(o.Merlin_BoardStandardDesc)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Merlin_ParsedStartFullDate"),n.createElement("select",{value:t.Merlin_ParsedStartFullDate,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return ee(ee({},e),{},{Merlin_ParsedStartFullDate:t.value})}))}),[])},[""].concat(Object.values(o.Merlin_ParsedStartFullDate)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))))}function me(e){var t,r,o,a=e.item,i=$(e,Z),l=re((0,n.useState)((function(){return{json:!1}})),2),c=l[0],s=l[1];return n.createElement("div",i,n.createElement(d.N,{href:"".concat(a.Hotel_OfferUrlWithOfferCode).concat(a.Merlin_Id)},"".concat(a.Hotel_Name," (").concat(a.Hotel_Location_Name,") / ").concat(a.Hotel_TextCategory," / ").concat(a.Merlin_FlightFrom,", ").concat(a.Merlin_ParsedStartFullDate,", ").concat(a.Merlin_ParsedDepartureTime)),n.createElement(fe,{coordinates:{latitude:a.Hotel_GPS_Latitude,longitude:a.Hotel_GPS_Longitude}}),n.createElement("ul",null,n.createElement("li",null,"Hotel_Type_Name: ",a.Hotel_Type_Name," (",a.Merlin_BoardStandardDesc,")"),n.createElement("li",null,"Hotel_Standard_Stars_Css: ",a.Hotel_Standard_Stars_Css," (",a.Hotel_LocalStandard,": ",a.Hotel_Local_Standard_Stars_Css,")"),n.createElement("li",null,"Merlin_FlightFrom: ",a.Merlin_FlightFrom,","," ",a.Merlin_ParsedStartFullDate,", ",a.Merlin_ParsedDepartureTime," (",a.Merlin_Duration," dni)"),(r=(t=a.Query_AdultsChildenQueryString).Adults,o=t.Children,n.createElement("li",null,"Adults: ",r,", Children: ",o)),n.createElement("li",null,"Merlin_FullPriceParsed: ",H(a.Merlin_FullPriceParsed)," (",H(a.Merlin_AdultPrice),")",a.Merlin_OfferTypeSitecore&&n.createElement("span",null,a.Merlin_OfferTypeSitecore.Name," (",a.Merlin_OfferTypeSitecore.ShortName,")")),n.createElement("li",null,"_created: ",(0,u.GP)(a._created,"yyyy-MM-dd HH:mm"),a._updated&&n.createElement("span",null,"_updated: ",(0,u.GP)(a._updated,"yyyy-MM-dd HH:mm")))),n.createElement(R,{item:a}),n.createElement(d.N,{onClick:function(e){return e.preventDefault(),s((function(e){return ee(ee({},e),{},{json:!e.json})}))}},c.json?"Hide json":"Show json"),c.json&&n.createElement("pre",null,JSON.stringify(a,null,2)))}function ye(){return n.createElement("div",{className:z.Section},n.createElement("h2",null,"Holidays"),n.createElement(de,null))}},5044:(e,t,r)=>{var n=r(2001),o=r(935)(n);o.push([e.id,".U1uuAPy3Fw36L4smQs6z{color:purple}.U1uuAPy3Fw36L4smQs6z section{clear:both}.vp3t0CERafyRQsHYj_4j{clear:both}.PfY0KX8CDswij0oy11Fd{float:left;width:200px;height:150px}.Ig_Tfc2KZChGO0NviEFG pre{clear:both}","",{version:3,sources:["webpack://./src/containers/Holidays/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,8BACE,UAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAGA,0BACE,UAAA",sourcesContent:[".Section {\n  color: purple;\n  section {\n    clear: both;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Details {\n  pre {\n    clear: both;\n  }\n}\n"],sourceRoot:""}]),o.locals={Section:"U1uuAPy3Fw36L4smQs6z",Row:"vp3t0CERafyRQsHYj_4j",Gallery:"PfY0KX8CDswij0oy11Fd",Details:"Ig_Tfc2KZChGO0NviEFG"},e.exports=o},5175:(e,t,r)=>{var n=r(2001),o=r(935)(n);o.push([e.id,".huTvQmyOvVuCBvlkQKfB{clear:both}.huTvQmyOvVuCBvlkQKfB table{border-collapse:collapse}.huTvQmyOvVuCBvlkQKfB table tr:hover{background-color:#e0e0e0}.huTvQmyOvVuCBvlkQKfB tr:nth-child(even){background-color:#f7f7f7}.huTvQmyOvVuCBvlkQKfB th,.huTvQmyOvVuCBvlkQKfB td{padding:.25em}","",{version:3,sources:["webpack://./src/containers/Holidays/Offers.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CACA,4BACE,wBAAA,CAEE,qCACE,wBAAA,CAKJ,yCACE,wBAAA,CAGJ,kDAEE,aAAA",sourcesContent:[".Offers {\n  clear: both;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n"],sourceRoot:""}]),o.locals={Offers:"huTvQmyOvVuCBvlkQKfB"},e.exports=o},5519:(e,t,r)=>{"use strict";r.d(t,{F:()=>i});var n=r(4254),o=r(2185),a=r(869);function i(e,t){return void 0===t&&(t=n.D),e=null!=e?e:l,(0,o.N)((function(r,n){var o,i=!0;r.subscribe((0,a._)(n,(function(r){var a=t(r);!i&&e(o,a)||(i=!1,o=a,n.next(r))})))}))}function l(e,t){return e===t}},5833:(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var n=r(4353),o=r(2185),a=r(869);function i(e,t){return void 0===t&&(t=n.E),(0,o.N)((function(r,n){var o=null,i=null,l=null,c=function(){if(o){o.unsubscribe(),o=null;var e=i;i=null,n.next(e)}};function u(){var r=l+e,a=t.now();if(a<r)return o=this.schedule(void 0,r-a),void n.add(o);c()}r.subscribe((0,a._)(n,(function(r){i=r,l=t.now(),o||(o=t.schedule(u,e),n.add(o))}),(function(){c(),n.complete()}),void 0,(function(){i=o=null})))}))}}}]);
//# sourceMappingURL=150.js.map