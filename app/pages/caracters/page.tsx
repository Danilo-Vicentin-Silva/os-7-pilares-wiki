"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Character, characters } from "@/app/data/caracters"

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  )

  useEffect(() => {
    if (selectedCharacter) {
      document.body.style.overflow = "hidden" // Impede scroll no fundo quando o modal está aberto
    } else {
      document.body.style.overflow = "auto" // Libera scroll ao fechar o modal
    }
  }, [selectedCharacter])

  return (
    <main className="h-auto min-h-screen p-10 bg-[#f2dea0] text-[#402d09] flex flex-col items-center overflow-auto">
      <h1 className="text-5xl font-extrabold text-center mb-12 uppercase tracking-widest">
        Personagens
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {characters.map((character) => (
          <div
            key={character.id}
            className="relative bg-[#d9a036] rounded-xl shadow-lg p-6 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#d97925]"
            onClick={() => setSelectedCharacter(character)}
          >
            <div className="w-32 h-32 bg-[#73551f] mx-auto rounded-full flex items-center justify-center text-white text-4xl font-extrabold">
              {character.name[0]}
            </div>
            <h2 className="text-3xl font-semibold mt-5">{character.name}</h2>
            <p className="text-[#402d09] mt-3 text-lg font-light">
              {character.shortDescription}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-5 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#f2dea0] p-12 rounded-2xl max-w-2xl w-full relative shadow-2xl text-center flex flex-col items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-[#402d09] text-4xl font-bold cursor-pointer"
                onClick={() => setSelectedCharacter(null)}
              >
                &times;
              </button>

              <div className="w-32 h-32 bg-[#73551f] mx-auto rounded-full flex items-center justify-center text-white text-4xl font-extrabold">
                {selectedCharacter.name[0]}
              </div>

              <h2 className="text-4xl font-extrabold mt-5 text-[#402d09]">
                {selectedCharacter.name}
              </h2>

              <p className="text-[#402d09] text-lg leading-relaxed mt-3 px-6">
                {selectedCharacter.fullDescription}
              </p>

              {/* Informações Extras */}
              <div className="mt-6 w-full text-left px-6">
                <p className="text-[#402d09] text-lg font-semibold">
                  <strong>Raça:</strong> {selectedCharacter.race}
                </p>
                <p className="text-[#402d09] text-lg font-semibold">
                  <strong>Idade:</strong>{" "}
                  {selectedCharacter.age
                    ? `${selectedCharacter.age} anos`
                    : "Desconhecida"}
                </p>
                <p className="text-[#402d09] text-lg font-semibold">
                  <strong>Altura:</strong>{" "}
                  {selectedCharacter.height || "Desconhecida"}
                </p>
                <p className="text-[#402d09] text-lg font-semibold">
                  <strong>Cor dos olhos:</strong>{" "}
                  {selectedCharacter.eyeColor || "Desconhecida"}
                </p>
                <p className="text-[#402d09] text-lg font-semibold mt-3">
                  <strong>Habilidades:</strong>
                </p>
                <ul className="list-disc list-inside text-[#402d09]">
                  {selectedCharacter.abilities.length > 0 ? (
                    selectedCharacter.abilities.map((ability, index) => (
                      <li key={index} className="text-lg">
                        {ability}
                      </li>
                    ))
                  ) : (
                    <li className="text-lg">Nenhuma habilidade conhecida</li>
                  )}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
