var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url)
    var pathName = parsedUrl.pathname;
    if(req.method === 'GET' && pathName === '/users'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./form.html').pipe(res);
    }
    if (req.method === 'POST' && pathName === '/users'){
        res.setHeader('Content-Type','text/plain');
        res.end('Posted for the second time')
    }
}
server.listen(2345, () => {
    console.log('server is listening on port 2345')
})