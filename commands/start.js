const fs = require('fs');
const path = require('path');

// Function to select a random GIF file from the 'gifs' folder
function getRandomGif() {
  const gifsFolder = path.join(__dirname, '..', '..', 'gifs');
  const gifFiles = fs.readdirSync(gifsFolder).filter(file => file.endsWith('.gif'));
  const randomIndex = Math.floor(Math.random() * gifFiles.length);
  return path.join(gifsFolder, gifFiles[randomIndex]);
}

module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const gifPath = getRandomGif(); // Get a random GIF file
    bot.sendDocument(chatId, gifPath, { caption: 'Hello! This is Hexu Bot, your helpful AI. Type /help to see all commands.' });
  });
};
