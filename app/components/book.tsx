"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FloatingBook() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="fixed top-[13%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-[9999]"
    >
      <Image
        src="/imagens/01-capa.webp" // Substitua pelo caminho correto da imagem
        alt="Capa do livro Os 7 Pilares"
        width={240} // Ajuste conforme necessário
        height={360} // Ajuste conforme necessário
        className="rounded-sm shadow-[0px_4px_10px_#00000082]"
      />
    </motion.div>
  )
}
