requirejs.config({
    paths: {
        jquery:'jquery'
    }
});

requirejs(['jquery','yuanxing'],function($,yuanxing){
    var yx = new yuanxing.Yuanxing();
    $("body,html").on('click',$.proxy(yx.move,yx));
});