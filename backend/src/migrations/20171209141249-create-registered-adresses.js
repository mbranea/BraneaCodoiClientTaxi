'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registered_adresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cartier: {
        type: Sequelize.INTEGER
      },
      id_oras: {
        type: Sequelize.INTEGER
      },
      adress_name: {
        type: Sequelize.STRING
      },
      street_nr: {
        type: Sequelize.INTEGER
      },
      adress_type: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('registered_adresses');
  }
};