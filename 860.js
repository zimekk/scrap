/*! For license information please see 860.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[860],{3588:(e,t,n)=>{n.d(t,{Wq:()=>k,aq:()=>w});var r=n(5668),a=n(3784),o=n(1232),i=n(7448),l=n(9444),c=n(8220),u=(n(1252),n(2108)),s=n.n(u),m=n(7020),f=n.n(m),p=n(7240),d=n.n(p),h=n(9516),y=n.n(h),g=n(2940),b=n.n(g),v=n(9296),A=n.n(v),E=n(1987),C={};function k(e){var t=e.position,n=e.children,i=e.setPosition,l=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return{dragend:function(){var e=l.current;null!=e&&i(e.getLatLng())}}}),[]);return r.createElement(a.c,{draggable:!0,eventHandlers:c,position:t,ref:l},r.createElement(o.o,null,n))}function w(){var e=(0,i.ox)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(l.u,{icon:c.Cui}))))}C.styleTagTransform=A(),C.setAttributes=y(),C.insert=d().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=b(),s()(E.c,C),E.c&&E.c.locals&&E.c.locals},7860:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ne});var r=n(5668),a=n(5980),o=n(3368),i=n(8536),l=n(7460),c=n(9160),u=n(9348),s=n(6256),m=n(4244),f=n(7540),p=n(7416),d=n(7040),h=n.n(d),y=n(7316),g=n(7428),b=n(3784),v=n(4888),A=n(1876),E=n.n(A),C=n(3588),k=n(1252),w=n.n(k),_=n(2108),O=n.n(_),j=n(7020),x=n.n(j),S=n(7240),T=n.n(S),N=n(9516),B=n.n(N),F=n(2940),L=n.n(F),P=n(9296),z=n.n(P),M=n(8276),H={};H.styleTagTransform=z(),H.setAttributes=B(),H.insert=T().bind(null,"head"),H.domAPI=x(),H.insertStyleElement=L(),O()(M.c,H);const I=M.c&&M.c.locals?M.c.locals:void 0;var D=["id","position","_like","_hide"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function G(e){var t=e.id,n=e.onSelect,a=e.canonical,o=e.distance,i=e.price,l=e.title,c=e.images,s=e._address,p=e._created,d=e._updated,h=e._checked;return r.createElement("div",{className:I.Summary},r.createElement(m.M,{className:I.Gallery,images:c}),r.createElement("h3",null,"[",r.createElement(f.c,{onClick:function(e){return e.preventDefault(),n(t)}},t),"]"," ",r.createElement(f.c,{href:a},l)," ",r.createElement("span",null,"(",o," km)")),r.createElement("div",null,(0,u.E9)(p,"yyyy-MM-dd HH:mm"),d&&" updated: ".concat((0,u.E9)(d,"yyyy-MM-dd HH:mm")),h&&" checked: ".concat((0,u.E9)(h,"yyyy-MM-dd HH:mm"))),r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(i)," PLN")),s&&r.createElement("h6",null,s.join(" / ")))}function W(e){var t=e.bounds,a=e.center,o=e.setCenter,i=e.list,l=e.onSelect;(0,r.useEffect)((function(){delete h().Icon.Default.prototype._getIconUrl,h().Icon.Default.mergeOptions({iconRetinaUrl:n(1060).c,iconUrl:n(1777).c,shadowUrl:n(6056).c})}),[]);var c=(0,r.useMemo)((function(){return r.createElement(y.E,{bounds:t,zoom:13,className:w()(I.Map)},r.createElement(g.t,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(C.Wq,{position:a,setPosition:o},"".concat(a.lat,",").concat(a.lng)),r.createElement(E(),{chunkedLoading:!0},i.map((function(e){var t=e.id,o=e.position,i=(e._like,e._hide,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,D));return r.createElement(b.c,{key:t,position:o,icon:new(h().Icon)({iconUrl:i.images.length>0?i.images[0]:n(1777).c,iconSize:[48,48]})},r.createElement(v.M,{minWidth:400},r.createElement(G,Y({id:t,onSelect:l,distance:a.distanceTo(o).toFixed(0)/1e3},i))))}))),r.createElement(C.aq,null))}),[i,a]);return r.createElement("div",{className:w()(I.Layout),onClick:function(e){return(t=e.target.closest("a"))&&"#close"===t.getAttribute("href")&&e.preventDefault();var t}},c)}var Q=n(4316);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}var R=["parameters"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){var r;return r=function(e,t){if("object"!=U(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==U(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){return Q.z.object({address:Q.z.record(Q.z.string(),Q.z.union([Q.z.string(),Q.z.number()])),id:Q.z.string(),information:Q.z.array(Q.z.object({label:Q.z.string(),unit:Q.z.string(),values:Q.z.array(Q.z.string())})).optional(),location:Q.z.array(Q.z.string()),parameters:Q.z.array(Q.z.object({label:Q.z.string(),value:Q.z.string()}))}).transform((function(e){var t=e.parameters,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,R);return q({parameters:t.concat(n.information?n.information.filter((function(e){return e.values.length>0})).map((function(e){var t=e.label,n=e.values,r=e.unit;return{label:t,value:n.join(", ").concat(r)}})):[])},n)})).transform((function(e){return q(q({},e),{},{_information:e.information?e.information.filter((function(e){return e.values.length>0})).reduce((function(e,t){var n=t.label,r=t.values;return Object.assign(e,J({},n,r))}),{}):null,_parameters:e.parameters.reduce((function(e,t){var n=t.label,r=t.value;return Object.assign(e,J({},n,r))}),{})})})).transform((function(t){var n,r,a,o,i,l,c,u,s=t.address,m=t.location,f=t.parameters,p=t._information,d=t._parameters;return{_area:Number(null!=p&&null!==(n=p.area)&&void 0!==n&&n.length?p.area[0]:(null===(r=d["Powierzchnia w m2"])||void 0===r?void 0:r.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_terrain_area:Number(null!=p&&null!==(a=p.terrain_area)&&void 0!==a&&a.length?p.terrain_area[0]:(null===(o=d["Powierzchnia działki w m2"])||void 0===o?void 0:o.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_address:s?["lokalizacja_kraj","lokalizacja_region","lokalizacja_powiat","lokalizacja_gmina","lokalizacja_miejscowosc","lokalizacja_ulica"].map((function(e){return s[e]})).filter(Boolean):null,_location:m.join(", "),road:null!=p&&null!==(i=p.access_types)&&void 0!==i&&i.length?null===(l=p.access_types)||void 0===l?void 0:l.map((function(e){return{"access_types::asphalt":"asfaltowa","access_types::dirt":"polna","access_types::hard_surfaced":"utwardzana","access_types::soft_surfaced":"nieutwardzona"}[e]||console.log({value:e})}))[0]:d["Droga dojazdowa"],building:null!=p&&null!==(c=p.building_type)&&void 0!==c&&c.length?null===(u=p.building_type)||void 0===u?void 0:u.map((function(e){return{"building_type::detached":"wolnostojący","building_type::ribbon":"szeregowy","building_type::semi_detached":"bliźniak","building_type::residence":"pałac/dworek/willa","building_type::tenement":"kamienica"}[e]||console.log({value:e})}))[0]:d["Typ budynku"],parameters:f,coordinates:e.coordinates||(s["lokalizacja_szerokosc-geograficzna-y"]?{latitude:s["lokalizacja_szerokosc-geograficzna-y"],longitude:s["lokalizacja_dlugosc-geograficzna-x"]}:null)}})).parse(e)},K=n(8836),Z={};Z.styleTagTransform=z(),Z.setAttributes=B(),Z.insert=T().bind(null,"head"),Z.domAPI=x(),Z.insertStyleElement=L(),O()(K.c,Z);const $=K.c&&K.c.locals?K.c.locals:void 0;function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}var te=["search"],ne=["areaTo"],re=["areaFrom"],ae=["terrainAreaTo"],oe=["terrainAreaFrom"],ie=["priceTo"],le=["priceFrom"],ce=["children"],ue=["children"];function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function de(){de=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),l=new T(r||[]);return a(i,"_invoke",{value:O(e,n,l)}),i}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",y={};function g(){}function b(){}function v(){}var A={};u(A,i,(function(){return this}));var E=Object.getPrototypeOf,C=E&&E(E(N([])));C&&C!==n&&r.call(C,i)&&(A=C);var k=v.prototype=g.prototype=Object.create(A);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,o,i,l){var c=m(e[a],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==ee(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function O(t,n,r){var a=f;return function(o,i){if(a===d)throw new Error("Generator is already running");if(a===h){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var l=r.delegate;if(l){var c=j(l,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=d;var u=m(t,n,r);if("normal"===u.type){if(a=r.done?h:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=h,r.method="throw",r.arg=u.arg)}}}function j(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=m(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(ee(t)+" is not iterable")}return b.prototype=v,a(k,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:b,configurable:!0}),b.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},w(_.prototype),u(_.prototype,l,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new _(s(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){var r,a,o,i;r=e,a=t,o=n[t],i=function(e,t){if("object"!=ee(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=ee(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==ee(i)?i:String(i))in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var be=[1,3,5,10,20,50,100,500],ve={id:1,price:1,title:1,_area:1,_terrain_area:1,_created:-1,_updated:-1},Ae=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6,25e5,3e6,4e6,5e6],Ee=[0,50,100,150,200,250,300,400,500,600,700,800,900],Ce=[0,250,500,750,1e3,1500,2e3,2500,3e3,3500,4e3,5e3],ke=(0,s.u)(function(){var e,t=(e=de().mark((function e(t){var n;return de().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{hide:e.hide,like:e.like,results:e.results.map((function(e){return ye(ye({},e),V(e))}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ge(o,r,a,i,l,"next",e)}function l(e){ge(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),we=function(e){return ye(ye({},e),{},{position:e.coordinates?{lat:e.coordinates.latitude,lng:e.coordinates.longitude}:null,_search:e.title.toLowerCase(),_price:e.price,_updated:e._updated||0})};function _e(e){var t=e.version,n=void 0===t?"v1":t,c=ke.read(n),u=c.results,s=c.hide,p=c.like,d=fe((0,r.useState)((function(){return u})),2),y=d[0],g=d[1],b=(0,r.useMemo)((function(){return{category:[""].concat(y.map((function(e){return e.category})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),location:[""].concat(y.map((function(e){return e._location})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),road:[""].concat(y.map((function(e){return e.road})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),building:[""].concat(y.map((function(e){return e.building})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[y]),v=fe((0,r.useState)((function(){return{category:b.category[0],location:b.location[0],road:b.road[0],building:b.building[0],search:"",showHide:!0,onlyLike:!1,priceFrom:Ae[0],priceTo:Ae[Ae.length-4],areaFrom:Ee[0],areaTo:Ee[Ee.length-1],terrainAreaFrom:Ce[0],terrainAreaTo:Ce[Ce.length-1],radius:be[be.length-1]}})),2),A=v[0],E=v[1],C=fe((0,r.useState)((function(){return A})),2),k=C[0],_=C[1],O=fe((0,r.useState)((function(){return Object.keys(ve)[5]})),2),j=O[0],x=O[1],S=(0,r.useMemo)((function(){return new a.E}),[]);(0,r.useEffect)((function(){var e=S.pipe((0,o.k)((function(e){var t=e.search,n=me(e,te);return JSON.stringify(ye(ye(ye({},k),n),{},{search:t.trim()}))})),(0,i.a)(),(0,l.o)(400)).subscribe((function(e){return _((function(t){return ye(ye({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[S]),(0,r.useEffect)((function(){S.next(A)}),[A]),console.log({options:b,filters:A,results:y});var T=fe((0,r.useState)(s),2),N=T[0],B=T[1],F=fe((0,r.useState)(p),2),L=F[0],P=F[1],z=(0,r.useMemo)((function(){return y.map(we).filter((function(e){return(!k.category||[e.category].includes(k.category))&&(!k.location||[e._location].includes(k.location))&&(!k.road||[e.road].includes(k.road))&&(!k.building||[e.building].includes(k.building))&&(!k.onlyLike||L.includes(e.id))&&(k.showHide||!N.includes(e.id))&&(e._search.match(k.search)||k.search===String(e.id))&&(k.areaTo===Ee[0]||k.areaFrom<=e._area&&e._area<=k.areaTo)&&(k.terrainAreaTo===Ce[0]||k.terrainAreaFrom<=e._terrain_area&&e._terrain_area<=k.terrainAreaTo)&&(k.priceTo===Ae[0]||k.priceFrom<=e._price&&e._price<=k.priceTo)}))}),[y,k]),M=(0,r.useMemo)((function(){return z.sort((function(e,t){return ve[j]*(e[j]>t[j]?1:-1)}))}),[z,j]),H=(0,r.useMemo)((function(){return z.filter((function(e){var t=e.position;return Boolean(t)}))}),[z]),I=function(e){return(0,r.useMemo)((function(){return h().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return h().marker([n,r])}))).getBounds()}),[])}([{position:{lat:"52.1530829",lng:"21.1104411"}}]),D=fe((0,r.useState)((function(){return I.getCenter()})),2),Y=D[0],G=D[1],Q=(0,r.useMemo)((function(){return H.filter((function(e){var t=e.position;return Y.distanceTo(t)<1e3*k.radius})).map((function(e){return ye(ye({},e),{},{_like:L.includes(e.id),_hide:N.includes(e.id)})}))}),[H,Y,k.radius,L,N]),U=fe((0,r.useState)((function(){return{map:!1}})),2),R=U[0],X=U[1];return console.log({points:H,center:Y,queries:k,nearby:Q}),r.createElement("div",null,r.createElement("div",null,r.createElement(f.c,{onClick:function(e){return e.preventDefault(),X((function(e){return ye(ye({},e),{},{map:!e.map})}))}},R.map?"Hide map":"Show map")," ",R.map&&r.createElement(W,{bounds:I,center:Y,setCenter:G,list:Q,onSelect:function(e){return E((function(t){return ye(ye({},t),{},{search:e})}))}})),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Category"),r.createElement("select",{value:A.category,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{category:t.value})}))}),[])},b.category.map((function(e){return r.createElement("option",{key:e,value:e},e)})))),r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:A.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{search:t.value})}))}),[])})),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:j,onChange:(0,r.useCallback)((function(e){var t=e.target;return x(t.value)}),[])},Object.entries(ve).map((function(e){var t=fe(e,1)[0];return r.createElement("option",{key:t,value:t},t)})))),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:A.showHide,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{showHide:t.checked})}))}),[])}),r.createElement("span",null,"Show hidden")),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:A.onlyLike,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{onlyLike:t.checked})}))}),[])}),r.createElement("span",null,"Only likes")),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Location"),r.createElement("select",{value:A.location,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return ye(ye({},e),{},{location:t})}))}),[])},b.location.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Road"),r.createElement("select",{value:A.road,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return ye(ye({},e),{},{road:t})}))}),[])},b.road.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Building"),r.createElement("select",{value:A.building,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return ye(ye({},e),{},{building:t})}))}),[])},b.building.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Area From"),r.createElement("input",{type:"range",list:"area-list",min:Ee[0],max:Ee[Ee.length-1],value:A.areaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.areaTo,r=me(e,ne),a=Number(t.value);return ye(ye({},r),{},{areaFrom:a,areaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"area-list"},Ee.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Area To"),r.createElement("input",{type:"range",list:"area-list",min:Ee[0],max:Ee[Ee.length-1],value:A.areaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.areaFrom,r=me(e,re),a=Number(t.value);return ye(ye({},r),{},{areaFrom:a>n?n:a,areaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.areaFrom)," - ").concat((new Intl.NumberFormat).format(A.areaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Terrain Area From"),r.createElement("input",{type:"range",list:"terrain-area-list",min:Ce[0],max:Ce[Ce.length-1],value:A.terrainAreaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.terrainAreaTo,r=me(e,ae),a=Number(t.value);return ye(ye({},r),{},{terrainAreaFrom:a,terrainAreaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"terrain-area-list"},Ce.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Terrain Area To"),r.createElement("input",{type:"range",list:"terrain-area-list",min:Ce[0],max:Ce[Ce.length-1],value:A.terrainAreaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.terrainAreaFrom,r=me(e,oe),a=Number(t.value);return ye(ye({},r),{},{terrainAreaFrom:a>n?n:a,terrainAreaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.terrainAreaFrom)," - ").concat((new Intl.NumberFormat).format(A.terrainAreaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:Ae[0],max:Ae[Ae.length-1],value:A.priceFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.priceTo,r=me(e,ie),a=Number(t.value);return ye(ye({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"price-list"},Ae.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:Ae[0],max:Ae[Ae.length-1],value:A.priceTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.priceFrom,r=me(e,le),a=Number(t.value);return ye(ye({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.priceFrom)," - ").concat((new Intl.NumberFormat).format(A.priceTo)," PLN"))))),r.createElement("div",null,"Found ".concat(z.length," properties out of a total of ").concat(y.length)),r.createElement("ol",null,M.slice(0,100).map((function(e){return r.createElement("li",{key:e.id,className:w()($.Row,L.includes(e.id)&&$.Like,N.includes(e.id)&&$.Hide)},!N.includes(e.id)&&r.createElement(m.M,{className:$.Gallery,images:e.images}),r.createElement(xe,se({},e,{hide:N,setHide:B,like:L,setLike:P,setResults:g})),!N.includes(e.id)&&r.createElement(Se,e),Object.entries(e._history||{}).reverse().map((function(e){var t=fe(e,2),n=t[0],a=t[1];return r.createElement(Te,se({key:n,_updated:Number(n)},a))})))}))))}function Oe(e){var t=e.children,n=me(e,ce);return r.createElement("span",null,r.createElement("button",n,t))}function je(e){var t=e.children,n=me(e,ue);return r.createElement("label",null,r.createElement("input",se({type:"checkbox"},n)),r.createElement("span",null,t))}function xe(e){var t=e.id,n=e.canonical,a=e.coordinates,o=e.price,i=e.title,l=e.hide,c=e.setHide,s=e.like,m=e.setLike,d=e.setResults,h=e._address,y=e._created,g=e._updated,b=void 0===g?0:g,v=e._checked,A=void 0===v?0:v,E=fe((0,r.useState)(!1),2),C=E[0],k=E[1],_=fe((0,r.useState)(!1),2),O=_[0],j=_[1],x=(0,r.useCallback)((function(){k(!0),requestIdleCallback((function(){return confirm("Confirm to delete permanently")?fetch("api/properties/remove.json?id=".concat(t)).then((function(){return d((function(e){return e.filter((function(e){return e.id!==t}))}))})):k(!1)}))}),[t]);return r.createElement("div",{className:w()($.Summary,C&&$.Removed)},r.createElement("div",null,r.createElement("div",{className:$.Sidebar},r.createElement(je,{checked:O,onChange:function(e){return j(e.target.checked)}},"Distance"),r.createElement(je,{checked:s.includes(t),onChange:function(e){return fetch("api/properties/like.json?id=".concat(t)),m((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Like"),r.createElement(je,{checked:l.includes(t),onChange:function(e){return fetch("api/properties/hide.json?id=".concat(t)),c((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Hide"),r.createElement(Oe,{onClick:x},"Remove")),r.createElement("div",null,(0,u.E9)(y,"yyyy-MM-dd HH:mm"),b>0&&" updated: ".concat((0,u.E9)(b,"yyyy-MM-dd HH:mm")),A>0&&" checked: ".concat((0,u.E9)(A,"yyyy-MM-dd HH:mm")))),r.createElement("div",{style:{clear:"right"}},a&&r.createElement(p.cw,{coordinates:a}),r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(o)," PLN")),r.createElement("h3",null,r.createElement(f.c,{href:n},i)," ")),r.createElement("h5",null,a&&r.createElement(p.Y7,{coordinates:a}),a&&r.createElement(p.oB,{coordinates:a},h&&" ".concat(h.join(" / ")))))}function Se(e){var t=e.description,n=e.parameters,a=fe((0,r.useState)(!1),2),o=a[0],i=a[1];return r.createElement("div",{className:$.Details},r.createElement(c.c,{ellipsis:r.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),i(!0)}},"..."),lines:!o&&3},t.map((function(e,t){return r.createElement("p",{key:t},e)}))),r.createElement("ul",null,n.map((function(e,t){var n=e.label,a=e.value;return r.createElement("li",{key:t},n,": ",r.createElement("b",null,a))}))))}function Te(e){var t=e.price,n=e._updated;return r.createElement("div",{className:$.History},r.createElement("div",null,r.createElement("div",{className:$.Sidebar},r.createElement("h5",null,"".concat((new Intl.NumberFormat).format(t)," PLN"))),r.createElement("div",null,(0,u.E9)(n,"yyyy-MM-dd HH:mm"))))}function Ne(){return r.createElement("div",{className:$.Section},r.createElement("h2",null,"Properties"),r.createElement(_e,null))}},1987:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(2876),a=n.n(r),o=n(1849),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),i.locals={};const l=i},8276:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(2876),a=n.n(r),o=n(1849),i=n.n(o),l=n(192),c=i()(a());c.i(l.c),c.push([e.id,".fmu5OTC8YuGNxvhVWLQY{height:75vh;border:2px solid red}.fmu5OTC8YuGNxvhVWLQY header{font-weight:bold}.cXdsM8XDHY8s8_ZISLLs{padding:0 0 0 210px;min-height:200px}.cXdsM8XDHY8s8_ZISLLs .G1eoJjQ_TUQvlMdXoYXW{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}","",{version:3,sources:["webpack://./src/containers/Properties/Map.module.scss"],names:[],mappings:"AAEA,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA,CAeJ,sBACE,mBAAA,CACA,gBAAA,CAEA,4CACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n\n  // .Circle {\n  //   color: purple;\n  //   fill: currentColor;\n  //   stroke: currentColor;\n  //   &.Like {\n  //     color: blueviolet;\n  //   }\n  //   &.Hide {\n  //     opacity: 0.5;\n  //   }\n  // }\n}\n.Summary {\n  padding: 0 0 0 210px;\n  min-height: 200px;\n\n  .Gallery {\n    position: absolute;\n    margin-top: -2px;\n    margin-left: -214px;\n    width: 200px;\n    height: 200px;\n  }\n}\n'],sourceRoot:""}]),c.locals={Map:"fmu5OTC8YuGNxvhVWLQY",Summary:"cXdsM8XDHY8s8_ZISLLs",Gallery:"G1eoJjQ_TUQvlMdXoYXW"};const u=c},8836:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(2876),a=n.n(r),o=n(1849),i=n.n(o)()(a());i.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0 .5em 220px;border:2px solid rgba(0,0,0,0);margin:.5em;min-height:196px}.bUNjBJTWIMSq_XWNswT2.TXzld0_Enrx67356XQvV{border-color:#8a2be2}.bUNjBJTWIMSq_XWNswT2.yknHg6Kx6g072wclMnRw{opacity:.5;min-height:0}.e3KhqV06cOMe70OduX67{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy.Q4BoWvIONP1cT09G0bdo{opacity:.5}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h5{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy .OZ2Fnz11BkBbwH0I6IEx{float:right}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}.K5RBVDM72Qt0DbrWbkh3{clear:both;border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.K5RBVDM72Qt0DbrWbkh3 .OZ2Fnz11BkBbwH0I6IEx{float:right}.K5RBVDM72Qt0DbrWbkh3 h5{float:right;margin-block-start:0;margin-block-end:0}","",{version:3,sources:["webpack://./src/containers/Properties/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,8BAAA,CACA,WAAA,CACA,gBAAA,CACA,2CACE,oBAAA,CAEF,2CACE,UAAA,CACA,YAAA,CAGJ,sBACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,2CACE,UAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,4CACE,WAAA,CAGJ,sBACE,+BAAA,CACA,mBAAA,CAEA,wBACE,QAAA,CAGJ,sBACE,UAAA,CACA,+BAAA,CACA,mBAAA,CACA,4CACE,WAAA,CAEF,yBACE,WAAA,CACA,oBAAA,CACA,kBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0 0.5em 220px;\n  border: 2px solid transparent;\n  margin: 0.5em;\n  min-height: 196px;\n  &.Like {\n    border-color: blueviolet;\n  }\n  &.Hide {\n    opacity: 0.5;\n    min-height: 0;\n  }\n}\n.Gallery {\n  position: absolute;\n  margin-top: -2px;\n  margin-left: -214px;\n  width: 200px;\n  height: 200px;\n}\n.Summary {\n  &.Removed {\n    opacity: 0.5;\n  }\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  .Sidebar {\n    float: right;\n  }\n}\n.Details {\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n\n  p {\n    margin: 0;\n  }\n}\n.History {\n  clear: both;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n  .Sidebar {\n    float: right;\n  }\n  h5 {\n    float: right;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Like:"TXzld0_Enrx67356XQvV",Hide:"yknHg6Kx6g072wclMnRw",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Removed:"Q4BoWvIONP1cT09G0bdo",Sidebar:"OZ2Fnz11BkBbwH0I6IEx",Details:"GzN8lDh8Bf0lo_aG_yN4",History:"K5RBVDM72Qt0DbrWbkh3"};const l=i}}]);
//# sourceMappingURL=860.js.map