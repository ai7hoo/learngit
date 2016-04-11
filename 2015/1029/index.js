var express = require('express');
var app = express();

app.get('/jkxy',function(req,res){
	res.send('this is my node');
});

app.listen(2000);