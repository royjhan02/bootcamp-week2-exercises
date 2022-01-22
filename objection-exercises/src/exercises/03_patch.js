const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
// const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const updated = await User.query().patch({
    age: 18,
  }).where('age', '<', 18)

  console.log(updated)

  // -----
  cleanup()
}

run()
