const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const RequestItemMap = require('./requestItemMap');
const Status = require('./statusModel');

const RequestStatus = sequelize.define('RequestStatus', {
  rqid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quote_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull:true,

  },
  sid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  purchase_order: {
    type: DataTypes.STRING,
  },
  invoice: {
    type: DataTypes.STRING,
  },
  rm_id:{
    type :DataTypes.INTEGER ,
    allowNull:false
  }
});

RequestStatus.belongsTo(RequestItemMap, { foreignKey: 'rm_id'});
RequestStatus.belongsTo(Status,{foreignKey:'sid'});
RequestItemMap.hasMany(RequestStatus, { foreignKey: 'rm_id'});
module.exports = RequestStatus;
