var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.witerHead = (201, {'content-type': 'text/html'});
    res.end('<h1>Welcome Home</h1>');
    console.log(req.method);
}

server.listen(4444, () => {
    console.log('server is listening on port 4444')
})