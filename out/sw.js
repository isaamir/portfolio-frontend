if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>i(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-544b09e6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-build-manifest.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/EEBV_N_Ud3NWs56zwMyzl/_buildManifest.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/EEBV_N_Ud3NWs56zwMyzl/_ssgManifest.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/12-49a018b9fd574dbd.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/588.3d4887d5228b913e.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/aceecd74.1c44f19ac0235eef.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/framework-715a76d8b0695da7.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/main-7c89796ed64b6f09.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/pages/_app-f251a8452216c19e.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/pages/index-0901aeb5e3e85a51.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/chunks/webpack-552d5853ce061346.js",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/_next/static/css/22d3be400824a3ef.css",revision:"EEBV_N_Ud3NWs56zwMyzl"},{url:"/assets/arrow-sample.svg",revision:"84a9f26671751d1763baffbfcf67cff1"},{url:"/assets/aws.png",revision:"85d86077fb4e22988cc708f13d3aed23"},{url:"/assets/cv-img-1.jpg",revision:"ae3a88664a6baeae6428a72ebc8cd58a"},{url:"/assets/cv-img-2.jpg",revision:"9b38e3ff58d20998a0703b5716e5592a"},{url:"/assets/cv.pdf",revision:"7d5a1ede3576380798448c5df2c55435"},{url:"/assets/docker.png",revision:"4bb0e2f4694a19d7752202f7156479bd"},{url:"/assets/graphics/buildings1.jpg",revision:"b1499a76485bf6d95ef09b60f3ddfd8b"},{url:"/assets/graphics/buildings2.jpg",revision:"2aacfdc986fd397c8bce3bf974fa9c5d"},{url:"/assets/graphics/card.jpg",revision:"eeeb2e4e8edfa5b06ad9dbafb835a45c"},{url:"/assets/graphics/dailycart1.jpg",revision:"6debed2f9e30f96a59f9c43d5218f5db"},{url:"/assets/graphics/dailycart2.jpg",revision:"8dabfe76b682cc2fa59e149702928bbc"},{url:"/assets/graphics/dailycart3.jpg",revision:"10901d20f715ace8abcdeeecccd5b0e1"},{url:"/assets/graphics/dailycart4.jpg",revision:"48210862b8b8443e72e15b22875c34e0"},{url:"/assets/graphics/dailycart5.jpg",revision:"1f150b3f478081b7f62d9725d22b09c3"},{url:"/assets/mk.svg",revision:"eab916e57dfe07e4c906ed2530904fce"},{url:"/assets/portfolio.gif",revision:"38b71af9422288363bf5302de2a5d0ee"},{url:"/assets/projects/maxshop-img.jpeg",revision:"e9362b4238a09bff01a809494be5a6fc"},{url:"/assets/projects/souq-v1-img.png",revision:"bd7dfa7c5ae6c7bb1976797d7fc8eb98"},{url:"/assets/projects/souq-v2-img.png",revision:"ab470b531bab1954eb9dd442d9305772"},{url:"/assets/projects/tote-merchant-img.png",revision:"a83172d8ae2a0c4dfb7f78dcb84c2658"},{url:"/assets/projects/tote-merchant1-img.png",revision:"2b32d370b16bc015209540e6da3f84c7"},{url:"/assets/projects/tote-user-img.png",revision:"2112c16c54f7d40615df12fcb49e0219"},{url:"/assets/projects/tote-user1-img.png",revision:"ee5abc14f938ff4fc9c09e0323b09fa4"},{url:"/assets/smit.png",revision:"e03709a295d1cb2cacefbcd94496c3aa"},{url:"/assets/streeviewtrusted.png",revision:"c3c6f895f737e2b199d99c09ab860ea6"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/192.png",revision:"a96026bb33e8772fe9e4e8c117f42715"},{url:"/icons/256.png",revision:"ce9cc498ebcfe344c8711b92f0c89a89"},{url:"/icons/384.png",revision:"903ff87fd05b59f863dae6a9c1e018fb"},{url:"/icons/512.png",revision:"4a108c7448862e726c3ac380be4cb22e"},{url:"/manifest.json",revision:"4226dc1fd715c7b5752d429fbc1283c1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET")}));
