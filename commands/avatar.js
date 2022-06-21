const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  let user = message.mentions.users.first()
  if(!user) {
 user = message.author
  }
  let title = "Avatar"
  if(guildLanguage === "ru") {
  title = `Аватар ${user.tag}`
  } else if(guildLanguage === "en") {
  title = `${user.tag}'s avatar`
  }

let e = new Discord.MessageEmbed()
.setTitle(title)
.setColor("#807fff")
.setTimestamp()
.setImage(user.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
.setFooter(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
message.channel.send({embeds:[e]});
}

exports.name = "avatar"
