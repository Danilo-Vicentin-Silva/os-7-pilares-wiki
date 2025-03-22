import Image from "next/image"
import books from "../data/books"

const Main = () => {
  return (
    <div className="p-10 min-h-screen pl-40 pr-10 flex flex-col gap-12 max-lg:p-10 max-lg:pt-16">
      {/* Mensagem de Boas-vindas */}
      <div className="mt-10 text-left max-[1750px]:text-center">
        <h1 className="text-5xl font-semibold max-lg:text-4xl">
          Seja bem-vindo ao
        </h1>
        <h1 className="text-3xl font-semibold max-lg:text-2xl">
          incrível mundo de Os 7 Pilares
        </h1>
        <p className="text-gray-600 mt-2 max-w-lg max-[1750px]:mx-auto">
          Os 7 Pilares é uma trilogia de livros que apresenta uma épica saga de
          superação diante da Profecia do Mar, e uma poderosa entidade do Vazio.
        </p>
        <div className="mt-10 max-[1750px]:text-center">
          <a
            href="https://a.co/d/ccA8o18"
            target="_blank"
            className="bg-[#402d09] text-[#f2dea0] px-5 py-2 rounded-3xl 
            hover:bg-[#73551f] hover:shadow-2xl transition-shadow ease-in-out duration-300"
          >
            Adquira o seu livro ou ebook! ↗
          </a>
        </div>
      </div>

      {/* Toda a Saga */}
      <div className="mt-36 max-lg:mt-3">
        <h2 className="text-2xl font-semibold mb-4 text-left max-[1750px]:text-center">
          Toda a Saga
        </h2>
        <div className="flex flex-wrap gap-20 max-[1750px]:flex-row max-[1750px]:justify-center">
          {books.map((book, index) => (
            <div key={index} className="text-left max-[1750px]:text-center">
              <Image
                src={book.image}
                alt={book.title}
                width={120}
                height={180}
                className="rounded-sm shadow-sm hover:shadow-2xl transition-shadow ease-in-out duration-300"
              />
              {/* Removido o título do livro em dispositivos menores */}
              <p className="mt-2 text-center w-28 max-[1750px]:hidden">{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main
