---
title: Enregistrement
sidebar_position: 1
---
## Model Registration

To begin, you need to **generate** a new model. Use `/register` followed by the model's name. You can also create an empty model using `/generate` or by using the form available [right here](./form.mdx).

This command allows you to create a `JSON` file with the following (optional) parameters:

- `name`: The names of the statistics, separated by commas. If a name contains a space, surround it with quotes.
- `dice`: The type of dice to roll, which can include a formula.
- `total`: The total number of points players can allocate.
- `character`: Make it mandatory to enter a character name.
- `critical_success`: The value considered as a critical success.
- `critical_failure`: The value considered as a critical failure.
- `skill`: Add fields for skill or attack dice.

Check out model examples in the `template` files [here](https://github.com/Dicelette/discord-dicelette/tree/main/template) or [here](register/template).

:::info Note
Statistics and dice are optional:
- Without statistics, you won't be able to use the `/dbroll` command.
- Without dice, you won't be able to use `/dbd`.
:::

## Dice

There are two types of dice:

- The die used with `dbroll` (the **die type**).
- The dice saved for `dbd` (the **saved dice**).

Both types of dice follow the syntax of [dice-roller](https://dice-roller.github.io/documentation/). You can use complex mathematical formulas with `{{` and `}}`.

To target a statistic, it's different depending on the type of die:
- For a die type, use `$`. This symbol will be replaced by the value of the statistic used by `/dbroll`.
- For saved dice, simply use the names of the statistics.

::tip[Example]
- For a die type: `1d6>$` or `1d6+$`
- For saved dice: `1d6 > Force` or `1d6 + Force`

For a die based on a formula:
- For a die type: `1d6 + {{ceil($ / 2)}}`
- For saved dice: `1d6 + {{ceil(Force / 2)}}`

You can also compare with a formula:
- For a die type: `1d6 > {{ceil($ / 2)}}`
- For saved dice: `1d6 > {{ceil(Force / 2)}}`
:::

## Statistics

Each statistic has a name, a minimum value (`min`), a maximum value (`max`), and a combination option (`combination`).
- `min` and `max` correspond to the minimum and/or maximum value that this statistic can have when recorded.
- `combination` corresponds to a combination of several other statistics. The use of this field cannot coexist with `min` and `max`, and combined statistics will not be counted towards the total points allocated in the `total` field.

<details>
  <summary>Empty Model</summary>
  ```json
  {
  "charName": false,
  "statistics": {
    "NAME": {
      "min": 1,
	  "max": 20,
	  "combination": ""
    },
	"COMBINATION": {
	  "combination": "NAME*2"
    },
  },
  "diceType": "",
  "critical": {
    "failure": 0,
    "success": 0
  },
  "total": 0,
  "damage": {
    "NAME": ""
  }
}
```
</details> 

## Next Step

Once the model is ready, use `/register <channel> <file>`. Choose:

- The channel for the character sheet creation button.
- The edited file.
- (Optional) The channel where the sheets will be posted. If omitted, the sheets will be posted in a thread named `📝 • [STATS]` (created from the channel where the character sheet creation button is located).

The embed will be pinned for easy access.

![embed](/assets/register/embed_template.png)

:::warning Attention
You cannot modify the publication channel of the sheets without losing the old sheets because the channel is globally saved, not specifically for each sheet.
:::