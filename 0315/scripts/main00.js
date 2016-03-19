require.config({
  paths:{
    'vue':'../bower_components/vue/dist/vue.min',
    'vue-router':'../bower_components/vue-router/dist/vue-router'
  }
});
requirejs(['vue','vue-router'],function(Vue,VueRouter){
  Vue.use(VueRouter);
  var Foo = Vue.extend({
    template:
    '<div>'+
    '<p>头头</p>'+
    '<router-view></router-view>'+
    '</div>'
  });
  var Bar = Vue.extend({
    template:'你丫'
  });
  var Bax = Vue.extend({
    template:'我擦'
  });
  var App = Vue.extend({});
  var router = new VueRouter();
  router.map({
    '/foo':{
      component:Foo,
      subRoutes:{
        '/bar':{
          component:Bar
        },
        '/bax':{
          component:Bax
        }
      }
    }
  });
  router.start(App,'#app');
});
