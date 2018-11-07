import mongoose from'mongoose';
mongoose.Promise = require('bluebird');
import fs from 'fs';
import path from 'path';

let basename = path.basename(module.filename);

class Models {
  constructor(config) {
    this.config = config;
    this.db = {};
    this.connect();
  }

  async connect() {
    try {
      let opts = {
        useNewUrlParser: true,
        autoReconnect: true,      //自动尝试重新连接
        poolSize: 5,
        connectTimeoutMS: 10000,  //10秒
        socketTimeoutMS: 45000,   //杀死非活动套接字之前等待多长时间。
      };

      //连接数据库
      let _db = await mongoose.connect(this.config.db, opts);
      // console.log(_db);

      let modelFiles = fs.readdirSync(__dirname)
        .filter(function (file) {
          return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        });
      let self = this;
      for (let modelFile of modelFiles) {
        let Schema = require(path.join(__dirname, modelFile));
        // console.log('Schema is : ',JSON.stringify(Schema));

        let model = await mongoose.model(this.config.database, Schema, this.config.database);
        // model.create({name : 1});
        model.findOne(function(err, data) {
          console.log(err, data);
        })
        console.log('model is : ',JSON.stringify(model));
        self.db[this.config.database] = model;        
      }
      console.log('db is : ',JSON.stringify(self.db));
    }
    catch (err) {
      console.error(err);
      throw new Error('connect mongo fail err: ', JSON.stringify(err));
    }
  }
}

/**
 * xiaoshiModel module
 * @module models/xiaoshiModel
 */
export {
  Models
};