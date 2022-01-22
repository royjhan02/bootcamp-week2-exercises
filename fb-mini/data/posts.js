const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ userId }) => ({
  id: casual.uuid,
  userid: userId,
  post: casual.string,
  likecount: casual.integer(0, 100),
  createdAt: casual.moment,
}))

const postData = []

for (let i = 0; i < 10; ++i) {
  const userId = casual.random_element(userData).id
  postData.push(casual.post({ userId }))
}

// console.log(postData)

module.exports = postData
