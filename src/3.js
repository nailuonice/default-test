
// let  moment     =            require ('moment');

// function init_mac_configToOss( ){
//   let curtime = new Date();
//   let cur = moment().hour();
//   console.log(cur, curtime.getHours());
// }
// init_mac_configToOss();
//
//
// let arr 
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


var urlencode = require('urlencode');

let str1 = 'query=%7B%22limit%22:20,%22offset%22:0,%22where%22:%7B%22type%22:1%7D,%22order%22:[[%22createdAt%22,%22desc%22]]%7D';
// console.log(urlencode(obj));
// console.log(encodeURIComponent(str1));

let str2 = decodeURI(str1);
console.log(str2,typeof (str2));

let str3 = encodeURIComponent(str2);
// console.log(str3);

function url_encode(url){
  url = encodeURIComponent(url);
  url = url.replace(/\%3A/g, ":");
  url = url.replace(/\%2F/g, "/");
  url = url.replace(/\%3F/g, "?");
  url = url.replace(/\%3D/g, "=");
  url = url.replace(/\%26/g, "&");
  url = url.replace(/\%2C/g, ",");

  return url;
}
console.log(url_encode(str2));
console.log(str1);
console.log(str1);
