"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[834],{3330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(3274),i=n(5618);const s={title:"Introduction",sidebar_position:1},r=void 0,c={id:"introduction/index",title:"Introduction",description:"Invite the bot",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/introduction/index.mdx",sourceDirName:"introduction",slug:"/introduction/",permalink:"/en/docs/introduction/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"introduction",next:{title:"Translation",permalink:"/en/docs/introduction/traduction"}},d={},a=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Iconify:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Iconify",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(n,{icon:"lucide:arrow-right"})," ",(0,o.jsx)(t.a,{href:"https://discord.com/api/oauth2/authorize?client_id=1182819335878754385&permissions=395137215504&scope=bot+applications.commands",children:"Invite the bot"})]}),"\n",(0,o.jsx)(t.p,{children:"This bot allows rolling dice and sending the result in a thread. Additionally, it offers the ability to save a statistic template to perform rolls directly, thus avoiding repeating the same actions every time."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(n,{icon:"lucide:arrow-right"})," It uses the ",(0,o.jsx)(t.a,{href:"https://dice-roller.github.io/documentation/",children:"@diceRoller API"})," to perform dice rolls. It also supports the rollem notation ",(0,o.jsx)(t.code,{children:"4#(dice)"}),' for "bulk rolls".']}),"\n",(0,o.jsx)(t.p,{children:"For statistics, instead of saving the entire sheet, the bot saves the message and its identifier. Thus, you retain full control over your data, as the bot does not have knowledge of the message content."}),"\n",(0,o.jsx)(t.p,{children:"The bot uses a database to store the message ID, channel ID, statistic name, and user character names. This database is a simple JSON file and will be cleaned in the following cases:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Deletion of the reference statistic message."}),"\n",(0,o.jsx)(t.li,{children:"Deletion of the registered channel for the template (user reference IDs are not affected)."}),"\n",(0,o.jsx)(t.li,{children:"Deletion of the message saved for the template."}),"\n",(0,o.jsx)(t.li,{children:"Deletion of the thread containing user data."}),"\n",(0,o.jsx)(t.li,{children:"Bot expulsion from the server."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The database is only used if you configure a server template with ",(0,o.jsx)(t.code,{children:"/register"})," or error logs with ",(0,o.jsx)(t.code,{children:"/logs"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsx)(t.p,{children:"If necessary, you can contact me to request the deletion of your data. Just provide me with your Discord ID (the long number) or your server ID. To contact me privately:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Discord: ",(0,o.jsx)(t.code,{children:"@mara__li"})]}),"\n",(0,o.jsxs)(t.li,{children:["Email: ",(0,o.jsx)(t.code,{children:"lisandra_dev@yahoo.com"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5618:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(9474);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);