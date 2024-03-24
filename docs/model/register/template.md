---
sidebar_position: 2
title: Référence de modèle de serveur
---

# DND-like

```json
{
  "charName": false,
  "statistics": {
    "Force": {
      "min": 1
    },
    "Dextérité": {
      "min": 1
    },
    "Constitution": {
      "min": 1
    },
    "Intelligence": {
      "min": 1
    },
    "Sagesse": {
      "min": 1
    },
    "Charisme": {
      "min": 1
    }
  },
  "diceType": "1d20+{{ceil(($-10)/2)}}>20",
  "critical": {
    "failure": 1,
    "success": 20
  },
  "total": 27
}
```

# Simple système

```json
{
  "charName": true,
  "statistics": {
    "force": {
      "min": 3
    },
    "endurance": {
      "min": 3
    },
    "agilite": {
      "min": 3
    },
    "constitution": {
      "min": 3
    },
    "education": {
      "min": 3
    },
    "intelligence": {
      "min": 3
    },
    "charisme": {
      "min": 3
    },
    "pouvoir": {
      "min": 3
    },
    "pv": {
      "combinaison": "endurance*2+force"
    }
  },
  "diceType": "1d20+$>20",
  "critical": {
    "failure": 1,
    "success": 20
  },
  "total": 88
}
```