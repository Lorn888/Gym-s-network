const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    //so you cant use the same email
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Static signup method

userSchema.static.signup = async (email, password) => {
  const exists = await this.findOne({email})

  if (exists) {
    throw Error('Email already in use')
  }

  const salts = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash})

  return user

}

module.exports = mongoose.model("User", userSchema);
