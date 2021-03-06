const { StatusCodes } = require('http-status-codes');
const { CustomAPIError } = require('../errors/');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Route not found.' });
}

module.exports = errorHandlerMiddleware;