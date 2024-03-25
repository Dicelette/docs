---
title: Modifier une fiche
sidebar_position: 3
---

Une fois l'utilisateur validé, la fiche sera donc posté dans un thread. Toutes les fiches seront postés dans ce thread et seront sous cette forme : 
![user embed](../assets/edit/user_embed.png)

Seule la présence de modèle et utilisateur seront toujours présent (sauf si aucun dé type et succès/échec critique n'ont été enregistré dans le modèle).

Dans le cas où tout est enregistré, vous aurez accès à trois boutons : 
- Modifier les statistiques
- Modifier les dés enregistrés (qui permet d'enregistrer plusieurs nouveaux dés mais chut...)
- Ajouter un nouveau dé.

# Modification de statistiques

![edit stats](../assets/edit/edit_stats.png)

Le modal sera pré-remplie par une liste tel que :
```md
- NOM : valeur
- NOM : valeur
- NOM : COMBINAISON
```

:::warning
Vous devez impérativement garder cette liste tel quelle pour que le bot puisse lire correctement les statistiques. 
:::

Vous pouvez supprimer les valeurs avec `X` ou en laissant vide, tel que :
```md
- NOM : X
```

Si des statistiques ont été supprimés du modèle, elle seront automatiquement supprimé de la liste. De même, elles seront automatiquement ajouté si elles sont ajouté au modèle, avec la valeur "0" par défaut.

Il est possible de modifier les combinaisons.

Enfin, les valeurs ne seront pas vérifiées par rapport au total enregistrés à l'origine du modèle. Les MJ doivent donc vérifier les valeurs en cas d'édition.

:::note
Si les statistiques sont modifiés et que les logs sont activés, un message de modification sera envoyé dans le channel configurés dans les logs.
:::

# Modification des dés

Tout comme les statistiques, le modal sera pré-remplie par une liste tel que :
```md
- NOM : dés
```

Tout comme durant l'enregistrement, les dés seront évaluées pour vérifier qu'ils sont bien valide. De plus, vous pouvez rajouter autant de dés que vous le souhaitez ! 

Comme pour les statistiques, il est impératif de respecter la liste et sa syntaxe. Vous pouvez supprimer des champs en remplaçant la valeur par "X" ou "0".

![edit dice](../assets/edit/edit_dice.png)

# Ajout d'un nouveau dé

L'ajout d'un dé fonctionne exactement comme lors de l'enregistrement d'un personnage. 
