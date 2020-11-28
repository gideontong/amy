const helpText = "<a:ditto:729440915835322379>";
const helpEmbed = {
    "title": "Need help? Never fear, Amy is here!",
    "description": "**Amy** is your personal assistant and here to save the day.\n\nTo see a full list of commands you can use, [click here](https://github.com/gideontong/Amy/blob/master/docs/usage/README.md).\n<a:catdance:729440916128923649> To see your achievements, use the command `!achievements`.\n\n[Amy's Website](https://amyhelps.ml) • [Full Help Screen](https://github.com/gideontong/Amy/blob/master/docs/README.md) • [Donate](https://ko-fi.com/gideontong)",
    "footer": {
        "text": "!help always calls the help command."
    },
    "thumbnail": {
        "url": "http://animaticons.co/wp-content/uploads/animat-image-256x256-color.gif"
    }
};

/**
 * Returns the help screen
 * @param {Client} client Discord client
 * @param {Message} msg Command
 * @param {Array} args Command arguments
 */
module.exports = async (client, msg, args) => {
    let repeat = Math.floor(Math.random() * 11);
    let embed = {
        "content": helpText.repeat(repeat),
        "embed": helpEmbed
    };
    msg.channel.send(embed);
}