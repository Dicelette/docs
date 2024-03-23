---
sidebar_position: 4
---

# Traduction

Le bot est entièrement traduit en français et en anglais.
Les slash-commands seront automatiquement traduites dans la langue du client utilisé.

:::tip
Par exemple, un utilisateur dont le client est en français aura les réponses en français, et un utilisateur dont le client est en anglais aura les réponses en anglais.
:::

Mais, pour les message "direct" (c'est-à-dire les messages qui ne sont pas des slash-commands), le bot ne peut pas savoir quelle langue utiliser. Il utilisera donc la langue du serveur, qui ne peut être choisie que pour les Serveurs Communautaires.

### Ajouter une langue

Pour ajouter une langue, vous devez copier et traduire le fichier [`en.json`](https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/locales/en.json).

:::important
Le nom doit suivre le format des [locales discord.js](https://github.com/discordjs/discord-api-types/blob/main/rest/common.ts#L300).
Par exemple, `ChineseCN` pour le Chinois (China) et `ChineseTW` pour le Chinois (Taiwan).
:::

Après cela, vous devez ajouter la langue dans le fichier [`i18next.ts`](https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/i18next.ts), tel que :
```ts
import NouvelleTraduction from "./locales/nouvelleTraduction.json";

export const resources = {
	// ...
	discordLocale: { //ie fr, en-US, etc..
		translation: NouvelleTraduction,
	},
};
```