---
title: Commandes administratives
sidebar_position: 1
---

Toutes les commandes suivantes sont restreintes par défaut aux membres ayant la permission `Gérer les rôles`.

## Générale
### Logs

<u>Utilisation</u> : `/logs <channel>`

La commande `logs` offre la possibilité de d'enregister un channel afin de : 
- Rapporter toutes les erreurs,
- Enregistrer toute modification apportée à un personnage.

Renvoyer la commande sans l'argument "channel" permet de supprimer l'envoi des logs.

### Changer le canal de résultats (`/result_channel`)

<u>Utilisation</u> : `/result_channel <channel>`

La commande `/result_channel` permet de définir un canal pour recevoir les résultats des jets de dés, plutôt que d'utiliser un fil de discussion à chaque fois. L'ID du canal sera alors enregistré dans la base de données de la même manière que la commande `logs`.

Renvoyer la commande sans l'argument "channel" permet de supprimer le canal de résultats à l'instar de la commande `logs`.

## Modèle et fiche de personnages

### Supprimer un personnage/joueur (`/supprimer_char`)
La commande `supprimer_char` permet de supprimer un personnage ou un joueur de la base de données. Elle demande :
- Le nom du joueur
- Et/ou le nom du personnage

En l'absence de nom de personnage, cela supprimera toutes les données du joueur. Si vous voulez supprimer uniquement le "personnage sans nom" d'un joueur, vous pouvez le faire en choisissant "défaut" dans la liste du nom du personnage.

### Auto-Role (`/auto_role`)
Ces commandes permettent d'ajouter automatiquement des rôles lorsque :
- Un dé est ajouté (`/auto_role dé`)
- Des statistiques sont validées (`/auto_role stats`)

Cela permet, notamment, d'autoriser l'usage de `/dbd` et `/dbroll` aux utilisateurs qui ont, effectivement, la possibilité d'utiliser ses deux commandes.

Les deux commandes acceptent la même option : un role (`@role`). En l'absence de l'option, cela désactivera simplement l'auto-rôle.