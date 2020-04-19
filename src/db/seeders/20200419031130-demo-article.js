'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Articles',
      [
        {
          title: 'Beautiful Amsterdam',
          content:
            'Simon Bishop had always loved beautiful Amsterdam with its magnificent, motionless mountains. It was a place where he felt sleepy.',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1,
        },
        {
          title: 'Violent Kate Hemingway',
          content:
            'Kate Hemingway had always loved snooty San Diego with its healthy, heavy hills. It was a place where she felt unstable.',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2,
        },
        {
          title: 'Ruthless Steve Rabbit',
          content:
            'Steve Rabbit was thinking about Suzanne Gump again. Suzanne was an optimistic academic with skinny eyebrows and grubby feet.',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1,
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {})
  },
}
