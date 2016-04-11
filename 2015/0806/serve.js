/* 
 * @Author: Marte
 * @Date:   2015-08-07 13:40:32
 * @Last Modified by:   Marte
 * @Last Modified time: 2015-08-07 13:46:16
 */

var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello Nodejs\n');
})
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');