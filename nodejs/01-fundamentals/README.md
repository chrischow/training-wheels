# Fundamentals

## Running Code
Use `node app` or `node app.js` if your script is `app.js`.

## Globals
- `__dirname`
- `__filename`
- `require()`: To use modules
- `module`: To get info about modules
- `process`: Info about environment where program is being executed
- Vanilla JS functions e.g. `console.log`, `setInterval`

## Modules
- In CommonJS, all files are modules, as long as they export something
- Can export an object or a function
- "Export as you go": use `module.exports.<variable name>` as you define variables
- To import a module, you must say exactly where it is
- Built-in Modules
  - os
  - path
  - fs: Has synchronous and asynchronous
  - http

### HTTP Module
- Convention is to use `req` and `res`
  - `req`: Request to server from users
  - `res`: Response to users

  ```js
  const server = http.createServer((req, res) => {
    res.write('Welcome to our home page.');
    res.end();
  })
  ```

