import Router from 'koa-router';
import Koa from 'koa';

const router = new Router({ prefix: '/user' })

router.get('/ping', async (ctx: Koa.Context) => {
  ctx.body = {
    msg: 'pong!'
  }
})

router.get('/:id', async (ctx: Koa.Context) => {
  ctx.body = {
    userId: ctx.params.id,
    jefe: ctx.ese,
  }
})

router.post('/', async ctx => {
  ctx.body = ctx.request.body
})

export default router.routes()