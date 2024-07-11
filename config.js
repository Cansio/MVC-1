const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simpledb',
    port: 3306
});

// Check database connection
db.connect(err => {
    if (err) { console.log(err, 'database err'); }
    else { console.log('database connected...'); }
});

module.exports = db;
