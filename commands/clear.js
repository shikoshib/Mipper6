const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if(message.author.bot) return;
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(language("PERMS_LACK"));
   const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("MANAGE_MESSAGES")) return;
  const arggs = message.content.split(' ').slice(1);
  const amount = arggs.join(' ');
  if (!amount) return message.reply(language("CLEAR_LACK_MSG"));
  if (isNaN(amount)) return message.reply(language("ISNAN"));
  if (amount > 100) return message.reply(language("MSG_MAX"));
  if (amount < 1) return message.reply(language("MSG_MIN"));

  async function delete_messages() {
  await message.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        message.channel.bulkDelete(messages, true);
          let embedcl = new Discord.MessageEmbed()
        .setTitle(`✅ ${language("CLEAR_SUCCESS")} ${amount} ${language("MSGS")}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor("#807fff")
    .setDescription(language("CLEAR_CDESC"))
        message.channel.send({embeds:[embedcl]})
    
    })
};
delete_messages();
}

exports.name = "clear"
