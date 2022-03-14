"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[224],{891:(e,t,n)=>{n.d(t,{r:()=>l});var r=n(2784),o=["href"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.href,n=void 0===t?"#":t,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,o),c="#"===n[0];return r.createElement("a",a({href:n,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer"},l))}},2700:(e,t,n)=>{n.d(t,{np:()=>_,D:()=>x,CO:()=>P});var r=n(2784),o=n(9386),a=n(5449),l=n(1128),c=n(9530),i=n(5096),u=n(2779),s=n.n(u),f=n(6062),m=n.n(f),p=n(4036),d=n.n(p),b=n(6793),v=n.n(b),y=n(7892),g=n.n(y),h=n(1173),A=n.n(h),E=n(2464),C=n.n(E),O=n(2091),w={};w.styleTagTransform=C(),w.setAttributes=g(),w.insert=v().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=A(),m()(O.Z,w);const j=O.Z&&O.Z.locals?O.Z.locals:void 0;function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e){var t=e.map,n=S((0,r.useState)((function(){return{position:t.getCenter(),zoom:t.getZoom()}})),1)[0],o=S((0,r.useState)(t.getCenter()),2),a=o[0],l=o[1],c=(0,r.useCallback)((function(){t.setView(n.position,n.zoom)}),[t]),i=(0,r.useCallback)((function(){l(t.getCenter())}),[t]),u=(0,r.useCallback)((function(e){var t=e.latlng,n=e.radius;console.log({latlng:t,radius:n})}),[]);return(0,r.useEffect)((function(){return t.on("locationfound",u).on("move",i),function(){t.off("locationfound",u).off("move",i)}}),[t,i]),r.createElement("div",{className:s()(j.DisplayPosition)},"latitude: ",a.lat.toFixed(4),", longitude: ",a.lng.toFixed(4)," ",r.createElement("button",{onClick:c},"Reset"),r.createElement("button",{onClick:function(){return t.locate({setView:!0})}},"Locate"))}function x(e){var t=e.position,n=e.children,l=e.setPosition,c=(0,r.useRef)(null),i=(0,r.useMemo)((function(){return{dragend:function(){var e=c.current;null!=e&&l(e.getLatLng())}}}),[]);return r.createElement(o.J,{draggable:!0,eventHandlers:i,position:t,ref:c},r.createElement(a.u,null,n))}function P(){var e=(0,l.Sx)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(c.G,{icon:i.KS0}))))}},2224:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(2784),o=n(1498),a=n(357),l=n(2351),c=n(1148),i=n(5120),u=n(2335),s=n(9468),f=n(2779),m=n.n(f),p=n(6062),d=n.n(p),b=n(4036),v=n.n(b),y=n(6793),g=n.n(y),h=n(7892),A=n.n(h),E=n(1173),C=n.n(E),O=n(2464),w=n.n(O),j=n(9930),S={};S.styleTagTransform=w(),S.setAttributes=A(),S.insert=g().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=C(),d()(j.Z,S);const k=j.Z&&j.Z.locals?j.Z.locals:void 0;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=200,U={id:"id",station_id:"station_id",network_id:"network_id",_petrol_on:"_petrol_on",_petrol_pb:"_petrol_pb",_distance:"_distance",_created:"_created",_updated:"_updated"};function B(e){var t=e.list,n=I((0,r.useState)(null),2),o=n[0],a=n[1],f=I((0,r.useState)((function(){return{xProp:"network_id",yProp:"_petrol_pb"}})),2),p=f[0],d=p.xProp,b=p.yProp,v=f[1],y=(0,r.useRef)(null),g=(0,r.useRef)(null),h=(0,r.useRef)(null),A=(0,r.useMemo)((function(){return new c.x}),[]);return(0,r.useEffect)((function(){var e=A.pipe((0,u.w)((function(e){return(0,i.of)(e).pipe((0,s.g)(e?0:800))}))).subscribe((function(e){return a(e)}));return function(){return e.unsubscribe()}}),[A]),(0,r.useEffect)((function(){var e=t.filter((function(e){var t=e.item;return t[d]&&t[b]})).slice(0,2e3).map((function(e){var t=e.item;return[t[d],t[b],"[".concat(t.id,"] ").concat(t.network_name," (").concat(t[d]," / ").concat(t[b],")")]})),n=e.map((function(e){var t=I(e,1)[0];return void 0===t?0:t})),r=e.map((function(e){var t=I(e,2)[1];return void 0===t?0:t})),o=[Math.min.apply(Math,N(n)),Math.max.apply(Math,N(n))],a=[Math.min.apply(Math,N(r)),Math.max.apply(Math,N(r))],c=(0,l.BYU)().domain(o).range([10,310]),i=(0,l.BYU)().domain(a).range([180,20]),u=(0,l.BYU)().domain(o).range(["red","blue"]);(0,l.Ys)(h.current).selectAll("circle").remove(),(0,l.Ys)(h.current).selectAll("circle").data(e).join((function(e){return e.append("circle").attr("cx",(function(e){var t=I(e,1)[0];return c(void 0===t?0:t)})).attr("cy",(function(e){var t=I(e,2)[1];return i(void 0===t?0:t)})).attr("r",0).attr("fill",(function(e){var t=I(e,1)[0];return u(void 0===t?0:t)})).on("mouseover",(function(e,t){var n=I(t,3)[2];return A.next({left:e.layerX,top:e.layerY,label:n})})).on("mouseout",(function(e,t){return A.next(null)})).call((function(e){return e.transition().duration(200).attr("r",2).style("opacity",1)}))}),(function(e){return e.attr("fill","lightgrey")}),(function(e){return e.attr("fill","tomato").call((function(e){return e.transition().duration(200).attr("r",0).style("opacity",0).remove()}))}));var s=(0,l.LLu)(c).ticks(5).tickSizeOuter(0);(0,l.Ys)(y.current).call(s);var f=(0,l.y4O)(i).ticks(5).tickSizeOuter(0);(0,l.Ys)(g.current).call(f)}),[t,d,b]),r.createElement("div",{className:m()(k.Chart)},r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"x"),r.createElement("select",{value:d,onChange:function(e){return v((function(t){return x(x({},t),{},{xProp:e.target.value})}))}},Object.entries(U).map((function(e){var t=I(e,2),n=t[0],o=t[1];return r.createElement("option",{key:n,value:n},o)})))),r.createElement("label",null,r.createElement("span",null,"y"),r.createElement("select",{value:b,onChange:function(e){return v((function(t){return x(x({},t),{},{yProp:e.target.value})}))}},Object.entries(U).map((function(e){var t=I(e,2),n=t[0],o=t[1];return r.createElement("option",{key:n,value:n},o)}))))),r.createElement("svg",{ref:h,width:320,height:Z,viewBox:"0, 0, ".concat(320,", ").concat(Z)},r.createElement("g",{transform:"translate(0, ".concat(180,")"),ref:y}),r.createElement("g",{transform:"translate(".concat(10,", 0)"),ref:g})),o&&r.createElement("div",{className:k.Tooltip,style:{top:o.top,left:o.left}},o.label))}var D=n(5062),G=n.n(D),L=n(3964),Y=n(2048),z=n(5176),H=n(7122),R=n(2700),V=n(1131),q={};q.styleTagTransform=w(),q.setAttributes=A(),q.insert=g().bind(null,"head"),q.domAPI=v(),q.insertStyleElement=C(),d()(V.Z,q);const Q=V.Z&&V.Z.locals?V.Z.locals:void 0;function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=e.data;return r.createElement("div",null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null),Object.keys(t.header).map((function(e,t){return r.createElement("th",{key:t},e)}))),t.rows.sort((function(e,t){return t.date-e.date})).map((function(e,n){var o=e.date,a=e.list;return r.createElement("tr",{key:n},r.createElement("th",null,new Date(o).toISOString().split("T")[0]),Object.keys(t.header).map((function(e,t){return r.createElement("td",{key:t},a[e])})))})))))}function X(e){return(0,r.useMemo)((function(){return G().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return G().marker([n,r])}))).getBounds()}),[])}function $(e){var t=e.bounds,o=e.center,a=e.setCenter,l=e.list,c=e.zoom,i=void 0===c?12:c;(0,r.useEffect)((function(){delete G().Icon.Default.prototype._getIconUrl,G().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var u=(0,r.useMemo)((function(){return r.createElement(L.h,{bounds:t,center:o,zoom:i,className:m()(Q.Map)},r.createElement(Y.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(R.D,{position:o,setPosition:a},"".concat(o.lat,",").concat(o.lng)),l.map((function(e){var t=e.i,n=e.id,a=e.position,l=e.name,c=e.item;return r.createElement(z.c,{key:t,center:a,pathOptions:{color:"purple"}},r.createElement(H.G,{minWidth:90},r.createElement("section",null,r.createElement("header",null,"[".concat(n,"] ").concat([l].concat(c.address||[]).join(" - ")," (").concat(o.distanceTo(a).toFixed(0)/1e3," km)")),r.createElement(J,{data:Object.entries(Object.assign(W({},c._updated||c._created,c.petrol_list.reduce((function(e,t){var n=t.type,r=t.price;return Object.assign(e,W({},n,r))}),{})),c._history)).reduce((function(e,t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),r=n[0],o=n[1];return Object.assign(e,{header:Object.keys(o).reduce((function(e,t){return Object.assign(e,W({},t,t))}),e.header),rows:e.rows.concat([{date:Number(r),list:o}])})}),{header:{},rows:[]})}))))})),r.createElement(R.CO,null))}),[l,o]);return r.createElement("div",{className:m()(Q.Layout)},u)}var K=n(891),ee=n(9539),te=n(6511),ne={};ne.styleTagTransform=w(),ne.setAttributes=A(),ne.insert=g().bind(null,"head"),ne.domAPI=v(),ne.insertStyleElement=C(),d()(te.Z,ne);const re=te.Z&&te.Z.locals?te.Z.locals:void 0;var oe=["position","item"];function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t,n,r,o,a,l){try{var c=e[a](l),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}var fe,me=[1,3,5,10,20,50,100,500],pe=[0,1,2,3,4,5,6,7,8,9,10],de={_distance:1,_petrol_pb:1,"_petrol_pb+":1,_petrol_on:1,"_petrol_on+":1,network_name:1,address:1,_created:-1,_updated:-1},be={"":"",pb:"pb","pb+":"pb+",on:"on","on+":"on+",lpg:"lpg","lpg+":"lpg+"};!function(e){e.LT="LT",e.GT="GT",e.EQ="EQ"}(fe||(fe={}));var ve=function(e,t,n){if(e[t][1][n]&&e[t+1]&&e[t+1][1][n]){var r=Number(e[t][1][n]),o=Number(e[t+1][1][n]);return r===o?fe.EQ:r>o?fe.GT:fe.LT}return null},ye=(0,a.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/stations/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{results:e.results.map((function(e){return ie(ie({},e.petrol_list.reduce((function(e,t){var n=t.type,r=t.price;return Object.assign(e,ue({},"_petrol_".concat(n),Number(r)||0))}),{})),e)}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){se(a,r,o,l,c,"next",e)}function c(e){se(a,r,o,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}());function ge(e){var t=e.version,n=void 0===t?"v1":t,a=ye.read(n).results,l=ae((0,r.useState)([]),2),c=l[0],i=l[1],u=ae((0,r.useState)(""),2),s=u[0],f=u[1],p=ae((0,ee.Z)(s),1)[0],d=(0,r.useCallback)((function(e){var t=e.target;return f(t.value)}),[]),b=ae((0,r.useState)(5),2),v=b[0],y=b[1],g=(0,r.useCallback)((function(e){var t=e.target;return y(Number(t.value))}),[]),h=ae((0,r.useState)((function(){return Object.keys(be)[1]})),2),A=h[0],E=h[1],C=(0,r.useCallback)((function(e){var t=e.target;return E(t.value)}),[]),O=ae((0,r.useState)(pe[0]),2),w=O[0],j=O[1],S=ae((0,r.useState)(pe[pe.length-1]),2),k=S[0],_=S[1],x=ae((0,r.useState)((function(){return Object.keys(de)[0]})),2),P=x[0],N=x[1],I=(0,r.useCallback)((function(e){var t=e.target;return _((function(e){var n=Number(t.value);return j(n),e<n?n:e}))}),[]),T=(0,r.useCallback)((function(e){var t=e.target;return j((function(e){var n=Number(t.value);return _(n),n>e?e:n}))}),[]),M=(0,r.useCallback)((function(e){var t=e.target;return N(t.value)}),[]);console.log({results:a});var Z=(0,r.useMemo)((function(){return a.map((function(e,t){return{i:t,id:e.station_id,position:{lat:e.x,lng:e.y},name:e.network_name,item:e}})).filter((function(e){var t,n=e.name,r=e.item,o=r.petrol_list,a=r.address,l=void 0===a?"":a;return(n.toLowerCase().match(p)||l.toLowerCase().match(p))&&(!A||(t=o.find((function(e){return e.type===A})),Boolean(t)&&w<=t.price&&t.price<=k))}))}),[a,p,A,w,k]),U=X([{position:{lat:52.1793,lng:21.0498}}]),D=ae((0,r.useState)((function(){return U.getCenter()})),2),G=D[0],L=D[1],Y=(0,r.useMemo)((function(){return Z.map((function(e){var t=e.position,n=e.item,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,oe);return ie({position:t,item:ie(ie({},n),{},{_distance:G.distanceTo(t)}),history:[[n._updated,n.petrol]].concat(Object.entries(n._history).reverse()).map((function(e){var t=ae(e,2),n=t[0],r=t[1];return[n,Object.keys(be).filter(Boolean).map((function(e){return r[e]}))]}))},r)})).filter((function(e){return e.item._distance<1e3*v}))}),[Z,G,v]),z=(0,r.useMemo)((function(){return Y.sort((function(e,t){return de[P]*(e.item[P]===t.item[P]?0:(e.item[P]||0)>(t.item[P]||0)?1:-1)}))}),[Y,P]),H=X(Y);return r.createElement("div",null,r.createElement($,{bounds:H,center:G,setCenter:L,list:Y}),r.createElement(B,{list:Y}),r.createElement("fieldset",null,r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:s,onChange:d})),r.createElement("label",null,r.createElement("span",null,"Radius"),r.createElement("input",{type:"range",list:"range-list",min:me[0],max:me[me.length-1],value:v,onChange:g}),r.createElement("datalist",{id:"range-list"},me.map((function(e){return r.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),r.createElement("span",null,"max ".concat(v," km")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Type"),r.createElement("select",{value:A,onChange:C},Object.entries(be).map((function(e){var t=ae(e,2),n=t[0],o=t[1];return r.createElement("option",{key:n,value:n},o)})))),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:P,onChange:M},Object.entries(de).map((function(e){var t=ae(e,1)[0];return r.createElement("option",{key:t,value:t},t)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:pe[0],max:pe[pe.length-1],value:w,onChange:I}),r.createElement("datalist",{id:"price-list"},pe.map((function(e){return r.createElement("option",{key:e,value:e,label:[0,1,2,3,4,5].includes(e)?"".concat(e," pln/l"):void 0})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:pe[0],max:pe[pe.length-1],value:k,onChange:T}),r.createElement("span",null,"".concat(w,"-").concat(k," pln/l"))))),r.createElement("table",{className:re.Table},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"#"),Object.keys(be).map((function(e){return r.createElement("th",{key:e},e||r.createElement("div",null,"name"))})),r.createElement("th",null,"updated"),r.createElement("th",null)),z.map((function(e,t){var n=e.i,a=e.name,l=e.item,u=e.history;return u.slice(0,c.includes(n)?1/0:1).map((function(e,s){var f=ae(e,2),p=f[0],d=f[1];return r.createElement("tr",{key:"".concat(t,"-").concat(s)},r.createElement("td",null,0===s&&n),0===s&&r.createElement("td",{rowSpan:c.includes(n)?u.length:void 0},r.createElement("div",{className:re.Station},a," ",r.createElement("address",null,l.address))),d.map((function(e,t){return r.createElement("td",{key:t},r.createElement("div",{className:m()(re.Price,function(e){var t;return e&&(t={},ue(t,fe.GT,re.gt),ue(t,fe.LT,re.lt),ue(t,fe.EQ,re.eq),t)[e]}(ve(u,s,t)))},null!=e?e:"-"))})),r.createElement("td",null,(0,o.Z)(Number(p),"yyyy-MM-dd")),r.createElement("td",null,u.length>0&&0===s&&(c.includes(n)?r.createElement(K.r,{onClick:function(e){return e.preventDefault(),i((function(e){return e.filter((function(e){return n!==e}))}))}},"hide"):r.createElement(K.r,{onClick:function(e){return e.preventDefault(),i((function(e){return e.concat(n)}))}},"show"))))}))})))))}function he(){return r.createElement("div",{className:re.Section},r.createElement("h2",null,"Stations"),r.createElement(ge,null))}},9539:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2784);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t,n,a=(t=(0,r.useState)(e),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],c=a[1],i=(0,r.useRef)();return(0,r.useEffect)((function(){return clearTimeout(i.current),i.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(i.current)}}),[e]),[l]}},2091:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(272),o=n.n(r),a=n(2609),l=n.n(a)()(o());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),l.locals={};const c=l},9930:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(272),o=n.n(r),a=n(2609),l=n.n(a)()(o());l.push([e.id,".NjHXg9NGgpl1h6itsGUI{position:relative;border:2px solid red}.NjHXg9NGgpl1h6itsGUI svg{width:100%;height:50vh}.NjHXg9NGgpl1h6itsGUI .Qeuu3ubiYLZshSsQhUN6{position:absolute}.Qeuu3ubiYLZshSsQhUN6{background:#fff;border:1px solid #add8e6;color:orange;padding:.25em}","",{version:3,sources:["webpack://./src/containers/Stations/Chart.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,oBAAA,CAEA,0BACE,UAAA,CACA,WAAA,CAEF,4CACE,iBAAA,CAGJ,sBACE,eAAA,CACA,wBAAA,CACA,YAAA,CACA,aAAA",sourcesContent:[".Chart {\n  position: relative;\n  border: 2px solid red;\n\n  svg {\n    width: 100%;\n    height: 50vh;\n  }\n  .Tooltip {\n    position: absolute;\n  }\n}\n.Tooltip {\n  background: white;\n  border: 1px solid lightblue;\n  color: orange;\n  padding: 0.25em;\n}\n"],sourceRoot:""}]),l.locals={Chart:"NjHXg9NGgpl1h6itsGUI",Tooltip:"Qeuu3ubiYLZshSsQhUN6"};const c=l},1131:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),o=n.n(r),a=n(2609),l=n.n(a),c=n(9138),i=l()(o());i.i(c.Z),i.push([e.id,".cStyiPbxd0HI9tByMkkY{height:75vh;border:2px solid red}.cStyiPbxd0HI9tByMkkY header{font-weight:bold}","",{version:3,sources:["webpack://./src/containers/Stations/Map.module.scss"],names:[],mappings:"AAKA,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Layout {\n}\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n}\n'],sourceRoot:""}]),i.locals={Map:"cStyiPbxd0HI9tByMkkY"};const u=i},6511:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(272),o=n.n(r),a=n(2609),l=n.n(a)()(o());l.push([e.id,'.JTHop_UDHoyJmmN4pc6w{color:blue}.dPxlg3RLmLdxM8tY5oVh address{color:#6495ed;font-size:small}._WIYpu90vPFYsczMHLOG td{vertical-align:top;padding:.25em}.DcVUc3zpN2nOrt53beGa{color:#000;text-align:right;width:3em}.DcVUc3zpN2nOrt53beGa.WEurT7giwHcxfqx9pq5j{color:blue}.DcVUc3zpN2nOrt53beGa.BFgoN81dqd3ExjHY8CVf{color:red}.DcVUc3zpN2nOrt53beGa.BFgoN81dqd3ExjHY8CVf::before{content:"↖"}.DcVUc3zpN2nOrt53beGa.op0NQ6Zaqs_zmLmX4NIM{color:green}.DcVUc3zpN2nOrt53beGa.op0NQ6Zaqs_zmLmX4NIM::before{content:"↘"}',"",{version:3,sources:["webpack://./src/containers/Stations/styles.module.scss"],names:[],mappings:"AAAA,sBAAA,UACE,CAAA,8BAGA,aACE,CAAA,eACA,CAAA,yBAIF,kBACE,CAAA,aACA,CAAA,sBAGJ,UACE,CAAA,gBACA,CAAA,SACA,CAAA,2CACA,UACE,CAAA,2CAEF,SACE,CAAA,mDACA,WACE,CAAA,2CAGJ,WACE,CAAA,mDACA,WACE",sourcesContent:['.Section {\n  color: blue;\n}\n.Station {\n  address {\n    color: cornflowerblue;\n    font-size: small;\n  }\n}\n.Table {\n  td {\n    vertical-align: top;\n    padding: 0.25em;\n  }\n}\n.Price {\n  color: black;\n  text-align: right;\n  width: 3em;\n  &.eq {\n    color: blue;\n  }\n  &.gt {\n    color: red;\n    &::before {\n      content: "\\2196";\n    }\n  }\n  &.lt {\n    color: green;\n    &::before {\n      content: "\\2198";\n    }\n  }\n}\n'],sourceRoot:""}]),l.locals={Section:"JTHop_UDHoyJmmN4pc6w",Station:"dPxlg3RLmLdxM8tY5oVh",Table:"_WIYpu90vPFYsczMHLOG",Price:"DcVUc3zpN2nOrt53beGa",eq:"WEurT7giwHcxfqx9pq5j",gt:"BFgoN81dqd3ExjHY8CVf",lt:"op0NQ6Zaqs_zmLmX4NIM"};const c=l}}]);
//# sourceMappingURL=224.js.map