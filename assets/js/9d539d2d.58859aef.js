"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[981],{7286:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var t=n(3274),s=n(5618);const c={title:"Enregistrement",sidebar_position:1},d=void 0,l={id:"model/register/index",title:"Enregistrement",description:"Model Registration",source:"@site/docs/model/register/index.md",sourceDirName:"model/register",slug:"/model/register/",permalink:"/docs/model/register/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/register/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Enregistrement",sidebar_position:1},sidebar:"model",next:{title:"R\xe9f\xe9rence de mod\xe8le de serveur",permalink:"/docs/model/register/template"}},o={},r=[{value:"Model Registration",id:"model-registration",level:2},{value:"Dice",id:"dice",level:2},{value:"Statistics",id:"statistics",level:2},{value:"Next Step",id:"next-step",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:c}=i;return c||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"model-registration",children:"Model Registration"}),"\n",(0,t.jsxs)(i.p,{children:["To begin, you need to ",(0,t.jsx)(i.strong,{children:"generate"})," a new model. Use ",(0,t.jsx)(i.code,{children:"/register"})," followed by the model's name. You can also create an empty model using ",(0,t.jsx)(i.code,{children:"/generate"})," or by using the form available ",(0,t.jsx)(i.a,{href:"/docs/model/register/form",children:"right here"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["This command allows you to create a ",(0,t.jsx)(i.code,{children:"JSON"})," file with the following (optional) parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"name"}),": The names of the statistics, separated by commas. If a name contains a space, surround it with quotes."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"dice"}),": The type of dice to roll, which can include a formula."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"total"}),": The total number of points players can allocate."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"character"}),": Make it mandatory to enter a character name."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"critical_success"}),": The value considered as a critical success."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"critical_failure"}),": The value considered as a critical failure."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"skill"}),": Add fields for skill or attack dice."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Check out model examples in the ",(0,t.jsx)(i.code,{children:"template"})," files ",(0,t.jsx)(i.a,{href:"https://github.com/Dicelette/discord-dicelette/tree/main/template",children:"here"})," or ",(0,t.jsx)(i.a,{href:"register/template",children:"here"}),"."]}),"\n",(0,t.jsxs)(i.admonition,{title:"Note",type:"info",children:[(0,t.jsx)(i.p,{children:"Statistics and dice are optional:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Without statistics, you won't be able to use the ",(0,t.jsx)(i.code,{children:"/dbroll"})," command."]}),"\n",(0,t.jsxs)(i.li,{children:["Without dice, you won't be able to use ",(0,t.jsx)(i.code,{children:"/dbd"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(i.h2,{id:"dice",children:"Dice"}),"\n",(0,t.jsx)(i.p,{children:"There are two types of dice:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The die used with ",(0,t.jsx)(i.code,{children:"dbroll"})," (the ",(0,t.jsx)(i.strong,{children:"die type"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["The dice saved for ",(0,t.jsx)(i.code,{children:"dbd"})," (the ",(0,t.jsx)(i.strong,{children:"saved dice"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Both types of dice follow the syntax of ",(0,t.jsx)(i.a,{href:"https://dice-roller.github.io/documentation/",children:"dice-roller"}),". You can use complex mathematical formulas with ",(0,t.jsx)(i.code,{children:"{{"})," and ",(0,t.jsx)(i.code,{children:"}}"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"To target a statistic, it's different depending on the type of die:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For a die type, use ",(0,t.jsx)(i.code,{children:"$"}),". This symbol will be replaced by the value of the statistic used by ",(0,t.jsx)(i.code,{children:"/dbroll"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"For saved dice, simply use the names of the statistics."}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{title:"Example",type:"tip",children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For a die type: ",(0,t.jsx)(i.code,{children:"1d6>$"})," or ",(0,t.jsx)(i.code,{children:"1d6+$"})]}),"\n",(0,t.jsxs)(i.li,{children:["For saved dice: ",(0,t.jsx)(i.code,{children:"1d6 > Force"})," or ",(0,t.jsx)(i.code,{children:"1d6 + Force"})]}),"\n"]}),(0,t.jsx)(i.p,{children:"For a die based on a formula:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For a die type: ",(0,t.jsx)(i.code,{children:"1d6 + {{ceil($ / 2)}}"})]}),"\n",(0,t.jsxs)(i.li,{children:["For saved dice: ",(0,t.jsx)(i.code,{children:"1d6 + {{ceil(Force / 2)}}"})]}),"\n"]}),(0,t.jsx)(i.p,{children:"You can also compare with a formula:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For a die type: ",(0,t.jsx)(i.code,{children:"1d6 > {{ceil($ / 2)}}"})]}),"\n",(0,t.jsxs)(i.li,{children:["For saved dice: ",(0,t.jsx)(i.code,{children:"1d6 > {{ceil(Force / 2)}}"})]}),"\n"]})]}),"\n",(0,t.jsx)(i.h2,{id:"statistics",children:"Statistics"}),"\n",(0,t.jsxs)(i.p,{children:["Each statistic has a name, a minimum value (",(0,t.jsx)(i.code,{children:"min"}),"), a maximum value (",(0,t.jsx)(i.code,{children:"max"}),"), and a combination option (",(0,t.jsx)(i.code,{children:"combination"}),")."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"min"})," and ",(0,t.jsx)(i.code,{children:"max"})," correspond to the minimum and/or maximum value that this statistic can have when recorded."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"combination"})," corresponds to a combination of several other statistics. The use of this field cannot coexist with ",(0,t.jsx)(i.code,{children:"min"})," and ",(0,t.jsx)(i.code,{children:"max"}),", and combined statistics will not be counted towards the total points allocated in the ",(0,t.jsx)(i.code,{children:"total"})," field."]}),"\n"]}),"\n",(0,t.jsxs)(c,{children:[(0,t.jsx)("summary",{children:"Empty Model"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n"charName": false,\n"statistics": {\n  "NAME": {\n    "min": 1,\n    "max": 20,\n    "combination": ""\n  },\n  "COMBINATION": {\n    "combination": "NAME*2"\n  },\n},\n"diceType": "",\n"critical": {\n  "failure": 0,\n  "success": 0\n},\n"total": 0,\n"damage": {\n  "NAME": ""\n}\n}\n'})})]}),"\n",(0,t.jsx)(i.h2,{id:"next-step",children:"Next Step"}),"\n",(0,t.jsxs)(i.p,{children:["Once the model is ready, use ",(0,t.jsx)(i.code,{children:"/register <channel> <file>"}),". Choose:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The channel for the character sheet creation button."}),"\n",(0,t.jsx)(i.li,{children:"The edited file."}),"\n",(0,t.jsxs)(i.li,{children:["(Optional) The channel where the sheets will be posted. If omitted, the sheets will be posted in a thread named ",(0,t.jsx)(i.code,{children:"\ud83d\udcdd \u2022 [STATS]"})," (created from the channel where the character sheet creation button is located)."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The embed will be pinned for easy access."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"embed",src:n(7273).A+"",width:"862",height:"799"})}),"\n",(0,t.jsx)(i.admonition,{title:"Attention",type:"warning",children:(0,t.jsx)(i.p,{children:"You cannot modify the publication channel of the sheets without losing the old sheets because the channel is globally saved, not specifically for each sheet."})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},7273:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/embed_template-f8f9d6f87ec03772b2e6e6cfc0ca2798.png"},5618:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var t=n(9474);const s={},c=t.createContext(s);function d(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);