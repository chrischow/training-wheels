const { readFile, writeFile } = require('fs');

readFile('./dummy/test1.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFile = result;
  writeFile('./dummy/test2-async.txt', `From first file (async): ${firstFile}`, { flag: 'w' }, (err1, result1) => {
    if (err1) {
      console.log(err1);
      return;
    }
    console.log(result1);
  })
})