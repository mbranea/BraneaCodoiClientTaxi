'use strict';
module.exports = (sequelize, DataTypes) => {
  var client_account = sequelize.define('client_account', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    client_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return client_account;
};