'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Stock_details', [
      {
        color: 'Black / Blue',
        size: '156',
        price: 475,
        stock_level: 10,
        productId: 1,
        discount: null,
        image: "images/burton2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '164',
        price: 629,
        stock_level: 10,
        productId: 2,
        discount: null,
        image: "images/moment1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '184',
        price: 629,
        stock_level: 5,
        productId: 2,
        discount: null,
        image: "images/moment1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '190',
        price: 629,
        stock_level: 0,
        productId: 2,
        discount: null,
        image: "images/moment1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: '156',
        price: 580,
        stock_level: 10,
        productId: 3,
        discount: null,
        image: "images/burton1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: '160',
        price: 580,
        stock_level: 10,
        productId: 3,
        discount: null,
        image: "images/burton1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '164',
        price: 629,
        stock_level: 10,
        productId: 4,
        discount: null,
        image: "images/moment2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '184',
        price: 629,
        stock_level: 5,
        productId: 4,
        discount: null,
        image: "images/moment2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '190',
        price: 629,
        stock_level: 0,
        productId: 4,
        discount: null,
        image: "images/moment2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'S',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlack.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'M',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlack.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'L',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlack.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Cork',
        size: 'S',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingCork.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Cork',
        size: 'M',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingCork.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Cork',
        size: 'L',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingCork.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Grey',
        size: 'S',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingGrey.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Grey',
        size: 'M',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingGrey.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Grey',
        size: 'L',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingGrey.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Red',
        size: 'S',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingRed.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Red',
        size: 'M',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingRed.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Red',
        size: 'L',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingRed.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'S',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlackBlue.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'M',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlackBlue.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'L',
        price: 245,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlackBlue.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Stock_details', null, {});  
  }
};
