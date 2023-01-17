module.exports = async (db, Sequelize) =>
    db.define(
        'Member',
        {
            member_id: {
                primaryKey: true,
                // autoIncrement: true,
                type: Sequelize.UUID
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            phone: Sequelize.NUMBER,
            gender: Sequelize.STRING,
            address: Sequelize.STRING,
        }
    )