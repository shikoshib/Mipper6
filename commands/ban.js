exports.run = (client, message, args) => {
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("BAN_MEMBERS")) return;
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('Вы не указали, кого забанить.')
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('Вы на данный момент не имеете права делать это.')
 if (member.permissions.has('BAN_MEMBERS') || member.permissions.has('KICK_MEMBERS')) return message.channel.send('Участник, которого вы указали, является модератором (имеет право кикать или банить людей).')

 try {
 member.ban().then(() => {
 message.channel.send(`${member} был успешно забанен.`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Что-то пошло не так, повторите попытку.')
 }
}

exports.name = "ban"
