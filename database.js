const sqlite3 = require('sqlite3').verbose();

// Connect to the database
function connect() {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(':memory:', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(db);
            }
        });
    });
}

module.exports = {
    connect
};
