"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[372],{1372:(t,e,r)=>{r.r(e),r.d(e,{ITEMS_1:()=>_,ITEMS_2:()=>Y,ITEMS_3:()=>U,default:()=>Z});var n=r(4041),a=r(8283),i=r(6188),o=r(4483),c=r(2850),l=r(8683),u=r(1437);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){var n;return n=function(t,e){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==m(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t,e){return Object.entries(e).reduce((function(e,r){var n,m=p(r,2),v=m[0],y=m[1];return n=Object.entries(y).reduce((function(e,r){var n=p(r,2),m=n[0],y=n[1];return function(t){return Object.assign(e,t.length?s({},m,t):{})}(t.map((function(t){return y.rates.filter((function(e){return e.from<=t.to&&t.from<=e.to})).map((function(e){var r=e.from,n=e.to,a=e.price,u=e.vat;return function(t){var e=t.from,r=t.to,n=t.value;return{from:e,to:r,count:y.value({value:n,count:(0,i.W)((0,o.W)((0,c.h)(new Date(r),{date:1}),{months:1}),new Date(e)),days:(0,l.c)(new Date(r),new Date(e))}),price:a,vat:u}}({from:r>t.from?r:t.from,to:n<t.to?n:t.to,value:Math.round(t.value-t.start)})}))})).flat().reduce((function(t,e){if(["Dystrybucja energii elektrycznej"].includes(v)&&t.length>0){var r=t[t.length-1];if(e.price===r.price&&e.vat===r.vat&&(0,a.GP)((0,u.j)(new Date(e.from),{days:1}),"yyyy-MM-dd")===r.to)return r.count+=e.count,r.to=e.to,t}return t.concat(e)}),[]).map((function(t){return function(e){return f(f({},t),{},{value:e,tax:t.vat*e,total:(1+t.vat)*e})}(Math.round(100*t.count*t.price)/100)})))}),{}),Object.assign(e,Object.keys(n).length?s({},v,n):{})}),{})},g=function(t){return Object.entries(t).map((function(t,e,r){var n=p(t,2),i=n[0];return f(f({},n[1]),{},{from:i,to:(0,a.GP)((0,u.j)(r[e+1]?new Date(r[e+1][0]):(0,o.W)((0,c.h)(new Date(i),{date:1}),{months:1}),{days:1}),"yyyy-MM-dd")})}))},b=r(2591),h=r.n(b),E=r(1740),A=r.n(E),w=r(8128),O=r.n(w),j=r(855),C=r.n(j),k=r(3051),S=r.n(k),P=r(3656),z=r.n(P),D=r(4344),F={};F.styleTagTransform=z(),F.setAttributes=C(),F.insert=O().bind(null,"head"),F.domAPI=A(),F.insertStyleElement=S(),h()(D.A,F);const I=D.A&&D.A.locals?D.A.locals:void 0;function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var W=function(t,e){return"".concat((0,a.GP)(new Date(t),"dd.MM.yy"),"-").concat((0,a.GP)(new Date(e),"dd.MM.yy"))},M=function(t){return Object.entries(t).reduce((function(t,e){var r=x(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,n=t.tax,a=t.total;return{value:r+e.value,tax:n+e.tax,total:a+e.total}}),t)}),{value:0,tax:0,total:0})};function N(t){var e=t.counter,r=t.items,i=t.rates,o=t.selected,c=t.setSelected,l=x((0,n.useState)([]),2),u=l[0],m=l[1];return n.createElement("div",{className:I.Calculations},n.createElement("h3",null,"Calculations"),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,n.createElement("input",{type:"checkbox",checked:o.length===r.length,onChange:(0,n.useCallback)((function(t){var e=t.target;return c(e.checked?r.map((function(t,e){return e})):[])}),[])})),n.createElement("th",{align:"left"},"Licznik / Okres zużycia"),n.createElement("th",{align:"right"},"Netto [zł]"),n.createElement("th",{align:"right"},"Podatek VAT [zł]"),n.createElement("th",{align:"right"},"Brutto [zł]")),r.map((function(t,r){return[Object.values(d(t,i)).reduce((function(t,e){return Object.entries(e).reduce((function(t,e){var r=x(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,n=t.tax,a=t.total;return{value:r+e.value,tax:n+e.tax,total:a+e.total}}),t)}),t)}),{value:0,tax:0,total:0})].map((function(i){var l=i.value,u=i.tax,v=i.total;return n.createElement("tr",{key:r},n.createElement("td",null,n.createElement("input",{type:"checkbox",checked:o.includes(r),onChange:(0,n.useCallback)((function(t){var e=t.target;return c((function(t){return e.checked?t.concat(r):t.filter((function(t){return t!==r}))}))}),[])})),n.createElement("td",{align:"left"},n.createElement("a",{href:"#",onClick:(0,n.useCallback)((function(t){return t.preventDefault(),m((function(t){return t.includes(r)?t.filter((function(t){return t!==r})):t.concat(r)}))}),[])},"".concat(e," / Szczegóły rozliczenia za okres od ").concat((0,a.GP)(new Date(t[0].from),"dd.MM.yyyy")," do ").concat((0,a.GP)(new Date(t[t.length-1].to),"dd.MM.yyyy")))),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(l)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(u)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(v)))})).concat(u.includes(r)?[n.createElement("tr",{key:"".concat(r,"-details")},n.createElement("td",null),n.createElement("td",{colSpan:6},n.createElement("div",null,n.createElement("h4",null,"Wskazania układu pomiarowego"),n.createElement("table",{width:"100%"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{align:"left"},"Numer licznika"),n.createElement("th",{align:"left"},"Okres zużycia"),n.createElement("th",{align:"right"},"Poprzednie wskazanie licznika"),n.createElement("th",{align:"right"},"Obecne wskazanie licznika"),n.createElement("th",{align:"right"},"Rodzaj odczytu"),n.createElement("th",{align:"right"},"Zużycie [kWh]")),t.map((function(t,r){var a=t.from,i=t.to,o=t.start,c=t.value,l=t.estimated;return n.createElement("tr",{key:r},n.createElement("td",null,e),n.createElement("td",{align:"right"},W(a,i)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(o)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(c)),n.createElement("td",{align:"right"},l?"S**":"R"),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(c-o)))}))),n.createElement("tfoot",null,n.createElement("tr",null,n.createElement("th",{align:"left"},"Razem"),n.createElement("td",{colSpan:4}),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.reduce((function(t,e){var r=e.start;return t+e.value-r}),0))))))),Object.entries(d(t,i)).map((function(t,e){var r=x(t,2),a=r[0],i=r[1];return n.createElement("div",{key:e},n.createElement("h4",null,a),n.createElement("table",{width:"100%"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null),n.createElement("th",{align:"left"},"Okres zużycia"),n.createElement("th",{align:"right"},"Ilość"),n.createElement("th",{align:"right"},"Cena netto [zł]"),n.createElement("th",{align:"right"},"Wartość netto [zł]"),n.createElement("th",{align:"right"},"Stawka VAT [%]"),n.createElement("th",{align:"right"},"Podatek VAT [zł]"),n.createElement("th",{align:"right"},"Wartość brutto [zł]")),Object.entries(i).map((function(t,e){var r=x(t,2),a=r[0];return r[1].map((function(t,r){var i=t.from,o=t.to,c=t.count,l=t.price,u=t.value,m=t.vat,v=t.tax,f=t.total;return n.createElement("tr",{key:"".concat(e,"-").concat(r)},n.createElement("td",null,a),n.createElement("td",{align:"right"},W(i,o)),n.createElement("td",{align:"right"},c),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4,maximumFractionDigits:5}).format(l)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(u)),n.createElement("td",{align:"right"},m),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(v)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(f)))}))}))),n.createElement("tfoot",null,[M(i)].map((function(t,e){return n.createElement("tr",{key:e},n.createElement("th",{align:"left"},"Razem"),n.createElement("td",{colSpan:3}),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.value)),n.createElement("td",null),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.tax)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.total)))})))))}))))]:[])}))),n.createElement("tfoot",null,[r.filter((function(t,e){return o.includes(e)})).reduce((function(t,e){return Object.values(d(e,i)).reduce((function(t,e){return Object.entries(e).reduce((function(t,e){var r=x(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,n=t.tax,a=t.total;return{value:r+e.value,tax:n+e.tax,total:a+e.total}}),t)}),t)}),t)}),{value:0,tax:0,total:0})].map((function(t,e){var r=t.value,a=t.tax,i=t.total;return n.createElement("tr",{key:e},n.createElement("td",null),n.createElement("td",null),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(r)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(a)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(i)))})))))}function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){var n,a,i,o;n=t,a=e,i=r[e],o=function(t,e){if("object"!=B(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a),(a="symbol"==B(o)?o:o+"")in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T={"Sprzedaż energii elektrycznej":{"Energia czynna":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.2762,vat:.23},"2020-01-01":{price:.3195,vat:.23},"2021-02-01":{price:.33,vat:.23},"2022-01-01":{price:.4346,vat:.05},"2022-06-01":{price:.4522,vat:.05},"2023-01-01":{price:.414,vat:.23},"2099-01-01":{price:.698,vat:.23}})},"Opłata handlowa":{value:function(t){return t.count},rates:g({"2019-10-20":{price:4.29,vat:.23},"2020-01-01":{price:6.25,vat:.23},"2022-01-01":{price:7.8,vat:.05},"2022-06-01":{price:8.38,vat:.05},"2023-01-01":{price:8.38,vat:.23},"2023-03-01":{price:0,vat:.23},"2099-01-01":{price:8.38,vat:.23}})}},"Dystrybucja energii elektrycznej":{"Opłata jakościowa":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.013,vat:.23},"2020-01-01":{price:.0133,vat:.23},"2021-02-01":{price:.0102,vat:.23},"2022-01-01":{price:.0095,vat:.05},"2023-01-01":{price:.0095,vat:.23},"2099-01-01":{price:.0242,vat:.23}})},"Opłata OZE":{value:function(t){return t.value},rates:g({"2020-01-01":{price:0,vat:.23},"2021-01-01":{price:.0022,vat:.23},"2022-01-01":{price:9e-4,vat:.05},"2023-01-01":{price:0,vat:.23},"2099-01-01":{price:0,vat:.23}})},"Opłata sieciowa zmienna":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.1349,vat:.23},"2020-01-01":{price:.1372,vat:.23},"2021-02-01":{price:.1391,vat:.23},"2022-01-01":{price:.1459,vat:.05},"2023-01-01":{price:.1459,vat:.23},"2099-01-01":{price:.2244,vat:.23}})},"Opłata kogeneracyjna":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.00158,vat:.23},"2020-01-01":{price:.00139,vat:.23},"2021-01-01":{price:0,vat:.23},"2022-01-01":{price:.00406,vat:.05},"2023-01-01":{price:.00496,vat:.23},"2024-01-01":{price:.00618,vat:.23},"2099-01-01":{price:.00618,vat:.23}})},"Opłata sieciowa stała":{value:function(t){return t.count},rates:g({"2019-10-20":{price:10.29,vat:.23},"2020-01-01":{price:10.55,vat:.23},"2021-02-01":{price:10.7,vat:.23},"2022-01-01":{price:11.32,vat:.05},"2023-01-01":{price:11.32,vat:.23},"2099-01-01":{price:17.53,vat:.23}})},"Opłata przejściowa":{value:function(t){return t.count},rates:g({"2020-01-01":{price:.1,vat:.05},"2022-01-01":{price:.1,vat:.05},"2022-04-01":{price:.1,vat:.05},"2023-01-01":{price:.1,vat:.23},"2099-01-01":{price:.1,vat:.23}})},"Opłata mocowa":{value:function(t){return t.count},rates:g({"2021-01-01":{price:4.48,vat:.23},"2022-01-01":{price:5.68,vat:.05},"2022-04-01":{price:5.68,vat:.05},"2023-01-01":{price:5.72,vat:.23},"2024-01-01":{price:6.39,vat:.23},"2099-01-01":{price:6.39,vat:.23}})},"Opłata abonamentowa":{value:function(t){return t.count},rates:g({"2019-10-20":{price:.4,vat:.23},"2020-01-01":{price:.42,vat:.23},"2022-01-01":{price:.42,vat:.05},"2023-01-01":{price:.42,vat:.23},"2099-01-01":{price:.46,vat:.23}})}},"Rozporządzenie MKiS z 09.09.2023 r.":{"Obniżka należności za 2023 r.":{value:function(){return 1},rates:g({"2023-08-10":{price:-101.9,vat:.23}})}}},G={"Sprzedaż energii elektrycznej":q(q({},T["Sprzedaż energii elektrycznej"]),{},{"Energia czynna":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.2762,vat:.23},"2020-01-01":{price:.3195,vat:.23},"2021-02-01":{price:.33,vat:.23},"2022-01-01":{price:.4346,vat:.05},"2022-06-01":{price:.4522,vat:.05},"2023-01-01":{price:.414,vat:.23},"2023-08-01":{price:.698,vat:.23},"2099-01-01":{price:.698,vat:.23}})}}),"Dystrybucja energii elektrycznej":q(q({},T["Dystrybucja energii elektrycznej"]),{},{"Opłata jakościowa":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.013,vat:.23},"2020-01-01":{price:.0133,vat:.23},"2021-02-01":{price:.0102,vat:.23},"2022-01-01":{price:.0095,vat:.05},"2023-01-01":{price:.0095,vat:.23},"2023-08-01":{price:.0242,vat:.23},"2099-01-01":{price:.0242,vat:.23}})},"Opłata sieciowa zmienna":{value:function(t){return t.value},rates:g({"2019-10-20":{price:.1349,vat:.23},"2020-01-01":{price:.1372,vat:.23},"2021-02-01":{price:.1391,vat:.23},"2022-01-01":{price:.1459,vat:.05},"2023-01-01":{price:.1459,vat:.23},"2023-08-01":{price:.2244,vat:.23},"2099-01-01":{price:.2244,vat:.23}})},"Opłata sieciowa stała":{value:function(t){return t.count},rates:g({"2019-10-20":{price:10.29,vat:.23},"2020-01-01":{price:10.55,vat:.23},"2021-02-01":{price:10.7,vat:.23},"2022-01-01":{price:11.32,vat:.05},"2023-01-01":{price:11.32,vat:.23},"2023-08-01":{price:17.53,vat:.23},"2099-01-01":{price:17.53,vat:.23}})},"Opłata przejściowa":{value:function(t){return t.count},rates:g({"2019-10-20":{price:.33,vat:.23},"2022-01-01":{price:.33,vat:.05},"2022-04-01":{price:.33,vat:.05},"2023-01-01":{price:.33,vat:.23},"2099-01-01":{price:.33,vat:.23}})},"Opłata mocowa":{value:function(t){return t.count},rates:g({"2021-01-01":{price:4.48,vat:.23},"2021-04-04":{price:10.46,vat:.23},"2022-01-01":{price:13.25,vat:.05},"2022-04-01":{price:13.25,vat:.05},"2023-01-01":{price:13.35,vat:.23},"2099-01-01":{price:13.35,vat:.23}})},"Opłata abonamentowa":{value:function(t){return t.count},rates:g({"2019-10-20":{price:.4,vat:.23},"2020-01-01":{price:.42,vat:.23},"2022-01-01":{price:.42,vat:.05},"2023-01-01":{price:.42,vat:.23},"2023-08-01":{price:.46,vat:.23},"2099-01-01":{price:.46,vat:.23}})}})};function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var _=[[{from:"2020-08-07",to:"2020-12-31",start:5479.41,value:5748.76,estimated:!0},{from:"2021-01-01",to:"2021-01-31",start:5748.76,value:5816.55,estimated:!0},{from:"2021-02-01",to:"2021-02-02",start:5816.55,value:5820.63}],[{from:"2021-02-03",to:"2021-05-31",start:5820.63,value:6082.55,estimated:!0},{from:"2021-06-01",to:"2021-08-09",start:6082.55,value:6185.36}],[{from:"2021-08-10",to:"2021-12-31",start:6185.36,value:6447.49,estimated:!0},{from:"2022-01-01",to:"2022-02-23",start:6447.49,value:6561}],[{from:"2022-02-24",to:"2022-03-31",start:6561,value:6646},{from:"2022-04-01",to:"2022-05-31",start:6646,value:6748},{from:"2022-06-01",to:"2022-08-09",start:6748,value:6835.2}],[{from:"2022-10-15",to:"2023-01-07",start:2.26,value:171.86}],[{from:"2022-09-01",to:"2022-12-31",start:2.26,value:171.86},{from:"2023-01-01",to:"2023-03-31",start:171.86,value:372.69}],[{from:"2022-10-01",to:"2022-12-31",start:2.26,value:171.86},{from:"2023-01-01",to:"2023-04-30",start:171.86,value:372.69}],[{from:"2022-08-10",to:"2022-09-13",start:6835.2,value:6876.51},{from:"2022-09-14",to:"2022-12-31",start:0,value:174.78,estimated:!0},{from:"2023-01-01",to:"2023-02-07",start:174.78,value:242}]],U=[[{from:"2023-02-08",to:"2023-02-28",start:242,value:279},{from:"2023-03-01",to:"2023-08-09",start:279,value:558}],[{from:"2023-08-10",to:"2023-12-31",start:558,value:873.19},{from:"2024-01-01",to:"2024-02-05",start:873.19,value:966}]],Y=[[{from:"2019-10-20",to:"2019-12-31",start:5090.33,value:6099.11,estimated:!0}],[{from:"2019-10-20",to:"2019-12-31",start:6099.11,value:6503.33,estimated:!0}],[{from:"2020-01-01",to:"2020-04-09",start:6503.33,value:7272}],[{from:"2020-04-10",to:"2020-10-22",start:7272,value:9734.69}],[{from:"2020-10-23",to:"2020-12-31",start:9734.69,value:10831.52,estimated:!0}],[{from:"2021-01-01",to:"2021-01-31",start:10831.52,value:11296.29,estimated:!0}],[{from:"2021-02-01",to:"2021-04-03",start:11296.29,value:12108.42}],[{from:"2021-04-04",to:"2021-05-31",start:12108.42,value:12736.33,estimated:!0}],[{from:"2021-06-01",to:"2021-10-28",start:12736.33,value:14643.17}],[{from:"2021-10-29",to:"2021-12-31",start:14643.17,value:15588.03}],[{from:"2022-01-01",to:"2022-04-12",start:15588.03,value:16919,estimated:!0}],[{from:"2022-04-13",to:"2022-05-31",start:16919,value:17449},{from:"2022-06-01",to:"2022-10-21",start:17449,value:19169}],[{from:"2022-10-22",to:"2022-11-03",start:19169,value:19420,estimated:!0},{from:"2022-11-04",to:"2022-12-31",start:19420,value:20259.87,estimated:!0},{from:"2023-01-01",to:"2023-02-28",start:20259.87,value:21094.87},{from:"2023-03-01",to:"2023-04-11",start:21094.87,value:21582}],[{from:"2023-04-12",to:"2023-07-31",start:21582,value:23260},{from:"2023-08-01",to:"2023-10-16",start:23260,value:23983}]];function K(t){var e,r,a=t.counter,i=t.items,o=t.rates,c=(e=(0,n.useState)((function(){return i.map((function(t,e){return e}))})),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=c[0],u=c[1];return n.createElement("div",null,n.createElement(N,{counter:a,items:i,rates:o,selected:l,setSelected:u}))}function Z(){return n.createElement("div",{className:I.Section},n.createElement("h2",null,"Energy"),n.createElement(K,{counter:"9057",items:_,rates:T}),n.createElement(K,{counter:"4201",items:U,rates:T}),n.createElement(K,{counter:"7224",items:Y,rates:G}))}},4344:(t,e,r)=>{r.d(e,{A:()=>c});var n=r(2001),a=r.n(n),i=r(935),o=r.n(i)()(a());o.push([t.id,".ILYKcZwRrAG3B5Qm_6ti{color:purple}.QWuaC1AqCgpyeQ75yBWq{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.QWuaC1AqCgpyeQ75yBWq table{border-collapse:collapse}.QWuaC1AqCgpyeQ75yBWq table tr:hover{background-color:#e0e0e0}.QWuaC1AqCgpyeQ75yBWq tr:nth-child(even){background-color:#f7f7f7}.QWuaC1AqCgpyeQ75yBWq th,.QWuaC1AqCgpyeQ75yBWq td{padding:.25em}.PbI4uYIFtC7LCTjgoOUg{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}","",{version:3,sources:["webpack://./src/containers/Energy/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,sCAAA,CACA,cAAA,CACA,4BACE,wBAAA,CAEE,qCACE,wBAAA,CAKJ,yCACE,wBAAA,CAGJ,kDAEE,aAAA,CAGJ,sBACE,UAAA,CACA,cAAA,CACA,8BAAA,CACA,WAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Calculations {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n"],sourceRoot:""}]),o.locals={Section:"ILYKcZwRrAG3B5Qm_6ti",Calculations:"QWuaC1AqCgpyeQ75yBWq",Row:"PbI4uYIFtC7LCTjgoOUg"};const c=o}}]);
//# sourceMappingURL=372.js.map