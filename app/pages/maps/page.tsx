"use client"

import { useState } from "react"
import { mapas } from "@/app/data/mapas"

const Maps = () => {
  const [mapaAtual, setMapaAtual] = useState<"genewins" | "polegene">(
    "genewins"
  )

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Área do mapa - Responsivo */}
      <div
        className="w-full lg:w-2/3 h-full bg-no-repeat bg-center bg-contain transition-all duration-500 lg:ml-24"
        style={{
          backgroundImage: `url(${mapas[mapaAtual].imagem})`,
        }}
      ></div>

      {/* Botão abaixo do mapa - Somente no mobile */}
      <div className="lg:hidden flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md font-semibold hover:bg-blue-600 transition"
          onClick={() =>
            setMapaAtual(mapaAtual === "genewins" ? "polegene" : "genewins")
          }
        >
          Trocar Mapa
        </button>
      </div>

      {/* Área de informações - Somente no desktop */}
      <div className="hidden lg:flex lg:w-1/3 h-full flex-col justify-center items-start px-10 bg-[#d9a036] shadow-lg">
        <h2 className="text-3xl font-bold mb-4">{mapas[mapaAtual].titulo}</h2>
        <p className="text-lg text-gray-700">{mapas[mapaAtual].descricao}</p>

        {/* Lista de reinos */}
        <h3 className="text-2xl font-semibold mt-4">Reinos:</h3>
        <ul className="list-disc list-inside text-gray-800">
          {mapas[mapaAtual].reinos.map((reino, index) => (
            <li className="mb-4" key={index}>{reino}</li>
          ))}
        </ul>

        {/* Botão para trocar os mapas (Desktop) */}
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
