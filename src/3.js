// let  moment     =            require ('moment');

// function init_mac_configToOss( ){
//   let curtime = new Date();
//   let cur = moment().hour();
//   console.log(cur, curtime.getHours());
// }
// init_mac_configToOss();

//
// let arr =
//   [
//     {
//       "shutdown_time": "00:00",
//       "boot_time": "00:00",
//       "scenes": [
//         "taobao1",
//         "mafengwowow",
//         "taobao2",
//         "taobaoiot"
//       ]
//     }]
//
// for(let [k,i] of arr.entries()) {
//   console.log(k,i)
// }

// let a = '00:00';
// let shutdown_time = a.split(':');
// console.log(shutdown_time);

// let arr =['a','b','c'];
// let k = arr.join();
// console.log(k,typeof (k),arr);
//
// function deweight (arr) {
//   let seen = new Map();
//   return arr.filter(e => !seen.has(e) && seen.set(e, 1));
// }
// let b = deweight(arr);
// console.log(b);

// let arr = ',2,3,4';
// console.log(arr.split(','));

// let items = [1,2,3,4];
// let glistData = {};
// items.every(item => {
//   if (6 <= item) {
//     glistData = item;
//     return false;
//   }
//   return true;
// });
//
// console.log(glistData);


// var urlencode = require('urlencode');

// let str1 = 'query=%7B%22limit%22:20,%22offset%22:0,%22where%22:%7B%22type%22:1%7D,%22order%22:[[%22createdAt%22,%22desc%22]]%7D';
// console.log(urlencode(obj));
// console.log(encodeURIComponent(str1));

// let str2 = decodeURI(str1);
// console.log(str2,typeof (str2));

// let str3 = encodeURIComponent(str2);
// console.log(str3);

// function url_encode(url){
//   url = encodeURIComponent(url);
//   url = url.replace(/\%3A/g, ":");
//   url = url.replace(/\%2F/g, "/");
//   url = url.replace(/\%3F/g, "?");
//   url = url.replace(/\%3D/g, "=");
//   url = url.replace(/\%26/g, "&");
//   url = url.replace(/\%2C/g, ",");

//   return url;
// }
// console.log(url_encode(str2));
// console.log(str1);

/*let Hashids = require('hashids');

let _hashid = new Hashids('test', 16);
console.log(_hashid.encode(4,3))
console.log(_hashid.encode(4,3));

var appRoot = require('app-root-path');
console.log(appRoot.path,__dirname);


const s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

const guid = function () {
    return s4()
        + s4() + '-'
        + s4() + '-'
        + s4() + '-'
        + s4() + '-'
        + s4() + s4() + s4();
};
guid();
console.log(guid());

let limitCoupons = [1,2,3,4];
let downloadArr = limitCoupons.map(e => {
    return {
        code: e
    };
});
console.log(downloadArr,parseInt(2),parseInt(30 / 100));*/
// const PutObj = require('./2.js');
// const path = require('path');
// const fs = require('fs');
// const async = require('async');

// const Crypto = require('crypto');
// Crypto.randomBytes(4, (err, buf) => {
//     if (err) throw err;
//     console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
// });

/*const { Crypto } = require('cryptojs');
let randomStr = Crypto.util.randomBytes(16);
randomStr = Crypto.util.bytesToHex(randomStr);

let bytes = Crypto.HMAC(Crypto.SHA1, JSON.stringify({
    random: randomStr
}), uuid = 'as/+dddf', { asBytes: true });
console.log(bytes);
let arr = Crypto.util.bytesToBase64(bytes)
    .replace(/\//g, '-')
    .replace(/\+/g, '-');
console.log(arr);*/

/*var arr=[1,2,3,4,5,6];
var sum=arr.reduce(function(pre,cur,index,arr){
    console.log(pre,cur,index);//当前项的下标
    return pre+cur;
});
console.log(sum);//21*/

/*let value = 'li shi aa';
var names = value.split(' ');
let f1 = names.slice(0, -1).join(' ');
let f2 =  names.slice(-1).join(' ');
console.log(names,f1,f2);*/


/*function trimArr (arr) {
    arr = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
let list = (',133,124,' || '').split(',').map(e => Number(e));
console.log(list);
list = trimArr(list);
console.log(list);


console.log(!/[1-9][0-9]*!/g.test('a'));*/


