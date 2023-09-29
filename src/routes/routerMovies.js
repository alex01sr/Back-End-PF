const { Router } = require('express');
const { getMovies } = require('../controllers/getMovies');
const { getByName } = require('../controllers/getByName');
const { getDetail } = require('../controllers/getDetail');


const routerMovies = Router();


routerMovies.get("/", getMovies)
routerMovies.get("/name", getByName)
routerMovies.get("/:id", getDetail)
routerMovies.get("/genders")
routerMovies.post("/fav")
routerMovies.delete("/fav/:id")
routerMovies.get("/filters")

module.exports = routerMovies