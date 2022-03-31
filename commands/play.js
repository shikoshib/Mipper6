const { MessageEmbed } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Player, QueryType } = require("discord-player");
exports.run = async (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if (message.author.bot) return;
  client.player = new Player(client, {
    ytdlOptions: {
      quality: "highestaudio",
      highWaterMark: 1 << 25
    }
  })
  let vclack = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("VC_LACK")}`)
  .setColor("#807fff")
  
  let resultlack = new MessageEmbed()
  .setTitle(`🚫 ${language("RESULT_LACK")}`)
  .setColor("#807fff")
  
  let urllack = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("SONG_LACK")}`)
  .setColor("#807fff")
  
  if(!message.member.voice.channel) return message.reply({embeds:[vclack]})
  let url = message.content.split(" ").slice(1).join(" ")
  if(!url) return message.reply({embeds:[urllack]})
  const queue = await client.player.createQueue(message.guild)
  if(!queue.connection) await queue.connect(message.member.voice.channel)

  const result = await client.player.search(url, {
    requestedBy: message.author.tag,
    searchEngine: QueryType.AUTO
  })
  if (result.tracks.length === 0) return message.reply({embeds:[resultlack]})
  const song = result.tracks[0]
  await queue.addTrack(song)
  
  let embed = new MessageEmbed()
  .setColor("#807fff")
  .setThumbnail(song.thumbnail)
  .setTitle(`✅ ${language("DONE")}`)
  .setDescription(`**[${song.title}](${song.url})** ${language("PLAY")} **${song.duration}**`)
  .setFooter(`${language("RIGHTS")}`, "https://mipper6.cf/resources/Mipper6.png")

  if(!queue.playing) await queue.play()
  await message.channel.send({embeds:[embed]})
}
