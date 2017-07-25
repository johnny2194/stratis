'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stock_details = sequelize.define('Stock_details', {
    color: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock_level: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    discount: {
      type: DataTypes.INTEGER
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Stock_details;
};