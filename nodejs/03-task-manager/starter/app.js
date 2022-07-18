require('dotenv').config();
const express = require('express');
const taskRouter = require('./routes/tasks');
const connectDb = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

// Home
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Task Manager API.');
});

// Handle errors
// Place this AFTER the routes
app.use(notFound);
app.use(errorHandlerMiddleware);

// Start server
const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
