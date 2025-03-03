import books from "@/app/data/books"
import { notFound } from "next/navigation"
import Image from "next/image"

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id.toString() === params.id)

  if (!book) {
    return notFound()
  }

  return (
    <>
      {/* Imagem do Livro (esquerda) */}
      <div className="fixed top-1/4 left-[28%]">
        <Image
          src={book.image}
          alt={book.title}
          width={180}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Seção principal do livro */}
      <main className="fixed top-1/3 right-0 p-10 flex items-center justify-center w-full h-[80vh]">
        {/* Seção do Livro */}
        <div className="flex bg-[#d9a036] p-6 rounded-lg shadow-lg w-[80%] h-full">
          {/* Informações do Livro (meio) */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-4">{book.title}</h1>
            <p className="text-lg text-white mb-4">{book.description}</p>
            <p className="text-md text-white mb-2">Páginas: {book.pages}</p>
          </div>
        </div>
      </main>
    </>
  )
}
