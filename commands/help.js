// commands/help.js

module.exports = (bot) => {
    bot.onText(/\/help/, (msg) => {
      const chatId = msg.chat.id;
      
      // Calculate uptime
      const uptimeSeconds = process.uptime();
      const hours = Math.floor(uptimeSeconds / 3600);
      const minutes = Math.floor((uptimeSeconds % 3600) / 60);
      const seconds = Math.floor(uptimeSeconds % 60);
      
      // Construct the message
      const message = `
      Available commands:
      /ai - AI command description
      /lyrics - Lyrics command description
      /shoti - Shoti command description
      
      This Bot Has Been Uptimed For About: ${hours}hours ${minutes}mins ${seconds}seconds
      `;
      
      // Send the message
      bot.sendMessage(chatId, message);
    });
  };
  