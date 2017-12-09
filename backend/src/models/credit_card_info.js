'use strict';
module.exports = (sequelize, DataTypes) => {
  var credit_card_info = sequelize.define('credit_card_info', {
    client_id: DataTypes.INTEGER,
    cardnumber: DataTypes.STRING,
    expiration_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return credit_card_info;
};