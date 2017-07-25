'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Stock_details', [
      {
        color: 'red',
        size: 'large',
        price: 123,
        stock_level: 10,
        productId: 2,
        discount: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'green',
        size: 'medium',
        price: 123,
        stock_level: 10,
        productId: 2,
        discount: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'blue',
        size: 'large',
        price: 123,
        stock_level: 10,
        productId: 2,
        discount: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'orange',
        size: 'large',
        price: 123,
        stock_level: 10,
        productId: 2,
        discount: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Stock_details', null, {});  
  }
};
