const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Satic sign up method
userSchema.statics.signup = async function(email, password){ // Must be a regular function instead of an arrow function to use "this" keyword
    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10) // The higher the salt value, the more secure the passwords (but slower the process)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)