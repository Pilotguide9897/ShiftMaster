const mysql = require ('mysql2');

// Connect to database. 
const db = mysql.createConnection(
   {
    host: 'localhost',
    // MySQL username
    user: 'root',
    password: '4Fxj$FFD5mj56Z5RF1*#',
    database: 'company_db'
};
 connection.connect((err) => {
    if (err) throw err;
    console.log('conneced to the database.');
 });


db.query('')

module.exports = connection