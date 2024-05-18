---
title: Administration commands
sidebar_position: 2
---

The following commands are restricted by default to members with the `Manage Roles` permission.

You can view the current server configuration with the `/config` command.

## Configuration

The following commands are grouped in the `/config` command and allow you to configure the bot for your server.

### Logs

:::usage
**`/config logs (#channel)`**
:::

The `logs` command allows you to set up a channel to:
- Report all errors,
- Log any changes made to a character.

Sending the command without the `#channel` argument will remove logging.

### Changing the result log channel

:::usage
**`/config result_channel (#channel)`**
:::

The `/config result_channel` command sets a channel to receive dice roll results instead of using a thread each time. The channel ID will then be stored in the database similarly to the `logs` command.

Sending the command without the "channel" argument will remove the results channel, similar to the `logs` command.

### Disable thread auto-Creation

:::usage
**`/config disable_threads [true/false]`**
:::

If the option is set to **true**, it disables the default creation of threads for dice rolls. Everything will be sent (without deletion) to the channel where the command was executed.

It also disables sending to the channel configured by the `/config result_channel` command, if any.

Channels and threads prefixed with `🎲` will no longer receive logs either.

Setting the option to **false** reactivates the bot's normal behavior.

### Time before message deletion

:::usage
**`/config delete_after [time]`**
:::

By default, dice roll result messages are deleted after **3** minutes. This command allows you to change the delay (up to 60 minutes) before messages are deleted.

If the value is set to **0**, messages will no longer be deleted.

This option is disabled if `/config disable_threads` is enabled.

:::tip
This command allow to have both the result log in a dedicated channel (or in threads) while keeping the result in the main channel for the players to see.
:::

## Character sheet and template management
### Delete a character/player

:::usage
**`/delete_char [@player] (*character)`**
:::

The `delete_char` command removes a character or player from the database. 

It requires:
- `[@player]` - The player's name
- `(*character)` - And/or the character's name, based on the selected user.

If no character name is provided, it will delete all data for the player. If you wish to delete only the "unnamed character" of a player, you can do so by selecting "default" from the character name list.

### Auto-Role (`/auto_role`)

:::usage
- **`/config auto_role dé (@role)`**
- **`/config auto_role stats (@role)`**
:::

These commands allow automatically adding roles when:
- A die is rolled (`/config auto_role die`)
- Statistics are validated (`/config auto_role stats`)

This notably enables the use of `/dbd` and `/dbroll` for users who actually have permission to use these two commands.

If the role is not provided, the option will be disabled.

## Game Master Dice Rolls

:::info
The two following commands allow game masters to roll dice for any registered players.
:::

:::usage
- **`/gm dbroll (@player) [statistic] (*character)`**
- **`/gm dbd (@player) (*dice name) (*character)`**
:::

Both commands are similar to [dbroll](./model#dbroll-dbroll) and [dbd](./model#dbd-dbd), but additionally require specification of the player for whom the roll is being made. As with the other commands, you can choose a character belonging to this player or leave the default choice.

## Import Data

:::usage
**`/import [csv]`**
:::

The `/import` command allows you to import data from a CSV file. You can download the template using the `/csv` command and fill it with the characters and statistics you wish to import.

:::important
- You cannot import specific dice for players; you must fill these in when the characters are imported and saved in the designated channel for sheets.
- Imported data will overwrite existing data.
- The minimum, maximum, and total points are not verified (to allow the import of characters who have gained experience or differ from others, such as monsters).
:::

## Export Data

:::usage
**`/export [csv] (private_sheet_only)`**
:::

This command allows you to export the list of characters and statistics into a CSV file. Depending on the 'private' option, the provided list will be different:
- If `false`, it will include **only** characters whose sheets are **public**.
- If `true`, it will include **only** characters whose sheets are **private**.
- If omitted, it will include **all** characters, regardless of the sheet status.

:::important
Specific dice for players are not exported. Only the value of the statistics, as well as the player ID and their character's name, are included.
:::

The exported CSV file uses a semicolon as the separator.