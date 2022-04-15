var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method,req.url);
    res.setHeader('content-type', 'text/html');
}


server.listen(5566, () => {
    console.log('server is listening on port 5566')
})