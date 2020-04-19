'use strict'
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {}
  )
  Article.associate = function(models) {
    // associations can be defined here
  }
  return Article
}
