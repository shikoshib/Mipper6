const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(message.author.bot) return;
  const r = (e, r) => { return e.repeat(r) }
message.channel.send({ embeds: [{ 
title: 'amoSUS 😳',
description: `${ 
r('⬛', 17) +'\n'+ 
r('⬛',5) + r('⬜',3) + r('⬛',1) + r('⬜',1) +  r('⬛',1) +  r('⬜',1) +  r('⬛',1) +  r('⬜',3) +  r('⬛',1) +'\n'+ 
r('⬛', 1) + r('🟥', 3) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) +'\n'+ 
r('⬛', 1) + r('🟥', 1) + r('🟦', 2) + r('⬛', 1) + r('⬜', 3) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 3) + r('⬛', 1) + '\n' + 
r('⬛', 1) + r('🟥', 3) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + '\n' + 
r('⬛',1) + r('🟥', 1) + r('⬛',1) + r('🟥', 1) + r('⬛',1) + r('⬜',3) + r('⬛',1) + r('⬜',3)+ r('⬛',1) + r('⬜',3) + r('⬛',1) +'\n'+ 
r('⬛', 17)
}` }]
})
}

exports.name = "amogus"
