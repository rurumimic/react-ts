'use strict'
module.exports = (sequelize, DataTypes) => {
  const Oauth = sequelize.define(
    'Oauth',
    {
      provider: DataTypes.STRING,
      providerId: DataTypes.INTEGER,
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      token: DataTypes.STRING,
      profileUrl: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
    },
    {}
  )
  Oauth.associate = function(models) {
    // associations can be defined here
  }
  return Oauth
}
