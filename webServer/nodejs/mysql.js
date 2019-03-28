// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : '35.239.26.210',
//   user     : 'root',
//   password : '062806',
//   database : 'opentutorials'
//   // port : '3307'
// });
//
// connection.connect();
//
// connection.query('SELECT * FROM topic', function (error, results, fields) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
// });
//
// connection.end();

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
