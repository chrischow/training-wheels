const { BadRequest } = require('../errors');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest('Username or password is not valid.');
  }
  // Demo: pseudo ID == today's date. Use the proper user ID in a real app.
  const id = new Date().getDate();

  const token = jwt.sign(
    { id, username },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );

  return res.status(200).json({ 'message': 'User authenticated.', token })
};

// Dashboard controller
const dashboard = async (req, res) => {

  const luckyNumber = Math.floor(Math.random() * 100);
  return res.status(200).json({
    'message': `Hello, ${req.user.username}`,
    secret: `Here is your authorised data: ${luckyNumber}`
  });
};

module.exports = {
  login,
  dashboard
};