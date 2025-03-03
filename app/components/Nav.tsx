"use client" // Este é um Client Component

import Image from "next/image"
import { Home, Info, Mail, LibraryBig } from "lucide-react" // Ícone de lista
import Link from "next/link"
import { usePathname } from "next/navigation" // Importando usePathname

const Nav = () => {
  const pathname = usePathname() // Hook para obter a rota atual

  // Função para verificar se o botão é da página atual
  const isActive = (path: string) =>
    pathname === path ? "bg-[#d9a036]" : "hover:bg-[#d9a036]"

  return (
    <nav className="h-screen w-25 border-r border-[#ffbd43] text-white fixed top-0 left-0 flex flex-col items-center p-5">
      <Image src="/imagens/logo.webp" alt="logo" width={50} height={50} />
      <ul className="mt-32 space-y-10 w-full">
        <li>
          <Link
            href="/"
            className={`flex items-center justify-center gap-3 p-2 rounded cursor-pointer ${isActive(
              "/"
            )}`}
          >
            <Home className="text-[#402d09]" size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="/pages/books-list"
            className={`flex items-center justify-center gap-3 p-2 rounded cursor-pointer ${isActive(
              "/books-list"
            )}`}
          >
            <LibraryBig className="text-[#402d09]" size={30} />{" "}
            {/* Ícone de lista */}
          </Link>
        </li>
        <li>
          <Link
            href="/info"
            className={`flex items-center justify-center gap-3 p-2 rounded cursor-pointer ${isActive(
              "/info"
            )}`}
          >
            <Info className="text-[#402d09]" size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-3 p-2 rounded cursor-pointer ${isActive(
              "/contact"
            )}`}
          >
            <Mail className="text-[#402d09]" size={30} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
