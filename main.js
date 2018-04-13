// Ensures that we have the correct packages
const discord = require('discord.js');
const commando = require('discord.js-commando');
const fs = require('fs');

// Get private data from the filesystem
  // Gets the token that is needed for the bot to log in
var token = '';
try {
    var data = fs.readFileSync('token.txt', 'utf8');
    token = data;
} catch(e) {
    console.log('Error:', e.stack);
}
  // Gets the id of bot's owner
var ownerid = '';
try {
    var data = fs.readFileSync('ownerid.txt', 'utf8');
    ownerid = data;
} catch(e) {
    console.log('Error:', e.stack);
}

// Creates the bot
const bot = new commando.Client({
  commandPrefix: '$',
  unknownCommandResponse: false,
  owner: ownerid,
  disableEveryone: true
});

// Sets up the bot's commands
bot.registry.registerGroups([
  ['random', 'commands with random outputs'],
  ['reputation', 'Manage User Reputation']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(path.join(__dirname + "/commands"));

bot.on('ready', () => {
    console.log('Up and running!');
    bot.user.setActivity('With Charlie ;)');
});

// Makes the bot log in to its account
bot.login(token);
