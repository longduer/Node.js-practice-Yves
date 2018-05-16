var http = require('http');
var fun = require('./models/functions');

http.createServer(
    function (request, response){
        response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        if(request.url!=="/favicon.ico"){
            funname = 'fun2';
            fun['fun3'](response);
            fun[funname](response);
            response.end('');
        }
    }
).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
