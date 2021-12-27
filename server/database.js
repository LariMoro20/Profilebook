// get the client
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'profileDB',
    password: ''
});


module.exports = connection;