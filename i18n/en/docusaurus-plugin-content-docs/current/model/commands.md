---
title: Commands
sidebar_position: 4
---
## Dice Rolling

Both commands will benefit from an autocomplete feature for statistics (or the dice name for the `dbd` command) as well as for the character name.

### DBRoll (`/dbroll`)

The DBRoll command will have the same effects as the `/roll` command, but it will prompt you for:
- The statistic (mandatory, with autocomplete)
- The character name (with autocomplete)
- Any modifier to add to the roll (such as advantage, disadvantage, etc.)
- Replacement of the success value (e.g., for a difficult roll): Be sure to specify how the value is compared! (example: `>= 10`)
- Any comment on your action

![dbroll_1](/assets/rolls/db/dbroll_autocomplete.png)
![example](/assets/rolls/db/example.png)

### DBD (`/dbd`)

The DBD command will have the same effects as the `/roll` command, but it will prompt you for:
- The skill (mandatory, with autocomplete)
- The character name (with autocomplete)
- Any modifier to add to the roll (such as advantage, disadvantage, etc.)
- Any comment on your action.

![dbd](/assets/rolls/db/dbd_example.png)

## Logs

The "logs" command allows choosing a channel in which:
- Any error will be reported
- Any modification made to a character will be logged.

## Display

The "display" command allows viewing the statistics and dice of a character stored in the database. It will prompt you for:
- The player (accepts one user per mention)
- And/or the character name (with autocomplete).

Using both together allows choosing the character of a specific player (useful in case of duplicate character names, although this is unlikely).

![display](/assets/rolls/db/display_ex.png)

## Graph

The "graph" command is a feature that allows generating a graph based on a character's statistics. It requires:
- The player (accepts user mention)
- And/or the character's name (with auto-completion).

Using both together allows selecting a specific player's character (useful in case of duplicate character names, although this is unlikely).

Optionally, you can also specify colors with:
- `line`: for line color (default is `#0e47b2`).
- `background`: for background color (default is `#0e47b2`).

Colors can be in hexadecimal or RGB format. For example, `#FF0000` or `255,0,0`.

Finally, it's possible to set a minimum and maximum for the axes with `min` and `max`.

By default:
- The minimum will be calculated based on the server model (if available).
- The maximum will be determined as follows:
   - If a maximum is set by the template, it will be used (calculated from the list of maximums).
   - Otherwise, it will be based on the critical success value.
   - If neither of the previous options is available, it will be based on the dice value (for example, if `1d20`, the value will be 20).
   - Otherwise, it will be automatically calculated based on the user's statistics.

![graph](/assets/graph.jpg)
