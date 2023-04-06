// Set up mySQL connection
const mysql = require ('mysql2');

// Connect to database. 
const db = mysql.createConnection(
   {
    host: 'localhost',
    // MySQL username
    user: 'root',
    password: '4Fxj$FFD5mj56Z5RF1*#',
    database: 'company_db'
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