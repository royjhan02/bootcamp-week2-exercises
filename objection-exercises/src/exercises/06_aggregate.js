const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const usertotal = await User.query().resultSize()

  // Get the average age of users
  const avg = await User.query().avg('age as avgAge')

  // Get the total number of dogs
  const dogtotal = await Pet.query().resultSize().where({ type: 'DOG' })

  console.log(usertotal)
  console.log(avg)
  console.log(dogtotal)
  // -----
  cleanup()
}

run()
