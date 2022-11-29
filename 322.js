/*! For license information please see 322.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[322],{2700:(e,t,n)=>{n.d(t,{D:()=>k,CO:()=>w});var r=n(2784),a=n(1698),o=n(6121),i=n(3645),l=n(7370),c=n(9725),u=(n(2779),n(6062)),s=n.n(u),m=n(4036),f=n.n(m),p=n(6793),d=n.n(p),h=n(7892),g=n.n(h),y=n(1173),v=n.n(y),b=n(2464),A=n.n(b),E=n(2091),C={};function k(e){var t=e.position,n=e.children,i=e.setPosition,l=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return{dragend:function(){var e=l.current;null!=e&&i(e.getLatLng())}}}),[]);return r.createElement(a.J,{draggable:!0,eventHandlers:c,position:t,ref:l},r.createElement(o.u,null,n))}function w(){var e=(0,i.Sx)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(l.G,{icon:c.KS0}))))}C.styleTagTransform=A(),C.setAttributes=g(),C.insert=d().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=v(),s()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals},9322:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Pe});var r=n(2784),a=n(1148),o=n(7984),i=n(9369),l=n(8871),c=n(7370),u=n(9725),s=n(8283),m=n(5016),f=n(357),p=n(5726),d=n(891),h=n(5062),g=n.n(h),y=n(6604),v=n(3459),b=n(1698),A=n(3340),E=n(315),C=n.n(E),k=n(2700),w=n(2779),_=n.n(w),O=n(6062),j=n.n(O),x=n(4036),S=n.n(x),N=n(6793),T=n.n(N),B=n(7892),F=n.n(B),L=n(1173),P=n.n(L),z=n(2464),M=n.n(z),H=n(190),I={};I.styleTagTransform=M(),I.setAttributes=F(),I.insert=T().bind(null,"head"),I.domAPI=S(),I.insertStyleElement=P(),j()(H.Z,I);const D=H.Z&&H.Z.locals?H.Z.locals:void 0;var G=["id","position","_like","_hide"];function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e){var t=e.id,n=e.onSelect,a=e.canonical,o=e.distance,i=e.price,l=e.title,c=e.images,u=e._address,s=e._created,f=e._updated,h=e._checked;return r.createElement("div",{className:D.Summary},r.createElement(p.r,{className:D.Gallery,images:c}),r.createElement("h3",null,"[",r.createElement(d.r,{onClick:function(e){return e.preventDefault(),n(t)}},t),"]"," ",r.createElement(d.r,{href:a},l)," ",r.createElement("span",null,"(",o," km)")),r.createElement("div",null,(0,m.Z)(s,"yyyy-MM-dd HH:mm"),f&&" updated: ".concat((0,m.Z)(f,"yyyy-MM-dd HH:mm")),h&&" checked: ".concat((0,m.Z)(h,"yyyy-MM-dd HH:mm"))),r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(i)," PLN")),u&&r.createElement("h6",null,u.join(" / ")))}function W(e){var t=e.bounds,a=e.center,o=e.setCenter,i=e.list,l=e.onSelect;(0,r.useEffect)((function(){delete g().Icon.Default.prototype._getIconUrl,g().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var c=(0,r.useMemo)((function(){return r.createElement(y.h,{bounds:t,zoom:13,className:_()(D.Map)},r.createElement(v.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(k.D,{position:a,setPosition:o},"".concat(a.lat,",").concat(a.lng)),r.createElement(C(),{chunkedLoading:!0},i.map((function(e){var t=e.id,o=e.position,i=(e._like,e._hide,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,G));return r.createElement(b.J,{key:t,position:o,icon:new(g().Icon)({iconUrl:i.images.length>0?i.images[0]:n(379).Z,iconSize:[48,48]})},r.createElement(A.G,{minWidth:400},r.createElement(Y,Z({id:t,onSelect:l,distance:a.distanceTo(o).toFixed(0)/1e3},i))))}))),r.createElement(k.CO,null))}),[i,a]);return r.createElement("div",{className:_()(D.Layout),onClick:function(e){return(t=e.target.closest("a"))&&"#close"===t.getAttribute("href")&&e.preventDefault();var t}},c)}var U=n(195);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Q=["parameters"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===R(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){return U.z.object({address:U.z.record(U.z.string(),U.z.union([U.z.string(),U.z.number()])),id:U.z.string(),information:U.z.array(U.z.object({label:U.z.string(),unit:U.z.string(),values:U.z.array(U.z.string())})).optional(),location:U.z.array(U.z.string()),parameters:U.z.array(U.z.object({label:U.z.string(),value:U.z.string()}))}).transform((function(e){var t=e.parameters,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Q);return J({parameters:t.concat(n.information?n.information.filter((function(e){return e.values.length>0})).map((function(e){var t=e.label,n=e.values,r=e.unit;return{label:t,value:n.join(", ").concat(r)}})):[])},n)})).transform((function(e){return J(J({},e),{},{_information:e.information?e.information.filter((function(e){return e.values.length>0})).reduce((function(e,t){var n=t.label,r=t.values;return Object.assign(e,V({},n,r))}),{}):null,_parameters:e.parameters.reduce((function(e,t){var n=t.label,r=t.value;return Object.assign(e,V({},n,r))}),{})})})).transform((function(t){var n,r,a,o,i,l,c,u,s=t.address,m=t.location,f=t.parameters,p=t._information,d=t._parameters;return{_area:Number(null!=p&&null!==(n=p.area)&&void 0!==n&&n.length?p.area[0]:(null===(r=d["Powierzchnia w m2"])||void 0===r?void 0:r.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_terrain_area:Number(null!=p&&null!==(a=p.terrain_area)&&void 0!==a&&a.length?p.terrain_area[0]:(null===(o=d["Powierzchnia działki w m2"])||void 0===o?void 0:o.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_address:s?["lokalizacja_kraj","lokalizacja_region","lokalizacja_powiat","lokalizacja_gmina","lokalizacja_miejscowosc","lokalizacja_ulica"].map((function(e){return s[e]})).filter(Boolean):null,_location:m.join(", "),road:null!=p&&null!==(i=p.access_types)&&void 0!==i&&i.length?null===(l=p.access_types)||void 0===l?void 0:l.map((function(e){return{"access_types::asphalt":"asfaltowa","access_types::dirt":"polna","access_types::hard_surfaced":"utwardzana","access_types::soft_surfaced":"nieutwardzona"}[e]||console.log({value:e})}))[0]:d["Droga dojazdowa"],building:null!=p&&null!==(c=p.building_type)&&void 0!==c&&c.length?null===(u=p.building_type)||void 0===u?void 0:u.map((function(e){return{"building_type::detached":"wolnostojący","building_type::ribbon":"szeregowy","building_type::semi_detached":"bliźniak","building_type::residence":"pałac/dworek/willa","building_type::tenement":"kamienica"}[e]||console.log({value:e})}))[0]:d["Typ budynku"],parameters:f,coordinates:e.coordinates||(s["lokalizacja_szerokosc-geograficzna-y"]?{latitude:s["lokalizacja_szerokosc-geograficzna-y"],longitude:s["lokalizacja_dlugosc-geograficzna-x"]}:null)}})).parse(e)},K=n(2039),$={};$.styleTagTransform=M(),$.setAttributes=F(),$.insert=T().bind(null,"head"),$.domAPI=S(),$.insertStyleElement=P(),j()(K.Z,$);const ee=K.Z&&K.Z.locals?K.Z.locals:void 0;function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ne=["search"],re=["areaTo"],ae=["areaFrom"],oe=["terrainAreaTo"],ie=["terrainAreaFrom"],le=["priceTo"],ce=["priceFrom"],ue=["children"],se=["children"];function me(){return(me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?de(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function he(){he=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),l=new _(a||[]);return r(i,"_invoke",{value:E(e,n,l)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var m={};function f(){}function p(){}function d(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(O([])));y&&y!==t&&n.call(y,o)&&(h=y);var v=d.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function a(r,o,i,l){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==te(m)&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){a(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=C(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function C(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,r(v,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=c(d,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(A.prototype),c(A.prototype,i,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new A(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),c(v,l,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==te(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==te(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===te(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var Ae=[1,3,5,10,20,50,100,500],Ee={id:1,price:1,title:1,_area:1,_terrain_area:1,_created:-1,_updated:-1},Ce=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6,25e5,3e6,4e6,5e6],ke=[0,50,100,150,200,250,300,400,500,600,700,800,900],we=[0,250,500,750,1e3,1500,2e3,2500,3e3,3500,4e3,5e3],_e=(0,f.k)(function(){var e,t=(e=he().mark((function e(t){var n;return he().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{hide:e.hide,like:e.like,results:e.results.map((function(e){return ye(ye({},e),q(e))}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){be(o,r,a,i,l,"next",e)}function l(e){be(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),Oe=function(e){return ye(ye({},e),{},{position:e.coordinates?{lat:e.coordinates.latitude,lng:e.coordinates.longitude}:null,_search:e.title.toLowerCase(),_price:e.price,_updated:e._updated||0})};function je(e){var t=e.version,n=void 0===t?"v1":t,c=_e.read(n),u=c.results,s=c.hide,m=c.like,f=pe((0,r.useState)((function(){return u})),2),h=f[0],y=f[1],v=(0,r.useMemo)((function(){return{category:[""].concat(h.map((function(e){return e.category})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),location:[""].concat(h.map((function(e){return e._location})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),road:[""].concat(h.map((function(e){return e.road})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),building:[""].concat(h.map((function(e){return e.building})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[h]),b=pe((0,r.useState)((function(){return{category:v.category[0],location:v.location[0],road:v.road[0],building:v.building[0],search:"",showHide:!0,onlyLike:!1,priceFrom:Ce[0],priceTo:Ce[Ce.length-4],areaFrom:ke[0],areaTo:ke[ke.length-1],terrainAreaFrom:we[0],terrainAreaTo:we[we.length-1],radius:Ae[Ae.length-1]}})),2),A=b[0],E=b[1],C=pe((0,r.useState)((function(){return A})),2),k=C[0],w=C[1],O=pe((0,r.useState)((function(){return Object.keys(Ee)[5]})),2),j=O[0],x=O[1],S=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=S.pipe((0,o.U)((function(e){var t=e.search,n=fe(e,ne);return JSON.stringify(ye(ye(ye({},k),n),{},{search:t.trim()}))})),(0,i.x)(),(0,l.b)(400)).subscribe((function(e){return w((function(t){return ye(ye({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[S]),(0,r.useEffect)((function(){S.next(A)}),[A]),console.log({options:v,filters:A,results:h});var N=pe((0,r.useState)(s),2),T=N[0],B=N[1],F=pe((0,r.useState)(m),2),L=F[0],P=F[1],z=(0,r.useMemo)((function(){return h.map(Oe).filter((function(e){return(!k.category||[e.category].includes(k.category))&&(!k.location||[e._location].includes(k.location))&&(!k.road||[e.road].includes(k.road))&&(!k.building||[e.building].includes(k.building))&&(!k.onlyLike||L.includes(e.id))&&(k.showHide||!T.includes(e.id))&&(e._search.match(k.search)||k.search===String(e.id))&&(k.areaTo===ke[0]||k.areaFrom<=e._area&&e._area<=k.areaTo)&&(k.terrainAreaTo===we[0]||k.terrainAreaFrom<=e._terrain_area&&e._terrain_area<=k.terrainAreaTo)&&(k.priceTo===Ce[0]||k.priceFrom<=e._price&&e._price<=k.priceTo)}))}),[h,k]),M=(0,r.useMemo)((function(){return z.sort((function(e,t){return Ee[j]*(e[j]>t[j]?1:-1)}))}),[z,j]),H=(0,r.useMemo)((function(){return z.filter((function(e){var t=e.position;return Boolean(t)}))}),[z]),I=function(e){return(0,r.useMemo)((function(){return g().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return g().marker([n,r])}))).getBounds()}),[])}([{position:{lat:"52.1530829",lng:"21.1104411"}}]),D=pe((0,r.useState)((function(){return I.getCenter()})),2),G=D[0],Z=D[1],Y=(0,r.useMemo)((function(){return H.filter((function(e){var t=e.position;return G.distanceTo(t)<1e3*k.radius})).map((function(e){return ye(ye({},e),{},{_like:L.includes(e.id),_hide:T.includes(e.id)})}))}),[H,G,k.radius,L,T]),U=pe((0,r.useState)((function(){return{map:!1}})),2),R=U[0],Q=U[1];return console.log({points:H,center:G,queries:k,nearby:Y}),r.createElement("div",null,r.createElement("div",null,r.createElement(d.r,{onClick:function(e){return e.preventDefault(),Q((function(e){return ye(ye({},e),{},{map:!e.map})}))}},R.map?"Hide map":"Show map")," ",R.map&&r.createElement(W,{bounds:I,center:G,setCenter:Z,list:Y,onSelect:function(e){return E((function(t){return ye(ye({},t),{},{search:e})}))}})),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Category"),r.createElement("select",{value:A.category,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{category:t.value})}))}),[])},v.category.map((function(e){return r.createElement("option",{key:e,value:e},e)})))),r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:A.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{search:t.value})}))}),[])})),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:j,onChange:(0,r.useCallback)((function(e){var t=e.target;return x(t.value)}),[])},Object.entries(Ee).map((function(e){var t=pe(e,1)[0];return r.createElement("option",{key:t,value:t},t)})))),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:A.showHide,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{showHide:t.checked})}))}),[])}),r.createElement("span",null,"Show hidden")),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:A.onlyLike,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){return ye(ye({},e),{},{onlyLike:t.checked})}))}),[])}),r.createElement("span",null,"Only likes")),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Location"),r.createElement("select",{value:A.location,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return ye(ye({},e),{},{location:t})}))}),[])},v.location.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Road"),r.createElement("select",{value:A.road,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return ye(ye({},e),{},{road:t})}))}),[])},v.road.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Building"),r.createElement("select",{value:A.building,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return E((function(e){return ye(ye({},e),{},{building:t})}))}),[])},v.building.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Area From"),r.createElement("input",{type:"range",list:"area-list",min:ke[0],max:ke[ke.length-1],value:A.areaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.areaTo,r=fe(e,re),a=Number(t.value);return ye(ye({},r),{},{areaFrom:a,areaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"area-list"},ke.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Area To"),r.createElement("input",{type:"range",list:"area-list",min:ke[0],max:ke[ke.length-1],value:A.areaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.areaFrom,r=fe(e,ae),a=Number(t.value);return ye(ye({},r),{},{areaFrom:a>n?n:a,areaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.areaFrom)," - ").concat((new Intl.NumberFormat).format(A.areaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Terrain Area From"),r.createElement("input",{type:"range",list:"terrain-area-list",min:we[0],max:we[we.length-1],value:A.terrainAreaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.terrainAreaTo,r=fe(e,oe),a=Number(t.value);return ye(ye({},r),{},{terrainAreaFrom:a,terrainAreaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"terrain-area-list"},we.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Terrain Area To"),r.createElement("input",{type:"range",list:"terrain-area-list",min:we[0],max:we[we.length-1],value:A.terrainAreaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.terrainAreaFrom,r=fe(e,ie),a=Number(t.value);return ye(ye({},r),{},{terrainAreaFrom:a>n?n:a,terrainAreaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.terrainAreaFrom)," - ").concat((new Intl.NumberFormat).format(A.terrainAreaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:Ce[0],max:Ce[Ce.length-1],value:A.priceFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.priceTo,r=fe(e,le),a=Number(t.value);return ye(ye({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"price-list"},Ce.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:Ce[0],max:Ce[Ce.length-1],value:A.priceTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return E((function(e){var n=e.priceFrom,r=fe(e,ce),a=Number(t.value);return ye(ye({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(A.priceFrom)," - ").concat((new Intl.NumberFormat).format(A.priceTo)," PLN"))))),r.createElement("div",null,"Found ".concat(z.length," properties out of a total of ").concat(h.length)),r.createElement("ol",null,M.slice(0,100).map((function(e){return r.createElement("li",{key:e.id,className:_()(ee.Row,L.includes(e.id)&&ee.Like,T.includes(e.id)&&ee.Hide)},!T.includes(e.id)&&r.createElement(p.r,{className:ee.Gallery,images:e.images}),r.createElement(Be,me({},e,{hide:T,setHide:B,like:L,setLike:P,setResults:y})),!T.includes(e.id)&&r.createElement(Fe,e),Object.entries(e._history||{}).reverse().map((function(e){var t=pe(e,2),n=t[0],a=t[1];return r.createElement(Le,me({key:n,_updated:Number(n)},a))})))}))))}function xe(e){var t=e.coordinates,n=t.latitude,a=t.longitude,o="//www.google.pl/maps?t=k&q=loc:".concat(n,"+").concat(a,"&hl=pl");return r.createElement(d.r,{href:o,rel:"",target:"map",style:{margin:"0 .25em"}},r.createElement(c.G,{icon:u.FGq}))}function Se(e){var t=e.coordinates,n=t.latitude,a=t.longitude,o="".concat(n,",").concat(a),i="//www.google.com/maps/dir/?api=1&origin=".concat(encodeURIComponent(o),"&destination=").concat(encodeURIComponent("52.2268,20.9921"),"&travelmode=").concat(encodeURIComponent("driving"),"&hl=pl");return r.createElement(d.r,{href:i,rel:"",target:"map",style:{margin:"0 .25em"}},r.createElement(c.G,{icon:u.KS0}))}function Ne(e){var t=e.children,n=fe(e,ue);return r.createElement("span",null,r.createElement("button",n,t))}function Te(e){var t=e.children,n=fe(e,se);return r.createElement("label",null,r.createElement("input",me({type:"checkbox"},n)),r.createElement("span",null,t))}function Be(e){var t=e.id,n=e.canonical,a=e.coordinates,o=e.price,i=e.title,l=e.hide,c=e.setHide,u=e.like,s=e.setLike,f=e.setResults,p=e._address,h=e._created,g=e._updated,y=void 0===g?0:g,v=e._checked,b=void 0===v?0:v,A=pe((0,r.useState)(!1),2),E=A[0],C=A[1],k=(0,r.useCallback)((function(){C(!0),requestIdleCallback((function(){return confirm("Confirm to delete permanently")?fetch("api/properties/remove.json?id=".concat(t)).then((function(){return f((function(e){return e.filter((function(e){return e.id!==t}))}))})):C(!1)}))}),[t]);return r.createElement("div",{className:_()(ee.Summary,E&&ee.Removed)},r.createElement("div",null,r.createElement("div",{className:ee.Sidebar},r.createElement(Te,{checked:u.includes(t),onChange:function(e){return fetch("api/properties/like.json?id=".concat(t)),s((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Like"),r.createElement(Te,{checked:l.includes(t),onChange:function(e){return fetch("api/properties/hide.json?id=".concat(t)),c((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Hide"),r.createElement(Ne,{onClick:k},"Remove")),r.createElement("div",null,(0,m.Z)(h,"yyyy-MM-dd HH:mm"),y>0&&" updated: ".concat((0,m.Z)(y,"yyyy-MM-dd HH:mm")),b>0&&" checked: ".concat((0,m.Z)(b,"yyyy-MM-dd HH:mm")))),r.createElement("div",{style:{clear:"right"}},r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(o)," PLN")),r.createElement("h3",null,r.createElement(d.r,{href:n},i)," ",a&&r.createElement(xe,{coordinates:a}),a&&r.createElement(Se,{coordinates:a}))),p&&r.createElement("h6",null,p.join(" / ")))}function Fe(e){var t=e.description,n=e.parameters,a=pe((0,r.useState)(!1),2),o=a[0],i=a[1];return r.createElement("div",{className:ee.Details},r.createElement(s.Z,{ellipsis:r.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),i(!0)}},"..."),lines:!o&&3},t.map((function(e,t){return r.createElement("p",{key:t},e)}))),r.createElement("ul",null,n.map((function(e,t){var n=e.label,a=e.value;return r.createElement("li",{key:t},n,": ",r.createElement("b",null,a))}))))}function Le(e){var t=e.price,n=e._updated;return r.createElement("div",{className:ee.History},r.createElement("div",null,r.createElement("div",{className:ee.Sidebar},r.createElement("h5",null,"".concat((new Intl.NumberFormat).format(t)," PLN"))),r.createElement("div",null,(0,m.Z)(n,"yyyy-MM-dd HH:mm"))))}function Pe(){return r.createElement("div",{className:ee.Section},r.createElement("h2",null,"Properties"),r.createElement(je,null))}},2091:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),i.locals={};const l=i},190:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o),l=n(9138),c=i()(a());c.i(l.Z),c.push([e.id,".fmu5OTC8YuGNxvhVWLQY{height:75vh;border:2px solid red}.fmu5OTC8YuGNxvhVWLQY header{font-weight:bold}.cXdsM8XDHY8s8_ZISLLs{padding:0 0 0 210px;min-height:200px}.cXdsM8XDHY8s8_ZISLLs .G1eoJjQ_TUQvlMdXoYXW{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}","",{version:3,sources:["webpack://./src/containers/Properties/Map.module.scss"],names:[],mappings:"AAEA,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA,CAeJ,sBACE,mBAAA,CACA,gBAAA,CAEA,4CACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n\n  // .Circle {\n  //   color: purple;\n  //   fill: currentColor;\n  //   stroke: currentColor;\n  //   &.Like {\n  //     color: blueviolet;\n  //   }\n  //   &.Hide {\n  //     opacity: 0.5;\n  //   }\n  // }\n}\n.Summary {\n  padding: 0 0 0 210px;\n  min-height: 200px;\n\n  .Gallery {\n    position: absolute;\n    margin-top: -2px;\n    margin-left: -214px;\n    width: 200px;\n    height: 200px;\n  }\n}\n'],sourceRoot:""}]),c.locals={Map:"fmu5OTC8YuGNxvhVWLQY",Summary:"cXdsM8XDHY8s8_ZISLLs",Gallery:"G1eoJjQ_TUQvlMdXoYXW"};const u=c},2039:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0 .5em 220px;border:2px solid rgba(0,0,0,0);margin:.5em;min-height:196px}.bUNjBJTWIMSq_XWNswT2.TXzld0_Enrx67356XQvV{border-color:#8a2be2}.bUNjBJTWIMSq_XWNswT2.yknHg6Kx6g072wclMnRw{opacity:.5;min-height:0}.e3KhqV06cOMe70OduX67{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy.Q4BoWvIONP1cT09G0bdo{opacity:.5}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h6{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy .OZ2Fnz11BkBbwH0I6IEx{float:right}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}.K5RBVDM72Qt0DbrWbkh3{clear:both;border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.K5RBVDM72Qt0DbrWbkh3 .OZ2Fnz11BkBbwH0I6IEx{float:right}.K5RBVDM72Qt0DbrWbkh3 h5{float:right;margin-block-start:0;margin-block-end:0}","",{version:3,sources:["webpack://./src/containers/Properties/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,8BAAA,CACA,WAAA,CACA,gBAAA,CACA,2CACE,oBAAA,CAEF,2CACE,UAAA,CACA,YAAA,CAGJ,sBACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,2CACE,UAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,4CACE,WAAA,CAGJ,sBACE,+BAAA,CACA,mBAAA,CAEA,wBACE,QAAA,CAGJ,sBACE,UAAA,CACA,+BAAA,CACA,mBAAA,CACA,4CACE,WAAA,CAEF,yBACE,WAAA,CACA,oBAAA,CACA,kBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0 0.5em 220px;\n  border: 2px solid transparent;\n  margin: 0.5em;\n  min-height: 196px;\n  &.Like {\n    border-color: blueviolet;\n  }\n  &.Hide {\n    opacity: 0.5;\n    min-height: 0;\n  }\n}\n.Gallery {\n  position: absolute;\n  margin-top: -2px;\n  margin-left: -214px;\n  width: 200px;\n  height: 200px;\n}\n.Summary {\n  &.Removed {\n    opacity: 0.5;\n  }\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h6 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  .Sidebar {\n    float: right;\n  }\n}\n.Details {\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n\n  p {\n    margin: 0;\n  }\n}\n.History {\n  clear: both;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n  .Sidebar {\n    float: right;\n  }\n  h5 {\n    float: right;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Like:"TXzld0_Enrx67356XQvV",Hide:"yknHg6Kx6g072wclMnRw",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Removed:"Q4BoWvIONP1cT09G0bdo",Sidebar:"OZ2Fnz11BkBbwH0I6IEx",Details:"GzN8lDh8Bf0lo_aG_yN4",History:"K5RBVDM72Qt0DbrWbkh3"};const l=i}}]);
//# sourceMappingURL=322.js.map