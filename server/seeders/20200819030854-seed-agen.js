'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('agens', [
      {
        no_lisensi: 1001,
        nama_agen: 'SITI',
        id_agen_level: 1,
        status: 1,
        status_tgl: '2020-01-01',
        wilayah_kerja: 'JAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 1003,
        nama_agen: 'SARIOH',
        id_agen_level: 3,
        status: 1,
        status_tgl: '2020-01-03',
        wilayah_kerja: 'JAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 1004,
        nama_agen: 'TIKNO',
        id_agen_level: 4,
        status: 1,
        status_tgl: '2020-01-04',
        wilayah_kerja: 'JAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 1002,
        nama_agen: 'LUKMAN',
        id_agen_level: 2,
        status: 0,
        status_tgl: '2020-06-15',
        wilayah_kerja: 'JAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 1005,
        nama_agen: 'SUGIMIN',
        id_agen_level: 2,
        status: 1,
        status_tgl: '2020-07-01',
        wilayah_kerja: 'JAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 3001,
        nama_agen: 'TITIS',
        id_agen_level: 4,
        status: 1,
        status_tgl: '2020-01-01',
        wilayah_kerja: 'YOGYAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 3003,
        nama_agen: 'MULYADI',
        id_agen_level: 3,
        status: 1,
        status_tgl: '2020-01-03',
        wilayah_kerja: 'YOGYAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 3004,
        nama_agen: 'JUMINI',
        id_agen_level: 2,
        status: 1,
        status_tgl: '2020-01-04',
        wilayah_kerja: 'YOGYAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 3002,
        nama_agen: 'JOKO',
        id_agen_level: 1,
        status: 1,
        status_tgl: '2020-06-15',
        wilayah_kerja: 'YOGYAKARTA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 2001,
        nama_agen: 'JATMIKO',
        id_agen_level: 4,
        status: 1,
        status_tgl: '2020-01-01',
        wilayah_kerja: 'PONTIANAK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 2002,
        nama_agen: 'JAMILAH',
        id_agen_level: 3,
        status: 1,
        status_tgl: '2020-06-15',
        wilayah_kerja: 'PONTIANAK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 2003,
        nama_agen: 'SULAIMAN',
        id_agen_level: 2,
        status: 1,
        status_tgl: '2020-01-03',
        wilayah_kerja: 'PONTIANAK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_lisensi: 2004,
        nama_agen: 'BEKTI',
        id_agen_level: 1,
        status: 1,
        status_tgl: '2020-01-04',
        wilayah_kerja: 'PONTIANAK',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('agens', null, {});
  }
};
