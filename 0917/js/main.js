$(function(){
	var box = new Vue({
		el: "#box",
		data: {
			cat:2,
			message:mm(),
			content:'content',
			todos:[
				{
					id:'10',
					text:'text'
				},
				{
					id:'32',
					text:'haha'
				}
			],
			list:[
				{
					id:'1',
					title:'t1',
					href:'http://www.baidu.com'
				},{
					id:'2',
					title:'t2',
					href:'http://www.qq.com'
				}
			]
		},
		methods:{
			clickEvent:function(str,e){
				alert(str);
				e.stopPropagation();
			}
		}
	});

	var form = new Vue({
			el:'#form',
			data:{
				msg:'hi',
				checked:true,
				selected:'one',
				multiSelect:'two'
			}
		});
	
	$.ajax({
		url:'http://localhost/testdata.json',
		type:'get',
		timeout:15000,
		success:function(dt){
			for(var i=0;i<dt.data.length;i++){
				//box.$data.todos.$set(i,{id:dt.data[i].ID,text:dt.data[i].post_title});
			}
		},
		error:function(err){
			alert(err);
		}
	});

	var computer = new Vue({
		el:"#compupter",
		data:{
			firstName:'Ren',
			lastName:'Qun'
		},
		computed:{
			fullName:function(){
				return this.firstName + ' ' + this.lastName;
			}
		},
		methods:{
			reBack:function(){
				alert('reBack');
			}
		}
	});

	Vue.directive('mydefine',{
		bind:function(){
			this.el.style.color='#f00';
			this.el.style.backgroundColor='#000';
		},
		update:function(value){
			this.el.innerHTML = value;
		}
	});

	var mydefine = new Vue({
		el:"#mydefine",
		data:{
			msg:'hello',
			text:'hhh'
		}
	});

});

function mm(){
	return 'message';
}