import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize'

const basename = path.basename(__filename)

const ENV: string = process.env.NODE_ENV
const env: string = typeof ENV !== 'undefined' ? ENV : 'development'

const config = require(path.join(__dirname, '/../../../config/database.json'))[
  env
]
const db: { [key: string]: any } = {}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate !== null) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
