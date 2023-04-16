'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'user' })
    }
  }
  Evaluate.init({
     start: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Evaluate',
  });
  return Evaluate;
};