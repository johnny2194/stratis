'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Stock_details', [
      {
        color: 'Black / Blue',
        size: '156',
        price: 47500,
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
        price: 62900,
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
        price: 62900,
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
        price: 62900,
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
        price: 58000,
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
        price: 58000,
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
        price: 62900,
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
        price: 62900,
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
        price: 62900,
        stock_level: 0,
        productId: 4,
        discount: null,
        image: "images/moment2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Cork',
        size: 'S',
        price: 24500,
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
        price: 24500,
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
        price: 24500,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingCork.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Black',
        size: 'S',
        price: 24500,
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
        price: 24500,
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
        price: 24500,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlack.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Grey',
        size: 'S',
        price: 24500,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingGrey.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Grey',
        size: 'M',
        price: 24500,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingGrey.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Grey',
        size: 'L',
        price: 24500,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingGrey.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Red',
        size: 'S',
        price: 24500,
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
        price: 24500,
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
        price: 24500,
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
        price: 24500,
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
        price: 24500,
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
        price: 24500,
        stock_level: 10,
        productId: 5,
        discount: null,
        image: "images/burtonBindingBlackBlue.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'XS',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'S',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'M',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'L',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'XL',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'XS',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'S',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'M',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'L',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'XL',
        price: 13500,
        stock_level: 10,
        productId: 6,
        discount: null,
        image: "images/BurtonShermanJacketBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'XS',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'S',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'M',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'L',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Blue',
        size: 'XL',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBlue.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'XS',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'S',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'M',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'L',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Brown',
        size: 'XL',
        price: 22000,
        stock_level: 5,
        productId: 7,
        discount: null,
        image: "images/BurtonWomensStratusPantBrown.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Maroon / Blue',
        size: '145',
        price: 41500,
        stock_level: 5,
        productId: 8,
        discount: null,
        image: "images/BurtonDayTrader.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Maroon / Blue',
        size: '150',
        price: 41500,
        stock_level: 5,
        productId: 8,
        discount: null,
        image: "images/BurtonDayTrader.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '138',
        price: 32500,
        stock_level: 5,
        productId: 9,
        discount: null,
        image: "images/BurtonDejaVu.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '141',
        price: 32500,
        stock_level: 5,
        productId: 9,
        discount: null,
        image: "images/BurtonDejaVu.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '146',
        price: 32500,
        stock_level: 5,
        productId: 9,
        discount: null,
        image: "images/BurtonDejaVu.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '149',
        price: 32500,
        stock_level: 5,
        productId: 9,
        discount: null,
        image: "images/BurtonDejaVu.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '162',
        price: 54500,
        stock_level: 10,
        productId: 10,
        discount: null,
        image: "images/HotMessSki.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '172',
        price: 54500,
        stock_level: 10,
        productId: 10,
        discount: null,
        image: "images/HotMessSki.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '168',
        price: 54500,
        stock_level: 10,
        productId: 11,
        discount: null,
        image: "images/Belafonte.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        color: 'Multi',
        size: '178',
        price: 54500,
        stock_level: 10,
        productId: 11,
        discount: null,
        image: "images/Belafonte.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Stock_details', null, {});  
  }
};
