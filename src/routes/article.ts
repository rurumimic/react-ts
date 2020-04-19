import { DefaultState, Context } from 'koa'
import Router from '@koa/router'
import { loadArticles, saveArticle, deleteArticle } from '../models/article'

const router = new Router<DefaultState, Context>({
  prefix: '/article',
})

interface Page {
  page: number
  size: number
}

router.get('/list', async (ctx, next) => {
  const data: Page = ctx.request.query
  const articles = await loadArticles(data.page, data.size)
  ctx.body = {
    success: true,
    message: 'Article list',
    data: articles,
  }
})

interface Submit {
  UserId: number
  title: string
  content: string
}

router.post('/submit', async (ctx, next) => {
  const data: Submit = ctx.request.body
  await saveArticle(data.UserId, data.title, data.content)
  ctx.body = {
    success: true,
    message: 'Submit article',
    data: null,
  }
})

interface Delete {
  id: number
}

router.post('/delete', async (ctx, next) => {
  const data: Delete = ctx.request.body
  await deleteArticle(data.id)
  ctx.body = {
    success: true,
    message: 'Delete article',
    data: null,
  }
})

export default router
