var optfile = require('./optfile7');

module.exports = {
    login:function(request,response){
        function recall(data){
            response.write(data);
            response.end('ok');
        }
        optfile.readfile('./views/login.html',recall);
    },
    registry:function(request,response){
        function recall(data){
            response.write(data);
            response.end('ok');
        }
        optfile.readfile('./views/registry.html',recall);
    },
    writeFile:function (request, response) {
        function recall(data){
            response.write(data);
            response.end('ok');
        }
        optfile.writeFile('./views/one.html','今天是个好日子-12345678910',recall);

    }
}
