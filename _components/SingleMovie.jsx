import { getDictionaries } from "@/app/[lang]/dictionaries"
import {notFound} from "next/navigation"
import { getSingleMovie } from "@/db/util"
import Image from "next/image"

const SingleMovie = async ({ lang, id, modal }) => {
  const dictionray = await getDictionaries(lang);

  const getMovie = await getSingleMovie(id);
  console.log(getMovie);

  if(getMovie.status !== 200) {
    notFound();
  }
  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = getMovie?.data;

  return (
    <section>
      <div>
        <Image
          className={`w-full object-cover max-h-[500px] ${
            modal ? "lg:max-h-[440px] mt-2" : "lg:max-h-[500px]"
          } `}
          width={1222}
          height={500}
          src={backdrop_path}
          alt={title}
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image width={177} height={266} src={poster_path} alt={title} />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold dark:text-slate-100 text-2xl">{title}</h2>
          <p className="my-2 dark:text-slate-200 italic font-medium">{overview}</p>
          <ul className="dark:text-slate-200 space-y-2 my-8">
            <li>{dictionray.release_date} : {release_date}</li>
            <li>{dictionray.average_vote} :{vote_average}</li>
            <li>{dictionray.vote_count} : {vote_count}</li>
            <li>{dictionray.popularity} : {popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
