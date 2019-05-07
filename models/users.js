'use strict';

const bcrypt = require("bcryptjs");



module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users', 
    {
    UserId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER 
    },

    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, 
  {
hooks: {
  beforeCreate: function(user) {
    user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10));
  }
}

  });
  users.associate = function(models) {
    // associations can be defined here
  };

   users.prototype.validPassword = function(password){
     return bcrypt.compareSync(password, this.Password);
   }
  return users;
};