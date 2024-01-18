const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item=require ('./itemModel.js');
const Vendor=require ('./vendorModel.js');

const ItemVendorMap = sequelize.define('ItemVendorMap', {
  itid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }

});
Item.belongsToMany(Vendor, { through: ItemVendorMap, foreignKey: 'itid' });
Vendor.belongsToMany(Item, { through: ItemVendorMap, foreignKey: 'vid' });

module.exports = ItemVendorMap;