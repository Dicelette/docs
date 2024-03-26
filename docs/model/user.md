---
sidebar_position: 2
title: Enregistrer un utilisateur
---

Maintenant que le modèle est créé, vous pouvez enregistrer des utilisateurs. Comme nous l'avons vu précédemment, l'embed du modèle contient un bouton "Enregistrer un personnage".

Une fois que le bouton est activé, vous aurez une série de modaux à remplir.

Le premier modal sera toujours identique quel que soit le modèle :
- Il vous demandera le nom du personnage (obligatoire ou facultatif, selon les paramètres du modèle)
- Le nom de l'utilisateur, qui doit être soit son ID, soit son nom d'utilisateur. Cette donnée est obligatoire et sera pré-remplie par le bot avec le nom d'utilisateur de la personne qui a cliqué.

:::info
Le nom d'utilisateur est le nom d'utilisateur, pas le nom d'affichage. Celui que vous avez peut-être été contraint de changer lorsque Discord a supprimé les numéros après les pseudonymes...
:::

![Page_1](/assets/register/register_user_P1.png)

Le deuxième modal dépendra du modèle : s'il y a plus de 5 caractéristiques enregistrées, vous aurez plusieurs pages à remplir. À chaque fois, vous devrez simplement entrer la valeur de la statistique. Ces valeurs seront ensuite vérifiées (min/max et si ce sont bien des nombres). Malheureusement, pour le moment, Discord ne permet pas de vérifier cela directement dans le modal, il faudra donc attendre la fin pour savoir si tout est correct.

![Page_2](/assets/register/register_user_P2_Embed.png)
![Page_2_modal](/assets/register/register_user_P2_Modal.png)
![Page_3_Embed](/assets/register/register_user_P3_Embed.png)
![Fin](/assets/register/register_user_Fin_embed.png)

Une fois l'enregistrement terminé (c'est-à-dire que toutes les statistiques ont été remplies), les modérateurs ont la possibilité de valider ou d'enregistrer des dés.

![modal_dice](/assets/register/register_dice_modal.png)

Chaque dé doit être enregistré manuellement.

Une fois tout cela fait, il suffit de cliquer sur "Valider" et la fiche sera repostée dans le channel choisi lors de l'enregistrement (ou dans un thread nommé `📝 • [STATS]` si aucun channel n'a été choisi lors de l'enregistrement du modèle).