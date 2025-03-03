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
      <main className="min-h-screen p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
        <Image src={book.image} alt={book.title} width={400} height={500} />
        <p className="text-lg text-gray-600 mt-4">{book.description}</p>
        <p className="text-md text-gray-700 mt-2">Páginas: {book.pages}</p>
      </main>
    </>
  )
}
