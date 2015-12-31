var student = require('./student');
var teacher = require('./teacher');

function add(teachers,students){
    teachers.forEach(function(item, index){
        teacher.add(item);
    });
    students.forEach(function(item, index){
        student.add(item);
    });
}

exports.add = add;