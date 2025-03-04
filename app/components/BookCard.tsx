"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface BookCardProps {
  book: {
    id: number
    title: string
    image: string
  }
  isSelected: boolean
  onClick: () => void
}

export default function BookCard({ book, isSelected, onClick }: BookCardProps) {
  return (
    <div>
      <motion.div
        className="cursor-pointer relative transition-transform duration-300 shadow-2xl rounded-lg"
        onClick={onClick}
        animate={{
          scale: isSelected ? 1.1 : 1,
          transition: { duration: 0.3 },
        }}
      >
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-6 bg-black opacity-20 blur-md rounded-full"></div>

        <Image
          src={book.image}
          alt={book.title}
          width={300}
          height={400}
          className="rounded-sm"
        />
      </motion.div>
      <p className="text-center text-gray-800 font-semibold mt-10">
        {book.title}
      </p>
    </div>
  )
}
