const { db } = require('../src/db/models')

before(async () => {
    //console.log('running before all tests')

    await db.sync()
})