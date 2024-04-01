"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[19],{201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=n(3274),i=n(5618);const c={title:"Sending message"},o=void 0,d={id:"introduction/Usage/message",title:"Sending message",description:"The bot will detect dice notation and send the result.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/introduction/Usage/message.md",sourceDirName:"introduction/Usage",slug:"/introduction/Usage/message",permalink:"/en/docs/introduction/Usage/message",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/Usage/message.md",tags:[],version:"current",frontMatter:{title:"Sending message"},sidebar:"introduction",previous:{title:"Comportement",permalink:"/en/docs/introduction/Usage/"},next:{title:"Slashcommands",permalink:"/en/docs/introduction/Usage/slashcommands"}},a={},l=[];function r(e){const t={code:"code",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The bot will detect dice notation and send the result."}),"\n",(0,s.jsx)(t.p,{children:"Dice notation can be done in two ways:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Directly, such as ",(0,s.jsx)(t.code,{children:"1d20"}),': In this case, the "command" message will be deleted, and the result will be sent in the same channel (and logged).\n',(0,s.jsx)(t.img,{alt:"Direct",src:n(1424).A+"",width:"692",height:"482"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Indirectly, within brackets, like this: ",(0,s.jsx)(t.code,{children:"my message content [1d20]"}),". In this case, the message will be kept, and the content within the brackets will be rolled. You'll receive a response with the result, and the log will be sent to the thread. Logs will contain a link to the original message.\n",(0,s.jsx)(t.img,{alt:"Indirect",src:n(1617).A+"",width:"793",height:"482"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Semi-directly, like ",(0,s.jsx)(t.code,{children:"1d20 My message"}),": Will behave the same as the direct method. The initially found die will be rolled, and the rest of the message will be sent to the log and considered a comment.\n",(0,s.jsx)(t.img,{alt:"Semi-Direct",src:n(9797).A+"",width:"793",height:"482"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1424:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/direct-3eb581e8e55c0834aa041fa246ae4781.gif"},1617:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/indirect-c41dc46b2ecf70871d2730ec0b289479.gif"},9797:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/semi-direct-fd2c76b9a7b48513b89e08ed17117973.gif"},5618:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(9474);const i={},c=s.createContext(i);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);