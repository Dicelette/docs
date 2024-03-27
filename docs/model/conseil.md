---
title: Conseil
sidebar_position: 5
---

- Évitez d'enregistrer tous les dés dans le modèle du serveur, surtout si leur nombre est important. En effet, chaque utilisateur est soumis à une limitation complète (seuls 25 dés peuvent être enregistrés). Il est préférable d'enregistrer spécifiquement, par joueur, uniquement les dés auxquels ils ont accès, tels que les armes qu'ils utilisent ou leurs compétences. Il n'est pas, par exemple, nécessaire qu'un archer ait accès à tous les dés de combat, mais seulement à ceux liés à son arc.

- Les fiches ne sont pas conçues pour recevoir les bonus et les malus temporaires ou d'équipement, qui doivent plutôt être utilisés directement dans la commande `/dbroll`. Le bot ne prend pas en charge les équipements, et vous ne pouvez pas créer de colonnes "bonus" ou "malus" pour chaque caractéristique. Cependant, il est possible de modifier les valeurs des statistiques enregistrées au besoin, notamment dans le cas de la distribution de points après avoir gagné un niveau.

- Bien que le bot vise à être aussi universel que possible, certaines [limitations](./register/limitation) peuvent faire en sorte qu'il ne vous convienne pas, notamment si vous utilisez un système basé sur de nombreuses compétences ou des dés spécifiques. Cela dit, vous n'êtes pas obligé d'enregistrer TOUS les dés spéciaux.

- La vérification des statistiques est minimale (elle ne vérifie que les valeurs numériques et, si elles existent, les valeurs minimales et maximales) : il est impératif que les MJ effectuent une vérification préalable. Étant donné que l'édition d'une fiche est très libre (sans vérification par rapport au total des points, aux maximums...), il est essentiel que les MJ vérifient. Si vous avez configuré les journaux (avec `/logs`), vous recevrez un message en cas de modification, accompagné d'une liste des modifications apportées.
