var http = require('http');
var url = require('url');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url)
    var pathName = parsedUrl.pathname;

    if(req.method === 'GET' && pathName === '/'){
        res.end('Welcome to homepage');
    }else if(req.method === 'GET' && pathName === '/about'){
        res.setHeader('Content-Text','text/html');
        res.end('<h2>this is all about NodeJS</h2>');
    }else if(req.method === 'POST' && pathName === '/about'){
        res.setHeader('Content-Text','application/json');
        res.end(`{message: this is a post request}`);
    }
}


server.listen(5000, () => {
    console.log('server is listening on port 5000')
})