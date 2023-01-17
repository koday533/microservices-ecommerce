module.exports = async (db, Sequelize) =>
    db.define(
        'Product',
        {
            product_id: {
                primaryKey: true,
                // autoIncrement: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4, // I expected this set the column default
            },
            name: Sequelize.STRING,
            price: Sequelize.STRING,
            detail: Sequelize.STRING,
            stock: Sequelize.INTEGER,
            photoUrl: Sequelize.STRING,
        }
    )