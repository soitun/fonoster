"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Receive and respond to a call",c={unversionedId:"getting_started/receive_and_respond_to_a_call",id:"getting_started/receive_and_respond_to_a_call",title:"Receive and respond to a call",description:"Fonoster can accept calls from different sources, such as phones, web pages, and mobile devices, with the ability to connect them with your Programmable Voice Application using a Webhook.",source:"@site/docs/getting_started/receive_and_respond_to_a_call.md",sourceDirName:"getting_started",slug:"/getting_started/receive_and_respond_to_a_call",permalink:"/docs/getting_started/receive_and_respond_to_a_call",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/getting_started/receive_and_respond_to_a_call.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configure a number",permalink:"/docs/getting_started/configure_a_number"},next:{title:"Make an outbound call",permalink:"/docs/getting_started/make_an_outbound_call"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"receive-and-respond-to-a-call"},"Receive and respond to a call"),(0,o.kt)("p",null,"Fonoster can accept calls from different sources, such as phones, web pages, and mobile devices, with the ability to connect them with your Programmable Voice Application using a Webhook."),(0,o.kt)("p",null,"When your Number receives an incoming phone call, it will send an HTTP request to a server you control. This callback mechanism is known as a Webhook. "),(0,o.kt)("p",null,"When the request is made from Fonoster to your application, it expects a response in JSON format. That tells it how it's going to respond to the call."),(0,o.kt)("p",null,"If everything went well with the prior guides, all that is left is to call your Number using a mobile or landline. "),(0,o.kt)("p",null,"Start your app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},"LOGS_LEVEL=verbose node index.js\n")),(0,o.kt)("p",null,"You will see a series of logs on your terminal."))}d.isMDXComponent=!0}}]);