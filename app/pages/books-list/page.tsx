"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "../../components/Header"
import Nav from "../../components/Nav"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import books from "../../data/books"

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
      <Header />
      <Nav />
      <main className="min-h-screen text-gray-900 p-10 ml-40 flex flex-col ">
        {/* Botões de Navegação */}
        <div className="absolute top-5 right-10 flex gap-4">
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
        <p className="text-lg text-gray-600 mb-6">{selectedBook.description}</p>

        {/* Galeria de Livros */}
        <div className="flex gap-20 w-full mt-10">
          {books.map((book, index) => (
            <div key={book.id}>
              <motion.div
                className="cursor-pointer relative transition-transform duration-300 shadow-2xl rounded-lg"
                onClick={() => setSelectedIndex(index)}
                animate={{
                  scale: selectedBook.id === book.id ? 1.1 : 1,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Sombra para dar o efeito de flutuação */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-6 bg-black opacity-20 blur-md rounded-full"></div>

                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </motion.div>
              <p className="text-center text-gray-800 font-semibold mt-10">
                {book.title}
              </p>
            </div>
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
