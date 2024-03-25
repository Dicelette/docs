---
title: Modifier une fiche
sidebar_position: 3
---

Une fois l'utilisateur validé, la fiche sera donc postée dans un thread. Toutes les fiches seront postées dans ce thread et seront sous cette forme : 
![user embed](../assets/edit/user_embed.png)

Seule la présence de modèle et utilisateur seront toujours présents (sauf si aucun dé-type et succès/échec critique n'ont été enregistrés dans le modèle).

Dans le cas où tout est enregistré, vous aurez accès à trois boutons : 
- Modifier les statistiques
- Modifier les dés enregistrés (qui permet d'enregistrer plusieurs nouveaux dés, mais chut...)
- Ajouter un nouveau dé.

# Modification de statistiques

![edit stats](../assets/edit/edit_stats.png)

Le modal sera pré-remplie par une liste telle que :
```md
- NOM : valeur
- NOM : valeur
- NOM : COMBINAISON
```

:::warning
Vous devez impérativement garder cette liste telle quelle pour que le bot puisse lire correctement les statistiques. 
:::

Vous pouvez supprimer les valeurs avec `X` ou en laissant vide, tel que :
```md
- NOM : X
```

Si des statistiques ont été supprimées du modèle, elles seront automatiquement supprimées de la liste. De plus, elles seront automatiquement intégrées dès leur ajout au modèle, avec une valeur par défaut de "0".

Il est possible de modifier les combinaisons.

Enfin, les valeurs ne seront pas vérifiées par rapport au total enregistré à l'origine du modèle. Les MJ doivent donc vérifier les valeurs en cas d'édition.

:::note
Si les statistiques sont modifiées et que les logs sont activés, un message de modification sera envoyé dans le channel configuré dans les logs.
:::

# Modification des dés

Tout comme les statistiques, le modal sera pré-rempli par une liste telle que :
```md
- NOM : dés
```

Tout comme durant l'enregistrement, les dés seront évalués pour vérifier qu'ils sont bien valides. De plus, vous pouvez rajouter autant de dés que vous le souhaitez !

Comme pour les statistiques, il est impératif de respecter la liste et sa syntaxe. Vous pouvez supprimer des champs en remplaçant la valeur par "X" ou "0".

![edit dice](../assets/edit/edit_dice.png)

# Ajout d'un nouveau dé

L'ajout d'un dé fonctionne exactement comme lors de l'enregistrement d'un personnage. 
