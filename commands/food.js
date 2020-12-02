const host = 'www.reddit.com';
// Have a suggestion? File a pull request or contact Gideon#5433!
const subreddits = [
    'beerandpizza',
    'beerfood',
    'beerporn',
    'bobsburgerscreations',
    'burgers',
    'cheeseburgers',
    'food',
    'foodporn',
    'friedchicken',
    'knightsofpineapple',
    'microwavepics',
    'pizza',
    'putaneggonit',
    'ramen',
    'salsasnobs',
    'sexypizza',
    'streeteats',
    'streetfoodartists',
    'sushi',
    'swedishfood',
    'tacos',
    'tonightsdinner',
    'tonightsvegdinner',
    'wings'
];

const { authenticatedGet } = require('../lib/Internet');
const log = require('log4js').getLogger('amy');

/**
 * Gets a random photo from a food subreddit
 * @param {Client} client Discord server client
 * @param {Message} msg Command
 * @param {Array} args Arguments
 */
module.exports = async (client, msg, args) => {
    let endpoint = `/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/random.json`;
    try {
        authenticatedGet(function (data) {
            if (data
                && data.length > 0
                && data[0]
                && data[0].data
                && data[0].data.children
                && data[0].data.children.length > 0
                && data[0].data.children[0].data
                && data[0].data.children[0].data.url_overridden_by_dest) {
                const link = data[0].data.children[0].data.url_overridden_by_dest;
                if (link.startsWith('https://i.')) {
                    msg.channel.send(link);
                } else {
                    msg.channel.send(`I got a link, but I don't support this yet, so you can view it in the web browser: ${link}`);
                }
            } else {
                log.warn('Food command is calling itself and going down call stack!');
                require('./food')(client, msg, args);
            }
        }, host, endpoint, {}, {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
        });
    } catch (err) {
        log.error(`While trying to grab a Reddit food picture I got ${err}`);
    }
}