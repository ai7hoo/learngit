define(function(require,exports,model){
	var $ = require('jquery');
	var timePick = require('jquery.datetimepicker.full.min');
	model.exports = function(){
		$.datetimepicker.setLocale('zh');

		$('#datetimepicker').datetimepicker({
		dayOfWeekStart : 1,
		lang:'en',
		disabledDates:['1986/01/08','1986/01/09','1986/01/10'],
		startDate:	'1986/01/05'
		});
		$('#datetimepicker').datetimepicker({value:'2015/04/15 05:03',step:10});
	}
});