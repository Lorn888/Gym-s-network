const express = require ('express')
const mongoos = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

mongoos.connect(process.env.MONGO_URL)

const app = express()

app.get('/test', (req,res) => {
    res.json('Test successfull')
})

app.post('register' , (req, res) => {

})
app.listen(5555);