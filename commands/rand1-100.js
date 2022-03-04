exports.run = (client, message, args) => {
  var count100 = Math.floor(Math.random() * 100) + 1;
    message.channel.send(`${count100}`)
}

exports.name = "rand1-100"
