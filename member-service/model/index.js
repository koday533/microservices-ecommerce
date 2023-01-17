// require('dotenv').config()
const Sequelize = require('sequelize')
const memberModel = require('./memberModel')

const db = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'member_service',
    dialect: 'mysql'
})

memberModel(db, Sequelize)

module.exports = {
    sync: args => db.sync(args),
    sequelize: db,
    Member: db.models.Member
}