var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
  // port : '3307'
});
connection.connect();

module.exports = connection;
