import books from "@/app/data/books"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CircleArrowLeft } from "lucide-react"

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
          className="rounded-lg shadow-[0px_0px_40px_1px_rgba(0,0,0,0.75)]"
        />
      </div>

      <div className="fixed top-[15%] left-[48%]">
        <h1 className="text-4xl font-bold mb-5">{book.title}</h1>
        <h2 className="text-[#73551f] text-2xl font-semibold mb-7">
          Danilo Vicentin S
        </h2>
        <h3 className="text-[#73551f]">{book.description}</h3>
      </div>

      {/* Seção principal do livro */}
      <main className="fixed top-1/3 right-0 p-10 flex items-center justify-center w-full h-[80vh]">
        {/* Seção do Livro */}
        <div className="flex bg-[#d9a036] p-6 pt-60 pl-40 pr-40 w-[80%] h-full">
          {/* Informações do Livro (meio) */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-4">Sinopse</h1>
            <p className="text-lg text-white mb-4">{book.largeDescription}</p>
            <p className="text-md text-white mb-2">Páginas: {book.pages}</p>
          </div>
        </div>
      </main>
    </>
  )
}
