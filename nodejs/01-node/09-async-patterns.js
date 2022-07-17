const { readFile, writeFile } = require('fs');
const util = require('util');

const filePath = './dummy/test1.txt';

// Method 1: Wrap readFile in a function to return a promise
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject returns the error
        reject(err);
      } else {
        // Return the data
        resolve(data);
      }
    });
  });
}

// The "promise" way
getText(filePath)
  .then(result => console.log('With promise:', result))
  .catch(err => console.log(err));

// The async/await way
const start = async () => {
  try {
    const file = await getText(filePath);
    console.log('With async/await:', file);
  } catch (error) {
    console.log(error);
  }
};

start();

// Method 2: Wrap original functions in promisify
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const startAsyncAwait = async () => {
  try {
    const file = await readFilePromise(filePath, 'utf8', );
    await writeFilePromise('./dummy/test2-async-await.txt', `From first file (async-await) ${file}`);
  } catch(error) {
    console.log(error);
  }
}

startAsyncAwait();

// Method 3: Import original files with promises API
// const { readFile, writeFile } = require('fs').promises