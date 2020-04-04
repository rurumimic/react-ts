import Router from '@koa/router'

import api from './api'
import logout from './logout'

const router = new Router()

router.use(api.routes())
router.use(api.allowedMethods())

router.use(logout.routes())
router.use(logout.allowedMethods())

export default router
