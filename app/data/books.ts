interface Book {
  id: number
  title: string
  description: string
  image: string
  pages: string
}

const books: Book[] = [
  {
    id: 1,
    title: "Os 7 Pilares: A Jornada Além da Montanha",
    description:
      "Diante o terrível reinado de Iseu, o jovem Oséias parte em busca de ajuda de outros reinos além da montanha.",
    image: "/imagens/01-capa.webp",
    pages: "284",
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
      "Uma profecia, uma decisão, o fim ou começo de uma nova era em Genewins.",
    image: "/imagens/em-breve.webp",
    pages: "???",
  },
]

export default books
