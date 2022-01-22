exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userid')
    .references('users.id')
    .notNull()

  table
    .string('post')
    .notNullable()

  table
    .integer('likecount')
    .notNullable()

  table
    .date('createdAt')
    .notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
