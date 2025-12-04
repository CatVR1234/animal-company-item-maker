const { Client, GatewayIntentBits } = require('discord.js');

// Put *your* Discord user ID here
const OWNER_ID = "1074534052096397402";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    // Ignore other bots
    if (message.author.bot) return;

    // Only echo YOU
    if (message.author.id === OWNER_ID) {
        message.channel.send(message.content);
    }
});

client.login("YOUR_BOT_TOKEN");