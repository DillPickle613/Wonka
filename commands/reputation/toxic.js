const commando = require('discord.js-commando');

class ToxicCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'toxic',
      group: 'reputation',
      memberName: 'toxic',
      description: 'Change or check the toxicity of users',
      example: 'toxic @user increase',
      args: [
        {
          key: 'user',
          prompt: 'Which user are you selecting?',
          type: 'user'
        },
        {
          key: 'action',
          prompt: 'Choose increase, decrease or check.',
          type: 'string',
          default: 'check'
        }
      ]
    });
  }

  run(message, {user, action}) {
    if (action === 'check') {
      message.channel.send('User found : ' + user);
    }
    else if (action === 'increase') {
      message.channel.send('Can\'t do that yet :(')
    }
    else {
      message.channel.send('Action not recognized');
    }
  }
}

module.exports = ToxicCommand;
