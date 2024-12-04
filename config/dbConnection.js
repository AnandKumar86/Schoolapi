const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school_management'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err.stack);
        process.exit(1);
    }
    console.log('Connected to the database.');
});

module.exports = db;
