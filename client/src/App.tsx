import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Home } from 'pages/home'
import { Signin } from 'pages/signin'
import { Welcome } from 'pages/welcome'
import { Write } from 'pages/write'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/write" component={Write} />
    </Switch>
  </Router>
)

export default App
