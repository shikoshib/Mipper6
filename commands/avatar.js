const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  let user = message.mentions.users.first() || message.member || message.author;
if(!user) return

let e = new Discord.MessageEmbed()
.setTitle(language("AVATAR"))
.setColor("#807fff")
.setTimestamp()
.setImage(user.displayAvatarURL({dynamic: true}))
.setFooter(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
message.channel.send({embeds:[e]});
}

exports.name = "avatar"
