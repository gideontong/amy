// Imports from local config files
const config = require('../config/config.json');
const targets = config.targets;

// Imports from dependencies
const { generateAchievementProgress } = require('../lib/Achievement');
const log = require('log4js').getLogger('amy');

// Handler for running achievements command
module.exports = async (bot, msg, args) => {
    if (msg.author != targets.gideon) return;
    let emojiString, unlocked, secret = await generateAchievementProgress(msg.author.id);
    let message = {
        content: `Your achievements are looking pretty strong...`,
        embed:
        {
            "title": `${msg.member.displayName}'s Achievements`,
            "description": `You've unlocked ${unlocked} achievements and ${secret} secret achievements!\n\n${emojiString}`,
            "color": 2155732,
            "footer": {
                "text": "Amy Nguyen's Achievements System",
                "icon_url": "https://cdn.discordapp.com/avatars/721503241531162707/e04f2a03baf23be92a9c937e79e973d0.png"
            }
        }
    }
    msg.channel.send(message);
    log.info(`${msg.author.tag} ${msg.author} requested their achievements progress`);
}