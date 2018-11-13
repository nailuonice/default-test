import koaRouter from 'koa-router';
const router = new koaRouter();

router.get('/', async (ctx) => {
  console.log('come in 001');
  ctx.utils.plan.start(ctx);

  ctx.type = 'json';
  ctx.body = 'ok';
})

export default {
  routes: router.routes()
};