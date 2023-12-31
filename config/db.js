const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('borditasybd', 'postgres', 'borditasy', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { sq: sequelize, testDbConnection };