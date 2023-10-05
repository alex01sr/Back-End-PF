// http://localhost:3001/Nonflix/login

const { User } = require("../db")
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');



const getUser = async (req, res) => {
    try {
        const { email , password } = req.query

        const validatePass = await bcrypt.compare(password, user.dataValues.password)

        const user = await User.findOne({where: {email,}})

        const {id} = user.dataValues;
        const token = jwt.sign({id}, JWT_SECRET )

        if(!user) throw new Error('The user is not registered')

        validatePass
        ? res.status(200).json({user, token})
        : res.status(200).json("Incorrect password")
        

    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

module.exports = {getUser}