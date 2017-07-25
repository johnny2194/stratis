'use strict';
const models = require('./index')

module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  

  return Order;
};