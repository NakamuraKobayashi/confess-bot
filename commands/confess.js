module.exports = (client, msg, args, opts = {}) => {
  if (msg.channel.type === "dm") {
    let targetGuild = client.guilds
      .filter(g => g.name.indexOf("lima") === 0)
      .first();

    // debug
    if (!targetGuild) {
      const targetGuild = client.guilds
        .filter(g => g.name.indexOf("And") === 0)
        .first();
    }

    if (!targetGuild) {
      console.log(client.guilds.map(g => g.name));
      return msg.channel.send("I can't find a guild to post to!");
    }

    const targetChannel = targetGuild.channels
      .filter(c => c.name.indexOf("confessions") === 0)
      .first();

    if (targetChannel) {
      if (opts.public) {
        msg.channel.send(`bold. :sunglasses:`);
      } else {
        msg.channel.send(`shhh! :zipper_mouth:`);
      }
      return targetChannel.send(
        `\`Confession from [${
          opts.public ? msg.author.username : "???"
        }]:\` ${args}`
      );
    } else {
      return msg.channel.send(
        `there isn\'t a #confessions channel in ${targetGuild.name}!`
      );
    }
  } else {
    return msg.reply("Yo! Dm me that shit!");
  }
};
