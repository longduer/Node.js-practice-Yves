var optfile = require('./optfile8');
var url = require('url');
var querystring = require('querystring');


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
        /*
        method: get**********
        var queryParameters = url.parse(request.url, true).query;
        console.log(queryParameters);
        var mobile = queryParameters['mobile'];
        var password = queryParameters['password'];
        if(mobile && mobile!=undefined){
            console.log('mobile:' + mobile);
        }
        if(password && password!=undefined){
            console.log('password:' + password);
        }
        method: get**********
        */

        //method: post**********
        var post = '';
        request.on('data', function (chunk) {
            post +=chunk;
        });
        request.on('end', function () {
            post = querystring.parse(post);
            console.log('mobile: '+post['mobile']);
            console.log('password: '+post['password']);
        });
        //method: post**********

        //recall = getRecall(request,response);

        var arr = ['mobile','password'];
        function recall(data){
            var dataString = data.toString();
            for (var i=0;i<arr.length;i++) {
                re = new RegExp('{' +arr[i]+'}','g');
                dataString = dataString.replace(re,post[arr[i]]);
            }
            response.write(dataString);
            response.end('');
        }
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
