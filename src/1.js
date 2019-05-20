const fs = require('fs');
const readline = require('readline');
const _ = require('loadsh');


let argv = process.argv;

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

main();

async function main(){
  let res = await readFileToArr(argv[2]);

  // console.log('res', JSON.stringify(res, null, 2));
  fs.writeFileSync('./res.json', JSON.stringify(res, null, 2));  
  
  let res3 = [];
  for(let key of res) {
    let obj = {};
    await _format(key.val.personList, obj);
    key.val.obj = obj;

    let _val = Object.values(key.val.obj);
    let tmp = _val.filter( e => e > 0.5);
    if(tmp.length) {
      res3.push(key);
    }
  }

  fs.writeFileSync('./res3.json', JSON.stringify(res3, null, 2)); 
}


/*
* 按行读取文件内容
* 返回：字符串数组
* 参数：fReadName:文件名路径
*      callback:回调函数
* */
async function readFileToArr(fReadName){
  return new Promise((resolve, reject) => {
    var fRead = fs.createReadStream(fReadName);
    var objReadline = readline.createInterface({
        input:fRead
    });

    var arr = new Array();
    objReadline.on('line',function (line) {
        if(line[0]) {
          let tmp = line.match(/^\d{4}-\d{2}-\d{2}/);
          if(tmp) {
            arr.push({
              key: line,
              val: {
                id: [],
                personList: [],
                memberId: [],
                // obj: {}
              }
            });
          } else {
            let line_arr = line.split(':');
            // console.log(line_arr);
            let id = line_arr[1].split(' ')[0];
            let personList = JSON.parse(line_arr[2].split(' ')[0]);
            let memberId = JSON.parse(line_arr[3]);
            // console.log(id, personList,memberId);

            if(line) {
              let val = arr[arr.length - 1].val;
              val.id.push(id);
              val.personList = val.personList.concat(personList);
              //  _format(val.personList, val.obj);
              val.memberId.push(memberId);
            }
          }
        }        
    });

    objReadline.on('close',function () {
        resolve(arr);
    });
  });  
}

async function _format(rrr, obj) {
  let seenkey = new Map();
  seenkey.set(Object.keys(obj));
  for(let key of rrr) {
    if(!seenkey.has(key)){
      seenkey.set(key, 1);
      obj[key] = 1/rrr.length;
    }else {
      seenkey.set(key, seenkey.get(key) + 1);
      obj[key] = (seenkey.get(key))/rrr.length;
    }
  }
}

let drr = [
  1311624,
  1286004,
  1311617,
  1311624,
  1311617,
  1311624
];
let obj2 = {};

_format(drr, obj2);
console.log(obj2);