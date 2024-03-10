module.exports = (bot) => {
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    
    // Calculate uptime
    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    
    // Format the uptime into HH:MM:SS
    const formattedUptime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Construct the message
    const message = `
    Available commands:
    /ai - no prefix
    /lyrics - Lyrics searc
    /shoti - Shoti girls
    /announcement - owner use Or Admins 
    
     Uptimed For About✨: ${formattedUptime}
    `;
    
    // Send the message
    bot.sendMessage(chatId, message);
  });
};
