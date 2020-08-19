'use strict';
const {
  Model
} = require('sequelize');
const agen_level = require('./agen_level');
const agen_struktur = require('./agen_struktur');
module.exports = (sequelize, DataTypes) => {
  class agen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      agen.belongsTo(agen_level);
      agen.hasOne(agen_struktur, {
        foreignKey: 'id_agen'
      });
    }
  };
  agen.init({
    no_lisensi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    nama_agen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_agen_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[1,0]]
      }
    },
    status_tgl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
      }
    },
    wilayah_kerja: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'agen',
  });
  return agen;
};