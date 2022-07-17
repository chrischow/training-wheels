const mongoose = require('mongoose');

const connectDb = (mongo_uri) => {
  return mongoose.connect(mongo_uri, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

module.exports = connectDb;