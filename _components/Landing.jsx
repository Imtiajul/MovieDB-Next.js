import { getMovies } from "@/db/util"
import MovieCard from "./MovieCard"

const Landing = async ({ lang }) => {
  const movies = await getMovies("movies")
  // console.log(movies);

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} lang={lang} />
      ))}
    </div>
  )
}

export default Landing
