import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import App from 'App'

const mock = new MockAdapter(axios)
let container: HTMLDivElement | null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  if (container == null) return
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('fetch message', async () => {
  if (container == null) return

  const response = { greet: 'Hello, there.' }
  mock.onGet('/api/hello').reply(200, response)

  act(() => {
    render(<App />, container)
  })
  const initMessage = container.querySelector('div')
  if (initMessage == null) throw new Error('message is null')
  expect(initMessage.textContent).toBe('loading...')

  await act(async () => {
    await render(<App />, container)
  })
  const updatedMessage = container.querySelector('div')
  if (updatedMessage == null) throw new Error('message is null')
  expect(updatedMessage.textContent).toBe('Hello, there.')
})
