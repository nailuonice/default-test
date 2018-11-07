import fs from 'fs';
import path from 'path';

const _pathname = Symbol('PATHNAMEMAP');
const _module = Symbol('JSMODULE');
const _moduleName = Symbol('MODULENAME');
const modules = new Map();
const services = new Map();

export default function({rootDir}) {

  fs.readdirSync(rootDir)
    .filter((file) => {
      file = path.join(rootDir, file);
      return fs.lstatSync(file).isDirectory();
    }).forEach((module)=>{
      let moduleFile = path.join(rootDir, module);
      modules[module] = {
        [_moduleName]: module,
        [_module]: require('./' + module),
        [_pathname]: moduleFile
      };
    });

  return async (ctx, next) => {
    const Handler = {
      get: (target, key)=>{
        let module = modules[key];
        if (!module) {
          return undefined;
        }
        let serv = services[key];
        if (serv) {
          serv.ctx = ctx;
          return serv;
        }
        serv = new module[_module]({
          ctx
        });
        services[key] = serv;
        return serv;
      }
    };
    const service = Object.setPrototypeOf({}, new Proxy(modules, Handler));
    Object.defineProperty(ctx, 'service', {
      get() {
        return service;
      }
    });
    await next();
  };

}