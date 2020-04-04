import { DefaultState, Context } from 'koa'
import Router from '@koa/router'

const router = new Router<DefaultState, Context>()

router.get('/logout', async (ctx, next) => {
  if (await ctx.isAuthenticated()) {
    ctx.logout()
    ctx.body = 'Logout.'
  } else {
    ctx.body = 'Login first.'
  }
})

export default router
