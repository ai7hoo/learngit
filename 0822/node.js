var http = require('http');

function getUrlText(url){
	var http = require('http');
	var html = '';
	http.get(url,function(res){
		res.on('data',function(data){
			html += data;
		});
		res.on('end',function(){
			console.log(html);
			return html;
		});
	}).on('error',function(){
		console.log('error');
	});
}

var server = http.createServer(function(reg,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(getUrlText('http://www.xiaoheishi.com'));
});
server.listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');