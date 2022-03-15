const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Вы на данный момент не имеете права делать это.");
   const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("MANAGE_MESSAGES")) return;
  const arggs = message.content.split(' ').slice(1);
  const amount = arggs.join(' ');
  if (!amount) return message.channel.send('Вы не указали, сколько сообщений нужно удалить.');
  if (isNaN(amount)) return message.channel.send('Это не число!');
  if (amount > 100) return message.channel.send('Вы не можете удалить больше 100 сообщений за раз.');
  if (amount < 1) return message.channel.send('Вы должны ввести число больше, чем 1.');

  async function delete_messages() {
  await message.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        message.channel.bulkDelete(messages, true);
          let embedcl = new Discord.MessageEmbed()
        .setTitle(`✅ Успешно удалено ${amount} сообщений`)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor("#807fff")
    .setDescription("Сообщения двухнедельной давности (если таковые есть) были проигнорированы.")
        message.channel.send({embeds:[embedcl]})
    
    })
};
delete_messages();
}

exports.name = "clear"
