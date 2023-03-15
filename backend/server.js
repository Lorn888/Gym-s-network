require('dotenv').config()

const express = require ('express')
const gymRatInfoRoutes = require ('./routes/gym-rat-i')

//express app
const app = express()

//middleware
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//handler
app.use(gymRatInfoRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on a port 7000')
})