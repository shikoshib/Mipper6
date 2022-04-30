const { MessageEmbed } = require("discord.js");
const axios = require("axios");
exports.run = async (client, message, args) => {
  if(message.author.bot) return;
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ).then(async (response) => {
    try {
    this.image = response.data[0]
    let embed = new MessageEmbed()
    .setImage(this.image.url)
    .setColor("#807fff")
    .setFooter(language("RIGHTS"), "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed]})
    } catch (err) {
    if (err.response) {
        return message.reply(" 🚫 Something went wrong")
    } else if (err.request) {
        return message.reply(" 🚫 Something went wrong")
    } else {
        return message.reply(" 🚫 Something went wrong")
    }
}
  });
  }
