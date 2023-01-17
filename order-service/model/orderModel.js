module.exports = async (db, Sequelize) =>
    db.define(
        'Order',
        {
            order_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4, // I expected this set the column default
            },
            product_id: {
                type: Sequelize.UUID
            },
            member_id: {
                type: Sequelize.UUID
            },
            itemt: Sequelize.NUMBER,
            amount: Sequelize.NUMBER,
            status: Sequelize.NUMBER


        }
    )