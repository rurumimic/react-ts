import Router from '@koa/router'
import oauth from './oauth'
import article from './article'

const router = new Router({
  prefix: '/api',
})

// api list
router.use(oauth.routes(), oauth.allowedMethods())
router.use(article.routes(), article.allowedMethods())

export default router
