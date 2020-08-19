'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_lisensi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      nama_agen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_agen_level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[1,0]]
        }
      },
      status_tgl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        }
      },
      wilayah_kerja: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agens');
  }
};