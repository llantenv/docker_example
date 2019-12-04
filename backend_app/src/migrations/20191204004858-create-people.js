'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      mass: {
        type: Sequelize.STRING
      },
      hair_color: {
        type: Sequelize.STRING
      },
      skin_color: {
        type: Sequelize.STRING
      },
      eye_color: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      uniqueKeys: {
          name_unique: {
              fields: ['name']
          }
      }
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('People');
  }
};