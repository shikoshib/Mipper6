const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);

  var coin = [
    language("HEADS"), language("TAILS"), language("COIN_ERR")
  ]
  var coinResult = coin[Math.floor(Math.random() * (coin.length))];
  message.channel.send(language("COIN_TOSS")).then(m =>{
 m.edit(coinResult)
  });
}

exports.name = "oir"
