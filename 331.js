/*! For license information please see 331.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[331],{8331:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ce});var n=r(2784),o=r(8283),a=r(1148),i=r(7984),l=r(9369),c=r(8871),u=r(357),s=r(5016),f=r(7370),m=r(9725),p=r(5726),h=r(7012),d=r(891),v=r(5784),y=r(6062),g=r.n(y),A=r(4036),b=r.n(A),E=r(6793),w=r.n(E),C=r(7892),k=r.n(C),O=r(1173),x=r.n(O),j=r(2464),L=r.n(j),S=r(2459),F={};F.styleTagTransform=L(),F.setAttributes=k(),F.insert=w().bind(null,"head"),F.domAPI=b(),F.insertStyleElement=x(),g()(S.Z,F);const _=S.Z&&S.Z.locals?S.Z.locals:void 0;var N=r(8821),P=r(2779),B=r.n(P);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}var H=["children"],R=["areaTo"],I=["areaFrom"],G=["priceTo"],z=["priceFrom"],V=["search"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===T(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z.apply(this,arguments)}function K(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Q(){Q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),l=new O(o||[]);return n(i,"_invoke",{value:E(e,r,l)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function m(){}function p(){}function h(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(x([])));y&&y!==t&&r.call(y,a)&&(d=y);var g=h.prototype=m.prototype=Object.create(d);function A(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function o(n,a,i,l){var c=s(e[n],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==T(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,l)}),(function(e){o("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,l)}))}l(c.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function E(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function w(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},A(b.prototype),c(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},A(g),c(g,l,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function q(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}var J={_created:-1,_updated:-1},X=(0,u.k)(function(){var e,t=(e=Q().mark((function e(t){var r;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/plots/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){q(a,n,o,i,l,"next",e)}function l(e){q(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function $(e){var t=e.lat,r=e.lon,n=e.zoom;return(0,v.I7)("".concat(t,",").concat(r),n)}function ee(e){var t=e.children,r=K(e,H);return n.createElement("label",null,n.createElement("input",Z({type:"checkbox"},r)),n.createElement("span",null,t))}function te(e){var t,r,a,i,l=e.item,c=e.setHide,u=e.setLike,y=D((0,n.useState)(!1),2),g=y[0],A=y[1];return n.createElement("div",{className:_.Item},l.photos&&n.createElement(p.r,{className:_.Gallery,images:l.photos}),n.createElement("div",{className:_.Right},n.createElement("div",null,(0,s.Z)(new Date(l._created),"yyyy-MM-dd HH:mm")),n.createElement("span",{className:_.Price},"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(l.price.regularPrice.value)," ").concat(l.price.regularPrice.currencySymbol))),n.createElement(d.r,{href:l.url},"[".concat(l.id,"] ").concat(l.title)),n.createElement(ee,{checked:l._like,onChange:function(e){return fetch("api/plots/like.json?id=".concat(l.id)),u((function(t){return e.target.checked?t.concat(l.id):t.filter((function(e){return e!==l.id}))}))}},"Like"),n.createElement(ee,{checked:l._hide,onChange:function(e){return fetch("api/plots/hide.json?id=".concat(l.id)),c((function(t){return e.target.checked?t.concat(l.id):t.filter((function(e){return e!==l.id}))}))}},"Hide"),l.location&&n.createElement("div",{className:_.Location,style:l.map.show_detailed?{fontWeight:"bold"}:{}},n.createElement(d.r,{href:(t=l.map,r=t.lat,a=t.lon,i="".concat(r,",").concat(a),(0,v._d)(i))},n.createElement(f.G,{icon:m.KS0}))," ",n.createElement(d.r,{href:$(l.map)},n.createElement(f.G,{icon:m.FGq})," ",l.location.pathName)),l.location&&n.createElement(v.hA,{coordinates:{latitude:l.map.lat,longitude:l.map.lon},travelmode:"driving"}),l.location&&n.createElement(v.hA,{coordinates:{latitude:l.map.lat,longitude:l.map.lon},travelmode:"transit"}),l.params&&n.createElement("ul",{className:_.Parameters},l.params.map((function(e){var t=e.key,r=e.name,o=e.value;return n.createElement("li",{key:t},r,": ",o)}))),l.description&&n.createElement("div",{className:_.Description},n.createElement(o.Z,{ellipsis:n.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),A(!0)}},"..."),lines:!g&&3},n.createElement("div",{dangerouslySetInnerHTML:{__html:l.description}}))),n.createElement(h.P,null,l))}var re=25;function ne(e){var t=e.list,r=e.setHide,o=e.setLike,a=D((0,n.useState)((function(){return re})),2),i=a[0],l=a[1];return n.createElement("div",null,n.createElement("div",null,"Found ".concat(t.length," plots")),(0,n.useMemo)((function(){return t.slice(0,i)}),[i,t]).map((function(e,t){return n.createElement("div",{key:t,className:B()(_.Row,e._like&&_.Like,e._hide&&_.Hide)},n.createElement(te,{key:e.id,item:e,setHide:r,setLike:o}))})),t.length>i&&n.createElement(d.r,{onClick:function(e){return e.preventDefault(),l((function(e){return e+25}))}},"".concat(t.length-i," więcej...")))}function oe(e){var t=e.results,r=e.queries,o=e.hide,a=e.like,i=e.setHide,l=e.setLike;return n.createElement(ne,{list:(0,n.useMemo)((function(){return t.map((function(e){return Object.assign(e,{_like:a.includes(e.id),_hide:o.includes(e.id)})})).filter((function(e){return(""===r.type||e.params.find((function(e){return e.normalizedValue===r.type})))&&(""===r.search||e.title.toLowerCase().match(r.search))&&(!r.onlyLike||e._like)&&(r.showHide||!e._hide)&&(r.areaTo===ae[0]||r.areaFrom<=e._area&&e._area<=r.areaTo)&&(r.priceTo===ie[0]||r.priceFrom<=e._price&&e._price<=r.priceTo)})).sort((function(e,t){return J[r.sortBy]*(e[r.sortBy]>t[r.sortBy]?1:-1)}))}),[t,r,o,a]),setHide:i,setLike:l})}var ae=[0,250,500,750,1e3,1500,2e3,2500,3e3,3500,4e3,5e3],ie=[0,2e5,5e5,1e6,15e5,2e6,25e5,3e6,4e6,5e6];function le(e){var t=e.options,r=e.filters,o=e.setFilters;return n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Type"),n.createElement("select",{value:r.type,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return Y(Y({},e),{},{type:t.value})}))}),[])},[[""]].concat(Object.entries(t.type)).map((function(e){var t=D(e,2),r=t[0],o=t[1],a=void 0===o?"-":o;return n.createElement("option",{key:r,value:r},a)})))),n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:r.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return Y(Y({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:r.sortBy,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return Y(Y({},e),{},{sortBy:t.value})}))}),[])},Object.entries(J).map((function(e){var t=D(e,1)[0];return n.createElement("option",{key:t,value:t},t)})))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r.showHide,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return Y(Y({},e),{},{showHide:t.checked})}))}),[])}),n.createElement("span",null,"Show hidden")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r.onlyLike,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return Y(Y({},e),{},{onlyLike:t.checked})}))}),[])}),n.createElement("span",null,"Only likes")),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Area From"),n.createElement("input",{type:"range",list:"area-list",min:ae[0],max:ae[ae.length-1],value:r.areaFrom,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){var r=e.areaTo,n=K(e,R),o=Number(t.value);return Y(Y({},n),{},{areaFrom:o,areaTo:r<o?o:r})}))}),[])}),n.createElement("datalist",{id:"area-list"},ae.map((function(e){return n.createElement("option",{key:e,value:e})})))),n.createElement("label",null,n.createElement("span",null,"Area To"),n.createElement("input",{type:"range",list:"area-list",min:ae[0],max:ae[ae.length-1],value:r.areaTo,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){var r=e.areaFrom,n=K(e,I),o=Number(t.value);return Y(Y({},n),{},{areaFrom:o>r?r:o,areaTo:o})}))}),[])}),n.createElement("span",null,"".concat((new Intl.NumberFormat).format(r.areaFrom)," - ").concat((new Intl.NumberFormat).format(r.areaTo)," m2")))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:ie[0],max:ie[ie.length-1],value:r.priceFrom,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){var r=e.priceTo,n=K(e,G),o=Number(t.value);return Y(Y({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[])}),n.createElement("datalist",{id:"price-list"},ie.map((function(e){return n.createElement("option",{key:e,value:e})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:ie[0],max:ie[ie.length-1],value:r.priceTo,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){var r=e.priceFrom,n=K(e,z),o=Number(t.value);return Y(Y({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[])}),n.createElement("span",null,"".concat((new Intl.NumberFormat).format(r.priceFrom)," - ").concat((new Intl.NumberFormat).format(r.priceTo)," PLN")))))}function ce(e){var t=e.version,r=void 0===t?"v1":t,o=X.read(r),u=o.results,s=o.hide,f=o.like,m=D((0,n.useState)(s),2),p=m[0],h=m[1],d=D((0,n.useState)(f),2),v=d[0],y=d[1],g=(0,n.useMemo)((function(){return u.reduce((function(e,t){return t.params.filter((function(e){return["type"].includes(e.key)})).reduce((function(e,t){return Object.assign(e,W({},t.key,Object.assign(e[t.key],W({},t.normalizedValue,t.value))))}),e)}),{type:{}})}),[u]),A=D((0,n.useState)((function(){return{type:"dzialki-budowlane",search:"",sortBy:Object.keys(J)[0],showHide:!0,onlyLike:!1,areaFrom:ae[2],areaTo:ae[ae.length-1],priceFrom:ie[1],priceTo:ie[4]}})),2),b=A[0],E=A[1],w=D((0,n.useState)((function(){return b})),2),C=w[0],k=w[1],O=(0,n.useMemo)((function(){return new a.x}),[]);return(0,N.m)(O.pipe((0,i.U)((function(e){var t=e.search,r=K(e,V);return JSON.stringify(Y(Y(Y({},C),r),{},{search:t.toLowerCase().trim()}))})),(0,l.x)(),(0,c.b)(400)),(function(e){return k((function(t){return Y(Y({},t),JSON.parse(e))}))})),(0,n.useEffect)((function(){O.next(b)}),[b]),console.log({results:u,filters:b,queries:C}),n.createElement("div",{className:_.Section},n.createElement("h2",null,"Plots"),n.createElement(le,{options:g,filters:b,setFilters:E}),n.createElement(oe,{results:(0,n.useMemo)((function(){return u.map((function(e){var t;return Object.assign(e,{_area:Number(null===(t=e.params.find((function(e){return"m"===e.key})))||void 0===t?void 0:t.normalizedValue),_price:e.price.regularPrice.value})}))}),[]),queries:C,hide:p,like:v,setHide:h,setLike:y}))}},2459:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([e.id,'.EOr4ulZ4BUCm13B2OADZ{color:purple;padding:1em}.jB0eGdNRHF7olYhliv6w{position:relative;min-height:160px;padding:.5em 1em .5em calc(200px + 1em);border:2px solid rgba(0,0,0,0)}.jB0eGdNRHF7olYhliv6w.NUVEV07zMVoSwtw6VRS5{border-color:#8a2be2}.jB0eGdNRHF7olYhliv6w.Y3hgtYRF45l_Ks9wOBch{opacity:.5;min-height:0}.UvsUGWcbZD20NTvuGuKw{position:absolute;top:.5em;left:.5em;width:200px;height:150px;border:1px solid #d3d3d3}.H5FNVzh7s9WLuIBMr4rw{font-size:small;margin:0;padding:0}.H5FNVzh7s9WLuIBMr4rw li{display:inline}.H5FNVzh7s9WLuIBMr4rw li+li::before{content:" · "}.z_PNdUv7zRVMA0R7eQgp{font-size:small;padding:.25em 0}.ABeFc4E4_RRa2SiLWeYH{font-size:small}.dAB4lxhVYQRKvIvVMd_w .jzyR7Pg2yW1yWXgkaH8A{float:right;text-align:right}',"",{version:3,sources:["webpack://./src/containers/Plots/styles.module.scss"],names:[],mappings:"AAAA,sBAAA,YACE,CAAA,WACA,CAAA,sBAEF,iBACE,CAAA,gBACA,CAAA,uCACA,CAAA,8BACA,CAAA,2CACA,oBACE,CAAA,2CAEF,UACE,CAAA,YACA,CAAA,sBAGJ,iBACE,CAAA,QACA,CAAA,SACA,CAAA,WACA,CAAA,YACA,CAAA,wBACA,CAAA,sBAEF,eACE,CAAA,QACA,CAAA,SACA,CAAA,yBACA,cACE,CAAA,oCACA,aACE,CAAA,sBAIN,eACE,CAAA,eACA,CAAA,sBAEF,eACE,CAAA,4CAGA,WACE,CAAA,gBACA",sourcesContent:['.Section {\n  color: purple;\n  padding: 1em;\n}\n.Row {\n  position: relative;\n  min-height: 160px;\n  padding: 0.5em 1em 0.5em calc(200px + 1em);\n  border: 2px solid transparent;\n  &.Like {\n    border-color: blueviolet;\n  }\n  &.Hide {\n    opacity: 0.5;\n    min-height: 0;\n  }\n}\n.Gallery {\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  width: 200px;\n  height: 150px;\n  border: 1px solid lightgray;\n}\n.Parameters {\n  font-size: small;\n  margin: 0;\n  padding: 0;\n  li {\n    display: inline;\n    & + li::before {\n      content: " · ";\n    }\n  }\n}\n.Description {\n  font-size: small;\n  padding: 0.25em 0;\n}\n.Location {\n  font-size: small;\n}\n.Item {\n  .Right {\n    float: right;\n    text-align: right;\n  }\n}\n'],sourceRoot:""}]),i.locals={Section:"EOr4ulZ4BUCm13B2OADZ",Row:"jB0eGdNRHF7olYhliv6w",Like:"NUVEV07zMVoSwtw6VRS5",Hide:"Y3hgtYRF45l_Ks9wOBch",Gallery:"UvsUGWcbZD20NTvuGuKw",Parameters:"H5FNVzh7s9WLuIBMr4rw",Description:"z_PNdUv7zRVMA0R7eQgp",Location:"ABeFc4E4_RRa2SiLWeYH",Item:"dAB4lxhVYQRKvIvVMd_w",Right:"jzyR7Pg2yW1yWXgkaH8A"};const l=i}}]);
//# sourceMappingURL=331.js.map