import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import router from './routes'

const app = new Koa()

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.join(__dirname, '../client/build')))
}

app.use(router.routes())
app.use(router.allowedMethods())

export default app
