// http://localhost:3001/Nonflix/login

const { User } = require('../db')

const postUser = async (req, res) => {
    try {
        const { email, password, name, provider } = req.body;
        

        if( !email || !password || !name ) throw new Error(' Insufficient parameters')
        

        if ( await User.findOne({where: { email: email }})) throw new Error('Existing user')
        else { const newUser = await User.create({ email, password, name, provider: provider ? provider : "local"})     
               if(!newUser) throw new Error('The User was not created')
            }


    res.status(200).json("User created successfully")       

    
    } catch (error) {
        res.status(404).json( {error: error.message} )
        
    }
}

module.exports = {postUser};