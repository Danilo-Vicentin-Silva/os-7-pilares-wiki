"use client"

import { useState } from "react"

const Maps = () => {
  // Estado para alternar entre os mapas
  const [mapaAtual, setMapaAtual] = useState<"genewins" | "polegene">(
    "genewins"
  )

  // Dados dos mapas
  const mapas = {
    genewins: {
      imagem: "/imagens/mapa-genewins.webp",
      titulo: "Mapa GeneWins",
      descricao:
        "Este mapa representa a região de GeneWins, destacando suas principais áreas e infraestrutura.",
    },
    polegene: {
      imagem: "/imagens/mapa-polegene.webp",
      titulo: "Mapa Polegene",
      descricao:
        "O mapa de Polegene exibe suas zonas industriais e áreas de desenvolvimento urbano.",
    },
  }

  return (
    <div className="flex h-screen w-full">
      {/* Área do mapa - Alinhado à esquerda com margem para o NAV */}
      <div
        className="w-2/3 h-full bg-no-repeat bg-left bg-contain transition-all duration-500"
        style={{
          backgroundImage: `url(${mapas[mapaAtual].imagem})`,
          marginLeft: "6rem", // Ajuste para compensar o menu lateral
        }}
      ></div>

      {/* Área de informações - Alinhada à direita */}
      <div className="w-1/3 h-full flex flex-col justify-center items-start px-10 bg-gray-100 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">{mapas[mapaAtual].titulo}</h2>
        <p className="text-lg text-gray-700">{mapas[mapaAtual].descricao}</p>

        {/* Botão para trocar os mapas */}
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow-md font-semibold hover:bg-blue-600 transition"
          onClick={() =>
            setMapaAtual(mapaAtual === "genewins" ? "polegene" : "genewins")
          }
        >
          Trocar Mapa
        </button>
      </div>
    </div>
  )
}

export default Maps
