var http = require('http');

function handleRequest(req, res) {
    res.end('Welcome home');
}

var server = http.createServer(handleRequest);


server.listen(4000, () => {
    console.log('server is listening on port 3000');
})