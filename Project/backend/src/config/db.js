const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Assets', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;