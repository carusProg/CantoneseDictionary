// var db = require('./db/mysql.js');


// var http = require('http');
// var fs = require('fs');
// var app = http.createServer(function(request,response){
//   var url = request.url;
//   // if(request.url == '/'){
//   //   url = '';
//   //
//   // }
//
//   // var str = fs.readFileSync(__dirname + url);
//
//   response.writeHead(200);
//   response.end(__dirname + url);
//
// });
// app.listen(3001);



var http = require('http');
var app = http.createServer((request, response) => {
  response.writeHead(200);
  response.end("helloworld");
});
app.listen(3000);
