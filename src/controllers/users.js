const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

async function createAnonUser() {
  const user = await Users.create({
    username: genRandomUsername(),
  })

  return user
}

async function getUserById(id) {
  if (!id) throw new Error('user id not provided')
  if (typeof id !== 'number') throw new Error('user id should be integer')
  
  return await Users.findOne({ where: { id } })
}

async function getUserByUsername(username) {
  return await Users.findOne({ where: { username } })
}

module.exports = {
  createAnonUser,
  getUserById,
  getUserByUsername,
}

/*  Test Code */
/*
async function task () {
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
}

task() 
*/
