const axios = require('axios');
const semver = require('semver');
const config = require('./config.json');

async function checkForUpdates() {
    try {
        const response = await axios.get('https://api.github.com/repos/mycelgwapa/mainpage/releases/latest');
        const latestVersion = response.data.tag_name;
        const currentVersion = require('./package.json').version;
        if (semver.gt(latestVersion, currentVersion)) {
            const releaseNotes = response.data.body;
            const message = `|    ANNOUNCEMENT 🚨⚠️
━━━━━━━━━━━━━━━━━━━
New Release⚠️
 ━━━━━━━━━━━━━━━━━━
${releaseNotes}
》━━━━━━━━━━━━━━━━━━━《`;
            sendNotificationToUsers(message);
        }
    } catch (error) {
        console.error('Error checking for updates:', error.message);
    }
}

function sendNotificationToUsers(message) {
    // Implement logic to send notification to users using the Telegram bot API
    // Example:
    // bot.sendMessage(chatId, message);
}

setInterval(checkForUpdates, 24 * 60 * 60 * 1000); // Run every 24 hours
checkForUpdates();
