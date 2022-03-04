exports.run = (client, message, args) => {
  var count10 = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
];

var RandElement = count10[Math.floor(Math.random() * (count10.length))];
message.channel.send(`${RandElement}`)
}

exports.name = "rand1-10"
