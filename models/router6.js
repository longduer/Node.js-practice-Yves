var optfile = require('./optfile6');

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
    }
}
