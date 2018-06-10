var b1 = new Buffer("asdfas");
var _ = require('lodash');
var sinon = require('sinon');

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

var middlewareFunc = sinon.stub();
var middleware = sinon.stub().returns(middlewareFunc);
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
