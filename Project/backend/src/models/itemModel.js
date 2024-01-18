const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Item = sequelize.define('Item', {
  itid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Item;