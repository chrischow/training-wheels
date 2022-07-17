# Node.js Fundamentals

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

## npm
Complete reset:
- Remove node_modules folder
- Remove `package-lock.json`
- Run `npm install`

## Nodemon
- Watches files and restart the app for us

## Event-Driven Programming
- Flow of the program depends at least in part on the events that occur as the program executes
- Listen for specific events and register (callback) functions that execute in response to those events

## Streams
- Used to read or write sequentially to/from a continuous source or a big file
- Extend the EventEmitter class

1. Writeable: Write data sequentially
1. Readable: Read data sequentially
3. Duplex: Read and write data sequentially
4. Transform: Modify data when writing or reading

## HTTP

### Ports
- Communication endpoints
- Specific ports have a specific purpose
- For HTTP: port 80
- For HTTPS: port 443

### Response Objects
- Must always use `res.end()` to signal to the server that all response headers and body have been sent
- Otherwise, the clietn will keep waiting for a response!