/**
 * log4js 配置文件
 * 
 * 日志等级由低到高
 * ALL TRACE DEBUG INFO WARN ERROR FATAL OFF. 
 * 
 * 关于log4js的appenders的配置说明
 * https://github.com/nomiddlename/log4js-node/wiki/Appenders
 */

const path = require('path');

//日志根目录
const baseLogPath = path.resolve(__dirname, '../logs');
const accessLogPath = path.resolve(baseLogPath, 'access');
const resLogPath = path.resolve(baseLogPath, 'response');
const errorLogPath = path.resolve(baseLogPath, 'error');
const ledgerLogPath = path.resolve(baseLogPath, 'ledger');
const commonLogPath = path.resolve(baseLogPath, 'common');

exports.baseLogPath = baseLogPath;
exports.accessLogPath = accessLogPath;
exports.resLogPath = resLogPath;
exports.errorLogPath = errorLogPath;
exports.ledgerLogPath = ledgerLogPath;
exports.commonLogPath = commonLogPath;

const consoleLayout = {
    type:    "pattern",
    pattern: "%[%d||server=%h||pid=%x{pid}||level=%p%]||%m",
    tokens:  {
        pid: function () {
            return process.pid;
        },
    },
};
const fileLayout    = {
    type:    "pattern",
    pattern: "%d||server=%h||pid=%x{pid}||level=%p||%m",
    tokens:  {
        pid: function () {
            return process.pid;
        },
    },
};

exports.config = {
    appenders:  {
        console: {
            type                    : "console",
            layout                  : consoleLayout,
        },
        access:  {
            type                    : "dateFile",
            layout                  : fileLayout,
            filename                : `${path.join(baseLogPath, "access", "access")}`,
            alwaysIncludePattern    : true,
            pattern                 : "-yyyy-MM-dd.log",
            encoding                : "utf-8",
            keepFileExt             : true,
            daysToKeep              : 10,
        },
        response:  {                //响应请求
            type                    : "dateFile",
            layout                  : fileLayout,
            filename                : `${path.join(baseLogPath, "response", "response")}`,
            alwaysIncludePattern    : true,
            pattern                 : "-yyyy-MM-dd.log",
            encoding                : "utf-8",
            keepFileExt             : true,
            daysToKeep              : 10,
        },
        error:  {                   //错误日志
            type                    : "dateFile",
            layout                  : fileLayout,
            filename                : `${path.join(baseLogPath, "error", "error")}`,
            alwaysIncludePattern    : true,
            pattern                 : "-yyyy-MM-dd.log",
            encoding                : "utf-8",
            keepFileExt             : true,
            daysToKeep              : 10,
        },
        ledger:  {                  //同步区块
            type                    : "dateFile",
            layout                  : fileLayout,
            filename                : `${path.join(baseLogPath, "ledger", "ledger")}`,
            alwaysIncludePattern    : true,
            pattern                 : "-yyyy-MM-dd.log",
            encoding                : "utf-8",
            keepFileExt             : true,
            daysToKeep              : 10,
        },
        common:  {                  //数据库相关
            type                    : "dateFile",
            layout                  : fileLayout,
            filename                : `${path.join(baseLogPath, "common", "common")}`,
            alwaysIncludePattern    : true,
            pattern                 : "-yyyy-MM-dd.log",
            encoding                : "utf-8",
            keepFileExt             : true,
            daysToKeep              : 10,
        },
    },
    categories: {
        default: {
            appenders               : ["console"],
            level                   : "trace",
        },
        access:  {
            appenders               : ["console", "access"],
            level                   : "trace",
        },
        response:  {
            appenders               : ["console", "response"],
            level                   : "trace",
        },
        error:  {
            appenders               : ["error"],
            level                   : "trace",
        },
        ledger:  {
            appenders               : ["console", "ledger"],
            level                   : "trace",
        },
        common:  {
            appenders               : ["console", "common"],
            level                   : "trace",
        },
    },
}