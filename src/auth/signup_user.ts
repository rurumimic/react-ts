import { Transaction } from 'sequelize'
import { Profile } from 'passport-github2'
import models from '../db/models'

export const signupUser = async (
  accessToken: string,
  profile: Profile
): Promise<number | null> => {
  let transaction: Transaction
  const createdAt = new Date()
  const updatedAt = new Date()
  try {
    transaction = await models.sequelize.transaction()
    const user = await models.User.create(
      {
        name: profile.displayName,
        createdAt: createdAt,
        updatedAt: updatedAt,
      },
      { transaction }
    )
    await models.Oauth.create(
      {
        UserId: user.id,
        provider: profile.provider,
        providerId: profile.id,
        username: profile.username,
        name: profile.displayName,
        token: accessToken,
        profileUrl: profile.profileUrl,
        photoUrl: profile.photos[0].value,
        createdAt: createdAt,
        updatedAt: updatedAt,
      },
      { transaction }
    )
    await transaction.commit()
    return user.id
  } catch (error) {
    if (transaction != null) {
      await transaction.rollback()
    }
    console.error(`[Error] Signup User: ${profile.id}`)
    console.error(error)
    return null
  }
}
