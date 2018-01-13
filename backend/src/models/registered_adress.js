'use strict';
module.exports = (sequelize, DataTypes) => {
  var registered_adress = sequelize.define('registered_adress', {
    adress_name: DataTypes.STRING,
    oras: DataTypes.STRING,
    cartier: DataTypes.STRING,
    street_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return registered_adress;
};