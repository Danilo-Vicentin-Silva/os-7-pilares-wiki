import books from "@/app/data/books"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CircleArrowLeft, MoveUpRight, Users } from "lucide-react"
import ShareButton from "@/app/components/ShareButton"
import FavoriteButton from "@/app/components/favoriteButton"

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id.toString() === params.id)

  if (!book) {
    return notFound()
  }

  return (
    <>
      <button className="p-2 bg-[#ffbd43] text-white rounded-full shadow-lg hover:bg-[#d9a036] transition fixed top-[20%] left-[18%]">
        <Link href={"/pages/books-list"}>
          <CircleArrowLeft size={50} />
        </Link>
      </button>
      {/* Imagem do Livro (esquerda) */}
      <div className="fixed top-[10%] left-[28%] z-50">
        <Image
          src={book.image}
          alt={book.title}
          width={300}
          height={400}
          className="rounded-sm shadow-[0px_0px_40px_1px_rgba(0,0,0,0.75)]"
        />
      </div>

      <div className="flex flex-col fixed top-[45%] left-[48%] z-50 gap-10 w-full">
        <div className="flex flex-row items-center justify-between w-[600px]">
          {/* Botão de adquirir o livro (alinhado à esquerda) */}
          <Link href={`https://a.co/d/btg3mLB`} target="_blank" rel="nofollow">
            <button className="bg-[#402d09] text-white px-6 py-2 rounded-3xl shadow-md hover:bg-[#402d0984] transition">
              Adquira o seu <MoveUpRight className="inline" />
            </button>
          </Link>

          {/* Grupo de botões (alinhados à direita) */}
          <div className="flex flex-row items-center gap-4">
            <Link
              href={`https://a.co/d/btg3mLB`}
              target="_blank"
              rel="nofollow"
            >
              <button className="bg-[#402d09] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md hover:bg-[#402d0984] transition">
                <Users className="w-6 h-6" />
              </button>
            </Link>
            <ShareButton />
            <FavoriteButton />
          </div>
        </div>

        <hr className="border-spacing-1 w-[600px] border-[#402d0934] mx-4" />
      </div>

      <div className="fixed top-[15%] left-[48%]">
        <h1 className="text-4xl font-bold mb-5">{book.title}</h1>
        <h2 className="text-[#73551f] text-2xl font-semibold mb-7">
          Danilo Vicentin S
        </h2>
        <h3 className="text-[#73551f]">{book.description}</h3>
      </div>

      {/* Seção principal do livro */}
      <main className="text-white fixed top-1/3 right-0 p-10 flex items-center justify-center w-full h-[80vh]">
        {/* Seção do Livro */}
        <div className="flex bg-[#d9a036] p-6 pt-60 pl-40 pr-40 w-[80%] h-full gap-10">
          {/* Informações do Livro (meio) */}
          <div className="flex flex-1 flex-col text-justify">
            <h1 className="text-4xl font-bold text-[#402d09] mb-4">Sinopse</h1>
            <p className="text-lg text-white mb-4">{book.largeDescription}</p>
          </div>

          {/* Informações alinhadas à direita */}
          <div className="flex-1 flex flex-col items-end text-right">
            <h1 className="text-4xl font-bold text-[#402d09] mb-4">Editora</h1>
            <p className="mb-5">Publicação Independente na Amazon KDP</p>
            <h1 className="text-4xl font-bold text-[#402d09] mb-4">Idiomas</h1>
            <p className="mb-5">Português (Brasil)</p>
          </div>
        </div>
      </main>
    </>
  )
}
