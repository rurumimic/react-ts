'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Oauths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      provider: {
        type: Sequelize.STRING,
      },
      providerId: {
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
      profileUrl: {
        type: Sequelize.STRING,
      },
      photoUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Oauths')
  },
}
