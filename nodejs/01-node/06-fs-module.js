const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync('./dummy/test1.txt', 'utf8');
console.log(firstFile);

// `flag: a` is for appending, `flag: w` is for writing and replacing
writeFileSync('./dummy/test2.txt', `From first file: ${firstFile}`, {
  flag: 'a'
});