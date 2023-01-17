// require('dotenv').config()
const Sequelize = require('sequelize')
const productModel = require('./productModel')

const db = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'product_service',
    dialect: 'mysql'
})

productModel(db, Sequelize)

module.exports = {
    sync: args => db.sync(args),
    sequelize: db,
    Product: db.models.Product
}