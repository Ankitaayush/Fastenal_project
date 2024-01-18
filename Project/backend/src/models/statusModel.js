const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Status = sequelize.define('Status', {
  sid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  app1: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  app2: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Status;
