require.config({
  baseUrl:'bower_components',
  paths:{
    'vue':'vue/dist/vue.min',
    'vue-router':'vue-router/dist/vue-router.min',
    'jquery':'jquery/dist/jquery.min',
    'bootstrap':'bootstrap/dist/js/bootstrap.min',
    'domReady':'http://cdn.bootcss.com/require-domReady/2.0.1/domReady.min'
  },
  shim:{
    'bootstrap':{
      deps:['jquery']
    }
  },

  urlArgs: 'v=1.0.0'  // 开发环境使用，部署到生产环境前移除
});
