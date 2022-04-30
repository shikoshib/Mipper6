const Discord = require("discord.js");
const { emoji4 } = require("../info.json");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
  let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  
      var randomQ = Math.floor(Math.random() * 18) + 1;

        if (randomQ === 1) {
        message.channel.send('Lulumba 🙂')
        } else if (randomQ === 2) {
        message.channel.send(language("QUOTE_TWO"))
    } else if (randomQ === 3) {
        message.channel.send(language("QUOTE_THREE"))
  } else if (randomQ === 4) {
        message.channel.send(language("QUOTE_FOUR"))
  } else if (randomQ === 5) {
        message.channel.send(language("QUOTE_FIVE"))
        } else if (randomQ === 6) {
        message.channel.send(language("QUOTE_SIX"))
  } else if (randomQ === 7) {
        message.channel.send(language("QUOTE_SEVEN"))
  } else if (randomQ === 8) {
        message.channel.send(language("QUOTE_EIGHT"))
  } else if (randomQ === 9) {
          message.channel.send('what you know about rollin down in the deep')
  } else if (randomQ === 10) {
          message.channel.send(language("QUOTE_NINE"))
   } else if (randomQ === 11) {
          message.channel.send('أنا أحب ذلك عندما شعر الرجال الحصول على لطخت مع النفط')
   } else if (randomQ === 12) {
          message.channel.send(language("QUOTE_TEN"))
   } else if (randomQ === 13) {
          message.channel.send(language("QUOTE_ELEVEN"))
   } else if (randomQ === 14) {
   const thonk = client.emojis.cache.get("913411955233017887");       
          message.channel.send(`${language("QUOTE_TWELVE")} ${thonk}`)
   } else if (randomQ === 15) {
          message.channel.send(language("QUOTE_FOURTEEN"))
   } else if (randomQ === 16) {
          message.channel.send(language("QUOTE_FIFTEEN")) 
        } else if (randomQ === 17) {
          let rickroll = new Discord.MessageEmbed()
          .setTitle(language("QUOTE_THIRTEEN"))
          .setImage("https://mipper6.cf/resources/qr%20kowka.gif")
          .setColor("#807fff")
          .setFooter(language("QUOTE_THIRTEEN_FOOTER"))
          message.channel.send({embeds: [rickroll]})
        } else if(randomQ === 18) {
          message.channel.send(`${language("QUOTE_SIXTEEN")} ${emoji4}`)
        }
}

exports.name = "quote"
