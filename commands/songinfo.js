const { MessageEmbed } = require("discord.js");
const { Player, QueryType } = require("discord-player");
exports.run = async (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if (message.author.bot) return;
  let queuelack = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("QUEUE_LACK")}`)
  .setColor("#807fff")
  
  const queue = client.player.getQueue(message.guildId)
  if(!queue) return await message.reply({embeds:[queuelack]})

  let bar = queue.createProgressBar({
    queue: false,
    length: 11,
  })

  const song = queue.current

  let success = new MessageEmbed()
  .setTitle(`${language("SONGINFO_TITLE")}`)
  .setThumbnail(song.thumbnail)
  .setDescription(`${language("SONGINFO_CDESC")} **[${song.title}](${song.url})**.\n\n 0:00 ${bar} ${song.duration}`)
  .setColor("#807fff")
  await message.reply({embeds:[success]})
  
}
