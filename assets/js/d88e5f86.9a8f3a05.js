"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=c(n),m=a,g=i["".concat(s,".").concat(m)]||i[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[i]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,p={unversionedId:"reference/Storage",id:"reference/Storage",title:"Storage",description:"Storage \u21d0 APIClient",source:"@site/docs/reference/Storage.md",sourceDirName:"reference",slug:"/reference/Storage",permalink:"/docs/reference/Storage",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/reference/Storage.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Storage \u21d0 <code>APIClient</code>",id:"storage--apiclient",level:2},{value:"new Storage(options)",id:"new-storageoptions",level:3},{value:"storage.uploadObject(request) \u21d2 <code>Promise.&lt;UploadObjectResponse&gt;</code>",id:"storageuploadobjectrequest--promiseuploadobjectresponse",level:3},{value:"storage.getObjectURL(request) \u21d2 <code>Promise.&lt;getObjectURLResponse&gt;</code>",id:"storagegetobjecturlrequest--promisegetobjecturlresponse",level:3}],u={toc:c},i="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"Storage"}),(0,a.kt)("h2",{id:"storage--apiclient"},"Storage \u21d0 ",(0,a.kt)("code",null,"APIClient")),(0,a.kt)("p",null,"Use Fonoster Storage, a capability of Fonoster Object Storage subsystem,\nto upload, download, and delete objects."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("code",null,"APIClient"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"See"),": module:core:APIClient  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Storage"},"Storage")," \u21d0 ",(0,a.kt)("code",null,"APIClient"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_Storage_new"},"new Storage(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Storage+uploadObject"},".uploadObject(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","UploadObjectResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Storage+getObjectURL"},".getObjectURL(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","getObjectURLResponse",">"))))),(0,a.kt)("a",{name:"new_Storage_new"}),(0,a.kt)("h3",{id:"new-storageoptions"},"new Storage(options)"),(0,a.kt)("p",null,"Constructs a new Storage object."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ClientOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"Options to indicate the objects endpoint")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk")\nconst storage = new Fonoster.Storage()\n\nstorage.uploadObject()\n.then(result => {\n   console.log(result)            // successful response\n}).catch(e => console.error(e))   // an error occurred\n')),(0,a.kt)("a",{name:"Storage+uploadObject"}),(0,a.kt)("h3",{id:"storageuploadobjectrequest--promiseuploadobjectresponse"},"storage.uploadObject(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","UploadObjectResponse",">")),(0,a.kt)("p",null,"Upload an object toFonosterObject Storage subsystem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Storage"},(0,a.kt)("code",null,"Storage")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","UploadObjectResponse",">")," - localy accessible URL to the object",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if the path does not exist or if is a directory"),(0,a.kt)("li",{parentName:"ul"},"if the directory does not exist")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"UploadObjectRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Object with information about the origin and destination of an object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.bucket"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Bucket at the Storage system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.dir"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Directory on the Storage system where your objec will be uploaded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.filename"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Path to the object to be uploaded")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n   filename: "/path/to/file",\n   bucket: "apps",\n   directory: "/"\n}\n\nstorage.uploadObject(request)\n.then(() => {\n  console.log(result)            // returns and empty Object\n}).catch(e => console.error(e))  // an error occurred\n')),(0,a.kt)("a",{name:"Storage+getObjectURL"}),(0,a.kt)("h3",{id:"storagegetobjecturlrequest--promisegetobjecturlresponse"},"storage.getObjectURL(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","getObjectURLResponse",">")),(0,a.kt)("p",null,"Get Object URL."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Storage"},(0,a.kt)("code",null,"Storage")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","getObjectURLResponse",">")," - localy accessible URL to the object",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if directory or object doesn't exist")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"GetObjectURLRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Object with information about the location and and name of the requested object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.filename"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the object save your file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.accessKeyId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional access key id")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n   filename: "object-name",\n   bucket: "bucket-name"\n}\n\nstorage.getObjectURL(request)\n.then(result => {\n  console.log(result)\n}).catch(e => console.error(e))  // an error occurred\n')))}d.isMDXComponent=!0}}]);