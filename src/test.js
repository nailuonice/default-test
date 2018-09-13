/*
* Created by Ryan.Luo
* Created on 2018/5/1
*/
const router                                     = require("koa-router")();

class Test {
    static async test(ctx) {
        let method = ctx.method;
        var data = ("POST" === method) ? ctx.request.body : ctx.request.query;
        // let data      = ctx.request.body;
        let parameter = ctx.state.parameter;
        console.warn(method,data,ctx.request);
        // console.warn(`come in test ${ctx.request.body}`);
        console.warn('come in test '+JSON.stringify(data));
        ctx.body = {data: data, code: true};
        // return {test:1};
    }
}

// git



router.all("/test", Test.test);

module.exports = router;