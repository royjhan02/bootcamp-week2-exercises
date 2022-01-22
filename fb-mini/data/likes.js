const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('like', ({ liker, post }) => ({
  id: casual.uuid,
  likerid: liker,
  postid: post,
}))

const likeData = []

for (let i = 0; i < 10; ++i) {
  const liker = casual.random_element(userData).id
  const post = casual.random_element(postData).id
  likeData.push(casual.like({ liker, post }))
}

// console.log(likeData)

module.exports = likeData
