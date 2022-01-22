const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const inserted = await User.query().insert({
    id: 'Roy',
    email: 'royhan@college.harvard.edu',
    age: 19,
    firstName: 'Roy',
    lastName: 'Han',
  })

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const insertpet = await Pet.query().insert({
    ownerId: ???,
    type: 'ALLIGATOR',
    name: 'Tory',
  })

  console.log(inserted)
  console.log(insertpet)
  // -----
  cleanup()
}

run()
