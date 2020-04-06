import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class Feed extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <Row>
          <Col>1. Apple</Col>
          <Col>2. Baby</Col>
          <Col>3. Cat</Col>
        </Row>
        <Row>
          <Col>4. Dog</Col>
          <Col>5. Egg</Col>
          <Col>6. Fox</Col>
        </Row>
      </Container>
    )
  }
}
