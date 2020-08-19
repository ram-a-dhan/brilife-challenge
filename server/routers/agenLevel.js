const router = require('express').Router();
const agenLevelController = require('../controllers/agenLevel');

router.get('/', agenLevelController.showAll);

module.exports = router;