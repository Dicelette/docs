---
title: Behavior
---

The bot operates based on the usage of threads. Upon its initial launch, it will search for a thread prefixed with `🎲`:

- If no thread is found, the bot will create a new one and direct all future logs there.
- However, if a thread already exists, the bot will select the most recent one and send logs there.

:::note
In the event of multiple threads being discovered, the bot will use the most recent one and archive the others.
:::

Commands can also be executed within an existing thread. In this case, the bot will simply send the result there, accessible afterwards in channels whose names begin with `🎲`.

It's also possible to create a new thread using the command [Create a new scene](#create-a-new-scene).

:::tip
The bot also operates in forums, albeit with some differences:
- Multiple logs can exist simultaneously (unless they have exactly the same name).
- Logs will automatically be named `🎲 [topic name]`, with the automatic addition of the `🪡 Dice Roll` tag (created if it doesn't exist).
- In this case, it's a message that will be created instead of a thread.
:::

## Channels

The bot will **also** send the result to the channel where the command was initially sent. This message:
- Will be deleted after 3 minutes.
- Will contain a link to the message in the log.

# Usage

The bot can be:
- Used with slash commands (see [Slashcommands](Usage/slashcommands)).
- But also directly on the message.