// http://localhost:3001/Nonflix/login/update

const {User} = require("../db")

const putUser = async (req, res) => {
    try{
        
    const { id, password, name } = req.body;

    if(!id||!password||!name) {
        throw new Error("Information is missing")
    }

    const user = await User.findByPk(id);
    user.name = name;
    user.password = password;

    const userUpdate = await user.save()

    res.status(200).json(userUpdate)
    } catch(error) {
        res.status(400).json(error.message)
    }
}

module.exports = {putUser}