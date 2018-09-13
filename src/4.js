<<<<<<< HEAD
//
=======


function PutObj(ossConf) {
  this._oss = ossConf;

  this.upload = function (item) {
    return item+this._oss;
  };
}

module.exports = function (ossConf) {
  return new PutObj(ossConf);
};
>>>>>>> a3780237c5379ac98b213ad57cb5a69b18e7a970
