var http = require('http');
var fs = require('fs');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
  var url = url.parse(req.url);
  if ('/' == req.url) {
    switch (req.method) {
      case 'GET':
        console.log('I have received a external GET request from ' + url);
        fs.readFile('index.html',function (err, data){
          res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
          res.write(data);
          res.end();
        });
        break;
        case 'POST':
          console.log('I have received a external POST request from ' + url);
          add(req, res);
          break;
          default:
            console.log('Bad request');
            res.statusCode = 500;
            res.end('Internal Server Error');
            //badRequest(res);
          }
        } else {
          notFound(res);
        }
      });
      console.log('Hello, Nodejs Server listening on 3000');
      server.listen(3000);
