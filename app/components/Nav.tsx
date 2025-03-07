"use client"

import Image from "next/image"
import {
  Home,
  LibraryBig,
  GalleryHorizontalEnd,
  User,
  BriefcaseBusiness,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {
  const pathname = usePathname()

  // Função para verificar se o botão é da página atual
  const isActive = (path: string) =>
    pathname === path ? "bg-[#d9a036]" : "hover:bg-[#d9a036]"

  return (
    <nav
      className="fixed top-0 left-0 h-screen w-24 border-r border-[#ffbd43] text-white flex flex-col items-center p-5 
      xl:w-24 xl:h-screen xl:flex-col 
      max-xl:w-full max-xl:h-20 max-xl:flex-row max-xl:justify-around max-xl:border-b max-xl:border-r-0 max-xl:p-3 bg-[#f2dea0] z-50"
    >
      {/* Logo */}
      <div className="mb-10 max-xl:mb-0">
        <Image src="/imagens/logo.webp" alt="logo" width={50} height={50} />
      </div>

      {/* Menu de Navegação */}
      <ul className="flex flex-col space-y-10 xl:mt-32 max-xl:flex-row max-xl:space-y-0 max-xl:gap-6">
        <li>
          <Link
            href="/"
            className={`flex items-center justify-center p-2 rounded cursor-pointer ${isActive(
              "/"
            )}`}
          >
            <Home className="text-[#402d09]" size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="/pages/books-list"
            className={`flex items-center justify-center p-2 rounded cursor-pointer ${isActive(
              "/pages/books-list"
            )}`}
          >
            <LibraryBig className="text-[#402d09]" size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://danilo-vicentin-silva.github.io/os-7-pilares/"
            rel="noopener noreferrer"
            target="_blank"
            className={`flex items-center justify-center p-2 rounded cursor-pointer ${isActive(
              "/info"
            )}`}
          >
            <GalleryHorizontalEnd className="text-[#402d09]" size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/danilo_vicentin_silva/"
            rel="noopener noreferrer"
            target="_blank"
            className={`flex items-center justify-center p-2 rounded cursor-pointer ${isActive(
              "/contact"
            )}`}
          >
            <User className="text-[#402d09]" size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://portfolio-danilo-vicentin.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className={`flex items-center justify-center p-2 rounded cursor-pointer ${isActive(
              "/contact"
            )}`}
          >
            <BriefcaseBusiness className="text-[#402d09]" size={30} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
