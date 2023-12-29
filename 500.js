/*! For license information please see 500.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[500],{2500:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var r=n(2784),a=n(1148),i=n(7984),o=n(9369),l=n(8871),u=n(357),c=n(3543),s=n(2754),m=n(5104),f=n(6216),d=n(2524),v=n.n(d),p=n(6062),h=n.n(p),y=n(4036),g=n.n(y),b=n(6793),E=n.n(b),A=n(7892),w=n.n(A),j=n(1173),C=n.n(j),O=n(2464),P=n.n(O),k=n(5068),L={};L.styleTagTransform=P(),L.setAttributes=w(),L.insert=E().bind(null,"head"),L.domAPI=g(),L.insertStyleElement=C(),h()(k.Z,L);const S=k.Z&&k.Z.locals?k.Z.locals:void 0;function N(e){var t=e.list,n=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=f.ve8().value((function(e){return e.value})).sort(null),r=f.Nb1().innerRadius(60).outerRadius(130),a=f.PKp(f.Cn1),i=e(t),o=f.Ys(n.current).selectAll("g.arc").data(i);o.exit().remove();var l=o.enter().append("g").attr("class","arc");l.append("path").merge(o.select("path.arc")).attr("class","arc").attr("d",r).attr("fill",(function(e,t){return a(t)})),l.append("text").merge(o.select("text")).attr("text-anchor","middle").attr("alignment-baseline","middle").attr("transform",(function(e){return"translate(".concat(r.centroid(e),")")})).style("fill","white").style("font-size",10).text((function(e){var t=e.data;return"".concat(t.label," (").concat(t.value,")")}))}),[t]),r.createElement("div",{className:v()(S.Chart)},r.createElement("svg",null,r.createElement("g",{ref:n,transform:"translate(".concat(150," ").concat(150,")")})))}var _=n(5488),D={};D.styleTagTransform=P(),D.setAttributes=w(),D.insert=E().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=C(),h()(_.Z,D);const x=_.Z&&_.Z.locals?_.Z.locals:void 0;function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){var r,a,i,o;r=e,a=t,i=n[t],o=function(e,t){if("object"!=F(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==F(o)?o:String(o))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){for(var n=0;n<5;n++){var r=e[(0,c.W)(t,"yyyy-MM-dd")];if(r)return r;t=(0,s.l)(t,{days:1})}}function K(e){var t=e.value;return isNaN(t)?null:r.createElement("div",{className:v()(x.Percent,0===t?x.eq:t>0?x.gt:x.lt)},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(Math.round(1e4*t)/100)," %")}function q(e){var t=e.investments,n=e.rates,a=e.selected,i=e.setSelected,o=I((0,r.useState)([]),2),l=o[0],u=o[1],m=(0,r.useMemo)((function(){return t.map((function(e){var t=I(Object.entries(n[e.id]).pop(),2),r=t[0],a=t[1];return T(T({},e),{},{date:new Date(r),unitValue:a})}))}),[n]);return r.createElement("div",{className:x.Investments},r.createElement("h3",null,"Investments"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("input",{type:"checkbox",checked:a.length===t.length,onChange:(0,r.useCallback)((function(e){var n=e.target;return i(n.checked?t.map((function(e){return e.id})):[])}),[])})),r.createElement("th",null,"Fundusz"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"7d"),r.createElement("th",null,"14d"),r.createElement("th",null,"1m"),r.createElement("th",null,"3m"),r.createElement("th",null,"6m"),r.createElement("th",null,"12m"),r.createElement("th",null,"24m"),r.createElement("th",null,"36m")),m.map((function(e,t){return[r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:a.includes(e.id),onChange:(0,r.useCallback)((function(t){var n=t.target;return i((function(t){return n.checked?t.concat(e.id):t.filter((function(t){return t!==e.id}))}))}),[])})),r.createElement("td",null,r.createElement("a",{href:"#",onClick:(0,r.useCallback)((function(t){return t.preventDefault(),u((function(t){return t.includes(e.id)?t.filter((function(t){return t!==e.id})):t.concat(e.id)}))}),[])},e.name)),r.createElement("td",{align:"right"},(0,c.W)(e.date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN"),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{days:7}))-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{days:14}))-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{months:1}))-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/n[e.id][(0,c.W)((0,s.l)(e.date,{months:3}),"yyyy-MM-dd")]-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{months:6}))-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{months:12}))-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{months:24}))-1})),r.createElement("td",{align:"right"},r.createElement(K,{value:e.unitValue/Z(n[e.id],(0,s.l)(e.date,{months:36}))-1})))].concat(l.includes(e.id)?[r.createElement("tr",{key:"".concat(t,"-details")},r.createElement("td",null),r.createElement("td",{colSpan:11},r.createElement("pre",null,JSON.stringify(e,null,2)),r.createElement("pre",null,JSON.stringify(n[e.id],null,2))))]:[])})))))}function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var U=function(e){var t=e.names,n=e.rates;return function(e){var r=e.date,a=e.investment_id,i=e.value;if(!n[a])return null;var o=n[a][r],l=Math.round(1e3*i/o)/1e3;return{name:t[a],date:new Date(r),investment_id:a,value:Math.round(100*l*o)/100,valueNetto:i,valueBrutto:i,unitValue:o,units:l}}};function X(e){var t=e.transactions,n=e.rates,a=e.names,i=e.selected,o=e.setSelected,l=W((0,r.useState)([]),2),u=l[0],s=l[1],m=(0,r.useMemo)((function(){return Object.keys(n).reduce((function(e,t){var r,a,i,o,l=W(Object.entries(n[t]).pop(),2),u=l[0],c=l[1];return Object.assign(e,(r={},a=t,i={date:new Date(u),unitValue:c},o=function(e,t){if("object"!=V(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==V(o)?o:String(o))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r))}),{})}),[n]),f=(0,r.useMemo)((function(){return t.map(U({names:a,rates:n})).filter(Boolean)}),[t,a,n]);return r.createElement("div",{className:x.Transactions},r.createElement("h3",null,"Transactions"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("input",{type:"checkbox",checked:i.length===t.length,onChange:(0,r.useCallback)((function(e){var n=e.target;return o(n.checked?t.map((function(e,t){return t})):[])}),[])})),r.createElement("th",null,"Fundusz"),r.createElement("th",null,"Kwota transakcji"),r.createElement("th",null,"Liczba jednostek"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"%")),f.map((function(e,t){return[r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:i.includes(t),onChange:(0,r.useCallback)((function(e){var n=e.target;return o((function(e){return n.checked?e.concat(t):e.filter((function(e){return e!==t}))}))}),[])})),r.createElement("td",null,r.createElement("a",{href:"#",onClick:(0,r.useCallback)((function(e){return e.preventDefault(),s((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))}),[])},e.name)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{}).format(e.units)),r.createElement("td",{align:"right"},(0,c.W)(e.date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN"),r.createElement("td",{align:"right"},(0,c.W)(m[e.investment_id].date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(m[e.investment_id].unitValue)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(Math.round(100*m[e.investment_id].unitValue*e.units)/100)," PLN"),r.createElement("td",{align:"right"},r.createElement(K,{value:m[e.investment_id].unitValue/e.unitValue-1})))].concat(u.includes(t)?[r.createElement("tr",{key:"".concat(t,"-details")},r.createElement("td",null),r.createElement("td",{colSpan:10},r.createElement("pre",null,"Data wyceny jednostki\n".concat((0,c.W)(e.date,"dd.MM.yyyy"),"\nData realizacji\n").concat((0,c.W)(e.date,"dd.MM.yyyy"),"\nKwota transakcji netto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN\nKwota transakcji brutto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueBrutto)," PLN\nIlość jednostek po transakcji\n").concat(new Intl.NumberFormat("pl-PL",{}).format(e.units),"\nWartość jednostki w dniu wyceny\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN\nWartość\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN\nOpłata manipulacyjna\n0,00 PLN / 0 %"))))]:[])}))),r.createElement("tfoot",null,[f.filter((function(e,t){return i.includes(t)})).reduce((function(e,t){var n=e.units,r=e.value,a=e.valueNetto,i=e.quote;return{units:n+t.units,value:r+t.value,valueNetto:a+t.valueNetto,quote:i+Math.round(100*m[t.investment_id].unitValue*t.units)/100}}),{units:0,value:0,valueNetto:0,quote:0})].map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null),r.createElement("td",null),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.units)),r.createElement("td",{colSpan:2}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN"),r.createElement("td",{colSpan:2}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.quote)," PLN"),r.createElement("td",{align:"right"},r.createElement(K,{value:e.quote/e.value-1})))})))))}function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}var J=["search"],Y=["investment_id"],R=["investment_id"];function Q(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function te(e,t,n){var r;return r=function(e,t){if("object"!=B(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==B(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||re(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ie(){ie=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),l=new N(r||[]);return a(o,"_invoke",{value:P(e,n,l)}),o}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",v="executing",p="completed",h={};function y(){}function g(){}function b(){}var E={};c(E,o,(function(){return this}));var A=Object.getPrototypeOf,w=A&&A(A(_([])));w&&w!==n&&r.call(w,o)&&(E=w);var j=b.prototype=y.prototype=Object.create(E);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(a,i,o,l){var u=m(e[a],e,i);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==B(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(s).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,l)}))}l(u.arg)}var i;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return i=i?i.then(a,a):a()}})}function P(t,n,r){var a=f;return function(i,o){if(a===v)throw new Error("Generator is already running");if(a===p){if("throw"===i)throw o;return{value:e,done:!0}}for(r.method=i,r.arg=o;;){var l=r.delegate;if(l){var u=k(l,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var c=m(t,n,r);if("normal"===c.type){if(a=r.done?p:d,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}function k(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=m(a,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(B(t)+" is not iterable")}return g.prototype=b,a(j,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:g,configurable:!0}),g.displayName=c(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,u,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},C(O.prototype),c(O.prototype,l,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new O(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(j),c(j,u,"Generator"),c(j,o,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}function oe(e,t,n,r,a,i,o){try{var l=e[i](o),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}var le=864e5,ue=1200,ce=(0,u.k)(function(){var e,t=(e=ie().mark((function e(t){var n;return ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/quotes/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{metas:e.metas,objects:e.objects.concat([{date:"2022-06-23",value:68.65,investment_id:10}])}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){oe(i,r,a,o,l,"next",e)}function l(e){oe(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()),se=function(e){var t=e.date,n=e.rates;return function(e){var r=e.date,a=e.investment_id,i=e.value;if(!n[a])return null;var o=n[a][r],l=Math.round(1e3*i/o)/1e3,u=n[a][(0,c.W)(t,"yyyy-MM-dd")];return n[a][(0,c.W)(t,"yyyy-MM-dd")]?{investment_id:a,value:Math.round(100*l*u)/100}:null}};function me(e){var t=e.version,n=void 0===t?"v1":t,u=ce.read(n),f=u.metas,d=u.objects,v=ne((0,r.useState)((function(){return[{date:"2018-12-28",investment_id:44,value:5331.6},{date:"2019-12-30",investment_id:44,value:1e3},{date:"2020-12-28",investment_id:44,value:1e3},{date:"2021-12-15",investment_id:44,value:1e3},{date:"2022-01-03",investment_id:75,value:1e3},{date:"2022-02-01",investment_id:75,value:1e3},{date:"2022-02-28",investment_id:34,value:1e3},{date:"2022-03-08",investment_id:35,value:1e3},{date:"2022-03-11",investment_id:10,value:1e3},{date:"2022-03-21",investment_id:36,value:1e3},{date:"2022-03-21",investment_id:37,value:1e3},{date:"2022-04-01",investment_id:34,value:1e3},{date:"2022-04-11",investment_id:44,value:1e3},{date:"2022-04-26",investment_id:34,value:1e3},{date:"2022-05-05",investment_id:75,value:1e3},{date:"2022-06-20",investment_id:44,value:1e3},{date:"2022-06-23",investment_id:10,value:-907.62},{date:"2022-06-23",investment_id:33,value:907.62},{date:"2022-07-29",investment_id:44,value:1e3},{date:"2022-08-29",investment_id:44,value:1e3},{date:"2023-06-29",investment_id:79,value:1e3}]})),1)[0],p=(0,r.useMemo)((function(){return{investment:f.map((function(e){return{id:e.id,name:e.name}})).sort((function(e,t){return e.name.localeCompare(t.name)}))}}),[d]),h=(0,r.useMemo)((function(){return f.reduce((function(e,t){var n=t.id,r=t.name;return Object.assign(e,te({},n,r))}),{})}),[f]),y=(0,r.useMemo)((function(){return d.sort((function(e,t){return e.date.localeCompare(t.date)})).reduce((function(e,t){var n=t.date,r=t.investment_id,a=t.value;return Object.assign(e,te({},r,Object.assign(e[r]||{},te({},n,a))))}),{})}),[d]),g=ne((0,r.useState)((function(){return{search:""}})),2),b=g[0],E=(g[1],ne((0,r.useState)((function(){return b})),2)),A=E[0],w=E[1],j=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=j.pipe((0,i.U)((function(e){var t=e.search,n=ee(e,J);return JSON.stringify($($($({},A),n),{},{search:t.trim()}))})),(0,o.x)(),(0,l.b)(400)).subscribe((function(e){return w((function(t){return $($({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[j]),(0,r.useEffect)((function(){j.next(b)}),[b]),console.log({metas:f,options:p,filters:b,results:d,rates:y});var C=(0,r.useMemo)((function(){return d.map((function(e){var t=e.investment_id,n=e.value,r=e.date;return{investment_id:t,value:n,date:new Date(r)}})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}),[d]),O=(0,r.useMemo)((function(){return C[C.length-1].date.getTime()-2e3*le}),[C]),P=ne((0,r.useState)((function(){return v.map((function(e,t){return t}))})),2),k=P[0],L=P[1],S=ne((0,r.useState)((function(){return(0,c.W)(C[C.length-1].date.getTime(),"yyyy-MM-dd")})),2),_=S[0],D=S[1],x=ne((0,r.useState)((function(){return[34,35,44,79]})),2),F=x[0],M=x[1],T=(0,r.useMemo)((function(){return C.filter((function(e){var t=e.investment_id;return F.includes(t)})).filter((function(e){return e.date.getTime()>O}))}),[C,F]),I=(0,r.useCallback)((function(e,t,n){var r=(0,c.W)(t,"yyyy-MM-dd");return e[r]&&e[n]?e[r]/e[n]:0}),[]);return r.createElement("div",null,r.createElement(m.A,null,r.createElement(m.Z,{list:T.map((function(e){var t=e.investment_id;return $($({},ee(e,Y)),{},{group:h[t]})})),legend:!0,rule:!0}),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Date"),r.createElement("input",{type:"date",value:_,onChange:(0,r.useCallback)((function(e){var t=e.target;return D(t.value)}),[])}))),r.createElement(m.Z,{list:C.filter((function(e){var t=e.investment_id;return F.includes(t)})).filter((function(e){return e.date.getTime()>O})).map((function(e){var t=e.investment_id,n=ee(e,R);return $($({},n),{},{value:I(y[t],n.date,_),group:h[t]})})),rule:!0}),r.createElement(q,{investments:p.investment,rates:y,selected:F,setSelected:M})),r.createElement(m.A,null,r.createElement(m.Z,{list:Q(Array(ue)).map((function(e,t){return(0,s.l)(new Date,{days:t})})).reverse().map((function(e,t){return Object.entries(v.filter((function(t,n){return new Date(t.date)<=e&&k.includes(n)})).map(se({date:e,rates:y})).filter(Boolean).reduce((function(e,t){var n=t.value,r=t.investment_id;return Object.assign(e,te({},r,(e[r]||0)+n))}),{})).map((function(t){var n=ne(t,2),r=n[0],a=n[1];return{date:e,group:h[r],value:a}}))})).flat()}),r.createElement(m.Z,{list:Q(Array(ue)).map((function(e,t){return(0,s.l)(new Date,{days:t})})).reverse().map((function(e){return Object.entries(v.filter((function(t,n){return new Date(t.date)<=e&&k.includes(n)})).map(se({date:e,rates:y})).filter(Boolean).reduce((function(e,t,n){var r=t.value;return Object.assign(e,te({},n,r))}),{})).map((function(t,n,r){var a,i=ne(t,2),o=i[0],l=i[1];return a=r.slice(0,n).reduce((function(e,t){var n=ne(t,2);return n[0],e+n[1]}),0),{date:e,group:o,value:l+a,value2:a}}))})).flat(),type:"area",legend:!0}),r.createElement(X,{transactions:v,rates:y,names:h,selected:k,setSelected:L})),r.createElement(N,{list:Object.entries(v.filter((function(e,t){return k.includes(t)})).reduce((function(e,t){return Object.assign(e,te({},t.investment_id,(e[t.investment_id]||0)+t.value))}),{})).map((function(e){var t=ne(e,2),n=t[0],r=t[1];return{label:h[n],value:r}})).sort((function(e,t){return t.value-e.value}))}))}function fe(){return r.createElement("div",{className:x.Section},r.createElement("h2",null,"Quotes"),r.createElement(me,null))}},5068:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),i=n(2609),o=n.n(i)()(a());o.push([e.id,".D4hghWDR6tislQFHDqDO{position:relative;padding:2em}.D4hghWDR6tislQFHDqDO svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}","",{version:3,sources:["webpack://./src/components/DonutChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    //   rect.selection {\n    //     stroke: none;\n    //   }\n  }\n\n  // .Tooltip {\n  //   position: absolute;\n  // }\n}\n// .Tooltip {\n//   background: white;\n//   border: 1px solid lightgray;\n//   color: orange;\n//   padding: 0.25em;\n// }\n"],sourceRoot:""}]),o.locals={Chart:"D4hghWDR6tislQFHDqDO"};const l=o},5488:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),i=n(2609),o=n.n(i)()(a());o.push([e.id,'._ESpGSPPpzgrCHtLDC15{color:purple}.TdrVPL_ZKxEpsGqtgAKw,.XpEtlXAz0qkmc2pUZelh{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.TdrVPL_ZKxEpsGqtgAKw table,.XpEtlXAz0qkmc2pUZelh table{border-collapse:collapse}.TdrVPL_ZKxEpsGqtgAKw table tr:hover,.XpEtlXAz0qkmc2pUZelh table tr:hover{background-color:#e0e0e0}.TdrVPL_ZKxEpsGqtgAKw tr:nth-child(even),.XpEtlXAz0qkmc2pUZelh tr:nth-child(even){background-color:#f7f7f7}.TdrVPL_ZKxEpsGqtgAKw th,.TdrVPL_ZKxEpsGqtgAKw td,.XpEtlXAz0qkmc2pUZelh th,.XpEtlXAz0qkmc2pUZelh td{padding:.25em}.B5XUoft7ajzWeLY9QZQ9{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}.MXCudOGdPDTJtcb0KFtk{color:#000;text-align:right;width:4.5em}.MXCudOGdPDTJtcb0KFtk.oGGbruZcUCrKnRswgvhX{color:blue}.MXCudOGdPDTJtcb0KFtk.LFTPI4HvrN257b34VKog{color:green}.MXCudOGdPDTJtcb0KFtk.LFTPI4HvrN257b34VKog::before{content:"↖"}.MXCudOGdPDTJtcb0KFtk.IYciZuUEzLYtaU3GzLql{color:red}.MXCudOGdPDTJtcb0KFtk.IYciZuUEzLYtaU3GzLql::before{content:"↘"}',"",{version:3,sources:["webpack://./src/containers/Quotes/styles.module.scss"],names:[],mappings:"AAAA,sBAAA,YACE,CAAA,4CAEF,sCAEE,CAAA,cACA,CAAA,wDACA,wBACE,CAAA,0EAEE,wBACE,CAAA,kFAKJ,wBACE,CAAA,oGAGJ,aAEE,CAAA,sBAGJ,UACE,CAAA,cACA,CAAA,8BACA,CAAA,WACA,CAAA,sBAEF,UACE,CAAA,gBACA,CAAA,WACA,CAAA,2CACA,UACE,CAAA,2CAEF,WACE,CAAA,mDACA,WACE,CAAA,2CAGJ,SACE,CAAA,mDACA,WACE",sourcesContent:['.Section {\n  color: purple;\n}\n.Investments,\n.Transactions {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n.Percent {\n  color: black;\n  text-align: right;\n  width: 4.5em;\n  &.eq {\n    color: blue;\n  }\n  &.gt {\n    color: green;\n    &::before {\n      content: "\\2196";\n    }\n  }\n  &.lt {\n    color: red;\n    &::before {\n      content: "\\2198";\n    }\n  }\n}\n'],sourceRoot:""}]),o.locals={Section:"_ESpGSPPpzgrCHtLDC15",Investments:"TdrVPL_ZKxEpsGqtgAKw",Transactions:"XpEtlXAz0qkmc2pUZelh",Row:"B5XUoft7ajzWeLY9QZQ9",Percent:"MXCudOGdPDTJtcb0KFtk",eq:"oGGbruZcUCrKnRswgvhX",gt:"LFTPI4HvrN257b34VKog",lt:"IYciZuUEzLYtaU3GzLql"};const l=o},8871:(e,t,n)=>{n.d(t,{b:()=>o});var r=n(997),a=n(1118),i=n(7394);function o(e,t){return void 0===t&&(t=r.z),(0,a.e)((function(n,r){var a=null,o=null,l=null,u=function(){if(a){a.unsubscribe(),a=null;var e=o;o=null,r.next(e)}};function c(){var n=l+e,i=t.now();if(i<n)return a=this.schedule(void 0,n-i),void r.add(a);u()}n.subscribe((0,i.x)(r,(function(n){o=n,l=t.now(),a||(a=t.schedule(c,e),r.add(a))}),(function(){u(),r.complete()}),void 0,(function(){o=a=null})))}))}},9369:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(9676),a=n(1118),i=n(7394);function o(e,t){return void 0===t&&(t=r.y),e=null!=e?e:l,(0,a.e)((function(n,r){var a,o=!0;n.subscribe((0,i.x)(r,(function(n){var i=t(n);!o&&e(a,i)||(o=!1,a=i,r.next(n))})))}))}function l(e,t){return e===t}},7984:(e,t,n)=>{n.d(t,{U:()=>i});var r=n(1118),a=n(7394);function i(e,t){return(0,r.e)((function(n,r){var i=0;n.subscribe((0,a.x)(r,(function(n){r.next(e.call(t,n,i++))})))}))}},8016:(e,t,n)=>{n.d(t,{E:()=>i});var r=n(729),a=n(5873);function i(e,t){const n=(0,r.Q)(e);return isNaN(t)?(0,a.L)(e,NaN):t?(n.setDate(n.getDate()+t),n):n}},7617:(e,t,n)=>{n.d(t,{z:()=>i});var r=n(729),a=n(5873);function i(e,t){const n=(0,r.Q)(e);if(isNaN(t))return(0,a.L)(e,NaN);if(!t)return n;const i=n.getDate(),o=(0,a.L)(e,n.getTime());return o.setMonth(n.getMonth()+t+1,0),i>=o.getDate()?o:(n.setFullYear(o.getFullYear(),o.getMonth(),i),n)}},2754:(e,t,n)=>{n.d(t,{l:()=>o});var r=n(8016);var a=n(7617);var i=n(5873);function o(e,t){const{years:n=0,months:o=0,weeks:l=0,days:u=0,hours:c=0,minutes:s=0,seconds:m=0}=t,f=function(e,t){return(0,r.E)(e,-t)}(function(e,t){return(0,a.z)(e,-t)}(e,o+12*n),u+7*l),d=1e3*(m+60*(s+60*c));return(0,i.L)(e,f.getTime()-d)}}}]);
//# sourceMappingURL=500.js.map