# React.js with TypeScript

## Contents

### Koa + React

1. [Start with Yarn](docs/001.start.md): Javascript package manager.
   - node, npm, git
2. [Koa.js with TypeScript](docs/002.koa.md): Web Framework for Node.js.
   - koa, typescript, gulp
3. [React.js with TypeScript](docs/003.react.md): Web Application Javascript library.
   - create-react-app
4. [koa-static](docs/004.koa-static.md): Send static files to client.
5. [koa-router](docs/005.koa-router.md): Router middleware. Connect the koa server to the react app in development environment using proxy settings.
   - server: dotenv, ts-node
   - client: axios
6. [concurrently](docs/006.concurrently.md): Development environment automation.

### Lint

1. [ESLint](docs/007.eslint.md): Linter for the Javascript/TypeScript language.
2. [Prettier](docs/008.prettier.md): Code Formatter.

### Test-driven development

1. [React test](docs/009.react-test.md): Jest.
   - axios-mock-adapter
2. [Node test](docs/010.node-test.md): Mocha, Chai, Supertest.

### Database

1. [Database](docs/011.database.md): MariaDB with Docker.
2. [Sequelize](docs/012.sequelize.md): Promise-based Node.js ORM
   - mariadb

### OAuth2

1. [GitHub OAuth Apps](docs/013.github-oauth.md): Register a new GitHub OAuth application.
2. [Passport](docs/014.passport.md): Get a GitHub user profile.
   - passport-github2, koa-passport, koa-bodyparser, koa-session
3. [Sign up](docs/015.signup.md): Save a user profile in the database.
4. [Sign in/out](docs/016.signin-out.md): Koa.js authentication.

### React.js

#### Home

1. [Favicon](docs/017.favicon.md): Web app manifests.
2. [Font](docs/018.font.md): Web fonts.
3. [Home page](docs/019.home.md)
   - node-sass, react-bootstrap, react-router
4. [Sign in page](docs/020.signin.md)

#### Login

1. [Redux: store](docs/021.redux.md): Setting up the redux store.
   - @reduxjs/toolkit, react-redux
2. [Redux: reducer](docs/022.reducer.md): Creating the initial state slices.
3. [Redux: sign in/out](docs/023.signout.md): Fetch a user data. Store in the redux store.
4. [Web storage](docs/024.storage.md): Keep data in local.
   - redux-persist

#### Writings

1. [Write diary](docs/025.write.md): Save and erase a diary to database.
   - react-helmet, react-js-pagination

### Deployment

1. AWS RDS
2. AWS Beanstalk
3. AWS Route 53

---

## ECMA

- ES2019: ES10.
- ES2018: ES9. `...identifier`
- ES2017: ES8.
- ES2016: ES7. `await`, `async`
- ES2015: ES6. `import`, `export`
- ES2009: ES5
