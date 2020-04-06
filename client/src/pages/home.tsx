import React from 'react'

import { Header } from '../components/home/header'
import { Feed } from '../components/home/feed'

export class Home extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        <Feed />
      </div>
    )
  }
}
