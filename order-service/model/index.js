require('dotenv').config()
const Sequelize = require('sequelize')
const orderModel = require('./orderModel')

const db = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'order_service',
    dialect: 'mysql'
})

orderModel(db, Sequelize)

module.exports = {
    sync: args => db.sync(args),
    sequelize: db,
    Order: db.models.Order
}