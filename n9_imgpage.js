var http = require('http');
var url = require('url');
var router = require('./models/router9');

http.createServer(
    function (request, response){
        //response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        if(request.url!=="/favicon.ico"){
            var pathname = url.parse(request.url).pathname;
            pathname = pathname.replace(/\//,'');
            console.log(pathname);
            try{
                router[pathname](request, response);
            }catch (e) {
                console.log('exception:' + e);
                response.write(e.toString());
                response.end();
            }
        }
    }
).listen(8000);

console.log('Server running at http://127.0.0.1:8000/imgpage');
