exports.run = (client, message, args) => {
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("BAN_MEMBERS")) return;
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('Вы на данный момент не имеете права делать это.')
let id = message.content.split(" ").slice(1)
if(!id[0]) return message.channel.send("Вы не указали ID забаненного участника.");
if(isNaN(id[0])) return message.channel.send("Это не ID!")
message.guild.members.unban(id[0]);
  message.channel.send(`<@${id}> был успешно разбанен.`)
}

exports.name = "unban"
