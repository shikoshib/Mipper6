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
   client.user.setStatus("dnd");

  let commands = client.application?.commands

  commands?.create({
    name: 'ping',
    description: 'Проверить задержку бота.',
  })

  commands?.create({
    name: 'lorem',
    description: 'Написать полный текст Lorem Ipsum.',
  })

  commands?.create({
    name: 'butterdog', 
    description: 'dog wit da budder',
  })
}) 

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction

  if (commandName === 'ping') {
    let embedP = new Discord.MessageEmbed()
        .setTitle(`Задержка составляет ${Date.now() - interaction.createdTimestamp} мс.`)
.setColor("#807fff")
    .setFooter("Mipper6, 2022. Все права отсутствуют.", "https://mipper6.cf/resources/Mipper6.png")
    interaction.reply({
      embeds: [embedP],
    })
  }

  if (commandName === 'lorem') {
    interaction.reply({
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    })
  }

  if (commandName === 'butterdog') {
interaction.reply({
  content: 'https://mipper6.cf/resources/butterdog.mp4',
})
}
  
  })




const fs = require("fs");
const prefix = "~"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for(file of commands) {
const hcommandName = file.split(".")[0]
const command = require(`./commands/${hcommandName}`)
client.commands.set(hcommandName, command)
}

client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
const args = message.content.slice(prefix.length).trim().split(/ +/g)
const hcommandName = args.shift()
const command = client.commands.get(hcommandName)
if(!command) return
command.run(client, message, args) 
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
  if(message.content.toLowerCase() === "клей") {
    message.channel.send("выпей баночку соплей");
  }
if(message.content.toLowerCase() === "йелк") {
  message.channel.send("йелпос укчонаб йепыв");
}
})


client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "<@929992928615608412> help") {
    message.channel.send("~help")
  }
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
