module.exports = (bot) => {
    // Command for the owner to initiate an announcement in a private chat
    bot.onText(/\/ownernoti/, async (msg) => {
        const userId = msg.from.id;
        const ownerId = '6270367989'; // Replace with your Telegram user ID

        // Check if the user is the owner
        if (userId.toString() !== ownerId) {
            bot.sendMessage(userId, 'You are not authorized to use this command.');
            return;
        }

        // Send a prompt message to the owner to type the announcement
        bot.sendMessage(userId, 'Please type the announcement message:');
        
        // Listen for the owner's reply
        bot.once('message', async (reply) => {
            const announcementMsg = reply.text;

            // Send the announcement to all groups the bot is a member of
            sendAnnouncementToGroups(bot, announcementMsg);
        });
    });

    // Function to send the announcement to all groups the bot is a member of
    async function sendAnnouncementToGroups(bot, announcementMsg) {
        // Retrieve a list of all chats the bot is a member of
        const chats = await bot.getMyCommands();

        // Iterate over each chat and send the announcement message
        chats.forEach(async (chat) => {
            const chatId = chat.id;

            // Skip sending the announcement to private chats
            if (chat.type === 'private') return;

            // Send the announcement message to the group
            bot.sendMessage(chatId, formatAnnouncement(announcementMsg));
        });
    }

    // Function to format the announcement message
    function formatAnnouncement(announcementMsg) {
        return `
| From the owner
━━━━━━━━━━━━━━━━━━━
   ANNOUNCEMENT 🚨⚠️
━━━━━━━━━━━━━━━━━━━
${announcementMsg}
》━━━━━━━━━━━━━━━━━━━《
`;
    }
};
