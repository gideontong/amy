const colors = 0xFFFFFF;
const { MessageEmbed } = require('discord.js');

/**
 * How straight are you?
 * @param {Message} msg Command
 * @param {Array} args Arguments
 */
module.exports = async (msg, args) => {
    let mentions = msg.mentions.members;
    if (mentions) {
        let members = mentions.array();
        if (mentions.size == 0) {
            msg.reply(`you are ${Math.floor(Math.random() * 100)}% straight!`);
        } else if (mentions.size == 1) {
            msg.channel.send(`${members[0].toString()} is ${Math.floor(Math.random() * 100)}% straight!`);
        } else {
            let description = '';
            for (member of members) {
                description += `${member.toString()} is ${Math.floor(Math.random() * 100)}% straight!\n`;
            }
            const embed = new MessageEmbed()
                .setColor(Math.floor(Math.random() * colors))
                .setDescription(description)
                .setTitle('Hotness Table');
            msg.channel.send(embed);
        }
    }
}