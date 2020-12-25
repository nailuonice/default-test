// var b1 = new Buffer("asdfas");
// var _ = require('lodash');
// var sinon = require('sinon');

/*//测试字符串占用几个字节
Buffer.prototype.toByteArray = function () {
    return Array.prototype.slice.call(this, 0)
}
b1.toByteArray();
console.info(b1)
console.info(b1.toByteArray());*/

/*var collection = [
    { name: 'Chad', skills: [ 'backbone', 'lodash' ] },
    { name: 'Simon', skills: [ 'html', 'css', 'less' ] },
    { name: 'Katie', skills: [ 'grunt', 'underscore' ] },
    { name: 'Jennifer', skills: [ 'css', 'grunt', 'less' ] }
];

console.warn(_(collection));
console.warn(_(collection).pluck('skills'));
var result = _(collection)
    .pluck('skills')
    .reduce(function(result, item){
        return _.size(item) > 2 &&
            _.contains(item, 'grunt') &&
            result + 1;
    },0);

console.log("222222222222 "+result);//1*/

// var middlewareFunc = sinon.stub();
// var middleware = sinon.stub().returns(middlewareFunc);
// console.warn(middlewareFunc);
// console.warn(middleware);

// var assert = require("assert");
// assert.equal(-1, [1,2,3].indexOf(5));

// function add(...x){
//     return x.reduce((m,n)=>m+n);
// }
// //传递任意个数的参数
// console.log(add(1,2,3));//输出：6
// console.log(add(1,2,3,4,5));//输出：15

/*Generator自动执行器*/
/*
var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

var gen = function* (){
    var f1 = yield readFile('./src/1.js');
    var f2 = yield readFile('./src/2.js');
    console.log(f1.toString());
    console.log(f2.toString());
};
function run(gen){
    var g = gen();

    function next(data){
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function(data){
            next(data);
        });
    }

    next();
}

run(gen);*/

/*基于 Promise 对象的自动执行*/
/*
var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

var gen = function* (){
    var f1 = yield readFile('./src/1.js');
    var f2 = yield readFile('./src/2.js');
    console.log(f1.toString());
    console.log(f2.toString());
};
function run(gen){
    var g = gen();

    function next(data){
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function(data){
            next(data);
        });
    }

    next();
}

run(gen);*/

/*async 函数
async 函数，一句话，它就是 Generator 函数的语法糖。
上面的例子，写成async函数，就是下面这样：*/
/*var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = async function (){
    var f1 = await readFile('./src/1.js');
    var f2 = await readFile('./src/2.js');
    console.log(f1.toString());
    console.log(f2.toString());
};
asyncReadFile();*/


/*var arr = [1,2,3];
for(var v of arr) {
    console.warn(v);
}*/


// let timer = setTimeout(function(timer) {
//     console.log(timer);
//     timer+=1;
//     console.log(timer);
//     },0)
// console.log(timer);


// function fn1(){
//     for(var i=0;i<4;i++){
//         var tc=setTimeout(function(i){
//             console.log('func 1--->', i);
//             clearTimeout(tc)
//         },10,i);
//     }
// }
// function fn2(){
//     for(var i=0;i<4;i++){
//         var tc = setInterval(function(i,tc){
//             console.log('func 2--->', i);
//             clearInterval(tc)
//         },10,i,tc);
//     }
// }
// fn1();
// fn2();

// for (var i = 1; i <= 5; i++) {
//     setTimeout( function timer() {
//         console.log(i);
//     }, i * 1000 );
//   }
// for (let i = 1; i <= 5; i++) {
//     setTimeout( function timer() {
//         console.log(i);
//     }, i * 1000 );
//   }


// async function async1(){
//     console.log('async1 start')  // 同步任务
//     await async2()  // 等待完成后 接着同步任务
//     console.log('async1 end')
// }
// async function async2(){
//     console.log('async2')
// }
// console.log('script start')  // 同步任务
// setTimeout(function(){
//     console.log('setTimeout0')  // 异步 macroTask       其实是1ms 对比setImmediate 看情况：走到timer阶段时不到1ms 则后打印
// },0)  
// setTimeout(function(){
//     console.log('setTimeout3')  // 异步 macroTask
// },3)  
// setImmediate(() => console.log('setImmediate'));    // 下次事件循环时执行
// process.nextTick(() => console.log('nextTick'));    // 本次事件循环前执行  newtickQueue
// async1();
// new Promise(function(resolve){
//     console.log('promise1')  // 同步任务
//     resolve();                  // 异步
//     console.log('promise2')  // 同步任务
// }).then(function(){
//     console.log('promise3')     // 异步 microTask
// })
// console.log('script end')  // 同步任务


// 原因nextTickQueue > microTaskQueue > macroTaskQueue

// process.nextTick(() => console.log(1));
// Promise.resolve().then(() => console.log(2));
// process.nextTick(() => console.log(3));
// Promise.resolve().then(() => console.log(4));

//   function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }
  
//   let [first, second, third, fourth, fifth, sixth] = fibs();
//   console.log(first, second, third, fourth, fifth, sixth)


var name="global";
function foo(){
    console.log(name);
}
function fooOuter1(){
    var name="local";
    console.log('ddd ', name);
    foo();
    console.log("dsdfa ",name);

    let arr = []
    for (let i = 0; i < b.length; i++) {
        arr.push(b+"12345678")
    }
}
fooOuter1();
