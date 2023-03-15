require('dotenv').config()

const express = require ('express')

//express app
const app = express()

app.get('/', (req,res) => {
    res.json({msg: 'Welcome to my gym-social-app'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on a port 7000')
})