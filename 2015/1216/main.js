define(function(require,exports,module){
	var $ = require('jquery');
	var semantic = require('semantic');
	module.exports = function(){
		$(".ui.checkbox").checkbox();
		$(".dropdown").dropdown();
		$(".message .close").on('click',function(){
			$(this).closest('.message').fadeOut();
		});
		$('.accordion').accordion();
		$("#add").on('click',function(){
			$("#testdimmer").dimmer('show');
		});
		$('.menu .item').tab();
	
$('#myForm')
  .form({
    fields: {
      name: {
        identifier : 'name',
        rules: [
          {
            type   : 'empty'
          }
        ]
      }
    }
  })
;
		
		
		
		
	}
});