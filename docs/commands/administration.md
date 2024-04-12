---
title: Commandes administratives
sidebar_position: 2
---

Toutes les commandes suivantes sont restreintes par défaut aux membres ayant la permission `Gérer les rôles`.

## Générale
### Logs

:::usage
**`/logs (#channel)`**
:::

La commande `logs` offre la possibilité de d'enregister un channel afin de : 
- Rapporter toutes les erreurs,
- Enregistrer toute modification apportée à un personnage.

Renvoyer la commande sans l'argument "channel" permet de supprimer l'envoi des logs.

### Changer le canal de résultats (`/result_channel`)

:::usage
**`/result_channel (#channel)`**
:::

La commande `/result_channel` permet de définir un canal pour recevoir les résultats des jets de dés, plutôt que d'utiliser un fil de discussion à chaque fois. L'ID du canal sera alors enregistré dans la base de données de la même manière que la commande `logs`.

Renvoyer la commande sans l'argument "channel" permet de supprimer le canal de résultats à l'instar de la commande `logs`.

## Modèle et fiche de personnages

### Supprimer un personnage/joueur (`/supprimer_char`)

:::usage
**`/supprimer_char [@joueur] (*personnage)`**
:::

La commande `supprimer_char` permet de supprimer un personnage ou un joueur de la base de données. 

Elle demande :
- `[@joueur]` - Le nom du joueur
- `(*personnage)` - Et/ou le nom du personnage, en fonction de l'utilisateur sélectionné.

En l'absence de nom de personnage, cela supprimera toutes les données du joueur. Si vous voulez supprimer uniquement le "personnage sans nom" d'un joueur, vous pouvez le faire en choisissant "défaut" dans la liste du nom du personnage.

### Auto-Role (`/auto_role`)

:::usage
- **`/auto_role dé (@role)`**
- **`/auto_role stats (@role)`**
:::

Ces commandes permettent d'ajouter automatiquement des rôles lorsque :
- Un dé est ajouté (`/auto_role dé`)
- Des statistiques sont validées (`/auto_role stats`)

Cela permet, notamment, d'autoriser l'usage de `/dbd` et `/dbroll` aux utilisateurs qui ont, effectivement, la possibilité d'utiliser ses deux commandes.

Si le rôle n'est pas fourni, l'option sera désactivée.

## Lancer de dés "maître de jeu"

:::info
Les deux commandes suivantes permettent aux maîtres de jeu de lancer des dés pour tous les joueurs enregistrés.
:::

:::usage
- **`/mj dbroll [@Joueur] [statistique] (*personnage)`**
- **`/mj dbd [@Joueur] [*compétence] (*personnage)`**
:::

Les deux commandes sont similaires à [dbroll](./model#dbroll-dbroll) et [dbd](./model#dbd-dbd), mais nécessite en plus de spécifier le joueur pour lequel le jet est effectué. Comme les autres commandes, il est possible de choisir un personnage appartenant à ce joueur ou de laisser le choix par défaut.

