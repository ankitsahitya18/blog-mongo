const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;