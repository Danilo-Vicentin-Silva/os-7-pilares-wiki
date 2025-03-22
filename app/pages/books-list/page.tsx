"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react"
import books from "../../data/books"
import BookCard from "../../components/BookCard"

export default function BooksList() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedBook = books[selectedIndex]

  const prevBook = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    )
  }

  const nextBook = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-1/2 h-full bg-[#d9a036] -z-10 max-lg:hidden"></div>
      <main className="min-h-screen text-gray-900 p-10 ml-40 flex flex-col max-lg:ml-0 max-lg:p-5 max-lg:text-center max-lg:items-center">
        {/* Botões de Navegação */}
        <div className="absolute top-36 right-80 flex gap-4 max-lg:hidden">
          <button
            onClick={prevBook}
            className="p-2 bg-[#ffbd43] text-white rounded-full shadow-lg hover:bg-[#d9a036] transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextBook}
            className="p-2 bg-[#ffbd43] text-white rounded-full shadow-lg hover:bg-[#d9a036] transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Título e Descrição Dinâmicos */}
        <h1 className="text-4xl font-bold mb-2 max-lg:text-2xl max-lg:pt-20">
          {selectedBook.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4 max-lg:text-base">
          {selectedBook.description}
        </p>

        {/* Botão "Saiba Mais" */}
        <div className="w-fit">
          {selectedIndex === 0 ? (
            <Link href={`/pages/books/${selectedBook.id}`}>
              <button className="bg-[#ffbd43] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#d9a036] transition">
                Saiba mais <MoveUpRight className="inline" />
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow-md cursor-not-allowed opacity-50"
            >
              Saiba mais <MoveUpRight className="inline" />
            </button>
          )}
        </div>

        {/* Galeria de Livros */}
        <div className="flex gap-20 w-full mt-10 max-lg:flex-col max-lg:gap-6 max-lg:items-center">
          {books.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              isSelected={selectedBook.id === book.id}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {/* Número de Páginas no Canto Inferior Direito */}
        <div className="fixed bottom-5 right-5 bg-[#ffbd43] text-white px-4 py-2 rounded-lg shadow-lg max-lg:hidden">
          <span className="text-lg font-semibold max-lg:text-base">
            {selectedBook.pages} páginas
          </span>
        </div>
      </main>
    </>
  )
}
