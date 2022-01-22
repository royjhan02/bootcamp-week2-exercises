exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('user1')
    .references('users.id')
    .notNull()

  table
    .uuid('user2')
    .references('users.id')
    .notNull()

  table
    .date('requestedAt')
    .notNullable()

  table
    .enum('status', ['Accepted', 'Pending', 'Rejected'])
    .notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
