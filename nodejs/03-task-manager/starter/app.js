require('dotenv').config();
const express = require('express');
const taskRouter = require('./routes/tasks');
const connectDb = require('./db/connect');

const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

// Routes
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

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
