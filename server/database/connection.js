const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'asdASD123',
  database : 'acamicasaintseiya'
});

module.exports = connection;
