"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[834],{4624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(86070),i=n(25710);const s={title:"Introduction",sidebar_position:1},a=void 0,r={id:"introduction/index",title:"Introduction",description:"Welcome! \ud83c\udfb2 Here's a companion for your Discord adventures: a versatile bot designed to make your role-playing game sessions smoother and more enjoyable.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/introduction/index.mdx",sourceDirName:"introduction",slug:"/introduction/",permalink:"/en/docs/introduction/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"introduction",next:{title:"Comportement",permalink:"/en/docs/introduction/behavior"}},c={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Dice Rolling",id:"dice-rolling",level:3},{value:"Character Sheet Management",id:"character-sheet-management",level:3},{value:"Operational Mechanics",id:"operational-mechanics",level:2},{value:"Dice Rolling",id:"dice-rolling-1",level:3},{value:"Statistics Management",id:"statistics-management",level:3},{value:"Data",id:"data",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Welcome! \ud83c\udfb2 Here's a companion for your Discord adventures: a versatile bot designed to make your role-playing game sessions smoother and more enjoyable."}),"\n",(0,o.jsx)(t.h2,{id:"key-features",children:"Key Features"}),"\n",(0,o.jsx)(t.h3,{id:"dice-rolling",children:"Dice Rolling"}),"\n",(0,o.jsx)(t.p,{children:"With this bot, you can roll dice effortlessly: whether to determine the outcome of a crucial action or to spice up your conversations, the process is streamlined. Simply use the appropriate command and the result will be displayed in a thread rather than cluttering the channel you're in."}),"\n",(0,o.jsx)(t.h3,{id:"character-sheet-management",children:"Character Sheet Management"}),"\n",(0,o.jsx)(t.p,{children:"No more juggling complex character sheets! This bot allows you to set up a statistics template to record the essential information of your characters. Thus, you can roll dice directly using this data, without worrying about memorizing them."}),"\n",(0,o.jsx)(t.h2,{id:"operational-mechanics",children:"Operational Mechanics"}),"\n",(0,o.jsx)(t.h3,{id:"dice-rolling-1",children:"Dice Rolling"}),"\n",(0,o.jsxs)(t.p,{children:["To perform dice rolls, this bot utilizes the ",(0,o.jsx)(t.a,{href:"https://dice-roller.github.io/documentation/",children:"@diceRoller"})," API. It also supports the notation ",(0,o.jsx)(t.code,{children:"4#(dice)"})," for bulk rolls, allowing you to save time during your gaming sessions."]}),"\n",(0,o.jsx)(t.h3,{id:"statistics-management",children:"Statistics Management"}),"\n",(0,o.jsx)(t.p,{children:"Instead of saving the entire character sheet, this bot only records the message and its ID. Thus, you retain full control over your data, as the message content is not saved outside the server."}),"\n",(0,o.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,o.jsxs)(t.p,{children:["This bot uses a database",(0,o.jsx)(t.sup,{children:(0,o.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," to store essential information, such as the message ID, channel ID, statistic name, and user character names. This database will be cleaned in various cases, including when messages or registered channels are deleted, when the bot is kicked from the server, or when using the ",(0,o.jsx)(t.code,{children:"/register"})," or ",(0,o.jsx)(t.code,{children:"/logs"})," features."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Note",type:"note",children:[(0,o.jsx)(t.p,{children:"User data is not deleted when they leave a server. If you wish for your data to be removed, feel free to contact me."}),(0,o.jsxs)(t.p,{children:["Simply provide your Discord ID or server ID (with proof of ownership) via Discord (",(0,o.jsx)(t.code,{children:"@mara__li"}),") or email (",(0,o.jsx)(t.code,{children:"lisandra_dev@yahoo.com"}),")."]})]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["In some rare cases, the bot maybe not be able to delete the data when the message is deleted (it happens when the deleted message is very old). In theses case, you can use the command ",(0,o.jsx)(t.code,{children:"/delete_char"})," to delete the character data or entire data from an user.\nMore over, this command will also delete the message if it still exists (useful if you don't want to search in the character sheet channel)."]})}),"\n",(0,o.jsxs)(t.p,{children:["\ud83d\ude80 ",(0,o.jsx)(t.a,{href:"https://discord.com/api/oauth2/authorize?client_id=1182819335878754385&permissions=395137215504&scope=bot+applications.commands",children:"Invite the bot"})]}),"\n","\n",(0,o.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,o.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,o.jsxs)(t.p,{children:["It's a SQLITE3 database, using ",(0,o.jsx)(t.a,{href:"https://enmap.evie.dev/",children:"Enmap"})," ",(0,o.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(30758);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);