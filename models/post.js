'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  }
  Post.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    acreage: DataTypes.STRING,
    describe: DataTypes.STRING,
    numberroom: DataTypes.NUMBER,
    numberroomavailable: DataTypes.NUMBER,
    birthday: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};