// require('dotenv').config()
const Sequelize = require('sequelize')
const userModel = require('./userModel')

const db = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'auth_service',
    dialect: 'mysql'
})

userModel(db, Sequelize)

module.exports = {
    sync: args => db.sync(args),
    sequelize: db,
    User: db.models.User
}