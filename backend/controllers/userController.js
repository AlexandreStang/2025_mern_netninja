const User = require('../models/userModel')

// Login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// Sign up user
const signupUser = async (req, res) => {
    res.json({mssg: 'sign up user'})
}

module.exports = {
    loginUser,
    signupUser
}