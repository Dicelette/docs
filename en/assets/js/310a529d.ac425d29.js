"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[612],{5253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(3274),s=t(1377);const r={sidebar_position:2,title:"Reference's server model"},o=void 0,c={id:"model/register/template",title:"Reference's server model",description:"DND-like",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/model/register/template.md",sourceDirName:"model/register",slug:"/model/register/template",permalink:"/en/docs/model/register/template",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/register/template.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Reference's server model"},sidebar:"model",previous:{title:"Registering",permalink:"/en/docs/model/register/"},next:{title:"Limitation",permalink:"/en/docs/model/register/limitation"}},l={},d=[{value:"DND-like",id:"dnd-like",level:2},{value:"System simple",id:"system-simple",level:2}];function a(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"dnd-like",children:"DND-like"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "charName": false,\n  "statistics": {\n    "Strength": {\n      "min": 1\n    },\n    "Dexterity": {\n      "min": 1\n    },\n    "Constitution": {\n      "min": 1\n    },\n    "Knowledge": {\n      "min": 1\n    },\n    "Wisdom": {\n      "min": 1\n    },\n    "Charisma": {\n      "min": 1\n    }\n  },\n  "diceType": "1d20+{{ceil(($-10)/2)}}>20",\n  "critical": {\n    "failure": 1,\n    "success": 20\n  },\n  "total": 27\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"system-simple",children:"System simple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "charName": true,\n  "statistics": {\n    "Strength": {\n      "min": 3\n    },\n    "Stamina": {\n      "min": 3\n    },\n    "Agility": {\n      "min": 3\n    },\n    "Constitution": {\n      "min": 3\n    },\n    "Education": {\n      "min": 3\n    },\n    "Knowledge": {\n      "min": 3\n    },\n    "Charisma": {\n      "min": 3\n    },\n    "Power": {\n      "min": 3\n    },\n    "PV": {\n      "combinaison": "endurance*2+force"\n    }\n  },\n  "diceType": "1d20+$>20",\n  "critical": {\n    "failure": 1,\n    "success": 20\n  },\n  "total": 88\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1377:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(9474);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);