'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agen_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      agen_level.hasMany(models.agen, {
        foreignKey: 'id_agen_level'
      });
    }
  };
  agen_level.init({
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    urutan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'agen_level',
  });
  return agen_level;
};