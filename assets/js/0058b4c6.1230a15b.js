"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[849],{86164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"introduction":[{"type":"link","label":"Introduction","href":"/docs/introduction/","docId":"introduction/index","unlisted":false},{"type":"link","label":"Comportement","href":"/docs/introduction/behavior","docId":"introduction/behavior","unlisted":false},{"type":"link","label":"Traduction","href":"/docs/introduction/traduction","docId":"introduction/traduction","unlisted":false}],"model":[{"type":"category","label":"Enregistrement d\'un Mod\xe8le","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"G\xe9n\xe9ration de mod\xe8le","href":"/docs/admin/model/form","docId":"admin/model/form","unlisted":false},{"type":"link","label":"Limitation","href":"/docs/admin/model/limitation","docId":"admin/model/limitation","unlisted":false}],"href":"/docs/admin/model/"},{"type":"category","label":"Configuration g\xe9n\xe9rale","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Auto-r\xf4le","href":"/docs/admin/config/auto_role","docId":"admin/config/auto_role","unlisted":false},{"type":"link","label":"Supprimer un personnage","href":"/docs/admin/config/delete_char","docId":"admin/config/delete_char","unlisted":false},{"type":"link","label":"Import et export de donn\xe9es","href":"/docs/admin/config/import_export","docId":"admin/config/import_export","unlisted":false}],"href":"/docs/admin/config/"},{"type":"link","label":"Enregistrer un utilisateur","href":"/docs/admin/user","docId":"admin/user","unlisted":false},{"type":"link","label":"Modifier une fiche","href":"/docs/admin/edit","docId":"admin/edit","unlisted":false},{"type":"link","label":"D\xe9s de ma\xeetre de jeu","href":"/docs/admin/mj_dice","docId":"admin/mj_dice","unlisted":false},{"type":"link","label":"Conseil","href":"/docs/admin/conseil","docId":"admin/conseil","unlisted":false}],"commands":[{"type":"link","label":"Information g\xe9n\xe9rale","href":"/docs/Usage/","docId":"Usage/index","unlisted":false},{"type":"link","label":"Lancer de d\xe9s et sc\xe8nes","href":"/docs/Usage/roll","docId":"Usage/roll","unlisted":false},{"type":"link","label":"Fiches de personnages","href":"/docs/Usage/model","docId":"Usage/model","unlisted":false},{"type":"link","label":"Envoi de Message","href":"/docs/Usage/message","docId":"Usage/message","unlisted":false}],"TOS":[{"type":"link","label":"CGU","href":"/docs/TOS","docId":"TOS","unlisted":false}]},"docs":{"admin/config/auto_role":{"id":"admin/config/auto_role","title":"Auto-r\xf4le","description":"- /config auto_role d\xe9 (@role)","sidebar":"model"},"admin/config/delete_char":{"id":"admin/config/delete_char","title":"Supprimer un personnage","description":"/supprimer_char [@joueur] (*personnage)","sidebar":"model"},"admin/config/import_export":{"id":"admin/config/import_export","title":"Import et export de donn\xe9es","description":"Les commandes suivantes permettent d\'importer et d\'exporter des donn\xe9es depuis et vers un fichier CSV.","sidebar":"model"},"admin/config/index":{"id":"admin/config/index","title":"Configuration g\xe9n\xe9rale","description":"Toutes les commandes d\'administration sont restreintes par d\xe9faut aux membres ayant la permission G\xe9rer les r\xf4les.","sidebar":"model"},"admin/conseil":{"id":"admin/conseil","title":"Conseil","description":"- \xc9vitez d\'enregistrer tous les d\xe9s dans le mod\xe8le du serveur, surtout si leur nombre est important. En effet, il ne peut y avoir que 25 d\xe9s enregistr\xe9s, \xe0 cause de la limitation de l\'affichage des champs sur les embeds utilis\xe9s. Il est pr\xe9f\xe9rable d\'enregistrer sp\xe9cifiquement, par joueur, uniquement les d\xe9s auxquels ils ont acc\xe8s, tels que les armes qu\'ils utilisent ou leurs comp\xe9tences. Il n\'est pas, par exemple, n\xe9cessaire qu\'un archer ait acc\xe8s aux d\xe9s d\'utilisation d\'une \xe9p\xe9e, mais seulement \xe0 ceux li\xe9s \xe0 son arc.","sidebar":"model"},"admin/edit":{"id":"admin/edit","title":"Modifier une fiche","description":"Une fois que l\'utilisateur est valid\xe9, sa fiche sera automatiquement publi\xe9e dans un thread ou dans le canal choisi. Toutes les fiches suivront ce format :","sidebar":"model"},"admin/mj_dice":{"id":"admin/mj_dice","title":"D\xe9s de ma\xeetre de jeu","description":"Les deux commandes suivantes permettent aux ma\xeetres de jeu de lancer des d\xe9s pour tous les joueurs enregistr\xe9s.","sidebar":"model"},"admin/model/form":{"id":"admin/model/form","title":"G\xe9n\xe9ration de mod\xe8le","description":"Le formulaire suivant vous aidera \xe0 cr\xe9er un mod\xe8le de fichier de configuration pour votre serveur. Les modalit\xe9s de v\xe9rification sont les m\xeames que par le bot, donc si vous avez des erreurs, vous pouvez les corriger ici plut\xf4t que manuellement.","sidebar":"model"},"admin/model/index":{"id":"admin/model/index","title":"Enregistrement d\'un Mod\xe8le","description":"Pour commencer, vous devez g\xe9n\xe9rer un nouveau mod\xe8le. Utilisez /register suivi du nom du mod\xe8le. Vous pouvez aussi cr\xe9er un mod\xe8le vide en utilisant /g\xe9n\xe9rer ou en utilisant le formulaire disponible ici m\xeame.","sidebar":"model"},"admin/model/limitation":{"id":"admin/model/limitation","title":"Limitation","description":"Voici les limitations \xe0 prendre en compte lors de l\'enregistrement et de l\'\xe9dition de mod\xe8les et de fiches :","sidebar":"model"},"admin/user":{"id":"admin/user","title":"Enregistrer un utilisateur","description":"Maintenant que le mod\xe8le est cr\xe9\xe9, vous pouvez enregistrer des utilisateurs. Comme nous l\'avons vu pr\xe9c\xe9demment, l\'embed du mod\xe8le contient un bouton \\"Enregistrer un personnage\\".","sidebar":"model"},"introduction/behavior":{"id":"introduction/behavior","title":"Comportement","description":"La configuration permet de modifier le comportement du bot. Ce document d\xe9crit le comportement par d\xe9faut.","sidebar":"introduction"},"introduction/index":{"id":"introduction/index","title":"Introduction","description":"Bienvenue ! \ud83c\udfb2 Voici un compagnon pour vos aventures sur Discord : un bot polyvalent, con\xe7u pour rendre vos sessions de jeu de r\xf4le plus fluides et agr\xe9ables.","sidebar":"introduction"},"introduction/traduction":{"id":"introduction/traduction","title":"Traduction","description":"Le bot est enti\xe8rement disponible en fran\xe7ais et en anglais. Les commandes slash seront automatiquement traduites dans la langue du client utilis\xe9.","sidebar":"introduction"},"TOS":{"id":"TOS","title":"CGU","description":"Conditions G\xe9n\xe9rales d\'Utilisation (CGU) pour Dicelette Bot sur Discord","sidebar":"TOS"},"Usage/index":{"id":"Usage/index","title":"Information g\xe9n\xe9rale","description":"Commandes auto-compl\xe9t\xe9es","sidebar":"commands"},"Usage/message":{"id":"Usage/message","title":"Envoi de Message","description":"Ce bot d\xe9tecte la notation des d\xe9s et envoie le r\xe9sultat selon trois m\xe9thodes :","sidebar":"commands"},"Usage/model":{"id":"Usage/model","title":"Fiches de personnages","description":"Attention","sidebar":"commands"},"Usage/roll":{"id":"Usage/roll","title":"Lancer de d\xe9s et sc\xe8nes","description":"Lancer de d\xe9s","sidebar":"commands"}}}}')}}]);