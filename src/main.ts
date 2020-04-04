import app from './app'

const port: string =
  typeof process.env.PORT !== 'undefined' ? process.env.PORT : '8081'

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})
