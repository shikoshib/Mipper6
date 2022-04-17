const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
    const form = "```"
let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `\`\`\`${days} ${language("DAYS")}, ${hours} ${language("HOURS")}, ${minutes} ${language("MINUTES")} ${language("AND")} ${seconds} ${language("SECONDS")}\`\`\``;
let botinfo = new Discord.MessageEmbed()
    .setAuthor(language("INV_NAME"), "https://freepngimg.com/thumb/arrow/4-2-arrow-free-download-png-thumb.png", "https://discord.com/oauth2/authorize?client_id=929992928615608412&permissions=8&scope=bot%20applications.commands")
    .setTitle(language("BOTINFO_TITLE"))
    .setDescription(language("BOTINFO_CDESC"))
    .setThumbnail("https://mipper6.cf/resources/Mipper6.png")
  .addField(language("BOT_OWNER"), `${form}shikoshib#9256${form}`)
    .addField(language("SERV_NUM"), `${form}${client.guilds.cache.size}${form}`, true)
    .addField(language("RELEASE"), `${form}${language("REL_INDEX")}${form}`)
.addField(language("UPTIME"), uptime)
    .setFooter(`${language("THX")} | ${language("RIGHTS")}`, "https://mipper6.cf/resources/Mipper6.png")
    .setColor("#807fff")
      message.channel.send({embeds: [botinfo]})
}

exports.name = "botinfo"
