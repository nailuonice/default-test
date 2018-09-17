const models = require('./models');

//进行身份验证
models.sequelize.authenticate().then(function () {
    models.sequelize.sync().then(() => {
        console.log('cloudclass所有表创建成功');
    }).catch(error => {
        console.log('cloudclass表创建失败');
        console.log(error)
    }).finally(() => {
        process.exit();
    })
});