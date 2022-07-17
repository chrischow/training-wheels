const path = require('path');

console.log(`Platform's path separator: ${path.sep}`);

const randomPath = path.join('what', 'the', 'fuck');
console.log(`Random path: ${randomPath}`);

const base = path.basename(path.join('..', 'README.md'));
console.log(`Last portion of path: ${base}`);

const absPath = path.resolve(__filename);
console.log(`Absolute path: ${absPath}`);