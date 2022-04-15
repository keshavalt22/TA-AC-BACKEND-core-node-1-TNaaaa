var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers);
    res.end(req.headers['user-agent']);
}


server.listen(5555, () => {
    console.log('server is listening on port 5555')
})