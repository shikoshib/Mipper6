const { Util, MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const rawEmoji = args[0]
  const { form, fimgl } = require("../info.json");
  if(!rawEmoji) return message.reply(language("EMOTE_LACK"))
const emoji = Util.parseEmoji(rawEmoji);

if(emoji.id) {
const ext = emoji.animated ? ".gif" : ".png";
const url = `https://cdn.discordapp.com/emojis/${emoji.id + ext}`;
let embed = new MessageEmbed()
  .setFooter(`ID: ${emoji.id} | ${language("RIGHTS")}`, fimgl)
  .setImage(url)
  .setAuthor(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
.setColor("#807fff") 
  
message.channel.send({embeds:[embed]});
} else if(!emoji.id) {
  let embederr = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("EMOTE_ERR_TITLE")}\n${form}${language("DEFAULT_EMOTE")}${form}\n${form}${language("EMOTE_ID")}${form}`)
  .setFooter(language("RIGHTS"), fimgl)
  .setColor("#807FFF")
    message.reply({embeds:[embederr]});
  }
}
