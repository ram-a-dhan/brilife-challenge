function errorHandler(err, req, res, next) {
	let errObj = {};
	if (err.name === 'SequelizeUniqueConstraintError') {
		errObj.status = 400;
		errObj.message = 'ID agen / no. lisensi already exists.';
	} else if (err.name === 'SequelizeValidationError') {
		errObj.status = 400;
		errObj.message = err.errors.join(', ') + '.';
	} else if (err.name === 'BadRequestError' && err.message) {
		errObj.status = 400;
		errObj.message = err.message;
	} else if (err.name === 'BadRequestError') {
    errObj.status = 400;
		errObj.message = 'Invalid input.';
	} else if (err.name === 'NotFoundError' && err.message) {
		errObj.status = 404;
		errObj.message = err.message;
	} else if (err.name === 'NotFoundError') {
		errObj.status = 404;
		errObj.message = 'Item not found.';
	} else if (err.name === 'SequelizeDatabaseError') {
		errObj.status = 500;
		errObj.message = 'Internal Server Error';
	} else if (err.message) {
		errObj.status = 500;
		errObj.message = err.message;
	} else {
		errObj.status = 500;
		errObj.message = 'Unknown Error';
	}
	res.status(errObj.status).json(errObj);
}

module.exports = errorHandler;
