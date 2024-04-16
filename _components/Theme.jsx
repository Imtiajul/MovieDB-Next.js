"use client"
import { useTheme } from "next-themes"
const Theme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <button
        onClick={() => setTheme("light")}
        className={`cursor-pointer ${
          theme === "light" ? "bg-gray-600 fill-gray-300" : ""
        } hover:bg-gray-600 rounded-3xl p-1 text-white`}
      >
        {/* <Image src="/light.svg" alt="light mode icon" width={24} height={24} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
        >
          <path
            className="fill-gray-400 dark:fill-white hover:fill-white"
            d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`cursor-pointer ${
          theme === "dark" ? "bg-gray-600 fill-gray-300"  : ""
        } hover:bg-gray-600 rounded-3xl p-1 `}
      >
        {/* <Image src="/dark.svg" alt="dark mode icon" width={24} height={24} className="fill-dark"/> */}
        <svg
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="dark-mode"
        >
          <path
            fill="#fff"
            className="fill-dark dark:fill-white"
            d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"
          ></path>
        </svg>
      </button>
    </>
  )
}

export default Theme
