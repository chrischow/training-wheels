// Import: it's a class
const EventEmitter = require('events');

// Create custom class
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} with ID ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic`);
});

customEmitter.emit('response', 'John', 33);