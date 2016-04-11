require(['jquery','vue'],function($,Vue){
  var MyComponent = Vue.extend({
    props:['userName'],
    template:'<h1>{{userName}}</h1>',
  });
  Vue.component('my-component',MyComponent);
  new Vue({
    el:"#example",
    data:{
      userName:'ai7hoo'
    },
    methods:{
      alertNum:function(str){
        alert(str.length);
      }
    }
  });
  
  var ParentNode = Vue.extend({
    template:'<span>1111</span>'
  });
  var myName = Vue.extend({
    components:{
      'parent-node':ParentNode
    }
  });
  new myName({
    el:"#box"
  });
});