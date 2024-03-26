---
title: Slashcommands
---

# Rolling Dice

Use `/roll 1d20` to roll a die. You can also use "semi-direct" notation by adding a comment: `/roll 1d20 My comment`. Please note that "indirect" notation is not available in this mode.

![Roll](/assets/rolls/slash-commands.gif)

# Creating a New Scene

Use `/scene <name>` to create a new scene. The bot will then create a new thread, prefixed with `🎲`, where it will send the log. This thread will be named after the `scene`, and all other threads prefixed with `🎲` will be archived.

![Scene](/assets/rolls/scene.gif)

# Help

Use `/help` to display the help message.

## Logs

This command allows configuring a channel to receive all bot error logs.

Use `/logs <channel>` to configure the log channel.