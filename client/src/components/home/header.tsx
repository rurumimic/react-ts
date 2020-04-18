import React from 'react'
import { SignView } from 'features/sign/signView'
import { Container, Row, Col } from 'react-bootstrap'

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
              <SignView />
            </Col>
          </Row>
        </header>
      </Container>
    )
  }
}
