const Koa = require('koa');
const app = new Koa();
const bodyparser                                        = require("koa-bodyparser");

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
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.warn(`${ctx.host} ${ctx.status}`);
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// logger
/*app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});*/

// response
// app.use(async ctx => {
//     ctx.body = 'Hello World111DDDD1111';
// });
const router             = require("koa-router")();

const Test       = require("./src/Test");
router.use('/test', Test.routes(), router.allowedMethods());
app.use(router.routes());

let port = process.env.OPENSHIFT_NODEJS_PORT || 3001;
let host = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,host, () => {
    console.info(`Listening on http://${host}:${port}`);
});

process.on('uncaughtException', function(err) {
    console.error(err);
});
