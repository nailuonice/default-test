import ALY from 'aliyun-sdk';
import fs from 'fs';

class AbstractOss{
  constructor(config) {
    this._oss = new ALY.OSS({
      'accessKeyId': ossConf.accessKeyId, //'LTAIFsR0BYDAdXhk',
      'secretAccessKey': ossConf.accessKeySecret, //'uOzbRXEQIoqNYo0NH7qrF8IPTwsHGa',
      'endpoint': ossConf.endpoint, //'http://oss-cn-beijing.aliyuncs.com',
      'apiVersion': ossConf.apiVersion//'2013-10-15'
    });
  }
  upload() {
    
  }
}

function PutObj(ossConf) {
  this._oss = new ALY.OSS({
    'accessKeyId': ossConf.accessKeyId, //'LTAIFsR0BYDAdXhk',
    'secretAccessKey': ossConf.accessKeySecret, //'uOzbRXEQIoqNYo0NH7qrF8IPTwsHGa',
    'endpoint': ossConf.endpoint, //'http://oss-cn-beijing.aliyuncs.com',
    'apiVersion': ossConf.apiVersion//'2013-10-15'
  });
  let oss = this._oss;
  oss;
  this.upload = function (key, file, minetype) {
    let content;
    if (file instanceof Buffer) {
      content = file;
    } else {
      content = fs.readFileSync(file);
    }
    let parmas = {
      Bucket: ossConf.bucket,
      Key: 'uploads/' + key,                 // 注意, Key 的值不能以 / 开头, 否则会返回错误.
      Body: content,
      ContentEncoding: 'utf-8',
      ContentType: minetype
    };
    return new Promise((resolve, reject) => {
      this._oss.putObject(parmas, function (err, data) {
        if (err) {
          console.log('上传阿里云错误', err);
          reject(new Error(`${file} upload error: ${err}`));
          return;
        }
        console.log(`上传文件: ${file}, uploaded`);
        resolve(data);
      });
    });
  };

  this.list = function(key, delimiter, marker, max) {
    return new Promise(async(resolve, reject) => {
      try{
        let params = {
          prefix: key,
          delimiter: delimiter || '/',
        };
        if(!_.isUndefined(marker) && _.isString(marker)) {
          params.marker = marker;
        }
        if(!_.isUndefined(max) && _.isNumber(max)) {
          params['max-keys'] = max;
        }
        let result = await this._oss.list(params);
        resolve(result);
      }
      catch(err) {
        reject(err);
      }
    })
  }

  this._deleteMuti = ((deleteArr)=> {
    let self = this;
    return new Promise(async(resolve, reject) => {
      try{
        let opt = {quiet: true};  //返回删除结果
        let result = await oss.deleteMuti(deleteArr, opt);
        resolve(result);
      }
      catch(err) {
        reject(err);
      }
    })
  })

  this._delete = function(file) {
    return new Promise(async(resolve, reject) => {
      try{
        let result = await this._oss.delete(file);
        resolve(result);
      }
      catch(err) {
        reject(err);
      }
    })
  }
}

module.exports = function (ossConf) {
  return new PutObj(ossConf);
};