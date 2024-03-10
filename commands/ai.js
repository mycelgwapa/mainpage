module.exports = (bot) => {
  bot.onText(/^\/ai/, (msg) => {
      try {
          const chatId = msg.chat.id;
          bot.sendMessage(chatId, 'AI command working.');
      } catch (error) {
          console.error('Error executing AI command:', error);
      }
  });
};
