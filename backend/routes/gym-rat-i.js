const express = require ('express')
const Gym_rat_info = require('../models/gym-rat-info-models')
const router = express.Router()

//get all members info
router.get('/', (req, res) => {
    res.json({mssg:'Get all members info'})
})

//get a single members info 
router.get('/:id', (req, res) => {
    res.json({mssg:'Get single members info'})
})

//post member info
router.post('/', async (req, res) => {
    const {sex, experiance, age, weight, height } = req.body

    try {
        const gym_rat_info = await Gym_rat_info.create({sex, experiance, age, weight, height })
        res.status(200).json(gym_rat_info)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg:'Post members info'})
})

//delets member info
router.delete('/:id', (req, res) => {
    res.json({mssg:'Delets members info'})
})


//Updates member info
router.patch('/:id', (req, res) => {
    res.json({mssg:'Updates members info'})
})

module.exports = router