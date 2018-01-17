'use strict';
module.exports = (sequelize, DataTypes) => {
  var registered_adresses = sequelize.define('registered_adresses', {
    adress_name: DataTypes.STRING,
    cartier: DataTypes.STRING,
    oras: DataTypes.STRING,
    street_name: DataTypes.STRING,

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return registered_adresses;
};