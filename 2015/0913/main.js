window.onload = function(){
	var nowMonthLength = getLatDay().getDate();
	var nowDay = new Date();
	var nowWeek = new Date(nowDay.getFullYear(),nowDay.getMonth(),1).getDay();
	var str = '';
	console.log(nowDay.getDate());
	for(var i=0;i<nowWeek;i++){
		str += '<dd></dd>';
	}
	for(var j=0;j<nowMonthLength;j++){
		if(nowDay.getDate() == j+1){
			str += '<dd class="today">'+(j+1)+'</dd>'
		}
		else {
			str += '<dd>'+(j+1)+'</dd>'
		}
		
	}
	var lastDayWeek = getLatDay().getDay();
	for(var k=0;k<(6-lastDayWeek);k++){
		str += '<dd></dd>';
	}
	
	$(".databox-day dl").append(str);
	
};

//获取当前日期的最后一天
function getLatDay(){
	var data = new Date();//获取当前日期
	var nowYear = data.getFullYear();//获取当前年份
	var nowMonth = data.getMonth();//获取当前月份
	var nextMonth = nowMonth+1;//获取下个月份
	if(nextMonth > 12){//判断下个月份是否是明年
		nextMonth = nextMonth-12;
		nowYear = nowYear+1;
	}
	var newdata = new Date(nowYear,nextMonth,1);//获取下个月的第一天
	var lastDay = new Date(newdata.getTime()-24*60*60*1000);//获取当前月份最后一天
	return lastDay;
}