const Sequelize = require('sequelize')
const databaseConfig = require('../config/config.json')

const sequelize = new Sequelize(
    databaseConfig.database, databaseConfig.username, databaseConfig.password, {
        host: databaseConfig.host,
        dialect: "mysql"
    }
)

module.exports = sequelize;