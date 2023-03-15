const express = require ('express')

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
router.post('/', (req, res) => {
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