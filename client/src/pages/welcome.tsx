import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import { login, logout } from 'features/user/userSlice'
import { authenticate } from 'api/auth'
import { Container, Row, Col } from 'react-bootstrap'

export const Welcome = (): JSX.Element => {
  const dispatch = useDispatch()

  const [message, setMessage] = useState<String>('Signing in...')
  const [fetching, setFetching] = useState<boolean>(true)
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    async function fetchUser(): Promise<void> {
      try {
        const user = await authenticate()
        if (user == null) {
          dispatch(logout())
          setMessage(`Hi.`)
          setFetching(false)
          setSuccess(false)
        } else {
          dispatch(login(user))
          setMessage(`Welcome! ${user.name}`)
          setFetching(false)
          setSuccess(true)
        }
      } catch (error) {
        console.error(error)
        setMessage(`Failed to sign in. Try Again.`)
        setFetching(false)
        setSuccess(false)
      }
    }
    fetchUser()
  }, [dispatch])

  if (success) {
    return <Redirect to={{ pathname: '/' }} />
  }

  let hiddenButton

  if (!fetching) {
    hiddenButton = (
      <div className="py-3">
        <a href="/signin" className="text-body">
          <u>Sign in</u>
        </a>
      </div>
    )
  }

  return (
    <div className="hero">
      <div className="header">
        <Container>
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
        </Container>
      </div>
      <div className="body">
        <Container>
          <Row>
            <Col>{message}</Col>
          </Row>
          <Row>
            <Col>{hiddenButton}</Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
