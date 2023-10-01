const { Router } = require('express');
const { getUser } = require('../controllers/getUser');
const { postUser } = require('../controllers/postUser');


const routerLogin = Router();

routerLogin.post("/", postUser )
routerLogin.get("/", getUser )

module.exports = routerLogin




