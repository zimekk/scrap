/*! For license information please see 792.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[792],{792:(t,e,r)=>{r.r(e),r.d(e,{default:()=>I});var n=r(5668),o=r(5980),i=r(3368),a=r(8536),c=r(7460),u=r(6256),l=r(9348),s=r(4244),f=r(7540),h=r(2108),m=r.n(h),p=r(7020),d=r.n(p),v=r(7240),y=r.n(v),g=r(9516),b=r.n(g),A=r(2940),w=r.n(A),O=r(9296),E=r.n(O),P=r(7464),C={};C.styleTagTransform=E(),C.setAttributes=b(),C.insert=y().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=w(),m()(P.c,C);const x=P.c&&P.c.locals?P.c.locals:void 0;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}var j=["search"];function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=S(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==S(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(){_=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new k(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",m="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function b(){}var A={};l(A,a,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(G([])));O&&O!==r&&n.call(O,a)&&(A=O);var E=b.prototype=y.prototype=Object.create(A);function P(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==S(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(e,r,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:m,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(S(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},P(C.prototype),l(C.prototype,c,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new C(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),l(E,u,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function T(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var B=(0,u.u)(function(){var t,e=(t=_().mark((function t(e){var r;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/hot-shots/data.json?".concat(e));case 2:return r=t.sent,t.next=5,r.json().then((function(t){return t}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){T(i,n,o,a,c,"next",t)}function c(t){T(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),F=function(t){var e=t.Price,r=t.OldPrice;return 100*(1-e/(void 0===r?e:r))};function Y(t){var e=t.item;return n.createElement("div",{className:x.Product},n.createElement(s.M,{className:x.Gallery,images:e.Product.Photos.map((function(t){return t.ThumbnailUrl})),srcSet:e.Product.Photos.map((function(t){return t.Url}))}),n.createElement("div",{className:x.Right},n.createElement("div",null,(0,l.E9)(new Date(e.PromotionEnd),"yyyy-MM-dd HH:mm")),e.OldPrice?n.createElement("span",{className:x.PreviousPrice},"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.OldPrice)," PLN")):null,n.createElement("span",{className:x.Price},"".concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.Price)," PLN")),e.OldPrice?n.createElement("span",{className:x.Percentage},"(".concat(new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(F(e)),"%)")):null),n.createElement("div",null,n.createElement(f.c,{href:e.Product.WebUrl},"[".concat(e.Product.Id,"] ").concat(e.Product.Name)),n.createElement("div",null,e.Product.Producer.Name),n.createElement("div",null,e.PromotionName),n.createElement("div",null,e.PromotionGainText)))}var q=5;function R(t){var e=t.products,r=k((0,n.useState)((function(){return!(e.length>q)})),2),o=r[0],i=r[1];return n.createElement("div",null,(o?e:e.slice(0,q)).map((function(t,e){return n.createElement("div",{key:e,className:x.Row},n.createElement(Y,{item:t}))})),!1===o&&n.createElement(f.c,{onClick:function(t){return t.preventDefault(),i(!0)}},"".concat(e.length-q," więcej...")))}function U(t){var e=t.results,r=t.queries;return n.createElement(R,{products:e.filter((function(t){return(""===r.search||t.PromotionName.toLowerCase().match(r.search))&&(0===r.reduce||r.reduce<=F(t))}))})}var W=[0,10,20,30,50,70,90];function D(t){var e=t.filters,r=t.setFilters;return n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:e.search,onChange:(0,n.useCallback)((function(t){var e=t.target;return r((function(t){return N(N({},t),{},{search:e.value})}))}),[])}))," ",n.createElement("label",null,n.createElement("span",null,"Reduce"),n.createElement("input",{type:"range",list:"reduce-list",min:W[0],max:[].concat(W).pop(),value:e.reduce,onChange:(0,n.useCallback)((function(t){var e=t.target;return r((function(t){return N(N({},t),{},{reduce:Number(e.value)})}))}),[])}),n.createElement("datalist",{id:"reduce-list"},W.map((function(t){return n.createElement("option",{key:t,value:t,label:W.includes(t)?"".concat(t,"%"):void 0})}))),n.createElement("span",null,"".concat(e.reduce,"%"))))}function I(t){var e=t.version,r=void 0===e?"v1":e,u=B.read(r).results,l=k((0,n.useState)((function(){return{reduce:W[0],search:""}})),2),s=l[0],f=l[1],h=k((0,n.useState)((function(){return s})),2),m=h[0],p=h[1],d=(0,n.useMemo)((function(){return new o.E}),[]);return(0,n.useEffect)((function(){var t=d.pipe((0,i.k)((function(t){var e=t.search,r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,j);return JSON.stringify(N(N(N({},m),r),{},{search:e.toLowerCase().trim()}))})),(0,a.a)(),(0,c.o)(400)).subscribe((function(t){return p((function(e){return N(N({},e),JSON.parse(t))}))}));return function(){return t.unsubscribe()}}),[d]),(0,n.useEffect)((function(){d.next(s)}),[s]),console.log({results:u,filters:s,queries:m}),n.createElement("div",{className:x.Section},n.createElement("h2",null,"HotShots"),n.createElement(D,{filters:s,setFilters:f}),n.createElement(U,{results:u,queries:m}))}},7464:(t,e,r)=>{r.d(e,{c:()=>c});var n=r(2876),o=r.n(n),i=r(1849),a=r.n(i)()(o());a.push([t.id,".zOOTwrxUsqbquSORKdJR{color:purple;padding:1em}.WDAws0x0CCmqB4jbarop{position:relative;clear:both;min-height:66px;padding:.5em 1em .5em calc(100px + 1em);border-top:1px solid #d3d3d3}.GWhCKgf2fnvnxuu4GDwm{position:absolute;top:.5em;left:.5em;width:95px;height:80px;border:1px solid #d3d3d3}.e7Pvu3YWwmq7OOHa0eOv .zPANLvlPfGOesUSMjyYl{text-decoration:line-through;color:#d3d3d3}.e7Pvu3YWwmq7OOHa0eOv .zPANLvlPfGOesUSMjyYl+.cBfJNY6C_NSy8CdiTztY{margin-left:.5em}.e7Pvu3YWwmq7OOHa0eOv .cBfJNY6C_NSy8CdiTztY+.TibU2ap1KG6VfR8wqJfG{margin-left:.5em}.e7Pvu3YWwmq7OOHa0eOv .mWhOwBUwdb6SL05z00Qc{color:gray}.e7Pvu3YWwmq7OOHa0eOv .CMvB9d3Fyvl_gT7HrTsl{float:right;text-align:right}","",{version:3,sources:["webpack://./src/containers/HotShots/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,WAAA,CAEF,sBACE,iBAAA,CACA,UAAA,CACA,eAAA,CACA,uCAAA,CACA,4BAAA,CAEF,sBACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CAGA,4CACE,4BAAA,CACA,aAAA,CACA,kEACE,gBAAA,CAIF,kEACE,gBAAA,CAGJ,4CACE,UAAA,CAEF,4CACE,WAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  padding: 1em;\n}\n.Row {\n  position: relative;\n  clear: both;\n  min-height: 66px;\n  padding: 0.5em 1em 0.5em calc(100px + 1em);\n  border-top: 1px solid lightgray;\n}\n.Gallery {\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  width: 95px;\n  height: 80px;\n  border: 1px solid lightgray;\n}\n.Product {\n  .PreviousPrice {\n    text-decoration: line-through;\n    color: lightgray;\n    & + .Price {\n      margin-left: 0.5em;\n    }\n  }\n  .Price {\n    & + .Percentage {\n      margin-left: 0.5em;\n    }\n  }\n  .Rates {\n    color: gray;\n  }\n  .Right {\n    float: right;\n    text-align: right;\n  }\n}\n"],sourceRoot:""}]),a.locals={Section:"zOOTwrxUsqbquSORKdJR",Row:"WDAws0x0CCmqB4jbarop",Gallery:"GWhCKgf2fnvnxuu4GDwm",Product:"e7Pvu3YWwmq7OOHa0eOv",PreviousPrice:"zPANLvlPfGOesUSMjyYl",Price:"cBfJNY6C_NSy8CdiTztY",Percentage:"TibU2ap1KG6VfR8wqJfG",Rates:"mWhOwBUwdb6SL05z00Qc",Right:"CMvB9d3Fyvl_gT7HrTsl"};const c=a},7460:(t,e,r)=>{r.d(e,{o:()=>a});var n=r(5109),o=r(7932),i=r(9597);function a(t,e){return void 0===e&&(e=n.M),(0,o.i)((function(r,n){var o=null,a=null,c=null,u=function(){if(o){o.unsubscribe(),o=null;var t=a;a=null,n.next(t)}};function l(){var r=c+t,i=e.now();if(i<r)return o=this.schedule(void 0,r-i),void n.add(o);u()}r.subscribe((0,i.e)(n,(function(r){a=r,c=e.now(),o||(o=e.schedule(l,t),n.add(o))}),(function(){u(),n.complete()}),void 0,(function(){a=o=null})))}))}},8536:(t,e,r)=>{r.d(e,{a:()=>a});var n=r(1124),o=r(7932),i=r(9597);function a(t,e){return void 0===e&&(e=n.Z),t=null!=t?t:c,(0,o.i)((function(r,n){var o,a=!0;r.subscribe((0,i.e)(n,(function(r){var i=e(r);!a&&t(o,i)||(a=!1,o=i,n.next(r))})))}))}function c(t,e){return t===e}},3368:(t,e,r)=>{r.d(e,{k:()=>i});var n=r(7932),o=r(9597);function i(t,e){return(0,n.i)((function(r,n){var i=0;r.subscribe((0,o.e)(n,(function(r){n.next(t.call(e,r,i++))})))}))}}}]);
//# sourceMappingURL=792.js.map