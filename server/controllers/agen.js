const { agen, agen_level } = require('../models');
const dateToString = require('../helpers/dateToString')
const newError = require('http-errors');

class agenController {

  static async showAll(req, res, next) {
    try {
      const response = await agen.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async addOne(req, res, next) {
    try {
      const {
        no_lisensi,
        nama_agen,
        level_agen,
        wilayah_kerja,
        status
      } = req.body;
      const find_agen_level = await agen_level.findOne({ where: { level: level_agen } });
      if (!find_agen_level) throw newError(404,'Level agen not found.');
      const new_agen = {
        no_lisensi,
        nama_agen,
        id_agen_level: find_agen_level.id,
        status,
        status_tgl: dateToString(new Date()),
        wilayah_kerja,
      }
      const response = await agen.create(new_agen);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = agenController;