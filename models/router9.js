var optfile = require('./optfile8');

function getRecall(request, response){
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    function recall(data){
        response.write(data);
        response.end('');
    }
    return recall;
}
module.exports = {
    login:function(request,response){
       recall = getRecall(request,response);
       optfile.readfile('./views/login.html',recall);
    },
    registry:function(request,response){
        recall = getRecall(request,response);
        optfile.readfile('./views/registry.html',recall);
    },
    writeFile:function (request, response) {
        function recall(data){
            response.write(data);
            response.end('ok');
        }
        optfile.writeFile('./views/one.html','今天是个好日子',recall);

    },
    showimg: function(request, response) {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        optfile.readImg('./images/dog.jpg', response);
    }
    ,
    imgpage:function(request,response){
        recall = getRecall(request,response);
        optfile.readfile('./views/imgpage.html',recall);
    }
}
