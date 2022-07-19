require('dotenv').config();
require('express-async-errors');

const { connectDb } = require('./db/connect');
const mainRouter = require('./routes/main');
const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json());
app.use(express.static('./public'));

// Routes
app.use('/api/v1', mainRouter);

// Handle other routes and errors
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const startServer = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}...`);
    })
  } catch (err) {
    console.log(err);
  }
};

startServer();