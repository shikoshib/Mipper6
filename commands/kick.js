const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("KICK_MEMBERS")) return;
 const member = message.mentions.members.first()
 if (!member) return message.reply(language("MOD_ERR"))
 if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply(language("PERMS_LACK"))
 if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.reply(language("KICK_PERMS_ERR"))

 try {
 member.kick().then(() => {
 message.channel.send(`${member} ${language("KICK_SUCCESS")}`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send(language("BAN_ERR"))
 }
}

exports.name = "kick"
