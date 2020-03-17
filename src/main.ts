import app from './app'

const PORT: string = process.env.PORT
const port: string = typeof PORT !== 'undefined' ? PORT : '8081'

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})
