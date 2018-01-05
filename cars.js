var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./token.json');
// logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // The bot listens for command messages which we set to start with `!`
    if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !start
            case 'start':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello there <@' + userID +'>'
                });
            break;
            // add any other commands here.
 }
     }
});
