const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const one = await User.query().withGraphFetched('pet')

  // Get all users, their pets, AND their children
  const two = await User.query().withGraphFetched('[pet, relations.child]')

  // Get all users, their parents, and their grandparents
  const three = await User.query().withGraphFetched('[relations.parent, relations.parent.parent]')
  // Get all users, their pets, their chilren, and their childrens' pets
  const four = await User.query().withGraphFetched('[pet, relations.child, relations.child.pet')

  console.log(one)
  console.log(two)
  console.log(three)
  console.log(four)
  // -----
  cleanup()
}

run()
