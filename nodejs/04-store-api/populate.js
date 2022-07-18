require('dotenv').config();

const connectDb = require('./db/connect');
const Product = require('./models/Product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    console.log('Successfully connected to database.');
    await Product.deleteMany({});
    console.log('Removed all current products.');
    await Product.create(jsonProducts);
    console.log('Populated database with default dataset.');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();