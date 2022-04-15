var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method,req.url);
    res.end(req.method + req.url);
}


server.listen(5566, () => {
    console.log('server is listening on port 5566')
})