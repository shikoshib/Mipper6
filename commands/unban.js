exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if (message.author.bot) return;
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("BAN_MEMBERS")) return;
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply(language("PERMS_LACK"))
let id = message.content.split(" ").slice(1)
if(!id[0]) return message.reply(language("UNBAN_LACK"));
if(isNaN(id[0])) return message.reply(language("IDISNAN"))
message.guild.members.unban(id[0]);
  message.channel.send(`<@${id}> ${language("UNBAN_SUCCESS")}`)

}

exports.name = "unban"
