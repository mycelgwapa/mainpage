// database.js

const sqlite3 = require('sqlite3').verbose();

// Function to connect to the database
function connect() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(':memory:'); // Example: Connecting to an in-memory database
    db.serialize(() => {
      // Perform database setup and initialization here
      resolve(db); // Resolve the promise with the database instance
    });

    db.on('error', (err) => {
      reject(err); // Reject the promise with any errors that occur during connection
    });
  });
}

module.exports = { connect }; // Export the connect() function
