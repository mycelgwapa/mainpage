const fs = require('fs');
const path = require('path');
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const token = '7037696234:AAE5nIt8CoaWCSN13-EZimouJe2IQY8VTfM';
const port = process.env.PORT || 3000;

// Initialize Express app
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Load commands dynamically from the commands folder
const commandsDir = path.join(__dirname, 'commands');
const commands = [];

console.log('\x1b[35m[COMMANDS]\x1b[0m Loading...');
fs.readdirSync(commandsDir).forEach((file) => {
  const command = require(path.join(commandsDir, file));
  commands.push(command);
});

// Simulate delay before starting the bot
setTimeout(() => {
  console.log('\x1b[35m[COMMANDS]\x1b[0m Loaded✔️');
  
  // Execute each command
  commands.forEach((command) => {
    if (typeof command === 'function') { // Check if command is a function
      command(bot); // Call the command function with the bot instance
    } else {
      console.error(`Invalid command: ${file}`);
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  console.log('\x1b[35m[System]\x1b[0m \x1b[33mRunning...\x1b[0m');
}, 2000); // 2000 milliseconds (2 seconds) delay
