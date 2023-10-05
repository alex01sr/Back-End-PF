// http://localhost:3001/Nonflix/login
const bcrypt = require('bcryptjs');
const { User } = require('../db')
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const postUser = async (req, res) => {
    try {
        const { email, password, name, provider } = req.body;

        const hashedPassword = await bcrypt.hash(password, 8);


        if (!email || !hashedPassword || !name) throw new Error(' Insufficient parameters')


        if (await User.findOne({ where: { email: email } })) throw new Error('Existing user');

        const newUser = await User.create({ email, password: hashedPassword, name, provider: provider ? provider : "local" })

        const {id} = newUser.dataValues;
         const token = jwt.sign({id}, JWT_SECRET )


        res.status(200).json({newUser, token})
    } catch (error) {
        res.status(404).json({ error: error.message })

    }
}

module.exports = { postUser };