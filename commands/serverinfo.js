const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const verificationLevels = {
    NONE: 'Отсутствует',
    LOW: 'Низкий',
    MEDIUM: 'Средний',
    HIGH: 'Высокий',
    VERY_HIGH: 'Очень высокий'
};
    const moment = require('moment');
    const servcre = new Date(message.guild.createdAt.toDateString());
    const regions = {
    brazil: 'Бразилия',
    europe: 'Европа',
    hongkong: 'Гонконг',
    india: 'Индия',
    japan: 'Япония',
    russia: 'Россия',
    singapore: 'Сингапур',
    southafrica: 'ЮАР',
    sydney: 'Сидней',
    'us-central': 'США',
    'us-east': 'США',
    'us-west': 'США',
    'us-south': 'США',
    undefined: 'Не указан'
};
    let embed = new Discord.MessageEmbed()
   .setColor("#807fff")
   .setTitle("Информация об этом сервере")
   .setDescription("В этом сообщении представлена вся информация о данном сервере.")
   .addField("Имя сервера", `${message.guild.name}`, true)
   .addField("ID сервера", `${message.guild.id}`, true)
   .addField("Уровень модерации", `${verificationLevels[message.guild.verificationLevel]}`, true)
   .addField("Регион", `${regions[message.guild.region]}`, true)
   .addField("Всего участников и ботов", `${message.guild.memberCount}`, true)
   .addField("Всего каналов", `${message.guild.channels.cache.size}`, true)
   .addField("Всего ролей", `${message.guild.roles.cache.size}`, true)
   .addField("Всего эмодзи", `${message.guild.emojis.cache.size}`, true)
   .addField("Количество бустов", `${message.guild.premiumSubscriptionCount || '0'}`, true)
    .setTimestamp()
    .setFooter(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
 message.channel.send({embeds:[embed]})
}

exports.name = "serverinfo"
