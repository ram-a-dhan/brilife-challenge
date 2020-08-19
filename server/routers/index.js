const routers = require('express').Router();

const agenLevel = require('./agenLevel');
const agen = require('./agen');
// const agenStruktur = require('./agenStruktur');

routers.use('/agen-level', agenLevel);
routers.use('/agen', agen);
// routers.use('/agen-struktur', agenStruktur);

module.exports = routers;