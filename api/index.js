const express = require ('express')
const mongoos = require('mongoose')
const dotenv = require('dotenv')
const User = require ('./models/User')
const jwt = require ('jsonwebtoken')

dotenv.config()

mongoos.connect(process.env.MONGO_URL)
jwtSecret = process.env.JWT_SECRET

const app = express()

app.get('/test', (req,res) => {
    res.json('Test successfull')
})

app.post  ('register' ,async (req, res) => {
    const {name, password} = req.body
    const createdUser = await User.create({name, password})
    jwt.sign({userId:createdUser._id}, jwtSecret, (err, token) => {
        if (err) throw err;
        res.cookie('token' ,token ).status(201).json('ok')
})
})
app.listen(5555);