/*
const path = require('path');

const base_path = path.resolve(__dirname, './upload_config');
const zipper = require('zip-local');

let update = {a:1,b:2};
if(!fs.existsSync(base_path)){
    fs.mkdirSync(base_path);
}
fs.writeFile(path.join(base_path, '2.txt'), JSON.stringify(update), 'binary', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(base_path,update);
        console.log('ok');
    }
});

fs.readFile(path.join(base_path, '2.txt'),{encoding:'utf-8'}, function (err,bytesRead) {
    if (err) throw err;
    console.log(bytesRead);
});

//打包压缩
let file = path.join(base_path, '2.txt');
zipper.sync.zip(file).compress().save(file+'.zip');
*/


/*
  * 修改为配置文件
  * */
//配置文件根目录
/*const base_path = path.resolve(__dirname, './upload_config');
if(!fs.existsSync(base_path)){
    fs.mkdirSync(base_path);
}
let update ={a:1,b:2};
fs.writeFile(path.join(base_path, 'upload.txt'), JSON.stringify(update), {encoding: 'utf8'}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(base_path,update);
        console.log('ok');
    }
});
console.log(`${update.a}.txt`)*/

// function getVersionDetail(version) {
//   if (!version) {
//     return ['unknown', 'unknown'];
//   }
//   return version.replace(/^(\d{0,})[(,](.*)$/, '$2;$1').replace(/[(,)]*!/g, '').split(';');
// }
// let version = '63(1.7.1)';
// // let version1 = getVersionDetail(version);
// // version1;
// // let version2 = version.replace(/^(\d{0,})[(,](.*)$/, '$2;$1');
// // version2;
// // let version3 = version2.replace(/[(,)]*/g, '');
// // version3;
//
// function getVersionTypes (version) {
//   let [name, serial] = getVersionDetail(version);
//   return [`${serial},${name}`, `${serial}(${name})`];
// }
// let k = getVersionTypes(version);
// console.log(k);
//
// if(k.indexOf(version)){
//   console.log('ok');
// }else {
//   console.log('err');
// }
// let redboxs = ['63(1.7.1)','22,Mall1.1.0.1'];
// let redboxV_Arr = redboxs.map(e => {
//   return getVersionTypes(e);
// });
// redboxV_Arr;

// let basename = path.basename(module.filename);
// basename
/*let update_arr = [1,2,3];
function mapFunc(update_arr) {
    return new Promise((resolve, reject) => {
      const base_path = path.resolve(__dirname, './upload_config');
      async.mapLimit(update_arr, 10, function (item, cb) {
        let fileName = `${item}.txt`;
        fs.writeFile(path.join(base_path, fileName), JSON.stringify(item), {encoding: 'utf8'},
          function (err) {
            cb(new Error('cccc'));
            console.log('4444');
            // if (err) {
            //   console.error(err);
            //   cb && cb(err);
            // } else {
            //   console.error('ok');
            //   cb && cb(null, []);
            // }
          });
      },function (err, results) {
        if(err) {
          console.error(`getUpdatesArray err: {$err}`);
          reject(err);
        }else {
          console.error(results);
          resolve(results);
        }
      })
    })
}
 mapFunc(update_arr)
   .then(function(item) {
       console.log(`${item} aaaa`);
   })
   .catch(function(err) {
     console.log(`${err} ddddd`);
   });*/


// let update_arr = [];
// let results = [[1],[2],[3],[4]];
// results.forEach(function (item) {
//   console.log(item);
//   update_arr = update_arr.concat(item);
// });
// console.log(update_arr);
// console.log([1,2,3].join('l'))



/*
let buf = new Buffer("www.runoob.com","utf-8");
console.log(buf, buf.toString('utf8'),JSON.stringify(buf));
let buf1 = Buffer.from("www.runoob.com","utf-8");
console.log(buf1, buf1.toString('utf8'),JSON.stringify(buf1),JSON.parse(JSON.stringify(buf1)));*/

// let putobj = PutObj(4);
// console.log(putobj.upload(5));

/*
function func1(updates){
  let defaultV = []
  for(let [index, up] of updates.entries()) {
    if(1 === up) {
      defaultV.push(up);
      updates.splice(index, 1);
    }
  }
  return {defaultV:defaultV,a: updates}
}
let updates = [1,2,3],grayScalev = [];
let {defaultV, a} = func1(updates);
console.log(updates,defaultV,a);*/

/*
const db = {}
function func1() {
  fs.readdirSync(__dirname)
    .filter(function (file) { //文件名过滤
      return (file.indexOf(".") !== 0) && (file !== 'index.js') && (file !== 'AbstractDao.js')
    })
    .forEach(function (file) {
      const fileName = file.substring(0, file.indexOf('.'))
      const classFile = require('./' + file)
      db[fileName] = new classFile()
    })

}
func1();*/

let curTime = new Date();
console.log(curTime.getHours());
let endTime = curTime.setHours(curTime.getHours()+1);
console.log(new Date(endTime));
