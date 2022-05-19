/*! For license information please see 100.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[100],{1100:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var n=r(2784),o=r(8283),a=r(8320),i=r.n(a),c=r(539),l=r(357),u=r(7302),s=r.n(u),m=r(9539),f=r(6280),d=r(891),p=r(2779),h=r.n(p),y=r(6062),g=r.n(y),v=r(4036),A=r.n(v),b=r(6793),E=r.n(b),C=r(7892),w=r.n(C),P=r(1173),k=r.n(P),S=r(2464),O=r.n(S),x=r(9199),_={};_.styleTagTransform=O(),_.setAttributes=w(),_.insert=E().bind(null,"head"),_.domAPI=A(),_.insertStyleElement=k(),g()(x.Z,_);const L=x.Z&&x.Z.locals?x.Z.locals:void 0;function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var M=["priceTo"],T=["priceFrom"],D=["_history"],R=["Images","_history"];function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(){Z=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new w(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function m(){}function f(){}function d(){}var p={};c(p,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(P([])));y&&y!==t&&r.call(y,o)&&(p=y);var g=d.prototype=m.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==j(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=d,c(g,"constructor",d),c(d,"constructor",f),f.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(A.prototype),c(A.prototype,a,(function(){return this})),e.AsyncIterator=A,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new A(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function J(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var G={LastModifiedDate:-1,OriginalReleaseDate:-1,ProductTitle:1,PublisherName:1,_price:1,_rating:-1,_created:-1,_updated:-1},U=[0,100,200,300,400,500,1e3],W=(0,l.k)(function(){var e,t=(e=Z().mark((function e(t){var r;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/games/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json().then((function(e){return{results:e.Products}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){J(a,n,o,i,c,"next",e)}function c(e){J(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),V=function(e){var t=e.ProductId,r=e.ProductTitle;return"https://www.xbox.com/pl-pl/games/store/".concat(s()(r),"/").concat(t)},q=function(e){var t=H(e.DisplaySkuAvailabilities,1),r=H(t[0].Availabilities,1)[0],n=r.Conditions,o=r.OrderManagementData.Price,a=H(e.LocalizedProperties,1)[0],i=a.DeveloperName,c=a.Images,l=a.ProductDescription,u=a.ProductTitle,s=a.PublisherName,m=e.LastModifiedDate,f=H(e.MarketProperties,1)[0],d=f.OriginalReleaseDate,p=f.UsageData,h=e.ProductId,y=e.Properties.Categories;return{_created:e._created,_checked:e._checked,_updated:e._updated,_filter:u.toLowerCase(),_price:o.ListPrice,_rating:p[p.length-1].AverageRating,Categories:y,Conditions:n,DeveloperName:i,Images:c.sort((function(e,t){return e.Width-t.Width})).slice(0,1).map((function(e){return e.Uri})),LastModifiedDate:new Date(m),OriginalReleaseDate:new Date(d),Price:o,ProductDescription:l,ProductId:h,ProductTitle:u,PublisherName:s,UsageData:p}};function X(e){var t=e.version,r=void 0===t?"v1":t,o=W.read(r).results,a=(0,n.useMemo)((function(){return{category:Object.keys(o.reduce((function(e,t){var r=t.Properties.Categories;return Object.assign(e,(r||[]).reduce((function(e,t){return Object.assign(e,F({},t,t))}),{}))}),{"":""})).sort((function(e,t){return e.localeCompare(t)}))}}),[o]),i=H((0,n.useState)((function(){return{category:"",search:"",onlyReduced:!1,priceFrom:U[0],priceTo:U[U.length-1]}})),2),c=i[0],l=i[1],u=H((0,m.Z)(c.search),1)[0],s=H((0,n.useState)((function(){return Object.keys(G)[7]})),2),d=s[0],p=s[1],h=(0,n.useCallback)((function(e){var t=e.target;return p(t.value)}),[]),y=(0,n.useCallback)((function(e){var t=e.target;return l((function(e){var r=e.priceTo,n=I(e,M),o=Number(t.value);return B(B({},n),{},{priceFrom:o,priceTo:r<o?o:r})}))}),[]),g=(0,n.useCallback)((function(e){var t=e.target;return l((function(e){var r=e.priceFrom,n=I(e,T),o=Number(t.value);return B(B({},n),{},{priceFrom:o>r?r:o,priceTo:o})}))}),[]);console.log({options:a,filters:c,results:o});var v=(0,n.useMemo)((function(){return o.map((function(e){var t=e._history,r=void 0===t?{}:t,n=I(e,D);return B({_history:[n].concat(Object.values(r).reverse()).map(q).filter((function(e,t,r){return 0===t||JSON.stringify(e)!==JSON.stringify(r[t-1])}))},q(n))})).filter((function(e){return(!c.category||(e.Categories||[]).includes(c.category))&&(e._filter.match(u)||u.trim()===String(e.id))&&c.priceFrom<=e._price&&e._price<=c.priceTo&&(!c.onlyReduced||e.Price.ListPrice<e.Price.MSRP)}))}),[o,u,c.category,c.priceFrom,c.priceTo,c.onlyReduced]),A=(0,n.useMemo)((function(){return v.sort((function(e,t){return G[d]*(e[d]>t[d]?1:-1)}))}),[v,d]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Category"),n.createElement("select",{value:c.category,onChange:(0,n.useCallback)((function(e){var t=e.target;return l((function(e){return B(B({},e),{},{category:t.value})}))}),[])},a.category.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:c.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return l((function(e){return B(B({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:d,onChange:h},Object.entries(G).map((function(e){var t=H(e,1)[0];return n.createElement("option",{key:t,value:t},t)})))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:U[0],max:U[U.length-1],value:c.priceFrom,onChange:y}),n.createElement("datalist",{id:"price-list"},U.map((function(e){return n.createElement("option",{key:e,value:e,label:U.includes(e)?"".concat(e," PLN"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:U[0],max:U[U.length-1],value:c.priceTo,onChange:g}),n.createElement("span",null,"".concat(c.priceFrom,"-").concat(c.priceTo," pln"))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:c.onlyReduced,onChange:(0,n.useCallback)((function(e){var t=e.target;return l((function(e){return B(B({},e),{},{onlyReduced:t.checked})}))}),[])}),n.createElement("span",null,"Only Reduced")))),n.createElement("div",null,"Found ".concat(v.length," products out of a total of ").concat(o.length)),n.createElement("ol",null,A.slice(0,100).map((function(e){var t=e.Images,r=e._history,o=I(e,R);return n.createElement("li",{key:o.ProductId,className:L.Row},n.createElement(f.r,{className:L.Gallery,images:t}),n.createElement(K,o),n.createElement(z,{history:r}))}))))}function z(e){var t=e.history,r=H((0,n.useState)((function(){return!(t.length>2)})),2),o=r[0],a=r[1];return n.createElement("div",{className:L.History},(o?t:t.slice(0,2)).map((function(e,t){return n.createElement($,N({key:t},e))})),!1===o&&n.createElement(d.r,{onClick:function(e){return e.preventDefault(),a(!0)}},"more..."))}function K(e){var t=e.Categories,r=e.Conditions.ClientConditions.AllowedPlatforms,a=e.DeveloperName,l=e.OriginalReleaseDate,u=e.ProductDescription,s=e.ProductId,m=e.ProductTitle,f=e.PublisherName,p=e._created,h=void 0===p?0:p,y=e._checked,g=void 0===y?0:y,v=e._updated,A=void 0===v?0:v,b=H((0,n.useState)(!1),2),E=b[0],C=b[1];return n.createElement("div",{className:L.Summary},n.createElement("div",null,(0,c.Z)(h,"yyyy-MM-dd HH:mm"),A>0&&" updated: ".concat((0,c.Z)(A,"yyyy-MM-dd HH:mm")),g>0&&" checked: ".concat((0,c.Z)(g,"yyyy-MM-dd HH:mm"))),l&&n.createElement("h6",null,n.createElement("span",null,"OriginalReleaseDate: "),(0,c.Z)(l,"yyyy-MM-dd")),n.createElement("h3",null,n.createElement(d.r,{href:V({ProductId:s,ProductTitle:m})},m)),n.createElement("h4",null,f," / ",a),t&&n.createElement("h5",null,n.createElement("span",null,"Categories: "),t.join(", ")),r&&n.createElement("h5",null,n.createElement("span",null,"Platforms: "),r.map((function(e){return e.PlatformName})).join(", ")),u&&n.createElement("p",null,n.createElement(o.Z,{ellipsis:n.createElement("a",{href:"#",onClick:function(e){return e.preventDefault(),C(!0)}},"..."),lines:!E&&3},i()(u))))}function $(e){var t=e.Conditions,r=e.LastModifiedDate,o=e.Price,a=e.UsageData;return n.createElement("div",{className:L.Details},n.createElement("h5",null,n.createElement("span",{className:h()(L.Price,o.ListPrice<o.MSRP&&L.Sale)},[o.MSRP,o.CurrencyCode].join(" "))," / ",n.createElement("span",{className:h()(L.ListPrice,o.ListPrice<o.MSRP&&L.Sale)},[o.ListPrice,o.CurrencyCode].join(" "),o.ListPrice<o.MSRP&&n.createElement("span",{className:L.Reduction},"-".concat(Math.round(100*(1-o.ListPrice/o.MSRP)),"%")))," / ",n.createElement("span",null,[o.WholesalePrice,o.WholesaleCurrencyCode].join(" "))," ","(",n.createElement("span",null,(0,c.Z)(new Date(t.StartDate),"yyyy-MM-dd")," -"," ",(0,c.Z)(new Date(t.EndDate),"yyyy-MM-dd")),")"),n.createElement("div",null,n.createElement("span",null,(0,c.Z)(r,"yyyy-MM-dd HH:mm")),a&&n.createElement("span",null," -- ",n.createElement("span",null,"AverageRating: "),a.map((function(e,t){var r=e.AggregateTimeSpan,o=e.AverageRating,a=e.RatingCount;return n.createElement("span",{key:t},o," (",a,"/",r,")"," ")})))))}function ee(){return n.createElement("div",{className:L.Section},n.createElement("h2",null,"Games"),n.createElement(X,null))}},9539:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2784);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){var t,r,a=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1],l=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(l.current),l.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(l.current)}}),[e]),[i]}},9199:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([e.id,".JHMQTrkI8VTUhO5W6Kyg{color:purple}.VD4K4TGjIyjjLnk_3HXt{clear:both;padding:1em 1em 1em 160px;border-top:1px solid #d3d3d3}.zWEcVheTnvocuW1FSxpw{position:absolute;margin-left:-160px;width:150px;height:200px}.W2VsCYe_2bLlsim6Q3fu h3{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h4{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h5{margin-block-start:.5em;margin-block-end:.5em}.W2VsCYe_2bLlsim6Q3fu h6{float:right;margin-block-start:.5em;margin-block-end:.5em}.xbPdv3wb5CQnfQJHT_m0{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}.xbPdv3wb5CQnfQJHT_m0 .SlIfQB3ry6_hJyBji_QX.QRu0wvU40E3e0bnIAmyI{color:#8a2be2}.xbPdv3wb5CQnfQJHT_m0 .QhHNtY1NpYZMLFeAFnit.okUVqHjk0EnMnDYRdlZZ{color:#a9a9a9;text-decoration:line-through}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm{color:#9932cc}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm.okUVqHjk0EnMnDYRdlZZ{color:#006400}.xbPdv3wb5CQnfQJHT_m0 .whYdJS2wMeoer7RYfLOm .PslwMNU8XdSmYHbLRZQz{background:#006400;color:#fff;margin-left:.25em;padding:0 .25em}.xbPdv3wb5CQnfQJHT_m0 h5{margin-block-start:.5em;margin-block-end:.5em}","",{version:3,sources:["webpack://./src/containers/Games/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,yBAAA,CACA,4BAAA,CAEF,sBACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGA,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,uBAAA,CACA,qBAAA,CAEF,yBACE,WAAA,CACA,uBAAA,CACA,qBAAA,CAGJ,sBACE,4BAAA,CACA,eAAA,CACA,gBAAA,CAGE,iEACE,aAAA,CAIF,iEACE,aAAA,CACA,4BAAA,CAGJ,4CACE,aAAA,CACA,iEACE,aAAA,CAEF,kEACE,kBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CAGJ,yBACE,uBAAA,CACA,qBAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 1em 1em 1em 160px;\n  border-top: 1px solid lightgray;\n}\n.Gallery {\n  position: absolute;\n  margin-left: -160px;\n  width: 150px;\n  height: 200px;\n}\n.Summary {\n  h3 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h4 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n  h6 {\n    float: right;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n}\n.Details {\n  border-top: 1px solid lightgray;\n  margin-top: 0.5em;\n  padding-top: 0.5em;\n\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  .Price {\n    &.Sale {\n      color: darkgray;\n      text-decoration: line-through;\n    }\n  }\n  .ListPrice {\n    color: darkorchid;\n    &.Sale {\n      color: darkgreen;\n    }\n    .Reduction {\n      background: darkgreen;\n      color: white;\n      margin-left: 0.25em;\n      padding: 0 0.25em;\n    }\n  }\n  h5 {\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"JHMQTrkI8VTUhO5W6Kyg",Row:"VD4K4TGjIyjjLnk_3HXt",Gallery:"zWEcVheTnvocuW1FSxpw",Summary:"W2VsCYe_2bLlsim6Q3fu",Details:"xbPdv3wb5CQnfQJHT_m0",Feature:"SlIfQB3ry6_hJyBji_QX",changed:"QRu0wvU40E3e0bnIAmyI",Price:"QhHNtY1NpYZMLFeAFnit",Sale:"okUVqHjk0EnMnDYRdlZZ",ListPrice:"whYdJS2wMeoer7RYfLOm",Reduction:"PslwMNU8XdSmYHbLRZQz"};const c=i}}]);
//# sourceMappingURL=100.js.map