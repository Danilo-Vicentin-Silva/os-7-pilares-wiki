"use client"

import { Instagram, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function SobreAutor() {
  return (
    <div className="min-h-screen bg-[#f2dea0] text-[#402d09]">
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Sobre o Autor</h1>
        <p className="text-xl font-light text-gray-700 mb-4">
          Conheça mais sobre o autor por trás da jornada épica!
        </p>
      </header>

      <div className="flex justify-center items-center flex-col lg:flex-row p-10 gap-10">
        {/* Foto do autor */}
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl">
          <Image
            src="/author.jpg" // Altere para o caminho correto da foto do autor
            alt="Foto do Autor"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        {/* Descrição do autor */}
        <div className="flex flex-col items-start max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Danilo Vicentin</h2>
          <p className="text-lg mb-6 text-gray-600">
            Danilo Vicentin é um apaixonado por histórias fantásticas e por
            explorar mundos incríveis através de suas palavras. Como autor da
            trilogia "Os 7 Pilares", ele leva os leitores a uma jornada épica
            por reinos desconhecidos, desafiando os limites da imaginação. Além
            de ser um escritor talentoso, Danilo é entusiasta da tecnologia e da
            inteligência artificial, que também são fontes de inspiração em suas
            narrativas.
          </p>

          <div className="flex gap-6">
            {/* Redes sociais com ícones da Lucide */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={30} color="#402d09" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={30} color="#402d09" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={30} color="#402d09" />
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-[#402d09] text-white text-center py-6">
        <p>&copy; 2025 Os 7 Pilares. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
