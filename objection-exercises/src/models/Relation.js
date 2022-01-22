const { ManytoManyRelation, BaseModel } = require('./BaseModel')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      parent: {
        relation: ManytoManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentID',
            to: 'relations.childID',
          },
          to: 'users.id',
        },
      },
      child: {
        relation: ManytoManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childID',
            to: 'relations.parentID',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Relation
