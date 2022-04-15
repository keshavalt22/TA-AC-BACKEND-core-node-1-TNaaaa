var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(202, {'Content-Type':'text/html'})
    res.end('<h3>Welcome to altcampus</h3>')
}

server.listen(8001, () => {
    console.log('server is listening on port 8001')
})