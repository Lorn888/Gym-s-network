require('dotenv').config()

const express = require ('express')
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

//handler
app.use('/api/gym-rat-i', gymRatInfoRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on a port 7000')
})