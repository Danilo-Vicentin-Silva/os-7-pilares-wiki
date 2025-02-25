import Image from "next/image"
import { Search } from "lucide-react"

const Main = () => {
  return (
    <div className="p-10 bg-[--] min-h-screen pl-40">
      {/* Barra de Pesquisa */}
      <div className="flex items-center p-3 mb-6 max-w-lg focus-within:bg-white rounded-lg">
        <Search size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Descubra o que quiser desse universo!"
          className="w-full outline-none bg-transparent"
        />
      </div>

      {/* Mensagem de Boas-vindas */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold">Happy reading, Harvey</h1>
        <p className="text-gray-600 mt-2 max-w-lg">
          Wow! You've delved deep into the wizarding world's secrets. Have
          Harry’s parents died yet? Oops, looks like you’re not there yet. Get
          reading now!
        </p>
        <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
          Start reading ↗
        </button>
      </div>

      {/* Popular Now */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Now</h2>
        <div className="grid grid-cols-4 gap-4">
          {popularBooks.map((book, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-md">
              <Image
                src={book.image}
                alt={book.title}
                width={120}
                height={180}
                className="rounded-md"
              />
              <p className="text-center mt-2 text-sm">{book.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Series Collection */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">New Series Collection</h2>
        <div className="bg-white p-3 rounded-lg shadow-md flex items-center">
          <Image
            src="/images/ice-horse.jpg"
            alt="A Legend of Ice and Fire"
            width={80}
            height={80}
            className="rounded-md"
          />
          <div className="ml-4">
            <p className="font-semibold">
              A Legend of Ice and Fire: The Ice Horse
            </p>
            <p className="text-sm text-gray-600">8 chapters each vol</p>
          </div>
          <p className="ml-auto text-gray-700">2 vol</p>
        </div>
      </div>
    </div>
  )
}

const popularBooks = [
  { image: "/images/got1.jpg", title: "The World of Ice and Fire" },
  {
    image: "/images/fantastic-beasts.jpg",
    title: "Fantastic Beasts Volume II",
  },
  { image: "/images/got2.jpg", title: "Game of Thrones Volume III" },
  { image: "/images/wise-mans-fear.jpg", title: "The Wise Man’s Fear" },
]

export default Main
