// Logger middleware
const logger = (req, res, next) => {
  const identifier = req.headers['X-Forwarded-For'] || req.socket.remoteAddress;
  const user = req.user;
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();
  console.log(`${identifier} - ${user.name} - [${time}] ${method} - ${url}`);
  next();
};

module.exports = logger;