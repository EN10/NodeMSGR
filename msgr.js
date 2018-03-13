var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    if (req.url != '/') fs.writeFileSync('file.txt', req.url)
    res.end(fs.readFileSync('file.txt'));
}).listen(process.env.PORT);