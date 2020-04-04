import { DefaultState, Context } from 'koa'
import Router from '@koa/router'
import auth from '../auth'
import { getUser } from '../models/user'

const router = new Router<DefaultState, Context>({
  prefix: '/oauth',
})

router.get('/github', (ctx, next) => {
  return auth.authenticate('github', { scope: ['read:user'] })(ctx, next)
})

router.get(
  '/authorize',
  (ctx, next) => {
    return auth.authenticate('github', async (error, user, info, status) => {
      if (error != null || user == null) {
        console.error('Login failed:', error, user, info, status)
        ctx.state.redirect = '/api/oauth/failed'
      } else {
        ctx.state.redirect = '/api/oauth/login'
        await ctx.login(user)
      }
      await next()
    })(ctx, next)
  },
  ctx => {
    ctx.redirect(ctx.state.redirect)
  }
)

router.get('/login', async (ctx: Context) => {
  ctx.body = {
    success: false,
    message: 'Not a user',
    data: null,
  }
  if (ctx.isAuthenticated()) {
    const user = await getUser(ctx.state.user.id)
    ctx.body.success = true
    ctx.body.message = 'Login'
    ctx.body.data = user
  }
})

router.get('/failed', ctx => {
  ctx.body = 'Signin Failed.'
})

export default router
