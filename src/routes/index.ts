import Router from '@koa/router'
import api from './api'

const router = new Router()

router.use(api.routes())
router.use(api.allowedMethods())

export default router
