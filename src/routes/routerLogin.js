const { Router } = require('express');
const { getUser } = require('../controllers/getUser');
const { postUser } = require('../controllers/postUser');
const { putUser } = require('../controllers/putUser');
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        if(!req.headers.authorization) return res.status(500).json({error: "without authorization"})
        const token = req.headers.authorization.split(" ")[1]
        if(!token) return res.status(404).json({error: error.message})
        const tokenVerified = await jwt.verify(token, JWT_SECRET)
        req.user = tokenVerified.id
        next()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const routerLogin = Router();

routerLogin.put("/update", putUser )
routerLogin.post("/", postUser )
routerLogin.get("/", getUser )



module.exports = routerLogin




