"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[818],{2818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var r=n(2784),a=n(1148),l=n(7984),u=n(9369),i=n(8871),c=n(357),o=n(2765),s=n(6700),m=n(9785);function d(e,t){(0,m.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,o.Z)(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function f(e,t){(0,m.Z)(2,arguments);var n=(0,o.Z)(t);return d(e,-n)}function v(e,t){(0,m.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,o.Z)(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),l=new Date(n.getTime());l.setMonth(n.getMonth()+r+1,0);var u=l.getDate();return a>=u?l:(n.setFullYear(l.getFullYear(),l.getMonth(),a),n)}function p(e,t){(0,m.Z)(2,arguments);var n=(0,o.Z)(t);return v(e,-n)}function b(e,t){if((0,m.Z)(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n=t.years?(0,o.Z)(t.years):0,r=t.months?(0,o.Z)(t.months):0,a=t.weeks?(0,o.Z)(t.weeks):0,l=t.days?(0,o.Z)(t.days):0,u=t.hours?(0,o.Z)(t.hours):0,i=t.minutes?(0,o.Z)(t.minutes):0,c=t.seconds?(0,o.Z)(t.seconds):0,s=p(e,r+12*n),d=f(s,l+7*a),v=i+60*u,b=c+60*v,g=1e3*b,h=new Date(d.getTime()-g);return h}var g=n(539),h=n(5104),y=n(4524),A=n(2779),E=n.n(A),w=n(6062),C=n.n(w),k=n(4036),O=n.n(k),P=n(6793),j=n.n(P),D=n(7892),N=n.n(D),Z=n(1173),S=n.n(Z),L=n(2464),M=n.n(L),F=n(5068),_={};_.styleTagTransform=M(),_.setAttributes=N(),_.insert=j().bind(null,"head"),_.domAPI=O(),_.insertStyleElement=S(),C()(F.Z,_);const I=F.Z&&F.Z.locals?F.Z.locals:void 0;function x(e){var t=e.list,n=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=y.ve8().value((function(e){return e.value})).sort(null),r=y.Nb1().innerRadius(60).outerRadius(130),a=y.PKp(y.Cn1),l=e(t),u=y.Ys(n.current).selectAll("g.arc").data(l);u.exit().remove();var i=u.enter().append("g").attr("class","arc");i.append("path").merge(u.select("path.arc")).attr("class","arc").attr("d",r).attr("fill",(function(e,t){return a(t)})),i.append("text").merge(u.select("text")).attr("text-anchor","middle").attr("alignment-baseline","middle").attr("transform",(function(e){return"translate(".concat(r.centroid(e),")")})).style("fill","white").style("font-size",10).text((function(e){var t=e.data;return"".concat(t.label," (").concat(t.value,")")}))}),[t]),r.createElement("div",{className:E()(I.Chart)},r.createElement("svg",null,r.createElement("g",{ref:n,transform:"translate(".concat(150," ").concat(150,")")})))}var T=n(5488),K={};K.styleTagTransform=M(),K.setAttributes=N(),K.insert=j().bind(null,"head"),K.domAPI=O(),K.insertStyleElement=S(),C()(T.Z,K);const q=T.Z&&T.Z.locals?T.Z.locals:void 0;function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e,t){for(var n=0;n<5;n++){var r=e[(0,g.Z)(t,"yyyy-MM-dd")];if(r)return r;t=b(t,{days:1})}}function W(e){var t=e.value;return isNaN(t)?null:r.createElement("div",{className:E()(q.Percent,0===t?q.eq:t>0?q.gt:q.lt)},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(Math.round(1e4*t)/100)," %")}function J(e){var t=e.investments,n=e.rates,a=e.selected,l=e.setSelected,u=U((0,r.useState)([]),2),i=u[0],c=u[1],o=(0,r.useMemo)((function(){return t.map((function(e){var t=U(Object.entries(n[e.id]).pop(),2),r=t[0],a=t[1];return G(G({},e),{},{date:new Date(r),unitValue:a})}))}),[n]);return r.createElement("div",{className:q.Investments},r.createElement("h3",null,"Investments"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("input",{type:"checkbox",checked:a.length===t.length,onChange:(0,r.useCallback)((function(e){var n=e.target;return l(n.checked?t.map((function(e){return e.id})):[])}),[])})),r.createElement("th",null,"Fundusz"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"7d"),r.createElement("th",null,"14d"),r.createElement("th",null,"1m"),r.createElement("th",null,"3m"),r.createElement("th",null,"6m"),r.createElement("th",null,"12m"),r.createElement("th",null,"24m"),r.createElement("th",null,"36m")),o.map((function(e,t){return[r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:a.includes(e.id),onChange:(0,r.useCallback)((function(t){var n=t.target;return l((function(t){return n.checked?t.concat(e.id):t.filter((function(t){return t!==e.id}))}))}),[])})),r.createElement("td",null,r.createElement("a",{href:"#",onClick:(0,r.useCallback)((function(t){return t.preventDefault(),c((function(t){return t.includes(e.id)?t.filter((function(t){return t!==e.id})):t.concat(e.id)}))}),[])},e.name)),r.createElement("td",{align:"right"},(0,g.Z)(e.date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN"),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{days:7}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{days:14}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{months:1}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/n[e.id][(0,g.Z)(b(e.date,{months:3}),"yyyy-MM-dd")]-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{months:6}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{months:12}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{months:24}))-1})),r.createElement("td",{align:"right"},r.createElement(W,{value:e.unitValue/B(n[e.id],b(e.date,{months:36}))-1})))].concat(i.includes(e.id)?[r.createElement("tr",{key:"".concat(t,"-details")},r.createElement("td",null),r.createElement("td",{colSpan:11},r.createElement("pre",null,JSON.stringify(e,null,2)),r.createElement("pre",null,JSON.stringify(n[e.id],null,2))))]:[])})))))}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e){var t=e.transactions,n=e.rates,a=e.names,l=e.selected,u=e.setSelected,i=R((0,r.useState)([]),2),c=i[0],o=i[1],s=(0,r.useMemo)((function(){return Object.keys(n).reduce((function(e,t){var r,a,l,u=R(Object.entries(n[t]).pop(),2),i=u[0],c=u[1];return Object.assign(e,(r={},a=t,l={date:new Date(i),unitValue:c},a in r?Object.defineProperty(r,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[a]=l,r))}),{})}),[n]),m=(0,r.useMemo)((function(){return t.map(function(e){var t=e.names,n=e.rates;return function(e){var r=e.date,a=e.investment_id,l=e.value;if(!n[a])return null;var u=n[a][r],i=Math.round(1e3*l/u)/1e3;return{name:t[a],date:new Date(r),investment_id:a,value:Math.round(100*i*u)/100,valueNetto:l,valueBrutto:l,unitValue:u,units:i}}}({names:a,rates:n})).filter(Boolean)}),[t,a,n]);return r.createElement("div",{className:q.Transactions},r.createElement("h3",null,"Transactions"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("input",{type:"checkbox",checked:l.length===t.length,onChange:(0,r.useCallback)((function(e){var n=e.target;return u(n.checked?t.map((function(e,t){return t})):[])}),[])})),r.createElement("th",null,"Fundusz"),r.createElement("th",null,"Kwota transakcji"),r.createElement("th",null,"Liczba jednostek"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"Data wyceny jednostki"),r.createElement("th",null,"Wycena jednostki"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"%")),m.map((function(e,t){return[r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:l.includes(t),onChange:(0,r.useCallback)((function(e){var n=e.target;return u((function(e){return n.checked?e.concat(t):e.filter((function(e){return e!==t}))}))}),[])})),r.createElement("td",null,r.createElement("a",{href:"#",onClick:(0,r.useCallback)((function(e){return e.preventDefault(),o((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))}),[])},e.name)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{}).format(e.units)),r.createElement("td",{align:"right"},(0,g.Z)(e.date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN"),r.createElement("td",{align:"right"},(0,g.Z)(s[e.investment_id].date,"dd.MM.yyyy")),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(s[e.investment_id].unitValue)," PLN"),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(Math.round(100*s[e.investment_id].unitValue*e.units)/100)," PLN"),r.createElement("td",{align:"right"},r.createElement(W,{value:s[e.investment_id].unitValue/e.unitValue-1})))].concat(c.includes(t)?[r.createElement("tr",{key:"".concat(t,"-details")},r.createElement("td",null),r.createElement("td",{colSpan:10},r.createElement("pre",null,"Data wyceny jednostki\n".concat((0,g.Z)(e.date,"dd.MM.yyyy"),"\nData realizacji\n").concat((0,g.Z)(e.date,"dd.MM.yyyy"),"\nKwota transakcji netto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN\nKwota transakcji brutto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueBrutto)," PLN\nIlość jednostek po transakcji\n").concat(new Intl.NumberFormat("pl-PL",{}).format(e.units),"\nWartość jednostki w dniu wyceny\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.unitValue)," PLN\nWartość\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN\nOpłata manipulacyjna\n0,00 PLN / 0 %"))))]:[])}))),r.createElement("tfoot",null,[m.filter((function(e,t){return l.includes(t)})).reduce((function(e,t){var n=e.value,r=e.valueNetto,a=e.quote;return{value:n+t.value,valueNetto:r+t.valueNetto,quote:a+Math.round(100*s[t.investment_id].unitValue*t.units)/100}}),{value:0,valueNetto:0,quote:0})].map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null),r.createElement("td",null),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN"),r.createElement("td",{colSpan:3}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN"),r.createElement("td",{colSpan:2}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.quote)," PLN"),r.createElement("td",{align:"right"},r.createElement(W,{value:e.quote/e.value-1})))})))))}var Q=["search"],$=["investment_id"],ee=["investment","related"];function te(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ie(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||ie(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t,n,r,a,l,u){try{var i=e[l](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var se=(0,c.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/quotes/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function u(e){oe(l,r,a,u,i,"next",e)}function i(e){oe(l,r,a,u,i,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()),me=function(e){var t=e.date,n=e.rates;return function(e){var r=e.date,a=e.investment_id,l=e.value;if(!n[a])return null;var u=n[a][r],i=Math.round(1e3*l/u)/1e3,c=n[a][(0,g.Z)(t,"yyyy-MM-dd")];return n[a][(0,g.Z)(t,"yyyy-MM-dd")]?{investment_id:a,value:Math.round(100*i*c)/100}:null}};function de(e){var t=e.version,n=void 0===t?"v1":t,c=se.read(n),o=c.metas,s=c.objects,m=ue((0,r.useState)((function(){return[{date:"2018-12-28",investment_id:44,value:5331.6},{date:"2019-12-30",investment_id:44,value:1e3},{date:"2020-12-28",investment_id:44,value:1e3},{date:"2021-12-15",investment_id:44,value:1e3},{date:"2022-01-03",investment_id:75,value:1e3},{date:"2022-02-01",investment_id:75,value:1e3},{date:"2022-02-28",investment_id:34,value:1e3},{date:"2022-03-08",investment_id:35,value:1e3},{date:"2022-03-11",investment_id:10,value:1e3},{date:"2022-03-21",investment_id:36,value:1e3},{date:"2022-03-21",investment_id:37,value:1e3},{date:"2022-04-01",investment_id:34,value:1e3},{date:"2022-04-11",investment_id:44,value:1e3},{date:"2022-04-26",investment_id:34,value:1e3},{date:"2022-05-05",investment_id:75,value:1e3}]})),1)[0],d=(0,r.useMemo)((function(){return{investment:o.map((function(e){return{id:e.id,name:e.name}})).sort((function(e,t){return e.name.localeCompare(t.name)}))}}),[s]),f=(0,r.useMemo)((function(){return o.reduce((function(e,t){var n=t.id,r=t.name;return Object.assign(e,le({},n,r))}),{})}),[o]),v=(0,r.useMemo)((function(){return s.sort((function(e,t){return e.date.localeCompare(t.date)})).reduce((function(e,t){var n=t.date,r=t.investment_id,a=t.value;return Object.assign(e,le({},r,Object.assign(e[r]||{},le({},n,a))))}),{})}),[s]),p=ue((0,r.useState)((function(){return{investment:d.investment[0].id,related:d.investment[0].id,search:""}})),2),y=p[0],A=p[1],E=ue((0,r.useState)((function(){return y})),2),w=E[0],C=E[1],k=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=k.pipe((0,l.U)((function(e){var t=e.search,n=ae(e,Q);return JSON.stringify(re(re(re({},w),n),{},{search:t.trim()}))})),(0,u.x)(),(0,i.b)(400)).subscribe((function(e){return C((function(t){return re(re({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[k]),(0,r.useEffect)((function(){k.next(y)}),[y]),console.log({metas:o,options:d,filters:y,results:s,rates:v});var O=(0,r.useMemo)((function(){return s.map((function(e){var t=e.investment_id,n=e.value,r=e.date;return{investment_id:t,value:n,date:new Date(r)}})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}),[s]),P=(0,r.useMemo)((function(){return O[O.length-1].date.getTime()-1728e8}),[O]),j=(0,r.useMemo)((function(){return O.filter((function(e){var t=e.investment_id;return[y.investment,y.related].includes(t)})).filter((function(e){return e.date.getTime()>P}))}),[O,y]),D=(0,r.useMemo)((function(){return Object.entries(O.reduce((function(e,t){var n=t.date,r=t.investment_id,a=t.value;return Object.assign(e,le({},(0,g.Z)(n,"yyyy-MM-dd"),Object.assign(e[(0,g.Z)(n,"yyyy-MM-dd")]||{},le({},r,a))))}),{})).map((function(e){var t=ue(e,2),n=t[0],r=t[1];return{date:new Date(n),value:r[y.investment]/r[y.related]}})).filter((function(e){return e.date.getTime()>P}))}),[O,y]),N=ue((0,r.useState)((function(){return m.map((function(e,t){return t}))})),2),Z=N[0],S=N[1],L=ue((0,r.useState)([]),2),M=L[0],F=L[1];return r.createElement("div",null,r.createElement(h.A,null,r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Investment"),r.createElement("select",{value:y.investment,onChange:(0,r.useCallback)((function(e){var t=e.target;return A((function(e){return re(re({},e),{},{investment:Number(t.value)})}))}),[])},d.investment.map((function(e){var t=e.id,n=e.name;return r.createElement("option",{key:t,value:t},n)}))))),r.createElement(h.Z,{list:j.map((function(e){var t=e.investment_id;return re(re({},ae(e,$)),{},{group:f[t]})}))}),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Related"),r.createElement("select",{value:y.related,onChange:(0,r.useCallback)((function(e){var t=e.target;return A((function(e){return re(re({},e),{},{related:Number(t.value)})}))}),[])},d.investment.map((function(e){var t=e.id,n=e.name;return r.createElement("option",{key:t,value:t},n)})))),r.createElement("button",{onClick:(0,r.useCallback)((function(e){return e.preventDefault(),A((function(e){var t=e.investment,n=e.related;return re(re({},ae(e,ee)),{},{investment:n,related:t})}))}),[])},"reverse")),r.createElement(h.Z,{list:D})),r.createElement(h.A,null,r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:y.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return A((function(e){return re(re({},e),{},{search:t.value})}))}),[])}))),r.createElement(J,{investments:d.investment,rates:v,selected:M,setSelected:F}),r.createElement(h.Z,{list:te(Array(1200)).map((function(e,t){return b(new Date,{days:t})})).reverse().map((function(e,t){return Object.entries(m.filter((function(t,n){return new Date(t.date)<=e&&Z.includes(n)})).map(me({date:e,rates:v})).filter(Boolean).reduce((function(e,t){var n=t.value,r=t.investment_id;return Object.assign(e,le({},r,(e[r]||0)+n))}),{})).map((function(t){var n=ue(t,2),r=n[0],a=n[1];return{date:e,group:f[r],value:a}}))})).flat()}),r.createElement(h.Z,{list:te(Array(1200)).map((function(e,t){return b(new Date,{days:t})})).reverse().map((function(e){return Object.entries(m.filter((function(t,n){return new Date(t.date)<=e&&Z.includes(n)})).map(me({date:e,rates:v})).filter(Boolean).reduce((function(e,t,n){var r=t.value;return Object.assign(e,le({},n,r))}),{})).map((function(t,n,r){var a,l=ue(t,2),u=l[0],i=l[1];return a=r.slice(0,n).reduce((function(e,t){var n=ue(t,2);return n[0],e+n[1]}),0),{date:e,group:u,value:i+a,value2:a}}))})).flat(),type:"area"}),r.createElement(H,{transactions:m,rates:v,names:f,selected:Z,setSelected:S})),r.createElement(x,{list:Object.entries(m.filter((function(e,t){return Z.includes(t)})).reduce((function(e,t){return Object.assign(e,le({},t.investment_id,(e[t.investment_id]||0)+t.value))}),{})).map((function(e){var t=ue(e,2),n=t[0],r=t[1];return{label:f[n],value:r}})).sort((function(e,t){return t.value-e.value}))}))}function fe(){return r.createElement("div",{className:q.Section},r.createElement("h2",null,"Quotes"),r.createElement(de,null))}},5068:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),a=n.n(r),l=n(2609),u=n.n(l)()(a());u.push([e.id,".D4hghWDR6tislQFHDqDO{position:relative;padding:2em}.D4hghWDR6tislQFHDqDO svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}","",{version:3,sources:["webpack://./src/components/DonutChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    //   rect.selection {\n    //     stroke: none;\n    //   }\n  }\n\n  // .Tooltip {\n  //   position: absolute;\n  // }\n}\n// .Tooltip {\n//   background: white;\n//   border: 1px solid lightgray;\n//   color: orange;\n//   padding: 0.25em;\n// }\n"],sourceRoot:""}]),u.locals={Chart:"D4hghWDR6tislQFHDqDO"};const i=u},5488:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),a=n.n(r),l=n(2609),u=n.n(l)()(a());u.push([e.id,'._ESpGSPPpzgrCHtLDC15{color:purple}.TdrVPL_ZKxEpsGqtgAKw,.XpEtlXAz0qkmc2pUZelh{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.TdrVPL_ZKxEpsGqtgAKw table,.XpEtlXAz0qkmc2pUZelh table{border-collapse:collapse}.TdrVPL_ZKxEpsGqtgAKw table tr:hover,.XpEtlXAz0qkmc2pUZelh table tr:hover{background-color:#e0e0e0}.TdrVPL_ZKxEpsGqtgAKw tr:nth-child(even),.XpEtlXAz0qkmc2pUZelh tr:nth-child(even){background-color:#f7f7f7}.TdrVPL_ZKxEpsGqtgAKw th,.TdrVPL_ZKxEpsGqtgAKw td,.XpEtlXAz0qkmc2pUZelh th,.XpEtlXAz0qkmc2pUZelh td{padding:.25em}.B5XUoft7ajzWeLY9QZQ9{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}.MXCudOGdPDTJtcb0KFtk{color:#000;text-align:right;width:4.5em}.MXCudOGdPDTJtcb0KFtk.oGGbruZcUCrKnRswgvhX{color:blue}.MXCudOGdPDTJtcb0KFtk.LFTPI4HvrN257b34VKog{color:green}.MXCudOGdPDTJtcb0KFtk.LFTPI4HvrN257b34VKog::before{content:"↖"}.MXCudOGdPDTJtcb0KFtk.IYciZuUEzLYtaU3GzLql{color:red}.MXCudOGdPDTJtcb0KFtk.IYciZuUEzLYtaU3GzLql::before{content:"↘"}',"",{version:3,sources:["webpack://./src/containers/Quotes/styles.module.scss"],names:[],mappings:"AAAA,sBAAA,YACE,CAAA,4CAEF,sCAEE,CAAA,cACA,CAAA,wDACA,wBACE,CAAA,0EAEE,wBACE,CAAA,kFAKJ,wBACE,CAAA,oGAGJ,aAEE,CAAA,sBAGJ,UACE,CAAA,cACA,CAAA,8BACA,CAAA,WACA,CAAA,sBAEF,UACE,CAAA,gBACA,CAAA,WACA,CAAA,2CACA,UACE,CAAA,2CAEF,WACE,CAAA,mDACA,WACE,CAAA,2CAGJ,SACE,CAAA,mDACA,WACE",sourcesContent:['.Section {\n  color: purple;\n}\n.Investments,\n.Transactions {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n.Percent {\n  color: black;\n  text-align: right;\n  width: 4.5em;\n  &.eq {\n    color: blue;\n  }\n  &.gt {\n    color: green;\n    &::before {\n      content: "\\2196";\n    }\n  }\n  &.lt {\n    color: red;\n    &::before {\n      content: "\\2198";\n    }\n  }\n}\n'],sourceRoot:""}]),u.locals={Section:"_ESpGSPPpzgrCHtLDC15",Investments:"TdrVPL_ZKxEpsGqtgAKw",Transactions:"XpEtlXAz0qkmc2pUZelh",Row:"B5XUoft7ajzWeLY9QZQ9",Percent:"MXCudOGdPDTJtcb0KFtk",eq:"oGGbruZcUCrKnRswgvhX",gt:"LFTPI4HvrN257b34VKog",lt:"IYciZuUEzLYtaU3GzLql"};const i=u},8871:(e,t,n)=>{n.d(t,{b:()=>u});var r=n(997),a=n(1118),l=n(7394);function u(e,t){return void 0===t&&(t=r.z),(0,a.e)((function(n,r){var a=null,u=null,i=null,c=function(){if(a){a.unsubscribe(),a=null;var e=u;u=null,r.next(e)}};function o(){var n=i+e,l=t.now();if(l<n)return a=this.schedule(void 0,n-l),void r.add(a);c()}n.subscribe((0,l.x)(r,(function(n){u=n,i=t.now(),a||(a=t.schedule(o,e),r.add(a))}),(function(){c(),r.complete()}),void 0,(function(){u=a=null})))}))}},9369:(e,t,n)=>{n.d(t,{x:()=>u});var r=n(9676),a=n(1118),l=n(7394);function u(e,t){return void 0===t&&(t=r.y),e=null!=e?e:i,(0,a.e)((function(n,r){var a,u=!0;n.subscribe((0,l.x)(r,(function(n){var l=t(n);!u&&e(a,l)||(u=!1,a=l,r.next(n))})))}))}function i(e,t){return e===t}}}]);
//# sourceMappingURL=818.js.map