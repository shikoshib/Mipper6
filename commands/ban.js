const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if (message.author.bot) return;
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("BAN_MEMBERS")) return;
 const member = message.mentions.members.first()
 if (!member) return message.reply(language("MOD_ERR"))
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply(language("PERMS_LACK"));
  if (member.id === message.author.id) return message.reply(language("BAN_SELF"));
  if (member.id === "929992928615608412") return message.reply(language("BOT_BAN")) 
    if (member.permissions.has('BAN_MEMBERS') || member.permissions.has('KICK_MEMBERS')) return message.reply(language("KICK_PERMS_ERR"))

 try {
 member.ban().then(() => {
 message.channel.send(`${member} ${language("BAN_SUCCESS")}`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send(language("BAN_ERR"))
 }
}

exports.name = "ban"
