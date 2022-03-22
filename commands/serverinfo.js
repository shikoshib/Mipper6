const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const verificationLevels = {
    NONE: `${language("NONE")}`,
    LOW: `${language("LOW")}`,
    MEDIUM: `${language("MEDIUM")}`,
    HIGH: `${language("HIGH")}`,
    VERY_HIGH: `${language(" VERY_HIGH")}`
};
    const servcre = new Date(message.guild.createdAt.toDateString());

  
  var guild = message.guild
  const icon = guild.iconURL()
  const { createdTimestamp, ownerId, description, members, stickers } = guild;
  
    let embed = new Discord.MessageEmbed()
   .setColor("#807fff")
   .setTitle(language("GUILD_TITLE"))
   .setDescription(language("GUILD_CDESC"))
   .setThumbnail(icon)
   .addField(`${language("GUILD_NAME")}`, `${message.guild.name}`, true)
   .addField(`${language("GUILD_ID")}`, `${message.guild.id}`, true)
   .addField(`${language("GUILD_OWNER")}`, `<@${ownerId}>`, true)
   .addField(`${language("GUILD_VER")}`, `${verificationLevels[message.guild.verificationLevel]}`, true)
   .addField(`${language("GUILD_TIME")}`, `<t:${parseInt(createdTimestamp / 1000)}:R>`, true)
   .addField(`${language("GUILD_TOTAL")}`, `${message.guild.memberCount}`, true)
   .addField(`${language("GUILD_CHANNELS")}`, `${message.guild.channels.cache.size}`, true)
   .addField(`${language("GUILD_ROLES")}`, `${message.guild.roles.cache.size}`, true)
   .addField(`${language("GUILD_EMOJIS")}`, `${message.guild.emojis.cache.size}`, true)
   .addField(`${language("GUILD_STICKERS")}`, `${stickers.cache.size}`, true)
   .addField(`${language("GUILD_BOOST")}`, `${message.guild.premiumSubscriptionCount || '0'}`, true)
    .setTimestamp()
    .setFooter(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
 message.channel.send({embeds:[embed]})
}

exports.name = "serverinfo"
