---
title: Comportement
---

Le bot fonctionne avec des threads. Lors du premier lancer, il recherchera un fil préfixé par `🎲`.
- Si le fil n'existe pas, un nouveau sera créé et tous les futurs logs y seront envoyés.
- S'il existe déjà un fil, il prendra le plus récent et enverra les logs dedans.

:::note
Si plusieurs fils sont trouvés, le bot utilisera le plus récent et archivera les autres.
:::

Les commandes peuvent également fonctionner dans un fil. Dans ce cas, le bot y enverra simplement le résultat. Ce resultat peut être retrouvé dans les channels dont le nom commence par `🎲`.

Il est également possible de créer un nouveau fil avec la commande [Créer une nouvelle scène](#créer-une-nouvelle-scène).

:::tip
Le bot fonctionne aussi dans les forums. La différence étant que :
- Plusieurs logs peuvent exister en même temps (sauf s'ils ont exactement le même nom)
- Les logs seront appelés par défaut `🎲 [nom du sujet]` et le tag `🪡 Dice Roll` sera automatiquement appliqué (et créé s'il n'existe pas).
- C'est donc un poste qui sera créé à la place d'un fil
:::

## Canaux

Le bot enverra **également** le résultat dans le canal où la commande a été envoyée. Le message :
- Sera supprimé après 3 minutes
- Contiendra un lien vers le message dans le log.

# Utilisation

Le bot peut être :
- Utilisé avec des slash-commands (voir [Slashcommands](#slashcommands))
- Mais aussi directement sur le message.