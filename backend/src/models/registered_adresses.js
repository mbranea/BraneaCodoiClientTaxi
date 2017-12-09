'use strict';
module.exports = (sequelize, DataTypes) => {
  var registered_adresses = sequelize.define('registered_adresses', {
    id_cartier: DataTypes.INT,
    id_oras: DataTypes.INT,
    adress_name: DataTypes.STRING,
    street_nr: DataTypes.INT,
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