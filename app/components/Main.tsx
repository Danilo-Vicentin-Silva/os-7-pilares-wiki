import Image from "next/image"
const Main = () => {
  return (
    <div className="p-10 min-h-screen pl-40">
      {/* Mensagem de Boas-vindas */}
      <div className="mb-8">
        <h1 className="text-5xl font-semibold">Seja bem-vindo ao</h1>
        <h1 className="text-3xl font-semibold">
          incrível mundo de Os 7 Pilares
        </h1>
        <p className="text-gray-600 mt-2 max-w-lg">
          Os 7 Pilares é uma triologia de livros que apresenta uma épica saga de
          superação diante da Profecia do Mar, e uma poderosa entidade do Vazio.
        </p>
        <button className="mt-10 mb-64 bg-[#402d09] text-[#f2dea0] px-5 py-2 rounded-3xl hover:bg-[#73551f] hover:shadow-2xl transition-shadow ease-in-out duration-300">
          <a href="https://a.co/d/ccA8o18" target="_blank">
            Adquira o seu livro ou ebook! ↗
          </a>
        </button>
      </div>

      {/* Popular Now */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Toda a Saga</h2>
        <div className="flex gap-10">
          {popularBooks.map((book, index) => (
            <div key={index}>
              <Image
                src={book.image}
                alt={book.title}
                width={120}
                height={180}
                className="rounded-md shadow-[0px_4px_10px_#00000082]"
              />
              <p className="mt-2">{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const popularBooks = [
  { image: "/imagens/01-capa.webp", title: "A Jornada Além da Montanha" },
  {
    image: "/imagens/em-breve.webp", title: "",
  },
  { image: "/imagens/em-breve.webp", title: "" },
]

export default Main
