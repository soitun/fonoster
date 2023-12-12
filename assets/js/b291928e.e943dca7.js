"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||r;return n?o.createElement(d,s(s({ref:t},p),{},{components:n})):o.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={slug:"common user interface design elements",title:"The most common user interface design elements",authors:["yuricodes"],tags:["fonoster","voice","OSS","VUI"]},s=void 0,i={permalink:"/blog/common user interface design elements",editUrl:"https://github.com/fonoster/website/edit/main/docs/blog/blog/2023-02-23-common_elements_designing_VUI.md",source:"@site/blog/2023-02-23-common_elements_designing_VUI.md",title:"The most common user interface design elements",description:"There are multiple conversation design elements that we keep witnessing pop up in each assistant interaction that are based on conversational interface design principles.",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"fonoster",permalink:"/blog/tags/fonoster"},{label:"voice",permalink:"/blog/tags/voice"},{label:"OSS",permalink:"/blog/tags/oss"},{label:"VUI",permalink:"/blog/tags/vui"}],readingTime:3.45,hasTruncateMarker:!1,authors:[{name:"Yuri Santana",title:"Developer Relations Advocate at Fonoster",url:"https://github.com/yuricodes",imageURL:"https://github.com/yuricodes.png",key:"yuricodes"}],frontMatter:{slug:"common user interface design elements",title:"The most common user interface design elements",authors:["yuricodes"],tags:["fonoster","voice","OSS","VUI"]},prevItem:{title:"Differences in types of Conversational Interfaces",permalink:"/blog/Differences in types of Conversational Interfaces"},nextItem:{title:"Advantages of Voice User Interface Applications",permalink:"/blog/Advantages of VUI applications"}},l={authorsImageUrls:[void 0]},u=[{value:"Join the conversation",id:"join-the-conversation",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are multiple conversation design elements that we keep witnessing pop up in each assistant interaction that are based on conversational interface design principles. "),(0,a.kt)("p",null,"These elements are those present in human interactions and help the user in the task they want to fulfill, reducing frustration and increasing user satisfaction levels. Some of the most common ones are: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Welcome message, greeting and farewell"))),(0,a.kt)("p",null,"The assistant should introduce itself and state its function so the user knows what to expect from the interaction. "),(0,a.kt)("p",null,'Example: "Hello! I\'m Alex and I can help you set up an appointment."'),(0,a.kt)("p",null,"The farewell message should inform the user of the status of the request and end the interaction."),(0,a.kt)("p",null,'Example: "Your appointment has been set for X. Thank you for scheduling. Goodbye."'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Questions and feedback")," ")),(0,a.kt)("p",null,"Questions redirect the user and help clarify the intent this one has when interacting with our interface. They help us collect useful information and keep the user engaged in the conversation. "),(0,a.kt)("p",null,'Example: "Would you rather make an appointment for today or tomorrow?" '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Feedback and confirmation messages"))),(0,a.kt)("p",null,"It should be a must in every interaction with the assistant. It lets the user know the assistant is working on their request, if it was confused or if it needs clarifying details. More importantly, it lets the user know the assistant understands their intent and they're working together to address their request. "),(0,a.kt)("p",null,'Example: "Okay, I\'ll schedule it for tomorrow morning." '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Informational interactions and suggestions")," ")),(0,a.kt)("p",null,"Informational interactions are those that present information in a way to answer questions. They provide a general overview of options and it's often followed by a question prompting the user to pick one of the choices presented in the message. "),(0,a.kt)("p",null,'Example: "We have the following ',"[list of hours]",' available for tomorrow. Would you like to know more about the slots?" '),(0,a.kt)("p",null,"Suggestions help the user pick an option that is understandable by our assistant. It can also guide the user to the best option available providing new information."),(0,a.kt)("p",null,'Example: "If you pick the 2pm slot it comes with a 50% discount for future appointments. Would you be interested in that?"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apology statements and useful commands")," ")),(0,a.kt)("p",null,"Ideally, apology statements won't be necessary, but when mistakes happen or the users intent is not clear to the assistant, they should quickly apologize and redirect the user to another option available. "),(0,a.kt)("p",null,'Example: "Unfortunately, we don\'t have 4pm slots available. Would you like to have a 5pm slot? "'),(0,a.kt)("p",null,"When the issue keeps on happening, the apology statements should include understanding of the users problem, accepting responsability, explaining the issue, solving it and expressing gratitude for the user's understanding.  "),(0,a.kt)("p",null,'Example: "I understand how ',"[customer\u2019s feelings \u2013 i.e frustrating, upsetting]"," this problem has been for you. I\u2019m sorry that you\u2019ve had to deal with ","[the issue]",". The issue happened because we ","[what caused the issue]",". To prevent it from happening again ","[what we will do]",'.\nThank you for bearing with us through this incident. If there\u2019s anything else I can help you with, please let me know. "'),(0,a.kt)("p",null,"Useful commands should be available at all stages of the conversation. It directs the users to what the assistant understands and how they can get there. "),(0,a.kt)("p",null,'Example: "Would you like to continue? Yes - No "'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Buttons and interactive elements"))),(0,a.kt)("p",null,"Buttons are visual elements that help the user to quickly pick between different options presented to them. They can be accompanied by images or extra text to aid the decision making. "),(0,a.kt)("p",null,'Example: "It has been scheduled. What would you like to do next? '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Button 1: Check out directions "),(0,a.kt)("li",{parentName:"ul"},'Button 2: Check out parking "')),(0,a.kt)("p",null,"Multiple interactive elements help construct a multi-modal assistant. They utilize audio, emojis, images, videos and more to help the user make a decision and help showcase the assistants' personality. "),(0,a.kt)("p",null,'Example: "It has been scheduled ',"[confirmation sound]",'. What would you like to do next? "'),(0,a.kt)("p",null,"To know more about ",(0,a.kt)("em",{parentName:"p"},"conversational structure")," check out our ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/ChqlotD4aDk"},"video")," about it on YouTube. "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"join-the-conversation"},"Join the conversation"),(0,a.kt)("p",null,"Fonoster is developed in the open. Here are some of the channels you can use to reach us: "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/4QWgSz4hTC"},"Discord")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GitHub discussions:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster/discussions/categories/q-a"},"Q&A")," ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Twitter:")," ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/fonoster"},"@fonoster")))}h.isMDXComponent=!0}}]);