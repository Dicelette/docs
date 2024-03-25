---
title: Commandes
sidebar_position: 4
---
# Lancer de dés

Les deux commandes bénéficieront d'une fonction d'auto-complétion pour les statistiques (ou le nom du dé pour la commande `dbd`) ainsi que pour le nom du personnage.

## DBRoll (`/dbroll`)

La commande DBRoll aura les mêmes effets que la commande `/roll`, mais elle vous demandera :
- La statistique (obligatoire, avec auto-complétion)
- Le nom du personnage (avec auto-complétion)
- Le modificateur à ajouter au jet (tel que l'avantage, le désavantage, etc.)
- Le remplacement de la valeur de réussite (par exemple, pour un jet difficile) : N'oubliez pas de spécifier comment la valeur est comparée ! (exemple : `>= 10`)
- Tout commentaire sur votre action

![dbroll_1](/assets/rolls/db/dbroll_autocomplete.png)
![example](/assets/rolls/db/example.png)

## DBD (`/dbd`)

La commande DBD aura les mêmes effets que la commande `/roll`, mais elle vous demandera :
- La compétence (obligatoire, avec auto-complétion)
- Le nom du personnage (avec auto-complétion)
- Le modificateur à ajouter au jet (tel que l'avantage, le désavantage, etc.)
- Tout commentaire sur votre action.

![dbd](/assets/rolls/db/dbd_example.png)

# Logs

La commande "logs" permet de choisir un canal dans lequel :
- Toute erreur sera rapportée
- Toute modification apportée à un personnage sera enregistrée.

# Afficher

La commande "afficher" permet de consulter les statistiques et les dés d'un personnage enregistré dans la base de données. Elle vous demandera :
- Le joueur (accepte un utilisateur par mention)
- Et/ou le nom du personnage (avec auto-complétion).

Utiliser les deux ensemble permet de choisir le personnage d'un joueur spécifique (utile en cas de doublons de noms de personnages, bien que cela soit peu probable).

![afficher](/assets/rolls/db/display_ex.png)