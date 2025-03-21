export interface Mapa {
  imagem: string
  titulo: string
  descricao: string
  reinos: string[]
}

export const mapas: Record<"genewins" | "polegene", Mapa> = {
  genewins: {
    imagem: "/imagens/mapa-genewins.webp",
    titulo: "Mapa Genewins",
    descricao:
      "Este mapa representa a região de Genewins, uma ilha que apresenta uma variedade de biomas e cidades.",
    reinos: [
      "Polegene: A Grande Montanha",
      "Hollowx: O Reino dos Humanos",
      "Crysem: O Reino dos Magos",
      "Anow: Reino dos Anões",
      "Callhalla: O Reino dos Caveleiros Lendários",
    ],
  },
  polegene: {
    imagem: "/imagens/mapa-polegene.webp",
    titulo: "Mapa Polegene",
    descricao:
      "Popularmente chamado de 'A Grande Montanha', Polegene é uma montanha que abriga 12 reinos. Com diversos biomas e culturas, é um local de grande importância para os reinos.",
    reinos: [
      "Magnum: O Reino Supremo de Polegene",
      "Dinewings: O Reino da Períferia",
      "Sarus: O Reino dos Metais",
      "Varahal: O Reino dos Rurais",
      "Hal: O Reino dos Viajantes",
      "Var: O Reino dos Industriais",
      "Largox: O Reino da Grande Vista",
      "Warrar: O Reino dos Cavaleiros",
      "Winescasteli: O Reino Comercial",
      "Hoalwex: O Reino dos Nobres",
      "Bonohalls: O Reino dos Portões",
      "Wex: O Reino dos Vigias",
    ],
  },
}
