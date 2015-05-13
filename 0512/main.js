$(function () {
	//for循环求给定数列的和
	var fArr = [2, 3, 4];
	$("#countfor").html(funForCount(fArr));
	
	//while循环求给定数列的和
	var wArr = [1, 2, 3];
	$("#countwhile").html(funWhileCount(wArr));
	
	//交错合并数组元素的函数
	var mergeA = ['a', 'b'];
	var mergeB = [1, 2, 3, 4, 5];
	$("#mergearr").html(mergeAB(mergeA, mergeB).join(','));
	
	//使用递归函数求0~n之间所有数的和
	var rArr = [1, 2, 3];
	$("#countRecusion").html(funRecusionCount(rArr));
	
	//计算斐波那契数列
	$("#feibo").html(fnfeibo(1000).join(', '));
	
	//给定数列排列输出最大
	var slArr = [5, 9, 89];
	$("#slnum").html(slnum(slArr));

});

//for 循环函数
function funForCount(arr) {
	var forCount = 0;
	for (var i = 0; i < arr.length; i++) {
		forCount += arr[i];
	}
	return forCount;
}

//while 循环函数
function funWhileCount(arr) {
	var whileCount = 0;
	var i = 0;
	do {
		whileCount += arr[i];
		i++;
	}
	while (i < arr.length);
	return whileCount;
}

//使用递归方式 不会递归....
function funRecusionCount(arr) {
	var i = 0;
	var okcount = 0;
	nbhs(i, arr);
	return okcount;

	function nbhs(i, arr) {
		if (i < arr.length) {
			okcount += arr[i];
			nbhs(i + 1, arr);
		}
	}
}

//合并数组元素
function mergeAB(ma, mb) {
	var mab = new Array();
	var mal = ma.length;
	var mbl = mb.length;
	var maxl = mal > mbl ? mal : mbl;

	for (var i = 0; i < maxl; i++) {
		if (i < mal && i < mbl) {
			mab.push(ma[i]);
			mab.push(mb[i]);
		}
		else if (i >= mal) {
			mab.push(mb[i]);
		}
		else if (i >= mbl) {
			mab.push(ma[i]);
		}

	}
	return mab;
}

//斐波那契数列函数
function fnfeibo(maxnum) {
	var countfb = [0, 1];
	for (var i = 1; i < maxnum; i++) {
		if (i == (countfb[countfb.length - 1] + countfb[countfb.length - 2])) {
			countfb.push(i);
		}
	}
	return countfb;
}

//求给定数列排序输出最大值
function slnum(arr){
	var allArr = [];
	for(var i = 0;i <= arr.length;i++){
		for( var j=i;j <= arr.length;j++){
			console.log(arr[i]);
		}
	}
}