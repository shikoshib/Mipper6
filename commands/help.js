const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let embed = new Discord.MessageEmbed()
 .setTitle("Помощь по боту")
 .setAuthor("Все обновления на сайте!", "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
 .setDescription("Это полный список команд бота Mipper6. Все команды выполняются с префиксом **~**")
 .setColor("#807fff")
 .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.2", "https://mipper6.cf/resources/Mipper6.png")
 .addField("avatar", "получить аватарку участника")
 .addField("ban", "забанить участника")
 .addField("botinfo", "информация о боте")
 .addField("clear", "очистить определённое количество сообщений")
 .addField("kick", "кикнуть участника")
 .addField("lorem", "написать текст Lorem Ipsum")
 .addField("oir", "подбросить монету")
 .addField("ping", "проверить задержку бота")
 .addField("quote", "высказать «мудрую» фразу")
    .addField("rand1-10", "случайное число от 1 до 10")
    .addField("rand1-100", "случайное число от 1 до 100")
    .addField("say", "повторить ваше сообщение от лица бота")
 .addField("serverinfo", "узнать информацию о сервере")
message.channel.send({embeds:[embed]})
}

exports.name = "help"
