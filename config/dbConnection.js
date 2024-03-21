const mongoose = require('mongoose');
const uri = process.env.DATABASE_URL;
require("../models")

mongoose.connect(uri).then(() => {
  console.log('Connected to database!');
}).catch((err) => {
  console.log('Connection failed!', err);
});