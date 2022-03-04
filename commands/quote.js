const Discord = require("discord.js");
exports.run = (client, message, args) => {
      var randomQ = Math.floor(Math.random() * 17) + 1;

        if (randomQ === 1) {
        message.channel.send('Lulumba 🙂')
        } else if (randomQ === 2) {
        message.channel.send('Дорога шла вперёд, солнце светило, шкаф коричневый.')
    } else if (randomQ === 3) {
        message.channel.send('ъ')
  } else if (randomQ === 4) {
        message.channel.send('«Я такого не говорил» © Mipper6')
  } else if (randomQ === 5) {
        message.channel.send('Интересный факт: если люди скажут, что они играют с читами, то все узнают, что они читеры.')
        } else if (randomQ === 6) {
        message.channel.send('не обязан')
  } else if (randomQ === 7) {
        message.channel.send('RobTop ленивая срака')
  } else if (randomQ === 8) {
        message.channel.send('Кто как обзывается, тот сам так и называется')
  } else if (randomQ === 9) {
          message.channel.send('what you know about rollin down in the deep')
  } else if (randomQ === 10) {
          message.channel.send('но но но фир но лей')
   } else if (randomQ === 11) {
          message.channel.send('أنا أحب ذلك عندما شعر الرجال الحصول على لطخت مع النفط')
   } else if (randomQ === 12) {
          message.channel.send('если да, то это точно не нет')
   } else if (randomQ === 13) {
          message.channel.send('Плюсы и минусы болеть. Плюсы: ты болеешь. Минусы: ты болеешь')
   } else if (randomQ === 14) {
   const thonk = client.emojis.cache.get("913411955233017887");       
          message.channel.send(`почему все хотят стать трусиками доры ${thonk}`)
   } else if (randomQ === 15) {
          message.channel.send("Короче пацаны рецепт оладушек. Кефир 2,5% - 500 мл. Мука - 3 стакана. Яйцо - 1 шт. Сахарок - 2 ст.л. Сода - 1 ч.л. Соль- ч.л.")
   } else if (randomQ === 16) {
          message.channel.send("Скажи клей") 
        } else if (randomQ === 17) {
          let rickroll = new Discord.MessageEmbed()
          .setTitle("Отсканируй =)")
          .setImage("https://mipper6.cf/resources/qr%20kowka.gif")
          .setColor("#807fff")
          .setFooter("пж")
          message.channel.send({embeds: [rickroll]})
        }
}

exports.name = "quote"
