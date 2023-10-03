const { Router } = require('express');
const { getMovies } = require('../controllers/getMovies');
const { getByName } = require('../controllers/getByName');
const { getDetail } = require('../controllers/getDetail');
const { getFilterGenre } = require('../controllers/getFilterGenre');


 const { getFilterYear, getFilterLanguage } = require('../controllers/getFilters');
const { getGenre } = require('../controllers/getGenre');
const { postMovies } = require('../controllers/postMovies');


const routerMovies = Router();


routerMovies.get("/", getMovies)
routerMovies.post("/", postMovies)
routerMovies.get('/genres', getGenre) //ruta para obtener la tabla de generos
routerMovies.get("/filter/genre", getFilterGenre) // ruta para filtrar por genero
routerMovies.get("/name", getByName)
routerMovies.get("/:id", getDetail)
routerMovies.post("/fav",)
routerMovies.delete("/fav/:id")
routerMovies.get("/filter/year/:number",  getFilterYear )
routerMovies.get("/filter/language/", getFilterLanguage )


module.exports = routerMovies