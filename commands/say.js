exports.run = (client, message, args) => {
  const clientMember = message.guild.members.cache.get(client.user.id);
if(!clientMember.permissions.has("MANAGE_MESSAGES")) return;
   let repeat = message.content.split(" ").slice(1).join(" ")
    const exdemongd = client.emojis.cache.get("913587446376173598");
if(!repeat) return message.channel.send("Вы не указали, что повторить.")
if(message.content.startsWith("~say ~clear")) return
    if(message.content === "~say ${exdemongd}") return message.channel.send(`${exdemongd}`)
    if(message.content.startsWith("~say ~ban")) return
    if(message.content.startsWith("~say ~ban")) return
    if(message.content.startsWith("~say ~kick")) return
if(message.content.startsWith("~say ~say")) return
message.delete().catch();
message.channel.send(repeat)
}

exports.name = "say"
