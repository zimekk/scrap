"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[624],{5104:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(2784),a=n(1594),o=n(1148),i=n(5120),u=n(2335),l=n(9468),c=n(7209);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=n(2779),m=n.n(f),d=n(6062),v=n.n(d),y=n(4036),p=n.n(y),b=n(6793),A=n.n(b),g=n(7892),h=n.n(g),w=n(1173),E=n.n(w),C=n(2464),O=n.n(C),j=n(2930),k={};k.styleTagTransform=O(),k.setAttributes=h(),k.insert=A().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=E(),v()(j.Z,k);const S=j.Z&&j.Z.locals?j.Z.locals:void 0;function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e){var t=e.list,n=(0,r.useMemo)((function(){return"myZoomableLineChart"}),[]),f=(0,r.useRef)(null),d=(0,r.useRef)(null),v=(0,r.useRef)(null),y=function(e){var t,n,a=(t=(0,r.useState)(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],i=a[1];return(0,r.useEffect)((function(){var t=e.current;if(t){var n=new c.Z((function(e){e.forEach((function(e){i(e.contentRect)}))}));return n.observe(t),function(){n.unobserve(t)}}}),[e]),o}(v),p=x((0,r.useState)(),2),b=p[0],A=p[1],g=x((0,r.useState)(null),2),h=g[0],w=g[1],E=(0,r.useMemo)((function(){return new o.x}),[]);return(0,r.useEffect)((function(){var e=(0,a.Ys)(d.current).style("opacity",0).style("pointer-events","none"),t=E.pipe((0,u.w)((function(e){return(0,i.of)(e).pipe((0,l.g)(e?0:400))}))).subscribe((function(t){if(t){var n={x:30,y:30},r=t.x,a=t.y,o=t.data,i=v.current.getBoundingClientRect(),u=d.current.getBoundingClientRect();console.log({wrapperRect:i,tooltipRect:u});var l="translate(".concat(r+(r<i.width-u.width-n.x?n.x:-n.x-u.width),"px,").concat(a+(a<i.height-u.height-n.y?n.y:n.y-u.height),"px)");"0"===e.style("opacity")&&e.style("transform",l),e.transition().duration(300).style("opacity",.9).style("transform",l),w(o)}else e.transition().duration(300).style("opacity",0)}));return function(){return t.unsubscribe()}}),[E]),(0,r.useEffect)((function(){if(v.current&&f.current){var e=(0,a.Ys)(f.current),n=e.select(".content"),r=y||v.current.getBoundingClientRect(),o=r.width,i=r.height,u=(0,a.ruo)(t,(function(e){return e.group}));console.log({data:u});var l=(0,a.Xf)().domain((0,a.Wem)(t,(function(e){return e.date}))).range([10,o-10]);if(b){var c=b.rescaleX(l);l.domain(c.domain())}var s=(0,a.BYU)().domain((0,a.Wem)(t,(function(e){return e.value}))).range([i-10,10]),m=(0,a.jvg)().x((function(e){return l(e.date)})).y((function(e){return s(e.value)})).curve(a.YY7),d=(0,a.PKp)().domain(Array.from(u.keys(),String)).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]);n.selectAll(".myLine").data(u).join("path").attr("class","myLine").attr("stroke",(function(e){return d(e[0])})).attr("fill","none").attr("d",(function(e){return m(e[1])})),n.selectAll(".myDot").data(t).join("circle").attr("class","myDot").attr("stroke","black").attr("r",3).attr("fill",(function(e){return d(e.group)})).attr("cx",(function(e){return l(e.date)})).attr("cy",(function(e){return s(e.value)})).on("mouseenter",(function(e,t){var n=l(t.date),r=s(t.value);E.next({x:n,y:r,data:t})})).on("mouseleave",(function(){E.next(null)}));var p=(0,a.LLu)(l).tickSizeInner(20-i);e.select(".x-axis").attr("transform","translate(0, ".concat(i,")")).call(p).call((function(e){return e.selectAll(".tick line").attr("transform","translate(0,".concat(-10,")")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var g=(0,a.y4O)(s).tickSizeInner(20-o);e.select(".y-axis").call(g).call((function(e){return e.selectAll(".tick line").attr("transform","translate(".concat(10,",0)")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var h=(0,a.sPX)().scaleExtent([1,15]).translateExtent([[0,0],[o,i]]).on("zoom",(function(e){var t=e.transform;A(t)}));e.call(h)}}),[b,t,y]),r.createElement("div",{className:m()(S.Chart),ref:v},r.createElement("div",{ref:d,className:S.Tooltip},h&&r.createElement("pre",null,JSON.stringify(h,null,2))),r.createElement("svg",{ref:f},r.createElement("defs",null,r.createElement("clipPath",{id:n},r.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%"}))),r.createElement("g",{className:"content",clipPath:"url(#".concat(n,")")}),r.createElement("g",{className:"x-axis"}),r.createElement("g",{className:"y-axis"})))}},2624:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r=n(2784),a=n(1148),o=n(7984),i=n(9369),u=n(8871),l=n(357),c=n(2765),s=n(6700),f=n(9785);function m(e,t){(0,f.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,c.Z)(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function d(e,t){(0,f.Z)(2,arguments);var n=(0,c.Z)(t);return m(e,-n)}function v(e,t){(0,f.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,c.Z)(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),o=new Date(n.getTime());o.setMonth(n.getMonth()+r+1,0);var i=o.getDate();return a>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}function y(e,t){(0,f.Z)(2,arguments);var n=(0,c.Z)(t);return v(e,-n)}var p=n(539),b=n(5104),A=n(6062),g=n.n(A),h=n(4036),w=n.n(h),E=n(6793),C=n.n(E),O=n(7892),j=n.n(O),k=n(1173),S=n.n(k),x=n(2464),N=n.n(x),M=n(5488),Z={};Z.styleTagTransform=N(),Z.setAttributes=j(),Z.insert=C().bind(null,"head"),Z.domAPI=w(),Z.insertStyleElement=S(),g()(M.Z,Z);const D=M.Z&&M.Z.locals?M.Z.locals:void 0;var P=["search"],B=["investment_id"],T=["investment","related"];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t,n,r,a,o,i){try{var u=e[o](i),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,a)}var z=(0,l.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/quotes/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Q(o,r,a,i,u,"next",e)}function u(e){Q(o,r,a,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function J(e){var t=e.version,n=void 0===t?"v1":t,l=z.read(n),s=l.metas,m=l.objects,v=(0,r.useMemo)((function(){return{investment:s.map((function(e){return{id:e.id,name:e.name}})).sort((function(e,t){return e.name.localeCompare(t.name)}))}}),[m]),A=(0,r.useMemo)((function(){return s.reduce((function(e,t){var n=t.id,r=t.name;return Object.assign(e,Y({},n,r))}),{})}),[s]),g=(0,r.useMemo)((function(){return m.reduce((function(e,t){var n=t.date,r=t.investment_id,a=t.value;return Object.assign(e,Y({},r,Object.assign(e[r]||{},Y({},n,a))))}),{})}),[m]),h=I((0,r.useState)((function(){return[{date:"2022-02-01",investment_id:75,value:1e3},{date:"2022-02-28",investment_id:34,value:1e3},{date:"2022-03-08",investment_id:35,value:1e3},{date:"2022-03-01",investment_id:75,value:1e3},{date:"2022-03-11",investment_id:10,value:1e3},{date:"2022-03-21",investment_id:36,value:1e3},{date:"2022-03-21",investment_id:37,value:1e3},{date:"2022-04-01",investment_id:34,value:1e3}]})),1)[0],w=I((0,r.useState)((function(){return{investment:v.investment[0].id,related:v.investment[0].id,search:""}})),2),E=w[0],C=w[1],O=I((0,r.useState)((function(){return E})),2),j=O[0],k=O[1],S=(0,r.useMemo)((function(){return new a.x}),[]);(0,r.useEffect)((function(){var e=S.pipe((0,o.U)((function(e){var t=e.search,n=L(e,P);return JSON.stringify(_(_(_({},j),n),{},{search:t.trim()}))})),(0,i.x)(),(0,u.b)(400)).subscribe((function(e){return k((function(t){return _(_({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[S]),(0,r.useEffect)((function(){S.next(E)}),[E]),console.log({metas:s,options:v,filters:E,results:m,rates:g});var x,N=(0,r.useMemo)((function(){return m.map((function(e){var t=e.investment_id,n=e.value,r=e.date;return{investment_id:t,value:n,date:new Date(r)}})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}),[m]),M=(0,r.useMemo)((function(){return N[N.length-1].date.getTime()-1728e8}),[N]),Z=(0,r.useMemo)((function(){return N.filter((function(e){var t=e.investment_id;return[E.investment,E.related].includes(t)})).filter((function(e){return e.date.getTime()>M}))}),[N,E]),D=(0,r.useMemo)((function(){return Object.entries(N.reduce((function(e,t){var n=t.date,r=t.investment_id,a=t.value;return Object.assign(e,Y({},(0,p.Z)(n,"yyyy-MM-dd"),Object.assign(e[(0,p.Z)(n,"yyyy-MM-dd")]||{},Y({},r,a))))}),{})).map((function(e){var t=I(e,2),n=t[0],r=t[1];return{date:new Date(n),value:r[E.investment]/r[E.related]}})).filter((function(e){return e.date.getTime()>M}))}),[N,E]);return r.createElement("div",null,r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Investment"),r.createElement("select",{value:E.investment,onChange:(0,r.useCallback)((function(e){var t=e.target;return C((function(e){return _(_({},e),{},{investment:Number(t.value)})}))}),[])},v.investment.map((function(e){var t=e.id,n=e.name;return r.createElement("option",{key:t,value:t},n)})))),r.createElement("label",null,r.createElement("span",null,"Search"),r.createElement("input",{type:"search",value:E.search,onChange:(0,r.useCallback)((function(e){var t=e.target;return C((function(e){return _(_({},e),{},{search:t.value})}))}),[])}))),r.createElement(b.Z,{list:Z.map((function(e){var t=e.investment_id;return _(_({},L(e,B)),{},{group:A[t]})}))}),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Related"),r.createElement("select",{value:E.related,onChange:(0,r.useCallback)((function(e){var t=e.target;return C((function(e){return _(_({},e),{},{related:Number(t.value)})}))}),[])},v.investment.map((function(e){var t=e.id,n=e.name;return r.createElement("option",{key:t,value:t},n)})))),r.createElement("button",{onClick:(0,r.useCallback)((function(e){return e.preventDefault(),C((function(e){var t=e.investment,n=e.related;return _(_({},L(e,T)),{},{investment:n,related:t})}))}))},"reverse")),r.createElement(b.Z,{list:D}),r.createElement(b.Z,{list:(x=Array(120),function(e){if(Array.isArray(e))return F(e)}(x)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(x)||R(x)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e,t){return function(e,t){if((0,f.Z)(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n=t.years?(0,c.Z)(t.years):0,r=t.months?(0,c.Z)(t.months):0,a=t.weeks?(0,c.Z)(t.weeks):0,o=t.days?(0,c.Z)(t.days):0,i=t.hours?(0,c.Z)(t.hours):0,u=t.minutes?(0,c.Z)(t.minutes):0,l=t.seconds?(0,c.Z)(t.seconds):0,s=d(y(e,r+12*n),o+7*a),m=1e3*(l+60*(u+60*i));return new Date(s.getTime()-m)}(new Date,{days:t})})).reverse().map((function(e,t){return Object.entries(h.filter((function(t){return new Date(t.date)<=e})).map(W({date:e,rates:g})).filter(Boolean).reduce((function(e,t){var n=t.value,r=t.investment_id;return Object.assign(e,Y({},r,(e[r]||0)+n))}),{})).map((function(t){var n=I(t,2),r=n[0],a=n[1];return{date:e,group:A[r],value:a}}))})).flat()}),r.createElement(q,{transactions:h,rates:g,names:A}),v.investment.map((function(e){var t=e.id,n=e.name;return r.createElement("div",{key:t},r.createElement("h3",null,n))})),r.createElement("pre",null,JSON.stringify(s,null,2)),r.createElement("pre",null,JSON.stringify(Z.slice(0,5),null,2)))}var W=function(e){var t=e.date,n=e.rates;return function(e){var r=e.date,a=e.investment_id,o=e.value,i=n[a][r],u=Math.round(1e3*o/i)/1e3,l=n[a][(0,p.Z)(t,"yyyy-MM-dd")];return n[a][(0,p.Z)(t,"yyyy-MM-dd")]?{investment_id:a,value:Math.round(100*u*l)/100}:null}};function q(e){var t=e.transactions,n=e.rates,a=e.names;return r.createElement("div",{className:D.Transactions},r.createElement("h3",null,"Transactions"),r.createElement("table",null,r.createElement("tbody",null,t.map(function(e){var t=e.names,n=e.rates;return function(e){var r=e.date,a=e.investment_id,o=e.value,i=n[a][r],u=Math.round(1e3*o/i)/1e3;return{name:t[a],date:new Date(r),investment_id:a,value:Math.round(100*u*i)/100,valueNetto:o,valueBrutto:o,unitValue:i,units:u}}}({names:a,rates:n})).map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("div",null,e.name),r.createElement("pre",null,"Data wyceny jednostki\n".concat((0,p.Z)(e.date,"yyyy-MM-dd"),"\nData realizacji\n28.02.2022\nKwota transakcji netto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueNetto)," PLN\n1 000,00 PLN\nKwota transakcji brutto w PLN\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.valueBrutto)," PLN\nIlość jednostek po transakcji\n").concat(e.units,"\n4,483\nWartość jednostki w dniu wyceny\n").concat((new Intl.NumberFormat).format(e.unitValue)," PLN\n223,05 PLN\nWartość\n").concat(new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)," PLN\n999,93 PLN\nOpłata manipulacyjna\n0,00 PLN / 0 %"))))})))))}function K(){return r.createElement("div",{className:D.Section},r.createElement("h2",null,"Quotes"),r.createElement(J,null))}},2930:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,".TM2RQ5NCM80BeuU4weFg{position:relative;padding:2em}.TM2RQ5NCM80BeuU4weFg svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}.TM2RQ5NCM80BeuU4weFg svg rect.D6JO0K0U9pALPDqqDDkn{stroke:none}.TM2RQ5NCM80BeuU4weFg .My38BlBqUTAUd9UrSUrO{position:absolute}.My38BlBqUTAUd9UrSUrO{background:#fff;border:1px solid #d3d3d3;color:orange;padding:.25em}","",{version:3,sources:["webpack://./src/components/ZoomableLineChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CAEA,oDACE,WAAA,CAIJ,4CACE,iBAAA,CAGJ,sBACE,eAAA,CACA,wBAAA,CACA,YAAA,CACA,aAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    rect.selection {\n      stroke: none;\n    }\n  }\n\n  .Tooltip {\n    position: absolute;\n  }\n}\n.Tooltip {\n  background: white;\n  border: 1px solid lightgray;\n  color: orange;\n  padding: 0.25em;\n}\n"],sourceRoot:""}]),i.locals={Chart:"TM2RQ5NCM80BeuU4weFg",selection:"D6JO0K0U9pALPDqqDDkn",Tooltip:"My38BlBqUTAUd9UrSUrO"};const u=i},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(272),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,"._ESpGSPPpzgrCHtLDC15{color:purple}.B5XUoft7ajzWeLY9QZQ9{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}","",{version:3,sources:["webpack://./src/containers/Quotes/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CACA,cAAA,CACA,8BAAA,CACA,WAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n"],sourceRoot:""}]),i.locals={Section:"_ESpGSPPpzgrCHtLDC15",Row:"B5XUoft7ajzWeLY9QZQ9"};const u=i},8871:(e,t,n)=>{n.d(t,{b:()=>i});var r=n(997),a=n(1118),o=n(7394);function i(e,t){return void 0===t&&(t=r.z),(0,a.e)((function(n,r){var a=null,i=null,u=null,l=function(){if(a){a.unsubscribe(),a=null;var e=i;i=null,r.next(e)}};function c(){var n=u+e,o=t.now();if(o<n)return a=this.schedule(void 0,n-o),void r.add(a);l()}n.subscribe((0,o.x)(r,(function(n){i=n,u=t.now(),a||(a=t.schedule(c,e),r.add(a))}),(function(){l(),r.complete()}),void 0,(function(){i=a=null})))}))}},9369:(e,t,n)=>{n.d(t,{x:()=>i});var r=n(9676),a=n(1118),o=n(7394);function i(e,t){return void 0===t&&(t=r.y),e=null!=e?e:u,(0,a.e)((function(n,r){var a,i=!0;n.subscribe((0,o.x)(r,(function(n){var o=t(n);!i&&e(a,o)||(i=!1,a=o,r.next(n))})))}))}function u(e,t){return e===t}}}]);
//# sourceMappingURL=624.js.map