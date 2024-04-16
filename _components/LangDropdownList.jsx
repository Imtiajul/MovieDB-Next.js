"use client"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const LangDropdownList = () => {
  const path = usePathname()

  const pathLang = path.split("/")[1]
  const [lang, setLang] = useState(pathLang)
  const router = useRouter()

  // console.log("pathname: " + window.location.pathname)

  function handleClick() {
    
    if (lang === "en") {
      setLang("bn")
      const newPath = path.replace(/^\/[a-z]{2}/, '/bn');
      window.location.replace(newPath);
      // router.push(newPath)

      // window.location.reload();
      // window.location.href = window.location.href;
      
    } else if (lang === "bn") {
      setLang("en")
      const newPath = path.replace(/^\/[a-z]{2}/, '/en');
      window.location.replace(newPath);
      // router.push(newPath)
      // window.location.reload();
      // window.location.href = window.location.href;
    }
    
    // console.log(lang);
  }

  return (
    <li className="">
      {/* lang swicher */}
      <button onClick={handleClick} className="inline-block">
        {/* <Image
          // src={`/${lang}.png`}?
          src={lang === "en" ? "/bd.png" : "/en.png"}
          width={32}
          height={32}
          title={`Change to ${lang === "en" ? "Bangla " : "English"} language`}
          alt="lang icon"
        /> */}
        {lang === "en" ? "বাংলা" : "English"}
      </button>
      {/* <!-- dropdown --> */}
      {/* {lang && (
        <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
          <li
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
            <Link className="w-full flex gap-2" href="/bn">
              <Image
                className="max-w-8"
                src="/bd.png"
                alt="bangla"
                width={32}
                height={32}
              />
              Bangla
            </Link>
          </li>
          <li
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
            <Link className="flex items-center gap-2" href="/en">
              <Image
                className="max-w-8"
                src="/usa.png"
                alt="usa icon"
                width={32}
                height={32}
              />
              English
            </Link>
          </li>
        </ul> */}
    </li>
  )
}

export default LangDropdownList
