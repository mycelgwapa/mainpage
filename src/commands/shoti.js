// commands/shoti.js

module.exports = (bot) => {
    bot.onText(/\/shoti/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, 'Shoti command response.');
    });
  };
  