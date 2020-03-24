import Router from '@koa/router'
const router = new Router({
  prefix: '/api',
})

// responds to '/api/hello'
router.get('/hello', (ctx, next) => {
  ctx.body = { greet: 'Hello, there.' }
})

export default router
