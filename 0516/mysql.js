var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'nodejs'
})

connection.connect();

connection.query('SELECT 1+10 AS solution',function(err,rows,fields){
    if(err) throw err;
    console.log('The solution is: ',rows[0].solution)
})

connection.end();