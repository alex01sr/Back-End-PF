// http://localhost:3001/Nonflix/login/

const { User } = require("../db")



const getUser = async (req, res) => {
    try {
        const { email , password } = req.query

        const user = await User.findOne({where: {password, email,}})
        

        if(!user) throw new Error('The User does not exist')
        res.status(200).json("access granted");

    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

module.exports = {getUser}