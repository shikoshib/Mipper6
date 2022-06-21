const { MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  let channel = message.mentions.channels.first() || message.channel;
  const clientMember = message.guild.members.cache.get(client.user.id);
  if(!clientMember.permissions.has("CREATE_INSTANT_INVITE")) return;
  channel.createInvite({ maxAge: 0, maxUses: 0 }).then((invite) => {
    const msg = new MessageEmbed()
    .setTitle(`✅ ${language("DONE")}!`)
    .setDescription(`${language("INVITE_LINK")}: ${invite}\n${language("CHANNEL")}: <#${channel.id}>`)
    .setColor("#807fff")
    message.channel.send({embeds:[msg]})
  });
}
