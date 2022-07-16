const secret = 'SUPER SECRET';
const john = 'john';
const sayHi = (name) => {
  console.log(`Hey ${name}`);
};

module.exports = {
  john, sayHi
};

module.exports.names = ['peter', 'kyle'];