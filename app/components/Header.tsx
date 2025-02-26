import { Search } from "lucide-react"

const Header = () => {
  return (
    <div className="flex items-center p-3 mt-6 max-w-lg rounded-lg pl-40">
      <>
        <Search size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Descubra o que quiser desse universo!"
          className="w-full outline-none bg-transparent"
        />
      </>
    </div>
  )
}

export default Header
