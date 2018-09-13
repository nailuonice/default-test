

function PutObj(ossConf) {
  this._oss = ossConf;

  this.upload = function (item) {
    return item+this._oss;
  };
}

