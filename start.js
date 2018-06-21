const Koa                                               = require('koa');
const app                                               = new Koa();
const bodyparser                                        = require("koa-bodyparser");
const router                                            = require("koa-router")();

// x-response-time
app.use(bodyparser({
    onerror: function (err, ctx) {
        if (err) {
            err.reqid = "onBodyParserError()";
        }
        ctx.body = err;
    },
}));

app.use(async (ctx, next) => {
    const start = Date.now();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.warn(`${ctx.host} ${ctx.status}`);
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);

    ctx.set("Access-Control-Allow-Credentials",true);//设置是否包含cookies信息
    ctx.set("Access-Control-Allow-Methods","GET, POST, OPTIONS");//设置允许跨域请求的http方法
    ctx.set("Access-Control-Allow-Origin", "*");//允许的域名，只能填通配符或者单域名

    await next();
});


const Test       = require("./src/Test");
router.use('/v1/blockchain', Test.routes(), router.allowedMethods());
app.use(router.routes());

let port = process.env.OPENSHIFT_NODEJS_PORT || 7073;
let host = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,host, () => {
    console.info(`Listening on http://${host}:${port}`);
});


process.on('uncaughtException', function(err) {
    console.error(err);
});
