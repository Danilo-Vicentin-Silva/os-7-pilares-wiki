"use client"
import { motion } from "framer-motion"

export default function Aside() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 right-0 w-[46%] h-full bg-[#d9a036] shadow-xl p-28 flex flex-col"
    >
      <h2 className="text-2xl font-bold ml-60">Título do Livro</h2>
      <p className="text-gray-600 mt-4">
        Aqui você pode adicionar a sinopse, descrição ou qualquer outro conteúdo
        sobre o livro.
      </p>
      <p className="text-gray-500 mt-2">
        Você pode personalizar este texto da maneira que quiser!
      </p>
    </motion.div>
  )
}
