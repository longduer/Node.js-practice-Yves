var fs = require('fs');

module.exports = {
    readfileSync:function(path,response){
        var data = fs.readFileSync(path, 'utf-8');
        console.log('同步读取文件方法执行完毕');
        response.write(data);
        return data;
    },
    readfile:function (path, recall) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
                recall(data);
            }
            console.log('同步读取文件方法执行完毕');
        });
    },
    writeFile:function (path, data, recall) {
        fs.writeFile(path, data, function (err) {
            if (err){
                throw err;
            }
            console.log('It\'s saved!')
            recall('写文件成功');
        });
    },
    writeFileSync:function (path,data) {
        fs.writeFileSync(path,data);
        console.log('同步写文件完成');
    }
}