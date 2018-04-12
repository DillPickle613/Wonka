const commando = require('discord.js-commando');

class CoinCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'coin',
      group: 'random',
      memberName: 'coin',
      description: 'Flips a coin'
    });
  }

  async run(message, args) {
    var roll = Math.floor(Math.random() * 2) + 1;
    if (roll === 1) {
      message.channel.send("Heads");
    }
    else {
      message.channel.send("Tails");
    }
  }
}

module.exports = CoinCommand;
