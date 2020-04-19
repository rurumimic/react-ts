import axios from 'axios'

interface User {
  id: number
  name: string
}

interface Article {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  User: User
}

export const loadArticles = async (
  page: number,
  size: number
): Promise<Article[]> => {
  const response = await axios.get('/api/article/list', {
    params: { page: page, size: size },
  })
  const result: Article[] = await response.data.data
  return result
}

export const saveArticle = async (
  UserId: number,
  title: string,
  content: string
): Promise<void> => {
  await axios.post('/api/article/submit', {
    UserId: UserId,
    title: title,
    content: content,
  })
}

export const deleteArticle = async (id: number): Promise<void> => {
  await axios.post('/api/article/delete', { id: id })
}
