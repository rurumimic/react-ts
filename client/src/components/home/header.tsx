import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <Row>
          <Col>Home</Col>
        </Row>
      </Container>
    )
  }
}
