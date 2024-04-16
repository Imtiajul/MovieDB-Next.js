import "server-only";

const moviesDB = {
   movies: () => import("./movie.json").then((module) => module.default),
}

export const getMovies = async (movies) => moviesDB[movies]();

export const getSingleMovie = async (id) => {
   const movies = await getMovies("movies")

   // if we found non numerice id
   if(isNaN(id)) {
      return {
         status: 404,
         error: 'Movie not found',
      }
   }
   // filtering movies
   const movie = movies.find((m) => m.id === parseInt(id));

   // if id not found
   if(!movie) return {
      status: 404,
      error: 'Movie not found'
   }
   return  {
      status: 200,
      data: {
         ...movie
      }
   }
}
