// commands/ai.js

module.exports = (bot) => {
    bot.onText(/\/ai/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, 'AI command working.');
    });
  };
  