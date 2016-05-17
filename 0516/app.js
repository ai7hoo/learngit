var http = require('http')

var server = http.createServer(function(req,res){
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('{"uname":"ai7hoo"}')
})

server.listen(1337,'127.0.0.1')
console.log('Server running at 127.0.0.1:1337')