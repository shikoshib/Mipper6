const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
  var count10 = Math.floor(Math.random() * 10) + 1;
    message.channel.send(`${count10}`)
}

exports.name = "rand1-10"
