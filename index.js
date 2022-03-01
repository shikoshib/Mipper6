const express = require("express");
const app = express()
const config = require('./config.json');

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"], allowedMentions: ["users"]});

const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "MANAGE_MESSAGES",
    ]


client.on('ready', () => {
 client.user.setActivity({"name": '(дри)S.T.A.L.K.E.R: Зов черкашей'}, { type: 'PLAYING' })
}) 

  
client.on("messageCreate", message => {
if(message.content === "~lorem") {
message.channel.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
}
})

client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "бравл старс топ" ) {
    message.channel.send("заткнись");
}
  if(message.content.toLowerCase() === "ты клоун") {
    message.channel.send("нет ты");
}
  if(message.content.toLowerCase() === "я из детдома") {
    message.channel.send("+");
}
})


client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith('~kick')) {
    const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("KICK_MEMBERS")) return;
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('Вы не указали, кого кикнуть.')
 if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('Вы на данный момент не имеете права делать это.')
 if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send('Участник, которого вы указали, является модератором (имеет право кикать или банить людей).')

 try {
 member.kick().then(() => {
 message.channel.send(`${member} был успешно кикнут.`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Что-то пошло не так, повторите попытку.')
 }
} 
})

client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith('~ban')) {
    const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("BAN_MEMBERS")) return;
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('Вы не указали, кого забанить.')
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('Вы на данный момент не имеете права делать это.')
 if (member.permissions.has('BAN_MEMBERS') || member.permissions.has('KICK_MEMBERS')) return message.channel.send('Участник, которого вы указали, является модератором (имеет право кикать или банить людей).')

 try {
 member.ban().then(() => {
 message.channel.send(`${member} был успешно забанен.`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Что-то пошло не так, повторите попытку.')
 }
} 
})



client.on("messageCreate", message => {
  if(message.content.toLowerCase().startsWith("~oir")) {
    message.channel.send('Подбрасываю монету...')

      var random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

        if (random === 1) { // Если вычислено число 1, то выпадает орёл.
        message.channel.send('Орёл!')
        } else if (random === 2) { // Если вычислено число 2, то выпадает решка.
        message.channel.send('Решка!')
        } else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
        message.channel.send('Монета упала ребром, попробуйте ещё раз!')
    }
  }
})


client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "~amogus") {
    const r = (e, r) => { return e.repeat(r) }
message.channel.send({ embeds: [{ 
title: 'amoSUS 😳',
description: `${ 
r('⬛', 17) +'\n'+ 
r('⬛',5) + r('⬜',3) + r('⬛',1) + r('⬜',1) +  r('⬛',1) +  r('⬜',1) +  r('⬛',1) +  r('⬜',3) +  r('⬛',1) +'\n'+ 
r('⬛', 1) + r('🟥', 3) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) +'\n'+ 
r('⬛', 1) + r('🟥', 1) + r('🟦', 2) + r('⬛', 1) + r('⬜', 3) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 3) + r('⬛', 1) + '\n' + 
r('⬛', 1) + r('🟥', 3) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + '\n' + 
r('⬛',1) + r('🟥', 1) + r('⬛',1) + r('🟥', 1) + r('⬛',1) + r('⬜',3) + r('⬛',1) + r('⬜',3)+ r('⬛',1) + r('⬜',3) + r('⬛',1) +'\n'+ 
r('⬛', 17)
}` }]
})
}})

client.on("messageCreate", message => {
 if(message.content.toLowerCase() === "~help") {
  let embed = new Discord.MessageEmbed()
 .setTitle("Помощь по боту")
 .setAuthor("Все обновления в Twitter!", "https://cdn-icons-png.flaticon.com/512/124/124021.png", "https://twitter.com/@Mipper6")
 .setDescription("Это полный список команд бота Mipper6. Все команды выполняются с префиксом **~**")
 .setColor("#807fff")
 .setFooter("Mipper6, 2022. Все права отсутствуют. | Текущая версия бота: 1.0.1", "https://mipper6.cf/resources/Mipper6.png")
 .addField("avatar", "получить аватарку участника")
 .addField("ban", "забанить участника")
 .addField("clear", "очистить определённое количество сообщений")
 .addField("kick", "кикнуть участника")
 .addField("lorem", "написать текст Lorem Ipsum")
 .addField("oir", "подбросить монету")
 .addField("ping", "проверить задержку бота")
 .addField("quote", "высказать «мудрую» фразу")
 .addField("say", "повторить ваше сообщение от лица бота")
message.channel.send({embeds:[embed]})
}})



