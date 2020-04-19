import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { Redirect } from 'react-router'

import { saveArticle } from 'api/article'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

export const Write = (): JSX.Element => {
  const { isLogin, id } = useSelector((state: RootState) => state.user)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const submit = async (): Promise<void> => {
    if (id != null) {
      await saveArticle(id, title, content)
      setIsSubmitted(true)
    }
  }

  if (!isLogin) {
    return <Redirect to={{ pathname: '/' }} />
  }

  if (isSubmitted) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <Container>
      <Helmet>
        <title>Writing</title>
        <meta name="description" content="Writing a diary" />
      </Helmet>
      <header>
        <Row>
          <Col>
            <div className="logo">
              <a href="/" className="text-body">
                diary
              </a>
            </div>
          </Col>
        </Row>
      </header>
      <div className="py-3">
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setContent(e.target.value)
              }
            />
          </Form.Group>
          <Form.Row>
            <Col className="text-right">
              <Button variant="primary" onClick={submit}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
  )
}
