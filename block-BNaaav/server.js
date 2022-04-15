var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url, true)
    var pathName = parsedUrl.pathname;

    if(req.method === 'GET' && req.pathName === '/'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    if(req.method === 'GET' && req.pathName === '/about'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./about.html').pipe(res);
    }
    if(req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./assets/stylesheets/style.css' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
    }
    if(req.url.split('.').pop() === 'img') {
        res.setHeader('Content-Type', 'text/img');
        fs.readFile('./assets/media' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
    }
}

server.listen(3000, () => {
    console.log('server is listening on port 3000')
})