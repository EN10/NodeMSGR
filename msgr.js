var express = require('express');
var app = express();
var fs = require('fs')

app.get("/", function(req, res) {
    if (req.query.q != undefined)
    { fs.writeFileSync('file.txt',req.query.q) }
    res.end(fs.readFileSync('file.txt'))
})
 
app.listen(process.env.PORT);