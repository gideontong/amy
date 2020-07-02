const { grantAchievement } = require('../lib/Achievement');
const { MessageAttachment } = require('discord.js');

// Imports from dependencies
const log = require('log4js').getLogger('amy');

// Wrapper for Achievement.grantAchievement()
module.exports = async (bot, msg, args) {
    const buffer = await grantAchievement(args[1]);
    if (buffer) {
        const image = new MessageAttachment(buffer);
        msg.reply(`aren't you feeling cool today!`, image);
    }
}