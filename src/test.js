/*
* Created by Ryan.Luo
* Created on 2018/5/1
*/
const router                                     = require("koa-router")();

class Test {
    static async findData(ctx) {
        let data      = ctx.request.body;
        let parameter = ctx.state.parameter;
        console.warn(ctx);
        console.warn(data);
        console.warn(parameter);
        ctx.body = {a:1};
        return ;
    }
}

router.post("/findData", Test.findData);

module.exports = router;
