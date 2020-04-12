import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Home } from 'pages/home'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default App
