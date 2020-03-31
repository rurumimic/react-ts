import Router from '@koa/router'
import oauth from './oauth'

const router = new Router({
  prefix: '/api',
})

// api list
router.use(oauth.routes(), oauth.allowedMethods())

// responds to '/api/hello'
router.get('/hello', (ctx, next) => {
  ctx.body = { greet: 'Hello, there.' }
})

export default router
