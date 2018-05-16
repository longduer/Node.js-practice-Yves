function User(id,name,age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.saySomething = function(sth, response){
        console.log(name + '的id:' +id + ',name:'+name+',I am saying ' + sth);
        response.write(name + '的id:' +id + ',name:'+name+',I am saying ' + sth);
    }
}

module.exports = User;
