import koaRouter from 'koa-router';
const router = new koaRouter();

router.get('/', async (ctx) => {
  ctx.type = 'json';
  ctx.body = 'ok';
})

export default {
  routes: router.routes()
};