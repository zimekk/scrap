(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[331],{9331:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ITEMS_1:()=>K,ITEMS_2:()=>Z,ITEMS_3:()=>Y,default:()=>V});var a=r(4041),n=r(3046),i=r(1691),c=r(5168),o=r(4967),l=r(1736),u=r(7617);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!=m(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,n,i,c,o=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(a=i.call(r)).done)&&(o.push(a.value),o.length!==e);l=!0);}catch(t){u=!0,n=t}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw n}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}var g=function(t,e){return Object.entries(e).reduce((function(e,r){var a,m=p(r,2),v=m[0],y=m[1];return a=Object.entries(y).reduce((function(e,r){var a=p(r,2),m=a[0],y=a[1];return function(t){return Object.assign(e,t.length?s({},m,t):{})}(t.map((function(t){return y.rates.filter((function(e){return e.from<=t.to&&t.from<=e.to})).map((function(e){var r=e.from,a=e.to,n=e.price,u=e.vat;return function(t){var e=t.from,r=t.to,a=t.value;return{from:e,to:r,count:y.value({value:a,count:(0,i.W)((0,c.W)((0,o.h)(new Date(r),{date:1}),{months:1}),new Date(e)),days:(0,l.c)(new Date(r),new Date(e))}),price:n,vat:u}}({from:r>t.from?r:t.from,to:a<t.to?a:t.to,value:Math.round(t.value-t.start)})}))})).flat().reduce((function(t,e){if(["Dystrybucja energii elektrycznej"].includes(v)&&t.length>0){var r=t[t.length-1];if(e.price===r.price&&e.vat===r.vat&&(0,n.GP)((0,u.j)(new Date(e.from),{days:1}),"yyyy-MM-dd")===r.to)return r.count+=e.count,r.to=e.to,t}return t.concat(e)}),[]).map((function(t){return function(e){return f(f({},t),{},{value:e,tax:t.vat*e,total:(1+t.vat)*e})}(Math.round(100*t.count*t.price)/100)})))}),{}),Object.assign(e,Object.keys(a).length?s({},v,a):{})}),{})},d=function(t){return Object.entries(t).map((function(t,e,r){var a=p(t,2),i=a[0];return f(f({},a[1]),{},{from:i,to:(0,n.GP)((0,u.j)(r[e+1]?new Date(r[e+1][0]):(0,c.W)((0,o.h)(new Date(i),{date:1}),{months:1}),{days:1}),"yyyy-MM-dd")})}))},b=r(2591),h=r.n(b),E=r(1740),A=r.n(E),w=r(8128),O=r.n(w),j=r(855),C=r.n(j),k=r(3051),z=r.n(k),S=r(3656),P=r.n(S),D=r(3353),F=r.n(D),I={};I.styleTagTransform=P(),I.setAttributes=C(),I.insert=O().bind(null,"head"),I.domAPI=A(),I.insertStyleElement=z(),h()(F(),I);const x=F()&&F().locals?F().locals:void 0;function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,n,i,c,o=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(a=i.call(r)).done)&&(o.push(a.value),o.length!==e);l=!0);}catch(t){u=!0,n=t}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw n}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}var W=function(t,e){return"".concat((0,n.GP)(new Date(t),"dd.MM.yy"),"-").concat((0,n.GP)(new Date(e),"dd.MM.yy"))},N=function(t){return Object.entries(t).reduce((function(t,e){var r=L(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,a=t.tax,n=t.total;return{value:r+e.value,tax:a+e.tax,total:n+e.total}}),t)}),{value:0,tax:0,total:0})};function B(t){var e=t.counter,r=t.items,i=t.rates,c=t.selected,o=t.setSelected,l=L((0,a.useState)([]),2),u=l[0],m=l[1];return a.createElement("div",{className:x.Calculations},a.createElement("h3",null,"Calculations"),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,a.createElement("input",{type:"checkbox",checked:c.length===r.length,onChange:(0,a.useCallback)((function(t){var e=t.target;return o(e.checked?r.map((function(t,e){return e})):[])}),[])})),a.createElement("th",{align:"left"},"Licznik / Okres zużycia"),a.createElement("th",{align:"right"},"Netto [zł]"),a.createElement("th",{align:"right"},"Podatek VAT [zł]"),a.createElement("th",{align:"right"},"Brutto [zł]")),r.map((function(t,r){return[Object.values(g(t,i)).reduce((function(t,e){return Object.entries(e).reduce((function(t,e){var r=L(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,a=t.tax,n=t.total;return{value:r+e.value,tax:a+e.tax,total:n+e.total}}),t)}),t)}),{value:0,tax:0,total:0})].map((function(i){var l=i.value,u=i.tax,v=i.total;return a.createElement("tr",{key:r},a.createElement("td",null,a.createElement("input",{type:"checkbox",checked:c.includes(r),onChange:(0,a.useCallback)((function(t){var e=t.target;return o((function(t){return e.checked?t.concat(r):t.filter((function(t){return t!==r}))}))}),[])})),a.createElement("td",{align:"left"},a.createElement("a",{href:"#",onClick:(0,a.useCallback)((function(t){return t.preventDefault(),m((function(t){return t.includes(r)?t.filter((function(t){return t!==r})):t.concat(r)}))}),[])},"".concat(e," / Szczegóły rozliczenia za okres od ").concat((0,n.GP)(new Date(t[0].from),"dd.MM.yyyy")," do ").concat((0,n.GP)(new Date(t[t.length-1].to),"dd.MM.yyyy")))),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(l)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(u)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(v)))})).concat(u.includes(r)?[a.createElement("tr",{key:"".concat(r,"-details")},a.createElement("td",null),a.createElement("td",{colSpan:6},a.createElement("div",null,a.createElement("h4",null,"Wskazania układu pomiarowego"),a.createElement("table",{width:"100%"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"Numer licznika"),a.createElement("th",{align:"left"},"Okres zużycia"),a.createElement("th",{align:"right"},"Poprzednie wskazanie licznika"),a.createElement("th",{align:"right"},"Obecne wskazanie licznika"),a.createElement("th",{align:"right"},"Rodzaj odczytu"),a.createElement("th",{align:"right"},"Zużycie [kWh]")),t.map((function(t,r){var n=t.from,i=t.to,c=t.start,o=t.value,l=t.estimated;return a.createElement("tr",{key:r},a.createElement("td",null,e),a.createElement("td",{align:"right"},W(n,i)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(c)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(o)),a.createElement("td",{align:"right"},l?"S**":"R"),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(o-c)))}))),a.createElement("tfoot",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"Razem"),a.createElement("td",{colSpan:4}),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.reduce((function(t,e){var r=e.start;return t+e.value-r}),0))))))),Object.entries(g(t,i)).map((function(t,e){var r=L(t,2),n=r[0],i=r[1];return a.createElement("div",{key:e},a.createElement("h4",null,n),a.createElement("table",{width:"100%"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null),a.createElement("th",{align:"left"},"Okres zużycia"),a.createElement("th",{align:"right"},"Ilość"),a.createElement("th",{align:"right"},"Cena netto [zł]"),a.createElement("th",{align:"right"},"Wartość netto [zł]"),a.createElement("th",{align:"right"},"Stawka VAT [%]"),a.createElement("th",{align:"right"},"Podatek VAT [zł]"),a.createElement("th",{align:"right"},"Wartość brutto [zł]")),Object.entries(i).map((function(t,e){var r=L(t,2),n=r[0];return r[1].map((function(t,r){var i=t.from,c=t.to,o=t.count,l=t.price,u=t.value,m=t.vat,v=t.tax,f=t.total;return a.createElement("tr",{key:"".concat(e,"-").concat(r)},a.createElement("td",null,n),a.createElement("td",{align:"right"},W(i,c)),a.createElement("td",{align:"right"},o),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4,maximumFractionDigits:5}).format(l)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(u)),a.createElement("td",{align:"right"},m),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(v)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(f)))}))}))),a.createElement("tfoot",null,[N(i)].map((function(t,e){return a.createElement("tr",{key:e},a.createElement("th",{align:"left"},"Razem"),a.createElement("td",{colSpan:3}),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.value)),a.createElement("td",null),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.tax)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.total)))})))))}))))]:[])}))),a.createElement("tfoot",null,[r.filter((function(t,e){return c.includes(e)})).reduce((function(t,e){return Object.values(g(e,i)).reduce((function(t,e){return Object.entries(e).reduce((function(t,e){var r=L(e,2);return r[0],r[1].reduce((function(t,e){var r=t.value,a=t.tax,n=t.total;return{value:r+e.value,tax:a+e.tax,total:n+e.total}}),t)}),t)}),t)}),{value:0,tax:0,total:0})].map((function(t,e){var r=t.value,n=t.tax,i=t.total;return a.createElement("tr",{key:e},a.createElement("td",null),a.createElement("td",null),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(r)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(n)),a.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(i)))})))))}function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=Q(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!=Q(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Q(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R={"Sprzedaż energii elektrycznej":{"Energia czynna":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.2762,vat:.23},"2020-01-01":{price:.3195,vat:.23},"2021-02-01":{price:.33,vat:.23},"2022-01-01":{price:.4346,vat:.05},"2022-06-01":{price:.4522,vat:.05},"2023-01-01":{price:.414,vat:.23},"2099-01-01":{price:.698,vat:.23}})},"Opłata handlowa":{value:function(t){return t.count},rates:d({"2019-10-20":{price:4.29,vat:.23},"2020-01-01":{price:6.25,vat:.23},"2022-01-01":{price:7.8,vat:.05},"2022-06-01":{price:8.38,vat:.05},"2023-01-01":{price:8.38,vat:.23},"2023-03-01":{price:0,vat:.23},"2099-01-01":{price:8.38,vat:.23}})}},"Dystrybucja energii elektrycznej":{"Opłata jakościowa":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.013,vat:.23},"2020-01-01":{price:.0133,vat:.23},"2021-02-01":{price:.0102,vat:.23},"2022-01-01":{price:.0095,vat:.05},"2023-01-01":{price:.0095,vat:.23},"2099-01-01":{price:.0242,vat:.23}})},"Opłata OZE":{value:function(t){return t.value},rates:d({"2020-01-01":{price:0,vat:.23},"2021-01-01":{price:.0022,vat:.23},"2022-01-01":{price:9e-4,vat:.05},"2023-01-01":{price:0,vat:.23},"2024-01-01":{price:0,vat:.23},"2099-01-01":{price:0,vat:.23}})},"Opłata sieciowa zmienna":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.1349,vat:.23},"2020-01-01":{price:.1372,vat:.23},"2021-02-01":{price:.1391,vat:.23},"2022-01-01":{price:.1459,vat:.05},"2023-01-01":{price:.1459,vat:.23},"2099-01-01":{price:.2244,vat:.23}})},"Opłata kogeneracyjna":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.00158,vat:.23},"2020-01-01":{price:.00139,vat:.23},"2021-01-01":{price:0,vat:.23},"2022-01-01":{price:.00406,vat:.05},"2023-01-01":{price:.00496,vat:.23},"2024-01-01":{price:.00618,vat:.23},"2099-01-01":{price:.00618,vat:.23}})},"Opłata sieciowa stała":{value:function(t){return t.count},rates:d({"2019-10-20":{price:10.29,vat:.23},"2020-01-01":{price:10.55,vat:.23},"2021-02-01":{price:10.7,vat:.23},"2022-01-01":{price:11.32,vat:.05},"2023-01-01":{price:11.32,vat:.23},"2099-01-01":{price:17.53,vat:.23}})},"Opłata przejściowa":{value:function(t){return t.count},rates:d({"2020-01-01":{price:.1,vat:.05},"2022-01-01":{price:.1,vat:.05},"2022-04-01":{price:.1,vat:.05},"2023-01-01":{price:.1,vat:.23},"2099-01-01":{price:.1,vat:.23}})},"Opłata mocowa":{value:function(t){return t.count},rates:d({"2021-01-01":{price:4.48,vat:.23},"2022-01-01":{price:5.68,vat:.05},"2022-04-01":{price:5.68,vat:.05},"2023-01-01":{price:5.72,vat:.23},"2024-01-01":{price:6.39,vat:.23},"2099-01-01":{price:6.39,vat:.23}})},"Opłata abonamentowa":{value:function(t){return t.count},rates:d({"2019-10-20":{price:.4,vat:.23},"2020-01-01":{price:.42,vat:.23},"2022-01-01":{price:.42,vat:.05},"2023-01-01":{price:.42,vat:.23},"2099-01-01":{price:.46,vat:.23}})}},"Rozporządzenie MKiS z 09.09.2023 r.":{"Obniżka należności za 2023 r.":{value:function(){return 1},rates:d({"2023-08-10":{price:-101.9,vat:.23}})}}},_={"Sprzedaż energii elektrycznej":T(T({},R["Sprzedaż energii elektrycznej"]),{},{"Energia czynna":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.2762,vat:.23},"2020-01-01":{price:.3195,vat:.23},"2021-02-01":{price:.33,vat:.23},"2022-01-01":{price:.4346,vat:.05},"2022-06-01":{price:.4522,vat:.05},"2023-01-01":{price:.414,vat:.23},"2023-08-01":{price:.698,vat:.23},"2024-01-01":{price:.414,vat:.23},"2099-01-01":{price:.414,vat:.23}})}}),"Dystrybucja energii elektrycznej":T(T({},R["Dystrybucja energii elektrycznej"]),{},{"Opłata jakościowa":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.013,vat:.23},"2020-01-01":{price:.0133,vat:.23},"2021-02-01":{price:.0102,vat:.23},"2022-01-01":{price:.0095,vat:.05},"2023-01-01":{price:.0095,vat:.23},"2023-08-01":{price:.0242,vat:.23},"2024-01-01":{price:.0095,vat:.23},"2099-01-01":{price:.0095,vat:.23}})},"Opłata sieciowa zmienna":{value:function(t){return t.value},rates:d({"2019-10-20":{price:.1349,vat:.23},"2020-01-01":{price:.1372,vat:.23},"2021-02-01":{price:.1391,vat:.23},"2022-01-01":{price:.1459,vat:.05},"2023-01-01":{price:.1459,vat:.23},"2023-08-01":{price:.2244,vat:.23},"2024-01-01":{price:.1459,vat:.23},"2099-01-01":{price:.1459,vat:.23}})},"Opłata sieciowa stała":{value:function(t){return t.count},rates:d({"2019-10-20":{price:10.29,vat:.23},"2020-01-01":{price:10.55,vat:.23},"2021-02-01":{price:10.7,vat:.23},"2022-01-01":{price:11.32,vat:.05},"2023-01-01":{price:11.32,vat:.23},"2023-08-01":{price:17.53,vat:.23},"2024-01-01":{price:11.32,vat:.23},"2099-01-01":{price:11.32,vat:.23}})},"Opłata przejściowa":{value:function(t){return t.count},rates:d({"2019-10-20":{price:.33,vat:.23},"2022-01-01":{price:.33,vat:.05},"2022-04-01":{price:.33,vat:.05},"2023-01-01":{price:.33,vat:.23},"2024-01-01":{price:.33,vat:.23},"2099-01-01":{price:.33,vat:.23}})},"Opłata mocowa":{value:function(t){return t.count},rates:d({"2021-01-01":{price:4.48,vat:.23},"2021-04-04":{price:10.46,vat:.23},"2022-01-01":{price:13.25,vat:.05},"2022-04-01":{price:13.25,vat:.05},"2023-01-01":{price:13.35,vat:.23},"2024-01-01":{price:14.9,vat:.23},"2099-01-01":{price:14.9,vat:.23}})},"Opłata abonamentowa":{value:function(t){return t.count},rates:d({"2019-10-20":{price:.4,vat:.23},"2020-01-01":{price:.42,vat:.23},"2022-01-01":{price:.42,vat:.05},"2023-01-01":{price:.42,vat:.23},"2023-08-01":{price:.46,vat:.23},"2024-01-01":{price:.42,vat:.23},"2099-01-01":{price:.42,vat:.23}})}}),"Rozporządzenie MKiS z 09.09.2023 r.":{"Obniżka należności za 2023 r.":{value:function(){return 1},rates:d({"2023-10-17":{price:-101.9,vat:.23}})}}};function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}var K=[[{from:"2020-08-07",to:"2020-12-31",start:5479.41,value:5748.76,estimated:!0},{from:"2021-01-01",to:"2021-01-31",start:5748.76,value:5816.55,estimated:!0},{from:"2021-02-01",to:"2021-02-02",start:5816.55,value:5820.63}],[{from:"2021-02-03",to:"2021-05-31",start:5820.63,value:6082.55,estimated:!0},{from:"2021-06-01",to:"2021-08-09",start:6082.55,value:6185.36}],[{from:"2021-08-10",to:"2021-12-31",start:6185.36,value:6447.49,estimated:!0},{from:"2022-01-01",to:"2022-02-23",start:6447.49,value:6561}],[{from:"2022-02-24",to:"2022-03-31",start:6561,value:6646},{from:"2022-04-01",to:"2022-05-31",start:6646,value:6748},{from:"2022-06-01",to:"2022-08-09",start:6748,value:6835.2}],[{from:"2022-10-15",to:"2023-01-07",start:2.26,value:171.86}],[{from:"2022-09-01",to:"2022-12-31",start:2.26,value:171.86},{from:"2023-01-01",to:"2023-03-31",start:171.86,value:372.69}],[{from:"2022-10-01",to:"2022-12-31",start:2.26,value:171.86},{from:"2023-01-01",to:"2023-04-30",start:171.86,value:372.69}],[{from:"2022-08-10",to:"2022-09-13",start:6835.2,value:6876.51},{from:"2022-09-14",to:"2022-12-31",start:0,value:174.78,estimated:!0},{from:"2023-01-01",to:"2023-02-07",start:174.78,value:242}]],Y=[[{from:"2023-02-08",to:"2023-02-28",start:242,value:279},{from:"2023-03-01",to:"2023-08-09",start:279,value:558}],[{from:"2023-08-10",to:"2023-12-31",start:558,value:873.19},{from:"2024-01-01",to:"2024-02-05",start:873.19,value:966}]],Z=[[{from:"2019-10-20",to:"2019-12-31",start:5090.33,value:6099.11,estimated:!0}],[{from:"2019-10-20",to:"2019-12-31",start:6099.11,value:6503.33,estimated:!0}],[{from:"2020-01-01",to:"2020-04-09",start:6503.33,value:7272}],[{from:"2020-04-10",to:"2020-10-22",start:7272,value:9734.69}],[{from:"2020-10-23",to:"2020-12-31",start:9734.69,value:10831.52,estimated:!0}],[{from:"2021-01-01",to:"2021-01-31",start:10831.52,value:11296.29,estimated:!0}],[{from:"2021-02-01",to:"2021-04-03",start:11296.29,value:12108.42}],[{from:"2021-04-04",to:"2021-05-31",start:12108.42,value:12736.33,estimated:!0}],[{from:"2021-06-01",to:"2021-10-28",start:12736.33,value:14643.17}],[{from:"2021-10-29",to:"2021-12-31",start:14643.17,value:15588.03}],[{from:"2022-01-01",to:"2022-04-12",start:15588.03,value:16919,estimated:!0}],[{from:"2022-04-13",to:"2022-05-31",start:16919,value:17449},{from:"2022-06-01",to:"2022-10-21",start:17449,value:19169}],[{from:"2022-10-22",to:"2022-11-03",start:19169,value:19420,estimated:!0},{from:"2022-11-04",to:"2022-12-31",start:19420,value:20259.87,estimated:!0},{from:"2023-01-01",to:"2023-02-28",start:20259.87,value:21094.87},{from:"2023-03-01",to:"2023-04-11",start:21094.87,value:21582}],[{from:"2023-04-12",to:"2023-07-31",start:21582,value:23260},{from:"2023-08-01",to:"2023-10-16",start:23260,value:23983}],[{from:"2023-10-17",to:"2023-12-31",start:23983,value:25097.42,estimated:!0},{from:"2024-01-01",to:"2024-04-04",start:25097.42,value:26281}]];function J(t){var e,r,n=t.counter,i=t.items,c=t.rates,o=(e=(0,a.useState)((function(){return i.map((function(t,e){return e}))})),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,n,i,c,o=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(a=i.call(r)).done)&&(o.push(a.value),o.length!==e);l=!0);}catch(t){u=!0,n=t}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw n}}return o}}(e,r)||function(t,e){if(t){if("string"==typeof t)return U(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],u=o[1];return a.createElement("div",null,a.createElement(B,{counter:n,items:i,rates:c,selected:l,setSelected:u}))}function V(){return a.createElement("div",{className:x.Section},a.createElement("h2",null,"Energy"),a.createElement(J,{counter:"9057",items:K,rates:R}),a.createElement(J,{counter:"4201",items:Y,rates:R}),a.createElement(J,{counter:"7224",items:Z,rates:_}))}},3353:(t,e,r)=>{var a=r(2001),n=r(935)(a);n.push([t.id,".ILYKcZwRrAG3B5Qm_6ti{color:purple}.QWuaC1AqCgpyeQ75yBWq{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.QWuaC1AqCgpyeQ75yBWq table{border-collapse:collapse}.QWuaC1AqCgpyeQ75yBWq table tr:hover{background-color:#e0e0e0}.QWuaC1AqCgpyeQ75yBWq tr:nth-child(even){background-color:#f7f7f7}.QWuaC1AqCgpyeQ75yBWq th,.QWuaC1AqCgpyeQ75yBWq td{padding:.25em}.PbI4uYIFtC7LCTjgoOUg{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}","",{version:3,sources:["webpack://./src/containers/Energy/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,sCAAA,CACA,cAAA,CACA,4BACE,wBAAA,CAEE,qCACE,wBAAA,CAKJ,yCACE,wBAAA,CAGJ,kDAEE,aAAA,CAGJ,sBACE,UAAA,CACA,cAAA,CACA,8BAAA,CACA,WAAA",sourceRoot:""}]),n.locals={Section:"ILYKcZwRrAG3B5Qm_6ti",Calculations:"QWuaC1AqCgpyeQ75yBWq",Row:"PbI4uYIFtC7LCTjgoOUg"},t.exports=n}}]);
//# sourceMappingURL=331.js.map