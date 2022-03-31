const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const mp3player = client.emojis.cache.get("913735930102296576");
  const wrench = client.emojis.cache.get("958622186913030194");
  
  if(message.content.toLowerCase() === "~help 1") {
    let embed1 = new Discord.MessageEmbed()
 .setTitle(language("MOD_CATNAME"))
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~ban`", `${language("BAN_DESC")}`)
  .addField("`~clear`", `${language("CLEAR_DESC")}`)
  .addField("`~kick`", `${language("KICK_DESC")}`)
  .addField("`~unban`", `${language("UNBAN_DESC")}`)
 .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${language("REL_INDEX")}`, "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed1]});
  }
  
  if(message.content.toLowerCase() === "~help 2") {
    let embed2 = new Discord.MessageEmbed()
.setTitle(language("INFO_CATNAME"))
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~botinfo`", language("BOTINFO_DESC"))
  .addField("`~ping`", language("PING_DESC"))
  .addField("`~serverinfo`", language("SERVERINFO_DESC"))
 .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${language("REL_INDEX")}`, "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed2]});
  }
  
  if(message.content.toLowerCase() === "~help 3") {
    let embed3 = new Discord.MessageEmbed()
.setTitle(language("FUN_CATNAME"))
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~8ball`", language("EIGHTBALL_DESC"))
  .addField("`~cat`", language("CAT_DESC"))
  .addField("`~dog`", language("DOG_DESC"))
  .addField("`~quote`", language("QUOTE_DESC"))
  .addField("`~say`", language("SAY_DESC"))
 .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${language("REL_INDEX")}`, "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed3]});
  }
  
  if(message.content.toLowerCase() === "~help 4") {
    let embed4 = new Discord.MessageEmbed()
.setTitle(`${mp3player} ${language("MUS_CATNAME")}`)
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~pause`", language("PAUSE_DESC"))
  .addField("`~play`", language("PLAY_DESC"))
  .addField("`~resume`", language("RESUME_DESC"))
  .addField("`~songinfo`", language("SONGINFO_DESC"))
  .addField("`~stop`", language("STOP_DESC"))
 .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${language("REL_INDEX")}`, "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed4]});
  }
  
  if(message.content.toLowerCase() === "~help 5") {
    let embed5 = new Discord.MessageEmbed()
 .setTitle(`${wrench} ${language("STH_CATNAME")}`)
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .addField("`~avatar`", language("AVATAR_DESC"))
  .addField("`~lorem`", language("LOREM_DESC"))
  .addField("`~oir`", language("OIR_DESC"))
  .addField("`~rand1-10`", language("RANDTEN_DESC"))
  .addField("`~rand1-100`", language("RANDH_DESC"))
  .addField("`~setlang`", language("SETLANG_DESC"))
 .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${language("REL_INDEX")}`, "https://mipper6.cf/resources/Mipper6.png")
    return message.channel.send({embeds:[embed5]});
  }
  
  const form = "`"
  let embed = new Discord.MessageEmbed()
  .setTitle(language ("GUIDE_NAME"))
 .setAuthor(language("WEBSITE"), "https://mipper6.cf/resources/Mipper6.png", "https://mipper6.cf/bot/updates")
  .setDescription(language("HELP_DESC"))
  .setThumbnail("https://mipper6.cf/resources/Mipper6.png")
  .addField(`${language("MOD_CATNAME")}:`, `${form}~ban${form} ${form}~clear${form} ${form}~kick${form} ${form}~unban${form} (${language("MORE")} ~help 1)`)
  .addField(`${language("INFO_CATNAME")}:`, `${form}~botinfo${form} ${form}~ping${form} ${form}~serverinfo${form} (${language("MORE")} ~help 2)`)
  .addField(`${language("FUN_CATNAME")}:`, `${form}~8ball${form} ${form}~cat${form} ${form}~dog${form} ${form}~quote${form} ${form}~say${form} (${language("MORE")} ~help 3)`)
  .addField(`${mp3player} ${language("MUS_CATNAME")}:`, `${form}~pause${form} ${form}~play${form} ${form}~resume${form} ${form}~songinfo${form} ${form}~stop${form} (${language("MORE")} ~help 4)`)
  .addField(`${wrench} ${language("STH_CATNAME")}:`, `${form}~avatar${form} ${form}~lorem${form} ${form}~oir${form} ${form}~rand1-10${form} ${form}~rand1-100${form} ${form}~setlang${form} (${language("MORE")} ~help 5)`)
  .setColor("#807fff")
 .setFooter(`${language("RIGHTS")} | ${language("RELEASE")} ${language("REL_INDEX")}`, "https://mipper6.cf/resources/Mipper6.png")
message.channel.send({embeds:[embed]})
}

exports.name = "help"
