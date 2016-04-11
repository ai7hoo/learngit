var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var requrl = 'http://www.bonho.cn';
request(requrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body);    //返回请求页面的HTML
	acquireDate(body);
  }
})

function acquireDate(data) {
    var $ = cheerio.load(data);  //cheerio解析data
 
    var meizi = $('img').toArray();  //将所有的img放到一个数组中
    console.log(meizi.length);
    var len = meizi.length;
    for (var i=0; i<len; i++) {
        var imgsrc = meizi[i].attribs.src;  //用循环读出数组中每个src地址
        console.log(imgsrc);                //输出地址
		var filename = parseUrlForFileName(imgsrc);
		downloadImg(imgsrc,filename,function(){
			console.log(filename + 'done');
		});
    }
}

function parseUrlForFileName(address){
	var filename = path.basename(address);
	return filename;
}

var downloadImg = function(uri,filename,callback){
	request.head(uri,function(err,res,body){
		if(err){
			console.log('err:'+err);
			return false;
		}
		console.log('res:'+res);
		request(uri).pipe(fs.createWriteStream('images/'+filename)).on('close',callback);
	});
}