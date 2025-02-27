// Entry file of the back-end application, where we'll register the Express app
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// built-in middleware for parsing incoming JSON payloads and making that data available in the req.body
app.use(express.json())

// middleware: runs first before any request (call the next function to call the next request)
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// When we fire a request at req (/api/workouts), we use the routes at res (workoutRoutes)
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })