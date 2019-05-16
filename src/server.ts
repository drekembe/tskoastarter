import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';

import userRoutes from './user/routes'

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 3010

router.use(userRoutes)

router.get('/*', async (ctx) => {
    ctx.body = `Hello ${ctx.woo}!`;
});

router.post('/yo', async ctx => {
  if (ctx.request.body) {
    console.log(ctx.request.body)
  }
  ctx.body = { hoho: 5 }
})

app.use(koaBody())

app.use(async (ctx, next) => {
  ctx.woo = 5;
  await next()
})

app.use(router.routes());

app.listen(PORT);

console.log(`Server running on port ${PORT}`);