var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url)
    var pathName = parsedUrl.pathname;
    if(req.method === 'GET' && pathName === '/'){
        res.setHeader('Content-Type','text/plain');
        res.end('Keshav');
    }else if (req.method === 'GET' && pathName === '/about'){
        res.setHeader('Content-Type','text/html');
        res.end('<h2>Keshav</h2>')
    }else {
        res.statusCode = 404;
        res.end('404 page not found');
    }
}
server.listen(2345, () => {
    console.log('server is listening on port 2345')
})