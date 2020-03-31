import Router from '@koa/router'
import auth from '../auth'

const router = new Router({
  prefix: '/oauth',
})

router.get('/authorize', (ctx, next) => {
  return auth.authenticate('github', (error, user, info, status) => {
    console.log('After creating a strategy:', error, user, info, status)

    if (user === false) {
      ctx.body = 'Failed OAuth'
      ctx.throw(401)
    } else {
      ctx.redirect(process.env.API_URI + '/api/oauth/finish')
    }
  })(ctx, next)
})

router.get('/finish', ctx => {
  ctx.body = 'Finished OAuth.'
})

export default router
