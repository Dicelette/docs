---
title: Introduction
sidebar_position: 1
---

-> [Invitez le bot](https://discord.com/api/oauth2/authorize?client_id=1182819335878754385&permissions=395137215504&scope=bot+applications.commands)

Permet de lancer des dés et d'envoyer le résultat dans un fil de discussion, mais aussi d'enregistrer un modèle de statistique pour les lancer directement (afin de ne pas être obligé d'écrire la même chose encore et encore).

-> Utilise l'API [@diceRoller](https://dice-roller.github.io/documentation/) pour lancer les dés.

Il prend également en charge la notation rollem `4#(dés)` pour les lancers "en masse" (bulk roll).


Pour les statistiques, au lieu de sauvegarder la feuille entière, il utilisera le message et l'identifiant du message. Ainsi, vous avez le contrôle total sur vos données (puisque le bot ne connaît pas le contenu du message).

Le bot utilise une base de données pour stocker l'identifiant du message et l'identifiant du canal, mais aussi le nom de la statistique et les noms des personnages des utilisateurs. 

La base de données est un simple fichier JSON, et sera nettoyée si :
- Le message statistique de référence est supprimé
- Le canal enregistré pour le modèle est supprimé - Cela ne supprimera **pas** les identifiants de référence de l'utilisateur.
- Le message enregistré pour le modèle est supprimé
- Le thread contenant les données utilisateurs est supprimé
- Le bot est expulsé du serveur

La base de données n'est utilisée **que** si vous configurez `/dbroll`, `/dbd` et `/logs`.

:::note
Au besoin, vous pouvez me contacter si vous voulez que vos données soient supprimées. Il me suffira de votre identifiant Discord (le long numéro) pour supprimer vos données ou celle de votre serveur (il me faudra alors l'ID du serveur).
Pour me contacter en privée :
- Discord: `@mara__li`
- Mail: `lisandra_dev@yahoo.com`
:::