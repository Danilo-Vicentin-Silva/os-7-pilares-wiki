interface Book {
  id: number
  title: string
  description: string
  largeDescription?: string
  image: string
  pages: string
  releaseDate?: number
  ASIN?: string
}

const books: Book[] = [
  {
    id: 1,
    title: "Os 7 Pilares: A Jornada Além da Montanha",
    description:
      "Diante o terrível reinado de Iseu, o jovem Oséias parte em busca de ajuda de outros reinos além da montanha.",
    largeDescription:
      "Oséias é um jovem comerciante, com um passado assombrado pela morte de seu pai, que se sente obrigado a terminar a missão de salvar os reinos da Grande Montanha do terrível reinado de Iseu, especialmente quando seu irmão morre tentando realizar o sonho de seu pai, tantos anos negligenciado por Oséias. Mas para isso, busca ajuda de reinos além da montanha para conseguir vencer o exército implacável de Iseu. Porém, a jornada apresenta diversos perigos e obstáculos, ensinamentos e escolhas, riscos esses que envolveram os sagrados 7 Pilares, principais sustentadores do universo.",
    image: "/imagens/01-capa.webp",
    pages: "284",
    releaseDate: 2024,
    ASIN: "B0CW1BG2GY",
  },
  {
    id: 2,
    title: "Em breve",
    description:
      "Uma verdadeira guerra nos 12 reinos, onde nao existem heroeis... breve.",
    image: "/imagens/em-breve.webp",
    pages: "???",
  },
  {
    id: 3,
    title: "Em breve",
    description:
      "Uma profecia, uma decisão, o fim ou começo de uma nova era em Genewins. Em breve.",
    image: "/imagens/em-breve.webp",
    pages: "???",
  },
]

export default books
