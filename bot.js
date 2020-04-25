// Import Environmental Variables
require('dotenv').config();
// Import Eris
const eris = require('eris');

// Create a Command Client that handles discord commands
const bot = new eris.CommandClient(process.env.BOT_TOKEN, {}, {
    name: "Movie Night",
    description: "A Discord bot that makes movie nights fun"
});

// Establish Connection with Discord API
bot.connect()
    .then(() => {
        console.log("Established Connection!")
    })
    .catch(e => {
        console.error(e)
    })