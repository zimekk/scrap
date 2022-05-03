"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[475],{6280:(e,t,n)=>{n.d(t,{r:()=>M});var r=n(2784),l=n(1148),a=n(8871),o=n(357),i=n(5096),c=function(e){var t=e.height,n=void 0===t?80:t,l=e.width,a=void 0===l?80:l,o=e.color,i=void 0===o?"green":o,c=e.radius,u=void 0===c?1:c,s=e.label,m=void 0===s?"audio-loading":s;return r.createElement("svg",{width:a,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},r.createElement("defs",null,r.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},r.createElement("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),r.createElement("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),r.createElement("stop",{stopColor:i,offset:"100%"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(1 1)"},r.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:"2"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),r.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},u=n(2779),s=n.n(u),m=n(6062),f=n.n(m),d=n(4036),p=n.n(d),A=n(6793),v=n.n(A),h=n(7892),y=n.n(h),g=n(1173),E=n.n(g),b=n(2464),C=n.n(b),w=n(7591),x={};x.styleTagTransform=C(),x.setAttributes=y(),x.insert=v().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=E(),f()(w.Z,x);const S=w.Z&&w.Z.locals?w.Z.locals:void 0;var k=["src"];function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t,n,r,l,a,o){try{var i=e[a](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,l)}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=(0,o.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:function(){return e(t)},onerror:function(){return e((n=(t=B(i.VmB.icon,5))[0],r=t[1],l=t[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(n," ").concat(r,'"><path fill="currentColor" d="').concat(l,'"></path></svg>')));var t,n,r,l},src:t})})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var a=e.apply(t,n);function o(e){j(a,r,l,o,i,"next",e)}function i(e){j(a,r,l,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}());function _(e){var t=e.src,n=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,k),l=T.read(t);return r.createElement("img",O({src:l},n,{referrerPolicy:"no-referrer"}))}function P(){return r.createElement("div",{className:S.Loader},r.createElement(c,null))}function z(e){var t=O({},e);return r.createElement("div",{className:S.ImgWrapper},r.createElement(r.Suspense,{fallback:r.createElement(P,null)},r.createElement(_,t)))}function M(e){var t=e.className,n=e.images,o=e.srcSet,i=void 0===o?[]:o,c=B((0,r.useState)(!1),2),u=c[0],m=c[1],f=B((0,r.useState)(!1),2),d=f[0],p=f[1],A=(0,r.useRef)(null),v=B((0,r.useState)({scale:0}),2),h=v[0],y=v[1],g=(0,r.useMemo)((function(){return new l.x}),[]);(0,r.useEffect)((function(){var e=g.pipe((0,a.b)(400)).subscribe((function(e){e.scrollLeft>=e.scrollWidth-e.offsetWidth&&p(!0)}));return function(){return e.unsubscribe()}}),[g]);var E=(0,r.useCallback)((function(e){return e.stopPropagation(),y((function(e){if(A.current){var t=A.current.getBoundingClientRect(),n=t.x,r=t.y,l=t.width,a=t.height,o=window,i=o.innerWidth,c=o.innerHeight,u=i/l*1;return e.scale?{scale:0}:{scale:u,translateX:((i-l)/2-n)/u,translateY:((c-a)/2-r)/u}}return e}))}),[A]);return(0,r.useEffect)((function(){var e=function(e){var t=e.target;return g.next(t)};if(A.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){B(e,1)[0].isIntersecting&&m(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(A.current),A.current.addEventListener("scroll",e),function(){A.current&&(t.unobserve(A.current),A.current.removeEventListener("scroll",e))}}}),[A]),n.length?r.createElement("div",{ref:A,className:s()(t,S.Gallery),style:h.scale?{cursor:"zoom-out",transform:"scale(".concat(h.scale,") translate(").concat(h.translateX,"px, ").concat(h.translateY,"px)"),zIndex:1}:{cursor:"zoom-in"},onClick:E},u&&n.slice(0,d?n.length:3).map((function(e,t){return r.createElement(z,{key:t,src:e,srcSet:h.scale?i[t]:void 0,alt:"Image #".concat(t+1)})}))):null}},891:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(2784),l=["href"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){var t=e.href,n=void 0===t?"#":t,o=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,l),i="#"===n[0];return r.createElement("a",a({href:n,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},o))}},2700:(e,t,n)=>{n.d(t,{np:()=>j,D:()=>B,CO:()=>I});var r=n(2784),l=n(1698),a=n(6121),o=n(3645),i=n(9530),c=n(5096),u=n(2779),s=n.n(u),m=n(6062),f=n.n(m),d=n(4036),p=n.n(d),A=n(6793),v=n.n(A),h=n(7892),y=n.n(h),g=n(1173),E=n.n(g),b=n(2464),C=n.n(b),w=n(2091),x={};x.styleTagTransform=C(),x.setAttributes=y(),x.insert=v().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=E(),f()(w.Z,x);const S=w.Z&&w.Z.locals?w.Z.locals:void 0;function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){var t=e.map,n=k((0,r.useState)((function(){return{position:t.getCenter(),zoom:t.getZoom()}})),1)[0],l=k((0,r.useState)(t.getCenter()),2),a=l[0],o=l[1],i=(0,r.useCallback)((function(){t.setView(n.position,n.zoom)}),[t]),c=(0,r.useCallback)((function(){o(t.getCenter())}),[t]),u=(0,r.useCallback)((function(e){var t=e.latlng,n=e.radius;console.log({latlng:t,radius:n})}),[]);return(0,r.useEffect)((function(){return t.on("locationfound",u).on("move",c),function(){t.off("locationfound",u).off("move",c)}}),[t,c]),r.createElement("div",{className:s()(S.DisplayPosition)},"latitude: ",a.lat.toFixed(4),", longitude: ",a.lng.toFixed(4)," ",r.createElement("button",{onClick:i},"Reset"),r.createElement("button",{onClick:function(){return t.locate({setView:!0})}},"Locate"))}function B(e){var t=e.position,n=e.children,o=e.setPosition,i=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return{dragend:function(){var e=i.current;null!=e&&o(e.getLatLng())}}}),[]);return r.createElement(l.J,{draggable:!0,eventHandlers:c,position:t,ref:i},r.createElement(a.u,null,n))}function I(){var e=(0,o.Sx)(),t=(0,r.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return r.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},r.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},r.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},r.createElement(i.G,{icon:c.KS0}))))}},4179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var r=n(2784),l=n(357),a=n(539),o=n(5062),i=n.n(o),c=n(6604),u=n(3459),s=n(3947),m=n(3340),f=n(6280),d=n(891),p=n(2700),A=n(2779),v=n.n(A),h=n(6062),y=n.n(h),g=n(4036),E=n.n(g),b=n(6793),C=n.n(b),w=n(7892),x=n.n(w),S=n(1173),k=n.n(S),O=n(2464),j=n.n(O),B=n(4783),I={};I.styleTagTransform=j(),I.setAttributes=x(),I.insert=C().bind(null,"head"),I.domAPI=E(),I.insertStyleElement=k(),y()(B.Z,I);const T=B.Z&&B.Z.locals?B.Z.locals:void 0;function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=(0,r.createContext)({});function z(e){var t,n,l=e.children,a=e.initialIndex,o=void 0===a?0:a,i=(t=(0,r.useState)(o),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],u=i[1];return r.createElement(P.Provider,{value:{index:c,setIndex:u}},r.createElement("div",{className:T.Tabs},r.Children.toArray(l).reduce((function(e,t,n){return{children:e.children.concat(t.type===Z||e.sequence===c?r.cloneElement(t):[]),sequence:t.type===M?e.sequence+1:e.sequence}}),{children:[],sequence:0}).children))}function M(e){var t=e.children;return r.createElement("div",{className:T.TabPanel},t)}function Z(e){var t=e.children,n=(0,r.useContext)(P),l=n.index,a=n.setIndex;return r.createElement("div",{className:T.TabList},r.Children.toArray(t).map((function(e,t){return r.cloneElement(e,{selected:l===t,onSelect:function(){return a(t)}})})))}function G(e){var t=e.children,n=e.selected,l=e.onSelect;return r.createElement("div",{className:v()(T.Tab,n&&T.selected),onClick:l},t)}var D={1:{1:"mieszkanie na sprzedaż",2:"mieszkanie do wynajęcia"},2:{1:"dom na sprzedaż"},4:{1:"działka na sprzedaż"}},R=n(685),W={};W.styleTagTransform=j(),W.setAttributes=x(),W.insert=C().bind(null,"head"),W.domAPI=E(),W.insertStyleElement=k(),y()(R.Z,W);const Y=R.Z&&R.Z.locals?R.Z.locals:void 0;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e){var t=e.description_short,n=e.description,l=void 0===n?t:n,a=e.our_title,o=e.title,i=e.images,c=e.id,u=e.name,s=e.center,m=e.position;return r.createElement("section",null,r.createElement("header",null,r.createElement(d.r,{href:H("#scrap/${id}",{id:c,name:u})},o||a)," ","(","".concat(s.distanceTo(m).toFixed(0)/1e3," km"),")"),r.createElement(f.r,{className:Y.Gallery,images:i}),r.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}function L(e){var t=e.kind,n=e.type,l=e.location_user,a=e.offerowner_name,o=e.f,i=e.format,c=e.format_specific,u=e.created,s=e.changed,m=e.id;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"Format:"),r.createElement("td",null,i)),r.createElement("tr",null,r.createElement("th",null,"Typ nieruchomości:"),r.createElement("td",null,D[t][n])),r.createElement("tr",null,r.createElement("th",null,"Dodano:"),r.createElement("td",null,u)),r.createElement("tr",null,r.createElement("th",null,"Ostatnia aktualizacja:"),r.createElement("td",null,s)),r.createElement("tr",null,r.createElement("th",null,"Powierzchnia:"),r.createElement("td",null,o.area_m2," m² (",o.area_m2_4," ",o.area_m2_4t,")")),r.createElement("tr",null,r.createElement("th",null,"Cena:"),r.createElement("td",null,o.p_pln," zł")),r.createElement("tr",null,r.createElement("th",null,"Cena za m²:"),r.createElement("td",null,o.pp_m2_pln_wz," zł")),r.createElement("tr",null,r.createElement("th",null,"Cena za ar:"),r.createElement("td",null,o.pp_m2_pln_4," zł")),r.createElement("tr",null,r.createElement("th",null,"Lokalizacja:"),r.createElement("td",null,l)),c&&r.createElement("tr",null,r.createElement("th",null,"Dojazd:"),r.createElement("td",null,c.id_dojazd)),c&&r.createElement("tr",null,r.createElement("th",null,"Agent prowadzący:"),r.createElement("td",null,c.kontakt_osoba)),c&&r.createElement("tr",null,r.createElement("th",null,"Rodzaj działki:"),r.createElement("td",null,c.id_rodzaj_dzialki)),r.createElement("tr",null,r.createElement("th",null,"Pośrednik:"),r.createElement("td",null,a)),r.createElement("tr",null,r.createElement("th",null,"Nr ogłoszenia:"),r.createElement("td",null,m))))}var H=function(e,t){return Function.apply(void 0,U(Object.keys(t)).concat(["return `".concat(e,"`")])).apply(void 0,U(Object.values(t)))};function V(e){var t=e.bounds,l=e.center,a=e.setCenter,o=e.list;(0,r.useEffect)((function(){delete i().Icon.Default.prototype._getIconUrl,i().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var f,d,A=(f=(0,r.useState)(null),d=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(f,d)||K(f,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=A[0],y=A[1],g=(0,r.useMemo)((function(){return r.createElement(c.h,{bounds:t,whenCreated:y,zoom:13,className:v()(Y.Map)},r.createElement(u.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(p.D,{position:l,setPosition:a},"".concat(l.lat,",").concat(l.lng)),o.map((function(e){var t=e.i,n=e.id,a=e.position,o=e.name,i=e.item;return r.createElement(s.c,{key:t,center:a,pathOptions:{color:"purple"}},r.createElement(m.G,{minWidth:90},r.createElement(z,null,r.createElement(Z,null,r.createElement(G,null,"Summary"),r.createElement(G,null,"Details")),r.createElement(M,null,r.createElement(q,N({id:n,name:o,center:l,position:a},i))),r.createElement(M,null,r.createElement(L,N({id:n},i))))))})),r.createElement(p.CO,null))}),[o,l]);return r.createElement("div",{className:v()(Y.Layout),onClick:function(e){return(t=e.target.closest("a"))&&"#close"===t.getAttribute("href")&&e.preventDefault();var t}},h?r.createElement(p.np,{map:h}):null,g)}var Q=n(9539),$=n(3654);var X=n(8753),J={};J.styleTagTransform=j(),J.setAttributes=x(),J.insert=C().bind(null,"head"),J.domAPI=E(),J.insertStyleElement=k(),y()(X.Z,J);const ee=X.Z&&X.Z.locals?X.Z.locals:void 0;function te(e,t,n,r,l,a,o){try{var i=e[a](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,l)}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le=function(e,t){return[e,t].join(":")},ae=Object.entries(D).reduce((function(e,t){var n=ne(t,2),r=n[0],l=n[1];return Object.entries(l).reduce((function(e,t){var n,l,a,o=ne(t,2),i=o[0],c=o[1];return Object.assign(e,(n={},a=c,(l=le(r,i))in n?Object.defineProperty(n,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[l]=a,n))}),e)}),{}),oe=[1,3,5,10,15,20,25,30,40,50,75,100],ie=[0,400,600,800,1e3,1200,1400,1600,1800,2e3,5e3],ce=[0,100,200,400,800,1e3,1200,1400,1600,1800,2e3,5e3,1e4],ue=[1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,1e6,12e5,15e5,2e6,5e6],se=(0,l.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var a=e.apply(t,n);function o(e){te(a,r,l,o,i,"next",e)}function i(e){te(a,r,l,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}());function me(e){var t=e.version,n=void 0===t?"v1":t,l=se.read(n).results,o=function(e){var t=(0,r.useMemo)((function(){return e.join("\n")}),[e]);return(0,r.useMemo)((function(){return"https://zimekk.github.io/place/#".concat(function(e){return window.btoa(String.fromCharCode.apply(null,$.ZP.deflate(e)))}(unescape(encodeURIComponent(t))))}),[t])}(l.map((function(e){var t=e.latitude,n=e.longitude,r=e.our_url;return"".concat(t,",").concat(n,"|").concat(r)}))),c=ne((0,r.useState)(""),2),u=c[0],s=c[1],m=ne((0,Q.Z)(u),1)[0],p=(0,r.useCallback)((function(e){var t=e.target;return s(t.value)}),[]),A=ne((0,r.useState)(15),2),v=A[0],h=A[1],y=(0,r.useCallback)((function(e){var t=e.target;return h(Number(t.value))}),[]),g=ne((0,r.useState)((function(){return Object.keys(ae)[3]})),2),E=g[0],b=g[1],C=(0,r.useCallback)((function(e){var t=e.target;return b(t.value)}),[]),w=ne((0,r.useState)((function(){return(0,a.Z)(Date.now()-2592e6,"yyyy-MM-dd")})),2),x=w[0],S=w[1],k=ne((0,r.useState)((function(){return(0,a.Z)(Date.now(),"yyyy-MM-dd")})),2),O=k[0],j=k[1],B=(0,r.useCallback)((function(e){var t=e.target;return j((function(e){var n=t.value;return S(n),e<n?n:e}))}),[]),I=(0,r.useCallback)((function(e){var t=e.target;return S((function(e){var n=t.value;return j(n),n>e?e:n}))}),[]),T=ne((0,r.useState)(400),2),_=T[0],P=T[1],z=ne((0,r.useState)(2e3),2),M=z[0],Z=z[1],G=(0,r.useCallback)((function(e){var t=e.target;return Z((function(e){var n=Number(t.value);return P(n),e<n?n:e}))}),[]),D=(0,r.useCallback)((function(e){var t=e.target;return P((function(e){var n=Number(t.value);return Z(n),n>e?e:n}))}),[]),R=ne((0,r.useState)(100),2),W=R[0],Y=R[1],N=ne((0,r.useState)(2e3),2),U=N[0],K=N[1],F=(0,r.useCallback)((function(e){var t=e.target;return K((function(e){var n=Number(t.value);return Y(n),e<n?n:e}))}),[]),q=(0,r.useCallback)((function(e){var t=e.target;return Y((function(e){var n=Number(t.value);return K(n),n>e?e:n}))}),[]),L=ne((0,r.useState)(1e6),2),H=L[0],X=L[1],J=(0,r.useCallback)((function(e){var t=e.target;return X(Number(t.value))}),[]),te=(0,r.useMemo)((function(){return l.filter((function(e){var t=e.description_short,n=e.area_m2,r=e.price,l=e.price_per_m2_pln,a=e.created,o=e.kind,i=e.type;return t.toLowerCase().match(m)&&E===le(o,i)&&"".concat(x," 00:00:00")<=a&&a<="".concat(O," 23:59:59")&&_<=n&&n<=M&&W<=l&&l<=U&&r<=H})).map((function(e,t){return{i:t,id:e.id,position:{lat:e.latitude,lng:e.longitude},name:e.our_url,item:e}}))}),[l,m,E,x,O,_,M,W,U,H]),re=function(e){return(0,r.useMemo)((function(){return i().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return i().marker([n,r])}))).getBounds()}),[])}(te.length?te:[{position:{lat:52.232855,lng:20.921111}}]),me=ne((0,r.useState)((function(){return re.getCenter()})),2),fe=me[0],de=me[1],pe=(0,r.useMemo)((function(){return te.filter((function(e){var t=e.position;return fe.distanceTo(t)<1e3*v}))}),[te,fe,v]);return console.log({nearby:pe}),r.createElement("div",null,r.createElement(V,{bounds:re,center:fe,setCenter:de,list:pe}),r.createElement("fieldset",null,r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:u,onChange:p})),r.createElement("label",null,r.createElement("span",null,"Radius"),r.createElement("input",{type:"range",list:"range-list",min:oe[0],max:oe[oe.length-1],value:v,onChange:y}),r.createElement("datalist",{id:"range-list"},oe.map((function(e){return r.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),r.createElement("span",null,"max ".concat(v," km")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Type"),r.createElement("select",{value:E,onChange:C},Object.entries(ae).map((function(e){var t=ne(e,2),n=t[0],l=t[1];return r.createElement("option",{key:n,value:n},l)}))))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Date From"),r.createElement("input",{type:"date",value:x,onChange:B})),r.createElement("label",null,r.createElement("span",null,"Date To"),r.createElement("input",{type:"date",value:O,onChange:I}))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Area From"),r.createElement("input",{type:"range",list:"area-list",min:ie[0],max:ie[ie.length-1],value:_,onChange:G}),r.createElement("datalist",{id:"area-list"},ie.map((function(e){return r.createElement("option",{key:e,value:e,label:[0,1e3,2e3,5e3].includes(e)?"".concat(e," m2"):void 0})})))),r.createElement("label",null,r.createElement("span",null,"Area To"),r.createElement("input",{type:"range",list:"area-list",min:ie[0],max:ie[ie.length-1],value:M,onChange:D}),r.createElement("span",null,"".concat(_,"-").concat(M," m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:ce[0],max:ce[ce.length-1],value:W,onChange:F}),r.createElement("datalist",{id:"price-list"},ce.map((function(e){return r.createElement("option",{key:e,value:e,label:[0,1e3,2e3,5e3].includes(e)?"".concat(e," pln/m2"):void 0})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:ce[0],max:ce[ce.length-1],value:U,onChange:q}),r.createElement("span",null,"".concat(W,"-").concat(U," pln/m2")))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price"),r.createElement("input",{type:"range",list:"total-list",min:ue[0],max:ue[ue.length-1],value:H,onChange:J,style:{width:350}}),r.createElement("datalist",{id:"total-list"},ue.map((function(e){return r.createElement("option",{key:e,value:e,label:[1e5,1e6,5e6].includes(e)?"".concat(e," pln"):void 0})}))),r.createElement("span",null,"max ".concat(H," pln"))))),r.createElement("div",null,"Found ".concat(pe.length," locations (out of ").concat(te.length,") out of a total of ").concat(l.length)),r.createElement("ol",null,te.map((function(e){return e.item})).map((function(e,t){var n=e.images,l=e.latitude,a=e.longitude,i=e.kind,c=e.type,u=e.format,s=e.area_m2,m=e.price,p=e.price_per_m2_pln,A=e.description_short,v=e.our_url,h=e.created,y=e.changed;return r.createElement("li",{key:t},r.createElement("ul",null,r.createElement("li",null,r.createElement(f.r,{className:ee.Gallery,images:n}),r.createElement(d.r,{href:o},"".concat(l,",").concat(a,"|").concat(v))),r.createElement("li",null,i),r.createElement("li",null,c),r.createElement("li",null,u),r.createElement("li",null,s),r.createElement("li",null,m),r.createElement("li",null,p),r.createElement("li",null,A),r.createElement("li",null,h),r.createElement("li",null,y)))}))))}function fe(){return r.createElement("div",{className:ee.Section},r.createElement("h2",null,"Scrap"),r.createElement(me,null))}},9539:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2784);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t,n,a=(t=(0,r.useState)(e),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],i=a[1],c=(0,r.useRef)();return(0,r.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout((function(){return i(e.toLowerCase())}),400),function(){clearTimeout(c.current)}}),[e]),[o]}},7591:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),l=n.n(r),a=n(2609),o=n.n(a)()(l());o.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;width:100%;height:100%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory;transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.zDhTSHDK36rhYKliKHPK img{width:100%;height:100%;object-fit:cover;scroll-snap-align:start}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{min-width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}","",{version:3,sources:["webpack://./src/components/Gallery/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CACA,uDAAA,CAMA,0BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,uBAAA,CAGF,4CACE,cAAA,CACA,WAAA,CACA,aAAA,CAGF,4CACE,UAAA,CACA,WAAA,CAGJ,sBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0BACE,SAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".Gallery {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n  transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);\n\n  &:hover {\n    // transform: scale(1.05);\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    scroll-snap-align: start;\n  }\n\n  .ImgWrapper {\n    min-width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n  }\n\n  .Loader {\n    width: 100%;\n    height: 100%;\n  }\n}\n.Loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex: none;\n    width: 64px;\n    height: 64px;\n  }\n}\n"],sourceRoot:""}]),o.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const i=o},2091:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),l=n.n(r),a=n(2609),o=n.n(a)()(l());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),o.locals={};const i=o},4783:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),l=n.n(r),a=n(2609),o=n.n(a)()(l());o.push([e.id,".P3Q9GkPwIqNuy8dlqpE7{display:flex;flex-direction:column}.cvrF_PSyooSdvEiMfe27{display:flex;flex-direction:row;background:gray}.GvqsYcBpAV0qgF9U37VA{flex:1;color:#d3d3d3;padding:1em}.GvqsYcBpAV0qgF9U37VA.vRObf1WxeMfIdnBjn4VW{color:#fff}","",{version:3,sources:["webpack://./src/components/Tabs/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CAMF,sBACE,YAAA,CACA,kBAAA,CACA,eAAA,CAGF,sBACE,MAAA,CACA,aAAA,CACA,WAAA,CAEA,2CACE,UAAA",sourcesContent:[".Tabs {\n  display: flex;\n  flex-direction: column;\n\n  .TabPanel {\n  }\n}\n\n.TabList {\n  display: flex;\n  flex-direction: row;\n  background: gray;\n}\n\n.Tab {\n  flex: 1;\n  color: lightgray;\n  padding: 1em;\n\n  &.selected {\n    color: white;\n  }\n}\n"],sourceRoot:""}]),o.locals={Tabs:"P3Q9GkPwIqNuy8dlqpE7",TabList:"cvrF_PSyooSdvEiMfe27",Tab:"GvqsYcBpAV0qgF9U37VA",selected:"vRObf1WxeMfIdnBjn4VW"};const i=o},685:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),l=n.n(r),a=n(2609),o=n.n(a),i=n(9138),c=o()(l());c.i(i.Z),c.push([e.id,".bftehQR4Czxzu4llx5hI{display:flex;flex-direction:row;scroll-snap-type:x mandatory}.bftehQR4Czxzu4llx5hI img{max-width:100%;scroll-snap-align:center}.wED2yBxKbDWWn0YmR1Pt{height:75vh;border:2px solid red}.wED2yBxKbDWWn0YmR1Pt header{font-weight:bold}","",{version:3,sources:["webpack://./src/containers/Scrap/Map.module.scss"],names:[],mappings:"AAKA,sBACE,YAAA,CACA,kBAAA,CACA,4BAAA,CAEA,0BACE,cAAA,CACA,wBAAA,CAIJ,sBACE,WAAA,CACA,oBAAA,CAEA,6BACE,gBAAA",sourcesContent:['@import "~leaflet/dist/leaflet.css";\n\n.Layout {\n}\n\n.Gallery {\n  display: flex;\n  flex-direction: row;\n  scroll-snap-type: x mandatory;\n\n  img {\n    max-width: 100%;\n    scroll-snap-align: center;\n  }\n}\n\n.Map {\n  height: 75vh;\n  border: 2px solid red;\n\n  header {\n    font-weight: bold;\n  }\n}\n'],sourceRoot:""}]),c.locals={Gallery:"bftehQR4Czxzu4llx5hI",Map:"wED2yBxKbDWWn0YmR1Pt"};const u=c},8753:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),l=n.n(r),a=n(2609),o=n.n(a)()(l());o.push([e.id,".Cr_uxdeFGMbnY_b8m7Ua{color:orange}.ruFpYGCvVWkqcHBOpYBO{float:left;width:200px;height:150px;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.ruFpYGCvVWkqcHBOpYBO img{max-width:100%;scroll-snap-align:center}","",{version:3,sources:["webpack://./src/containers/Scrap/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAGF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,4BAAA,CAEA,0BACE,cAAA,CACA,wBAAA",sourcesContent:[".Section {\n  color: orange;\n}\n\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n  display: flex;\n  flex-direction: row;\n  scroll-snap-type: x mandatory;\n\n  img {\n    max-width: 100%;\n    scroll-snap-align: center;\n  }\n}\n"],sourceRoot:""}]),o.locals={Section:"Cr_uxdeFGMbnY_b8m7Ua",Gallery:"ruFpYGCvVWkqcHBOpYBO"};const i=o}}]);
//# sourceMappingURL=475.js.map