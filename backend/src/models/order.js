'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    order_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    due_time: DataTypes.STRING,
    completed: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return order;
};