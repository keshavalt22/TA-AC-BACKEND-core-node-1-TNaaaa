var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(202, {'Content-Type':'application/json'})
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}))
}

server.listen(8888, () => {
    console.log('server is listening on port 8888')
})