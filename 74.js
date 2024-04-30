/*! For license information please see 74.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[74],{2074:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>H});var n=r(4041),o=r(6004),i=r(8045),a=r(5519),c=r(5833),u=r(6333),l=r(8283),s=r(1336),f=r(4084),h=r(2591),p=r.n(h),m=r(1740),v=r.n(m),d=r(8128),y=r.n(d),g=r(855),b=r.n(g),A=r(3051),w=r.n(A),O=r(3656),E=r.n(O),P=r(5237),C=r.n(P),x={};x.styleTagTransform=E(),x.setAttributes=b(),x.insert=y().bind(null,"head"),x.domAPI=v(),x.insertStyleElement=w(),p()(C(),x);const S=C()&&C().locals?C().locals:void 0;function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}var N=["search"];function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=j(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==j(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function B(){B=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",m="executing",v="completed",d={};function y(){}function g(){}function b(){}var A={};l(A,a,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(G([])));O&&O!==r&&n.call(O,a)&&(A=O);var E=b.prototype=y.prototype=Object.create(A);function P(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==j(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(e,r,n){var o=h;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:p,l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(j(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},P(C.prototype),l(C.prototype,c,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new C(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),l(E,u,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function k(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var F=(0,u.$)(function(){var t,e=(t=B().mark((function t(e){var r;return B().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/hot-shots/data.json?".concat(e));case 2:return r=t.sent,t.next=5,r.json().then((function(t){return t}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){k(i,n,o,a,c,"next",t)}function c(t){k(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),Y=function(t){var e=t.Price,r=t.OldPrice;return 100*(1-e/(void 0===r?e:r))};function q(t){var e=t.item;return n.createElement("div",{className:S.Product},n.createElement(s.Z,{className:S.Gallery,images:e.Product.Photos.map((function(t){return t.ThumbnailUrl})),srcSet:e.Product.Photos.map((function(t){return t.Url}))}),n.createElement("div",{className:S.Right},n.createElement("div",null,(0,l.GP)(new Date(e.PromotionEnd),"yyyy-MM-dd HH:mm")),e.OldPrice?n.createElement("span",{className:S.PreviousPrice},"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.OldPrice)," PLN")):null,n.createElement("span",{className:S.Price},"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.Price)," PLN")),e.OldPrice?n.createElement("span",{className:S.Percentage},"(".concat(new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(Y(e)),"%)")):null),n.createElement("div",null,n.createElement(f.N,{href:e.Product.WebUrl},"[".concat(e.Product.Id,"] ").concat(e.Product.Name)),n.createElement("div",null,e.Product.Producer.Name),n.createElement("div",null,e.PromotionName),n.createElement("div",null,e.PromotionGainText)))}var R=5;function U(t){var e=t.products,r=G((0,n.useState)((function(){return!(e.length>R)})),2),o=r[0],i=r[1];return n.createElement("div",null,(o?e:e.slice(0,R)).map((function(t,e){return n.createElement("div",{key:e,className:S.Row},n.createElement(q,{item:t}))})),!1===o&&n.createElement(f.N,{onClick:function(t){return t.preventDefault(),i(!0)}},"".concat(e.length-R," więcej...")))}function W(t){var e=t.results,r=t.queries;return n.createElement(U,{products:e.filter((function(t){return(""===r.search||t.PromotionName.toLowerCase().match(r.search))&&(0===r.reduce||r.reduce<=Y(t))}))})}var D=[0,10,20,30,50,70,90];function I(t){var e=t.filters,r=t.setFilters;return n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:e.search,onChange:(0,n.useCallback)((function(t){var e=t.target;return r((function(t){return _(_({},t),{},{search:e.value})}))}),[])}))," ",n.createElement("label",null,n.createElement("span",null,"Reduce"),n.createElement("input",{type:"range",list:"reduce-list",min:D[0],max:[].concat(D).pop(),value:e.reduce,onChange:(0,n.useCallback)((function(t){var e=t.target;return r((function(t){return _(_({},t),{},{reduce:Number(e.value)})}))}),[])}),n.createElement("datalist",{id:"reduce-list"},D.map((function(t){return n.createElement("option",{key:t,value:t,label:D.includes(t)?"".concat(t,"%"):void 0})}))),n.createElement("span",null,"".concat(e.reduce,"%"))))}function H(t){var e=t.version,r=void 0===e?"v1":e,u=F.read(r).results,l=G((0,n.useState)((function(){return{reduce:D[0],search:""}})),2),s=l[0],f=l[1],h=G((0,n.useState)((function(){return s})),2),p=h[0],m=h[1],v=(0,n.useMemo)((function(){return new o.B}),[]);return(0,n.useEffect)((function(){var t=v.pipe((0,i.T)((function(t){var e=t.search,r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,N);return JSON.stringify(_(_(_({},p),r),{},{search:e.toLowerCase().trim()}))})),(0,a.F)(),(0,c.B)(400)).subscribe((function(t){return m((function(e){return _(_({},e),JSON.parse(t))}))}));return function(){return t.unsubscribe()}}),[v]),(0,n.useEffect)((function(){v.next(s)}),[s]),console.log({results:u,filters:s,queries:p}),n.createElement("div",{className:S.Section},n.createElement("h2",null,"HotShots"),n.createElement(I,{filters:s,setFilters:f}),n.createElement(W,{results:u,queries:p}))}},5237:(t,e,r)=>{var n=r(2001),o=r(935)(n);o.push([t.id,".zOOTwrxUsqbquSORKdJR{color:purple;padding:1em}.WDAws0x0CCmqB4jbarop{position:relative;clear:both;min-height:66px;padding:.5em 1em .5em calc(100px + 1em);border-top:1px solid #d3d3d3}.GWhCKgf2fnvnxuu4GDwm{position:absolute;top:.5em;left:.5em;width:95px;height:80px;border:1px solid #d3d3d3}.e7Pvu3YWwmq7OOHa0eOv .zPANLvlPfGOesUSMjyYl{text-decoration:line-through;color:#d3d3d3}.e7Pvu3YWwmq7OOHa0eOv .zPANLvlPfGOesUSMjyYl+.cBfJNY6C_NSy8CdiTztY{margin-left:.5em}.e7Pvu3YWwmq7OOHa0eOv .cBfJNY6C_NSy8CdiTztY+.TibU2ap1KG6VfR8wqJfG{margin-left:.5em}.e7Pvu3YWwmq7OOHa0eOv .mWhOwBUwdb6SL05z00Qc{color:gray}.e7Pvu3YWwmq7OOHa0eOv .CMvB9d3Fyvl_gT7HrTsl{float:right;text-align:right}","",{version:3,sources:["webpack://./src/containers/HotShots/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,WAAA,CAEF,sBACE,iBAAA,CACA,UAAA,CACA,eAAA,CACA,uCAAA,CACA,4BAAA,CAEF,sBACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CAGA,4CACE,4BAAA,CACA,aAAA,CACA,kEACE,gBAAA,CAIF,kEACE,gBAAA,CAGJ,4CACE,UAAA,CAEF,4CACE,WAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  padding: 1em;\n}\n.Row {\n  position: relative;\n  clear: both;\n  min-height: 66px;\n  padding: 0.5em 1em 0.5em calc(100px + 1em);\n  border-top: 1px solid lightgray;\n}\n.Gallery {\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  width: 95px;\n  height: 80px;\n  border: 1px solid lightgray;\n}\n.Product {\n  .PreviousPrice {\n    text-decoration: line-through;\n    color: lightgray;\n    & + .Price {\n      margin-left: 0.5em;\n    }\n  }\n  .Price {\n    & + .Percentage {\n      margin-left: 0.5em;\n    }\n  }\n  .Rates {\n    color: gray;\n  }\n  .Right {\n    float: right;\n    text-align: right;\n  }\n}\n"],sourceRoot:""}]),o.locals={Section:"zOOTwrxUsqbquSORKdJR",Row:"WDAws0x0CCmqB4jbarop",Gallery:"GWhCKgf2fnvnxuu4GDwm",Product:"e7Pvu3YWwmq7OOHa0eOv",PreviousPrice:"zPANLvlPfGOesUSMjyYl",Price:"cBfJNY6C_NSy8CdiTztY",Percentage:"TibU2ap1KG6VfR8wqJfG",Rates:"mWhOwBUwdb6SL05z00Qc",Right:"CMvB9d3Fyvl_gT7HrTsl"},t.exports=o},5833:(t,e,r)=>{"use strict";r.d(e,{B:()=>a});var n=r(4353),o=r(2185),i=r(869);function a(t,e){return void 0===e&&(e=n.E),(0,o.N)((function(r,n){var o=null,a=null,c=null,u=function(){if(o){o.unsubscribe(),o=null;var t=a;a=null,n.next(t)}};function l(){var r=c+t,i=e.now();if(i<r)return o=this.schedule(void 0,r-i),void n.add(o);u()}r.subscribe((0,i._)(n,(function(r){a=r,c=e.now(),o||(o=e.schedule(l,t),n.add(o))}),(function(){u(),n.complete()}),void 0,(function(){a=o=null})))}))}},5519:(t,e,r)=>{"use strict";r.d(e,{F:()=>a});var n=r(4254),o=r(2185),i=r(869);function a(t,e){return void 0===e&&(e=n.D),t=null!=t?t:c,(0,o.N)((function(r,n){var o,a=!0;r.subscribe((0,i._)(n,(function(r){var i=e(r);!a&&t(o,i)||(a=!1,o=i,n.next(r))})))}))}function c(t,e){return t===e}},8045:(t,e,r)=>{"use strict";r.d(e,{T:()=>i});var n=r(2185),o=r(869);function i(t,e){return(0,n.N)((function(r,n){var i=0;r.subscribe((0,o._)(n,(function(r){n.next(t.call(e,r,i++))})))}))}}}]);
//# sourceMappingURL=74.js.map