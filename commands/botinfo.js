const Discord = require("discord.js");
const { version } = require("../info.json")
var os = require("os");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
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
        const totalram = ((os.totalmem() / 10**6 + " ").split('.')[0]);
        const freeram = ((os.freemem() / 10**6 + " ").split('.')[0]);
        const usedram = (((os.totalmem() - os.freemem()) / 10**6 + " ").split('.')[0]);
        const prctfreeram = (((os.freemem() * 100) / os.totalmem + " ").split('.')[0]);
        const perc = 100 - prctfreeram;
let botinfo = new Discord.MessageEmbed()
    .setAuthor(language("INV_NAME"), "https://freepngimg.com/thumb/arrow/4-2-arrow-free-download-png-thumb.png", "https://discord.com/oauth2/authorize?client_id=929992928615608412&permissions=8&scope=bot%20applications.commands")
    .setTitle(language("BOTINFO_TITLE"))
    .setDescription(language("BOTINFO_CDESC"))
    .setThumbnail("https://mipper6.cf/resources/Mipper6.png")
  .addField(language("BOT_OWNER"), `${form}shikoshib#9256${form}`)
    .addField(language("SERV_NUM"), `${form}${client.guilds.cache.size}${form}`, true)
    .addField(language("RELEASE"), `${form}${version}${form}`)
.addField(language("UPTIME"), uptime)
  .addField(language("RAM"), `${form}${language("TOTALRAM")}: ${Math.trunc(totalram / 1024)}${language("GB")} (${totalram} ${language("MB")})\n${language("USEDRAM")}: ${Math.trunc(usedram / 1024)}${language("GB")} (${usedram} ${language("MB")})\n${language("FREERAM")}: ${Math.trunc(freeram / 1024)}${language("GB")} (${freeram} ${language("MB")})\n${language("PERUSEDRAM")}: ${perc}%${form}`)
    .setFooter(`${language("THX")} | ${language("RIGHTS")}`, "https://mipper6.cf/resources/Mipper6.png")
    .setColor("#807fff")
      message.channel.send({embeds: [botinfo]})
}

exports.name = "botinfo"
