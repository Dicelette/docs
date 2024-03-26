---
title: Sending message
---
The bot will detect dice notation and send the result.

Dice notation can be done in two ways:

- Directly, such as `1d20`: In this case, the "command" message will be deleted, and the result will be sent in the same channel (and logged).
![Direct](/assets/rolls/direct.gif)

- Indirectly, within brackets, like this: `my message content [1d20]`. In this case, the message will be kept, and the content within the brackets will be rolled. You'll receive a response with the result, and the log will be sent to the thread. Logs will contain a link to the original message.
![Indirect](/assets/rolls/indirect.gif)

- Semi-directly, like `1d20 My message`: Will behave the same as the direct method. The initially found die will be rolled, and the rest of the message will be sent to the log and considered a comment.
![Semi-Direct](/assets/rolls/semi-direct.gif)