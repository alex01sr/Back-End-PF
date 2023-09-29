//Endpoint: http://localhost:3001/Nonflix/movies/name?name="aca el input a buscar"

const { Movie } = require("../db");


const getByName = async (req, res) => {
    try {
        const { name } = req.query;
        
        if(!name) return res.json("Name is required");

        let nametoLower = name.toLowerCase();

        const allMovies = await Movie.findAll();
        
        const filteredMovies = allMovies.filter((movie) => {

            if ((movie.dataValues.title).toLowerCase().includes(nametoLower)) {
                return movie;
            }

        });

        if (filteredMovies.length) {
            res.status(200).json(filteredMovies)
        } else {
            res.status(200).json("No movies found")
        };

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { getByName };