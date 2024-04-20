---
title: Enregistrement
sidebar_position: 1
---
# Enregistrement d'un Modèle

Pour commencer, vous devez **générer** un nouveau modèle. Utilisez `/register` suivi du nom du modèle. Vous pouvez aussi créer un modèle vide en utilisant `/générer` ou en utilisant le formulaire disponible [ici même](./form.mdx).

Cette commande vous permet de créer un fichier `JSON` avec les paramètres suivants (optionnels) :

- `nom` : Le nom des statistiques, séparées par des virgules. Si un nom contient un espace, entourez-le de guillemets.
- `dé` : Le type de dés à lancer, qui peut inclure une formule.
- `total` : Le nombre total de points que les joueurs peuvent répartir.
- `personnage` : Rendre obligatoire l'inscription d'un nom de personnage.
- `succès_critique` : La valeur considérée comme un succès critique.
- `échec_critique` : La valeur considérée comme un échec critique.
- `compétence` : Ajouter des champs pour des dés de compétences ou d'attaque.

Consultez les exemples de modèle dans les fichiers `template` [ici](https://github.com/Dicelette/discord-dicelette/tree/main/template) ou [ici](register/template).

:::info Remarque
Les statistiques et les dés sont facultatifs :
- Sans statistiques, vous ne pourrez pas utiliser la commande `/dbroll`.
- Sans dés, vous ne pourrez pas utiliser `/dbd`. 
:::

## Dés

Il y a deux types de dés :

- Le dé utilisé avec `dbroll` (le **dé type**).
- Les dés enregistrés pour `dbd` (les **dés sauvegardés**).

Les deux types de dés suivent la syntaxe de [dice-roller](https://dice-roller.github.io/documentation/). Vous pouvez utiliser des formules mathématiques complexes avec `{{` et `}}`.

Pour viser une statistique, cela est différent selon le type de dé :
- Pour un dé type, il faut utiliser `$`. Ce symbole sera utilisé par la valeur de la statistique utilisée par `/dbroll`.
- Pour les dés enregistrés, il suffit d'utiliser les noms des statistiques. 

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

Chaque statistique a un nom, une valeur minimale (`min`), une valeur maximale (`max`) et une option de combinaison (`combinaison`). 
- `min` et `max` correspondent à la minimale et/ou maximale que peut prendre cette valeur lors de l'enregistrement.
- `combinaison` correspond à une combinaison de plusieurs autres statistiques. L'utilisation de ce champ ne peut coexister avec `min` et `max` et les statistiques combinées ne seront pas décomptées du total de point alloué dans le champ `total`. 

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

## Prochaine Étape

Une fois que le modèle est prêt, utilisez `/register <channel> <fichier>`. Choisissez :

- Le canal pour le bouton de création de fiches.
- Le fichier modifié.
- (Optionnel) Le canal dans lequel seront postées les fiches. En cas d'omission, les fiches seront postées dans un fil nommé `📝 • [STATS]` (créé à partir du canal où se trouve le bouton de création des fiches).

L'embed sera épinglé pour faciliter l'accès.


![embed](/assets/register/embed_template.png)

:::warning Attention
Vous ne pourrez pas modifier le canal de publication des fiches sans perdre les anciennes fiches car le canal est enregistré globalement, et non pas spécifiquement pour chaque fiche.
:::