const express = require("express");
const app = express()
const config = require('./config.json');

require("http").createServer((_, res) => res.end("черкаши вкусные")).listen(8080)

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
}) 


const fs = require("fs");
const prefix = "~"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for(file of commands) {
const commandName = file.split(".")[0]
const command = require(`./commands/${commandName}`)
client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
const args = message.content.slice(prefix.length).trim().split(/ +/g)
const commandName = args.shift()
const command = client.commands.get(commandName)
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
    message.channel.send("выпей баночку соплей")
  }})


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
