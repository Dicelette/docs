The following commands are restricted by default to members with the `Manage Roles` permission.

## General
### Logs

<u>Usage</u>: `/logs <channel>`

The `logs` command allows you to set up a channel to:
- Report all errors,
- Log any changes made to a character.

Sending the command without the "channel" argument will remove logging.

### Changing the Results Channel (`/result_channel`)

<u>Usage</u>: `/result_channel <channel>`

The `/result_channel` command sets a channel to receive dice roll results instead of using a thread each time. The channel ID will then be stored in the database similarly to the `logs` command.

Sending the command without the "channel" argument will remove the results channel, similar to the `logs` command.

### Character Sheet and Template

### Delete a Character/Player (`/delete_char`)
The `delete_char` command removes a character or player from the database. It requires:
- The player's name
- And/or the character's name

If no character name is provided, it will delete all data for the player. If you wish to delete only the "unnamed character" of a player, you can do so by selecting "default" from the character name list.

### Auto-Role (`/auto_role`)
These commands allow automatically adding roles when:
- A die is rolled (`/auto_role die`)
- Statistics are validated (`/auto_role stats`)

This notably enables the use of `/dbd` and `/dbroll` for users who actually have permission to use these two commands.

Both commands accept the same option: a role (`@role`). Without the option, it will simply disable auto-role.