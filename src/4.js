// //
// //
// // let a = {a:1};
// // let b = JSON.stringify(a);
// // let c = JSON.parse(JSON.stringify(a));
// // // let d = JSON.parse(JSON.parse(b));
// //
// // console.log(a,b,c);

// const fs = require('fs');

// const path = require('path');
// // const readlineSync = require('readline-sync');
// // const shelljs = require('shelljs');
// // const ALY = require('aliyun-sdk');
// // const mime = require('mime');

// // let result = shelljs.exec('diff -qr aDir bDir');
// // console.log(result);
// // let files = result.split('\n').filter((line)=>{
// //   return /^Files(.*)differ$/.test(line) || /^Only in aDir/.test(line)
// // }).map((line)=>{
// //   if (/^Files(.*)differ$/.test(line)) {
// //     console.log('**** '+line.match(/Files (.*) and/));
// //     return line.match(/Files (.*) and/)[1]
// //   }
// //   if (/^Only in aDir/.test(line)) {
// //     console.log('aDir ' + line.replace('Only in aDir:','').trim());
// //     return 'dist/' + line.replace('Only in aDir:','').trim()
// //   }
// // });
// //
// // console.log(files);




// function exists(path){
//   return fs.existsSync(path);
// }

// function isFile(path){
//   return exists(path) && fs.statSync(path).isFile();
// }

// function isDir(path){
//   return exists(path) && fs.statSync(path).isDirectory();
// }


// let files = [];
// function putDirToOss(dirPath) {
//   if(exists(dirPath)) {
//     if(isDir(dirPath)) {
//       // console.log(dirPath);
//       let modelFiles = fs.readdirSync(dirPath)
//         .filter(function (file) {
//         return (file.indexOf('.') !== 0)
//         });

//       for (let modelFile of modelFiles) {
//         let curDir = path.join(dirPath, modelFile);
//         if(isDir(curDir)) {

//           // console.log('curDir ',path.resolve(dirPath, modelFile))
//           putDirToOss(curDir);
//         }else {
//           // console.log('curFile ',path.resolve(dirPath, modelFile))
//           files.push(curDir);
//         }
//       }
//     }else if(isFile(dirPath)) {
//       files.push(modelFile);
//     }
//   }else {
//     console.log('文件不存在')
//   }
// }
// // putDirToOss('./bDir');
// // console.log(files);


// // let dir = path.resolve(__dirname, 'a');
// // console.log(dir);

// function array_func(Arr, Brr) {
//   let a = new Set(Arr);
//   let b = new Set(Brr); 

//   // 并集
//   let unionSet = new Set([...a, ...b]);
//   // 交集
//   let intersectionSet = new Set([...a].filter(x => b.has(x)));
//   // ab差集
//   let differenceABSet = new Set([...a].filter(x => !b.has(x)));

//   return {
//     difference: Array.from(differenceABSet),
//     intersection: Array.from(intersectionSet),
//     union: Array.from(unionSet),
//   };
// }
// let arrr = [1,2,3];
// let brrr = [4,2];
// console.log(array_func(arrr,brrr));

// console.log(array_func(brrr,arrr));

// let crr = arrr;

// arrr.slice()
// arrr.push(4);
// console.log(arrr,brrr,crr);
const Axios = require('axios');
// let admobApi_config =  "https://admob-dev.changjinglu.net/internal";
let admobApi_config =  "http://127.0.0.1:8002/internal";
var querystring = require('querystring');
let admobApi = Axios.create({
  baseURL: "http://127.0.0.1:8002/internal"
});

admobApi.post('/config/adv_plan', {codes: ['M030008'],type: 3})
  .then(res => {
    console.log('come in send /config/adv_plan, res: ', res);
  })
  .catch(err => {
    console.log('admob error', err);
  });
// Axios.post('http://127.0.0.1:8002/internal/config/adv_plan', {

//     codes: ['M030008'],
//     type: 3
  
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


//   var http = require('http');
//   const qs = require('querystring');
//   // const {trust_server: {host, port, path}}                      = require("../config/config");
  
// function sendData_post(param, path) {
//     return new Promise((resolve,reject)=>{
//         var data = param || "";
//         var content = qs.stringify(data);
//         console.warn("come in post func",param, data, qs.stringify(data),content,typeof(content));

//         var options = {
//             host: '127.0.0.1',
//             port: 8002,
//             path: path,
//             method: 'POST',
//             headers:{
//                 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
//                 'Content-Length':Buffer.byteLength(content)
//             }
//         };

//         var req = http.request(options,function(res){
//             console.log('STATUS: ' + res.statusCode);
//             var body = '';
//             res.setEncoding('utf-8');
//             res.on('data',function(chunk){
//                 console.log('body分隔线-------------[POST]--------------\r\n');
//                 body += chunk;
//             });
//             res.on('end',function(){
//                 console.log('No more data in res.****[POST]****');
//                 resolve(body);
//             });
//         });


//         req.on('error',function(e){
//             console.log('problem with request: ' + e.message);
//             reject(e);
//         });
//         req.write(content);

//         req.end();
//     })
// }

// function sendData_get(param, path) {
//     return new Promise((resolve,reject)=>{
//         var data = param || "";
//         var content = qs.stringify(data);
//         console.warn("come in get func",param, data, qs.stringify(data),content,typeof(content));

//         var options = {
//           host: '127.0.0.1',
//           port: 8002,
//             path: path +"?" + content,
//             method: 'GET'
//         };

//         var req = http.request(options, function (res) {
//             console.log('STATUS: ' + res.statusCode);
//             console.log('HEADERS: ' + JSON.stringify(res.headers));
//             res.setEncoding('utf8');
//             var body = '';
//             res.on('data', function (chunk) {
//                 console.log('body分隔线-------------[GET]--------------\r\n');
//                 body += chunk;
//             });
//             res.on('end',function(){
//                 console.log('No more data in res.****[GET]****');
//                 resolve(body);
//             });
//         });

//         req.on('error', function (e) {
//             console.log('problem with request: ' + e.message);
//             reject(e);
//         });

//         req.end();
//     })
// }

// // async function func1() {
// //   try{
// //     let data = await sendData_post({ a: 1 }, '/internal/config/adv_plan');
// //     // let data = sendData_post({ a: 1 }, 'internal/config/adv_plan');
// //     console.log(data);
// //   }
// //   catch(err) {
// //     console.log(err);
// //   }
// // }

// // func1();

// var rp = require('request-promise');
// var options = {
//   method: 'POST',
//   uri: "https://admob-dev.changjinglu.net/internal/config/adv_plan",
//   body: {
//       a: 'payload'
//   },
//   json: true // Automatically stringifies the body to JSON
// };

// rp(options)
//     .then(function (parsedBody) {
//         // POST succeeded...
//     })
//     .catch(function (err) {
//         // POST failed...
//     });

// async function func2() {
//   try{
//     let data = await rp(options);
//     // let data = sendData_post({ a: 1 }, 'internal/config/adv_plan');
//     console.log(data);
//   }
//   catch(err) {
//     console.log(err);
//   }
// }

// func2();



