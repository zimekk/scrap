/*! For license information please see 321.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[321],{891:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(2784),o=["href"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){var t=e.href,n=void 0===t?"#":t,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,o),l="#"===n[0];return r.createElement("a",a({href:n,target:l?void 0:"_blank",rel:l?void 0:"noopener noreferrer"},i))}},2700:(e,t,n)=>{n.d(t,{D:()=>O,CO:()=>C});var r=n(2784),o=n(1698),a=n(6121),i=n(3645),l=n(7370),c=n(9725),u=(n(2779),n(6062)),s=n.n(u),f=n(4036),p=n.n(f),m=n(6793),d=n.n(m),y=n(7892),h=n.n(y),v=n(1173),b=n.n(v),g=n(2464),E=n.n(g),A=n(2091),w={};function O(e){var t=e.position,n=e.children,i=e.setPosition,l=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return{dragend:function(){var e=l.current;null!=e&&i(e.getLatLng())}}}),[]);return r.createElement(o.J,{draggable:!0,eventHandlers:c,position:t,ref:l},r.createElement(a.u,null,n))}function C(){var e=(0,i.Sx)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(l.G,{icon:c.KS0}))))}w.styleTagTransform=E(),w.setAttributes=h(),w.insert=d().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=b(),s()(A.Z,w),A.Z&&A.Z.locals&&A.Z.locals},5321:(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var r=n(2784),o=n(161),a=n(357),i=n(5104),l=n(5062),c=n.n(l),u=n(6604),s=n(3459),f=n(1698),p=n(3340),m=n(2700),d=n(2779),y=n.n(d),h=n(6062),v=n.n(h),b=n(4036),g=n.n(b),E=n(6793),A=n.n(E),w=n(7892),O=n.n(w),C=n(1173),j=n.n(C),k=n(2464),S=n.n(k),x=n(1131),_={};_.styleTagTransform=S(),_.setAttributes=O(),_.insert=A().bind(null,"head"),_.domAPI=g(),_.insertStyleElement=j(),v()(x.Z,_);const T=x.Z&&x.Z.locals?x.Z.locals:void 0;function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=e.data;return r.createElement("div",null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null),Object.keys(t.header).map((function(e,t){return r.createElement("th",{key:t},e)}))),t.rows.sort((function(e,t){return t.date-e.date})).map((function(e,n){var o=e.date,a=e.list;return r.createElement("tr",{key:n},r.createElement("th",null,new Date(o).toISOString().split("T")[0]),Object.keys(t.header).map((function(e,t){return r.createElement("td",{key:t},a[e])})))})))))}function D(e){return(0,r.useMemo)((function(){return c().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return c().marker([n,r])}))).getBounds()}),[])}function F(e){var t=e.bounds,o=e.center,a=e.setCenter,i=e.list,l=e.zoom,d=void 0===l?12:l;(0,r.useEffect)((function(){delete c().Icon.Default.prototype._getIconUrl,c().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var h=(0,r.useMemo)((function(){return r.createElement(u.h,{bounds:t,center:o,zoom:d,className:y()(T.Map)},r.createElement(s.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(m.D,{position:o,setPosition:a},"".concat(o.lat,",").concat(o.lng)),i.map((function(e){var t=e.i,a=e.id,i=e.position,l=e.name,u=e.item;return r.createElement(f.J,{key:t,position:i,icon:new(c().Icon)({iconUrl:u.map_img?"https://www.autocentrum.pl".concat(u.map_img):n(379).Z,iconSize:[30,40]})},r.createElement(p.G,{minWidth:90},r.createElement("section",null,r.createElement("header",null,"[".concat(a,"] ").concat([l].concat(u.address||[]).join(" - ")," (").concat(o.distanceTo(i).toFixed(0)/1e3," km)")),r.createElement(P,{data:Object.entries(Object.assign(N({},u._updated||u._created,u.petrol_list.reduce((function(e,t){var n=t.type,r=t.price;return Object.assign(e,N({},n,r))}),{})),u._history)).reduce((function(e,t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),r=n[0],o=n[1];return Object.assign(e,{header:Object.keys(o).reduce((function(e,t){return Object.assign(e,N({},t,t))}),e.header),rows:e.rows.concat([{date:Number(r),list:o}])})}),{header:{},rows:[]})}))))})),r.createElement(m.CO,null))}),[i,o]);return r.createElement("div",{className:y()(T.Layout),onClick:function(e){return(t=e.target.closest("a"))&&"#close"===t.getAttribute("href")&&e.preventDefault();var t}},h)}var I=n(891),B=n(9539),M=n(6511),G={};G.styleTagTransform=S(),G.setAttributes=O(),G.insert=A().bind(null,"head"),G.domAPI=g(),G.insertStyleElement=j(),v()(M.Z,G);const Z=M.Z&&M.Z.locals?M.Z.locals:void 0;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var z=["_history"],Y=["priceTo"],H=["priceFrom"],q=["dateTo"],V=["dateFrom"],W=["position","item"];function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(){Q=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function p(){}function m(){}var d={};l(d,o,(function(){return this}));var y=Object.getPrototypeOf,h=y&&y(y(C([])));h&&h!==t&&n.call(h,o)&&(d=h);var v=m.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function r(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==U(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,l(v,"constructor",m),l(m,"constructor",p),p.displayName=l(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(g.prototype),l(g.prototype,a,(function(){return this})),e.AsyncIterator=g,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new g(c(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),l(v,i,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function te(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}var ne,re=[1,3,5,10,20,50,100,500],oe=[0,1,2,3,4,5,6,7,8,9,10],ae={_distance:1,_petrol_pb:1,"_petrol_pb+":1,_petrol_on:1,"_petrol_on+":1,network_name:1,address:1,_created:-1,_updated:-1},ie={"":"",pb:"pb","pb+":"pb+",on:"on","on+":"on+",lpg:"lpg","lpg+":"lpg+"};!function(e){e.LT="LT",e.GT="GT",e.EQ="EQ"}(ne||(ne={}));var le=function(e,t,n){if(e[t][1][n]&&e[t+1]&&e[t+1][1][n]){var r=Number(e[t][1][n]),o=Number(e[t+1][1][n]);return r===o?ne.EQ:r>o?ne.GT:ne.LT}return null},ce=(0,a.k)(function(){var e,t=(e=Q().mark((function e(t){var n;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/stations/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{results:e.results.map((function(e){var t=e._history,n=void 0===t?{}:t,r=ee(e,z);return $($({},r.petrol_list.reduce((function(e,t){var n=t.type,r=t.price;return Object.assign(e,K({},"_petrol_".concat(n),Number(r)||0))}),{})),{},{_history:n},r)}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){te(a,r,o,i,l,"next",e)}function l(e){te(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function ue(e){var t=e.version,n=void 0===t?"v1":t,a=ce.read(n).results,l=J((0,r.useState)([]),2),c=l[0],u=l[1],s=J((0,r.useState)(""),2),f=s[0],p=s[1],m=J((0,B.Z)(f),1)[0],d=(0,r.useCallback)((function(e){var t=e.target;return p(t.value)}),[]),h=J((0,r.useState)((function(){return{type:Object.keys(ie)[1],radius:5,priceFrom:oe[0],priceTo:oe[oe.length-1],dateFrom:(0,o.Z)(Date.now()-2592e6,"yyyy-MM-dd"),dateTo:(0,o.Z)(Date.now(),"yyyy-MM-dd"),sortBy:Object.keys(ae)[0]}})),2),v=h[0],b=h[1],g=(0,r.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.priceTo,r=ee(e,Y),o=Number(t.value);return $($({},r),{},{priceFrom:o,priceTo:n<o?o:n})}))}),[]),E=(0,r.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.priceFrom,r=ee(e,H),o=Number(t.value);return $($({},r),{},{priceFrom:o>n?n:o,priceTo:o})}))}),[]),A=(0,r.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.dateTo,r=ee(e,q),o=t.value;return $($({},r),{},{dateFrom:o,dateTo:n<o?o:n})}))}),[]),w=(0,r.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.dateFrom,r=ee(e,V),o=t.value;return $($({},r),{},{dateFrom:o>n?n:o,dateTo:o})}))}),[]);console.log({results:a});var O=(0,r.useMemo)((function(){return a.map((function(e,t){return{i:t,id:e.station_id,position:{lat:e.x,lng:e.y},name:e.network_name,item:e}})).filter((function(e){var t,n=e.name,r=e.item,o=r.petrol_list,a=r.address,i=void 0===a?"":a,l=r._created,c=r._updated,u=void 0===c?l:c;return(n.toLowerCase().match(m)||i.toLowerCase().match(m))&&(!v.type||(t=o.find((function(e){return e.type===v.type})),Boolean(t)&&v.priceFrom<=t.price&&t.price<=v.priceTo))&&new Date("".concat(v.dateFrom," 00:00:00")).getTime()<=u&&u<=new Date("".concat(v.dateTo," 23:59:59")).getTime()}))}),[a,m,v.type,v.priceFrom,v.priceTo,v.dateFrom,v.dateTo]),C=D([{position:{lat:52.1793,lng:21.0498}}]),j=J((0,r.useState)((function(){return C.getCenter()})),2),k=j[0],S=j[1],x=(0,r.useMemo)((function(){return O.map((function(e){var t=e.position,n=e.item,r=ee(e,W);return $({position:t,item:$($({},n),{},{_distance:k.distanceTo(t)}),history:n.petrol?[[String(n._updated),n.petrol]].concat(Object.entries(n._history).reverse()).map((function(e){var t=J(e,2),n=t[0],r=t[1];return[n,Object.keys(ie).filter(Boolean).map((function(e){return r[e]}))]})):[]},r)})).filter((function(e){return e.item._distance<1e3*v.radius}))}),[O,k,v.radius]),_=(0,r.useMemo)((function(){return x.sort((function(e,t){return ae[v.sortBy]*(e.item[v.sortBy]===t.item[v.sortBy]?0:(e.item[v.sortBy]||0)>(t.item[v.sortBy]||0)?1:-1)}))}),[x,v.sortBy]),T=(0,r.useMemo)((function(){return x.map((function(e){var t=e.history,n=e.item,r=n.network_name,o=n.address;return t.map((function(e){var t=J(e,2),n=t[0],a=t[1];return{group:"".concat(r," | ").concat(o),date:new Date(Number(n)),value:Number(a[Object.keys(ie).indexOf(v.type)-1])}}))})).flat().filter((function(e){var t=e.value;return Boolean(t)})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}),[x,v.type]),L=D(x);return r.createElement("div",null,r.createElement(F,{bounds:L,center:k,setCenter:S,list:x}),r.createElement(i.Z,{list:T}),r.createElement("fieldset",null,r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:f,onChange:d})),r.createElement("label",null,r.createElement("span",null,"Radius"),r.createElement("input",{type:"range",list:"range-list",min:re[0],max:re[re.length-1],value:v.radius,onChange:(0,r.useCallback)((function(e){var t=e.target;return b((function(e){return $($({},e),{},{radius:Number(t.value)})}))}),[])}),r.createElement("datalist",{id:"range-list"},re.map((function(e){return r.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),r.createElement("span",null,"max ".concat(v.radius," km")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Type"),r.createElement("select",{value:v.type,onChange:(0,r.useCallback)((function(e){var t=e.target;return b((function(e){return $($({},e),{},{type:t.value})}))}),[])},Object.entries(ie).map((function(e){var t=J(e,2),n=t[0],o=t[1];return r.createElement("option",{key:n,value:n},o)})))),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:v.sortBy,onChange:(0,r.useCallback)((function(e){var t=e.target;return b((function(e){return $($({},e),{},{sortBy:t.value})}))}),[])},Object.entries(ae).map((function(e){var t=J(e,1)[0];return r.createElement("option",{key:t,value:t},t)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:oe[0],max:oe[oe.length-1],value:v.priceFrom,onChange:g}),r.createElement("datalist",{id:"price-list"},oe.map((function(e){return r.createElement("option",{key:e,value:e,label:[0,1,2,3,4,5].includes(e)?"".concat(e," pln/l"):void 0})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:oe[0],max:oe[oe.length-1],value:v.priceTo,onChange:E}),r.createElement("span",null,"".concat(v.priceFrom,"-").concat(v.priceTo," pln/l")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Date From"),r.createElement("input",{type:"date",value:v.dateFrom,onChange:A})),r.createElement("label",null,r.createElement("span",null,"Date To"),r.createElement("input",{type:"date",value:v.dateTo,onChange:w})))),r.createElement("table",{className:Z.Table},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"#"),Object.keys(ie).map((function(e){return r.createElement("th",{key:e,className:y()(e===v.type&&Z.selected)},e?r.createElement(I.r,{onClick:(0,r.useCallback)((function(t){return t.preventDefault(),b((function(t){return $($({},t),{},{type:e})}))}),[])},e):r.createElement("div",null,"name"))})),r.createElement("th",null,"updated"),r.createElement("th",null)),_.map((function(e,t){var n=e.i,a=e.name,i=e.item,l=e.history;return l.slice(0,c.includes(n)?1/0:1).map((function(e,s){var f=J(e,2),p=f[0],m=f[1];return r.createElement("tr",{key:"".concat(t,"-").concat(s)},r.createElement("td",null,0===s&&n),0===s&&r.createElement("td",{rowSpan:c.includes(n)?l.length:void 0},r.createElement("div",{className:Z.Station},a," ",r.createElement("address",null,i.address))),m.map((function(e,t){return r.createElement("td",{key:t,className:y()(t===Object.keys(ie).indexOf(v.type)-1&&Z.selected)},r.createElement("div",{className:y()(Z.Price,(n=le(l,s,t),n&&(o={},K(o,ne.GT,Z.gt),K(o,ne.LT,Z.lt),K(o,ne.EQ,Z.eq),o)[n]))},null!=e?e:"-"));var n,o})),r.createElement("td",null,(0,o.Z)(Number(p),"yyyy-MM-dd")),r.createElement("td",null,l.length>0&&0===s&&(c.includes(n)?r.createElement(I.r,{onClick:function(e){return e.preventDefault(),u((function(e){return e.filter((function(e){return n!==e}))}))}},"hide"):r.createElement(I.r,{onClick:function(e){return e.preventDefault(),u((function(e){return e.concat(n)}))}},"show"))))}))})))))}function se(){return r.createElement("div",{className:Z.Section},r.createElement("h2",null,"Stations"),r.createElement(ue,null))}},9539:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2784);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t,n,a=(t=(0,r.useState)(e),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1],c=(0,r.useRef)();return(0,r.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout((function(){return l(e.toLowerCase())}),400),function(){clearTimeout(c.current)}}),[e]),[i]}},2091:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),o=n.n(r),a=n(2609),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),i.locals={};const l=i},1131:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),o=n.n(r),a=n(2609),i=n.n(a),l=n(9138),c=i()(o());c.i(l.Z),c.push([e.id,".cStyiPbxd0HI9tByMkkY{height:75vh;border:2px solid red}.cStyiPbxd0HI9tByMkkY header{font-weight:bold}","",{version:3,sources:["webpack://./src/containers/Stations/Map.module.scss"],names:[],mappings:"AAKA,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Layout {\n}\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n}\n'],sourceRoot:""}]),c.locals={Map:"cStyiPbxd0HI9tByMkkY"};const u=c},6511:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),o=n.n(r),a=n(2609),i=n.n(a)()(o());i.push([e.id,'.JTHop_UDHoyJmmN4pc6w{color:blue}.dPxlg3RLmLdxM8tY5oVh address{color:#6495ed;font-size:small}._WIYpu90vPFYsczMHLOG{border-collapse:collapse}._WIYpu90vPFYsczMHLOG .rUrDTnaISdjPBFi3X9DF{background:#def}._WIYpu90vPFYsczMHLOG td{vertical-align:top;padding:.25em}.DcVUc3zpN2nOrt53beGa{color:#000;text-align:right;width:3em}.DcVUc3zpN2nOrt53beGa.WEurT7giwHcxfqx9pq5j{color:blue}.DcVUc3zpN2nOrt53beGa.BFgoN81dqd3ExjHY8CVf{color:red}.DcVUc3zpN2nOrt53beGa.BFgoN81dqd3ExjHY8CVf::before{content:"↖"}.DcVUc3zpN2nOrt53beGa.op0NQ6Zaqs_zmLmX4NIM{color:green}.DcVUc3zpN2nOrt53beGa.op0NQ6Zaqs_zmLmX4NIM::before{content:"↘"}',"",{version:3,sources:["webpack://./src/containers/Stations/styles.module.scss"],names:[],mappings:"AAAA,sBAAA,UACE,CAAA,8BAGA,aACE,CAAA,eACA,CAAA,sBAGJ,wBACE,CAAA,4CAEA,eACE,CAAA,yBAGF,kBACE,CAAA,aACA,CAAA,sBAGJ,UACE,CAAA,gBACA,CAAA,SACA,CAAA,2CACA,UACE,CAAA,2CAEF,SACE,CAAA,mDACA,WACE,CAAA,2CAGJ,WACE,CAAA,mDACA,WACE",sourcesContent:['.Section {\n  color: blue;\n}\n.Station {\n  address {\n    color: cornflowerblue;\n    font-size: small;\n  }\n}\n.Table {\n  border-collapse: collapse;\n\n  .selected {\n    background: #def;\n  }\n\n  td {\n    vertical-align: top;\n    padding: 0.25em;\n  }\n}\n.Price {\n  color: black;\n  text-align: right;\n  width: 3em;\n  &.eq {\n    color: blue;\n  }\n  &.gt {\n    color: red;\n    &::before {\n      content: "\\2196";\n    }\n  }\n  &.lt {\n    color: green;\n    &::before {\n      content: "\\2198";\n    }\n  }\n}\n'],sourceRoot:""}]),i.locals={Section:"JTHop_UDHoyJmmN4pc6w",Station:"dPxlg3RLmLdxM8tY5oVh",Table:"_WIYpu90vPFYsczMHLOG",selected:"rUrDTnaISdjPBFi3X9DF",Price:"DcVUc3zpN2nOrt53beGa",eq:"WEurT7giwHcxfqx9pq5j",gt:"BFgoN81dqd3ExjHY8CVf",lt:"op0NQ6Zaqs_zmLmX4NIM"};const l=i}}]);
//# sourceMappingURL=321.js.map