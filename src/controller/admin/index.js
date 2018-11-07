/**
 * @module controller/admin
 */
import koaRouter from 'koa-router';
import xiaoshi from './xiaoshi';

const router = koaRouter();


router.use('/lishi', xiaoshi.routes);

export default {
  routes: router.routes()
};