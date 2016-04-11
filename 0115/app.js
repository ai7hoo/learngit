var MyComponent = Vue.extend({
  template:'<p>测试组件的使用方式</p>'
});

Vue.component('my-component',MyComponent);

new Vue({
  el:"#app"
});



var Compon = Vue.extend({
  template:'<li></li>',
  props:['userList']
});

Vue.component('compon',Compon);

new Vue({
  el:"#box",
  data:{
    userList:[{
      name:'ai7hoo',
      age:26
    },{
      name:'quinn',
      age:24
    }]
  }
});

var MyCom = Vue.extend({
  template:'<p>aa</p>',
  props:['arr']
});

Vue.component('vm-component',MyCom);

new Vue({
  el:"#vm",
  data:{
    arr:[{
      name:'ai7hoo.'
    },{
      name:'quinn。'
    },{
      name:'bob'
    },{
      name:'linda'
    },{
      name:'fiona'
    }]
  }
});
