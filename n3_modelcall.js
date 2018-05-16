var http = require('http');
var User = require('./models/User');
var Teacher = require('./models/Teacher');

http.createServer(
    function (request, response){
        response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        if(request.url!=="/favicon.ico"){
            user = new User(1,'Yves',18);
            user.saySomething('hello baby',response);
            response.write('</br>');
            teacher = new Teacher(1668,'Teacher Leung',35);
            teacher.saySomething('do you homework,pupils',response);
            teacher.teach(response);
            response.end('');
        }
    }
).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
