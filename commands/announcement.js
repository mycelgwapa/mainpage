module.exports = (bot) => {
    bot.onText(/\/announcement/, async (msg) => {
        // Retrieve the chat ID and user ID of the sender
        const chatId = msg.chat.id;
        const userId = msg.from.id;

        // Check if the user is the owner or admin
        const chatAdmins = await bot.getChatAdministrators(chatId);
        const isAdmin = chatAdmins.some(admin => admin.user.id === userId);

        // Check if the user is the owner (you can replace '123456789' with your Telegram user ID)
        const ownerId = '6270367989'; // Replace with your Telegram user ID
        const isOwner = userId === ownerId;

        // If the user is not the owner or an admin, notify them and return
        if (!isOwner && !isAdmin) {
            bot.sendMessage(chatId, 'You are not authorized to use this command.');
            return;
        }

        // Send the initial prompt message
        bot.sendMessage(chatId, 'Please type the announcement message:');

        // Listen for the user's reply
        bot.once('message', async (reply) => {
            // Retrieve the announcement message from the user's reply
            const announcementMsg = reply.text;

            // Retrieve the name of the user who made the announcement
            const userName = msg.from.first_name; // You can customize this to include last name if available

            // Construct the styled announcement message
            const announcementHeader = 'ANNOUNCEMENT!!!';
            const announcementFooter = `Announced by: ${userName}`;

            // Include owner or admin identification
            const userType = isOwner ? 'Owner' : 'Admin';

            const styledAnnouncement = `
${announcementHeader}
____________________
${announcementMsg}
____________________
${userType}: ${userName}
`;

            // Send the styled announcement message to the group
            bot.sendMessage(chatId, styledAnnouncement);
        });
    });
};
