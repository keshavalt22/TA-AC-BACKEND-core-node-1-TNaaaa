var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(res, req) {
    res.end('My first server in NodeJS')
}

server.listen(5100, () => {
    console.log('server is listening on port 5100')
})