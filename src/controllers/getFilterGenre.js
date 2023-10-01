//http://localhost:3001/Nonflix/movies/genre?genre= Aqui el genero a buscar

const { Genre, Movie } = require("../db");

const getFilterGenre = async(req, res) => {
    try {
        const {genre} = req.query;
        console.log(genre)

        const genreMovies = await Genre.findByPk(genre, {
            include: [
                {
                  model: Movie,
                  through: { attributes: []},
                  attributes: ["id", "title", "duration", "description", "image", "year", "language", "torrent" ]
                }
            ]
        })

        res.status(200).json(genreMovies)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = {getFilterGenre}