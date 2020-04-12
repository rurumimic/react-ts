import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <header className="py-3">
          <Row>
            <Col>
              <div className="logo">diary</div>
            </Col>
            <Col className="text-right">
              <Button variant="light">Sign in</Button>
            </Col>
          </Row>
        </header>
      </Container>
    )
  }
}
