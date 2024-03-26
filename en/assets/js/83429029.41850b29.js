"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[654],{5835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(3274),o=t(1377);const s={sidebar_position:4},a="Translation",r={id:"introduction/traduction",title:"Translation",description:"The bot is fully available in French and English. Slash commands will be automatically translated into the language of the client being used.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/introduction/traduction.md",sourceDirName:"introduction",slug:"/introduction/traduction",permalink:"/en/docs/introduction/traduction",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/traduction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"introduction",previous:{title:"Introduction",permalink:"/en/docs/introduction/"},next:{title:"Comportement",permalink:"/en/docs/introduction/Usage/"}},c={},l=[{value:"Adding a Language",id:"adding-a-language",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"translation",children:"Translation"}),"\n",(0,i.jsx)(n.p,{children:"The bot is fully available in French and English. Slash commands will be automatically translated into the language of the client being used."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"For example, a user whose client is in French will receive responses in French, while a user whose client is in English will receive responses in English."})}),"\n",(0,i.jsx)(n.p,{children:'However, for "direct" messages (i.e., messages that are not slash commands), the bot cannot determine which language to use. Therefore, it will use the server\'s language, which can only be selected for Community Servers.'}),"\n",(0,i.jsx)(n.h3,{id:"adding-a-language",children:"Adding a Language"}),"\n",(0,i.jsxs)(n.p,{children:["To add a new language, you need to copy and translate the ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/locales/en.json",children:(0,i.jsx)(n.code,{children:"en.json"})})," file."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["The name must follow the format of ",(0,i.jsx)(n.a,{href:"https://github.com/discordjs/discord-api-types/blob/main/rest/common.ts#L300",children:"discord.js locales"}),". For example, ",(0,i.jsx)(n.code,{children:"ChineseCN"})," for Chinese (China) and ",(0,i.jsx)(n.code,{children:"ChineseTW"})," for Chinese (Taiwan)."]})}),"\n",(0,i.jsxs)(n.p,{children:["Next, you need to add the language to the ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/i18next.ts",children:(0,i.jsx)(n.code,{children:"i18next.ts"})})," file as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import NewTranslation from "./locales/newTranslation.json";\n\nexport const resources = {\n\t// ...\n\tdiscordLocale: { // e.g. fr, en-US, etc.\n\t\ttranslation: NewTranslation,\n\t},\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1377:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(9474);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);