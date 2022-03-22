const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  let que = message.content.split(" ").slice(1).join(" ")
  if(!que) return message.channel.send(language("EIGHTBALL_LACK"));
  var ans = [
    language("EIGHTBALL_ONE"), language("EIGHTBALL_TWO"), language("EIGHTBALL_THREE"), language("EIGHTBALL_FOUR"), language("EIGHTBALL_FIVE"), language("EIGHTBALL_SIX"), language("EIGHTBALL_SEVEN"), language("EIGHTBALL_EIGHT")
];

var RandAns = ans[Math.floor(Math.random() * (ans.length))];
let em = new Discord.MessageEmbed()
  .setAuthor(`${language("REQ")} ${message.author.username}`, message.author.displayAvatarURL())
  .setColor("#807fff")
  .setFooter(`${language("RIGHTS")}`, "https://mipper6.cf/resources/Mipper6.png")
  .addField(`${language("EIGHTBALL_Q")}`, `${que}`)
  .addField(`${language("EIGHTBALL_A")}`, `${RandAns}`)
message.channel.send({embeds:[em]})
}

exports.name = "8ball"
