import { DefaultState, Context } from 'koa'
import Router from '@koa/router'
import { baseURL } from '../config/common'

const router = new Router<DefaultState, Context>()

router.get('/logout', async (ctx, next) => {
  if (await ctx.isAuthenticated()) {
    ctx.logout()
  }
  ctx.body = 'Logout...'
  ctx.redirect(baseURL())
})

export default router
