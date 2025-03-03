"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "../../components/Header"
import Nav from "../../components/Nav"
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
      <div className="fixed top-0 right-0 w-1/2 h-full bg-[#d9a036] -z-10"></div>
      <main className="min-h-screen text-gray-900 p-10 ml-40 flex flex-col">
        {/* Botões de Navegação */}
        <div className="absolute top-52 right-96 flex gap-4">
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
        <h1 className="text-4xl font-bold mb-2">{selectedBook.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{selectedBook.description}</p>

        {/* Botão "Saiba Mais" */}
        <div className="w-fit">
          <Link href={`/pages/books/${selectedBook.id}`}>
            <button className="bg-[#ffbd43] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#d9a036] transition">
              Saiba mais <MoveUpRight className="inline" />
            </button>
          </Link>
        </div>

        {/* Galeria de Livros */}
        <div className="flex gap-20 w-full mt-10">
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
        <div className="fixed bottom-5 right-5 bg-[#ffbd43] text-white px-4 py-2 rounded-lg shadow-lg">
          <span className="text-lg font-semibold">
            {selectedBook.pages} páginas
          </span>
        </div>
      </main>
    </>
  )
}
