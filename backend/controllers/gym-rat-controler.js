const Gym_rat_info = require('../models/gym-rat-info-models')

//Get all gym rat info
const getGRI = async (req,res) => {
    const gri = await  Gym_rat_info.find({}).sort({createdAt: -1})    //blank curly brackets finds

    res.status(200).json(gri)
} 

//Get a single rat info

//Create gym rat info
const createGRI = async (req, res) => {
    const {sex, experiance, age, weight, height } = req.body

    try {
        const gym_rat_info = await Gym_rat_info.create({sex, experiance, age, weight, height })
        res.status(200).json(gym_rat_info)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg:'Post members info'})
}
//Delete member info

//Update member info    

module.exports = {
    createGRI
}