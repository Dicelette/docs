"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[601],{97081:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var i=n(86070),d=n(25710);const c={title:"Character sheet",sidebar_position:3},a=void 0,l={id:"commands/model",title:"Character sheet",description:"Attention",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/commands/model.mdx",sourceDirName:"commands",slug:"/commands/model",permalink:"/en/docs/commands/model",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/commands/model.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Character sheet",sidebar_position:3},sidebar:"commands",previous:{title:"Administration commands",permalink:"/en/docs/commands/administration"},next:{title:"Roll dice & scenes",permalink:"/en/docs/commands/roll"}},t={},r=[{value:"Dice Rolling",id:"dice-rolling",level:2},{value:"DBRoll (<code>/dbroll</code>)",id:"dbroll-dbroll",level:3},{value:"DBD (<code>/dbd</code>)",id:"dbd-dbd",level:3},{value:"Others",id:"others",level:2},{value:"Display",id:"display",level:3},{value:"Graph (<code>/graph</code>)",id:"graph-graph",level:3}];function o(e){const s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components},{Details:c,Iconify:a}=s;return c||m("Details",!0),a||m("Iconify",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c,{id:"danger",children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)(a,{icon:"solar:danger-bold",height:"26",class:"danger-summary"}),"Attention"]}),(0,i.jsxs)(s.p,{children:["By default, all commands are disabled and must be enabled in the server's configuration panel.\n",(0,i.jsx)(s.img,{src:n(39928).A+"",width:"270",height:"682"}),"\n",(0,i.jsx)(s.img,{src:n(30771).A+"",width:"1068",height:"956"}),"\n",(0,i.jsx)(s.img,{src:n(80010).A+"",width:"687",height:"118"}),"\n",(0,i.jsx)(s.img,{src:n(48325).A+"",width:"717",height:"684"}),"\n",(0,i.jsx)(s.img,{src:n(30812).A+"",width:"616",height:"443"})]})]}),"\n",(0,i.jsx)(s.h2,{id:"dice-rolling",children:"Dice Rolling"}),"\n",(0,i.jsxs)(s.h3,{id:"dbroll-dbroll",children:["DBRoll (",(0,i.jsx)(s.code,{children:"/dbroll"}),")"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"dbroll"})," command is used to roll dice for statistics that have been previously recorded, allowing you to avoid remembering the basic characteristics of a character."]})}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/dbroll [statistic] (*character) (comment) (replacer) (modifiers)"})})})}),"\n",(0,i.jsx)(s.p,{children:"The command requires specifying:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The statistic"}),"\n",(0,i.jsx)(s.li,{children:"The character's name"}),"\n",(0,i.jsx)(s.li,{children:"Any modifiers (such as advantage or disadvantage)"}),"\n",(0,i.jsx)(s.li,{children:"Replacement of the success value (e.g., for a difficult roll), with indication of comparison (e.g., >= 10)"}),"\n",(0,i.jsx)(s.li,{children:"Any comments on your action"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"dbroll_1",src:n(65579).A+"",width:"1284",height:"551"}),"\n",(0,i.jsx)(s.img,{alt:"example",src:n(49151).A+"",width:"1276",height:"71"})]}),"\n",(0,i.jsxs)(s.h3,{id:"dbd-dbd",children:["DBD (",(0,i.jsx)(s.code,{children:"/dbd"}),")"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"dbd"})," command allows rolling a registered die."]})}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/dbd [*dice] (*character) (modifiers) (comment)"})})})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"dbd",src:n(45812).A+"",width:"1262",height:"60"})}),"\n",(0,i.jsx)(s.h2,{id:"others",children:"Others"}),"\n",(0,i.jsx)(s.p,{children:"The following two commands accept :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"(@player)"})," : The player's name"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"(*character)"})," : And/or the character's name"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"display",children:"Display"}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/display (@player) (*character)"})})})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"display"})," command allows you to view the statistics and dice of a character recorded in the database."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"display",src:n(77683).A+"",width:"712",height:"667"})}),"\n",(0,i.jsxs)(s.h3,{id:"graph-graph",children:["Graph (",(0,i.jsx)(s.code,{children:"/graph"}),")"]}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/graph (@joueur) (*personnage) (ligne) (fond) (min) (max)"})})})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"/graph"}),' command is a "gimmick" feature that generates a graph from a character\'s statistics.\nOptionally, you can also specify colors with:']}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"line"}),": For lines (default, ",(0,i.jsx)(s.code,{children:"#0e47b2"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"background"}),": For background (default, ",(0,i.jsx)(s.code,{children:"#0e47b2"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Colors can be in hexadecimal or RGB. For example, ",(0,i.jsx)(s.code,{children:"#FF0000"})," or ",(0,i.jsx)(s.code,{children:"255,0,0"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Finally, you can set a minimum and maximum for the axes with ",(0,i.jsx)(s.code,{children:"min"})," and ",(0,i.jsx)(s.code,{children:"max"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"By default:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The minimum is calculated according to the server template (if existing)."}),"\n",(0,i.jsxs)(s.li,{children:["The maximum is determined in different ways:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If a maximum is defined by the template, it will be used."}),"\n",(0,i.jsx)(s.li,{children:"Otherwise, it will be based on the critical success value."}),"\n",(0,i.jsxs)(s.li,{children:["If neither of the two previous options is available, it will be based on the die value (for example, if ",(0,i.jsx)(s.code,{children:"1d20"}),", the value will be 20)."]}),"\n",(0,i.jsxs)(s.li,{children:["As a last resort, it will be automatically calculated based on the user's statistics.\n",(0,i.jsx)(s.img,{alt:"graph",src:n(3429).A+"",width:"800",height:"800"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3429:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/graph-43616a600fd24d8f70042683aa26693b.jpg"},45812:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/dbd_example-5a8da6e3efd8ad7ac9d06f3f0da1c8cf.png"},65579:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/dbroll_autocomplete-9867027659bb28e6c5f096bfc3b47f0c.png"},77683:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/display_ex-4e1777b5d6490cc9fd3f0dfe647ab46c.png"},49151:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/example-80bf2c1d27659d7324926a63cef21828.png"},39928:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/allow_commands_1-38a675a67c40101f2dad0e02b75c548f.png"},30771:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/allow_commands_2-35d20cee8c9133487b5ba1bc9a299d2e.png"},80010:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/allow_commands_3-25265f2531deb81b82aaf0e39dbc1102.png"},48325:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/allow_commands_4-7366ebe48cfb205bfc68daf5bf327261.png"},30812:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/allow_commands_5-3217b4fb56efe06a6a6a03c57f97f204.png"},25710:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var i=n(30758);const d={},c=i.createContext(d);function a(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);