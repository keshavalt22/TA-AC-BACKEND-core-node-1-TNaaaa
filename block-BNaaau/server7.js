var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h3>Welcome to altcampus</h3>')
}

server.listen(8000, () => {
    console.log('server is listening on port 8000')
})