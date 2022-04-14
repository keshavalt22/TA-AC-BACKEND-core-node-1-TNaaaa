var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(req.header);
    console.log(req.method,req.url);
    res.end('Welcome');
}

server.listen(3000, () => {
    console.log('server is listening on port 3000')
})
