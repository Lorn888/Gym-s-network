const mongoose = require("mongoose");

//creating a new schema
const Schema = mongoose.Schema;

const ratInfoSchema = new Schema(
  {
    sex: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gym_rat_info", ratInfoSchema);

//Gym_rat_info.find()
