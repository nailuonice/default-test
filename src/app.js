import Koa from 'koa';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import router from './controller';
// import errors from './errors';
// import utils from './utils';
import log4js from 'koa-log4';
import service from './service';
import { xiaoshiModel } from './models';
import utils from './utils';
// import { errorHandler } from './middleware';

/** Class App Server */
class App {

  constructor({ config, srcPath, appPath }) {
    this.config = config;
    this.config.srcPath = srcPath;
    this.config.appPath = appPath;
    this.koa.context.config = this.config;
    // this.koa.context.errors = errors;
    // this.koa.context.utils = utils;
    this.koa.context.log4js = log4js;

    this.koa.context.xiaoshiModel = new xiaoshiModel(this.config.mongo.xiaoshi);
    
    // utils.plan.start();
    this.koa.context.utils = utils;
  }

  get koa() {
    if (this._koa) {
      return this._koa;
    }
    // router.use(cookie());
    this._koa = new Koa()
      .use(service({
        rootDir: path.join(this.config.srcPath, 'service')
      }))
      // .use(errorHandler())
      .use(bodyParser())
      .use(router.allowedMethods())
      .use(router.routes());
    return this._koa;
  }

  // get redis() {
  //   if (this._redis) {
  //     return this._redis;
  //   }
  //   this._redis = redis.createClient(this.config.redis);
  //   return this._redis;
  // }
}


export default App;