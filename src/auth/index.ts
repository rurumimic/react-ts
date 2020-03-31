import passport from 'koa-passport'
import { Strategy } from 'passport-github2'

// Strategy Option
const strategyOption = {
  clientID: process.env.GITHUB_OAUTH_ID,
  clientSecret: process.env.GITHUB_OAUTH_SECRET,
  callbackURL: process.env.API_URI + '/api/oauth/authorize',
}

// Passport session setup.
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(
  new Strategy(
    strategyOption,
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: Function
    ) => {
      console.log('accessToken:', accessToken)
      console.log('refreshToken:', refreshToken)
      console.log('profile:', profile)
      return done(null, profile.id)
    }
  )
)

export default passport
