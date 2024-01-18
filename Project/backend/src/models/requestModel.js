const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User=require ('./userModel.js');

const Request = sequelize.define('Request', {
    rid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    req_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pid:{
      type:DataTypes.INTEGER,
    }
});

 Request.belongsTo(User, { foreignKey: 'pid'});  
 User.hasMany(Request, { foreignKey: 'pid'});

module.exports = Request;