if(!self.define){let o,s={};const e=(e,l)=>(e=new URL(e+".js",l).href,s[e]||new Promise((s=>{if("document"in self){const o=document.createElement("script");o.src=e,o.onload=s,document.head.appendChild(o)}else o=e,importScripts(e),s()})).then((()=>{let o=s[e];if(!o)throw new Error(`Module ${e} didn’t register its module`);return o})));self.define=(l,n)=>{const i=o||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const t=o=>e(o,i),w={module:{uri:i},exports:f,require:t};s[i]=Promise.all(l.map((o=>w[o]||t(o)))).then((o=>(n(...o),f)))}}define(["./workbox-29b31176"],(function(o){"use strict";o.setCacheNameDetails({prefix:"show-case"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/wyh-showcase/css/chunk-vendors.c8a31d25.css",revision:null},{url:"/wyh-showcase/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/wyh-showcase/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/wyh-showcase/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/wyh-showcase/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/wyh-showcase/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/wyh-showcase/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/wyh-showcase/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/wyh-showcase/img/logo.4d6033c9.svg",revision:null},{url:"/wyh-showcase/index.html",revision:"d2564f7bf5702ce5570b91c9f97ed8d4"},{url:"/wyh-showcase/js/about.1434f430.js",revision:null},{url:"/wyh-showcase/js/app.f5dfdce8.js",revision:null},{url:"/wyh-showcase/js/chunk-vendors.2c92eeb8.js",revision:null},{url:"/wyh-showcase/manifest.json",revision:"6d9581ba5857f8645337e41c9c4809c0"},{url:"/wyh-showcase/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map