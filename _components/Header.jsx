import Image from "next/image"
import Link from "next/link"
import LangDropdownList from "./LangDropdownList"
import Theme from "./Theme"

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image priority src="/logo.svg" width="139" height="27" alt="logo" />
        </Link>

        <ul className="flex items-center space-x-5 *:flex *:items-center">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width="24" height="24" alt="ring icon" />
            </Link>
          </li>
          <li className="flex gap-3 items-center justify-center content-center border border-gray-500 rounded-3xl p-1">
            {/* dark-light theme */}
            <Theme />
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="/shopping-cart.svg"
                width="24"
                height="24"
                alt="cart"
              />
            </a>
          </li>
          {<LangDropdownList />}
        </ul>
      </nav>
    </header>
  )
}

export default Header
