"use strict";(self.webpackChunknn_podiatry=self.webpackChunknn_podiatry||[]).push([[27],{27:(e,r,t)=>{t.r(r),t.d(r,{default:()=>y});var a=t(43);class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=r}}const i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},o=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=await fetch(i.origin+e,{method:"POST",headers:t,body:r}),o=await a.text(),l=new s(a.status,o);if(a.ok)return l;throw l},n=(e,r,t)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||"string"!==typeof r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||"string"!==typeof t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new s(451,"Unavailable For Headless Browser"),m=(e,r)=>{if((e=>{var r;return!(null!==(r=e.list)&&void 0!==r&&r.length)||!e.watchVariable})(e))return!1;((e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof r)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const t=(a=r,s=e.watchVariable,a instanceof FormData?a.get(s):a[s]);var a,s;return"string"===typeof t&&e.list.includes(t)},u=()=>new s(403,"Forbidden"),g=async(e,r,t)=>{if(!r.throttle||!t)return!1;((e,r)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&"string"!==typeof r)throw"The LimitRate ID has to be a string"})(r.throttle,r.id);const a=r.id||e,s=await(async(e,r,t)=>{const a=Number(await t.get(e)||0);return r-Date.now()+a})(a,r.throttle,t);return s>0||(await t.set(a,Date.now().toString()),!1)},b=()=>new s(429,"Too Many Requests"),p={init:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;const t=o(e);i.publicKey=t.publicKey,i.blockHeadless=t.blockHeadless,i.storageProvider=t.storageProvider,i.blockList=t.blockList,i.limitRate=t.limitRate,i.origin=t.origin||r},send:async(e,r,t,a)=>{const s=o(a),p=s.publicKey||i.publicKey,h=s.blockHeadless||i.blockHeadless,y=i.storageProvider||s.storageProvider,f={...i.blockList,...s.blockList},x={...i.limitRate,...s.limitRate};if(h&&d(navigator))return Promise.reject(c());if(n(p,e,r),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(t),t&&m(f,t))return Promise.reject(u());if(await g(location.pathname,x,y))return Promise.reject(b());const k={lib_version:"4.3.3",user_id:p,service_id:e,template_id:r,template_params:t};return l("/api/v1.0/email/send",JSON.stringify(k),{"Content-type":"application/json"})},sendForm:async(e,r,t,a)=>{const s=o(a),p=s.publicKey||i.publicKey,h=s.blockHeadless||i.blockHeadless,y=i.storageProvider||s.storageProvider,f={...i.blockList,...s.blockList},x={...i.limitRate,...s.limitRate};if(h&&d(navigator))return Promise.reject(c());const k=(e=>"string"===typeof e?document.querySelector(e):e)(t);n(p,e,r),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(k);const w=new FormData(k);return m(f,w)?Promise.reject(u()):await g(location.pathname,x,y)?Promise.reject(b()):(w.append("lib_version","4.3.3"),w.append("service_id",e),w.append("template_id",r),w.append("user_id",p),l("/api/v1.0/email/send-form",w))},EmailJSResponseStatus:s};var h=t(579);function y(){const e=(0,a.useRef)(),[r,t]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[(0,h.jsx)("div",{className:"w-full h-40",children:(0,h.jsx)("img",{src:"".concat("","/pebble-footprint.webp"),alt:"Banner",className:"w-full h-full object-cover","aria-label":"Banner Image"})}),(0,h.jsx)("section",{"aria-labelledby":"contact-title",children:(0,h.jsxs)("div",{className:"max-w-screen-md mx-auto p-4 sm:px-6 lg:px-8",children:[(0,h.jsx)("h2",{className:"mb-4 text-3xl tracking-tight font-bold text-center text-gray-900 dark:text-white",id:"contact-title",children:"Contact Me"}),(0,h.jsx)("p",{className:"mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",children:"Morning, Afternoon, and Evening Appointments Available"}),r&&(0,h.jsx)("p",{className:"text-center text-rose-600 text-xl font-bold","aria-live":"polite",children:"Message sent!"}),(0,h.jsxs)("form",{className:"space-y-8",ref:e,onSubmit:r=>{r.preventDefault(),p.sendForm("contact_service","contact_form",e.current,{publicKey:"6WTU0L3Ur4LEzEGob"}).then((()=>{console.log("Success!"),t(!0),setTimeout((()=>t(!1)),5e3)}),(e=>{console.log("Failed...",e.text)})),r.target.reset()},"aria-labelledby":"contact-form",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"user_name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your Name"}),(0,h.jsx)("input",{id:"user_name",type:"text",name:"user_name",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",required:!0,"aria-required":"true","aria-describedby":"user_name-description"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"user_email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your Email"}),(0,h.jsx)("input",{id:"user_email",type:"email",name:"user_email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",required:!0,"aria-required":"true","aria-describedby":"user_email-description"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"user_number",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Phone Number"}),(0,h.jsx)("input",{id:"user_number",type:"tel",name:"user_number",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",required:!0,"aria-required":"true","aria-describedby":"user_number-description"})]}),(0,h.jsxs)("div",{className:"sm:col-span-2",children:[(0,h.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Your Message"}),(0,h.jsx)("textarea",{id:"message",name:"message",rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500","aria-required":"true","aria-describedby":"message-description"})]}),(0,h.jsx)("button",{type:"submit",value:"Send",className:"block w-full rounded bg-rose-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto","aria-label":"Send message",children:"Send message"})]})]})})]})}}}]);
//# sourceMappingURL=27.e5952cc7.chunk.js.map