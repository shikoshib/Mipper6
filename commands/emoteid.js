const { MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
  let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const Emoji = args[0]
  if(!Emoji) return message.reply(language("EMOTE_ID_LACK"))
  if(isNaN(Emoji)) return message.reply(language("IDISNAN"))
const url = `https://cdn.discordapp.com/emojis/${Emoji}.png`;
let embed = new MessageEmbed()
  .setFooter(`ID: ${Emoji} | ${language("RIGHTS")}`, "https://mipper6.cf/resources/Mipper6.png")
  .setImage(url)
  .setAuthor(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
.setColor("#807fff") 
message.channel.send({embeds:[embed]})
}
