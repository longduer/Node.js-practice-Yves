var mysql = require('mysql');
//创建一个connection  
var connection = mysql.createConnection({
    host: '192.168.31.182', //主机
    user: 'root', //MySQL认证用户名  
    password: 'root', //MySQL认证用户密码
    database: 'nodejs',
    port: '3306' //端口号  
});

//创建一个connection  
connection.connect(function(err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

//----插入
var userAddSql = 'insert into ionc_user(id, username, mobile, password, create_time, update_time, invite_code, source) values(?,?,?,?,?,?,?,?)';
var param = ['000002', '2003','18321972003','glory','2018-05-16 15:15:15','2018-05-16 15:15:15','yves','1'];
connection.query(userAddSql, param, function(err, rs) {
    if (err) {
        console.log('insert err:', err.message);
        return;
    }
    console.log('insert success');
});

//执行查询  
connection.query('SELECT * from ionc_user where username=?', ['2003'], function(err, rs) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log(rs.length);
    for (var i = 0; i < rs.length; i++) {
        console.log('The solution is: ', rs[i].mobile);
    }
});

//关闭connection  
connection.end(function(err) {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
});