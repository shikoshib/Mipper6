//TXkgY29kZW5hbWUgaXMgR01EU0hYRE9X
const express = require("express");
const app = express()
  const { token, prefix } = require("./info.json");

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_PRESENCES"], allowedMentions: ["users"]});

client.on('ready', () => {
  console.log("Бот вышел на связь!");
require("http").createServer((_, res) => res.end("✅")).listen(8080)
  client.user.setStatus("dnd");
  
  function randomizePresence() {
  const presenceList = ["Node.js", "h", "Geometry Dash", "why are you reading this", "discord.js", "Discord", "Google Chrome", "🧐", "🇷🇺", "@everyone ping fail", "Internet Explorer", "FL Studio", "floppa", "جورب القط", "fbi open up", "discord presence", "knock knock", "https://mipper6.cf", "+15 social credit", "мшк фреде", "кот носок", "кит ты маму мав", "nothing", "yes", "talking ben", "🧱", "зинвайр обосрался)", "хорошую игру", "Powered by Nothing™️", "приморскую мафию", "смертную казнь Dimmer7)", "тостер", "да вы чё томатный сок топ"]
      var randomPresence = presenceList[Math.floor(Math.random() * (presenceList.length))];
    client.user.setActivity({"name": `${randomPresence} | ~help | ${client.guilds.cache.size} Servers`}, { type: 'PLAYING' });
  }
  
  setInterval(randomizePresence, 120000);
}) 

const fs = require("fs");
client.commands = new Discord.Collection();
const format = ".js"
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(format))
for(file of commands) {
const hcommandName = file.split(".")[0]
const command = require(`./commands/${hcommandName}${format}`)
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
const args = message.content.slice(prefix.length).trim().split(/ +/g)
  if(message.content.toLowerCase() === "~guildinfo") {
const command = client.commands.get("serverinfo")
    command.run(client, message, args)
  }
  if(message.content.toLowerCase() === "~np" || message.content.toLowerCase() === "~nowplaying") {
const command = client.commands.get("songinfo")
    command.run(client, message, args)
  }
  if(message.content.toLowerCase() === "бравл старс топ" ) {
    message.channel.send("заткнись");
}
  if(message.content.toLowerCase() === "ты клоун") {
    message.channel.send("нет ты");
}
  if(message.content.toLowerCase() === "я из детдома") {
    message.channel.send("+");
}
  if(message.content.toLowerCase() === "клей") {
    message.channel.send("выпей баночку соплей");
  }
if(message.content.toLowerCase() === "йелк") {
  message.channel.send("йелпос укчонаб йепыв");
}
  if(message.content === ("<@929992928615608412>")) {
      var msgs = ["Привет @everyone!", "На данный момент я функционирую.", "Я родился!", "Меня кто-то звал? В любом случае, мой префикс `~`."]
      var randomHi = msgs[Math.floor(Math.random() * (msgs.length))];
    message.channel.send(randomHi);
  }
})

client.login(token);
