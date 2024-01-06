/*! For license information please see 784.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[784],{7012:(t,e,r)=>{r.d(e,{P:()=>i});var n=r(2784);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){var e,r,i=t.children,a=(e=(0,n.useState)(!1),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1];return n.createElement("pre",null,c?JSON.stringify(i,null,2):n.createElement(n.Fragment,null,"[",n.createElement("a",{href:"#",onClick:function(t){return t.preventDefault(),u(!0)}},"..."),"]"))}},5784:(t,e,r)=>{r.d(e,{Ns:()=>N,hA:()=>M,Ye:()=>C,_d:()=>P,I7:()=>k});var n=r(2784),o=r(357),i=r(7370),a=r(9725),c=r(7012),u=r(891),l=r(6062),s=r.n(l),f=r(4036),h=r.n(f),p=r(6793),m=r.n(p),d=r(7892),y=r.n(d),v=r(1173),g=r.n(v),b=r(2464),w=r.n(b),E=r(2353),x={};x.styleTagTransform=w(),x.setAttributes=y(),x.insert=m().bind(null,"head"),x.domAPI=h(),x.insertStyleElement=g(),s()(E.Z,x);const A=E.Z&&E.Z.locals?E.Z.locals:void 0;function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(){S=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",m="executing",d="completed",y={};function v(){}function g(){}function b(){}var w={};l(w,a,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(I([])));x&&x!==r&&n.call(x,a)&&(w=x);var A=b.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==_(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=h;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:p,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(_(e)+" is not iterable")}return g.prototype=b,o(A,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},j(L.prototype),l(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(A),l(A,u,"Generator"),l(A,a,(function(){return this})),l(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function j(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=L(t.split(","),2),n=r[0],o=r[1];return"//www.google.com/maps?t=k&q=loc:".concat(n,"+").concat(o,"&hl=pl").concat(e?"&z=".concat(e):"")}function C(t){var e=t.children,r=t.coordinates,o=r.latitude,c=r.longitude;return n.createElement(u.r,{href:k("".concat(o,",").concat(c)),rel:"",target:"map",style:{margin:"0 .25em"}},n.createElement(i.G,{icon:a.FGq}),e)}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"52.2268,20.9921",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"driving";return"//www.google.com/maps/dir/?api=1&origin=".concat(encodeURIComponent(t),"&destination=").concat(encodeURIComponent(e),"&travelmode=").concat(encodeURIComponent(r),"&hl=pl")}function N(t){var e=t.coordinates,r=e.latitude,o=e.longitude,c="".concat(r,",").concat(o);return n.createElement(u.r,{href:P(c),rel:"",target:"map",style:{margin:"0 .25em"}},n.createElement(i.G,{icon:a.KS0}))}var I=(0,o.k)(function(){var t,e=(t=S().mark((function t(e){var r;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/directions/data.json?".concat(new URLSearchParams({travelmode:e})));case 2:return r=t.sent,t.next=5,r.json().then((function(t){return t}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,c,"next",t)}function c(t){j(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),T=function(t){return String(Math.round(1e4*t))},G=function(t){var e=t.travel_mode,r=t.start_location,n=t.end_location;return[e].concat([r.lat,r.lng,n.lat,n.lng].map(T)).join(":")},D=function(t){return(e=L(t.split(":"),4))[0],r=e[1],n=e[2],[e[3]].concat(r.split(",").map(Number).map(T),n.split(",").map(Number).map(T)).join(":");var e,r,n},F=(0,o.k)((function(t){return fetch("api/process",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{url:t},opts:{delay:1e3}})})}));function U(t){var e=t.url;return F.read(e),null}function M(t){var e=t.coordinates,r=e.latitude,o=e.longitude,i=t.travelmode,a=void 0===i?"driving":i,u=L((0,n.useState)(!1),2),l=u[0],s=u[1],f="".concat(r,",").concat(o),h="52.2268,20.9921",p=I.read(a),m=(0,n.useMemo)((function(){return p.reduce((function(t,e){var r=e.id,n=e.directions;return Object.assign(t,function(t,e,r){var n;return n=function(t,e){if("object"!=_(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==_(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},D(r),n))}),{})}),[p]),d=(0,n.useMemo)((function(){return G({travel_mode:a,start_location:(r=f.split(",").map(Number),n=L(r,2),{lat:n[0],lng:n[1]}),end_location:(t=h.split(",").map(Number),e=L(t,2),{lat:e[0],lng:e[1]})});var t,e,r,n}),[a,f,h]);return d in m?n.createElement("div",{className:A.DistanceAndDuration},{bicycling:n.createElement("img",{alt:"Na rowerze",src:"//maps.gstatic.com/consumer/images/icons/2x/directions_bike_blue900_24dp.png"}),driving:n.createElement("img",{alt:"Samochodem",src:"//maps.gstatic.com/consumer/images/icons/2x/directions_car_filled_blue900_24dp.png"}),transit:n.createElement("img",{alt:"Transportem publicznym",src:"//maps.gstatic.com/consumer/images/icons/2x/directions_transit_filled_blue900_24dp.png"}),walking:n.createElement("img",{alt:"Pieszo",src:"//maps.gstatic.com/consumer/images/icons/2x/directions_walk_blue900_24dp.png"})}[a],n.createElement("span",null,(m[d]||[]).map((function(t){var e=t.distance,r=t.duration;return"".concat(e.text," (").concat(r.text,")")})).join(", ")),n.createElement(c.P,null,m[d])):n.createElement("div",null,n.createElement("button",{disabled:l,onClick:function(){return s(!0)}},l?"Processing...":"Get Directions"),n.createElement(n.Suspense,null,l&&n.createElement(U,{url:"https:".concat(P(f,h,a))})))}},2353:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(272),o=r.n(n),i=r(2609),a=r.n(i)()(o());a.push([t.id,".qWxOexowbAs1mYVVCCro img{width:16px;height:16px;margin:0 4px 0 0;vertical-align:top}","",{version:3,sources:["webpack://./src/containers/Properties/Location/styles.module.scss"],names:[],mappings:"AACE,0BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA",sourcesContent:[".DistanceAndDuration {\n  img {\n    width: 16px;\n    height: 16px;\n    margin: 0 4px 0 0;\n    vertical-align: top;\n  }\n}\n"],sourceRoot:""}]),a.locals={DistanceAndDuration:"qWxOexowbAs1mYVVCCro"};const c=a}}]);
//# sourceMappingURL=784.js.map