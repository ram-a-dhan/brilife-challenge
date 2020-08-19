const { agen_struktur, agen, agen_level } = require('../models');
const dateToString = require('../helpers/dateToString')
const newError = require('http-errors');

class agenController {

  static async showAll(req, res, next) {
    try {
      const response = await agen_struktur.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async addOne(req, res, next) {
    try {
      const {
        nama_agen,
        nama_atasan,
        berlaku_mulai,
        berlaku_akhir,
        status
      } = req.body;
      let new_agen_struktur = {};
      if (!nama_agen) throw newError(400, 'Agen is required.');
      const find_agen = await agen.findOne({
        where: {
          nama_agen
        },
        include: agen_level
      });
      if (!find_agen) throw newError(404, 'Agen not found.');
      if (find_agen.agen_level.level === 'RM') {
        if (nama_atasan) throw newError(400, 'Regional Manajer doesn\'t have atasan.');
        new_agen_struktur = {
          id_agen: find_agen.id,
          berlaku_mulai,
          berlaku_akhir,
          status,
        };
      } else {
        if (!nama_atasan) throw newError(400, 'Agen must have atasan.');
        if (nama_agen === nama_atasan) throw newError(400, 'Agen cannot be the same as atasan.');
        const find_atasan = await agen.findOne({ where: { nama_agen: nama_atasan } });
        if (!find_atasan) throw newError(404, 'Atasan not found.');
        new_agen_struktur = {
          parent_id: find_atasan.id,
          id_agen: find_agen.id,
          berlaku_mulai,
          berlaku_akhir,
          status,
        };
      }
      const response = await agen_struktur.create(new_agen_struktur);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = agenController;