/* 
* @Author: Quinn
* @Date:   2016-03-02 14:42:14
* @Last Modified by:   Quinn
* @Last Modified time: 2016-03-04 11:31:11
*/

require.config({
  baseUrl:'node_modules',
  paths:{
    'jquery':'jquery/dist/jquery.min',
    'bootstrap':'bootstrap/dist/js/bootstrap.min',
    'Vue':'vue/dist/vue.min'
  },
  shim:{
    'bootstrap':{
      deps:['jquery']
    }
  }
});

require(['jquery','bootstrap','Vue'],function($,bootstrap,Vue){

  var MyComponent = Vue.extend({
    template:"<h1>h1</h1>"
  });
  Vue.component('my-component',MyComponent);
  new Vue({
    el:'#example'
  });

  var C0 = Vue.extend({
    template:'<div>this is c0<C1></C1></div>',
    components:{
      C1:{
        template:'<div>this is c1</div>'
      }
    }
  });
  new C0({
    el:"#C0"
  });

});