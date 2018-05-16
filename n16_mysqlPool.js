var OptPool = require('./models/OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();

//从连接池获取连接
pool.getConnection(function(err, conn) {
    //----插入 
/*    var userAddSql = 'insert into ionc_user(id, username, mobile, password, create_time, update_time, invite_code, source) values(?,?,?,?,?,?,?,?)';
    var param = ['000003', '2003','18321972003','glory','2018-05-16 15:15:15','2018-05-16 15:15:15','yves','1'];
    conn.query(userAddSql, param, function(err, rs) {
            if (err) {
                console.log('insert err:', err.message);
                return;
            }
            console.log('insert success');
    })*/
        //查询 
    conn.query('SELECT * from ionc_user', function(err, rs) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        for (var i = 0; i < rs.length; i++) {
            console.log(rs[i]);
        }
        conn.release(); //放回连接池(必须在完成操作之后)
    });
});