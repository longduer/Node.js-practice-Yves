var async = require('async');

function oneFun() {
    var number = 0;
    setInterval(function () {
        console.log('oneFun : ' + new Date());
        number++;
        if(number>=3){
            clearInterval(this);
        }
    }, 1000)
    console.log('oneFun complete!');
}

function twoFun() {
    var count = 0;
    setInterval(function () {
        console.log('twoFun : ' + new Date());
        count++;
        if(count>=3){
            clearInterval(this);
        }
    }, 1000)
    console.log('twoFun complete!');
}

function exec(){
    async.series(
        {
            one:function (done) {
                var number = 0;
                setInterval(function () {
                    console.log('oneFun : ' + new Date());
                    number++;
                    if(number>=3){
                        clearInterval(this);
                        done(null,'one done!');
                    }
                }, 1000)
            },
            two:function (done) {
                var count = 0;
                setInterval(function () {
                    console.log('twoFun : ' + new Date());
                    count++;
                    if(count>=3){
                        clearInterval(this);
                        done(null,'two done!');
                    }
                }, 1000)
            }
        },function (err,result) {
            console.log(err);
            console.log(result);
        }
    );
}
 exec();
// oneFun();
// twoFun();
console.log('all completed');