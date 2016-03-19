require.config({
  paths:{
    'jquery':'http://cdn.bootcss.com/jquery/2.1.4/jquery',
    'masonry':'http://cdn.bootcss.com/masonry/4.0.0/masonry.pkgd.min'
  }
});

requirejs(['jquery','masonry'],function($,Masonry){
  var grid = document.querySelector('.grid');
  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: 200
  });
});
