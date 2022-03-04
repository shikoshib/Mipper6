const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.member || message.author;
if(!user) return

let e = new Discord.MessageEmbed()
.setTitle(`Аватар`)
.setColor("#807fff")
.setTimestamp()
.setImage(user.displayAvatarURL({dynamic: true}))
.setFooter(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
message.channel.send({embeds:[e]});
}

exports.name = "avatar"
