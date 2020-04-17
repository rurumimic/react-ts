import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export class Hero extends React.Component {
  render(): JSX.Element {
    return (
      <div className="hero">
        <div className="header">
          <Container>
            <header>
              <Row>
                <Col>
                  <div className="logo text-center">diary</div>
                </Col>
              </Row>
            </header>
          </Container>
        </div>
        <div className="body">
          <Container>
            <Row>
              <Col></Col>
              <Col xs={12} sm={6}>
                <Button variant="dark" size="lg" block>
                  <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub으로
                  계속하기
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
