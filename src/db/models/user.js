'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
    },
    {}
  )
  User.associate = function(models) {
    User.hasOne(models.Oauth)
    User.hasMany(models.Article)
  }
  return User
}
