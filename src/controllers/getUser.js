// http://localhost:3001/Nonflix/login

const { User } = require("../db")


const getUser = async (req, res) => {
    try {
        const { email , password } = req.query

        const user = await User.findOne({where: {email,}})

        if(!user) throw new Error('The user is not registered')

        user.password === password
        ? res.status(200).json(user)
        : res.status(200).json("Incorrect password")
        

    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

module.exports = {getUser}