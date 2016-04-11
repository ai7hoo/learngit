var teacher = function(){
	return function(){
		var _this = {};
		_this.name = 'ai7hoo';
		_this.say = function(){
			alert('a');
		}
		return _this;
	}
}

var t = teacher()();
t.say()