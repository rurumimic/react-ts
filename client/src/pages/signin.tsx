import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { url } from 'features/url'

export class Signin extends React.Component {
  github = url('/api/oauth/github')

  render(): JSX.Element {
    return (
      <div className="hero">
        <div className="header">
          <Container>
            <header>
              <Row>
                <Col>
                  <div className="logo text-center">
                    <a href="/" className="text-body">
                      diary
                    </a>
                  </div>
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
                <Button href={this.github} variant="dark" size="lg" block>
                  <FontAwesomeIcon icon={faGithub} size="lg" /> Continue with
                  GitHub
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
