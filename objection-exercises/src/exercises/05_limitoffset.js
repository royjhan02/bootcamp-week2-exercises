const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
// const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const first = await User.query().orderBy('lastName').limit(5)

  // Get the second 5 users, ordered by lastName
  const second = await User.query().orderBy('lastName').limit(5).offset(5)

  console.log(first)
  console.log(second)

  // -----
  cleanup()
}

run()
