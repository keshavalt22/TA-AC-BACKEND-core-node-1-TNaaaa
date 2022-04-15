var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    var parsedUrl = url.parse(req.url)
    var pathName = parsedUrl.pathname;
    if(req.method === 'GET' && pathName === '/file'){
        res.setHeader('Content-Type','text/html');
        fs.readFile('./node.html', (err, content) => {
            if(err) console.log(err);
            res.end(content)
        })
    }
    if(req.method === 'GET' && pathName === '/stream'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./node.html').pipe(res);
    }
}


server.listen(5555, () => {
    console.log('server is listening on port 5555')
})