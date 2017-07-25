'use strict';
const models = require('./index')

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.TEXT
    },
    product_category: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};