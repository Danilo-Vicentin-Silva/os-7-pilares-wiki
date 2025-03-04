"use client"

import { Search } from "lucide-react"

const Header = () => {
  return (
    <div className="flex items-start p-3 mb-5 mt-5 pl-40 text-left">
      <Search size={20} className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Descubra o que quiser desse universo!"
        className="w-full outline-none bg-transparent"
      />
    </div>
  )
}

export default Header
3