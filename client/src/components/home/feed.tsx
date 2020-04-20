import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadArticles, deleteArticle } from 'api/article'
import { RootState } from 'store/rootReducer'
import { Button, Row, Col } from 'react-bootstrap'
import Pagination from 'react-js-pagination'

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

interface Articles {
  total: number
  articles: Article[]
}

export const Feed = (): JSX.Element => {
  const { id } = useSelector((state: RootState) => state.user)
  const [refresh, setRefresh] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const [size, setSize] = useState<number>(3)
  const [feeds, setFeeds] = useState<JSX.Element[]>([])

  const remove = async (id: number): Promise<void> => {
    await deleteArticle(id)
    setRefresh(true)
  }

  const onChangePage = (pageNumber: number): void => {
    setPage(pageNumber)
  }

  useEffect(() => {
    async function fetchArticles(page: number, size: number): Promise<void> {
      try {
        const data: Articles = await loadArticles(page, size)
        const total = data.total
        const articles = data.articles
        const newFeeds: JSX.Element[] = []
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
          newFeeds.push(
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
        setTotal(total)
        setFeeds(newFeeds)
        setRefresh(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchArticles(page, size)
  }, [id, refresh, page, size])

  return (
    <main role="main" className="container">
      <Row>
        <Col>{feeds}</Col>
      </Row>
      <Row>
        <Col>
          <Pagination
            activePage={page}
            itemsCountPerPage={3}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            itemClass="page-item"
            linkClass="page-link"
            onChange={pageNumber => onChangePage(pageNumber)}
          />
        </Col>
      </Row>
    </main>
  )
}
