const router = require('express').Router();
const agenController = require('../controllers/agen');

router.get('/', agenController.showAll);
router.post('/', agenController.addOne);

module.exports = router;