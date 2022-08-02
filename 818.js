/*! For license information please see 818.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[818],{2818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(2784),a=n(1148),i=n(7984),o=n(9369),l=n(8871),u=n(357),c=n(161),s=n(2765),m=n(6700),d=n(9785);function f(e,t){(0,d.Z)(2,arguments);var n=(0,m.Z)(e),r=(0,s.Z)(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function v(e,t){(0,d.Z)(2,arguments);var n=(0,s.Z)(t);return f(e,-n)}function h(e,t){(0,d.Z)(2,arguments);var n=(0,m.Z)(e),r=(0,s.Z)(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var o=i.getDate();return a>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),a),n)}function p(e,t){(0,d.Z)(2,arguments);var n=(0,s.Z)(t);return h(e,-n)}function y(e,t){if((0,d.Z)(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n=t.years?(0,s.Z)(t.years):0,r=t.months?(0,s.Z)(t.months):0,a=t.weeks?(0,s.Z)(t.weeks):0,i=t.days?(0,s.Z)(t.days):0,o=t.hours?(0,s.Z)(t.hours):0,l=t.minutes?(0,s.Z)(t.minutes):0,u=t.seconds?(0,s.Z)(t.seconds):0,c=p(e,r+12*n),m=v(c,i+7*a),f=l+60*o,h=u+60*f,y=1e3*h,g=new Date(m.getTime()-y);return g}var g=n(5104),b=n(4397),E=n(2779),A=n.n(E),w=n(6062),C=n.n(w),O=n(4036),k=n.n(O),P=n(6793),j=n.n(P),L=n(7892),D=n.n(L),N=n(1173),_=n.n(N),x=n(2464),S=n.n(x),Z=n(5068),F={};F.styleTagTransform=S(),F.setAttributes=D(),F.insert=j().bind(null,"head"),F.domAPI=k(),F.insertStyleElement=_(),C()(Z.Z,F);const M=Z.Z&&Z.Z.locals?Z.Z.locals:void 0;function I(e){var t=e.list,n=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=b.ve8().value((function(e){return e.value})).sort(null),r=b.Nb1().innerRadius(60).outerRadius(130),a=b.PKp(b.Cn1),i=e(t),o=b.Ys(n.current).selectAll("g.arc").data(i);o.exit().remove();var l=o.enter().append("g").attr("class","arc");l.append("path").merge(o.select("path.arc")).attr("class","arc").attr("d",r).attr("fill",(function(e,t){return a(t)})),l.append("text").merge(o.select("text")).attr("text-anchor","middle").attr("alignment-baseline","middle").attr("transform",(function(e){return"translate(".concat(r.centroid(e),")")})).style("fill","white").style("font-size",10).text((function(e){var t=e.data;return"".concat(t.label," (").concat(t.value,")")}))}),[t]),r.createElement("div",{className:A()(M.Chart)},r.createElement("svg",null,r.createElement("g",{ref:n,transform:"translate(".concat(150," ").concat(150,")")})))}var T=n(5488),G={};G.styleTagTransform=S(),G.setAttributes=D(),G.insert=j().bind(null,"head"),G.domAPI=k(),G.insertStyleElement=_(),C()(T.Z,G);const K=T.Z&&T.Z.locals?T.Z.locals:void 0;function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e,t){for(var n=0;n<5;n++){var r=e[(0,c.Z)(t,"yyyy-MM-dd")];if(r)return r;t=y(t,{days:1})}}function W(e){var t=e.value;return isNaN(t)?null:r.createElement("div",{className:A()(K.Percent,0===t?K.eq:t>0?K.gt:K.lt)},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(Math.round(1e4*t)/100)," %")}function J(e){var t=e.investments,n=e.rates,a=e.selected,i=e.setSelected,o=U((0,r.useState)([]),2),l=o[0],u=o[1],s=(0,r.useMemo)((function(){return t.map((function(e){var t=U(Object.entries(n[e.id]).pop(),2),r=t[0],a=t[1];return V(V({},e),{},{date:new Date(r),unitValue:a})}))}),[n]);return r.createElement("div",{className:K.Investments},r.createElement("h3",null,"Investments"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("input",{type:"checkbox",checked:a.length===t.length,onChange:(0,r.useCallback)((function(e){var n=e.target;return i(n.checked?t.map((function(e){return e.id})):[])}),[])})),r.createElement("th",null,"Fundusz"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"7d"),r.createElement("th",null,"14d"),r.createElement("th",null,"1m"),r.createElement("th",null,"3m"),r.createElement("th",null,"6m"),r.createElement("th",null,"12m"),r.createElement("th",null,"24m"),r.createElement("th",null,"36m")),s.map((function(e,t){return[r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:a.includes(e.id),onChange:(0,r.useCallback)((function(t){var n=t.target;return i((function(t){return n.checked?t.concat(e.id):t.filter((function(t){return t!==e.id}))}))}),[])})),r.createElement("td",null,r.createElement("a",{href:"#",onClick:(0,r.useCallback)((function(t){return t.preventDefault(),u((function(t){return t.includes(e.id)?t.filter((function(t){return t!==e.id})):t.concat(e.id)}))}),[])},e.name)),r.createElement("td",{align:"right"},(0,c.Z)(e.date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN"),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{days:7}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{days:14}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{months:1}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/n[e.id][(0,c.Z)(y(e.date,{months:3}),"yyyy-MM-dd")]-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{months:6}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{months:12}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{months:24}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],y(e.date,{months:36}))-1})))].concat(l.includes(e.id)?[r.createElement("tr",{key:"".concat(t,"-details")},r.createElement("td",null),r.createElement("td",{colSpan:11},r.createElement("pre",null,JSON.stringify(e,null,2)),r.createElement("pre",null,JSON.stringify(n[e.id],null,2))))]:[])})))))}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e){var t=e.transactions,n=e.rates,a=e.names,i=e.selected,o=e.setSelected,l=Y((0,r.useState)([]),2),u=l[0],s=l[1],m=(0,r.useMemo)((function(){return Object.keys(n).reduce((function(e,t){var r,a,i,o=Y(Object.entries(n[t]).pop(),2),l=o[0],u=o[1];return Object.assign(e,(r={},a=t,i={date:new Date(l),unitValue:u},a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r))}),{})}),[n]),d=(0,r.useMemo)((function(){return t.map(function(e){var t=e.names,n=e.rates;return function(e){var r=e.date,a=e.investment_id,i=e.value;if(!n[a])return null;var o=n[a][r],l=Math.round(1e3*i/o)/1e3;return{name:t[a],date:new Date(r),investment_id:a,value:Math.round(100*l*o)/100,valueNetto:i,valueBrutto:i,unitValue:o,units:l}}}({names:a,rates:n})).filter(Boolean)}),[t,a,n]);return r.createElement("div",{className:K.Transactions},r.createElement("h3",null,"Transactions"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("input",{type:"checkbox",checked:i.length===t.length,onChange:(0,r.useCallback)((function(e){var n=e.target;return o(n.checked?t.map((function(e,t){return t})):[])}),[])})),r.createElement("th",null,"Fundusz"),r.createElement("th",null,"Kwota transakcji"),r.createElement("th",null,"Liczba jednostek"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"%")),d.map((function(e,t){return[r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:i.includes(t),onChange:(0,r.useCallback)((function(e){var n=e.target;return o((function(e){return n.checked?e.concat(t):e.filter((function(e){return e!==t}))}))}),[])})),r.createElement("td",null,r.createElement("a",{href:"#",onClick:(0,r.useCallback)((function(e){return e.preventDefault(),s((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))}),[])},e.name)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{}).format(e.units)),r.createElement("td",{align:"right"},(0,c.Z)(e.date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN"),r.createElement("td",{align:"right"},(0,c.Z)(m[e.investment_id].date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(m[e.investment_id].unitValue)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(Math.round(100*m[e.investment_id].unitValue*e.units)/100)," PLN"),r.createElement("td",{align:"right"},r.createElement(W,{value:m[e.investment_id].unitValue/e.unitValue-1})))].concat(u.includes(t)?[r.createElement("tr",{key:"".concat(t,"-details")},r.createElement("td",null),r.createElement("td",{colSpan:10},r.createElement("pre",null,"Data wyceny jednostki\n".concat((0,c.Z)(e.date,"dd.MM.yyyy"),"\nData realizacji\n").concat((0,c.Z)(e.date,"dd.MM.yyyy"),"\nKwota transakcji netto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN\nKwota transakcji brutto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueBrutto)," PLN\nIlość jednostek po transakcji\n").concat(new Intl.NumberFormat("pl-PL",{}).format(e.units),"\nWartość jednostki w dniu wyceny\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN\nWartość\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN\nOpłata manipulacyjna\n0,00 PLN / 0 %"))))]:[])}))),r.createElement("tfoot",null,[d.filter((function(e,t){return i.includes(t)})).reduce((function(e,t){var n=e.units,r=e.value,a=e.valueNetto,i=e.quote;return{units:n+t.units,value:r+t.value,valueNetto:a+t.valueNetto,quote:i+Math.round(100*m[t.investment_id].unitValue*t.units)/100}}),{units:0,value:0,valueNetto:0,quote:0})].map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null),r.createElement("td",null),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.units)),r.createElement("td",{colSpan:2}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN"),r.createElement("td",{colSpan:2}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.quote)," PLN"),r.createElement("td",{align:"right"},r.createElement(W,{value:e.quote/e.value-1})))})))))}function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var $=["search"],ee=["investment_id"],te=["investment_id"];function ne(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||ue(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(){se=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),o=new C(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var l=E(o,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,o),i}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var s={};function m(){}function d(){}function f(){}var v={};l(v,a,(function(){return this}));var h=Object.getPrototypeOf,p=h&&h(h(O([])));p&&p!==t&&n.call(p,a)&&(v=p);var y=f.prototype=m.prototype=Object.create(v);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(a,i,o,l){var u=c(e[a],e,i);if("throw"!==u.type){var s=u.arg,m=s.value;return m&&"object"==Q(m)&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,l)}),(function(e){r("throw",e,o,l)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,l)}))}l(u.arg)}var a;this._invoke=function(e,n){function i(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=f,l(y,"constructor",f),l(f,"constructor",d),d.displayName=l(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new b(u(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(y),l(y,o,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function me(e,t,n,r,a,i,o){try{var l=e[i](o),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}var de=(0,u.k)(function(){var e,t=(e=se().mark((function e(t){var n;return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/quotes/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{metas:e.metas,objects:e.objects.concat([{date:"2022-06-23",value:68.65,investment_id:10}])}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){me(i,r,a,o,l,"next",e)}function l(e){me(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()),fe=function(e){var t=e.date,n=e.rates;return function(e){var r=e.date,a=e.investment_id,i=e.value;if(!n[a])return null;var o=n[a][r],l=Math.round(1e3*i/o)/1e3,u=n[a][(0,c.Z)(t,"yyyy-MM-dd")];return n[a][(0,c.Z)(t,"yyyy-MM-dd")]?{investment_id:a,value:Math.round(100*l*u)/100}:null}};function ve(e){var t=e.version,n=void 0===t?"v1":t,u=de.read(n),s=u.metas,m=u.objects,d=le((0,r.useState)((function(){return[{date:"2018-12-28",investment_id:44,value:5331.6},{date:"2019-12-30",investment_id:44,value:1e3},{date:"2020-12-28",investment_id:44,value:1e3},{date:"2021-12-15",investment_id:44,value:1e3},{date:"2022-01-03",investment_id:75,value:1e3},{date:"2022-02-01",investment_id:75,value:1e3},{date:"2022-02-28",investment_id:34,value:1e3},{date:"2022-03-08",investment_id:35,value:1e3},{date:"2022-03-11",investment_id:10,value:1e3},{date:"2022-03-21",investment_id:36,value:1e3},{date:"2022-03-21",investment_id:37,value:1e3},{date:"2022-04-01",investment_id:34,value:1e3},{date:"2022-04-11",investment_id:44,value:1e3},{date:"2022-04-26",investment_id:34,value:1e3},{date:"2022-05-05",investment_id:75,value:1e3},{date:"2022-06-20",investment_id:44,value:1e3},{date:"2022-06-23",investment_id:10,value:-907.62},{date:"2022-06-23",investment_id:33,value:907.62},{date:"2022-07-29",investment_id:44,value:1e3}]})),1)[0],f=(0,r.useMemo)((function(){return{investment:s.map((function(e){return{id:e.id,name:e.name}})).sort((function(e,t){return e.name.localeCompare(t.name)}))}}),[m]),v=(0,r.useMemo)((function(){return s.reduce((function(e,t){var n=t.id,r=t.name;return Object.assign(e,oe({},n,r))}),{})}),[s]),h=(0,r.useMemo)((function(){return m.sort((function(e,t){return e.date.localeCompare(t.date)})).reduce((function(e,t){var n=t.date,r=t.investment_id,a=t.value;return Object.assign(e,oe({},r,Object.assign(e[r]||{},oe({},n,a))))}),{})}),[m]),p=le((0,r.useState)((function(){return{search:""}})),2),b=p[0],E=(p[1],le((0,r.useState)((function(){return b})),2)),A=E[0],w=E[1],C=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=C.pipe((0,i.U)((function(e){var t=e.search,n=ie(e,$);return JSON.stringify(ae(ae(ae({},A),n),{},{search:t.trim()}))})),(0,o.x)(),(0,l.b)(400)).subscribe((function(e){return w((function(t){return ae(ae({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[C]),(0,r.useEffect)((function(){C.next(b)}),[b]),console.log({metas:s,options:f,filters:b,results:m,rates:h});var O=(0,r.useMemo)((function(){return m.map((function(e){var t=e.investment_id,n=e.value,r=e.date;return{investment_id:t,value:n,date:new Date(r)}})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}),[m]),k=(0,r.useMemo)((function(){return O[O.length-1].date.getTime()-1728e8}),[O]),P=le((0,r.useState)((function(){return d.map((function(e,t){return t}))})),2),j=P[0],L=P[1],D=le((0,r.useState)((function(){return(0,c.Z)(O[O.length-1].date.getTime(),"yyyy-MM-dd")})),2),N=D[0],_=D[1],x=le((0,r.useState)((function(){return[34,35,79]})),2),S=x[0],Z=x[1],F=(0,r.useMemo)((function(){return O.filter((function(e){var t=e.investment_id;return S.includes(t)})).filter((function(e){return e.date.getTime()>k}))}),[O,S]),M=(0,r.useCallback)((function(e,t,n){var r=(0,c.Z)(t,"yyyy-MM-dd");return e[r]&&e[n]?e[r]/e[n]:0}),[]);return r.createElement("div",null,r.createElement(g.A,null,r.createElement(g.Z,{list:F.map((function(e){var t=e.investment_id;return ae(ae({},ie(e,ee)),{},{group:v[t]})})),legend:!0,rule:!0}),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Date"),r.createElement("input",{type:"date",value:N,onChange:(0,r.useCallback)((function(e){var t=e.target;return _(t.value)}),[])}))),r.createElement(g.Z,{list:O.filter((function(e){var t=e.investment_id;return S.includes(t)})).filter((function(e){return e.date.getTime()>k})).map((function(e){var t=e.investment_id,n=ie(e,te);return ae(ae({},n),{},{value:M(h[t],n.date,N),group:v[t]})})),rule:!0}),r.createElement(J,{investments:f.investment,rates:h,selected:S,setSelected:Z})),r.createElement(g.A,null,r.createElement(g.Z,{list:ne(Array(1200)).map((function(e,t){return y(new Date,{days:t})})).reverse().map((function(e,t){return Object.entries(d.filter((function(t,n){return new Date(t.date)<=e&&j.includes(n)})).map(fe({date:e,rates:h})).filter(Boolean).reduce((function(e,t){var n=t.value,r=t.investment_id;return Object.assign(e,oe({},r,(e[r]||0)+n))}),{})).map((function(t){var n=le(t,2),r=n[0],a=n[1];return{date:e,group:v[r],value:a}}))})).flat()}),r.createElement(g.Z,{list:ne(Array(1200)).map((function(e,t){return y(new Date,{days:t})})).reverse().map((function(e){return Object.entries(d.filter((function(t,n){return new Date(t.date)<=e&&j.includes(n)})).map(fe({date:e,rates:h})).filter(Boolean).reduce((function(e,t,n){var r=t.value;return Object.assign(e,oe({},n,r))}),{})).map((function(t,n,r){var a,i=le(t,2),o=i[0],l=i[1];return a=r.slice(0,n).reduce((function(e,t){var n=le(t,2);return n[0],e+n[1]}),0),{date:e,group:o,value:l+a,value2:a}}))})).flat(),type:"area",legend:!0}),r.createElement(H,{transactions:d,rates:h,names:v,selected:j,setSelected:L})),r.createElement(I,{list:Object.entries(d.filter((function(e,t){return j.includes(t)})).reduce((function(e,t){return Object.assign(e,oe({},t.investment_id,(e[t.investment_id]||0)+t.value))}),{})).map((function(e){var t=le(e,2),n=t[0],r=t[1];return{label:v[n],value:r}})).sort((function(e,t){return t.value-e.value}))}))}function he(){return r.createElement("div",{className:K.Section},r.createElement("h2",null,"Quotes"),r.createElement(ve,null))}},5068:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),i=n(2609),o=n.n(i)()(a());o.push([e.id,".D4hghWDR6tislQFHDqDO{position:relative;padding:2em}.D4hghWDR6tislQFHDqDO svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}","",{version:3,sources:["webpack://./src/components/DonutChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    //   rect.selection {\n    //     stroke: none;\n    //   }\n  }\n\n  // .Tooltip {\n  //   position: absolute;\n  // }\n}\n// .Tooltip {\n//   background: white;\n//   border: 1px solid lightgray;\n//   color: orange;\n//   padding: 0.25em;\n// }\n"],sourceRoot:""}]),o.locals={Chart:"D4hghWDR6tislQFHDqDO"};const l=o},5488:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(272),a=n.n(r),i=n(2609),o=n.n(i)()(a());o.push([e.id,'._ESpGSPPpzgrCHtLDC15{color:purple}.TdrVPL_ZKxEpsGqtgAKw,.XpEtlXAz0qkmc2pUZelh{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.TdrVPL_ZKxEpsGqtgAKw table,.XpEtlXAz0qkmc2pUZelh table{border-collapse:collapse}.TdrVPL_ZKxEpsGqtgAKw table tr:hover,.XpEtlXAz0qkmc2pUZelh table tr:hover{background-color:#e0e0e0}.TdrVPL_ZKxEpsGqtgAKw tr:nth-child(even),.XpEtlXAz0qkmc2pUZelh tr:nth-child(even){background-color:#f7f7f7}.TdrVPL_ZKxEpsGqtgAKw th,.TdrVPL_ZKxEpsGqtgAKw td,.XpEtlXAz0qkmc2pUZelh th,.XpEtlXAz0qkmc2pUZelh td{padding:.25em}.B5XUoft7ajzWeLY9QZQ9{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}.MXCudOGdPDTJtcb0KFtk{color:#000;text-align:right;width:4.5em}.MXCudOGdPDTJtcb0KFtk.oGGbruZcUCrKnRswgvhX{color:blue}.MXCudOGdPDTJtcb0KFtk.LFTPI4HvrN257b34VKog{color:green}.MXCudOGdPDTJtcb0KFtk.LFTPI4HvrN257b34VKog::before{content:"↖"}.MXCudOGdPDTJtcb0KFtk.IYciZuUEzLYtaU3GzLql{color:red}.MXCudOGdPDTJtcb0KFtk.IYciZuUEzLYtaU3GzLql::before{content:"↘"}',"",{version:3,sources:["webpack://./src/containers/Quotes/styles.module.scss"],names:[],mappings:"AAAA,sBAAA,YACE,CAAA,4CAEF,sCAEE,CAAA,cACA,CAAA,wDACA,wBACE,CAAA,0EAEE,wBACE,CAAA,kFAKJ,wBACE,CAAA,oGAGJ,aAEE,CAAA,sBAGJ,UACE,CAAA,cACA,CAAA,8BACA,CAAA,WACA,CAAA,sBAEF,UACE,CAAA,gBACA,CAAA,WACA,CAAA,2CACA,UACE,CAAA,2CAEF,WACE,CAAA,mDACA,WACE,CAAA,2CAGJ,SACE,CAAA,mDACA,WACE",sourcesContent:['.Section {\n  color: purple;\n}\n.Investments,\n.Transactions {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n.Percent {\n  color: black;\n  text-align: right;\n  width: 4.5em;\n  &.eq {\n    color: blue;\n  }\n  &.gt {\n    color: green;\n    &::before {\n      content: "\\2196";\n    }\n  }\n  &.lt {\n    color: red;\n    &::before {\n      content: "\\2198";\n    }\n  }\n}\n'],sourceRoot:""}]),o.locals={Section:"_ESpGSPPpzgrCHtLDC15",Investments:"TdrVPL_ZKxEpsGqtgAKw",Transactions:"XpEtlXAz0qkmc2pUZelh",Row:"B5XUoft7ajzWeLY9QZQ9",Percent:"MXCudOGdPDTJtcb0KFtk",eq:"oGGbruZcUCrKnRswgvhX",gt:"LFTPI4HvrN257b34VKog",lt:"IYciZuUEzLYtaU3GzLql"};const l=o},8871:(e,t,n)=>{n.d(t,{b:()=>o});var r=n(997),a=n(1118),i=n(7394);function o(e,t){return void 0===t&&(t=r.z),(0,a.e)((function(n,r){var a=null,o=null,l=null,u=function(){if(a){a.unsubscribe(),a=null;var e=o;o=null,r.next(e)}};function c(){var n=l+e,i=t.now();if(i<n)return a=this.schedule(void 0,n-i),void r.add(a);u()}n.subscribe((0,i.x)(r,(function(n){o=n,l=t.now(),a||(a=t.schedule(c,e),r.add(a))}),(function(){u(),r.complete()}),void 0,(function(){o=a=null})))}))}},9369:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(9676),a=n(1118),i=n(7394);function o(e,t){return void 0===t&&(t=r.y),e=null!=e?e:l,(0,a.e)((function(n,r){var a,o=!0;n.subscribe((0,i.x)(r,(function(n){var i=t(n);!o&&e(a,i)||(o=!1,a=i,r.next(n))})))}))}function l(e,t){return e===t}}}]);
//# sourceMappingURL=818.js.map