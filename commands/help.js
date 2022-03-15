const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.content.toLowerCase() === "~help 1") {
    let embed1 = new Discord.MessageEmbed()
 .setTitle("🛡️ Модерация")
 .setAuthor("Все обновления на сайте!", "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~ban`", "забанить участника")
  .addField("`~clear`", "очистить сообщения в чате")
  .addField("`~kick`", "кикнуть участника")
  .addField("`~unban`", "разбанить участника")
 .setColor("#807fff")
 .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.3", "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed1]});
  }
  
  if(message.content.toLowerCase() === "~help 2") {
    let embed2 = new Discord.MessageEmbed()
 .setTitle("📋 Информация")
 .setAuthor("Все обновления на сайте!", "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~botinfo`", "информация о боте")
  .addField("`~ping`", "узнать задержку бота")
  .addField("`~serverinfo`", "узнать информацию о сервере")
 .setColor("#807fff")
 .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.3", "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed2]});
  }
  
  if(message.content.toLowerCase() === "~help 3") {
    let embed3 = new Discord.MessageEmbed()
 .setTitle("😃 Развлечения")
 .setAuthor("Все обновления на сайте!", "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~8ball`", "шар судьбы")
  .addField("`~quote`", "высказать «мудрую» фразу")
  .addField("`~say`", "повторить сообщение от лица бота")
 .setColor("#807fff")
 .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.3", "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed3]});
  }
  
  if(message.content.toLowerCase() === "~help 4") {
    let embed4 = new Discord.MessageEmbed()
 .setTitle("⚙️ Прочее")
 .setAuthor("Все обновления на сайте!", "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~avatar`", "получить аватар участника")
  .addField("`~lorem`", "написать текст Lorem Ipsum")
  .addField("`~oir`", "подбросить монету")
  .addField("`~rand1-10`", "получить случайное число от 1 до 10")
  .addField("`~rand1-100`", "получить случайное число от 1 до 100")
 .setColor("#807fff")
 .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.3", "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed4]});
  }
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Помощь по боту")
 .setAuthor("Все обновления на сайте!", "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .setDescription("Это справка по всем командам бота.")
  .setThumbnail("https://mipper6.cf/resources/Mipper6.png")
  .addField("🛡️ Модерация:", "`~ban` `~clear` `~kick` `~unban` (подробнее: ~help 1)")
  .addField("📋 Информация:", "`~botinfo` `~ping` `~serverinfo` (подробнее: ~help 2)")
  .addField("😃 Развлечения:", "`~8ball` `~quote` `~say` (подробнее: ~help 3)")
  .addField("⚙️ Прочее:", "`~avatar` `~lorem` `~oir` `~rand1-10` `~rand1-100` (подробнее: ~help 4)")
  .setColor("#807fff")
  .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.3", "https://mipper6.cf/resources/Mipper6.png")
message.channel.send({embeds:[embed]})
}

exports.name = "help"
