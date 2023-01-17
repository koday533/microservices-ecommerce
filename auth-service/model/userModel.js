module.exports = async (db, Sequelize) =>
    db.define(
        'User',
        {
            user_id: {
                primaryKey: true,
                // autoIncrement: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4, // I expected this set the column default
            },
            email: {
                type: Sequelize.STRING,
                unique: true
            },
            password: Sequelize.STRING,
        }
    )