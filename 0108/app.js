var express = require('express');
var url = require('url'); //解析操作url
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var targetUrl = 'https://item.taobao.com/item.htm?id=522035124540';
superagent.get(targetUrl).end(function (err, res) {
	var $ = cheerio.load(res.text);
	$('meta').each(function (idx, element) {
		if( $(element).attr('name') == 'description' ){
			console.log($(element).attr('content'));
		}
	});
});
