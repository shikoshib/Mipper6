const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
    let guildLanguages = require("./guilds-language.json");
    const guildLanguage = guildLanguages[message.guild.id] || "en"; 
    const language = require(`./languages/${guildLanguage}`);
  if(message.author.bot) return;
    
  const admin = new MessageEmbed()
  .setTitle(`❌ ${language("ERROR")}`)
  .setColor("#807fff")
  .setDescription(language("RR_ADMIN"))
  
  if(message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[admin]});
  var result = Math.floor(Math.random() * 9) + 1;
  const warning = new MessageEmbed()
  .setTitle(`⚠ ${language("WARNING")}`)
  .setDescription(`${language("RR_WARNING")}.\n${language("RR_TIMER")}`)
  .setColor("#807fff")
  message.reply({embeds:[warning]})
  
  function sendResult() {
    
  if(result === 1) {
    const one = new MessageEmbed()
    .setTitle(`${language("RR_ONE")}`)
.setColor("#807fff")
.setDescription(`<@${message.author.id}>`)
    message.reply({embeds:[one]})
  }
    
  if(result === 2) {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SEND_MESSAGES: false,
   ADD_REACTIONS: false,
 })
 })
    
 message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SPEAK: false,
   STREAM: false,
 })
 })
    const two = new MessageEmbed()
    .setTitle(language("RR_MUTED"))
    .setColor("#807fff")
    .setDescription(`${language("RR_TWO")}\n<@${message.author.id}>`)
    message.reply({embeds:[two]})
    function deleteMuteRole() {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SEND_MESSAGES: true,
   ADD_REACTIONS: true,
 })
 })
    
 message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SPEAK: true,
   STREAM: true,
 })
 })
 }
    setTimeout(deleteMuteRole, 60000)
  }
    
  if(result === 3) {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   VIEW_CHANNEL: true,
 })
 })
    const three = new MessageEmbed()
    .setTitle(language("RR_THREE"))
    .setDescription(`<@${message.author.id}>`)
    .setColor("#807fff")
    message.reply({embeds:[three]})
  }
    
  if(result === 4) {
    message.member.ban({ days: 1, reason: `${language("RR_REASON")}` })
    const four = new MessageEmbed()
    .setTitle(language("RR_FOUR"))
    .setColor("#807fff")
    message.author.send({embeds:[four]}).catch((err) => {
      return;
    });
  }
    
  if(result === 5) {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SEND_MESSAGES: false,
   ADD_REACTIONS: false,
 })
 })
    
 message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SPEAK: false,
   STREAM: false,
 })
 })
    const five = new MessageEmbed()
    .setTitle(language("RR_MUTED"))
    .setColor("#807fff")
    .setDescription(`${language("RR_FIVE")}\n<@${message.author.id}>`)
    message.reply({embeds:[five]})
    function deleteMuteRole() {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SEND_MESSAGES: true,
   ADD_REACTIONS: true,
 })
 })
    
 message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SPEAK: true,
   STREAM: true,
 })
 })
 }
    setTimeout(deleteMuteRole, 86400000)
  }
    
  if(result === 6) {
    message.reply(language("RR_SIX"))
  }
    
  if(result === 7) {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SEND_MESSAGES: false,
   ADD_REACTIONS: false,
 })
 })
    
 message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SPEAK: false,
   STREAM: false,
 })
 })
    message.reply(language("RR_SEVEN"))
    function deleteMuteRole() {
 message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SEND_MESSAGES: true,
   ADD_REACTIONS: true,
 })
 })
    
 message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').forEach(async (channel, id) => {
 await channel.permissionOverwrites.edit(message.author, {
   SPEAK: true,
   STREAM: true,
 })
 })
 }
    setTimeout(deleteMuteRole, 120000)
  }
    
  if(result === 8) {
    const eight = new MessageEmbed()
    .setTitle(`${language("RR_ONE")} ${language("RR_EIGHT_TITLE")}`)
.setColor("#807fff")
.setDescription(`<@${message.author.id}>`)
    message.reply({embeds:[eight]})
  }
    
  if(result === 9) {
    message.member.kick(language("RR_REASON"));
  message.channel.createInvite({ maxAge: 0, maxUses: 0}).then((invite) => {
    const nine = new MessageEmbed()
    .setTitle(`${language("RR_NINE_KICK")} **${message.guild.name}**`)
    .setDescription(`${language("RR_NINE_DESC")}\n${invite}`)
    .setColor("#807fff")
    message.author.send({embeds:[nine]}).catch((err) => {
      return;
    });
  });
  }
    
  }
  setTimeout(sendResult, 15000);
  }
