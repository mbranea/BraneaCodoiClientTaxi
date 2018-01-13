'use strict';
module.exports = (sequelize, DataTypes) => {
  var registered_adresses = sequelize.define('registered_adresses', {
    cartier: DataTypes.STRING,
    oras: DataTypes.STRING,
    adress_name: DataTypes.STRING,
    street_name: DataTypes.STRING,
    adress_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return registered_adresses;
};