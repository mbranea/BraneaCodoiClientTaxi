'use strict';
module.exports = (sequelize, DataTypes) => {
  var orase = sequelize.define('orase', {
    nume: DataTypes.STRING,
    judet: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return orase;
};