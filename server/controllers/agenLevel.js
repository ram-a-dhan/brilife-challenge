const { agen_level } = require('../models');

class agenLevelController {

  static async showAll(req, res, next) {
    try {
      const response = await agen_level.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = agenLevelController;