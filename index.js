const Discord = require("discord.js");
const util = require("./util");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const prefix = "--";
const sep = " ";
const commandRegExp = new RegExp(`^${prefix}(\\S*?)(?:$|\\s)(.*)`);
const client = new Discord.Client();

client.on("ready", () => {
  // client.user.setUsername("ConfessionBot").then(() => {
  console.log(`Logged in as ${client.user.tag}!`);
  // });
});

client.on("message", msg => {
  if (msg.content.indexOf(prefix) !== 0) return;
  const parsedCommand = msg.content.match(commandRegExp);

  if (parsedCommand && parsedCommand.length >= 2) {
    const command = parsedCommand[1];
    const args = parsedCommand.slice(2);
    fs.stat(path.resolve("./commands", `${command}.js`), (err, stats) => {
      if (!err && stats) {
        const msg_promise = require(`./commands/${command}.js`)(
          client,
          msg,
          args
        );
      } else {
        msg.reply(`I don\'t know how to **${command}**`);
      }
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
