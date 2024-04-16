import { getDictionaries } from "@/app/[lang]/dictionaries"
import Image from "next/image"
import Link from "next/link"

const Sidbar = async ({ lang }) => {
  const { trending, new_release, favourites, coming_soon, watch_later } =
    await getDictionaries(lang)

  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src="/icons/trending.svg" width="24" height="24" alt="" />
            <span>{trending}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/newRelease.svg" width="24" height="24" alt="" />
            <span>{new_release}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/commingSoon.svg" width="24" height="24" alt="" />
            <span>{coming_soon}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
            <span>{favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/watchLater.svg" width="24" height="24" alt="" />
            <span>{watch_later}</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidbar
