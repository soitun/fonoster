"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||s;return r?n.createElement(k,l(l({ref:t},i),{},{components:r})):n.createElement(k,l({ref:t},i))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={},l=void 0,o={unversionedId:"reference/Users",id:"reference/Users",title:"Users",description:"Users \u21d0 APIClient",source:"@site/docs/reference/Users.md",sourceDirName:"reference",slug:"/reference/Users",permalink:"/docs/reference/Users",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/reference/Users.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"VoiceResponse",permalink:"/docs/reference/VoiceResponse"},next:{title:"Projects",permalink:"/docs/reference/Projects"}},p={},u=[{value:"Users \u21d0 <code>APIClient</code>",id:"users--apiclient",level:2},{value:"new Users(options)",id:"new-usersoptions",level:3},{value:"users.listUsers(request) \u21d2 <code>Promise.&lt;ListUsersResponse&gt;</code>",id:"userslistusersrequest--promiselistusersresponse",level:3},{value:"users.createUser(request) \u21d2 <code>Promise.&lt;CreateUserResponse&gt;</code>",id:"userscreateuserrequest--promisecreateuserresponse",level:3},{value:"users.getUser(ref) \u21d2 <code>Promise.&lt;GetUserResponse&gt;</code>",id:"usersgetuserref--promisegetuserresponse",level:3},{value:"users.updateUser(request) \u21d2 <code>Promise.&lt;UpdateUserResponse&gt;</code>",id:"usersupdateuserrequest--promiseupdateuserresponse",level:3},{value:"users.deleteUser(ref)",id:"usersdeleteuserref",level:3},{value:"users.createUserCredentials(request)",id:"userscreateusercredentialsrequest",level:3}],i={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"Users"}),(0,a.kt)("h2",{id:"users--apiclient"},"Users \u21d0 ",(0,a.kt)("code",null,"APIClient")),(0,a.kt)("p",null,"Use Fonoster Users, a capability of Fonoster,\nto create, update, get and delete Users. Users requires of a\nrunning Fonoster deployment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("code",null,"APIClient"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"See"),": module:core:APIClient  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users"},"Users")," \u21d0 ",(0,a.kt)("code",null,"APIClient"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_Users_new"},"new Users(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users+listUsers"},".listUsers(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","ListUsersResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users+createUser"},".createUser(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","CreateUserResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users+getUser"},".getUser(ref)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","GetUserResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users+updateUser"},".updateUser(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","UpdateUserResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users+deleteUser"},".deleteUser(ref)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Users+createUserCredentials"},".createUserCredentials(request)"))))),(0,a.kt)("a",{name:"new_Users_new"}),(0,a.kt)("h3",{id:"new-usersoptions"},"new Users(options)"),(0,a.kt)("p",null,"Constructs a new Users object."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ClientOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"Options to indicate the objects endpoint")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk")\nconst users = new Fonoster.Users()\n\nconst request = {\n  email: "john.doe@email.com",\n  name: "John Doe",\n  secret: "s3cur3pass",\n  avatar: "https://avatar.com/avt?userId=2124252"\n}\n\nusers.createUser(request)\n.then(result => {\n  console.log(result)             // successful response\n}).catch(e => console.error(e))   // an error occurred\n')),(0,a.kt)("a",{name:"Users+listUsers"}),(0,a.kt)("h3",{id:"userslistusersrequest--promiselistusersresponse"},"users.listUsers(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","ListUsersResponse",">")),(0,a.kt)("p",null,"Return a list of Users."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Users"},(0,a.kt)("code",null,"Users")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ListUsersRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request filters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.email"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional email filter")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'projects.listUsers({ email: "john.doe@email.com" })\n.then(result => {\n  console.log(result)             // successful response\n}).catch(e => console.error(e))   // an error occurred\n')),(0,a.kt)("a",{name:"Users+createUser"}),(0,a.kt)("h3",{id:"userscreateuserrequest--promisecreateuserresponse"},"users.createUser(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","CreateUserResponse",">")),(0,a.kt)("p",null,"Create a new Fonoster User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Users"},(0,a.kt)("code",null,"Users")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"CreateUserRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request for the provision of a new User")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.email"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"User's email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"User's full name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.secret"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Login password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.avatar"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional URL to User's avatar")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n  email: "john.doe@email.com",\n  name: "John Doe",\n  secret: "s3cur3pass",\n  avatar: "https://avatar.com/avt?userId=2124252"\n}\n\nusers.createUser(request)\n.then(result => {\n  console.log(result)             // successful response\n}).catch(e => console.error(e))   // an error occurred\n')),(0,a.kt)("a",{name:"Users+getUser"}),(0,a.kt)("h3",{id:"usersgetuserref--promisegetuserresponse"},"users.getUser(ref) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","GetUserResponse",">")),(0,a.kt)("p",null,"Retrives an User by reference."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Users"},(0,a.kt)("code",null,"Users")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","GetUserResponse",">")," - The User",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if ref is null or User does not exist")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ref"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to User")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const ref = "507f1f77bcf86cd799439011";\n\nusers.getUser(ref)\n.then(result => {\n  console.log(result)             // returns the User payload\n}).catch(e => console.error(e))   // an error occurred\n')),(0,a.kt)("a",{name:"Users+updateUser"}),(0,a.kt)("h3",{id:"usersupdateuserrequest--promiseupdateuserresponse"},"users.updateUser(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","UpdateUserResponse",">")),(0,a.kt)("p",null,"Update a Fonoster User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Users"},(0,a.kt)("code",null,"Users")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"UpdateUserRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request update of an User")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.ref"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Required reference to the User")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optionally update the name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.avatar"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optionally update the avatar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.secret"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optionally update User's password")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n  name: "John Dee",\n  secret: "s3cur3pass"\n}\n\nusers.updateUser(request)\n.then(result => {\n  console.log(result)            // returns the UpdateUserResponse payload\n}).catch(e => console.error(e))  // an error occurred\n')),(0,a.kt)("a",{name:"Users+deleteUser"}),(0,a.kt)("h3",{id:"usersdeleteuserref"},"users.deleteUser(ref)"),(0,a.kt)("p",null,"Delete an Fonoster User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Users"},(0,a.kt)("code",null,"Users")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ref"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"User's reference")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const ref = "507f1f77bcf86cd799439011"\n\nusers.deleteUser(ref)\n.then(() => {\n  console.log("done")            // returns a reference of the User\n}).catch(e => console.error(e))  // an error occurred\n')),(0,a.kt)("a",{name:"Users+createUserCredentials"}),(0,a.kt)("h3",{id:"userscreateusercredentialsrequest"},"users.createUserCredentials(request)"),(0,a.kt)("p",null,"Login using email and a password."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Users"},(0,a.kt)("code",null,"Users")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"createUserCredentials")),(0,a.kt)("td",{parentName:"tr",align:null},"Request update of an User")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.email"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Login username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.secret"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Login password")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n email: "john.doe@email.com",\n secret: "s3cur3pass",\n expiration: "30d"\n}\n\nusers.createUserCredentials(request)\n.then(result => {\n  console.log(result)            // returns an accessKeyId and accessKeySecret\n}).catch(e => console.error(e))  // an error occurred\n')))}d.isMDXComponent=!0}}]);