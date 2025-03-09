"use client"

import { Instagram, Twitter, Linkedin, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SobreAutor() {
  return (
    <div className="min-h-screen bg-[#f2dea0] text-[#402d09] max-lg:mt-14 max-lg:mb-14">
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Sobre o Autor</h1>
        <p className="text-xl font-light text-gray-700 mb-4">
          Conheça mais sobre o autor por trás dessas incríveis histórias
        </p>
      </header>

      <div className=" flex justify-center items-center flex-col lg:flex-row p-10 gap-10 bg-[#d9a036] shadow-2xl rounded-xl mx-auto max-w-7xl">
        {/* Foto do autor */}
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl">
          <Image
            src="/imagens/autor.webp" // Altere para o caminho correto da foto do autor
            alt="Foto do Autor"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Descrição do autor */}
        <div className="flex flex-col items-start max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Danilo Vicentin S</h2>
          <section className="text-lg mb-6 text-gray-600 text-justify">
            <p>
              Danilo Vicentin S., eterno estudante de programação, desenhista,
              piloto de kart nas horas vagas e autor da obra <q>Os 7 Pilares</q>
              , uma futura trilogia que vem escrevendo desde 2019. Uma história
              que imagina desde a infância e que, após anos, finalmente lhe
              permitiu realizar um de seus sonhos: escrever um livro.
            </p>
            <p>
              Ele adora escrever histórias épicas e marcantes, que vão além das
              páginas, transcendem o papel e fazem os leitores refletirem sobre
              todos os segredos escondidos nas entrelinhas dos livros. Com o
              objetivo de facilitar ainda mais a vida dos leitores, ele decidiu
              criar um site para compartilhar todas as informações sobre{" "}
              <q>Os 7 Pilares</q>: desde seus personagens até os mapas e
              mistérios que envolvem o continente de Genewins.
            </p>
          </section>

          <div className="flex gap-6">
            {/* Redes sociais com ícones da Lucide */}
            <Link
              href="https://www.instagram.com/danilo_vicentin_silva/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                size={30}
                color="#402d09"
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <Link
              href="https://x.com/DaniloVicentinS"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter
                size={30}
                color="#402d09"
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={30}
                color="#402d09"
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <Link
              href="https://github.com/Danilo-Vicentin-Silva"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                size={30}
                color="#402d09"
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
