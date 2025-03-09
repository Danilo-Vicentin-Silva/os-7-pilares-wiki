export interface Character {
  id: number
  name: string
  shortDescription: string
  fullDescription: string
  race: string
  eyeColor: string | null
  abilities: string[]
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Oséias Cooper Davis",
    shortDescription: "Protagonista, jovem comerciante.",
    fullDescription:
      "Oséias Cooper Davis é um jovem comerciante de cabelos curtos pretos, pele clara, pequena estatura e olhos laranjas.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: ["Inteligente", "Ágil", "Estrategista", "Predestinado"],
  },
  {
    id: 2,
    name: "André Cooper Silvertone",
    shortDescription: "Personagem ruivo, alto, olhos verdes, muitas feridas.",
    fullDescription:
      "André Cooper Silvertone é ruivo, com cabelos longos, alta estatura, olhos verdes e muitas feridas.",
    race: "Humano",

    eyeColor: "Verde",
    abilities: ["Forte", "Determinado"],
  },
  {
    id: 3,
    name: "Jones Bellucci Davis",
    shortDescription: "Personagem sério, de alta estatura e olhos castanhos.",
    fullDescription:
      "Jones Bellucci Davis é negro, com olhos castanhos, alta estatura e uma expressão séria.",
    race: "Humano",

    eyeColor: "Castanho",
    abilities: ["Inteligente", "Leal"],
  },
  {
    id: 4,
    name: "Drake Cooper Silverstone",
    shortDescription: "Pai de Oséias, ótimo guerreiro e determinado.",
    fullDescription:
      "Drake Cooper Silverstone é negro, com olhos castanhos, média estatura, ótimo guerreiro e determinado. Pai de Oséias.",
    race: "Humano",

    eyeColor: "Castanho",
    abilities: ["Experiênte", "Estratégista", "Forte", "Inteligênte"],
  },
  {
    id: 5,
    name: "Susana Antonia de Hal",
    shortDescription: "Ótima guerreira rápida e disposta.",
    fullDescription:
      "Susana Antonia de Hal tem pele branca, olhos laranjas, média estatura, ótima guerreira rápida e disposta.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: ["Agilidade", "Ótima Combatente", "Imponente"],
  },
  {
    id: 6,
    name: "Letholdus Jones Wilson",
    shortDescription: "Junto à Susana 'governa' Winescasteli.",
    fullDescription:
      "Letholdus Jones Wilson tem alta estatura, é pardo, com olhos verdes, cabelos e barbas médias.",
    race: "Humano",

    eyeColor: "Verde",
    abilities: ["Liderança", "Diplomacia"],
  },
  {
    id: 7,
    name: "Gabriel Mello",
    shortDescription: "Alta estatura, negro, olhos castanhos.",
    fullDescription:
      "Gabriel Mello tem alta estatura, é negro, com olhos castanhos.",
    race: "Humano",

    eyeColor: "Castanho",
    abilities: ["Cozinheiro", "Guerreiro", "Leal"],
  },
  {
    id: 8,
    name: "Alexandra Félix Dankworth",
    shortDescription: "Média estatura, ruiva, olhos castanhos.",
    fullDescription:
      "Alexandra Félix Dankworth tem média estatura, é ruiva, com olhos castanhos.",
    race: "Humano",

    eyeColor: "Castanho",
    abilities: ["Determinada", "Resiliênte", "Ótima Arqueira"],
  },
  {
    id: 9,
    name: "Vinicius de Magnum",
    shortDescription: "Média estatura, albino.",
    fullDescription: "Vinicius de Magnum tem média estatura e é albino.",
    race: "Humano",

    eyeColor: "Azuis",
    abilities: ["Explorado", "Boa memória", "Leal"],
  },
  {
    id: 10,
    name: "Alexa Berrycloth Copo Gastrell",
    shortDescription:
      "Média estatura, branca, olhos laranjas. Cabelos pretos lisos.",
    fullDescription:
      "Alexa Berrycloth Copo Gastrell tem média estatura, pele branca, olhos laranjas e cabelos pretos lisos.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: [],
  },
  {
    id: 11,
    name: "Talion de Callhalla Ajax",
    shortDescription:
      "Cavaleiro lendário: vidência, alta estatura, olhos laranjas, negro.",
    fullDescription:
      "Talion de Callhalla Ajax é um cavaleiro lendário com habilidades de vidência, alta estatura, olhos laranjas e pele negra.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: ["Vidência", "Combate avançado"],
  },
  {
    id: 12,
    name: "Harold de Callhalla Ajax",
    shortDescription:
      "Pai de Talion, cavaleiro lendário, alta estatura, olhos laranjas e pele negra.",
    fullDescription:
      "Harold de Callhalla Ajax é pai de Talion, um cavaleiro lendário com alta estatura, olhos laranjas e pele negra.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: ["Combate com lanças"],
  },
  {
    id: 13,
    name: "Alessandra de Callhalla Corse",
    shortDescription:
      "Mãe de Talion, média estatura, olhos laranjas, longos cabelos pretos e pele parda.",
    fullDescription:
      "Alessandra de Callhalla Corse é mãe de Talion, com média estatura, olhos laranjas, longos cabelos pretos e pele parda.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: ["Curandeira"],
  },
  {
    id: 14,
    name: "Barnabás de Ajack",
    shortDescription:
      "Cavaleiro Lendário caído no Torneio, alta estatura, pele clara, olhos laranjas, barba grande, cabelo escuro e grande, várias feridas e queimaduras.",
    fullDescription:
      "Barnabás de Ajack, do reino antigo dos camponeses, é um Cavaleiro Lendário caído no Torneio. Ele tem alta estatura, pele clara, olhos laranjas, barba grande, cabelo escuro e longo, além de várias feridas e queimaduras.",
    race: "Humano",

    eyeColor: "Laranja",
    abilities: ["Resistência extrema", "Combate com espadas"],
  },
]
