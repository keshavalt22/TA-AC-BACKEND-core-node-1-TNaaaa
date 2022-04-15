var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname, req.url, parsedUrl);
    res.setHeader('Contect-Type', 'application/json')
    res.end(JSON.stringify(parsedUrl.query))
}

server.listen(5000, () => {
    console.log('server is listening on port 5000')
})