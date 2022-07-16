// ---- BUILT-IN MODULES ---- //
const os = require('os');
const user = os.userInfo();
const uptime = os.uptime() / 60 / 60 / 24;
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};

console.log(currentOs);