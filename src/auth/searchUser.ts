import models from '../db/models'

export const searchUserId = async (
  providerId: string
): Promise<number | null> => {
  try {
    const user = await models.Oauth.findOne({
      attributes: ['UserId'],
      where: { providerId: providerId },
    })
    if (user != null) {
      return user.UserId
    }
  } catch (error) {
    console.error(`[Error] Search User: ${providerId}`)
    console.error(error)
  }
  return null
}
