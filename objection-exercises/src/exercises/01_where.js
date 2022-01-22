const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const user1 = await User.query().where('firstName', 'Destiny')

  // Do the same with object notation
  const user2 = await User.query().where({ firstName: 'Destiny' })

  // Get all DOGS and BIRDS
  const dogsandbirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])

  console.log(user1)
  console.log(user2)
  console.log(dogsandbirds)

  // -----
  cleanup()
}

run()
