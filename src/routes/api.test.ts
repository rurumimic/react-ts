import Koa from 'koa'
import chai from 'chai'
import request from 'supertest'

import api from './api'

const app = new Koa()
app.use(api.routes())
app.use(api.allowedMethods())

const expect = chai.expect

describe('GET /api/hello', function() {
  it('responds with json', async () => {
    const response = await request(app.callback())
      .get('/api/hello')
      .set('Accept', 'application/json')

    expect(response.type).to.match(/json/)
    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal({ greet: 'Hello, there.' })
  })
})
