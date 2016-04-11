$(function() {
	var box = new Vue({
		el: "#box",
		data: {
			cat: 2,
			message: mm(),
			content: 'content',
			todos: [{
				id: '10',
				text: 'text'
			}, {
				id: '32',
				text: 'haha'
			}],
			list: [{
				id: '1',
				title: 't1',
				href: 'http://www.baidu.com'
			}, {
				id: '2',
				title: 't2',
				href: 'http://www.qq.com'
			}]
		},
		methods: {
			clickEvent: function(str, e) {
				alert(str);
				e.stopPropagation();
			}
		}
	});

	var form = new Vue({
		el: '#form',
		data: {
			msg: 'hi',
			checked: true,
			selected: 'one',
			multiSelect: 'two'
		}
	});

	$.ajax({
		url: 'http://localhost/testdata.json',
		type: 'get',
		timeout: 15000,
		success: function(dt) {
			for (var i = 0; i < dt.data.length; i++) {
				//box.$data.todos.$set(i,{id:dt.data[i].ID,text:dt.data[i].post_title});
			}
		},
		error: function(err) {
			alert(err);
		}
	});

	var computer = new Vue({
		el: "#compupter",
		data: {
			firstName: 'Ren',
			lastName: 'Qun'
		},
		computed: {
			fullName: function() {
				return this.firstName + ' ' + this.lastName;
			}
		},
		methods: {
			reBack: function() {
				alert('reBack');
			}
		}
	});

	Vue.directive('mydefine', {
		bind: function() {
			this.el.style.color = '#f00';
			this.el.style.backgroundColor = '#000';
		},
		update: function(value) {
			this.el.innerHTML = this.vm.nihao;
		}
	});

	var mydefine = new Vue({
		el: "#mydefine",
		data: {
			msg: 'msg',
			text: 'text',
			nihao: 'nihao'
		}
	});

	var t0920 = new Vue({
		el: "#t0920",
		data: {
			list: [{
				content: 'c1',
				id: 23
			}, {
				content: 'c1',
				id: 82
			}]
		},
		methods: {
			reload: function(str) {
				console.log(str);
			},
			reload2: function() {
				alert(str);
			}
		}
	});

	var template0920 = new Vue({
		el: "#template0920",
		data: {
			list: [{
				title: 'title1',
				content: 'content1'
			}, {
				title: 'title2',
				content: 'content2'
			}]
		},
		methods: {
			loadMore: function() {
				template0920.list.push({
					title: 'title3',
					content: 'content3'
				});
			}
		}
	});

	var demo0921 = new Vue({
		el: "#demo0921",
		data: {
			checked: true,
			msg: 'hi',
			picked: 1,
			items: [{
				tit: 't1',
				done: true
			}, {
				tit: 't2',
				done: false
			}]
		}
	});

	var subString = new Vue({
		el:"#subString",
		data:{
			msg:'中,，,，；ajij试以下啊，fal;jl文测;:i;垃圾啊拉'
		}
	});


});

function mm() {
	return 'message';
}

//字符串截取
Vue.filter('subString', function(value, len, hasDot) {
	var newLength = 0;
	var newStr = "";
	var chineseRegex = /[^\x00-\xff]/g;
	var singleChar = "";
	var strLength = value.replace(chineseRegex, "**").length;
	for (var i = 0; i < strLength; i++) {
		singleChar = value.charAt(i).toString();
		if (singleChar.match(chineseRegex) != null) {
			newLength += 2;
		} else {
			newLength++;
		}
		if (newLength > len) {
			break;
		}
		newStr += singleChar;
	}
	if (hasDot && strLength > len) {
		newStr += "...";
	}

	return value = newStr;
});