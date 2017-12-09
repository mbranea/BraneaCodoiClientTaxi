'use strict';
module.exports = (sequelize, DataTypes) => {
  var cartiere = sequelize.define('cartiere', {
    id_oras: DataTypes.INTEGER,
    nume: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cartiere;
};