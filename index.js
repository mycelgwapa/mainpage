const fs = require('fs');
const path = require('path');
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const database = require('./database');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const token = '7037696234:AAE5nIt8CoaWCSN13-EZimouJe2IQY8VTfM';
const port = process.env.PORT || 7823;

// Initialize Express app
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Load commands dynamically from the commands folder
const commandsDir = path.join(__dirname, 'commands');
const commands = [];

console.log('\x1b[35m[COMMANDS]\x1b[36m Loading...');
fs.readdirSync(commandsDir).forEach((file) => {
  const command = require(path.join(commandsDir, file));
  commands.push(command);
});

// Simulate delay before starting the bot
setTimeout(() => {
  console.log('\x1b[35m[COMMANDS]\x1b[36m Loaded✔️');

  
  // Execute each command
  commands.forEach((command) => {
    if (typeof command === 'function') { // Check if command is a function
      command(bot); // Call the command function with the bot instance
    } else {
      console.error(`Invalid command: ${file}`);
    }
  });

  database.connect()
  .then((db) => {
    console.log('\x1b[35m[DATABASE]\x1b[36m Connected');
    // Use the database instance (db) to perform database operations
  })
  .catch((err) => {
    console.error('\x1b[35m[DATABASE]\x1b[0m Database connection error:', err);
  });

  // Start the server
  app.listen(port, () => {
    console.log(`\x1b[35m[PORT]\x1b[36m - ${port}`);
  });

  console.log('\x1b[35m[System]\x1b[0m \x1b[36mRunning...\x1b[0m');
}, 2000); // 2000 milliseconds (2 seconds) delay