client.on("messageCreate", message => {
 if(message.content.toLowerCase().startsWith("~clear")) {
   if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Вы на данный момент не имеете права делать это.");
   const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("MANAGE_MESSAGES")) return;
  const arggs = message.content.split(' ').slice(1);
  const amount = arggs.join(' ');
  if (!amount) return message.channel.send('Вы не указали, сколько сообщений нужно удалить.');
  if (isNaN(amount)) return message.channel.send('Это не число!');
  if (amount > 100) return message.channel.send('Вы не можете удалить больше 100 сообщений за раз.');
  if (amount < 1) return message.channel.send('Вы должны ввести число больше, чем 1.');

  async function delete_messages() {
  await message.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        message.channel.bulkDelete(messages, true);
          let embedcl = new Discord.MessageEmbed()
        .setTitle(`✅ Успешно удалено ${amount} сообщений`)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor("#807fff")
    .setDescription("Сообщения двухнедельной давности были проигнорированы.")
        message.channel.send({embeds:[embedcl]})
    
    })
};
delete_messages();
  }
 })



client.on("messageCreate", message => {
  if(message.content.startsWith("~say")) {
    const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("MANAGE_MESSAGES")) return;
   let repeat = message.content.split(" ").slice(1).join(" ")
    const exdemongd = client.emojis.cache.get("913587446376173598");
if(!repeat) return message.channel.send("Вы не указали, что повторить.")
if(message.content.startsWith("~say ~clear")) return
    if(message.content === "~say ${exdemongd}") return message.channel.send(`${exdemongd}`)
    if(message.content.startsWith("~say ~ban")) return
    if(message.content.startsWith("~say ~kick")) return
if(message.content.startsWith("~say ~say")) return
message.delete().catch();
message.channel.send(repeat)
  } 
})

   
client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "клей") {
    message.channel.send("выпей баночку соплей")
  }
  if(message.content.toLowerCase().startsWith("~quote")) {

      var randomQ = Math.floor(Math.random() * 18) + 1;

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
          message.channel.send("Скажи клей") } else if (randomQ === 17) {
          let rickroll = new Discord.MessageEmbed()
          .setTitle("Отсканируй =)")
          .setImage("https://mipper6.cf/resources/qr%20kowka.gif")
          .setColor("#807fff")
          .setFooter("пж")
          message.channel.send({embeds: [rickroll]})
        }
  }})


client.on("messageCreate", message => {
  if (message.content.toLowerCase() === "~ping") {  
    let embedP = new Discord.MessageEmbed()
        .setTitle(`Задержка составляет ${Date.now() - message.createdTimestamp} мс.`)
            .setAuthor(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
.setColor("#807fff")
      message.channel.send({embeds:[embedP]});
  }
});

client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "<@929992928615608412> help") {
    message.channel.send("~help")}
})
 


client.on("messageCreate", message => {
  if(message.content === ("<@929992928615608412>")) {

      var randomHi = Math.floor(Math.random() * 4) + 1;

        if (randomHi === 1) {
        message.channel.send("Привет @everyone!") 
        } else if (randomHi === 2) {
          message.channel.send("На данный момент я функционирую.")
        } else if (randomHi === 3) {
          message.channel.send("Я родился!")
        }
  }})



client.on("messageCreate", message => {
if(message.content.toLowerCase().startsWith("~avatar")) {
let user = message.mentions.users.first() || message.member || message.author;
if(!user) return
let e = new Discord.MessageEmbed()
.setTitle(`Аватар ${user.username}`)
.setColor("#807fff")
.setTimestamp()
.setImage(user.displayAvatarURL({dynamic: true}))
.setFooter(`Запросил ${message.author.username}`, message.author.displayAvatarURL())
message.channel.send({embeds:[e]});
}; 
})


client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "~pong") {
    message.channel.send("https://mipper6.cf/resources/duein-skala-johnson-i-chto-ty-tut-delaesh.gif")
  }
})
