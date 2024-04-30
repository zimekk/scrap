/*! For license information please see 321.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[321],{3976:(e,t,n)=>{"use strict";n.d(t,{GV:()=>w,gh:()=>_});var r=n(4041),a=n(6138),o=n(6213),i=n(3878),l=n(4453),c=n(9475),u=(n(3373),n(2591)),s=n.n(u),m=n(1740),f=n.n(m),p=n(8128),d=n.n(p),h=n(855),y=n.n(h),g=n(3051),b=n.n(g),v=n(3656),A=n.n(v),E=n(59),C=n.n(E),k={};function w(e){var t=e.position,n=e.children,i=e.setPosition,l=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return{dragend:function(){var e=l.current;null!=e&&i(e.getLatLng())}}}),[]);return r.createElement(a.p,{draggable:!0,eventHandlers:c,position:t,ref:l},r.createElement(o.m,null,n))}function _(){var e=(0,i.ko)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(l.g,{icon:c.zTK}))))}k.styleTagTransform=A(),k.setAttributes=y(),k.insert=d().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=b(),s()(C(),k),C()&&C().locals&&C().locals},7321:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Be});var r=n(4041),a=n(6004),o=n(8045),i=n(5519),l=n(5833),c=n(8926),u=n(8283),s=n(6333),m=n(1336),f=n(4084),p=n(6361),d=n(6902),h=n.n(d),y=n(5193),g=n(9447),b=n(6138),v=n(8136),A=n(2550),E=n.n(A),C=n(3976),k=n(3373),w=n.n(k),_=n(2591),O=n.n(_),j=n(1740),x=n.n(j),S=n(8128),N=n.n(S),P=n(855),T=n.n(P),B=n(3051),F=n.n(B),z=n(3656),L=n.n(z),M=n(3548),H=n.n(M),G={};G.styleTagTransform=L(),G.setAttributes=T(),G.insert=N().bind(null,"head"),G.domAPI=x(),G.insertStyleElement=F(),O()(H(),G);const I=H()&&H().locals?H().locals:void 0;var D=["id","position","_like","_hide"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function W(e){var t=e.id,n=e.onSelect,a=e.canonical,o=e.distance,i=e.price,l=e.title,c=e.images,s=e._address,p=e._created,d=e._updated,h=e._checked;return r.createElement("div",{className:I.Summary},r.createElement(m.Z,{className:I.Gallery,images:c}),r.createElement("h3",null,"[",r.createElement(f.N,{onClick:function(e){return e.preventDefault(),n(t)}},t),"]"," ",r.createElement(f.N,{href:a},l)," ",r.createElement("span",null,"(",o," km)")),r.createElement("div",null,(0,u.GP)(p,"yyyy-MM-dd HH:mm"),d&&" updated: ".concat((0,u.GP)(d,"yyyy-MM-dd HH:mm")),h&&" checked: ".concat((0,u.GP)(h,"yyyy-MM-dd HH:mm"))),r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(i)," PLN")),s&&r.createElement("h6",null,s.join(" / ")))}function Q(e){var t=e.bounds,a=e.center,o=e.setCenter,i=e.list,l=e.onSelect;(0,r.useEffect)((function(){delete h().Icon.Default.prototype._getIconUrl,h().Icon.Default.mergeOptions({iconRetinaUrl:n(3705).A,iconUrl:n(4384).default,shadowUrl:n(5647).A})}),[]);var c=(0,r.useMemo)((function(){return r.createElement(y.W,{bounds:t,zoom:13,className:w()(I.Map)},r.createElement(g.e,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(C.GV,{position:a,setPosition:o},"".concat(a.lat,",").concat(a.lng)),r.createElement(E(),{chunkedLoading:!0},i.map((function(e){var t=e.id,o=e.position,i=(e._like,e._hide,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,D));return r.createElement(b.p,{key:t,position:o,icon:new(h().Icon)({iconUrl:i.images.length>0?i.images[0]:n(4384).default,iconSize:[48,48]})},r.createElement(v.z,{minWidth:400},r.createElement(W,Y({id:t,onSelect:l,distance:a.distanceTo(o).toFixed(0)/1e3},i))))}))),r.createElement(C.gh,null))}),[i,a]);return r.createElement("div",{className:w()(I.Layout),onClick:function(e){return(t=e.target.closest("a"))&&"#close"===t.getAttribute("href")&&e.preventDefault();var t}},c)}var U=n(8576);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}var X=["parameters"];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){var r;return r=function(e,t){if("object"!=R(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==R(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(e){return U.z.object({address:U.z.record(U.z.string(),U.z.union([U.z.string(),U.z.number()])),id:U.z.string(),information:U.z.array(U.z.object({label:U.z.string(),unit:U.z.string(),values:U.z.array(U.z.string())})).optional(),location:U.z.array(U.z.string()),parameters:U.z.array(U.z.object({label:U.z.string(),value:U.z.string()}))}).transform((function(e){var t=e.parameters,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,X);return J({parameters:t.concat(n.information?n.information.filter((function(e){return e.values.length>0})).map((function(e){var t=e.label,n=e.values,r=e.unit;return{label:t,value:n.join(", ").concat(r)}})):[])},n)})).transform((function(e){return J(J({},e),{},{_information:e.information?e.information.filter((function(e){return e.values.length>0})).reduce((function(e,t){var n=t.label,r=t.values;return Object.assign(e,q({},n,r))}),{}):null,_parameters:e.parameters.reduce((function(e,t){var n=t.label,r=t.value;return Object.assign(e,q({},n,r))}),{})})})).transform((function(t){var n,r,a,o,i,l,c,u,s=t.address,m=t.location,f=t.parameters,p=t._information,d=t._parameters;return{_area:Number(null!=p&&null!==(n=p.area)&&void 0!==n&&n.length?p.area[0]:(null===(r=d["Powierzchnia w m2"])||void 0===r?void 0:r.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_terrain_area:Number(null!=p&&null!==(a=p.terrain_area)&&void 0!==a&&a.length?p.terrain_area[0]:(null===(o=d["Powierzchnia działki w m2"])||void 0===o?void 0:o.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_address:s?["lokalizacja_kraj","lokalizacja_region","lokalizacja_powiat","lokalizacja_gmina","lokalizacja_miejscowosc","lokalizacja_ulica"].map((function(e){return s[e]})).filter(Boolean):null,_location:m.join(", "),road:null!=p&&null!==(i=p.access_types)&&void 0!==i&&i.length?null===(l=p.access_types)||void 0===l?void 0:l.map((function(e){return{"access_types::asphalt":"asfaltowa","access_types::dirt":"polna","access_types::hard_surfaced":"utwardzana","access_types::soft_surfaced":"nieutwardzona"}[e]||console.log({value:e})}))[0]:d["Droga dojazdowa"],building:null!=p&&null!==(c=p.building_type)&&void 0!==c&&c.length?null===(u=p.building_type)||void 0===u?void 0:u.map((function(e){return{"building_type::detached":"wolnostojący","building_type::ribbon":"szeregowy","building_type::semi_detached":"bliźniak","building_type::residence":"pałac/dworek/willa","building_type::tenement":"kamienica"}[e]||console.log({value:e})}))[0]:d["Typ budynku"],parameters:f,coordinates:e.coordinates||(s["lokalizacja_szerokosc-geograficzna-y"]?{latitude:s["lokalizacja_szerokosc-geograficzna-y"],longitude:s["lokalizacja_dlugosc-geograficzna-x"]}:null)}})).parse(e)},Z=n(7172),$=n.n(Z),ee={};ee.styleTagTransform=L(),ee.setAttributes=T(),ee.insert=N().bind(null,"head"),ee.domAPI=x(),ee.insertStyleElement=F(),O()($(),ee);const te=$()&&$().locals?$().locals:void 0;function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}var re=["search"],ae=["areaTo"],oe=["areaFrom"],ie=["terrainAreaTo"],le=["terrainAreaFrom"],ce=["priceTo"],ue=["priceFrom"],se=["children"],me=["children"];function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(){ye=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),l=new N(r||[]);return a(i,"_invoke",{value:O(e,n,l)}),i}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",y={};function g(){}function b(){}function v(){}var A={};u(A,i,(function(){return this}));var E=Object.getPrototypeOf,C=E&&E(E(P([])));C&&C!==n&&r.call(C,i)&&(A=C);var k=v.prototype=g.prototype=Object.create(A);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,o,i,l){var c=m(e[a],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==ne(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function O(t,n,r){var a=f;return function(o,i){if(a===d)throw Error("Generator is already running");if(a===h){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var l=r.delegate;if(l){var c=j(l,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=d;var u=m(t,n,r);if("normal"===u.type){if(a=r.done?h:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=h,r.method="throw",r.arg=u.arg)}}}function j(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=m(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(ne(t)+" is not iterable")}return b.prototype=v,a(k,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:b,configurable:!0}),b.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},w(_.prototype),u(_.prototype,l,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new _(s(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){var r,a,o,i;r=e,a=t,o=n[t],i=function(e,t){if("object"!=ne(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=ne(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==ne(i)?i:i+"")in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var Ae=[1,3,5,10,20,50,100,500],Ee={id:1,price:1,title:1,_area:1,_terrain_area:1,_created:-1,_updated:-1},Ce=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6,25e5,3e6,4e6,5e6],ke=[0,50,100,150,200,250,300,400,500,600,700,800,900],we=[0,250,500,750,1e3,1500,2e3,2500,3e3,3500,4e3,5e3],_e=(0,s.$)(function(){var e,t=(e=ye().mark((function e(t){var n;return ye().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{hide:e.hide,like:e.like,results:e.results.map((function(e){return be(be({},e),K(e))}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ve(o,r,a,i,l,"next",e)}function l(e){ve(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),Oe=function(e){return be(be({},e),{},{position:e.coordinates?{lat:e.coordinates.latitude,lng:e.coordinates.longitude}:null,_search:e.title.toLowerCase(),_price:e.price,_updated:e._updated||0})};function je(e){var t=e.version,n=void 0===t?"v1":t,c=_e.read(n),u=c.results,s=c.hide,p=c.like,d=de((0,r.useState)((function(){return u})),2),y=d[0],g=d[1],b=(0,r.useMemo)((function(){return{category:[""].concat(y.map((function(e){return e.category})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),location:[""].concat(y.map((function(e){return e._location})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),road:[""].concat(y.map((function(e){return e.road})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),building:[""].concat(y.map((function(e){return e.building})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[y]),v=de((0,r.useState)((function(){return{category:b.category[0],location:b.location[0],road:b.road[0],building:b.building[0],search:"",showHide:!0,onlyLike:!1,priceFrom:Ce[0],priceTo:Ce[Ce.length-4],areaFrom:ke[0],areaTo:ke[ke.length-1],terrainAreaFrom:we[0],terrainAreaTo:we[we.length-1],radius:Ae[Ae.length-1]}})),2),A=v[0],E=v[1],C=de((0,r.useState)((function(){return A})),2),k=C[0],_=C[1],O=de((0,r.useState)((function(){return Object.keys(Ee)[5]})),2),j=O[0],x=O[1],S=(0,r.useMemo)((function(){return new a.B}),[]);(0,r.useEffect)((function(){var e=S.pipe((0,o.T)((function(e){var t=e.search,n=pe(e,re);return JSON.stringify(be(be(be({},k),n),{},{search:t.trim()}))})),(0,i.F)(),(0,l.B)(400)).subscribe((function(e){return _((function(t){return be(be({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[S]),(0,r.useEffect)((function(){S.next(A)}),[A]),console.log({options:b,filters:A,results:y});var N=de((0,r.useState)(s),2),P=N[0],T=N[1],B=de((0,r.useState)(p),2),F=B[0],z=B[1],L=(0,r.useMemo)((function(){return y.map(Oe).filter((function(e){return(!k.category||[e.category].includes(k.category))&&(!k.location||[e._location].includes(k.location))&&(!k.road||[e.road].includes(k.road))&&(!k.building||[e.building].includes(k.building))&&(!k.onlyLike||F.includes(e.id))&&(k.showHide||!P.includes(e.id))&&(e._search.match(k.search)||k.search===String(e.id))&&(k.areaTo===ke[0]||k.areaFrom<=e._area&&e._area<=k.areaTo)&&(k.terrainAreaTo===we[0]||k.terrainAreaFrom<=e._terrain_area&&e._terrain_area<=k.terrainAreaTo)&&(k.priceTo===Ce[0]||k.priceFrom<=e._price&&e._price<=k.priceTo)}))}),[y,k]),M=(0,r.useMemo)((function(){return L.sort((function(e,t){return Ee[j]*(e[j]>t[j]?1:-1)}))}),[L,j]),H=(0,r.useMemo)((function(){return L.filter((function(e){var t=e.position;return Boolean(t)}))}),[L]),G=function(e){return(0,r.useMemo)((function(){return h().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return h().marker([n,r])}))).getBounds()}),[])}([{position:{lat:"52.1530829",lng:"21.1104411"}}]),I=de((0,r.useState)((function(){return G.getCenter()})),2),D=I[0],Y=I[1],W=(0,r.useMemo)((function(){return H.filter((function(e){var t=e.position;return D.distanceTo(t)<1e3*k.radius})).map((function(e){return be(be({},e),{},{_like:F.includes(e.id),_hide:P.includes(e.id)})}))}),[H,D,k.radius,F,P]),U=de((0,r.useState)((function(){return{map:!1}})),2),R=U[0],X=U[1];return console.log({points:H,center:D,queries:k,nearby:W}),r.createElement("div",null,r.createElement("div",null,r.createElement(f.N,{onClick:function(e){return e.preventDefault(),X((function(e){return be(be({},e),{},{map:!e.map})}))}},R.map?"Hide map":"Show map")," ",R.map&&r.createElement(Q,{bounds:G,center:D,setCenter:Y,list:W,onSelect:function(e){return E((function(t){return be(be({},t),{},{search:e})}))}})),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Category"),r.createElement("select",{value:A.category,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return be(be({},e),{},{category:t.value})}))}),[])},b.category.map((function(e){return r.createElement("option",{key:e,value:e},e)})))),r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:A.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return be(be({},e),{},{search:t.value})}))}),[])})),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:j,onChange:(0,r.useCallback)((function(e){var t=e.target;return x(t.value)}),[])},Object.entries(Ee).map((function(e){var t=de(e,1)[0];return r.createElement("option",{key:t,value:t},t)})))),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:A.showHide,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return be(be({},e),{},{showHide:t.checked})}))}),[])}),r.createElement("span",null,"Show hidden")),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:A.onlyLike,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return be(be({},e),{},{onlyLike:t.checked})}))}),[])}),r.createElement("span",null,"Only likes")),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Location"),r.createElement("select",{value:A.location,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return be(be({},e),{},{location:t})}))}),[])},b.location.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Road"),r.createElement("select",{value:A.road,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return be(be({},e),{},{road:t})}))}),[])},b.road.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Building"),r.createElement("select",{value:A.building,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return be(be({},e),{},{building:t})}))}),[])},b.building.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Area From"),r.createElement("input",{type:"range",list:"area-list",min:ke[0],max:ke[ke.length-1],value:A.areaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.areaTo,r=pe(e,ae),a=Number(t.value);return be(be({},r),{},{areaFrom:a,areaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"area-list"},ke.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Area To"),r.createElement("input",{type:"range",list:"area-list",min:ke[0],max:ke[ke.length-1],value:A.areaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.areaFrom,r=pe(e,oe),a=Number(t.value);return be(be({},r),{},{areaFrom:a>n?n:a,areaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.areaFrom)," - ").concat((new Intl.NumberFormat).format(A.areaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Terrain Area From"),r.createElement("input",{type:"range",list:"terrain-area-list",min:we[0],max:we[we.length-1],value:A.terrainAreaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.terrainAreaTo,r=pe(e,ie),a=Number(t.value);return be(be({},r),{},{terrainAreaFrom:a,terrainAreaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"terrain-area-list"},we.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Terrain Area To"),r.createElement("input",{type:"range",list:"terrain-area-list",min:we[0],max:we[we.length-1],value:A.terrainAreaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.terrainAreaFrom,r=pe(e,le),a=Number(t.value);return be(be({},r),{},{terrainAreaFrom:a>n?n:a,terrainAreaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.terrainAreaFrom)," - ").concat((new Intl.NumberFormat).format(A.terrainAreaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:Ce[0],max:Ce[Ce.length-1],value:A.priceFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.priceTo,r=pe(e,ce),a=Number(t.value);return be(be({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"price-list"},Ce.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:Ce[0],max:Ce[Ce.length-1],value:A.priceTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.priceFrom,r=pe(e,ue),a=Number(t.value);return be(be({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.priceFrom)," - ").concat((new Intl.NumberFormat).format(A.priceTo)," PLN"))))),r.createElement("div",null,"Found ".concat(L.length," properties out of a total of ").concat(y.length)),r.createElement("ol",null,M.slice(0,100).map((function(e){return r.createElement("li",{key:e.id,className:w()(te.Row,F.includes(e.id)&&te.Like,P.includes(e.id)&&te.Hide)},!P.includes(e.id)&&r.createElement(m.Z,{className:te.Gallery,images:e.images}),r.createElement(Ne,fe({},e,{hide:P,setHide:T,like:F,setLike:z,setResults:g})),!P.includes(e.id)&&r.createElement(Pe,e),Object.entries(e._history||{}).reverse().map((function(e){var t=de(e,2),n=t[0],a=t[1];return r.createElement(Te,fe({key:n,_updated:Number(n)},a))})))}))))}function xe(e){var t=e.children,n=pe(e,se);return r.createElement("span",null,r.createElement("button",n,t))}function Se(e){var t=e.children,n=pe(e,me);return r.createElement("label",null,r.createElement("input",fe({type:"checkbox"},n)),r.createElement("span",null,t))}function Ne(e){var t=e.id,n=e.canonical,a=e.coordinates,o=e.price,i=e.title,l=e.hide,c=e.setHide,s=e.like,m=e.setLike,d=e.setResults,h=e._address,y=e._created,g=e._updated,b=void 0===g?0:g,v=e._checked,A=void 0===v?0:v,E=de((0,r.useState)(!1),2),C=E[0],k=E[1],_=de((0,r.useState)(!1),2),O=_[0],j=_[1],x=(0,r.useCallback)((function(){k(!0),requestIdleCallback((function(){return confirm("Confirm to delete permanently")?fetch("api/properties/remove.json?id=".concat(t)).then((function(){return d((function(e){return e.filter((function(e){return e.id!==t}))}))})):k(!1)}))}),[t]);return r.createElement("div",{className:w()(te.Summary,C&&te.Removed)},r.createElement("div",null,r.createElement("div",{className:te.Sidebar},r.createElement(Se,{checked:O,onChange:function(e){return j(e.target.checked)}},"Distance"),r.createElement(Se,{checked:s.includes(t),onChange:function(e){return fetch("api/properties/like.json?id=".concat(t)),m((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Like"),r.createElement(Se,{checked:l.includes(t),onChange:function(e){return fetch("api/properties/hide.json?id=".concat(t)),c((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Hide"),r.createElement(xe,{onClick:x},"Remove")),r.createElement("div",null,(0,u.GP)(y,"yyyy-MM-dd HH:mm"),b>0&&" updated: ".concat((0,u.GP)(b,"yyyy-MM-dd HH:mm")),A>0&&" checked: ".concat((0,u.GP)(A,"yyyy-MM-dd HH:mm")))),r.createElement("div",{style:{clear:"right"}},a&&r.createElement(p.X_,{coordinates:a}),r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(o)," PLN")),r.createElement("h3",null,r.createElement(f.N,{href:n},i)," ")),r.createElement("h5",null,a&&r.createElement(p.HO,{coordinates:a}),a&&r.createElement(p.aZ,{coordinates:a},h&&" ".concat(h.join(" / ")))))}function Pe(e){var t=e.description,n=e.parameters,a=de((0,r.useState)(!1),2),o=a[0],i=a[1];return r.createElement("div",{className:te.Details},r.createElement(c.A,{ellipsis:r.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),i(!0)}},"..."),lines:!o&&3},t.map((function(e,t){return r.createElement("p",{key:t},e)}))),r.createElement("ul",null,n.map((function(e,t){var n=e.label,a=e.value;return r.createElement("li",{key:t},n,": ",r.createElement("b",null,a))}))))}function Te(e){var t=e.price,n=e._updated;return r.createElement("div",{className:te.History},r.createElement("div",null,r.createElement("div",{className:te.Sidebar},r.createElement("h5",null,"".concat((new Intl.NumberFormat).format(t)," PLN"))),r.createElement("div",null,(0,u.GP)(n,"yyyy-MM-dd HH:mm"))))}function Be(){return r.createElement("div",{className:te.Section},r.createElement("h2",null,"Properties"),r.createElement(je,null))}},59:(e,t,n)=>{var r=n(2001),a=n(935)(r);a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),a.locals={},e.exports=a},3548:(e,t,n)=>{var r=n(2001),a=n(935),o=n(4468),i=a(r);i.i(o),i.push([e.id,".fmu5OTC8YuGNxvhVWLQY{height:75vh;border:2px solid red}.fmu5OTC8YuGNxvhVWLQY header{font-weight:bold}.cXdsM8XDHY8s8_ZISLLs{padding:0 0 0 210px;min-height:200px}.cXdsM8XDHY8s8_ZISLLs .G1eoJjQ_TUQvlMdXoYXW{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}","",{version:3,sources:["webpack://./src/containers/Properties/Map.module.scss"],names:[],mappings:"AAEA,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA,CAeJ,sBACE,mBAAA,CACA,gBAAA,CAEA,4CACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n\n  // .Circle {\n  //   color: purple;\n  //   fill: currentColor;\n  //   stroke: currentColor;\n  //   &.Like {\n  //     color: blueviolet;\n  //   }\n  //   &.Hide {\n  //     opacity: 0.5;\n  //   }\n  // }\n}\n.Summary {\n  padding: 0 0 0 210px;\n  min-height: 200px;\n\n  .Gallery {\n    position: absolute;\n    margin-top: -2px;\n    margin-left: -214px;\n    width: 200px;\n    height: 200px;\n  }\n}\n'],sourceRoot:""}]),i.locals={Map:"fmu5OTC8YuGNxvhVWLQY",Summary:"cXdsM8XDHY8s8_ZISLLs",Gallery:"G1eoJjQ_TUQvlMdXoYXW"},e.exports=i},7172:(e,t,n)=>{var r=n(2001),a=n(935)(r);a.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0 .5em 220px;border:2px solid rgba(0,0,0,0);margin:.5em;min-height:196px}.bUNjBJTWIMSq_XWNswT2.TXzld0_Enrx67356XQvV{border-color:#8a2be2}.bUNjBJTWIMSq_XWNswT2.yknHg6Kx6g072wclMnRw{opacity:.5;min-height:0}.e3KhqV06cOMe70OduX67{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy.Q4BoWvIONP1cT09G0bdo{opacity:.5}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h5{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy .OZ2Fnz11BkBbwH0I6IEx{float:right}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}.K5RBVDM72Qt0DbrWbkh3{clear:both;border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.K5RBVDM72Qt0DbrWbkh3 .OZ2Fnz11BkBbwH0I6IEx{float:right}.K5RBVDM72Qt0DbrWbkh3 h5{float:right;margin-block-start:0;margin-block-end:0}","",{version:3,sources:["webpack://./src/containers/Properties/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,8BAAA,CACA,WAAA,CACA,gBAAA,CACA,2CACE,oBAAA,CAEF,2CACE,UAAA,CACA,YAAA,CAGJ,sBACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,2CACE,UAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,4CACE,WAAA,CAGJ,sBACE,+BAAA,CACA,mBAAA,CAEA,wBACE,QAAA,CAGJ,sBACE,UAAA,CACA,+BAAA,CACA,mBAAA,CACA,4CACE,WAAA,CAEF,yBACE,WAAA,CACA,oBAAA,CACA,kBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0 0.5em 220px;\n  border: 2px solid transparent;\n  margin: 0.5em;\n  min-height: 196px;\n  &.Like {\n    border-color: blueviolet;\n  }\n  &.Hide {\n    opacity: 0.5;\n    min-height: 0;\n  }\n}\n.Gallery {\n  position: absolute;\n  margin-top: -2px;\n  margin-left: -214px;\n  width: 200px;\n  height: 200px;\n}\n.Summary {\n  &.Removed {\n    opacity: 0.5;\n  }\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  .Sidebar {\n    float: right;\n  }\n}\n.Details {\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n\n  p {\n    margin: 0;\n  }\n}\n.History {\n  clear: both;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n  .Sidebar {\n    float: right;\n  }\n  h5 {\n    float: right;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n}\n"],sourceRoot:""}]),a.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Like:"TXzld0_Enrx67356XQvV",Hide:"yknHg6Kx6g072wclMnRw",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Removed:"Q4BoWvIONP1cT09G0bdo",Sidebar:"OZ2Fnz11BkBbwH0I6IEx",Details:"GzN8lDh8Bf0lo_aG_yN4",History:"K5RBVDM72Qt0DbrWbkh3"},e.exports=a}}]);
//# sourceMappingURL=321.js.map