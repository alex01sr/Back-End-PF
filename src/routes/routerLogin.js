const { Router } = require('express');
const { getUser } = require('../controllers/getUser');
const { postUser } = require('../controllers/postUser');
const { putUser } = require('../controllers/putUser');


const routerLogin = Router();

routerLogin.put("/update", putUser )
routerLogin.post("/", postUser )
routerLogin.get("/", getUser )

module.exports = routerLogin




