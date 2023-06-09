// Set up mySQL connection
const mysql = require ('mysql2');
require('dotenv').config();

// Connect to database. 
const db = mysql.createConnection(
   {
    host: 'localhost',
    // MySQL username
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
 db.connect((err) => {
    if (err) {
        console.log('Failed to connect to the database.', err);
        throw err;
    } else {
        //console.log ('Connected to the database.');
    }
});

module.exports = db;