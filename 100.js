"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[100],{6280:(e,t,r)=>{r.d(t,{r:()=>N});var n=r(2784),a=r(1148),o=r(8871),i=r(357),l=r(5096),c=function(e){var t=e.height,r=void 0===t?80:t,a=e.width,o=void 0===a?80:a,i=e.color,l=void 0===i?"green":i,c=e.radius,u=void 0===c?1:c,s=e.label,m=void 0===s?"audio-loading":s;return n.createElement("svg",{width:o,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},n.createElement("defs",null,n.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},n.createElement("stop",{stopColor:l,stopOpacity:"0",offset:"0%"}),n.createElement("stop",{stopColor:l,stopOpacity:".631",offset:"63.146%"}),n.createElement("stop",{stopColor:l,offset:"100%"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(1 1)"},n.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:l,strokeWidth:"2"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),n.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))};$RefreshReg$(c,"Spinner");var u=r(2779),s=r.n(u),m=r(6062),f=r.n(m),d=r(4036),A=r.n(d),p=r(6793),h=r.n(p),g=r(7892),y=r.n(g),v=r(1173),b=r.n(v),C=r(2464),E=r.n(C),w=r(7591),P={};P.styleTagTransform=E(),P.setAttributes=y(),P.insert=h().bind(null,"head"),P.domAPI=A(),P.insertStyleElement=b(),f()(w.Z,P);const k=w.Z&&w.Z.locals?w.Z.locals:void 0;var O=$RefreshSig$(),S=["src"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M,T,B,_,I=(0,i.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var r=new Image;Object.assign(r,{onload:function(){return e(t)},onerror:function(){return e((r=(t=j(l.VmB.icon,5))[0],n=t[1],a=t[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(r," ").concat(n,'"><path fill="currentColor" d="').concat(a,'"></path></svg>')));var t,r,n,a},src:t})})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){R(o,n,a,i,l,"next",e)}function l(e){R(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function L(e){var t=e.src,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,S),a=I.read(t);return n.createElement("img",x({src:a},r,{referrerPolicy:"no-referrer"}))}function H(){return n.createElement("div",{className:k.Loader},n.createElement(c,null))}function Q(e){var t=x({},e);return n.createElement("div",{className:k.ImgWrapper},n.createElement(n.Suspense,{fallback:n.createElement(H,null)},n.createElement(L,t)))}function N(e){O();var t=e.className,r=e.images,i=e.srcSet,l=void 0===i?[]:i,c=j((0,n.useState)(!1),2),u=c[0],m=c[1],f=j((0,n.useState)(!1),2),d=f[0],A=f[1],p=(0,n.useRef)(null),h=j((0,n.useState)({scale:0}),2),g=h[0],y=h[1],v=(0,n.useMemo)((function(){return new a.x}),[]);(0,n.useEffect)((function(){var e=v.pipe((0,o.b)(400)).subscribe((function(e){e.scrollLeft>=e.scrollWidth-e.offsetWidth&&A(!0)}));return function(){return e.unsubscribe()}}),[v]);var b=(0,n.useCallback)((function(e){return e.stopPropagation(),y((function(e){if(p.current){var t=p.current.getBoundingClientRect(),r=t.x,n=t.y,a=t.width,o=t.height,i=window,l=i.innerWidth,c=i.innerHeight,u=l/a*1;return e.scale?{scale:0}:{scale:u,translateX:((l-a)/2-r)/u,translateY:((c-o)/2-n)/u}}return e}))}),[p]);return(0,n.useEffect)((function(){var e=function(e){var t=e.target;return v.next(t)};if(p.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){j(e,1)[0].isIntersecting&&m(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(p.current),p.current.addEventListener("scroll",e),function(){p.current&&(t.unobserve(p.current),p.current.removeEventListener("scroll",e))}}}),[p]),r.length?n.createElement("div",{ref:p,className:s()(t,k.Gallery),style:g.scale?{cursor:"zoom-out",transform:"scale(".concat(g.scale,") translate(").concat(g.translateX,"px, ").concat(g.translateY,"px)"),zIndex:1}:{cursor:"zoom-in"},onClick:b},u&&r.slice(0,d?r.length:3).map((function(e,t){return n.createElement(Q,{key:t,src:e,srcSet:g.scale?l[t]:void 0,alt:"Image #".concat(t+1)})}))):null}M=L,T=H,B=Q,O(N,"kUwmkO80o80KtQ4o/tpHmoBxWuA="),_=N,$RefreshReg$(M,"Img"),$RefreshReg$(T,"Loader"),$RefreshReg$(B,"ImgWrapper"),$RefreshReg$(_,"Gallery")},891:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(2784),a=["href"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){var t=e.href,r=void 0===t?"#":t,i=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,a),l="#"===r[0];return n.createElement("a",o({href:r,target:l?void 0:"_blank",rel:l?void 0:"noopener noreferrer"},i))}$RefreshReg$(i,"Link")},1100:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ie});var n=r(2784),a=r(8283),o=r(8320),i=r.n(o),l=r(1498),c=r(357),u=r(7302),s=r.n(u),m=r(9539),f=r(6280),d=r(891),A=r(2779),p=r.n(A),h=r(6062),g=r.n(h),y=r(4036),v=r.n(y),b=r(6793),C=r.n(b),E=r(7892),w=r.n(E),P=r(1173),k=r.n(P),O=r(2464),S=r.n(O),x=r(9199),R={};R.styleTagTransform=S(),R.setAttributes=w(),R.insert=C().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=k(),g()(x.Z,R);const j=x.Z&&x.Z.locals?x.Z.locals:void 0;var D=$RefreshSig$(),M=$RefreshSig$(),T=$RefreshSig$(),B=["priceTo"],_=["priceFrom"],I=["_history"],L=["Images","_history"];function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}var G,U,K,J,V,q={LastModifiedDate:-1,OriginalReleaseDate:-1,ProductTitle:1,PublisherName:1,_price:1,_rating:-1,_created:-1,_updated:-1},z=[0,100,200,300,400,500,1e3],X=(0,c.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/games/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json().then((function(e){return{results:e.Products}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){F(o,n,a,i,l,"next",e)}function l(e){F(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),ee=function(e){var t=e.ProductId,r=e.ProductTitle;return"https://www.xbox.com/pl-pl/games/store/".concat(s()(r),"/").concat(t)},te=function(e){var t=W(e.DisplaySkuAvailabilities,1),r=W(t[0].Availabilities,1)[0],n=r.Conditions,a=r.OrderManagementData.Price,o=W(e.LocalizedProperties,1)[0],i=o.DeveloperName,l=o.Images,c=o.ProductDescription,u=o.ProductTitle,s=o.PublisherName,m=e.LastModifiedDate,f=W(e.MarketProperties,1)[0],d=f.OriginalReleaseDate,A=f.UsageData,p=e.ProductId,h=e.Properties.Categories;return{_created:e._created,_checked:e._checked,_updated:e._updated,_filter:u.toLowerCase(),_price:a.ListPrice,_rating:A[A.length-1].AverageRating,Categories:h,Conditions:n,DeveloperName:i,Images:l.sort((function(e,t){return e.Width-t.Width})).slice(0,1).map((function(e){return e.Uri})),LastModifiedDate:new Date(m),OriginalReleaseDate:new Date(d),Price:a,ProductDescription:c,ProductId:p,ProductTitle:u,PublisherName:s,UsageData:A}};function re(e){D();var t=e.version,r=void 0===t?"v1":t,a=X.read(r).results,o=(0,n.useMemo)((function(){return{category:Object.keys(a.reduce((function(e,t){var r=t.Properties.Categories;return Object.assign(e,(r||[]).reduce((function(e,t){return Object.assign(e,$({},t,t))}),{}))}),{"":""})).sort((function(e,t){return e.localeCompare(t)}))}}),[a]),i=W((0,n.useState)((function(){return{category:"",search:"",onlyReduced:!1,priceFrom:z[0],priceTo:z[z.length-1]}})),2),l=i[0],c=i[1],u=W((0,m.Z)(l.search),1)[0],s=W((0,n.useState)((function(){return Object.keys(q)[7]})),2),d=s[0],A=s[1],p=(0,n.useCallback)((function(e){var t=e.target;return A(t.value)}),[]),h=(0,n.useCallback)((function(e){var t=e.target;return c((function(e){var r=e.priceTo,n=Y(e,B),a=Number(t.value);return N(N({},n),{},{priceFrom:a,priceTo:r<a?a:r})}))}),[]),g=(0,n.useCallback)((function(e){var t=e.target;return c((function(e){var r=e.priceFrom,n=Y(e,_),a=Number(t.value);return N(N({},n),{},{priceFrom:a>r?r:a,priceTo:a})}))}),[]);console.log({options:o,filters:l,results:a});var y=(0,n.useMemo)((function(){return a.map((function(e){var t=e._history,r=void 0===t?{}:t,n=Y(e,I);return N({_history:[n].concat(Object.values(r).reverse()).map(te).filter((function(e,t,r){return 0===t||JSON.stringify(e)!==JSON.stringify(r[t-1])}))},te(n))})).filter((function(e){return(!l.category||(e.Categories||[]).includes(l.category))&&(e._filter.match(u)||u.trim()===String(e.id))&&l.priceFrom<=e._price&&e._price<=l.priceTo&&(!l.onlyReduced||e.Price.ListPrice<e.Price.MSRP)}))}),[a,u,l.category,l.priceFrom,l.priceTo,l.onlyReduced]),v=(0,n.useMemo)((function(){return y.sort((function(e,t){return q[d]*(e[d]>t[d]?1:-1)}))}),[y,d]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Category"),n.createElement("select",{value:l.category,onChange:(0,n.useCallback)((function(e){var t=e.target;return c((function(e){return N(N({},e),{},{category:t.value})}))}),[])},o.category.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:l.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return c((function(e){return N(N({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:d,onChange:p},Object.entries(q).map((function(e){var t=W(e,1)[0];return n.createElement("option",{key:t,value:t},t)})))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:z[0],max:z[z.length-1],value:l.priceFrom,onChange:h}),n.createElement("datalist",{id:"price-list"},z.map((function(e){return n.createElement("option",{key:e,value:e,label:z.includes(e)?"".concat(e," PLN"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:z[0],max:z[z.length-1],value:l.priceTo,onChange:g}),n.createElement("span",null,"".concat(l.priceFrom,"-").concat(l.priceTo," pln"))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:l.onlyReduced,onChange:(0,n.useCallback)((function(e){var t=e.target;return c((function(e){return N(N({},e),{},{onlyReduced:t.checked})}))}),[])}),n.createElement("span",null,"Only Reduced")))),n.createElement("div",null,"Found ".concat(y.length," products out of a total of ").concat(a.length)),n.createElement("ol",null,v.slice(0,100).map((function(e){var t=e.Images,r=e._history,a=Y(e,L);return n.createElement("li",{key:a.ProductId,className:j.Row},n.createElement(f.r,{className:j.Gallery,images:t}),n.createElement(ae,a),n.createElement(ne,{history:r}))}))))}function ne(e){M();var t=e.history,r=W((0,n.useState)((function(){return!(t.length>2)})),2),a=r[0],o=r[1];return n.createElement("div",{className:j.History},(a?t:t.slice(0,2)).map((function(e,t){return n.createElement(oe,H({key:t},e))})),!1===a&&n.createElement(d.r,{onClick:function(e){return e.preventDefault(),o(!0)}},"more..."))}function ae(e){T();var t=e.Categories,r=e.Conditions.ClientConditions.AllowedPlatforms,o=e.DeveloperName,c=e.OriginalReleaseDate,u=e.ProductDescription,s=e.ProductId,m=e.ProductTitle,f=e.PublisherName,A=e._created,p=void 0===A?0:A,h=e._checked,g=void 0===h?0:h,y=e._updated,v=void 0===y?0:y,b=W((0,n.useState)(!1),2),C=b[0],E=b[1];return n.createElement("div",{className:j.Summary},n.createElement("div",null,(0,l.Z)(p,"yyyy-MM-dd HH:mm"),v>0&&" updated: ".concat((0,l.Z)(v,"yyyy-MM-dd HH:mm")),g>0&&" checked: ".concat((0,l.Z)(g,"yyyy-MM-dd HH:mm"))),c&&n.createElement("h6",null,n.createElement("span",null,"OriginalReleaseDate: "),(0,l.Z)(c,"yyyy-MM-dd")),n.createElement("h3",null,n.createElement(d.r,{href:ee({ProductId:s,ProductTitle:m})},m)),n.createElement("h4",null,f," / ",o),t&&n.createElement("h5",null,n.createElement("span",null,"Categories: "),t.join(", ")),r&&n.createElement("h5",null,n.createElement("span",null,"Platforms: "),r.map((function(e){return e.PlatformName})).join(", ")),u&&n.createElement("p",null,n.createElement(a.Z,{ellipsis:n.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),E(!0)}},"..."),lines:!C&&3},i()(u))))}function oe(e){var t=e.Conditions,r=e.LastModifiedDate,a=e.Price,o=e.UsageData;return n.createElement("div",{className:j.Details},n.createElement("h5",null,n.createElement("span",{className:p()(j.Price,a.ListPrice<a.MSRP&&j.Sale)},[a.MSRP,a.CurrencyCode].join(" "))," / ",n.createElement("span",{className:p()(j.ListPrice,a.ListPrice<a.MSRP&&j.Sale)},[a.ListPrice,a.CurrencyCode].join(" "),a.ListPrice<a.MSRP&&n.createElement("span",{className:j.Reduction},"-".concat(Math.round(100*(1-a.ListPrice/a.MSRP)),"%")))," / ",n.createElement("span",null,[a.WholesalePrice,a.WholesaleCurrencyCode].join(" "))," ","(",n.createElement("span",null,(0,l.Z)(new Date(t.StartDate),"yyyy-MM-dd")," -"," ",(0,l.Z)(new Date(t.EndDate),"yyyy-MM-dd")),")"),n.createElement("div",null,n.createElement("span",null,(0,l.Z)(r,"yyyy-MM-dd HH:mm")),o&&n.createElement("span",null," -- ",n.createElement("span",null,"AverageRating: "),o.map((function(e,t){var r=e.AggregateTimeSpan,a=e.AverageRating,o=e.RatingCount;return n.createElement("span",{key:t},a," (",o,"/",r,")"," ")})))))}function ie(){return n.createElement("div",{className:j.Section},n.createElement("h2",null,"Games"),n.createElement(re,null))}D(re,"bjPDdayYG4KVjA3a+QLJCYCNW9A=",!1,(function(){return[m.Z]})),G=re,M(ne,"BWXG/sn8cc9rGI9nXGNqMlLVHnI="),U=ne,T(ae,"DuL5jiiQQFgbn7gBKAyxwS/H4Ek="),K=ae,J=oe,V=ie,$RefreshReg$(G,"Data"),$RefreshReg$(U,"History"),$RefreshReg$(K,"Summary"),$RefreshReg$(J,"Details"),$RefreshReg$(V,"Section")},9539:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(2784),a=$RefreshSig$();function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){a();var t,r,i=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],c=i[1],u=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(u.current),u.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(u.current)}}),[e]),[l]}a(i,"qvQ9Qwa2iNZtbqfvv1wf51EkC04=")},7591:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(272),a=r.n(n),o=r(2609),i=r.n(o)()(a());i.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;width:100%;height:100%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory;transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.zDhTSHDK36rhYKliKHPK img{width:100%;height:100%;object-fit:cover;scroll-snap-align:start}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{min-width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}","",{version:3,sources:["webpack://./src/components/Gallery/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CACA,uDAAA,CAMA,0BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,uBAAA,CAGF,4CACE,cAAA,CACA,WAAA,CACA,aAAA,CAGF,4CACE,UAAA,CACA,WAAA,CAGJ,sBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0BACE,SAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".Gallery {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n  transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);\n\n  &:hover {\n    // transform: scale(1.05);\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    scroll-snap-align: start;\n  }\n\n  .ImgWrapper {\n    min-width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n  }\n\n  .Loader {\n    width: 100%;\n    height: 100%;\n  }\n}\n.Loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex: none;\n    width: 64px;\n    height: 64px;\n  }\n}\n"],sourceRoot:""}]),i.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const l=i},9199:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(272),a=r.n(n),o=r(2609),i=r.n(o)()(a());i.push([e.id,".JHMQTrkI8VTUhO5W6Kyg{color:purple}.VD4K4TGjIyjjLnk_3HXt{clear:both;padding:1em 1em 1em 160px;border-top:1px solid #d3d3d3}.zWEcVheTnvocuW1FSxpw{position:absolute;margin-left:-160px;width:150px;height:200px}.W2VsCYe_2bLlsim6Q3fu h3{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h4{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h5{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h6{float:right;margin-block-start:.5em;margin-block-end:.5em}.xbPdv3wb5CQnfQJHT_m0{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}.xbPdv3wb5CQnfQJHT_m0 .SlIfQB3ry6_hJyBji_QX.QRu0wvU40E3e0bnIAmyI{color:#8a2be2}.xbPdv3wb5CQnfQJHT_m0 .QhHNtY1NpYZMLFeAFnit.okUVqHjk0EnMnDYRdlZZ{color:#a9a9a9;text-decoration:line-through}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm{color:#9932cc}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm.okUVqHjk0EnMnDYRdlZZ{color:#006400}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm .PslwMNU8XdSmYHbLRZQz{background:#006400;color:#fff;margin-left:.25em;padding:0 .25em}.xbPdv3wb5CQnfQJHT_m0 h5{margin-block-start:.5em;margin-block-end:.5em}","",{version:3,sources:["webpack://./src/containers/Games/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,4BAAA,CAEF,sBACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAGJ,sBACE,4BAAA,CACA,eAAA,CACA,gBAAA,CAGE,iEACE,aAAA,CAIF,iEACE,aAAA,CACA,4BAAA,CAGJ,4CACE,aAAA,CACA,iEACE,aAAA,CAEF,kEACE,kBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CAGJ,yBACE,uBAAA,CACA,qBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 1em 1em 1em 160px;\n  border-top: 1px solid lightgray;\n}\n.Gallery {\n  position: absolute;\n  margin-left: -160px;\n  width: 150px;\n  height: 200px;\n}\n.Summary {\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h6 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n}\n.Details {\n  border-top: 1px solid lightgray;\n  margin-top: 0.5em;\n  padding-top: 0.5em;\n\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  .Price {\n    &.Sale {\n      color: darkgray;\n      text-decoration: line-through;\n    }\n  }\n  .ListPrice {\n    color: darkorchid;\n    &.Sale {\n      color: darkgreen;\n    }\n    .Reduction {\n      background: darkgreen;\n      color: white;\n      margin-left: 0.25em;\n      padding: 0 0.25em;\n    }\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"JHMQTrkI8VTUhO5W6Kyg",Row:"VD4K4TGjIyjjLnk_3HXt",Gallery:"zWEcVheTnvocuW1FSxpw",Summary:"W2VsCYe_2bLlsim6Q3fu",Details:"xbPdv3wb5CQnfQJHT_m0",Feature:"SlIfQB3ry6_hJyBji_QX",changed:"QRu0wvU40E3e0bnIAmyI",Price:"QhHNtY1NpYZMLFeAFnit",Sale:"okUVqHjk0EnMnDYRdlZZ",ListPrice:"whYdJS2wMeoer7RYfLOm",Reduction:"PslwMNU8XdSmYHbLRZQz"};const l=i}}]);
//# sourceMappingURL=100.js.map