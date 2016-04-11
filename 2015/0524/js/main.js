window.onload = function(){
	//调用瀑布流函数
	getWaterFalls("main","box");
};
//瀑布流函数
function getWaterFalls(parentbox,box){
	var parentmain = document.getElementById(parentbox);
	var boxitems = getClass(parentbox,'box');
	var oneW = boxitems[0].offsetWidth;
	var line = Math.floor( (document.documentElement.clientWidth || window.innerWidth)/oneW );
	parentmain.style.width=oneW*line+'px';
	parentmain.style.margin='0 auto';

	var allH = new Array();
	for(var i = 0;i < boxitems.length;i++){
		if(i < line){
			allH.push(boxitems[i].offsetHeight);
		}
		else {
			var minH = Math.min.apply(null,allH);
			var ind = getMinHeigthIndex(minH,allH);
			boxitems[i].style.position="absolute";
			boxitems[i].style.left=ind*oneW+'px';
			boxitems[i].style.top=allH[ind]+'px';
			allH[ind]+=boxitems[i].offsetHeight;
		}
	}

}

//class获取函数
function getClass(parentname,clsname){
	var parentname = document.getElementById(parentname);
	var parentchild = parentname.getElementsByTagName('*');
	var clsarr = new Array();
	for(var i = 0;i < parentchild.length;i++){
		if( parentchild[i].className == clsname ){
			clsarr.push(parentchild[i]);
		}
	}
	return clsarr;
}
//获取数组最小的数值并返回索引值
function getMinHeigthIndex(ind,arr){
	for(i in arr){
		if(arr[i] == ind){
			return i;
		}
	}
}