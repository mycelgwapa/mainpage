// commands/lyrics.js

module.exports = (bot) => {
    bot.onText(/\/lyrics/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, 'Lyrics command working');
    });
  };
  