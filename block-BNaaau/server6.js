var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.statusCode = 202;
    res.end();
}

server.listen(3333, () => {
    console.log('server is listening on port 3333')
})