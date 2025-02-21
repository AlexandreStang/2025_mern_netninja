const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true}) // Keep track of when a document is created and last updated

module.exports = mongoose.model('Workout', workoutSchema) // Export the model 'Workout' with the schema