//Endpoint: http://localhost:3001/Nonflix/movies

const axios = require('axios');
const { Movie, Genre } = require("../db");

const getMovies = async (req, res) => {
    try {
        let dbMovies = await Movie.findAll();

        if (dbMovies.length === 0) {
            const pages = [1, 2, 3, 4];

            for (let i = 0; i < pages.length; i++) {
                const { data } = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=50&page=${pages[i]}`);
                const theMovies = data?.data?.movies;//todas las peliculas

                for (let i = 0; i < theMovies.length; i++) { //recorrido de las peliculas para cargar la tabla Movie;
                

                    const movie = await Movie.create({

                        // id: theMovies[i]?.imdb_code,
                        title: theMovies[i]?.title,
                        duration: theMovies[i]?.runtime,
                        trailer: theMovies[i]?.yt_trailer_code ? `https://www.youtube.com/watch?v=${theMovies[i]?.yt_trailer_code}` : "Has no trailer",
                        description: theMovies[i]?.description_full != "" ? theMovies[i]?.description_full : "Without description",
                        image: theMovies[i]?.medium_cover_image,
                        year: theMovies[i]?.year,
                        language: theMovies[i]?.language,
                        torrent: theMovies[i]?.torrents,
                    });

                    if(!theMovies[i].genres) {
                        continue
                    }
                    
                    theMovies[i]?.genres.map(async (genre) => {
                        let newGenre = await Genre.findOrCreate({ where: { id: genre, name: genre } });

                        await movie.addGenre(newGenre[0].dataValues.id)

                    })

                }
            }
        }

        const allMovies = await Movie.findAll({
            include: [
                {
                    model: Genre,
                    through: { attributes: [] },
                    attributes: ["id", "name"]
                }
            ]
        })


        allMovies.length
            ? res.status(200).json(allMovies)
            : res.status(200).json(await Movie.findAll())
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { getMovies };