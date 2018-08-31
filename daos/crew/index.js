'use strict'

const fs = require('fs')
const path = require('path')

const db = {}
fs.readdirSync(__dirname)
    .filter(function (file) { //文件名过滤
        return (file.indexOf(".") !== 0) && (file !== 'index.js') && (file !== 'AbstractDao.js')
    })
    .forEach(function (file) {
        const fileName = file.substring(0, file.indexOf('.'))
        const classFile = require('./' + file)
        db[fileName] = new classFile()
      console.log(classFile, db)
    })

export {
  db
};