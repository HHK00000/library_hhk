var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'hhk01'
});

connection.connect();
// /** 查询数据库
var sql01 = 'SELECT * FROM course';
var sql02 = 'SELECT * FROM score';
var sql03 = 'SELECT * FROM student';
var sql04 = 'SELECT * FROM teachers';
var sql05 = 'SELECT * FROM testutf8';

getMysqlData(sql01);
getMysqlData(sql02);
getMysqlData(sql03);
getMysqlData(sql04);
getMysqlData(sql05);
//  */

// /** 向数据库中 添加数据
var sql11 = "INSERT INTO student(sid,sname,sage,ssex) VALUES(?,?,?,?)";
var params11 = ['s14', '王阳明','20', 'm'];

var sql12 = "INSERT INTO score(sid,cid,score) VALUES(?,?,?)";
var params12 = ['s15', 'c15','88'];

var sql06 = 'SELECT * FROM score';

editMysqlData(sql11,params11);

// editMysqlData(sql12,params12);
// getMysqlData(sql06);

//  */

connection.end();


function getMysqlData(sql){

  connection.query(sql, function (err,result){
    if(err){
      console.log('sql错误');
      return;
    }
    console.log('---------------------SELECT---------------------');
    console.log(result);
    console.log('--------------------------------------------\n\n');
  })
}

function editMysqlData(sql,params){
  //增
  connection.query(sql,params,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }        

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:',result);        
    console.log('-----------------------------------------------------------------\n\n');  
  });
}