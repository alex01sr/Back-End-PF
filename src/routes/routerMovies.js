const { Router } = require('express');
const { getMovies } = require('../controllers/getMovies');
const { getByName } = require('../controllers/getByName');
const { getDetail } = require('../controllers/getDetail');
const { getFilterGenre } = require('../controllers/getFilterGenre');


 const { getFilterYear, getFilterLanguage } = require('../controllers/getFilters');
const { getGenre } = require('../controllers/getGenre');
const { postMovies } = require('../controllers/postMovies');
const { getFavs } = require('../controllers/getFavs');
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');


const routerMovies = Router();


routerMovies.get("/", getMovies)
routerMovies.post("/", postMovies)
routerMovies.get('/genres', getGenre) //ruta para obtener la tabla de generos
routerMovies.get("/filter/genre", getFilterGenre) // ruta para filtrar por genero
routerMovies.get("/name", getByName)
routerMovies.get("/fav", getFavs)
routerMovies.post("/fav", postFav)
routerMovies.delete("/fav", deleteFav)
routerMovies.get("/:id", getDetail)
routerMovies.get("/filter/year/:number",  getFilterYear )
routerMovies.get("/filter/language/", getFilterLanguage )


module.exports = routerMovies