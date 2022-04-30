exports.run = (client, message, args) => {
  let guildLanguages = require("./guilds-language.json");
  if(message.author.bot) return;
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("MANAGE_MESSAGES")) return;
   let repeat = message.content.split(" ").slice(1).join(" ")
    const exdemongd = client.emojis.cache.get("913587446376173598");
if(!repeat) return message.channel.send(language("SAY_LACK"))
    if(message.content === "~say ${exdemongd}") {
    message.delete().catch();
      return message.channel.send(`${exdemongd}`)
    }
message.channel.send(repeat)
}

exports.name = "say"
