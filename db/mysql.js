var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.239.26.210',
  user     : 'root',
  password : '062806',
  database : 'opentutorials'
  // port : '3307'
});
connection.connect();

module.exports = connection;
