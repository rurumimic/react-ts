import passport from 'koa-passport'
import OAuth2Strategy from 'passport-oauth2'
import { Strategy, Profile } from 'passport-github2'

import { searchUserId } from './searchUser'
import { updateUser } from './updateUser'
import { signupUser } from './signupUser'

const option = {
  clientID: process.env.GITHUB_OAUTH_ID,
  clientSecret: process.env.GITHUB_OAUTH_SECRET,
  callbackURL: process.env.API_URL + '/api/oauth/authorize',
}

const verify = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: OAuth2Strategy.VerifyCallback
): void => {
  searchUserId(profile.id)
    .then(userId => {
      if (userId == null) {
        signupUser(accessToken, profile)
          .then(userId => {
            return done(null, { id: userId })
          })
          .catch(error => {
            console.error('[Error] DB Access Failed in step 2:', error.message)
          })
      } else {
        updateUser(accessToken, profile)
          .then(() => {
            done(null, { id: userId })
          })
          .catch(error => {
            console.error('[Error] DB Access Failed in step 3:', error.message)
          })
      }
    })
    .catch(error => {
      console.error('[Error] DB Access Failed in step 1:', error.message)
      return done(error)
    })
}

// Passport session setup
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(new Strategy(option, verify))

export default passport
