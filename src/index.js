// index.js

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const token = '7037696234:AAE5nIt8CoaWCSN13-EZimouJe2IQY8VTfM';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Load commands dynamically from the commands folder
const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir).forEach((file) => {
  const command = require(path.join(commandsDir, file));
  command(bot);
});

console.log('\x1b[35m[System]\x1b[0m \x1b[33mRunning...\x1b[0m');

//bot.on('message', (msg) => {
  //const chatId = msg.chat.id;
  //bot.sendMessage(chatId, msg.text);
//});
