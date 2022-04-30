const express = require("express");
const app = express()
  const { token, version } = require("./info.json");

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"], allowedMentions: ["users"]});

client.on('ready', () => {
  console.log("Бот вышел на связь!");
require("http").createServer((_, res) => res.end("✅")).listen(8080)
  client.user.setStatus("dnd");
    client.user.setActivity({"name": `~help | ${client.guilds.cache.size} Servers`}, { type: 'PLAYING' });
  let commands = client.application?.commands

  commands?.create({
    name: 'ping',
    description: "Check the bot's latency.",
  })

  commands?.create({
    name: 'lorem',
    description: 'Write the Lorem Ipsum text in the chat.',
  })

  commands?.create({
    name: 'butterdog', 
    description: 'dog wit da budder',
  })

  commands?.create({
    name: 'serverinfo', 
    description: 'You can get an information about the guild with this command.',
  })

  commands?.create({
    name: "help", 
    description: "literally the help command ._."
  })
}) 

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction

  if (commandName === 'ping') {
    let guildLanguages = require("./commands/guilds-language.json");
    const guildLanguage = guildLanguages[interaction.guild.id] || "en"; 
    const language = require(`./commands/languages/${guildLanguage}.js`);
    let embedP = new Discord.MessageEmbed()
        .setTitle(`${language("LATENCY")} ${Date.now() - interaction.createdTimestamp} ${language("MS")}.`)
.setColor("#807fff")
    .setFooter(language("RIGHTS"), "https://mipper6.cf/resources/Mipper6.png")
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

  if (commandName === 'serverinfo') {
    let guildLanguages = require("./commands/guilds-language.json");
    const guildLanguage = guildLanguages[interaction.guild.id] || "en"; 
    const language = require(`./commands/languages/${guildLanguage}.js`);
  const verificationLevels = {
    NONE: `${language("NONE")}`,
    LOW: `${language("LOW")}`,
    MEDIUM: `${language("MEDIUM")}`,
    HIGH: `${language("HIGH")}`,
    VERY_HIGH: language("VERY_HIGH")
};
    const servcre = new Date(interaction.guild.createdAt.toDateString());
  var guild = interaction.guild
  const icon = guild.iconURL()
  const { createdTimestamp, ownerId, description, members, stickers } = guild;
  
    let embed = new Discord.MessageEmbed()
   .setColor("#807fff")
   .setTitle(language("GUILD_TITLE"))
   .setDescription(language("GUILD_CDESC"))
   .setThumbnail(icon)
   .addField(`${language("GUILD_NAME")}`, `${interaction.guild.name}`, true)
   .addField(`${language("GUILD_ID")}`, `${interaction.guild.id}`, true)
   .addField(`${language("GUILD_OWNER")}`, `<@${ownerId}>`, true)
   .addField(`${language("GUILD_VER")}`, `${verificationLevels[interaction.guild.verificationLevel]}`, true)
   .addField(`${language("GUILD_TIME")}`, `<t:${parseInt(createdTimestamp / 1000)}:R>`, true)
   .addField(`${language("GUILD_TOTAL")}`, `${interaction.guild.memberCount}`, true)
   .addField(`${language("GUILD_CHANNELS")}`, `${interaction.guild.channels.cache.size}`, true)
   .addField(`${language("GUILD_ROLES")}`, `${interaction.guild.roles.cache.size}`, true)
   .addField(`${language("GUILD_EMOJIS")}`, `${interaction.guild.emojis.cache.size}`, true)
   .addField(`${language("GUILD_STICKERS")}`, `${stickers.cache.size}`, true)
   .addField(`${language("GUILD_BOOST")}`, `${interaction.guild.premiumSubscriptionCount || '0'}`, true)
    .setTimestamp()
    interaction.reply({
      embeds: [embed],
    })
  }
if(commandName === "help") {
    let guildLanguages = require("./commands/guilds-language.json");
    const guildLanguage = guildLanguages[interaction.guild.id] || "en"; 
    const language = require(`./commands/languages/${guildLanguage}`);
const form = "`"
  
  let embedH = new Discord.MessageEmbed()
  .setTitle(language ("GUIDE_NAME"))
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .setDescription(language("HELP_DESC"))
  .setThumbnail("https://mipper6.cf/resources/Mipper6.png")
  .addField(`${language("MOD_CATNAME")}:`, `${form}~ban${form} ${form}~clear${form} ${form}~kick${form} ${form}~unban${form}`)
  .addField(`${language("INFO_CATNAME")}:`, `${form}~botinfo${form} ${form}~ping${form} ${form}~serverinfo${form}`)
  .addField(`${language("FUN_CATNAME")}:`, `${form}~8ball${form} ${form}~cat${form} ${form}~dog${form} ${form}~quote${form} ${form}~say${form}`)
  .addField(`📻 ${language("MUS_CATNAME")}:`, `${form}~pause${form} ${form}~play${form} ${form}~resume${form} ${form}~songinfo${form} ${form}~stop${form}`)
  .addField(`🔧 ${language("STH_CATNAME")}:`, `${form}~avatar${form} ${form}~emote${form} ${form}~emoteid${form} ${form}~lorem${form} ${form}~oir${form} ${form}~rand1-10${form} ${form}~rand1-100${form} ${form}~setlang${form}`)
  .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${version}`, "https://mipper6.cf/resources/Mipper6.png")
  interaction.reply({
    embeds: [embedH],
  })
}
  })


const fs = require("fs");
const prefix = "~"
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




client.login(token);
