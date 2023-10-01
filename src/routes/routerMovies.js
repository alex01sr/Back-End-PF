const { Router } = require('express');
const { getMovies } = require('../controllers/getMovies');
const { getByName } = require('../controllers/getByName');
const { getDetail } = require('../controllers/getDetail');
const { getFilterGenre } = require('../controllers/getFilterGenre');

/* const { getFilterYear, getFilterLanguage } = require('../controllers/getFilters'); */


const routerMovies = Router();


routerMovies.get("/genre", getFilterGenre)
routerMovies.get("/", getMovies)
routerMovies.get("/name", getByName)
routerMovies.get("/:id", getDetail)
routerMovies.post("/fav",)
routerMovies.delete("/fav/:id")
routerMovies.get("/filter/year/:number", /* getFilterYear */)
routerMovies.get("/filter/language/", /* getFilterLanguage */)

module.exports = routerMovies