const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    // Verify authentication
    const {authorization} = req.headers

    if (!authorization) {
        return res.status(401).json({error: "Authorization token required"})
    }

    const token = authorization.split(' ')[1] // authorization is equal to something like "Bearer ddhafdhasjfhjakfha.dashdadhikad.adhsadhakdhka"

    try {
        const {_id} = jwt.verify(token, process.env.SECRET) // Grabs id from the token

        req.user = await User.findOne({_id}).select('_id') // Only returns the id property (no need for email and password)
        next() // Run next handler function

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth