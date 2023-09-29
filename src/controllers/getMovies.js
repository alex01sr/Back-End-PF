//Endpoint: http://localhost:3001/Nonflix/movies

const axios = require('axios');
const { Movie } = require("../db");

const getMovies = async (req, res) => {
    try {
        const pages = [1,2,3,4];

        for (let i = 0; i < pages.length; i++) {
            const { data } = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=50&page=${pages[i]}`);
            const theMovies = data?.data?.movies;

            for (let i = 0; i < theMovies.length; i++) {
                    await Movie.findOrCreate({ where:{

                        // id: theMovies[i]?.imdb_code,
                        title: theMovies[i]?.title,
                        duration: theMovies[i]?.runtime,
                        description: theMovies[i]?.description_full,
                        image: theMovies[i]?.medium_cover_image,
                        year: theMovies[i]?.year,
                        language: theMovies[i]?.language,
                        torrent: theMovies[i]?.torrents,
                    }});

            }
        }


        const allMovies = await Movie.findAll();

        allMovies.length
            ? res.status(200).json(allMovies)
            : res.status(200).json(await Movie.findAll())
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { getMovies };