var fs = require('fs');
fs.writeFile('test.txt','hehehehehehehe','utf8',function(err){
	console.log(err);
});
