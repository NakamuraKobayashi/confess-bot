# ConfessionsBot

### Anonymously send confessions to your favorite discord server.

This only works on one server right now, sorry. You can add it anyways.

Add URL: https://discordapp.com/oauth2/authorize?client_id=467129885622665248&scope=bot&permissions=16

Note: auto select guild by

1. Go through the list of guilds this bot is on
2. Search the user list of each guild, try to find current user we are dming with
3. create list
4. if list.length === 0, return error
5. if list.length === 1, send
6. if list.length > 1, ask to clarify (send new command with the name of the guild in it)
