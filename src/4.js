

function PutObj(ossConf) {
  this._oss = ossConf;

  this.upload = function (item) {
    return item+this._oss;
  };
}

function PutObj2(ossConf) {
  this._oss = ossConf;

  this.upload = function (item) {
    return item+this._oss;
  };
}

