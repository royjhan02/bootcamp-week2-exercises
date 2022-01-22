const cleanup = require('../lib/cleanup')
// Import models
// const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  Pet.query().delete().where('type', 'CAT')
  // -----
  cleanup()
}

run()
