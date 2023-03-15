require('dotenv').config()

const express = require ('express')
const mongoose = require ('mongoose')
const gymRatInfoRoutes = require ('./routes/gym-rat-i')

//express app
const app = express()

//middleware

//attatches body from the requests to request object
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/gym-rat-i', gymRatInfoRoutes)

//connsect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on a port', process.env.PORT)
        })
        
    })
    .catch((error)=> {
        console.log(error)
    })
