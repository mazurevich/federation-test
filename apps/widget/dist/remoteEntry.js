var widget;(()=>{"use strict";var e,r,t={976:(e,r,t)=>{var o={"./widget":()=>Promise.all([t.e(917),t.e(25)]).then((()=>()=>t(25)))},i=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var o="default",i=t.S[o];if(i&&i!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>i,init:()=>n})}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.m=t,i.c=o,i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".bundle.js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="dummy-social:",i.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var l,s;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+n){l=c;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",r+n),l.src=t),e[t]=[o];var p=(r,o)=>{l.onerror=l.onload=null,clearTimeout(f);var i=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(o))),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{i.S={};var e={},r={};i.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];i.o(i.S,t)||(i.S[t]={}),i.S[t];var a=[];return e[t]=a.length?Promise.all(a).then((()=>e[t]=1)):1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={263:0};i.f.j=(r,t)=>{var o=i.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,i)=>o=e[r]=[t,i]));t.push(o[2]=n);var a=i.p+i.u(r),l=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,l,s]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);s&&s(i)}for(r&&r(t);u<a.length;u++)n=a[u],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkdummy_social=self.webpackChunkdummy_social||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=i(976);widget=n})();