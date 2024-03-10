module.exports = (bot) => {
    bot.on('new_chat_members', (msg) => {
        // Get the new member's information
        const newMember = msg.new_chat_member;
        const chatId = msg.chat.id;

        // Check if the new member is the bot itself
        if (newMember.username === bot.me.username) {
            // Set the bot's nickname to a custom name
            const newNickname = '》 / 《 ❃ ➠ Hexu'; // Change this to whatever nickname you want

            bot.setChatMemberTitle(chatId, newNickname)
                .then(() => {
                    bot.sendMessage(chatId, `Hello everyone! I'm now known as ${newNickname}.`);
                })
                .catch((error) => {
                    console.error('Error setting nickname:', error);
                });
        }
    });
};
