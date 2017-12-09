module.exports = (sequelize, DataTypes) => {
  var client_info = sequelize.define('client_info', {
    Name: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    EMail: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return client_info;
};