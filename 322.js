/*! For license information please see 322.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[322],{2700:(e,t,n)=>{n.d(t,{np:()=>j,D:()=>S,CO:()=>N});var r=n(2784),a=n(1698),o=n(6121),i=n(3645),l=n(9530),c=n(5096),u=n(2779),s=n.n(u),m=n(6062),f=n.n(m),d=n(4036),p=n.n(d),h=n(6793),g=n.n(h),y=n(7892),v=n.n(y),b=n(1173),A=n.n(b),E=n(2464),C=n.n(E),k=n(2091),w={};w.styleTagTransform=C(),w.setAttributes=v(),w.insert=g().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=A(),f()(k.Z,w);const _=k.Z&&k.Z.locals?k.Z.locals:void 0;function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){var t=e.map,n=O((0,r.useState)((function(){return{position:t.getCenter(),zoom:t.getZoom()}})),1)[0],a=O((0,r.useState)(t.getCenter()),2),o=a[0],i=a[1],l=(0,r.useCallback)((function(){t.setView(n.position,n.zoom)}),[t]),c=(0,r.useCallback)((function(){i(t.getCenter())}),[t]),u=(0,r.useCallback)((function(e){var t=e.latlng,n=e.radius;console.log({latlng:t,radius:n})}),[]);return(0,r.useEffect)((function(){return t.on("locationfound",u).on("move",c),function(){t.off("locationfound",u).off("move",c)}}),[t,c]),r.createElement("div",{className:s()(_.DisplayPosition)},"latitude: ",o.lat.toFixed(4),", longitude: ",o.lng.toFixed(4)," ",r.createElement("button",{onClick:l},"Reset"),r.createElement("button",{onClick:function(){return t.locate({setView:!0})}},"Locate"))}function S(e){var t=e.position,n=e.children,i=e.setPosition,l=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return{dragend:function(){var e=l.current;null!=e&&i(e.getLatLng())}}}),[]);return r.createElement(a.J,{draggable:!0,eventHandlers:c,position:t,ref:l},r.createElement(o.u,null,n))}function N(){var e=(0,i.Sx)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(l.G,{icon:c.KS0}))))}},9322:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Be});var r=n(2784),a=n(1148),o=n(7984),i=n(9369),l=n(8871),c=n(9530),u=n(5096),s=n(8283),m=n(539),f=n(357),d=n(6280),p=n(891),h=n(5062),g=n.n(h),y=n(6604),v=n(3459),b=n(1698),A=n(3340),E=n(315),C=n.n(E),k=n(2700),w=n(2779),_=n.n(w),O=n(6062),x=n.n(O),j=n(4036),S=n.n(j),N=n(6793),T=n.n(N),B=n(7892),F=n.n(B),L=n(1173),z=n.n(L),P=n(2464),M=n.n(P),H=n(190),I={};I.styleTagTransform=M(),I.setAttributes=F(),I.insert=T().bind(null,"head"),I.domAPI=S(),I.insertStyleElement=z(),x()(H.Z,I);const D=H.Z&&H.Z.locals?H.Z.locals:void 0;var G=["id","position","_like","_hide"];function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e){var t=e.id,n=e.onSelect,a=e.canonical,o=e.distance,i=e.price,l=e.title,c=e.images,u=e._address,s=e._created,f=e._updated,h=e._checked;return r.createElement("div",{className:D.Summary},r.createElement(d.r,{className:D.Gallery,images:c}),r.createElement("h3",null,"[",r.createElement(p.r,{onClick:function(e){return e.preventDefault(),n(t)}},t),"]"," ",r.createElement(p.r,{href:a},l)," ",r.createElement("span",null,"(",o," km)")),r.createElement("div",null,(0,m.Z)(s,"yyyy-MM-dd HH:mm"),f&&" updated: ".concat((0,m.Z)(f,"yyyy-MM-dd HH:mm")),h&&" checked: ".concat((0,m.Z)(h,"yyyy-MM-dd HH:mm"))),r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(i)," PLN")),u&&r.createElement("h6",null,u.join(" / ")))}function W(e){var t=e.bounds,a=e.center,o=e.setCenter,i=e.list,l=e.onSelect;(0,r.useEffect)((function(){delete g().Icon.Default.prototype._getIconUrl,g().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var c=(0,r.useMemo)((function(){return r.createElement(y.h,{bounds:t,zoom:13,className:_()(D.Map)},r.createElement(v.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(k.D,{position:a,setPosition:o},"".concat(a.lat,",").concat(a.lng)),r.createElement(C(),{chunkedLoading:!0},i.map((function(e){var t=e.id,o=e.position,i=(e._like,e._hide,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,G));return r.createElement(b.J,{key:t,position:o,icon:new(g().Icon)({iconUrl:i.images.length>0?i.images[0]:n(379).Z,iconSize:[48,48]})},r.createElement(A.G,{minWidth:400},r.createElement(Y,Z({id:t,onSelect:l,distance:a.distanceTo(o).toFixed(0)/1e3},i))))}))),r.createElement(k.CO,null))}),[i,a]);return r.createElement("div",{className:_()(D.Layout),onClick:function(e){return(t=e.target.closest("a"))&&"#close"===t.getAttribute("href")&&e.preventDefault();var t}},c)}var U=n(195),X=["parameters"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){return U.z.object({address:U.z.record(U.z.string(),U.z.union([U.z.string(),U.z.number()])),id:U.z.string(),information:U.z.array(U.z.object({label:U.z.string(),unit:U.z.string(),values:U.z.array(U.z.string())})).optional(),location:U.z.array(U.z.string()),parameters:U.z.array(U.z.object({label:U.z.string(),value:U.z.string()}))}).transform((function(e){var t=e.parameters,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,X);return R({parameters:t.concat(n.information?n.information.filter((function(e){return e.values.length>0})).map((function(e){var t=e.label,n=e.values,r=e.unit;return{label:t,value:n.join(", ").concat(r)}})):[])},n)})).transform((function(e){return R(R({},e),{},{_information:e.information?e.information.filter((function(e){return e.values.length>0})).reduce((function(e,t){var n=t.label,r=t.values;return Object.assign(e,J({},n,r))}),{}):null,_parameters:e.parameters.reduce((function(e,t){var n=t.label,r=t.value;return Object.assign(e,J({},n,r))}),{})})})).transform((function(t){var n,r,a,o,i,l,c,u,s=t.address,m=t.location,f=t.parameters,d=t._information,p=t._parameters;return{_area:Number(null!=d&&null!==(n=d.area)&&void 0!==n&&n.length?d.area[0]:(null===(r=p["Powierzchnia w m2"])||void 0===r?void 0:r.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_terrain_area:Number(null!=d&&null!==(a=d.terrain_area)&&void 0!==a&&a.length?d.terrain_area[0]:(null===(o=p["Powierzchnia działki w m2"])||void 0===o?void 0:o.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_address:s?["lokalizacja_kraj","lokalizacja_region","lokalizacja_powiat","lokalizacja_gmina","lokalizacja_miejscowosc","lokalizacja_ulica"].map((function(e){return s[e]})).filter(Boolean):null,_location:m.join(", "),road:null!=d&&null!==(i=d.access_types)&&void 0!==i&&i.length?null===(l=d.access_types)||void 0===l?void 0:l.map((function(e){return{"access_types::asphalt":"asfaltowa","access_types::dirt":"polna","access_types::hard_surfaced":"utwardzana","access_types::soft_surfaced":"nieutwardzona"}[e]||console.log({value:e})}))[0]:p["Droga dojazdowa"],building:null!=d&&null!==(c=d.building_type)&&void 0!==c&&c.length?null===(u=d.building_type)||void 0===u?void 0:u.map((function(e){return{"building_type::detached":"wolnostojący","building_type::ribbon":"szeregowy","building_type::semi_detached":"bliźniak","building_type::residence":"pałac/dworek/willa","building_type::tenement":"kamienica"}[e]||console.log({value:e})}))[0]:p["Typ budynku"],parameters:f,coordinates:e.coordinates||(s["lokalizacja_szerokosc-geograficzna-y"]?{latitude:s["lokalizacja_szerokosc-geograficzna-y"],longitude:s["lokalizacja_dlugosc-geograficzna-x"]}:null)}})).parse(e)},q=n(2039),K={};K.styleTagTransform=M(),K.setAttributes=F(),K.insert=T().bind(null,"head"),K.domAPI=S(),K.insertStyleElement=z(),x()(q.Z,K);const $=q.Z&&q.Z.locals?q.Z.locals:void 0;function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var te=["search"],ne=["areaTo"],re=["areaFrom"],ae=["terrainAreaTo"],oe=["terrainAreaFrom"],ie=["priceTo"],le=["priceFrom"],ce=["children"];function ue(){return(ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function de(){de=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=A(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function m(){}function f(){}function d(){}var p={};l(p,a,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(w([])));g&&g!==t&&n.call(g,a)&&(p=g);var y=d.prototype=m.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==ee(m)&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function A(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,A(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function w(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=d,l(y,"constructor",d),l(d,"constructor",f),f.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(y),l(y,i,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=w,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:w(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var ve=[1,3,5,10,20,50,100,500],be={id:1,price:1,title:1,_area:1,_terrain_area:1,_created:-1,_updated:-1},Ae=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6,25e5,3e6,4e6,5e6],Ee=[0,50,100,150,200,250,300,400,500,600,700,800,900],Ce=[0,250,500,750,1e3,1500,2e3,2500,3e3,3500,4e3,5e3],ke=(0,f.k)(function(){var e,t=(e=de().mark((function e(t){var n;return de().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{hide:e.hide,like:e.like,results:e.results.map((function(e){return he(he({},e),V(e))}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ye(o,r,a,i,l,"next",e)}function l(e){ye(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),we=function(e){return he(he({},e),{},{position:e.coordinates?{lat:e.coordinates.latitude,lng:e.coordinates.longitude}:null,_search:e.title.toLowerCase(),_price:e.price,_updated:e._updated||0})};function _e(e){var t=e.version,n=void 0===t?"v1":t,c=ke.read(n),u=c.results,s=c.hide,m=c.like,f=(0,r.useMemo)((function(){return{category:[""].concat(u.map((function(e){return e.category})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),location:[""].concat(u.map((function(e){return e._location})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),road:[""].concat(u.map((function(e){return e.road})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),building:[""].concat(u.map((function(e){return e.building})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[u]),h=me((0,r.useState)((function(){return{category:f.category[0],location:f.location[0],road:f.road[0],building:f.building[0],search:"",showHide:!0,onlyLike:!1,priceFrom:Ae[0],priceTo:Ae[Ae.length-4],areaFrom:Ee[0],areaTo:Ee[Ee.length-1],terrainAreaFrom:Ce[0],terrainAreaTo:Ce[Ce.length-1],radius:ve[ve.length-1]}})),2),y=h[0],v=h[1],b=me((0,r.useState)((function(){return y})),2),A=b[0],E=b[1],C=me((0,r.useState)((function(){return Object.keys(be)[5]})),2),k=C[0],w=C[1],O=(0,r.useCallback)((function(e){var t=e.target;return w(t.value)}),[]),x=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=x.pipe((0,o.U)((function(e){var t=e.search,n=se(e,te);return JSON.stringify(he(he(he({},A),n),{},{search:t.trim()}))})),(0,i.x)(),(0,l.b)(400)).subscribe((function(e){return E((function(t){return he(he({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[x]),(0,r.useEffect)((function(){x.next(y)}),[y]),console.log({options:f,filters:y,results:u});var j=me((0,r.useState)(s),2),S=j[0],N=j[1],T=me((0,r.useState)(m),2),B=T[0],F=T[1],L=(0,r.useMemo)((function(){return u.map(we).filter((function(e){return(!A.category||[e.category].includes(A.category))&&(!A.location||[e._location].includes(A.location))&&(!A.road||[e.road].includes(A.road))&&(!A.building||[e.building].includes(A.building))&&(!A.onlyLike||B.includes(e.id))&&(A.showHide||!S.includes(e.id))&&(e._search.match(A.search)||A.search===String(e.id))&&(A.areaTo===Ee[0]||A.areaFrom<=e._area&&e._area<=A.areaTo)&&(A.terrainAreaTo===Ce[0]||A.terrainAreaFrom<=e._terrain_area&&e._terrain_area<=A.terrainAreaTo)&&(A.priceTo===Ae[0]||A.priceFrom<=e._price&&e._price<=A.priceTo)}))}),[u,A]),z=(0,r.useMemo)((function(){return L.sort((function(e,t){return be[k]*(e[k]>t[k]?1:-1)}))}),[L,k]),P=(0,r.useMemo)((function(){return L.filter((function(e){var t=e.position;return Boolean(t)}))}),[L]),M=function(e){return(0,r.useMemo)((function(){return g().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return g().marker([n,r])}))).getBounds()}),[])}([{position:{lat:"52.1530829",lng:"21.1104411"}}]),H=me((0,r.useState)((function(){return M.getCenter()})),2),I=H[0],D=H[1],G=(0,r.useMemo)((function(){return P.filter((function(e){var t=e.position;return I.distanceTo(t)<1e3*A.radius})).map((function(e){return he(he({},e),{},{_like:B.includes(e.id),_hide:S.includes(e.id)})}))}),[P,I,A.radius,B,S]),Z=me((0,r.useState)((function(){return{map:!1}})),2),Y=Z[0],U=Z[1];return console.log({points:P,center:I,queries:A,nearby:G}),r.createElement("div",null,r.createElement("div",null,r.createElement(p.r,{onClick:function(e){return e.preventDefault(),U((function(e){return he(he({},e),{},{map:!e.map})}))}},Y.map?"Hide map":"Show map")," ",Y.map&&r.createElement(W,{bounds:M,center:I,setCenter:D,list:G,onSelect:function(e){return v((function(t){return he(he({},t),{},{search:e})}))}})),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Category"),r.createElement("select",{value:y.category,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){return he(he({},e),{},{category:t.value})}))}),[])},f.category.map((function(e){return r.createElement("option",{key:e,value:e},e)})))),r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:y.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){return he(he({},e),{},{search:t.value})}))}),[])})),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:k,onChange:O},Object.entries(be).map((function(e){var t=me(e,1)[0];return r.createElement("option",{key:t,value:t},t)})))),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:y.showHide,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){return he(he({},e),{},{showHide:t.checked})}))}),[])}),r.createElement("span",null,"Show hidden")),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:y.onlyLike,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){return he(he({},e),{},{onlyLike:t.checked})}))}),[])}),r.createElement("span",null,"Only likes")),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Location"),r.createElement("select",{value:y.location,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return v((function(e){return he(he({},e),{},{location:t})}))}),[])},f.location.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Road"),r.createElement("select",{value:y.road,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return v((function(e){return he(he({},e),{},{road:t})}))}),[])},f.road.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Building"),r.createElement("select",{value:y.building,onChange:(0,r.useCallback)((function(e){var t=e.target.value;return v((function(e){return he(he({},e),{},{building:t})}))}),[])},f.building.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Area From"),r.createElement("input",{type:"range",list:"area-list",min:Ee[0],max:Ee[Ee.length-1],value:y.areaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.areaTo,r=se(e,ne),a=Number(t.value);return he(he({},r),{},{areaFrom:a,areaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"area-list"},Ee.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Area To"),r.createElement("input",{type:"range",list:"area-list",min:Ee[0],max:Ee[Ee.length-1],value:y.areaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.areaFrom,r=se(e,re),a=Number(t.value);return he(he({},r),{},{areaFrom:a>n?n:a,areaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(y.areaFrom)," - ").concat((new Intl.NumberFormat).format(y.areaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Terrain Area From"),r.createElement("input",{type:"range",list:"terrain-area-list",min:Ce[0],max:Ce[Ce.length-1],value:y.terrainAreaFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.terrainAreaTo,r=se(e,ae),a=Number(t.value);return he(he({},r),{},{terrainAreaFrom:a,terrainAreaTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"terrain-area-list"},Ce.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Terrain Area To"),r.createElement("input",{type:"range",list:"terrain-area-list",min:Ce[0],max:Ce[Ce.length-1],value:y.terrainAreaTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.terrainAreaFrom,r=se(e,oe),a=Number(t.value);return he(he({},r),{},{terrainAreaFrom:a>n?n:a,terrainAreaTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(y.terrainAreaFrom)," - ").concat((new Intl.NumberFormat).format(y.terrainAreaTo)," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:Ae[0],max:Ae[Ae.length-1],value:y.priceFrom,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.priceTo,r=se(e,ie),a=Number(t.value);return he(he({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[])}),r.createElement("datalist",{id:"price-list"},Ae.map((function(e){return r.createElement("option",{key:e,value:e})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:Ae[0],max:Ae[Ae.length-1],value:y.priceTo,onChange:(0,r.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.priceFrom,r=se(e,le),a=Number(t.value);return he(he({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[])}),r.createElement("span",null,"".concat((new Intl.NumberFormat).format(y.priceFrom)," - ").concat((new Intl.NumberFormat).format(y.priceTo)," PLN"))))),r.createElement("div",null,"Found ".concat(L.length," properties out of a total of ").concat(u.length)),r.createElement("ol",null,z.slice(0,100).map((function(e){return r.createElement("li",{key:e.id,className:_()($.Row,B.includes(e.id)&&$.Like,S.includes(e.id)&&$.Hide)},!S.includes(e.id)&&r.createElement(d.r,{className:$.Gallery,images:e.images}),r.createElement(Se,ue({},e,{hide:S,setHide:N,like:B,setLike:F})),!S.includes(e.id)&&r.createElement(Ne,e),Object.entries(e._history||{}).reverse().map((function(e){var t=me(e,2),n=t[0],a=t[1];return r.createElement(Te,ue({key:n,_updated:Number(n)},a))})))}))))}function Oe(e){var t=e.coordinates,n=t.latitude,a=t.longitude,o="//www.google.pl/maps?t=k&q=loc:".concat(n,"+").concat(a,"&hl=pl");return r.createElement(p.r,{href:o,rel:"",target:"map",style:{margin:"0 .25em"}},r.createElement(c.G,{icon:u.FGq}))}function xe(e){var t=e.coordinates,n=t.latitude,a=t.longitude,o="".concat(n,",").concat(a),i="//www.google.com/maps/dir/?api=1&origin=".concat(encodeURIComponent(o),"&destination=").concat(encodeURIComponent("52.2268,20.9921"),"&travelmode=").concat(encodeURIComponent("driving"),"&hl=pl");return r.createElement(p.r,{href:i,rel:"",target:"map",style:{margin:"0 .25em"}},r.createElement(c.G,{icon:u.KS0}))}function je(e){var t=e.children,n=se(e,ce);return r.createElement("label",null,r.createElement("input",ue({type:"checkbox"},n)),r.createElement("span",null,t))}function Se(e){var t=e.id,n=e.canonical,a=e.coordinates,o=e.price,i=e.title,l=e.hide,c=e.setHide,u=e.like,s=e.setLike,f=e._address,d=e._created,h=e._updated,g=void 0===h?0:h,y=e._checked,v=void 0===y?0:y;return r.createElement("div",{className:$.Summary},r.createElement("div",null,r.createElement("div",{className:$.Sidebar},r.createElement(je,{checked:u.includes(t),onChange:function(e){return fetch("api/properties/like.json?id=".concat(t)),s((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Like"),r.createElement(je,{checked:l.includes(t),onChange:function(e){return fetch("api/properties/hide.json?id=".concat(t)),c((function(n){return e.target.checked?n.concat(t):n.filter((function(e){return e!==t}))}))}},"Hide")),r.createElement("div",null,(0,m.Z)(d,"yyyy-MM-dd HH:mm"),g>0&&" updated: ".concat((0,m.Z)(g,"yyyy-MM-dd HH:mm")),v>0&&" checked: ".concat((0,m.Z)(v,"yyyy-MM-dd HH:mm")))),r.createElement("div",{style:{clear:"right"}},r.createElement("h4",null,"".concat((new Intl.NumberFormat).format(o)," PLN")),r.createElement("h3",null,r.createElement(p.r,{href:n},i)," ",a&&r.createElement(Oe,{coordinates:a}),a&&r.createElement(xe,{coordinates:a}))),f&&r.createElement("h6",null,f.join(" / ")))}function Ne(e){var t=e.description,n=e.parameters,a=me((0,r.useState)(!1),2),o=a[0],i=a[1];return r.createElement("div",{className:$.Details},r.createElement(s.Z,{ellipsis:r.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),i(!0)}},"..."),lines:!o&&3},t.map((function(e,t){return r.createElement("p",{key:t},e)}))),r.createElement("ul",null,n.map((function(e,t){var n=e.label,a=e.value;return r.createElement("li",{key:t},n,": ",r.createElement("b",null,a))}))))}function Te(e){var t=e.price,n=e._updated;return r.createElement("div",{className:$.History},r.createElement("div",null,r.createElement("div",{className:$.Sidebar},r.createElement("h5",null,"".concat((new Intl.NumberFormat).format(t)," PLN"))),r.createElement("div",null,(0,m.Z)(n,"yyyy-MM-dd HH:mm"))))}function Be(){return r.createElement("div",{className:$.Section},r.createElement("h2",null,"Properties"),r.createElement(_e,null))}},2091:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),i.locals={};const l=i},190:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o),l=n(9138),c=i()(a());c.i(l.Z),c.push([e.id,".fmu5OTC8YuGNxvhVWLQY{height:75vh;border:2px solid red}.fmu5OTC8YuGNxvhVWLQY header{font-weight:bold}.cXdsM8XDHY8s8_ZISLLs{padding:0 0 0 210px;min-height:200px}.cXdsM8XDHY8s8_ZISLLs .G1eoJjQ_TUQvlMdXoYXW{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}","",{version:3,sources:["webpack://./src/containers/Properties/Map.module.scss"],names:[],mappings:"AAEA,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA,CAeJ,sBACE,mBAAA,CACA,gBAAA,CAEA,4CACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n\n  // .Circle {\n  //   color: purple;\n  //   fill: currentColor;\n  //   stroke: currentColor;\n  //   &.Like {\n  //     color: blueviolet;\n  //   }\n  //   &.Hide {\n  //     opacity: 0.5;\n  //   }\n  // }\n}\n.Summary {\n  padding: 0 0 0 210px;\n  min-height: 200px;\n\n  .Gallery {\n    position: absolute;\n    margin-top: -2px;\n    margin-left: -214px;\n    width: 200px;\n    height: 200px;\n  }\n}\n'],sourceRoot:""}]),c.locals={Map:"fmu5OTC8YuGNxvhVWLQY",Summary:"cXdsM8XDHY8s8_ZISLLs",Gallery:"G1eoJjQ_TUQvlMdXoYXW"};const u=c},2039:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0 .5em 220px;border:2px solid rgba(0,0,0,0);margin:.5em;min-height:196px}.bUNjBJTWIMSq_XWNswT2.TXzld0_Enrx67356XQvV{border-color:#8a2be2}.bUNjBJTWIMSq_XWNswT2.yknHg6Kx6g072wclMnRw{opacity:.5;min-height:0}.e3KhqV06cOMe70OduX67{position:absolute;margin-top:-2px;margin-left:-214px;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h6{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy .OZ2Fnz11BkBbwH0I6IEx{float:right}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}.K5RBVDM72Qt0DbrWbkh3{clear:both;border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.K5RBVDM72Qt0DbrWbkh3 .OZ2Fnz11BkBbwH0I6IEx{float:right}.K5RBVDM72Qt0DbrWbkh3 h5{float:right;margin-block-start:0;margin-block-end:0}","",{version:3,sources:["webpack://./src/containers/Properties/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,8BAAA,CACA,WAAA,CACA,gBAAA,CACA,2CACE,oBAAA,CAEF,2CACE,UAAA,CACA,YAAA,CAGJ,sBACE,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,4CACE,WAAA,CAGJ,sBACE,+BAAA,CACA,mBAAA,CAEA,wBACE,QAAA,CAGJ,sBACE,UAAA,CACA,+BAAA,CACA,mBAAA,CACA,4CACE,WAAA,CAEF,yBACE,WAAA,CACA,oBAAA,CACA,kBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0 0.5em 220px;\n  border: 2px solid transparent;\n  margin: 0.5em;\n  min-height: 196px;\n  &.Like {\n    border-color: blueviolet;\n  }\n  &.Hide {\n    opacity: 0.5;\n    min-height: 0;\n  }\n}\n.Gallery {\n  position: absolute;\n  margin-top: -2px;\n  margin-left: -214px;\n  width: 200px;\n  height: 200px;\n}\n.Summary {\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h6 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  .Sidebar {\n    float: right;\n  }\n}\n.Details {\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n\n  p {\n    margin: 0;\n  }\n}\n.History {\n  clear: both;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 0.5em;\n  .Sidebar {\n    float: right;\n  }\n  h5 {\n    float: right;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Like:"TXzld0_Enrx67356XQvV",Hide:"yknHg6Kx6g072wclMnRw",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Sidebar:"OZ2Fnz11BkBbwH0I6IEx",Details:"GzN8lDh8Bf0lo_aG_yN4",History:"K5RBVDM72Qt0DbrWbkh3"};const l=i}}]);
//# sourceMappingURL=322.js.map