const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let embedP = new Discord.MessageEmbed()
        .setTitle(`Задержка составляет ${Date.now() - message.createdTimestamp} мс.`)
            .setAuthor(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
.setColor("#807fff")
    .setFooter("Mipper6, 2022. Все права отсутствуют.", "https://mipper6.cf/resources/Mipper6.png")
      message.channel.send({embeds:[embedP]});
}

exports.name = "ping"
