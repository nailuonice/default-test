//
//
// let a = {a:1};
// let b = JSON.stringify(a);
// let c = JSON.parse(JSON.stringify(a));
// // let d = JSON.parse(JSON.parse(b));
//
// console.log(a,b,c);

const fs = require('fs');

const path = require('path');
// const readlineSync = require('readline-sync');
// const shelljs = require('shelljs');
// const ALY = require('aliyun-sdk');
// const mime = require('mime');

// let result = shelljs.exec('diff -qr aDir bDir');
// console.log(result);
// let files = result.split('\n').filter((line)=>{
//   return /^Files(.*)differ$/.test(line) || /^Only in aDir/.test(line)
// }).map((line)=>{
//   if (/^Files(.*)differ$/.test(line)) {
//     console.log('**** '+line.match(/Files (.*) and/));
//     return line.match(/Files (.*) and/)[1]
//   }
//   if (/^Only in aDir/.test(line)) {
//     console.log('aDir ' + line.replace('Only in aDir:','').trim());
//     return 'dist/' + line.replace('Only in aDir:','').trim()
//   }
// });
//
// console.log(files);




function exists(path){
  return fs.existsSync(path);
}

function isFile(path){
  return exists(path) && fs.statSync(path).isFile();
}

function isDir(path){
  return exists(path) && fs.statSync(path).isDirectory();
}


let files = [];
function putDirToOss(dirPath) {
  if(exists(dirPath)) {
    if(isDir(dirPath)) {
      // console.log(dirPath);
      let modelFiles = fs.readdirSync(dirPath)
        .filter(function (file) {
        return (file.indexOf('.') !== 0)
        });

      for (let modelFile of modelFiles) {
        let curDir = path.join(dirPath, modelFile);
        if(isDir(curDir)) {

          // console.log('curDir ',path.resolve(dirPath, modelFile))
          putDirToOss(curDir);
        }else {
          // console.log('curFile ',path.resolve(dirPath, modelFile))
          files.push(curDir);
        }
      }
    }else if(isFile(dirPath)) {
      files.push(modelFile);
    }
  }else {
    console.log('文件不存在')
  }
}
putDirToOss('./bDir');
console.log(files);


// let dir = path.resolve(__dirname, 'a');
// console.log(dir);
