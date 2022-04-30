const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  let embedP = new Discord.MessageEmbed()
        .setTitle(`${language("LATENCY")} ${Date.now() - message.createdTimestamp} ${language("MS")}.`)
            .setAuthor(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
.setColor("#807fff")
    .setFooter(language("RIGHTS"), "https://mipper6.cf/resources/Mipper6.png")
      message.channel.send({embeds:[embedP]});
}

exports.name = "ping"
