var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end(JSON.stringify(req.headers));
}


server.listen(7000, () => {
    console.log('server is listening on port 7000')
})