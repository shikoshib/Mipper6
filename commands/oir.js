exports.run = (client, message, args) => {
  message.channel.send('Подбрасываю монету...')

      var random = Math.floor(Math.random() * 3) + 1
        if (random === 1) { 
        message.channel.send('Орёл!')
        } else if (random === 2) {
        message.channel.send('Решка!')
        } else if (random === 3) {
          message.channel.send('Монета упала ребром, попробуйте ещё раз!')
    }
}

exports.name = "oir"
