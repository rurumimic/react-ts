import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

import { Provider } from 'react-redux'
import store from 'store'

import 'index.scss'

const render = (): void => {
  const App = require('./App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot !== undefined) {
  module.hot.accept('./App', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
