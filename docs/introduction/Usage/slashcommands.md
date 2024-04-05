---
title: Commande slash
---
## Rolling Dice

Use `/roll 1d20` to roll a die. You can also use the "semi-direct" notation by adding a comment: `/roll 1d20 My comment`. Please note that the "indirect" notation is not available in this mode.

![Roll](/assets/rolls/slash-commands.gif)

## Creating a New Scene

Use `/scene <name>` to create a new scene. The bot will then create a new thread, prefixed with `🎲`, where it will send the dice logs. This thread will take on the name of the `scene`, and all other threads prefixed with `🎲` will be archived.

![Scene](/assets/rolls/scene.gif)

## Help

Use `/help` to display the help message.

## Logs

This command allows you to configure a channel to receive all error logs from the bot.

Use `/logs <channel>` to configure the log channel.

## Changing the Result Channel `/result_channel`

The `/result_channel` command allows you to set a channel to receive the results of dice rolls, rather than using a thread each time. The channel ID will then be saved in the database similarly to the `logs` command.

Usage: `/result_channel <channel>`