//加载了一个叫http的模块，负责创建http
//通过创建的http来创建一个服务器
//通过listen来监听本地端口来响应请求
//当请求进来的时候告诉nodejs要做什么，所以传入一个匿名函数,同时传入两个参数，reg和res，请求体和响应体
//req获取请求相关的信息
//res告诉服务器给响应的内容


var http = require('http')
var server = http.createServer(function(reg,res){
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end('Hello Quinn\n')
})
server.listen(1337,'127.0.0.1')
console.log('Server running at http://127.0.0.1:1337')