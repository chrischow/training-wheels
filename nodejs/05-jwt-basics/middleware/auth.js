const { UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  // Extract token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No auth token provided.');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    // Pass params on
    req.user = { id, username };
    next()
  } catch (error) {
    throw new UnauthenticatedError('Not authorised.')
  }
}

module.exports = authMiddleware;