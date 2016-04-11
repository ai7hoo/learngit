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
    '<div class="foo">'+
    'this is foo.'+
    '<router-view></router-view>'+
    '</div>'
  });
  var Bar = Vue.extend({
    template:'<p>this is bar.</p>'
  });
  var Baz = Vue.extend({
    template:'<p>this is baz.</p>'
  });
  var Bax = Vue.extend({
    template:'<p>this is bax</p>'
  });

  var router = new VueRouter();
  router.map({
    '/foo':{
      component:Foo,
      subRoutes:{
        '/':{
          component:{
            template:'<p>Default sub view for Foo</p>'
          }
        },
        '/bar':{
          component:Bar
        },
        '/baz':{
          component:Baz
        },
        '/bax':{
          component:Bax
        }
      }
    }
  });
  var App = Vue.extend({});
  router.start(App,'#app');
});
