
module.exports = (bot) => {
    bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, 'Hello! This is Hexu Bot, your helpful AI. Type /help to see all commands.');
    });
  };
  