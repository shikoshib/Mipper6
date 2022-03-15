const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const verificationLevels = {
    NONE: 'Отсутствует',
    LOW: 'Низкий',
    MEDIUM: 'Средний',
    HIGH: 'Высокий',
    VERY_HIGH: 'Очень высокий'
};
    const servcre = new Date(message.guild.createdAt.toDateString());

  
  var guild = message.guild
  const icon = guild.iconURL()
  const { createdTimestamp, ownerId, description, members, stickers } = guild;
  
    let embed = new Discord.MessageEmbed()
   .setColor("#807fff")
   .setTitle("Информация об этом сервере")
   .setDescription(`В этом сообщении представлена вся информация о данном сервере.`)
   .setThumbnail(icon)
   .addField("Имя сервера", `${message.guild.name}`, true)
   .addField("ID сервера", `${message.guild.id}`, true)
   .addField("Владелец", `<@${ownerId}>`, true)
   .addField("Уровень модерации", `${verificationLevels[message.guild.verificationLevel]}`, true)
   .addField("Дата создания", `<t:${parseInt(createdTimestamp / 1000)}:R>`, true)
   .addField("Всего участников и ботов", `${message.guild.memberCount}`, true)
   .addField("Всего каналов", `${message.guild.channels.cache.size}`, true)
   .addField("Всего ролей", `${message.guild.roles.cache.size}`, true)
   .addField("Всего эмодзи", `${message.guild.emojis.cache.size}`, true)
   .addField("Всего стикеров", `${stickers.cache.size}`, true)
   .addField("Количество бустов", `${message.guild.premiumSubscriptionCount || '0'}`, true)
    .setTimestamp()
    .setFooter(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
 message.channel.send({embeds:[embed]})
}

exports.name = "serverinfo"
