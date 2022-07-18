require('dotenv').config();
require('express-async-errors');
const connectDb = require('./db/connect');
const express = require('express');
const app = express();

const productRouter = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products</a>');
});

app.use('/api/v1/products', productRouter);

// Handle errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const startServer = async () => {
  try {
    // Connect DB
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  } catch(err) {
    console.log(err);
  }
};

startServer();