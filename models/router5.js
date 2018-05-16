module.exports = {
    login:function(request,response){
        response.write('I am path method login');
    },
    registry:function(request,response){
        response.write('I am path method registry');
    }
}
