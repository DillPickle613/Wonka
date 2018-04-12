const commando = require('discord.js-commando');

class DiceCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'dice',
      group: 'random',
      memberName: 'dice',
      description: 'Rolls a die'
    });
  }

  async run(message, args) {
    var roll = Math.floor(Math.random() * 6) + 1;
    message.reply("The roll was " + roll);
  }
}

module.exports = DiceCommand;
