"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={},a="Connecting Dialogflow and Fonoster",l={unversionedId:"tutorials/connecting_with_dialogflow",id:"tutorials/connecting_with_dialogflow",title:"Connecting Dialogflow and Fonoster",description:"Rox AI is a connector between Dialogflow and Fonoster.",source:"@site/docs/tutorials/connecting_with_dialogflow.mdx",sourceDirName:"tutorials",slug:"/tutorials/connecting_with_dialogflow",permalink:"/docs/tutorials/connecting_with_dialogflow",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/tutorials/connecting_with_dialogflow.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Using Fonoster with Google speech APIs",permalink:"/docs/tutorials/using_google_speech"},next:{title:"Using the Javascript SDKs",permalink:"/docs/tutorials/using_the_javascript_sdks"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Preparing the environment",id:"preparing-the-environment",level:2},{value:"Running the Connector",id:"running-the-connector",level:2},{value:"Connecting your Voice Application to Fonoster",id:"connecting-your-voice-application-to-fonoster",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-dialogflow-and-fonoster"},"Connecting Dialogflow and Fonoster"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fonoster/rox"},"Rox AI")," is a connector between Dialogflow and Fonoster. "),(0,r.kt)("p",null,"Rox AI is for creating Programmable Voice Applications without having to do any coding."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating a new ",(0,r.kt)("a",{parentName:"li",href:"https://fonoster.com/docs/getting_started/create_a_voice_application"},"Fonoster Voice App")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("strong",{parentName:"li"},"Docker")," ")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This is the final product of this guide:"),(0,r.kt)("iframe",{width:"100%",height:"300px",src:"https://www.youtube.com/embed/41Rx8KPb5GU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"preparing-the-environment"},"Preparing the environment"),(0,r.kt)("p",null,"Rox AI ships as a Docker container, open a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and paste the content of this YAML."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\n\nservices:\n  rox:\n    image: fonoster/rox:latest\n    ports:\n      - 3000:3000\n    environment:\n      LOGS_LEVEL: verbose\n\n  ngrok:\n    image: wernight/ngrok:latest\n    ports:\n      - 4040:4040\n    environment:\n      NGROK_PROTOCOL: http\n      NGROK_PORT: rox:3000\n")),(0,r.kt)("h2",{id:"running-the-connector"},"Running the Connector"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("h3",{id:"connecting-your-voice-application-to-fonoster"},"Connecting your Voice Application to Fonoster"),(0,r.kt)("p",null,"Look for the newly generated ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4040/inspect/http"},"Ngrok's URL"),", and update the Number webhook URL on ",(0,r.kt)("strong",{parentName:"p"},"SIP NETWORK")," of your previously created Fonoster Voice App."))}d.isMDXComponent=!0}}]);