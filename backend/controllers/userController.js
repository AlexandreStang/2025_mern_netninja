const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    // The arguments are:
        // payload: data you want to encore
        // secret/private key: string or buffer used to sign the token
        // options (optional): object with settings like expiration time, algorithm, and more
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// Login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Sign up user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    loginUser,
    signupUser
}