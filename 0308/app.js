globalFunction = function(){
    console.log('a global function');
}

setInterval(() => {
    globalFunction();
}, 1000);