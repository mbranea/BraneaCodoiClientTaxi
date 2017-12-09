'use strict';
module.exports = (sequelize, DataTypes) => {
  var adress_info = sequelize.define('adress_info', {
    adress_id: DataTypes.INTEGER,
    adress_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return adress_info;
};