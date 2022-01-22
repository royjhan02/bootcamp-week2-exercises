exports.up = async knex => knex.schema.createTable('likes', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('likerid')
    .references('users.id')
    .notNull()

  table
    .uuid('postid')
    .references('posts.id')
    .notNull()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('likes')
