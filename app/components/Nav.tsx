import Image from "next/image"
import { Home, Info, Mail } from "lucide-react"

const Nav = () => {
  return (
    <nav className="h-screen w-25 border-r border-[#d9a036] text-white fixed top-0 left-0 flex flex-col items-center p-5 ">
      <Image src="/imagens/logo.webp" alt="logo" width={50} height={50} />
      <ul className="mt-32 space-y-10 w-full">
        <li className="flex items-center justify-center gap-3 hover:bg-[#d9a036] p-2 rounded cursor-pointer">
          <Home className="text-[#402d09]" size={30} />
        </li>
        <li className="flex items-center justify-center gap-3 hover:bg-[#d9a036] p-2 rounded cursor-pointer">
          <Info className="text-[#402d09]" size={30} />
        </li>
        <li className="flex items-center justify-center gap-3 hover:bg-[#d9a036] p-2 rounded cursor-pointer">
          <Mail className="text-[#402d09]" size={30} />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
