const { MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  var botChoiceMassive = [language("ROCK"), language("SCISSORS"), language("PAPER")];
  var botChoice = botChoiceMassive[Math.floor(Math.random() * (botChoiceMassive.length))];
  const userChoice = message.content.split(" ").slice(1).join(" ");
  
  const noChoice = new MessageEmbed()
  .setTitle(language("RPS_CHOICE_LACK"))
  .setDescription(`${language("RPS_POSSIBLE_ANSWERS")}\n• **${language("ROCK")}**\n• **${language("SCISSORS")}**\n• **${language("PAPER")}**`)
  .setColor("#807fff")

  if(!botChoiceMassive.includes(userChoice) || !userChoice) return message.reply({embeds:[noChoice]});

const win = new MessageEmbed()
.setTitle(`✅ ${language("RPS_YOU_WON")}`)
.setDescription(`${language("RPS_BOT_CHOICE")} **${botChoice}**\n${language("RPS_USER_CHOICE")} **${userChoice}**`)
.setColor("#807fff")

const draw = new MessageEmbed()
.setTitle(`⚠ ${language("RPS_DRAW")}`)
.setDescription(`${language("RPS_BOT_CHOICE")} **${botChoice}**\n${language("RPS_USER_CHOICE")} **${userChoice}**`)
.setColor("#807fff")

const lose = new MessageEmbed()
.setTitle(`❌ ${language("RPS_YOU_LOSE")}`)
.setDescription(`${language("RPS_BOT_CHOICE")} **${botChoice}**\n${language("RPS_USER_CHOICE")} **${userChoice}**`)
.setColor("#807fff")
  
  if(userChoice === language("ROCK") && botChoice === language("ROCK")) return message.reply({embeds:[draw]})
  
  if(userChoice === language("ROCK") && botChoice === language("SCISSORS")) return message.reply({embeds:[win]})
  
  if(userChoice === language("ROCK") && botChoice === language("PAPER")) return message.reply({embeds:[lose]})
  
  if(userChoice === language("SCISSORS") && botChoice === language("SCISSORS")) return message.reply({embeds:[draw]})
  
  if(userChoice === language("SCISSORS") && botChoice === language("ROCK")) return message.reply({embeds:[lose]})
  
  if(userChoice === language("SCISSORS") && botChoice === language("PAPER")) return message.reply({embeds:[win]})
  
  if(userChoice === language("PAPER") && botChoice === language("PAPER")) return message.reply({embeds:[draw]})
  
  if(userChoice === language("PAPER") && botChoice === language("SCISSORS")) return message.reply({embeds:[lose]})
  
  if(userChoice === language("PAPER") && botChoice === language("ROCK")) return message.reply({embeds:[win]})
}
