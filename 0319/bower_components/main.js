requirejs(['domReady','vue','vue-router'],function(domReady,Vue,VueRouter){
  domReady(function(){
    // Vue.use(VueRouter);

    var Child = Vue.extend({
      props:['item'],
      template:'<p>this is Child. </p>'
      +'Age: {{item.age}} '
      +'Sex: {{item.sex}} '
      +'<hr>'
    });

    var Parent = Vue.extend({
      template:'<p v-on:click="handleIt">{{nickname}}</p>'
      +'<child v-for="item in itemList" :item=item></child>',
      components:{
        'child':Child
      }
    });
    new Parent({
      el:"#example",
      data:{
        nickname:'quinn',
        itemList:[{
          age:24,
          sex:'1'
        },{
          age:26,
          sex:'2'
        },{
          age:22,
          sex:'2'
        }]
      },
      methods:{
        handleIt:function(){
          alert('testMethods');
        }
      }
    });
  });
});
