"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[584],{1584:(t,e,r)=>{r.r(e),r.d(e,{ITEMS_1:()=>_,ITEMS_2:()=>U,default:()=>G});var n=r(2784),a=r(5016),l=r(2226),i=r(3355),o=r(6522),c=r(6700),u=r(2765),m=r(9785);function s(t,e){if((0,m.Z)(2,arguments),"object"!==(0,o.Z)(e)||null===e)throw new RangeError("values parameter must be an object");var r=(0,c.Z)(t);return isNaN(r.getTime())?new Date(NaN):(null!=e.year&&r.setFullYear(e.year),null!=e.month&&(r=function(t,e){(0,m.Z)(2,arguments);var r=(0,c.Z)(t),n=(0,u.Z)(e),a=r.getFullYear(),l=r.getDate(),i=new Date(0);i.setFullYear(a,n,15),i.setHours(0,0,0,0);var o=function(t){(0,m.Z)(1,arguments);var e=(0,c.Z)(t),r=e.getFullYear(),n=e.getMonth(),a=new Date(0);return a.setFullYear(r,n+1,0),a.setHours(0,0,0,0),a.getDate()}(i);return r.setMonth(n,Math.min(l,o)),r}(r,e.month)),null!=e.date&&r.setDate((0,u.Z)(e.date)),null!=e.hours&&r.setHours((0,u.Z)(e.hours)),null!=e.minutes&&r.setMinutes((0,u.Z)(e.minutes)),null!=e.seconds&&r.setSeconds((0,u.Z)(e.seconds)),null!=e.milliseconds&&r.setMilliseconds((0,u.Z)(e.milliseconds)),r)}var f=r(5100),v=r(5533);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,u=!1;try{if(l=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==e);c=!0);}catch(t){u=!0,a=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=function(t,e){return Object.entries(e).reduce((function(e,r){var n=h(r,2),a=n[0],o=n[1];return Object.assign(e,y({},a,Object.entries(o).reduce((function(e,r){var n=h(r,2),a=n[0],o=n[1];return Object.assign(e,y({},a,t.map((function(t){return o.rates.filter((function(e){return e.from<=t.to&&t.from<=e.to})).map((function(e){var r=e.from,n=e.to,a=e.price,c=e.vat;return function(t){var e=t.from,r=t.to,n=t.value;return{from:e,to:r,count:o.value({value:n,count:(0,l.Z)((0,i.Z)(s(new Date(r),{date:1}),{months:1}),new Date(e)),days:(0,f.Z)(new Date(r),new Date(e))}),price:a,vat:c}}({from:r>t.from?r:t.from,to:n<t.to?n:t.to,value:Math.round(t.value-t.start)})})).map((function(t){return function(e){return g(g({},t),{},{value:e,tax:t.vat*e,total:(1+t.vat)*e})}(Math.round(100*t.count*t.price)/100)}))})).flat()))}),{})))}),{})},A=function(t){return Object.entries(t).map((function(t,e,r){var n=h(t,2),l=n[0];return g(g({},n[1]),{},{from:l,to:(0,a.Z)((0,v.Z)(r[e+1]?new Date(r[e+1][0]):(0,i.Z)(s(new Date(l),{date:1}),{months:1}),{days:1}),"yyyy-MM-dd")})}))},w={"Sprzedaż energii elektrycznej":{"Energia czynna":{value:function(t){return t.value},rates:A({"2019-10-20":{price:.2762,vat:.23},"2020-01-01":{price:.3195,vat:.23},"2021-02-01":{price:.33,vat:.23},"2022-01-01":{price:.4346,vat:.05},"2022-06-01":{price:.4522,vat:.05},"2023-01-01":{price:.414,vat:.23},"2099-01-01":{price:.414,vat:.23}})},"Opłata handlowa":{value:function(t){return t.count},rates:A({"2019-10-20":{price:4.29,vat:.23},"2020-01-01":{price:6.25,vat:.23},"2022-01-01":{price:7.8,vat:.05},"2022-06-01":{price:8.38,vat:.05},"2023-01-01":{price:8.38,vat:.23},"2099-01-01":{price:8.38,vat:.23}})}},"Dystrybucja energii elektrycznej":{"Opłata jakościowa":{value:function(t){return t.value},rates:A({"2019-10-20":{price:.013,vat:.23},"2020-01-01":{price:.0133,vat:.23},"2021-02-01":{price:.0102,vat:.23},"2022-01-01":{price:.0095,vat:.05},"2023-01-01":{price:.0095,vat:.23},"2099-01-01":{price:.0095,vat:.23}})},"Opłata OZE":{value:function(t){return t.value},rates:A({"2020-01-01":{price:0,vat:.23},"2021-01-01":{price:.0022,vat:.23},"2022-01-01":{price:9e-4,vat:.05},"2023-01-01":{price:0,vat:.23},"2099-01-01":{price:0,vat:.23}})},"Opłata sieciowa zmienna":{value:function(t){return t.value},rates:A({"2019-10-20":{price:.1349,vat:.23},"2020-01-01":{price:.1372,vat:.23},"2021-02-01":{price:.1391,vat:.23},"2022-01-01":{price:.1459,vat:.05},"2023-01-01":{price:.1459,vat:.23},"2099-01-01":{price:.1459,vat:.23}})},"Opłata kogeneracyjna":{value:function(t){return t.value},rates:A({"2019-10-20":{price:.00158,vat:.23},"2020-01-01":{price:.00139,vat:.23},"2021-01-01":{price:0,vat:.23},"2022-01-01":{price:.00406,vat:.05},"2023-01-01":{price:.00406,vat:.23},"2099-01-01":{price:.00406,vat:.23}})},"Opłata sieciowa stała":{value:function(t){return t.count},rates:A({"2019-10-20":{price:10.29,vat:.23},"2020-01-01":{price:10.55,vat:.23},"2021-02-01":{price:10.7,vat:.23},"2022-01-01":{price:11.32,vat:.05},"2023-01-01":{price:11.32,vat:.23},"2099-01-01":{price:11.32,vat:.23}})},"Opłata przejściowa":{value:function(t){return t.count},rates:A({"2020-01-01":{price:.1,vat:.05},"2022-01-01":{price:.1,vat:.05},"2022-04-01":{price:.1,vat:.05},"2023-01-01":{price:.1,vat:.23},"2099-01-01":{price:.1,vat:.23}})},"Opłata mocowa":{value:function(t){return t.count},rates:A({"2021-01-01":{price:4.48,vat:.23},"2022-01-01":{price:5.68,vat:.05},"2022-04-01":{price:5.68,vat:.05},"2023-01-01":{price:5.72,vat:.23},"2099-01-01":{price:5.72,vat:.23}})},"Opłata abonamentowa":{value:function(t){return t.count},rates:A({"2019-10-20":{price:.4,vat:.23},"2020-01-01":{price:.42,vat:.23},"2022-01-01":{price:.42,vat:.05},"2023-01-01":{price:.42,vat:.23},"2099-01-01":{price:.42,vat:.23}})}}},O=g(g({},w),{},{"Dystrybucja energii elektrycznej":g(g({},w["Dystrybucja energii elektrycznej"]),{},{"Opłata przejściowa":{value:function(t){return t.count},rates:A({"2019-10-20":{price:.33,vat:.23},"2022-01-01":{price:.33,vat:.05},"2022-04-01":{price:.33,vat:.05},"2099-01-01":{price:.33,vat:.05}})},"Opłata mocowa":{value:function(t){return t.count},rates:A({"2021-01-01":{price:4.48,vat:.23},"2021-04-04":{price:10.46,vat:.23},"2022-01-01":{price:13.25,vat:.05},"2022-04-01":{price:13.25,vat:.05},"2024-04-01":{price:13.25,vat:.05}})}})}),C=r(6062),j=r.n(C),k=r(4036),Z=r.n(k),D=r(6793),S=r.n(D),F=r(7892),z=r.n(F),I=r(1173),P=r.n(I),N=r(2464),x=r.n(N),M=r(7412),L={};L.styleTagTransform=x(),L.setAttributes=z(),L.insert=S().bind(null,"head"),L.domAPI=Z(),L.insertStyleElement=P(),j()(M.Z,L);const W=M.Z&&M.Z.locals?M.Z.locals:void 0;function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,u=!1;try{if(l=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==e);c=!0);}catch(t){u=!0,a=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var q=function(t,e){return"".concat((0,a.Z)(new Date(t),"dd.MM.yy"),"-").concat((0,a.Z)(new Date(e),"dd.MM.yy"))},T=function(t){return Object.entries(t).reduce((function(t,e){var r=B(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,n=t.tax,a=t.total;return{value:r+e.value,tax:n+e.tax,total:a+e.total}}),t)}),{value:0,tax:0,total:0})};function R(t){var e=t.counter,r=t.items,l=t.rates,i=t.selected,o=t.setSelected,c=B((0,n.useState)([]),2),u=c[0],m=c[1];return n.createElement("div",{className:W.Calculations},n.createElement("h3",null,"Calculations"),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,n.createElement("input",{type:"checkbox",checked:i.length===r.length,onChange:(0,n.useCallback)((function(t){var e=t.target;return o(e.checked?r.map((function(t,e){return e})):[])}),[])})),n.createElement("th",{align:"left"},"Licznik / Okres zużycia"),n.createElement("th",{align:"right"},"Netto [zł]"),n.createElement("th",{align:"right"},"Podatek VAT [zł]"),n.createElement("th",{align:"right"},"Brutto [zł]")),r.map((function(t,r){return[Object.values(E(t,l)).reduce((function(t,e){return Object.entries(e).reduce((function(t,e){var r=B(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,n=t.tax,a=t.total;return{value:r+e.value,tax:n+e.tax,total:a+e.total}}),t)}),t)}),{value:0,tax:0,total:0})].map((function(l){var c=l.value,u=l.tax,s=l.total;return n.createElement("tr",{key:r},n.createElement("td",null,n.createElement("input",{type:"checkbox",checked:i.includes(r),onChange:(0,n.useCallback)((function(t){var e=t.target;return o((function(t){return e.checked?t.concat(r):t.filter((function(t){return t!==r}))}))}),[])})),n.createElement("td",{align:"left"},n.createElement("a",{href:"#",onClick:(0,n.useCallback)((function(t){return t.preventDefault(),m((function(t){return t.includes(r)?t.filter((function(t){return t!==r})):t.concat(r)}))}),[])},"".concat(e," / Szczegóły rozliczenia za okres od ").concat((0,a.Z)(new Date(t[0].from),"dd.MM.yyyy")," do ").concat((0,a.Z)(new Date(t[t.length-1].to),"dd.MM.yyyy")))),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(c)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(u)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(s)))})).concat(u.includes(r)?[n.createElement("tr",{key:"".concat(r,"-details")},n.createElement("td",null),n.createElement("td",{colSpan:6},n.createElement("div",null,n.createElement("h4",null,"Wskazania układu pomiarowego"),n.createElement("table",{width:"100%"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{align:"left"},"Numer licznika"),n.createElement("th",{align:"left"},"Okres zużycia"),n.createElement("th",{align:"right"},"Poprzednie wskazanie licznika"),n.createElement("th",{align:"right"},"Obecne wskazanie licznika"),n.createElement("th",{align:"right"},"Rodzaj odczytu"),n.createElement("th",{align:"right"},"Zużycie [kWh]")),t.map((function(t,r){var a=t.from,l=t.to,i=t.start,o=t.value,c=t.estimated;return n.createElement("tr",{key:r},n.createElement("td",null,e),n.createElement("td",{align:"right"},q(a,l)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(i)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(o)),n.createElement("td",{align:"right"},c?"S**":"R"),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(o-i)))}))),n.createElement("tfoot",null,n.createElement("tr",null,n.createElement("th",{align:"left"},"Razem"),n.createElement("td",{colSpan:3}),n.createElement("td",{align:"right"}))))),Object.entries(E(t,l)).map((function(t,e){var r=B(t,2),a=r[0],l=r[1];return n.createElement("div",{key:e},n.createElement("h4",null,a),n.createElement("table",{width:"100%"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null),n.createElement("th",{align:"left"},"Okres zużycia"),n.createElement("th",{align:"right"},"Ilość"),n.createElement("th",{align:"right"},"Cena netto [zł]"),n.createElement("th",{align:"right"},"Wartość netto [zł]"),n.createElement("th",{align:"right"},"Stawka VAT [%]"),n.createElement("th",{align:"right"},"Podatek VAT [zł]"),n.createElement("th",{align:"right"},"Wartość brutto [zł]")),Object.entries(l).map((function(t,e){var r=B(t,2),a=r[0];return r[1].map((function(t,r){var l=t.from,i=t.to,o=t.count,c=t.price,u=t.value,m=t.vat,s=t.tax,f=t.total;return n.createElement("tr",{key:"".concat(e,"-").concat(r)},n.createElement("td",null,a),n.createElement("td",{align:"right"},q(l,i)),n.createElement("td",{align:"right"},o),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4,maximumFractionDigits:5}).format(c)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(u)),n.createElement("td",{align:"right"},m),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(s)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(f)))}))}))),n.createElement("tfoot",null,[T(l)].map((function(t,e){return n.createElement("tr",{key:e},n.createElement("th",{align:"left"},"Razem"),n.createElement("td",{colSpan:3}),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.value)),n.createElement("td",null),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.tax)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.total)))})))))}))))]:[])}))),n.createElement("tfoot",null,[r.filter((function(t,e){return i.includes(e)})).reduce((function(t,e){return Object.values(E(e,l)).reduce((function(t,e){return Object.entries(e).reduce((function(t,e){var r=B(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,n=t.tax,a=t.total;return{value:r+e.value,tax:n+e.tax,total:a+e.total}}),t)}),t)}),t)}),{value:0,tax:0,total:0})].map((function(t,e){var r=t.value,a=t.tax,l=t.total;return n.createElement("tr",{key:e},n.createElement("td",null),n.createElement("td",null),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(r)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(a)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(l)))})))))}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var _=[[{from:"2020-08-07",to:"2020-12-31",start:5479.41,value:5748.76,estimated:!0},{from:"2021-01-01",to:"2021-01-31",start:5748.76,value:5816.55,estimated:!0},{from:"2021-02-01",to:"2021-02-02",start:5816.55,value:5820.63}],[{from:"2021-02-03",to:"2021-05-31",start:5820.63,value:6082.55,estimated:!0},{from:"2021-06-01",to:"2021-08-09",start:6082.55,value:6185.36}],[{from:"2021-08-10",to:"2021-12-31",start:6185.36,value:6447.49,estimated:!0},{from:"2022-01-01",to:"2022-02-23",start:6447.49,value:6561}],[{from:"2022-02-24",to:"2022-03-31",start:6561,value:6646},{from:"2022-04-01",to:"2022-05-31",start:6646,value:6748},{from:"2022-06-01",to:"2022-08-09",start:6748,value:6835.2}],[{from:"2022-10-15",to:"2023-01-07",start:2.26,value:171.86}],[{from:"2022-09-01",to:"2022-12-31",start:2.26,value:171.86},{from:"2023-01-01",to:"2023-03-31",start:171.86,value:372.69}],[{from:"2022-10-01",to:"2022-12-31",start:2.26,value:171.86},{from:"2023-01-01",to:"2023-04-30",start:171.86,value:372.69}],[{from:"2022-08-10",to:"2022-09-13",start:6835.2,value:6876.51},{from:"2022-09-14",to:"2022-12-31",start:0,value:174.78,estimated:!0},{from:"2023-01-01",to:"2023-02-07",start:174.78,value:242}]],U=[[{from:"2019-10-20",to:"2019-12-31",start:5090.33,value:6099.11,estimated:!0}],[{from:"2019-10-20",to:"2019-12-31",start:6099.11,value:6503.33,estimated:!0}],[{from:"2020-01-01",to:"2020-04-09",start:6503.33,value:7272}],[{from:"2020-04-10",to:"2020-10-22",start:7272,value:9734.69}],[{from:"2020-10-23",to:"2020-12-31",start:9734.69,value:10831.52,estimated:!0}],[{from:"2021-01-01",to:"2021-01-31",start:10831.52,value:11296.29,estimated:!0}],[{from:"2021-02-01",to:"2021-04-03",start:11296.29,value:12108.42}],[{from:"2021-04-04",to:"2021-05-31",start:12108.42,value:12736.33,estimated:!0}],[{from:"2021-06-01",to:"2021-10-28",start:12736.33,value:14643.17}],[{from:"2021-10-29",to:"2021-12-31",start:14643.17,value:15588.03}],[{from:"2022-01-01",to:"2022-04-12",start:15588.03,value:16919,estimated:!0}],[{from:"2022-04-13",to:"2022-05-31",start:16919,value:17449},{from:"2022-06-01",to:"2022-10-21",start:17449,value:19169}]];function H(t){var e,r,a=t.counter,l=t.items,i=t.rates,o=(e=(0,n.useState)((function(){return l.map((function(t,e){return e}))})),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,u=!1;try{if(l=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==e);c=!0);}catch(t){u=!0,a=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],u=o[1];return n.createElement("div",null,n.createElement(R,{counter:a,items:l,rates:i,selected:c,setSelected:u}))}function G(){return n.createElement("div",{className:W.Section},n.createElement("h2",null,"Energy"),n.createElement(H,{counter:"9057",items:_,rates:w}),n.createElement(H,{counter:"7224",items:U,rates:O}))}},7412:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(272),a=r.n(n),l=r(2609),i=r.n(l)()(a());i.push([t.id,".ILYKcZwRrAG3B5Qm_6ti{color:purple}.QWuaC1AqCgpyeQ75yBWq{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.QWuaC1AqCgpyeQ75yBWq table{border-collapse:collapse}.QWuaC1AqCgpyeQ75yBWq table tr:hover{background-color:#e0e0e0}.QWuaC1AqCgpyeQ75yBWq tr:nth-child(even){background-color:#f7f7f7}.QWuaC1AqCgpyeQ75yBWq th,.QWuaC1AqCgpyeQ75yBWq td{padding:.25em}.PbI4uYIFtC7LCTjgoOUg{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}","",{version:3,sources:["webpack://./src/containers/Energy/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,sCAAA,CACA,cAAA,CACA,4BACE,wBAAA,CAEE,qCACE,wBAAA,CAKJ,yCACE,wBAAA,CAGJ,kDAEE,aAAA,CAGJ,sBACE,UAAA,CACA,cAAA,CACA,8BAAA,CACA,WAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Calculations {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n"],sourceRoot:""}]),i.locals={Section:"ILYKcZwRrAG3B5Qm_6ti",Calculations:"QWuaC1AqCgpyeQ75yBWq",Row:"PbI4uYIFtC7LCTjgoOUg"};const o=i},5533:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(6522),a=r(3761),l=r(9785),i=r(2765),o=r(8187);function c(t,e){if((0,l.Z)(2,arguments),!e||"object"!==(0,n.Z)(e))return new Date(NaN);var r=e.years?(0,i.Z)(e.years):0,c=e.months?(0,i.Z)(e.months):0,u=e.weeks?(0,i.Z)(e.weeks):0,m=e.days?(0,i.Z)(e.days):0,s=e.hours?(0,i.Z)(e.hours):0,f=e.minutes?(0,i.Z)(e.minutes):0,v=e.seconds?(0,i.Z)(e.seconds):0,p=function(t,e){(0,l.Z)(2,arguments);var r=(0,i.Z)(e);return(0,o.Z)(t,-r)}(t,c+12*r),d=function(t,e){(0,l.Z)(2,arguments);var r=(0,i.Z)(e);return(0,a.Z)(t,-r)}(p,m+7*u),g=1e3*(v+60*(f+60*s));return new Date(d.getTime()-g)}}}]);
//# sourceMappingURL=584.js.map