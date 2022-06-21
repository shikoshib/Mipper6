const { permissions, MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
  const fs = require("fs");
    const guild = message.guild
    let guildLanguages = require("./guilds-language.json");
    let guildLanguage = guildLanguages[guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  const languages = ["en", "ru"]
  
  const permsLack = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(language("SETL_PERMS"))
  .setColor("#807fff")
  if(message.author.bot) return;
  
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({embeds:[permsLack]});
        const newLanguageName = message.content.split(" ")[1];
        if(!newLanguageName){
  const noLanguageSpecified = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("NO_LANGUAGE_SPECIFIED")}:\n\n**🇺🇸: en**\n**🇷🇺: ru**`)
  .setColor("#807fff")
            return message.reply({embeds:[noLanguageSpecified]});
        }

        if(!languages.includes(newLanguageName)){
  const notExistingLanguage = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(`${language("LANGUAGE_NO_EXIST")} ${language("NO_LANGUAGE_SPECIFIED")}:\n\n**🇺🇸: en**\n**🇷🇺: ru**`)
  .setColor("#807fff")
            return message.reply({embeds:[notExistingLanguage]});
        }
        if(guildLanguage === newLanguageName) {
  const langAlreadySet = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setDescription(language("LANG_ALREADY_SET"))
  .setColor("#807fff")
          return message.reply({embeds:[langAlreadySet]});
        }
        guildLanguages[message.guild.id] = newLanguageName;
        fs.writeFileSync("./commands/guilds-language.json", JSON.stringify(guildLanguages), "utf-8");
        const newLanguage = require(`./languages/${newLanguageName}`);
  const done = new MessageEmbed()
  .setTitle(`✅ ${newLanguage("LANGUAGE_UPDATED")}`)
  .setColor("#807fff")
        message.reply({embeds:[done]});
}
