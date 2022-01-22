const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets
  const pets = await Pet.query()

  // Get the name and age of all users
  const users = await User.query().select('firstName', 'age')

  console.log(pets)
  console.log(users)

  // ------
  cleanup()
})

run()
