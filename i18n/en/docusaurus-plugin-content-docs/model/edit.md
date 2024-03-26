---
title: Editing an user refsheet
sidebar_position: 3
---
Once the user is validated, their sheet will be automatically posted in a thread. All sheets will be displayed in this thread and follow this format:
![user embed](/assets/edit/user_embed.png)

Only the template and the user will always be present (unless no dice type and no critical success/failure have been saved in the template).

If all information is saved, you will have access to three buttons:
- Edit statistics
- Edit saved dice (which allows saving multiple new dice, but shh...)
- Add a new die.

# Editing Statistics

![edit stats](/assets/edit/edit_stats.png)

The modal will be pre-filled with a list as follows:
```md
- NAME: value
- NAME: value
- NAME: COMBINATION
```

:::warning
It is imperative to keep this list as is so that the bot can correctly read the statistics.
:::

You can remove values using `X` or leaving them blank, like this:
```md
- NAME: X
```

If statistics have been removed from the template, they will automatically be removed from the list. Additionally, they will be automatically added back as soon as they are added to the template, with a default value of "0".

It is possible to edit combinations.

Finally, values will not be checked against the total initially saved in the template. Game Masters must therefore verify the values during editing.

:::note
If statistics are edited and logs are enabled, a modification message will be sent to the channel configured in the logs.
:::

# Editing Dice

Just like for statistics, the modal will be pre-filled with a list as follows:
```md
- NAME: dice
```

Just like during saving, dice will be evaluated to check their validity. Additionally, you can add as many dice as you want!

As with statistics, it is essential to respect the list and its syntax. You can remove fields by replacing the value with "X" or "0".

![edit dice](/assets/edit/edit_dice.png)

# Adding a New Die

Adding a die works exactly like when saving a character.