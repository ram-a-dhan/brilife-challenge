const router = require('express').Router();
const agenStrukturController = require('../controllers/agenStruktur');

router.get('/', agenStrukturController.showAll);
router.post('/', agenStrukturController.addOne);

module.exports = router;