const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Request=require ('./requestModel.js');

    
    const Item=require ('./itemModel.js');
    const ItemVendorMap=require ('./ItemVendorMap.js');


const RequestItemMap = sequelize.define('RequestItemMap', {
  rm_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item_spec: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itid:{
    type :DataTypes.INTEGER ,
    allowNull:false,
    
  },
  quantity:{
    type : DataTypes.DECIMAL(10,2),
    defaultValue : 1.00,
    allowNull:false,

  },
  rid:{
    type:DataTypes.INTEGER,
    allowNull:false
  }

});
RequestItemMap.belongsTo(Item, { foreignKey: 'itid' });
RequestItemMap.belongsTo(Request, { foreignKey: 'rid' });
RequestItemMap.hasOne(ItemVendorMap, { foreignKey: 'itid' });
module.exports = RequestItemMap;