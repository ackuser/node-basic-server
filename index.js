var http = require('http');
var fs = require('fs');
var parse = require('url').parse;
var join = require('path').join;
var items = [];
var root = __dirname;

var server = http.createServer(function(req, res){
  var url = parse(req.url);
  if ('/index.html' == req.url || '/' == req.url) {
    switch (req.method) {
      case 'GET':
        console.log('I have received a external GET request from ' + JSON.stringify(url) );
        //console.log(JSON.stringify(req, null, 4));
        var path = join(root, url.pathname);
        if ('/' == req.url){
          path = join(root, 'index.html');
          //console.log('I have received a external GET request from /');
          //console.log(path);
        }
        fs.readFile(path,function (err, data){
          res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
          res.write(data);
          res.end();
        });
        break;
        case 'POST':
          console.log('I have received a POST request from ' + JSON.stringify(url));
          var body = '';
          req.setEncoding('utf8');
          req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
          });
          req.on('end', function () {
            console.log("Body: " + body);
          show(req, res, body)
          });
          break;
          default:
            console.log('Bad request');
            res.statusCode = 500;
            res.end('Internal Server Error');
            //badRequest(res);
          }
        } else {
          console.log('Bad path');
          console.log('I have received a external request from ' + req.url + ' ' + JSON.stringify(url) );
          res.statusCode = 404;
          res.end('Not Found');
        }
      });
      console.log('Hello, Nodejs Server listening on 3000');
      server.listen(3000);


      function show(req, res, body) {
      var html = ''
      + '<html>'
      + '<head>'
      + '<meta charset="UTF-8">'
      + '<title>How to GET and POST</title>'
      + '<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'
      + '</head>'
      + '<body>'
      + '<div class="container">'
      + '<h1>'
      + body
      + '</h1>'
      + '</div>'
      + '</body>'
      + '</html>';
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', Buffer.byteLength(html));
      res.end(html);
      }
