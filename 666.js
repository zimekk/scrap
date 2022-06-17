/*! For license information please see 666.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[666],{8666:(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});var n=r(2784),o=r(1148),a=r(9369),i=r(8871),l=r(357),c=r(195),u=r(539),s=r(9530),f=r(5096),h=r(6280),d=r(891),p=r(6062),m=r.n(p),y=r(4036),v=r.n(y),g=r(6793),b=r.n(g),E=r(7892),_=r.n(E),w=r(1173),S=r.n(w),O=r(2464),A=r.n(O),C=r(1758),j={};j.styleTagTransform=A(),j.setAttributes=_(),j.insert=b().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=S(),m()(C.Z,j);const P=C.Z&&C.Z.locals?C.Z.locals:void 0;function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(){F=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function h(){}function d(){}var p={};l(p,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==t&&r.call(y,o)&&(p=y);var v=d.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==L(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=d,l(v,"constructor",d),l(d,"constructor",h),h.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),l(v,i,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function D(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=function(e){return new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e)},H=(0,l.k)(function(){var e,t=(e=F().mark((function e(t){var r;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({params:t}),e.next=3,fetch("api/holidays/offers/data.json?".concat(new URLSearchParams(t)));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){D(a,n,o,i,l,"next",e)}function l(e){D(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),N=function(){return n.createElement("span",null,"Loading...")};function G(e){var t,r,o,a,i,l=e.item,c=(e.version,x((0,n.useState)([]),2)),u=c[0],s=c[1],f=H.read((r=(t=l).Hotel_OfferUrlWithOfferCode,o=t.Merlin_Id,a=t.Query_AdditionalFiltersQueryString,i=t.Query_AdultsChildenQueryString,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({hotelSlug:r.match(/\/([^\/]+)\?/)[1],offercode:o,airports:a.From,Dates:[a.DateOfDeparture,a.DateOfReturn].join(":")},i))),h=f.HotelOffers,p=f.OffersToLoad,m=f.IsThereMoreOffers,y=f.PageSize;console.log({HotelOffers:h,OffersToLoad:p,IsThereMoreOffers:m,PageSize:y});var v=(0,n.useMemo)((function(){return h}),[h]);return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"PRZELOT"),n.createElement("th",null,"TERMINY"),n.createElement("th",null,"POBYT"),n.createElement("th",null,"POKOJE"),n.createElement("th",null,"WYŻYWIENIE"),n.createElement("th",null,"CENA")),v.map((function(e,t){return[n.createElement("tr",{key:t},n.createElement("td",null,n.createElement("a",{href:"#",onClick:(0,n.useCallback)((function(e){return e.preventDefault(),s((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))}),[])},e.FlightFrom," / ",e.ParsedDepartureTime," ➞"," ",e.ReturnFlightTo," / ",e.ParsedReturnArrivalTime)),n.createElement("td",null,e.ParsedTripDateWithDays),n.createElement("td",null,e.Duration),n.createElement("td",null,e.DescriptionOfRoom),n.createElement("td",null,e.BoardStandardDesc),n.createElement("td",{align:"right"},n.createElement(d.r,{href:"".concat(e.HotelUrl).concat(e.Id).concat(e.FilterData)},B(e.AdultPriceInt))))].concat(u.includes(t)?[n.createElement("tr",{key:"".concat(t,"-details")},n.createElement("td",null),n.createElement("td",{colSpan:5},n.createElement("pre",null,JSON.stringify(e,null,2))))]:[])}))))}function Q(e){var t=e.item,r=x((0,n.useState)(!1),2),o=r[0],a=r[1];return n.createElement("div",{className:P.Offers},n.createElement(d.r,{onClick:function(e){return e.preventDefault(),a((function(e){return!e}))}},o?"Hide offers":"Show offers"),o&&n.createElement(n.Suspense,{fallback:n.createElement(N,null)},n.createElement(G,{item:t})))}var I=r(4913),R={};R.styleTagTransform=A(),R.setAttributes=_(),R.insert=b().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=S(),m()(I.Z,R);const U=I.Z&&I.Z.locals?I.Z.locals:void 0;function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Y=["priceTo"],K=["priceFrom"],z=["item"];function V(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function J(){J=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function h(){}function d(){}var p={};l(p,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==t&&r.call(y,o)&&(p=y);var v=d.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==Z(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=d,l(v,"constructor",d),l(d,"constructor",h),h.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),l(v,i,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||te(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){if(e){if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?re(e,t):void 0}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ne(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}var oe={"":"",Hotel_Standard_Stars_Css:"Hotel_Standard_Stars_Css",Hotel_Location_Name:"Hotel_Location_Name",Hotel_Name:"Hotel_Name",Merlin_ParsedStartDate:"Merlin_ParsedStartDate",Merlin_Duration:"Merlin_Duration"},ae={Merlin_FullPriceParsed:1,Merlin_AdultPrice:1,Hotel_AverageRating:-1,Merlin_Duration:1,_created:-1,_updated:-1,_removed:-1},ie=[0,1e4,15e3,2e4,25e3,3e4,1e5],le=(0,l.k)(function(){var e,t=(e=J().mark((function e(t){var r;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/holidays/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json().then((function(e){return c.z.object({Query_AdultsChildenQueryString:c.z.string().transform((function(e){return ee(new URLSearchParams(e).entries()).reduce((function(e,t){var r=$(t,2),n=r[0],o=r[1];return Object.assign(e,X({},n,o))}),{})})),Query_AdditionalFiltersQueryString:c.z.string().transform((function(e){return ee(new URLSearchParams(e).entries()).reduce((function(e,t){var r=$(t,2),n=r[0],o=r[1];return Object.assign(e,X({},n,o))}),{})}))}).passthrough().transform((function(e){return q({Children:e.Query_AdultsChildenQueryString.Children},e)})).array().parseAsync(e)})).then((function(e){return{data:e,options:e.reduce((function(e,t){return["Hotel_Standard_Stars_Css","Hotel_Location_Name","Merlin_ParsedStartFullDate","Merlin_BoardStandardDesc","Children"].reduce((function(e,r){return q(q({},e),{},X({},r,Object.assign({},e[r],X({},t[r],t[r]))))}),e)}),{})}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){ne(a,n,o,i,l,"next",e)}function l(e){ne(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function ce(e){var t=e.coordinates,r=t.latitude,o=t.longitude,a="//www.google.pl/maps?t=k&q=loc:".concat(r,"+").concat(o,"&hl=pl");return n.createElement(d.r,{href:a,rel:"",target:"map",style:{margin:"0 .25em"}},n.createElement(s.G,{icon:f.FGq}))}function ue(e){var t=e.version,r=void 0===t?"v1":t,l=le.read(r),c=l.data,u=l.options;console.log({options:u});var s=$((0,n.useState)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({search:"",groupBy:Object.keys(oe)[0],sortBy:Object.keys(ae)[0],priceFrom:ie[0],priceTo:ie[ie.length-1],Children:"",Hotel_Standard_Stars_Css:"",Merlin_BoardStandardDesc:"",Merlin_ParsedStartFullDate:""},e)})),2),f=s[0],d=s[1],p=(0,n.useMemo)((function(){return c.filter((function(e){return f.priceFrom<=e.Merlin_FullPriceParsed&&e.Merlin_FullPriceParsed<=f.priceTo&&["",e.Children].includes(f.Children)&&["",e.Hotel_Standard_Stars_Css].includes(f.Hotel_Standard_Stars_Css)&&["",e.Merlin_BoardStandardDesc].includes(f.Merlin_BoardStandardDesc)&&["",e.Merlin_ParsedStartFullDate].includes(f.Merlin_ParsedStartFullDate)&&e.Hotel_Name.toLowerCase().match(f.search)}))}),[c,f]);console.log(p);var m=(0,n.useMemo)((function(){return new o.x}),[]);(0,n.useEffect)((function(){var e=m.pipe((0,a.x)(),(0,i.b)(400)).subscribe((function(e){return console.log(e)}));return function(){return e.unsubscribe()}}),[m]),(0,n.useEffect)((function(){m.next(f)}),[f]);var y=(0,n.useMemo)((function(){return p.sort((function(e,t){return ae[f.sortBy]*(e[f.sortBy]===t[f.sortBy]?0:(e[f.sortBy]||0)>(t[f.sortBy]||0)?1:-1)}))}),[p,f.sortBy]),v=(0,n.useMemo)((function(){return y.reduce((function(e,t){return r=t[f.groupBy]||"",Object.assign(e,X({},r,(e[r]||[]).concat(t)));var r}),{})}),[y,f.groupBy]);return console.log({grouped:v}),n.createElement("div",null,n.createElement(se,{filters:f,setFilters:d,options:u}),n.createElement("div",null,"Found ".concat(p.length," holidays out of a total of ").concat(c.length)," "),Object.entries(v).map((function(e){var t=$(e,2),r=t[0],o=t[1];return n.createElement("section",{key:r},r&&n.createElement("h3",null,r),n.createElement("ol",null,o.map((function(e){return n.createElement("li",{key:e.id,className:U.Row},n.createElement(h.r,{className:U.Gallery,images:[e.Hotel_ListingImageUrl]}),n.createElement(fe,{className:U.Details,item:e}))}))))})))}function se(e){var t=e.filters,r=e.setFilters,o=e.options,a=(0,n.useCallback)((function(e){var t=e.target;return r((function(e){var r=e.priceTo,n=V(e,Y),o=Number(t.value);return q(q({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[]),i=(0,n.useCallback)((function(e){var t=e.target;return r((function(e){var r=e.priceFrom,n=V(e,K),o=Number(t.value);return q(q({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[]);return n.createElement("fieldset",{className:U.Filters},n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:t.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:t.sortBy,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{sortBy:t.value})}))}),[])},Object.entries(ae).map((function(e){var t=$(e,1)[0];return n.createElement("option",{key:t,value:t},t)})))),n.createElement("label",null,n.createElement("span",null,"GroupBy"),n.createElement("select",{value:t.groupBy,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{groupBy:t.value})}))}),[])},Object.entries(oe).map((function(e){var t=$(e,2),r=t[0],o=t[1];return n.createElement("option",{key:r,value:r},o)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:ie[0],max:ie[ie.length-1],value:t.priceFrom,onChange:a}),n.createElement("datalist",{id:"price-list"},ie.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e4,2e4,3e4,4e4,5e4].includes(e)?B(e):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:ie[0],max:ie[ie.length-1],value:t.priceTo,onChange:i}),n.createElement("span",null,"".concat(B(t.priceFrom)," - ").concat(B(t.priceTo))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Children"),n.createElement("select",{value:t.Children,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{Children:t.value})}))}),[])},[""].concat(Object.values(o.Children)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Hotel_Standard_Stars_Css"),n.createElement("select",{value:t.Hotel_Standard_Stars_Css,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{Hotel_Standard_Stars_Css:t.value})}))}),[])},[""].concat(Object.values(o.Hotel_Standard_Stars_Css)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Merlin_BoardStandardDesc"),n.createElement("select",{value:t.Merlin_BoardStandardDesc,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{Merlin_BoardStandardDesc:t.value})}))}),[])},[""].concat(Object.values(o.Merlin_BoardStandardDesc)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Merlin_ParsedStartFullDate"),n.createElement("select",{value:t.Merlin_ParsedStartFullDate,onChange:(0,n.useCallback)((function(e){var t=e.target;return r((function(e){return q(q({},e),{},{Merlin_ParsedStartFullDate:t.value})}))}),[])},[""].concat(Object.values(o.Merlin_ParsedStartFullDate)).map((function(e){return n.createElement("option",{key:e,value:e},e)}))))))}function fe(e){var t,r,o,a=e.item,i=V(e,z),l=$((0,n.useState)((function(){return{json:!1}})),2),c=l[0],s=l[1];return n.createElement("div",i,n.createElement(d.r,{href:"".concat(a.Hotel_OfferUrlWithOfferCode).concat(a.Merlin_Id)},"".concat(a.Hotel_Name," (").concat(a.Hotel_Location_Name,") / ").concat(a.Hotel_TextCategory," / ").concat(a.Merlin_FlightFrom,", ").concat(a.Merlin_ParsedStartFullDate,", ").concat(a.Merlin_ParsedDepartureTime)),n.createElement(ce,{coordinates:{latitude:a.Hotel_GPS_Latitude,longitude:a.Hotel_GPS_Longitude}}),n.createElement("ul",null,n.createElement("li",null,"Hotel_Type_Name: ",a.Hotel_Type_Name," (",a.Merlin_BoardStandardDesc,")"),n.createElement("li",null,"Hotel_Standard_Stars_Css: ",a.Hotel_Standard_Stars_Css," (",a.Hotel_LocalStandard,": ",a.Hotel_Local_Standard_Stars_Css,")"),n.createElement("li",null,"Merlin_FlightFrom: ",a.Merlin_FlightFrom,","," ",a.Merlin_ParsedStartFullDate,", ",a.Merlin_ParsedDepartureTime," (",a.Merlin_Duration," dni)"),(r=(t=a.Query_AdultsChildenQueryString).Adults,o=t.Children,n.createElement("li",null,"Adults: ",r,", Children: ",o)),n.createElement("li",null,"Merlin_FullPriceParsed: ",B(a.Merlin_FullPriceParsed)," (",B(a.Merlin_AdultPrice),")",a.Merlin_OfferTypeSitecore&&n.createElement("span",null,a.Merlin_OfferTypeSitecore.Name," (",a.Merlin_OfferTypeSitecore.ShortName,")")),n.createElement("li",null,"_created: ",(0,u.Z)(a._created,"yyyy-MM-dd HH:mm"),a._updated&&n.createElement("span",null,"_updated: ",(0,u.Z)(a._updated,"yyyy-MM-dd HH:mm")))),n.createElement(Q,{item:a}),n.createElement(d.r,{onClick:function(e){return e.preventDefault(),s((function(e){return q(q({},e),{},{json:!e.json})}))}},c.json?"Hide json":"Show json"),c.json&&n.createElement("pre",null,JSON.stringify(a,null,2)))}function he(){return n.createElement("div",{className:U.Section},n.createElement("h2",null,"Holidays"),n.createElement(ue,null))}},1758:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([e.id,".huTvQmyOvVuCBvlkQKfB{clear:both}.huTvQmyOvVuCBvlkQKfB table{border-collapse:collapse}.huTvQmyOvVuCBvlkQKfB table tr:hover{background-color:#e0e0e0}.huTvQmyOvVuCBvlkQKfB tr:nth-child(even){background-color:#f7f7f7}.huTvQmyOvVuCBvlkQKfB th,.huTvQmyOvVuCBvlkQKfB td{padding:.25em}","",{version:3,sources:["webpack://./src/containers/Holidays/Offers.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CACA,4BACE,wBAAA,CAEE,qCACE,wBAAA,CAKJ,yCACE,wBAAA,CAGJ,kDAEE,aAAA",sourcesContent:[".Offers {\n  clear: both;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n"],sourceRoot:""}]),i.locals={Offers:"huTvQmyOvVuCBvlkQKfB"};const l=i},4913:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([e.id,".U1uuAPy3Fw36L4smQs6z{color:purple}.U1uuAPy3Fw36L4smQs6z section{clear:both}.vp3t0CERafyRQsHYj_4j{clear:both}.PfY0KX8CDswij0oy11Fd{float:left;width:200px;height:150px}.Ig_Tfc2KZChGO0NviEFG pre{clear:both}","",{version:3,sources:["webpack://./src/containers/Holidays/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,8BACE,UAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAGA,0BACE,UAAA",sourcesContent:[".Section {\n  color: purple;\n  section {\n    clear: both;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Details {\n  pre {\n    clear: both;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"U1uuAPy3Fw36L4smQs6z",Row:"vp3t0CERafyRQsHYj_4j",Gallery:"PfY0KX8CDswij0oy11Fd",Details:"Ig_Tfc2KZChGO0NviEFG"};const l=i}}]);
//# sourceMappingURL=666.js.map