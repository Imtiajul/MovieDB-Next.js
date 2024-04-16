import { getDictionaries } from "@/app/[lang]/dictionaries";
import Image from "next/image"
import Link from "next/link"

const MovieCard = async ({lang, movie }) => {
  const dictionry = await getDictionaries(lang);
  
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Link href={`/movies/${movie.id}`}>
        <Image
          className="w-full object-cover"
          src={movie.poster_path}
          alt={movie.original_language}
          width="355"
          height="428"
        />
      </Link>
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.original_title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          {Array(5)
            .fill("five-star")
            .map((a, i) => (
              <Image
                key={i + a}
                src="/star.svg"
                width="14"
                height="13"
                alt="star"
              />
            ))}
        </div>
        <Link
          href={`/movies/${movie.id}`}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <Image src="/tag.svg" alt="tag" width={19} height={19} />
          <span>{dictionry.details}</span>
        </Link>
      </figcaption>
    </figure>
  )
}

export default MovieCard
