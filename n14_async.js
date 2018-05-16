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
/**
* 1 串行无关联：async.series
* 2 并行无关联：async.parallel
* 3 串行有关联：async.waterfall
* 4 paralleLimit：parallelLimit函数和parallel类似，但是它多了一个参数limit
*   limit参数限制任务只能同时并发一定数量，而不是无限制并发
**/
/*function exec(){
    async.parallel(
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
}*/



function exec(){
    /**
     * 1 串行无关联：async.series
     * 2 并行无关联：async.parallel
     * 3 串行有关联：async.waterfall
     * 4 paralleLimit：parallelLimit函数和parallel类似，但是它多了一个参数limit
     *   limit参数限制任务只能同时并发一定数量，而不是无限制并发
     */


    //async.waterfall编写方式
    //1 []代替{}
    //2 匿名函数
    //3 functionOne结果可以返回到结果functionTwo中
    async.waterfall(
        [
            function (done) {
                var number = 0;
                setInterval(function () {
                    console.log('oneFun : ' + new Date());
                    number++;
                    if(number>=3){
                        clearInterval(this);
                        done(null,'one done result!');
                    }
                }, 1000)
            },
            function (preResult,done) {
                var count = 0;
                setInterval(function () {
                    console.log('twoFun : ' + preResult + new Date());
                    count++;
                    if(count>=3){
                        clearInterval(this);
                        done(null,'two done!');
                    }
                }, 1000)
            }
        ],function (err,result) {
            console.log(err);
            console.log(result);
        }
    );
}
 exec();
// oneFun();
// twoFun();
console.log('all completed');