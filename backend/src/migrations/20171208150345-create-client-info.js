'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('client_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },     
      Name: {
        type:  Sequelize.STRING,
      },  
      FirstName: {
        type: Sequelize.STRING,
    },
      PhoneNumber:{
        type: Sequelize.STRING,
    },     
      EMail:{
        type:  Sequelize.STRING,
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
    return queryInterface.dropTable('client_infos');
  }
};