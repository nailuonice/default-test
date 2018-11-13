
const schedule = require('node-schedule');
const moment = require('moment');

exports.start = function (ctx) {
  console.log('come in start');
  schedule.scheduleJob('*/10 * * * * *', function () {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss :开始运行'))
    setTimeout(function () {
      console.log(moment().format('YYYY-MM-DD HH:mm:ss :*********'))
      ctx.xiaoshiModel.xiaoshi.create({name: 'aa'});

    }, Math.ceil(Math.random() * 1) * 1000);    
    console.log(moment().format('YYYY-MM-DD HH:mm:ss :结束运行'))
  });
}