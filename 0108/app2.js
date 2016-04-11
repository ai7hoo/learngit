var express = require('express');
var url = require('url'); //解析操作url
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var targetUrl = 'http://www.bonho.cn/?cat=2';
superagent.get(targetUrl).end(function (err, res) {
	var $ = cheerio.load(res.text);
	$('#cmaincon ul li').each(function (idx, element) {
		if( true ){
			console.log($(element).find('a img').attr('src'));
		}
	});
});
