"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[100],{6280:(e,t,n)=>{n.d(t,{r:()=>_});var r=n(2784),a=n(1148),o=n(8871),l=n(357),i=n(5096),c=function(e){var t=e.height,n=void 0===t?80:t,a=e.width,o=void 0===a?80:a,l=e.color,i=void 0===l?"green":l,c=e.radius,u=void 0===c?1:c,s=e.label,m=void 0===s?"audio-loading":s;return r.createElement("svg",{width:o,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},r.createElement("defs",null,r.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},r.createElement("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),r.createElement("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),r.createElement("stop",{stopColor:i,offset:"100%"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(1 1)"},r.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:"2"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),r.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},u=n(2779),s=n.n(u),m=n(6062),d=n.n(m),f=n(4036),A=n.n(f),p=n(6793),h=n.n(p),g=n(7892),y=n.n(g),v=n(1173),b=n.n(v),C=n(2464),E=n.n(C),w=n(7591),P={};P.styleTagTransform=E(),P.setAttributes=y(),P.insert=h().bind(null,"head"),P.domAPI=A(),P.insertStyleElement=b(),d()(w.Z,P);const k=w.Z&&w.Z.locals?w.Z.locals:void 0;var O=["src"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t,n,r,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=(0,l.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:function(){return e(t)},onerror:function(){return e((n=(t=j(i.VmB.icon,5))[0],r=t[1],a=t[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(n," ").concat(r,'"><path fill="currentColor" d="').concat(a,'"></path></svg>')));var t,n,r,a},src:t})})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){S(o,r,a,l,i,"next",e)}function i(e){S(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}());function D(e){var t=e.src,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,O),a=T.read(t);return r.createElement("img",x({src:a},n,{referrerPolicy:"no-referrer"}))}function R(){return r.createElement("div",{className:k.Loader},r.createElement(c,null))}function B(e){var t=x({},e);return r.createElement("div",{className:k.ImgWrapper},r.createElement(r.Suspense,{fallback:r.createElement(R,null)},r.createElement(D,t)))}function _(e){var t=e.className,n=e.images,l=e.srcSet,i=void 0===l?[]:l,c=j((0,r.useState)(!1),2),u=c[0],m=c[1],d=j((0,r.useState)(!1),2),f=d[0],A=d[1],p=(0,r.useRef)(null),h=j((0,r.useState)({scale:0}),2),g=h[0],y=h[1],v=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=v.pipe((0,o.b)(400)).subscribe((function(e){e.scrollLeft>=e.scrollWidth-e.offsetWidth&&A(!0)}));return function(){return e.unsubscribe()}}),[v]);var b=(0,r.useCallback)((function(e){return e.stopPropagation(),y((function(e){if(p.current){var t=p.current.getBoundingClientRect(),n=t.x,r=t.y,a=t.width,o=t.height,l=window,i=l.innerWidth,c=l.innerHeight,u=i/a*1;return e.scale?{scale:0}:{scale:u,translateX:((i-a)/2-n)/u,translateY:((c-o)/2-r)/u}}return e}))}),[p]);return(0,r.useEffect)((function(){var e=function(e){var t=e.target;return v.next(t)};if(p.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){j(e,1)[0].isIntersecting&&m(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(p.current),p.current.addEventListener("scroll",e),function(){p.current&&(t.unobserve(p.current),p.current.removeEventListener("scroll",e))}}}),[p]),n.length?r.createElement("div",{ref:p,className:s()(t,k.Gallery),style:g.scale?{cursor:"zoom-out",transform:"scale(".concat(g.scale,") translate(").concat(g.translateX,"px, ").concat(g.translateY,"px)"),zIndex:1}:{cursor:"zoom-in"},onClick:b},u&&n.slice(0,f?n.length:3).map((function(e,t){return r.createElement(B,{key:t,src:e,srcSet:g.scale?i[t]:void 0,alt:"Image #".concat(t+1)})}))):null}},891:(e,t,n)=>{n.d(t,{r:()=>l});var r=n(2784),a=["href"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.href,n=void 0===t?"#":t,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,a),i="#"===n[0];return r.createElement("a",o({href:n,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},l))}},1100:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(2784),a=n(8283),o=n(8320),l=n.n(o),i=n(1498),c=n(357),u=n(7302),s=n.n(u),m=n(9539),d=n(6280),f=n(891),A=n(2779),p=n.n(A),h=n(6062),g=n.n(h),y=n(4036),v=n.n(y),b=n(6793),C=n.n(b),E=n(7892),w=n.n(E),P=n(1173),k=n.n(P),O=n(2464),x=n.n(O),S=n(9199),j={};j.styleTagTransform=x(),j.setAttributes=w(),j.insert=C().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=k(),g()(S.Z,j);const M=S.Z&&S.Z.locals?S.Z.locals:void 0;var T=["priceTo"],D=["priceFrom"],R=["_history"],B=["Images","_history"];function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t,n,r,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var W={LastModifiedDate:-1,OriginalReleaseDate:-1,ProductTitle:1,PublisherName:1,_price:1,_rating:-1,_created:-1,_updated:-1},F=[0,100,200,300,400,500,1e3],U=(0,c.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/games/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{results:e.Products}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){Z(o,r,a,l,i,"next",e)}function i(e){Z(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}()),G=function(e){var t=e.ProductId,n=e.ProductTitle;return"https://www.xbox.com/pl-pl/games/store/".concat(s()(n),"/").concat(t)},J=function(e){var t=N(e.DisplaySkuAvailabilities,1),n=N(t[0].Availabilities,1)[0],r=n.Conditions,a=n.OrderManagementData.Price,o=N(e.LocalizedProperties,1)[0],l=o.DeveloperName,i=o.Images,c=o.ProductDescription,u=o.ProductTitle,s=o.PublisherName,m=e.LastModifiedDate,d=N(e.MarketProperties,1)[0],f=d.OriginalReleaseDate,A=d.UsageData,p=e.ProductId,h=e.Properties.Categories;return{_created:e._created,_checked:e._checked,_updated:e._updated,_filter:u.toLowerCase(),_price:a.ListPrice,_rating:A[A.length-1].AverageRating,Categories:h,Conditions:r,DeveloperName:l,Images:i.sort((function(e,t){return e.Width-t.Width})).slice(0,1).map((function(e){return e.Uri})),LastModifiedDate:new Date(m),OriginalReleaseDate:new Date(f),Price:a,ProductDescription:c,ProductId:p,ProductTitle:u,PublisherName:s,UsageData:A}};function K(e){var t=e.version,n=void 0===t?"v1":t,a=U.read(n).results,o=(0,r.useMemo)((function(){return{category:Object.keys(a.reduce((function(e,t){var n=t.Properties.Categories;return Object.assign(e,(n||[]).reduce((function(e,t){return Object.assign(e,Q({},t,t))}),{}))}),{"":""})).sort((function(e,t){return e.localeCompare(t)}))}}),[a]),l=N((0,r.useState)((function(){return{category:"",search:"",onlyReduced:!1,priceFrom:F[0],priceTo:F[F.length-1]}})),2),i=l[0],c=l[1],u=N((0,m.Z)(i.search),1)[0],s=N((0,r.useState)((function(){return Object.keys(W)[7]})),2),f=s[0],A=s[1],p=(0,r.useCallback)((function(e){var t=e.target;return A(t.value)}),[]),h=(0,r.useCallback)((function(e){var t=e.target;return c((function(e){var n=e.priceTo,r=H(e,T),a=Number(t.value);return L(L({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[]),g=(0,r.useCallback)((function(e){var t=e.target;return c((function(e){var n=e.priceFrom,r=H(e,D),a=Number(t.value);return L(L({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[]);console.log({options:o,filters:i,results:a});var y=(0,r.useMemo)((function(){return a.map((function(e){var t=e._history,n=void 0===t?{}:t,r=H(e,R);return L({_history:[r].concat(Object.values(n).reverse()).map(J).filter((function(e,t,n){return 0===t||JSON.stringify(e)!==JSON.stringify(n[t-1])}))},J(r))})).filter((function(e){return(!i.category||(e.Categories||[]).includes(i.category))&&(e._filter.match(u)||u.trim()===String(e.id))&&i.priceFrom<=e._price&&e._price<=i.priceTo&&(!i.onlyReduced||e.Price.ListPrice<e.Price.MSRP)}))}),[a,u,i.category,i.priceFrom,i.priceTo,i.onlyReduced]),v=(0,r.useMemo)((function(){return y.sort((function(e,t){return W[f]*(e[f]>t[f]?1:-1)}))}),[y,f]);return r.createElement("div",null,r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Category"),r.createElement("select",{value:i.category,onChange:(0,r.useCallback)((function(e){var t=e.target;return c((function(e){return L(L({},e),{},{category:t.value})}))}),[])},o.category.map((function(e){return r.createElement("option",{key:e,value:e},e)})))),r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:i.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return c((function(e){return L(L({},e),{},{search:t.value})}))}),[])})),r.createElement("label",null,r.createElement("span",null,"Sort"),r.createElement("select",{value:f,onChange:p},Object.entries(W).map((function(e){var t=N(e,1)[0];return r.createElement("option",{key:t,value:t},t)})))),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"Price From"),r.createElement("input",{type:"range",list:"price-list",min:F[0],max:F[F.length-1],value:i.priceFrom,onChange:h}),r.createElement("datalist",{id:"price-list"},F.map((function(e){return r.createElement("option",{key:e,value:e,label:F.includes(e)?"".concat(e," PLN"):void 0})})))),r.createElement("label",null,r.createElement("span",null,"Price To"),r.createElement("input",{type:"range",list:"price-list",min:F[0],max:F[F.length-1],value:i.priceTo,onChange:g}),r.createElement("span",null,"".concat(i.priceFrom,"-").concat(i.priceTo," pln"))),r.createElement("label",null,r.createElement("input",{type:"checkbox",checked:i.onlyReduced,onChange:(0,r.useCallback)((function(e){var t=e.target;return c((function(e){return L(L({},e),{},{onlyReduced:t.checked})}))}),[])}),r.createElement("span",null,"Only Reduced")))),r.createElement("div",null,"Found ".concat(y.length," products out of a total of ").concat(a.length)),r.createElement("ol",null,v.slice(0,100).map((function(e){var t=e.Images,n=e._history,a=H(e,B);return r.createElement("li",{key:a.ProductId,className:M.Row},r.createElement(d.r,{className:M.Gallery,images:t}),r.createElement(V,a),r.createElement(z,{history:n}))}))))}function z(e){var t=e.history,n=N((0,r.useState)((function(){return!(t.length>2)})),2),a=n[0],o=n[1];return r.createElement("div",{className:M.History},(a?t:t.slice(0,2)).map((function(e,t){return r.createElement(q,_({key:t},e))})),!1===a&&r.createElement(f.r,{onClick:function(e){return e.preventDefault(),o(!0)}},"more..."))}function V(e){var t=e.Categories,n=e.Conditions.ClientConditions.AllowedPlatforms,o=e.DeveloperName,c=e.OriginalReleaseDate,u=e.ProductDescription,s=e.ProductId,m=e.ProductTitle,d=e.PublisherName,A=e._created,p=void 0===A?0:A,h=e._checked,g=void 0===h?0:h,y=e._updated,v=void 0===y?0:y,b=N((0,r.useState)(!1),2),C=b[0],E=b[1];return r.createElement("div",{className:M.Summary},r.createElement("div",null,(0,i.Z)(p,"yyyy-MM-dd HH:mm"),v>0&&" updated: ".concat((0,i.Z)(v,"yyyy-MM-dd HH:mm")),g>0&&" checked: ".concat((0,i.Z)(g,"yyyy-MM-dd HH:mm"))),c&&r.createElement("h6",null,r.createElement("span",null,"OriginalReleaseDate: "),(0,i.Z)(c,"yyyy-MM-dd")),r.createElement("h3",null,r.createElement(f.r,{href:G({ProductId:s,ProductTitle:m})},m)),r.createElement("h4",null,d," / ",o),t&&r.createElement("h5",null,r.createElement("span",null,"Categories: "),t.join(", ")),n&&r.createElement("h5",null,r.createElement("span",null,"Platforms: "),n.map((function(e){return e.PlatformName})).join(", ")),u&&r.createElement("p",null,r.createElement(a.Z,{ellipsis:r.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),E(!0)}},"..."),lines:!C&&3},l()(u))))}function q(e){var t=e.Conditions,n=e.LastModifiedDate,a=e.Price,o=e.UsageData;return r.createElement("div",{className:M.Details},r.createElement("h5",null,r.createElement("span",{className:p()(M.Price,a.ListPrice<a.MSRP&&M.Sale)},[a.MSRP,a.CurrencyCode].join(" "))," / ",r.createElement("span",{className:p()(M.ListPrice,a.ListPrice<a.MSRP&&M.Sale)},[a.ListPrice,a.CurrencyCode].join(" "),a.ListPrice<a.MSRP&&r.createElement("span",{className:M.Reduction},"-".concat(Math.round(100*(1-a.ListPrice/a.MSRP)),"%")))," / ",r.createElement("span",null,[a.WholesalePrice,a.WholesaleCurrencyCode].join(" "))," ","(",r.createElement("span",null,(0,i.Z)(new Date(t.StartDate),"yyyy-MM-dd")," -"," ",(0,i.Z)(new Date(t.EndDate),"yyyy-MM-dd")),")"),r.createElement("div",null,r.createElement("span",null,(0,i.Z)(n,"yyyy-MM-dd HH:mm")),o&&r.createElement("span",null," -- ",r.createElement("span",null,"AverageRating: "),o.map((function(e,t){var n=e.AggregateTimeSpan,a=e.AverageRating,o=e.RatingCount;return r.createElement("span",{key:t},a," (",o,"/",n,")"," ")})))))}function X(){return r.createElement("div",{className:M.Section},r.createElement("h2",null,"Games"),r.createElement(K,null))}},9539:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){var t,n,o=(t=(0,r.useState)(e),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1],c=(0,r.useRef)();return(0,r.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout((function(){return i(e.toLowerCase())}),400),function(){clearTimeout(c.current)}}),[e]),[l]}},7591:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),a=n.n(r),o=n(2609),l=n.n(o)()(a());l.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;width:100%;height:100%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory;transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.zDhTSHDK36rhYKliKHPK img{width:100%;height:100%;object-fit:cover;scroll-snap-align:start}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{min-width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}","",{version:3,sources:["webpack://./src/components/Gallery/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CACA,uDAAA,CAMA,0BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,uBAAA,CAGF,4CACE,cAAA,CACA,WAAA,CACA,aAAA,CAGF,4CACE,UAAA,CACA,WAAA,CAGJ,sBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0BACE,SAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".Gallery {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n  transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);\n\n  &:hover {\n    // transform: scale(1.05);\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    scroll-snap-align: start;\n  }\n\n  .ImgWrapper {\n    min-width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n  }\n\n  .Loader {\n    width: 100%;\n    height: 100%;\n  }\n}\n.Loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex: none;\n    width: 64px;\n    height: 64px;\n  }\n}\n"],sourceRoot:""}]),l.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const i=l},9199:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),a=n.n(r),o=n(2609),l=n.n(o)()(a());l.push([e.id,".JHMQTrkI8VTUhO5W6Kyg{color:purple}.VD4K4TGjIyjjLnk_3HXt{clear:both;padding:1em 1em 1em 160px;border-top:1px solid #d3d3d3}.zWEcVheTnvocuW1FSxpw{position:absolute;margin-left:-160px;width:150px;height:200px}.W2VsCYe_2bLlsim6Q3fu h3{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h4{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h5{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h6{float:right;margin-block-start:.5em;margin-block-end:.5em}.xbPdv3wb5CQnfQJHT_m0{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}.xbPdv3wb5CQnfQJHT_m0 .SlIfQB3ry6_hJyBji_QX.QRu0wvU40E3e0bnIAmyI{color:#8a2be2}.xbPdv3wb5CQnfQJHT_m0 .QhHNtY1NpYZMLFeAFnit.okUVqHjk0EnMnDYRdlZZ{color:#a9a9a9;text-decoration:line-through}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm{color:#9932cc}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm.okUVqHjk0EnMnDYRdlZZ{color:#006400}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm .PslwMNU8XdSmYHbLRZQz{background:#006400;color:#fff;margin-left:.25em;padding:0 .25em}.xbPdv3wb5CQnfQJHT_m0 h5{margin-block-start:.5em;margin-block-end:.5em}","",{version:3,sources:["webpack://./src/containers/Games/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,4BAAA,CAEF,sBACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAGJ,sBACE,4BAAA,CACA,eAAA,CACA,gBAAA,CAGE,iEACE,aAAA,CAIF,iEACE,aAAA,CACA,4BAAA,CAGJ,4CACE,aAAA,CACA,iEACE,aAAA,CAEF,kEACE,kBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CAGJ,yBACE,uBAAA,CACA,qBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 1em 1em 1em 160px;\n  border-top: 1px solid lightgray;\n}\n.Gallery {\n  position: absolute;\n  margin-left: -160px;\n  width: 150px;\n  height: 200px;\n}\n.Summary {\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h6 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n}\n.Details {\n  border-top: 1px solid lightgray;\n  margin-top: 0.5em;\n  padding-top: 0.5em;\n\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  .Price {\n    &.Sale {\n      color: darkgray;\n      text-decoration: line-through;\n    }\n  }\n  .ListPrice {\n    color: darkorchid;\n    &.Sale {\n      color: darkgreen;\n    }\n    .Reduction {\n      background: darkgreen;\n      color: white;\n      margin-left: 0.25em;\n      padding: 0 0.25em;\n    }\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n}\n"],sourceRoot:""}]),l.locals={Section:"JHMQTrkI8VTUhO5W6Kyg",Row:"VD4K4TGjIyjjLnk_3HXt",Gallery:"zWEcVheTnvocuW1FSxpw",Summary:"W2VsCYe_2bLlsim6Q3fu",Details:"xbPdv3wb5CQnfQJHT_m0",Feature:"SlIfQB3ry6_hJyBji_QX",changed:"QRu0wvU40E3e0bnIAmyI",Price:"QhHNtY1NpYZMLFeAFnit",Sale:"okUVqHjk0EnMnDYRdlZZ",ListPrice:"whYdJS2wMeoer7RYfLOm",Reduction:"PslwMNU8XdSmYHbLRZQz"};const i=l}}]);
//# sourceMappingURL=100.js.map