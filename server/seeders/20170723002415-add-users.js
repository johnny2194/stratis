'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'Eoghan',
        last_name: 'Crowley',
        email: 'eoghanscrowley@gmail.com',
        password: '123dogs',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Johnny',
        last_name: 'Watson',
        email: 'bobbyp@email.com',
        password: 'bobby1962',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Sue',
        last_name: 'Davies',
        email: 'sdavies@email.com',
        password: 'sd1985',
        gender: 'female',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: function (queryInterface, Sequelize) {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
