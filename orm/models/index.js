'use strict';

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const {msyql_config} = require('../../config/config')
const db = {};

const sequelize = new Sequelize(
    msyql_config.database, //数据库名称
    msyql_config.username, //用户名
    msyql_config.password, //用户密码
    {
        'dialect': msyql_config.dialect, //数据库使用mysql
        'host': msyql_config.host, //数据库IP地址
        'port': msyql_config.port, //数据库服务器使用端口
        'timezone': '+08:00',
        'operatorsAliases': false
    }
)

fs.readdirSync(__dirname)
    .filter(function (file) { //文件名过滤
        return (file.indexOf(".") !== 0) && (file !== 'index.js');
    })
    .forEach(function (file) {
        const model = sequelize.import(path.join(__dirname, file)); //用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。	
        // console.warn("2222 \n",model,model.name);
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) { //获取所有枚举对象的名称
    if ("associate" in db[modelName]) {
        // console.warn("33333 \n",db[modelName],modelName);
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db