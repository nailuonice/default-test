/**
 * @module controller
 */
import koaRouter from 'koa-router';
import admin from './admin';
const router = koaRouter();

router.get('/', async (ctx) => {
  ctx.redirect('/admin');
});

router.get('/status.ok', async (ctx) => {
  ctx.body = 'ok';
});


router.use('/admin', admin.routes);

export default router;