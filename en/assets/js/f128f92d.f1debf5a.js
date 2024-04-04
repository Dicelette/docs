"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[363],{4955:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var i=s(3274),d=s(5618);const l={title:"Commandes",sidebar_position:4},r=void 0,t={id:"model/commands",title:"Commandes",description:"Attention",source:"@site/docs/model/commands.mdx",sourceDirName:"model",slug:"/model/commands",permalink:"/en/docs/model/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/commands.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Commandes",sidebar_position:4},sidebar:"model",previous:{title:"Editing an user refsheet",permalink:"/en/docs/model/edit"},next:{title:"Advice",permalink:"/en/docs/model/conseil"}},o={},a=[{value:"Lancer de d\xe9s",id:"lancer-de-d\xe9s",level:2},{value:"DBRoll (<code>/dbroll</code>)",id:"dbroll-dbroll",level:3},{value:"DBD (<code>/dbd</code>)",id:"dbd-dbd",level:3},{value:"Logs",id:"logs",level:2},{value:"Afficher",id:"afficher",level:2},{value:"Graphique (<code>/graph</code>)",id:"graphique-graph",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components},{Details:l,Iconify:r}=n;return l||m("Details",!0),r||m("Iconify",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l,{id:"danger",children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)(r,{icon:"solar:danger-bold",height:"26",class:"danger-summary"}),"Attention"]}),(0,i.jsxs)(n.p,{children:["Par d\xe9faut, toutes les commandes sont d\xe9sactiv\xe9es et doivent \xeatre activ\xe9es dans le panneau de configuration du serveur.\n",(0,i.jsx)(n.img,{src:s(3745).A+"",width:"270",height:"682"}),(0,i.jsx)(n.img,{src:s(4901).A+"",width:"1068",height:"956"}),"\n",(0,i.jsx)(n.img,{src:s(1036).A+"",width:"687",height:"118"}),(0,i.jsx)(n.img,{src:s(995).A+"",width:"717",height:"684"}),"\n",(0,i.jsx)(n.img,{src:s(234).A+"",width:"616",height:"443"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"lancer-de-d\xe9s",children:"Lancer de d\xe9s"}),"\n",(0,i.jsxs)(n.p,{children:["Les deux commandes b\xe9n\xe9ficieront d'une fonction d'auto-compl\xe9tion pour les statistiques (ou le nom du d\xe9 pour la commande ",(0,i.jsx)(n.code,{children:"dbd"}),") ainsi que pour le nom du personnage."]}),"\n",(0,i.jsxs)(n.h3,{id:"dbroll-dbroll",children:["DBRoll (",(0,i.jsx)(n.code,{children:"/dbroll"}),")"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"dbroll"})," sert \xe0 lancer des d\xe9s sur des statistiques qui ont \xe9t\xe9 enregistr\xe9es pr\xe9c\xe9demment, permettant d'\xe9viter de retenir les caract\xe9ristiques de base d'un personnage."]})}),"\n",(0,i.jsx)(n.p,{children:"La commande demande :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La statistique (obligatoire, avec auto-compl\xe9tion)"}),"\n",(0,i.jsx)(n.li,{children:"Le nom du personnage (avec auto-compl\xe9tion)"}),"\n",(0,i.jsx)(n.li,{children:"Le modificateur \xe0 ajouter au jet (tel que l'avantage, le d\xe9savantage, etc.)"}),"\n",(0,i.jsxs)(n.li,{children:["Le remplacement de la valeur de r\xe9ussite (par exemple, pour un jet difficile) : N'oubliez pas de sp\xe9cifier comment la valeur est compar\xe9e ! (exemple : ",(0,i.jsx)(n.code,{children:">= 10"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Tout commentaire sur votre action"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"dbroll_1",src:s(5993).A+"",width:"1284",height:"551"}),"\n",(0,i.jsx)(n.img,{alt:"example",src:s(9737).A+"",width:"1276",height:"71"})]}),"\n",(0,i.jsxs)(n.h3,{id:"dbd-dbd",children:["DBD (",(0,i.jsx)(n.code,{children:"/dbd"}),")"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"dbd"})," permet de lancer un d\xe9 enregistr\xe9."]})}),"\n",(0,i.jsx)(n.p,{children:"Elle requiert :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le nom de la comp\xe9tence / d\xe9 (obligatoire, avec auto-compl\xe9tion)"}),"\n",(0,i.jsx)(n.li,{children:"Le nom du personnage (avec auto-compl\xe9tion)"}),"\n",(0,i.jsx)(n.li,{children:"Le modificateur \xe0 ajouter au jet (tel que l'avantage, le d\xe9savantage, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Tout commentaire sur votre action."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"dbd",src:s(6198).A+"",width:"1262",height:"60"})}),"\n",(0,i.jsx)(n.h2,{id:"logs",children:"Logs"}),"\n",(0,i.jsx)(n.p,{children:'La commande "logs" permet de choisir un canal dans lequel :'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rapporter toute erreur."}),"\n",(0,i.jsx)(n.li,{children:"Enregistrer toute modification apport\xe9e \xe0 un personnage."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"afficher",children:"Afficher"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"afficher"})," permet de consulter les statistiques et les d\xe9s d'un personnage enregistr\xe9 dans la base de donn\xe9es. Elle vous demandera :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le joueur (accepte un utilisateur par mention)"}),"\n",(0,i.jsx)(n.li,{children:"Et/ou le nom du personnage (avec auto-compl\xe9tion)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Combiner les deux permet de s\xe9lectionner le personnage d'un joueur sp\xe9cifique (ce qui peut \xeatre utile en cas de doublons de noms de personnages, bien que cela soit peu probable)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"afficher",src:s(1537).A+"",width:"712",height:"667"})}),"\n",(0,i.jsxs)(n.h2,{id:"graphique-graph",children:["Graphique (",(0,i.jsx)(n.code,{children:"/graph"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"/graph"}),' est une fonctionnalit\xe9 "gimmick" qui permet de g\xe9n\xe9rer un graphique \xe0 partir des statistiques d\'un personnage. Elle requiert :']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le joueur (accepte une mention utilisateur)"}),"\n",(0,i.jsx)(n.li,{children:"Et/ou le nom du personnage (avec auto-compl\xe9tion)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Comme pr\xe9c\xe9demment, vous pouvez combiner les deux options pour s\xe9lectionner un personnage sp\xe9cifique d'un joueur."}),"\n",(0,i.jsx)(n.p,{children:"En option, vous pouvez \xe9galement sp\xe9cifier des couleurs avec :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ligne"})," : Pour les lignes (par d\xe9faut, ",(0,i.jsx)(n.code,{children:"#0e47b2"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fond"})," : Pour le fond (par d\xe9faut, ",(0,i.jsx)(n.code,{children:"#0e47b2"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Les couleurs peuvent \xeatre en hexad\xe9cimal ou en RGB. Par exemple, ",(0,i.jsx)(n.code,{children:"#FF0000"})," ou ",(0,i.jsx)(n.code,{children:"255,0,0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Enfin, il est possible de d\xe9finir un minimum et un maximum pour les axes avec ",(0,i.jsx)(n.code,{children:"min"})," et ",(0,i.jsx)(n.code,{children:"max"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le minimum sera calcul\xe9 en fonction du mod\xe8le de serveur (si existant)."}),"\n",(0,i.jsxs)(n.li,{children:["Le maximum sera d\xe9termin\xe9 comme suit :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"S'il y a un maximum d\xe9fini par la template, il sera utilis\xe9 (calcul\xe9 sur la liste des maximums)."}),"\n",(0,i.jsx)(n.li,{children:"Sinon, il sera bas\xe9 sur la valeur du succ\xe8s critique."}),"\n",(0,i.jsxs)(n.li,{children:["Si aucune des deux options pr\xe9c\xe9dentes n'est disponible, il sera bas\xe9 sur la valeur du d\xe9 (par exemple, si ",(0,i.jsx)(n.code,{children:"1d20"}),", la valeur sera 20)."]}),"\n",(0,i.jsx)(n.li,{children:"Sinon, il sera automatiquement calcul\xe9 par rapport aux statistiques de l'utilisateur."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"graph",src:s(3955).A+"",width:"800",height:"800"})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3955:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/graph-43616a600fd24d8f70042683aa26693b.jpg"},6198:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dbd_example-5a8da6e3efd8ad7ac9d06f3f0da1c8cf.png"},5993:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dbroll_autocomplete-9867027659bb28e6c5f096bfc3b47f0c.png"},1537:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/display_ex-4e1777b5d6490cc9fd3f0dfe647ab46c.png"},9737:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/example-80bf2c1d27659d7324926a63cef21828.png"},3745:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/allow_commands_1-38a675a67c40101f2dad0e02b75c548f.png"},4901:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/allow_commands_2-35d20cee8c9133487b5ba1bc9a299d2e.png"},1036:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/allow_commands_3-25265f2531deb81b82aaf0e39dbc1102.png"},995:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/allow_commands_4-7366ebe48cfb205bfc68daf5bf327261.png"},234:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/allow_commands_5-3217b4fb56efe06a6a6a03c57f97f204.png"},5618:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(9474);const d={},l=i.createContext(d);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);