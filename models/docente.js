'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  docente.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    materia: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    grupo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'docente',
  });
  return docente;
};