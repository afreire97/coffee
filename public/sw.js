if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let t={};const l=e=>i(e,o),c={module:{uri:o},exports:t,require:l};n[o]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BVrPcOxZ.js",revision:null},{url:"assets/index-Dtn62Xmo.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"cf373a45d37dc64f0b616302ba85c3cb"},{url:"icon-192x192.png",revision:"ee7b075a6b9d63378fbabc0cfa9152eb"},{url:"icon-512x512.png",revision:"edf482650078b1876a8d33c857279df9"},{url:"manifest.webmanifest",revision:"b4b2f3427ed62b9e4cd18b6c914a5da0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
