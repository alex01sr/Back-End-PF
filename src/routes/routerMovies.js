const { Router } = require('express');

const routerMovies = Router();


routerMovies.get("/:id")
routerMovies.get("/")
routerMovies.get("/genders")
routerMovies.post("/fav")
routerMovies.delete("/fav/:id")
routerMovies.get("/filters")