import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadArticles, deleteArticle } from 'api/article'
import { Button, Row, Col, Pagination } from 'react-bootstrap'
import { RootState } from 'store/rootReducer'

interface User {
  id: number
  name: string
}

interface Article {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  User: User
}

export const Feed = (): JSX.Element => {
  const { id } = useSelector((state: RootState) => state.user)
  const [refresh, setRefresh] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [size, setSize] = useState<number>(3)
  const [active, setActive] = useState<number>(1)
  const [items, setItems] = useState<JSX.Element[]>([])
  const [feeds, setFeeds] = useState<JSX.Element[]>([])

  const remove = async (id: number): Promise<void> => {
    await deleteArticle(id)
    setRefresh(true)
  }

  useEffect(() => {
    async function fetchArticles(page: number, size: number): Promise<void> {
      try {
        const articles: Article[] = await loadArticles(page, size)
        const temp: JSX.Element[] = []
        for (let index = 0; index < articles.length; index++) {
          const date = new Date(articles[index].createdAt).toLocaleString(
            'en-US',
            {
              timeZone: 'UTC',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }
          )
          let deleteButton
          if (id === articles[index].User.id) {
            deleteButton = (
              <p className="text-right">
                <Button
                  variant="link"
                  size="sm"
                  className="text-body font-weight-lighter"
                  onClick={async (): Promise<void> => {
                    await remove(articles[index].id)
                  }}
                >
                  Delete
                </Button>
              </p>
            )
          }
          temp.push(
            <div key={articles[index].id} className="py-3">
              <h2>{articles[index].title}</h2>
              <p>
                {date} by {articles[index].User.name}
              </p>
              <p>{articles[index].content}</p>
              {deleteButton}
            </div>
          )
        }
        setFeeds(temp)
        setRefresh(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchArticles(page, size)
  }, [refresh, page, size])

  return (
    <main role="main" className="container">
      <Row>
        <Col>{feeds}</Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </main>
  )
}
