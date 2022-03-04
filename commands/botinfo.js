const Discord = require("discord.js");
exports.run = (client, message, args) => {
let botinfo = new Discord.MessageEmbed()
    .setAuthor("Кликните здесь, чтобы добавить бота!", "https://freepngimg.com/thumb/arrow/4-2-arrow-free-download-png-thumb.png", "https://discord.com/oauth2/authorize?client_id=929992928615608412&permissions=2147483647&scope=bot%20applications.commands")
    .setTitle("Информация о боте")
    .setDescription("Вы сейчас просматриваете информацию о боте Mipper6.")
    .setThumbnail("https://mipper6.cf/resources/Mipper6.png")
    .addField("Количество серверов с ботом", `${client.guilds.cache.size}`, true)
    .addField("Текущая версия", "1.2", true)
    .setFooter("Спасибо за использование бота! | Mipper6, 2022. Все права отсутствуют.", "https://mipper6.cf/resources/Mipper6.png")
    .setColor("#807fff")
      message.channel.send({embeds: [botinfo]})
}

exports.name = "botinfo"
