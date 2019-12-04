'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    mass: DataTypes.STRING,
    hair_color: DataTypes.STRING,
    skin_color: DataTypes.STRING,
    eye_color: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  People.associate = function(models) {
    // associations can be defined here
  };
  return People;
};