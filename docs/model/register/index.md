---
title: Enregistrement
sidebar_position: 1
---

Tout d'abord, vous devez **générer** un nouveau modèle. Pour ce faire, utilisez la commande `/register`, suivie du nom du modèle. De plus, vous pouvez générer un nouveau modèle (vide) avec la commande `/générer`.

Cette commande vous permettra de créer un nouveau fichier `JSON`, avec les paramètres (facultatifs) suivants :
- `nom` : Le nom des statistiques à séparer par un espace ou une virgule. Si l'une des statistiques contient un espace, vous devez l'entourer de guillemets. Par exemple : `"Logique d'intelligence", Force, Dextérité`.
- `dé` : Le type de dés à lancer, qui peut contenir une formule (cf. [#dés](#dés)).
- `total` : Si, lors de la création, vos joueurs ont un nombre de points à répartir. Malheureusement, il n'est pas possible de poser des conditions à ce total (par exemple, en fonction de l'âge du personnage, il n'aura que 60 points, tandis qu'un personnage plus âgé en aura 70). Dans ces cas-là, il vaut mieux choisir la valeur la plus élevée et vérifier manuellement.
- `personnage` : Vous pouvez rendre l'inscription d'un nom de personnage obligatoire avec cette option.
- `succès_critique` : En dé naturel, si un dé tombe sur cette valeur, il est considéré comme un succès critique.
- `échec_critique` : En dé naturel, si un dé tombe sur cette valeur, il est considéré comme un échec critique.
- `compétence` : Permet de définir (lorsque le modèle sera édité avant l'enregistrement) l'ajout de champs pour des dés de compétences (ou d'attaque). Comme pour le nom, vous devez séparer les valeurs par une virgule.

Pour des exemples de modèle, vous pouvez consulter les fichiers `template` [ici](https://github.com/Dicelette/discord-dicelette/tree/main/template) ou [ici](register/template).

:::info
Les statistiques et les dés sont facultatifs :
- L'absence de statistiques empêchera l'utilisation de la commande `/dbroll`, et vous ne pourrez pas enregistrer de statistiques sur les fiches. Si vous enregistrez les statistiques après avoir créé des utilisateurs, vous devrez recréer les fiches.
- L'absence de dés (que ce soit dans les modèles ou les fiches) empêchera l'utilisation de `/dbd`. 
:::

## Dés

Il existe deux types de dés :
- Le dé qui sera lancé par la commande `dbroll`, que nous appellerons **dé type**.
- Les dés enregistrés pour la commande `dbd`, que nous nommerons **dés enregistrés**.

Les deux types de dés doivent respecter la syntaxe de l'API de [dice-roller](https://dice-roller.github.io/documentation/), et peuvent supporter différentes formules mathématiques. 

Dans les deux cas, vous pouvez utiliser la syntaxe `{{` et `}}` pour écrire des formules mathématiques complexes, telles que `ceil`, `floor`, `round`, etc. Cependant, si vous souhaitez "viser" une statistique, la syntaxe sera différente en fonction de ce que vous utilisez :
- Les dés types visent uniquement la syntaxe utilisée dans la commande `dbroll`. Le signe pour indiquer une statistique est `$`.
- Les dés enregistrés visent la syntaxe utilisée dans la commande `dbd`. Puisque vous avez accès à toutes les statistiques, vous pouvez les viser directement avec leur nom.

:::tip[Exemple]
- Pour un dé type : `1d6>$` ou `1d6+$`
- Pour un dé enregistré : `1d6 > Force` ou `1d6 + Force`

Pour un dé basé sur une formule :
- Pour un dé type : `1d6 + {{ceil($ / 2)}}`
- Pour un dé enregistré : `1d6 + {{ceil(Force / 2)}}`

Il est également possible de comparer avec une formule :
- Pour un dé type : `1d6 > {{ceil($ / 2)}}`
- Pour un dé enregistré : `1d6 > {{ceil(Force / 2)}}`
:::

## Statistiques

Les statistiques sont basées sur un nom, mais vous remarquerez qu'après avoir généré le fichier, chaque statistique aura trois champs :
- `min` : La valeur minimale que la statistique peut avoir.
- `max` : La valeur maximale que la statistique peut avoir.
- `combinaison` : Si la statistique est une combinaison de plusieurs autres statistiques, vous pouvez l'indiquer ici. Par exemple, si la statistique `Esquive` est la somme de `Force` et `Dextérité`, vous pouvez l'indiquer ici. L'utilisation d'une combinaison annule automatiquement les valeurs `min` et `max`. De plus, les statistiques combinées ne seront pas calculées dans la somme du total.

<details>
  <summary>Modèle vide</summary>
  ```json
  {
  "charName": false,
  "statistics": {
    "NOM": {
      "min": 1,
	  "max": 20,
	  "combinaison": ""
    },
	"COMBINAISON": {
	  "combinaison": "NOM*2"
    },
  },
  "diceType": "",
  "critical": {
    "failure": 0,
    "success": 0
  },
  "total": 0,
  "damage": {
    "NOM": ""
  }
}
```
</details> 

## Et ensuite ?

Une fois que le modèle a été créé et que vous en êtes satisfait·e, vous pouvez utiliser la commande `/register <channel> <fichier>`. Vous devez choisir :
- Le canal où sera posté le bouton pour créer des fiches
- Le fichier que vous venez de créer et d'éditer.
- (Optionnel) Le canal où seront postées les fiches. Si ce paramètre est omis, les fiches seront postées dans un thread créé à partir du channel où le bouton a été posté, nommé `📝 • [STATS]`.

:::tip
Si vous voulez autoriser vos joueurs à modifier leur propre fiche, vous pouvez choisir un canal auquel ils ont accès. Sinon, il suffit de choisir un canal privé.
:::

Pour des raisons pratiques, l'embed sera épinglé.

![embed](/assets/register/embed_template.png)