const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1id, user2id }) => ({
  id: casual.uuid,
  user1: user1id,
  user2: user2id,
  requestedAt: casual.moment,
  status: casual.random_element(['Accepted', 'Pending', 'Rejected']),
}))

const friendData = []

for (let i = 0; i < 10; ++i) {
  const user1id = casual.random_element(userData).id
  const user2id = casual.random_element(userData).id
  friendData.push(casual.friend({ user1id, user2id }))
}

// console.log(friendData)

module.exports = friendData
