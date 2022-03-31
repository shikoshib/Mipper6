const { MessageEmbed } = require("discord.js");
const { Player, QueryType, getQueue } = require("discord-player");
exports.run = async (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if (message.author.bot) return;
  let queuelack = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("QUEUE_LACK")}`)
  .setColor("#807fff")

  let success = new MessageEmbed()
  .setTitle(`✅ ${language("RESUME")}`)
  .setColor("#807fff")
  const queue = client.player.getQueue(message.guildId)
  if(!queue) return await message.reply({embeds:[queuelack]})
  
  queue.setPaused(false)
  await message.reply({embeds:[success]})
}
