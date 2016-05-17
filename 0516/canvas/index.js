var fs = require('fs');
var xlsx = require('node-xlsx');

var list = xlsx.parse("users.xlsx");
var sheet = list[0].data;

var linshi = '';
for(var i=0;i<sheet.length;i++){
    linshi +=
        '<li class="clearfix">' +
        '<div class="expertAvatar">' +
        '<img src="../static/img/expert/avatar/' +
        (i+1)+
        '.jpg" alt="' +
        sheet[i][0]+
        '">' +
        '</div>' +
        '<div class="expertInfo">' +
        '<div class="expertName">' +
        sheet[i][0]+
        '</div>' +
        '<div class="expertPos">' +
        sheet[i][1]+
        '</div>' +
        '</div>' +
        '</li>';
}

writeFile(tmp);

function writeFile(str){
    // Ð´ÈëÎÄ¼þ
    fs.writeFile('user.txt', str, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("Write File Ok");
    });
}