if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),d={module:{uri:o},exports:t,require:l};i[o]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CFF5Duaa.css",revision:null},{url:"assets/index-CyeQmB_6.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"f39dc66481010f09c1cd267cd3168f94"},{url:"icon-192x192.png",revision:"ee7b075a6b9d63378fbabc0cfa9152eb"},{url:"icon-512x512.png",revision:"edf482650078b1876a8d33c857279df9"},{url:"manifest.webmanifest",revision:"131a6393451e73242de068a65deb5ca6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
