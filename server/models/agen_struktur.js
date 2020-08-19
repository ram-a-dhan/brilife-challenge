'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agen_struktur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      agen_struktur.belongsTo(models.agen, {
        foreignKey: 'id_agen'
      });
    }
  };
  agen_struktur.init({
    parent_id: {
      type: DataTypes.INTEGER,
    },
    id_agen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    berlaku_mulai: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
      }
    },
    berlaku_akhir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['A','N']]
      }
    },
    keterangan: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'agen_struktur',
  });
  return agen_struktur;
};