import models from '../db/models'

interface Oauth {
  username: string
}

interface User {
  id: number
  name: string
  Oauth: Oauth
}

export const getUser = async (id: number): Promise<User> => {
  try {
    const user: User = await models.User.findOne({
      attributes: ['id', 'name'],
      where: { id: id },
      include: [
        {
          model: models.Oauth,
          attributes: ['username'],
        },
      ],
    })
    return user
  } catch (error) {
    console.error(error)
  }
  return null
}
