import models from '../db/models'

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
  page: number = 1,
  size: number = 10
): Promise<Article[]> => {
  try {
    const articles = await models.Article.findAll({
      attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
      limit: size * 1, // sequelize parsing bug: string to int
      offset: size * (page - 1) * 1, // sequelize parsing bug: string to int
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: models.User,
          attributes: ['id', 'name'],
        },
      ],
    })
    return articles
  } catch (error) {
    console.error(error)
  }
  return []
}

export const saveArticle = async (
  UserId: number,
  title: string,
  content: string
): Promise<void> => {
  try {
    await models.Article.create({
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: UserId,
    })
  } catch (error) {
    console.error(error)
  }
}

export const deleteArticle = async (id: number): Promise<void> => {
  try {
    await models.Article.destroy({
      where: {
        id: id,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
