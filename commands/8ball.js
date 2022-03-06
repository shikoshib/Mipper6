const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let que = message.content.split(" ").slice(1).join(" ")
  if(!que) return message.channel.send("Вы не указали вопрос.");
  var ans = [
    'Да', 'Определённо', 'И не мечтай', 'Нет', '50/50', 'Возможно', 'Спроси ещё раз', 'Скорее, нет'
];

var RandAns = ans[Math.floor(Math.random() * (ans.length))];
let em = new Discord.MessageEmbed()
  .setAuthor(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
  .setColor("#807fff")
  .setFooter("Mipper6, 2022. Все права отсутствуют.", "https://mipper6.cf/resources/Mipper6.png")
  .addField("Ваш вопрос:", `${que}`)
  .addField("Ответ:", `${RandAns}`)
message.channel.send({embeds:[em]})
  }

exports.name = "8ball"
