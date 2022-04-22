"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[254],{4254:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(2784),a=n(357),l=n(539),o=n(6062),i=n.n(o),u=n(4036),c=n.n(u),m=n(6793),s=n.n(m),d=n(7892),p=n.n(d),f=n(1173),h=n.n(f),g=n(2464),b=n.n(g),v=n(8471),A={};A.styleTagTransform=b(),A.setAttributes=p(),A.insert=s().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=h(),i()(v.Z,A);const E=v.Z&&v.Z.locals?v.Z.locals:void 0;function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t,n,r,a,l,o){try{var i=e[l](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var C=["EUR","USD","CHF","GBP"],N=(0,a.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/exchange/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){F(l,r,a,o,i,"next",e)}function i(e){F(l,r,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}());function S(e){var t,n,a=e.version,o=void 0===a?"v1":a,i=N.read(o).rates,u=(t=(0,r.useState)("CHF"),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],m=u[1],s=(0,r.useMemo)((function(){var e;return y(e={},"2020-11-23",441.87),y(e,"2020-12-23",441.87),y(e,"2021-01-22",441.87),y(e,"2021-02-23",442.06),y(e,"2021-03-23",442.06),y(e,"2021-04-23",442.06),y(e,"2021-05-21",442.82),y(e,"2021-06-23",442.82),y(e,"2021-07-23",442.82),y(e,"2021-08-23",442.46),y(e,"2021-09-23",442.46),y(e,"2021-10-22",442.46),y(e,"2021-11-23",441.87),y(e,"2021-12-23",441.87),y(e,"2022-01-21",441.87),y(e,"2022-02-23",444.77),y(e,"2022-03-23",444.77),y(e,"2022-04-22",444.77),e}),[]),d=(0,r.useMemo)((function(){return i.filter((function(e){return e.code===c})).filter((function(e){return Object.keys(s).includes(e.date)})).map((function(e){var t=e.buy,n=e.code,r=e.date,a=e.sell,l=e.spread,o=(e.time,e.units);return{date:new Date(r),name:"".concat(o," ").concat(n),buy:Number(t),sell:Number(a),spread:Number(l),value:s[r],add:60}})).map((function(e){return Object.assign(e,{pay:Math.round(100*e.sell*e.value)/100+e.add})}))}),[i,s,c]);return console.log({rates:i,code:c,list:d}),r.createElement("div",{className:E.Section},r.createElement("h2",null,"Exchange"),r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",null,"Code"),r.createElement("select",{value:c,onChange:(0,r.useCallback)((function(e){var t=e.target;return m(t.value)}),[])},C.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"Data"),r.createElement("th",null,"Nazwa"),r.createElement("th",null,"Kupno"),r.createElement("th",null,"Sprzedaż"),r.createElement("th",null,"Spread"),r.createElement("th",null,"Wartość"),r.createElement("th",null,"Stała"),r.createElement("th",null,"Kwota")),d.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{align:"right"},(0,l.Z)(e.date,"dd.MM.yyyy")),r.createElement("td",null,e.name),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4}).format(e.buy)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4}).format(e.sell)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4}).format(e.spread)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.add)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.pay)))}))),r.createElement("tfoot",null,[d.reduce((function(e,t){var n=e.value,r=e.add,a=e.pay;return{value:n+t.value,add:r+t.add,pay:a+t.pay}}),{value:0,add:0,pay:0})].map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{colSpan:5}),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.value)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.add)),r.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.pay)))})))))}},8471:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(272),a=n.n(r),l=n(2609),o=n.n(l)()(a());o.push([e.id,".B6Zp7eUYgBpjqmd1ubB8{color:purple}.HYOtY3B5vlGNT0uH_VzY{clear:both}.md3pkb8fMm3YUOeAjzY0{float:left;width:150px;height:200px}.tQM2WTe6cs7QpfRhslqC{color:#d3d3d3}.P19bo6gqrx6NwOpivm_e .ltBjGN_SfGcQnxrjG0DW.KcrPBqhF3Hx7FdbRnVRD{color:#8a2be2}","",{version:3,sources:["webpack://./src/containers/Exchange/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,aAAA,CAIE,iEACE,aAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 150px;\n  height: 200px;\n}\n.Sale {\n  color: lightgray;\n}\n.Details {\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n}\n"],sourceRoot:""}]),o.locals={Section:"B6Zp7eUYgBpjqmd1ubB8",Row:"HYOtY3B5vlGNT0uH_VzY",Gallery:"md3pkb8fMm3YUOeAjzY0",Sale:"tQM2WTe6cs7QpfRhslqC",Details:"P19bo6gqrx6NwOpivm_e",Feature:"ltBjGN_SfGcQnxrjG0DW",changed:"KcrPBqhF3Hx7FdbRnVRD"};const i=o}}]);
//# sourceMappingURL=254.js.map