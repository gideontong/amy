const link = 'https://www.youtube.com/channel/UCdbqUWT3_0WgybqNuCX9uJA';

/**
 * Returns the link to our YouTube channel
 * @param {Message} msg Command
 * @param {Array} args Arguments
 */
module.exports = async (msg, args) => {
    msg.channel.send(`Check out our YouTube channel! ${link}`);
}