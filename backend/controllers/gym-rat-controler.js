const Gym_rat_info = require("../models/gym-rat-info-models");
const mongoose = require("mongoose");

//Get all gym rat info
const getAllGRI = async (req, res) => {
  const gri = await Gym_rat_info.find({}).sort({ createdAt: -1 }); //blank curly brackets finds

  res.status(200).json(gri);
};

//Get a single rat info
const getGRI = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(403).json({ error: "No such gym rat" });
  }

  const gri = await Gym_rat_info.findById(id);

  if (!gri) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(gri);
};

//Create gym rat info
const createGRI = async (req, res) => {
  const { sex, experiance, age, weight, height } = req.body;

  let emptyFields = []

  if(!sex) {
    emptyFields.push('sex')
  }
  if(!experiance) {
    emptyFields.push('experiance')
  }
  if(!age) {
    emptyFields.push('age')
  }
  if(!weight) {
    emptyFields.push('weight')
  }
  if(!height) {
    emptyFields.push('height')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all the fields' , emptyFields})
  }

  try {
    const gym_rat_info = await Gym_rat_info.create({
      sex,
      experiance,
      age,
      weight,
      height,
    });
    res.status(200).json(gym_rat_info);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Delete member info
const deleteGRI = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(403).json({ error: "No such gym rat" });
  }

  const gri = await Gym_rat_info.findOneAndDelete({ _id: id });

  if (!gri) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(gri);
};

//Update member info
const updateGRI = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(403).json({ error: "No such gym rat" });
  }

  const gri = await Gym_rat_info.findOneAndUpdate({_id:id}, {
    ...req.body
  })

  if (!gri) {
    return res.status(404).json({ error: "No such info" });
  }
  
  res.status(200).json(gri)
}

module.exports = {
  createGRI,
  getAllGRI,
  getGRI,
  deleteGRI,
  updateGRI
};
