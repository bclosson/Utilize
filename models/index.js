const mongoose = require('mongoose');
const db = require('../config/keys').process.env.mongoURI;


const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(db, configOptions)
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
  Recipe: require('./Recipe'),
  Ingredient: require('./Ingredients'),
  User: require('./User')
};