import React from 'react'
import { Container } from 'react-bootstrap'

import { Header } from '../components/home/header'
import { Feed } from '../components/home/feed'

export class Home extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <Feed />
      </Container>
    )
  }
}
