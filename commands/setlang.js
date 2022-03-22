const { permissions, MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
  const fs = require("fs");
    const guild = message.guild
    const guildLanguage = "ru" || "en"; 
    const language = require(`./languages/${guildLanguage}`);
    let guildLanguages = require("./guilds-language.json");
  const languages = ["en", "ru"]
        const newLanguageName = message.content.split(" ")[1];
        if(!newLanguageName){
            return message.channel.send("You didn't specify a language to set. You can only choose Russian (ru) or English (en).");
        }
  if (message.author.bot) return;
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply(language("SETL_PERMS"));
        if(!languages.includes(newLanguageName)){
            return message.channel.send(language("LANGUAGE_NO_EXIST"));
        }
        guildLanguages[message.guild.id] = newLanguageName;
        fs.writeFileSync("./commands/guilds-language.json", JSON.stringify(guildLanguages), "utf-8");
        const newLanguage = require(`./languages/${newLanguageName}`);
        message.channel.send(newLanguage("LANGUAGE_UPDATED"));
}

exports.name = "setlang"
