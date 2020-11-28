const log = require('log4js').getLogger('amy');

/**
 * Prints an emoji, regardless of whether it was animated or not
 * @param {Client} client Discord client
 * @param {Message} msg Command
 * @param {Array} args Arguments
 */
module.exports = async (client, msg, args) => {
    var emoji;
    if (isNaN(args[1])) {
        let search = args[1].toLowerCase();
        let emojis = client.emoji.cache.array();
        for (potential of emojis) {
            if (search == potential.name.toLowerCase()) {
                emoji = potential;
            }
        }
    } else {
        emoji = client.emojis.resolve(args[1]);
    }
    if (emoji) {
        msg.channel.send(emoji.toString());
        log.info(`${msg.author.tag} ${msg.author} told me to repeat :${emoji.name}: ${emoji.animated? '(animated)': ''}`);
    }
}