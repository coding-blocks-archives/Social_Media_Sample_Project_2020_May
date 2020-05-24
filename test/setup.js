// setup testing environment before requiring anything
process.env.NODE_ENV = 'testing'

const { db } = require('../src/db/models')

before(async () => {
  await db.sync()
})