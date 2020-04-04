'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Agatha',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bruse',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Charlotte',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
