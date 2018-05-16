var http = require('http');
var optfile = require('./models/optfile8');

http.createServer(
    function (request, response){
        response.writeHead(200, {'Content-Type':'image/jpeg'});
        if(request.url!=="/favicon.ico"){
            optfile.readImg('./images/dog.jpg',response);
            console.log('主程序执行完毕');
        }
    }
).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
