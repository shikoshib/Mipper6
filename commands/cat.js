const { MessageEmbed } = require("discord.js");
const axios = require("axios");
exports.run = async (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  axios
  .get("https://aws.random.cat/meow")
  .then(async (response) => {
    const { data } = response;
    let embed = new MessageEmbed()
    .setImage(data.file)
    .setColor("#807fff")
    .setFooter(language("RIGHTS"), "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed]})
  });
  }
