// commands/help.js

module.exports = (bot) => {
    bot.onText(/\/help/, (msg) => {
      const chatId = msg.chat.id;
      const message = `
      Available commands:
      /ai - AI command description
      /lyrics - Lyrics command description
      /shoti - Shoti command description
      `;
      bot.sendMessage(chatId, message);
    });
  };
  