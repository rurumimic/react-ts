import { Profile } from 'passport-github2'
import models from '../db/models'

export const updateUser = async (
  accessToken: string,
  profile: Profile
): Promise<void> => {
  try {
    await models.Oauth.update(
      {
        username: profile.username,
        name: profile.displayName,
        token: accessToken,
        profileUrl: profile.profileUrl,
        photoUrl: profile.photos[0].value,
        updatedAt: new Date(),
      },
      {
        where: {
          providerId: profile.id,
        },
      }
    )
  } catch (error) {
    console.error(`[Error] Update User: ${profile.id}`)
    console.error(error)
  }
}
