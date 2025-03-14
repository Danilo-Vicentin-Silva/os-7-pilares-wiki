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
    race: "Cavaleiro Lendário",

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
    race: "Cavaleiro Lendário",

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
    race: "Cavaleiro Lendário",

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
    race: "Cavaleiro Lendário",

    eyeColor: "Laranja",
    abilities: ["Resistência extrema", "Combate com espadas"],
  },
  {
    id: 15,
    name: "Amon Matheus Wondavar",
    shortDescription: "Rei dos magos, de alta estatura e olhos laranjas.",
    fullDescription:
      "Rei dos magos, alta estatura, pele clara, olhos laranjas, barba rala, cabelo preto curto e olhos cansados.",
    race: "Humano",
    eyeColor: "Laranja",
    abilities: ["Magia poderosa", "Liderança"],
  },
  {
    id: 16,
    name: "Samuel Silverstone",
    shortDescription: "Antagonista do rei dos magos, mago superpoderoso.",
    fullDescription:
      "Mago superpoderoso, alta estatura, barba grande notória, branco, cabelos e barba grandes e pretos, olhos castanhos.",
    race: "Mago",
    eyeColor: "Castanho",
    abilities: ["Magia avançada", "Manipulação"],
  },
  {
    id: 17,
    name: "Baltazar",
    shortDescription: "Rei das planícies verdes, homem grande e forte.",
    fullDescription:
      "Rei das planícies verdes. Um homem grande e forte, pardo e com olhos castanhos, barba curta e cabelos ondulados e grandes. Sua voz era bem grave.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Força descomunal", "Liderança"],
  },
  {
    id: 18,
    name: "Hermes",
    shortDescription: "Cavaleiro lendário, mestre do elemento eletricidade.",
    fullDescription:
      "Cavaleiro lendário. Olhos amarelos, pele escura, barbas e cabelos negros. Média estatura, poderoso, elemento: eletricidade.",
    race: "Humano",
    eyeColor: "Amarelo",
    abilities: ["Manipulação de eletricidade", "Habilidade em combate"],
  },
  {
    id: 19,
    name: "Jaffrez Edward de Hollows",
    shortDescription: "Rei de Hollows, imponente e inteligente.",
    fullDescription:
      "Rei de Hollows, alta estatura, cabelos e barba loiros, olhos azuis, branco, sobrancelhas falhadas, braços fortes e médios. Aparência imponente e simpático, inteligente e preza pelo Pilar.",
    race: "Humano",
    eyeColor: "Azul",
    abilities: ["Liderança", "Estratégia"],
  },
  {
    id: 20,
    name: "Roland Edward de Hollows",
    shortDescription: "Irmão do rei de Hollows, forte e corajoso.",
    fullDescription:
      "Irmão do rei de Hollows, média estatura, cabelos e barba loiros, olhos verdes, branco. Barba e cabelos grandes e bem feitos, forte e corajoso.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Combate", "Resistência"],
  },
  {
    id: 21,
    name: "Dragomir Edward de Hollows",
    shortDescription: "Antigo rei de Hollows, verdadeiro conquistador.",
    fullDescription:
      "Antigo rei de Hollows, considerado um verdadeiro conquistador. Olhos vermelhos, cabelos e barba curtos e pretos, pardo para branco, alta estatura e cheio de cicatrizes no peito.",
    race: "Humano",
    eyeColor: "Vermelho",
    abilities: ["Estratégia militar", "Combate"],
  },
  {
    id: 22,
    name: "Daves Edward de Hollows",
    shortDescription: "Bibliotecário da maior biblioteca de Genewins.",
    fullDescription:
      "Bibliotecário da maior biblioteca de Genewins, sujeito calmo, baixa estatura, da família real. Apoia em não deixar Roland assumir o trono, olhos castanhos, cabelos e barba ruivos e médios.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Conhecimento arcano", "Persuasão"],
  },
  {
    id: 23,
    name: "Victor Barnabás",
    shortDescription: "Mago caçador da Entidade, misterioso e dedicado.",
    fullDescription:
      "Antigo bibliotecário de Crysem, assim como Talion está caçando a Entidade. Misterioso mago que dedicou sua vida para achar e destruir a Entidade, que nunca deu bola para seu 'seguidor' mais empenhado. Sempre notou a presença da entidade.",
    race: "Humano",
    eyeColor: "Azul",
    abilities: ["Magia", "Percepção"],
  },
  {
    id: 24,
    name: "Haroldo Silverstone Hollows",
    shortDescription: "Rei dos anões, expressão de autoridade.",
    fullDescription:
      "Rei do reino dos anões, baixa estatura, olhos verdes, cabelos e barba grisalhos e médios, pele clara, expressão de autoridade. Desfruta do Pilar para construir armas poderosas.",
    race: "Anão",
    eyeColor: "Verde",
    abilities: ["Engenharia de armas", "Liderança"],
  },
  {
    id: 25,
    name: "Zacarías Callhalla Silverstone de Genewins",
    shortDescription: "Rei dos cavaleiros lendários, jurou proteger o Pilar.",
    fullDescription:
      "Rei dos cavaleiros lendários, alta estatura, negro, careca, barbas negras longas e crespas, notável cicatriz no olho, olhos laranjas. Jurou proteger o Pilar e a Barragem.",
    race: "Humano",
    eyeColor: "Laranja",
    abilities: ["Combate", "Defesa"],
  },
  {
    id: 26,
    name: "Morpheus Polegene",
    shortDescription: "Antigo rei de Polegene, pai dos doze irmãos.",
    fullDescription:
      "O antigo rei de Polegene (quando era um reino inteiro) e pai dos doze irmãos. Alta estatura, cabelos e barbas amarelos e longos, fisionomia de guerreiro e olhos vermelhos.",
    race: "Humano",
    eyeColor: "Vermelho",
    abilities: ["Estratégia militar", "Combate"],
  },
  {
    id: 27,
    name: "Charlotte Polegene",
    shortDescription:
      "Rainha antiga de Polegene, conquistou a Grande Montanha.",
    fullDescription:
      "Rainha antiga de Polegene, junto a Morpheus, conquistou a Grande Montanha. Alta estatura, ruiva.",
    race: "Humano",
    eyeColor: null,
    abilities: ["Liderança", "Estratégia"],
  },
  {
    id: 28,
    name: "Joel Drake",
    shortDescription: "Guerreiro de alta estatura com cicatriz perto do olho.",
    fullDescription:
      "Homem de alta estatura, olhos laranjas, cabelos e barba castanhos e longos, cicatriz perto do olho.",
    race: "Humano",
    eyeColor: "Laranja",
    abilities: ["Combate", "Resistência"],
  },
  {
    id: 29,
    name: "Drake Bertrand",
    shortDescription: "Irmão do líder do exército de Varahal, forte e bruto.",
    fullDescription:
      "Irmão do líder do terrível exército de Varahal/Alexandre. Alta estatura, bruto, cabelos e barba loiros, olhos azuis.",
    race: "Humano",
    eyeColor: "Azul",
    abilities: ["Força bruta", "Estratégia militar"],
  },
  {
    id: 30,
    name: "Bjorn Bertrand",
    shortDescription:
      "Líder do exército de Varahal, tem uma cicatriz perto do olho.",
    fullDescription:
      "Irmão de Drake e líder do terrível exército de Varahal/Alexandre. Alta estatura, cabelos e barbas loiros, olhos azuis. Possui uma cicatriz perto do olho.",
    race: "Humano",
    eyeColor: "Azul",
    abilities: ["Liderança", "Combate"],
  },
  {
    id: 31,
    name: "Jeffrey Turner Ulric",
    shortDescription: "Sequestrador de Oséias, aparência magra e tenebrosa.",
    fullDescription:
      "Homem de cabelos castanhos e olhos verdes, pele parda e aparência magra e tenebrosa, olhos profundos.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Intimidação", "Astúcia"],
  },
  {
    id: 32,
    name: "Albert Turner Ulric",
    shortDescription:
      "Sequestrador de Oséias, aparência forte e olhos profundos.",
    fullDescription:
      "Homem de cabelos castanhos e olhos verdes, pele branca, aparência forte e olhos profundos.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Força", "Liderança"],
  },
  {
    id: 33,
    name: "Ted Turner Ulric",
    shortDescription:
      "Sequestrador de Oséias, aparência normal e olhos profundos.",
    fullDescription:
      "Homem de cabelos castanhos e olhos marrons, pele parda, aparência normal e olhos profundos.",
    race: "Humano",
    eyeColor: "Marrom",
    abilities: ["Manipulação", "Discrição"],
  },
  {
    id: 34,
    name: "Jhon Turner Ulric",
    shortDescription:
      "Sequestrador de Oséias, aparência magra e olhos profundos.",
    fullDescription:
      "Homem de cabelos castanhos e olhos verdes, pele parda, aparência magra e olhos profundos.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Discrição", "Enganação"],
  },
  {
    id: 35,
    name: "Conrado William",
    shortDescription: "Conselheiro do rei Afonse, perspicaz e leal.",
    fullDescription:
      "Conselheiro do rei Afonse, média estatura, pele clara e olhos e cabelos castanhos. Perspicaz e leal.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Estratégia", "Lealdade"],
  },
  {
    id: 36,
    name: "Fernanda Delphine",
    shortDescription: "Esposa do rei Afonse, atrevida e audaciosa.",
    fullDescription:
      "Esposa do rei Afonse, média estatura, cabelos loiros brilhantes, olhos azuis e pele clara. Atrevida, audaciosa, não gosta de Iseu.",
    race: "Humano",
    eyeColor: "Azul",
    abilities: ["Carisma", "Influência"],
  },
  {
    id: 37,
    name: "Edmond Beaumont",
    shortDescription: "Da família que ajudou Oséias, busca vingança.",
    fullDescription:
      "Da família que ajudou Oséias, tem cabelos pretos e olhos castanhos, média estatura e irá querer vingança contra Oséias.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Combate", "Determinação"],
  },
  {
    id: 38,
    name: "Fidelis Beaumont",
    shortDescription: "Morreu ajudando Oséias, irmão de Edmond.",
    fullDescription:
      "Da família que ajudou Oséias e irmão de Edmond, morreu ajudando eles. Cabelos pretos, olhos castanhos e média estatura.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Coragem", "Sacrifício"],
  },
  {
    id: 39,
    name: "Leônidas Beaumont",
    shortDescription:
      "Ancião da família Beaumont, sábio e guerreiro experiente.",
    fullDescription:
      "Ancião da família Beaumont, sábio, lutou muitas guerras por Sarus e quer se redimir ajudando Oséias. Cabelos e barba brancos, bem velho.",
    race: "Humano",
    eyeColor: null,
    abilities: ["Sabedoria", "Experiência em combate"],
  },
  {
    id: 40,
    name: "Gildo Beaumont",
    shortDescription:
      "Pai de Edmond e Fidelis, foi decapitado por apoiar Drake.",
    fullDescription:
      "Pai de Edmond e Fidelis, alta estatura, olhos castanhos e cabelos pretos. Foi decapitado em Sarus por apoiar Drake, pai de Oséias.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Influência política", "Estratégia"],
  },
  {
    id: 41,
    name: "Eric Alighieri",
    shortDescription: "Excelente estrategista e braço direito de Iseu.",
    fullDescription:
      "Homem branco, olhos castanhos e cabelo preto. Se revelou um excelente estrategista e será o braço direito de Iseu.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Estratégia", "Táticas de guerra"],
  },
  {
    id: 42,
    name: "Samael",
    shortDescription: "Rei do reino dos celestiais, enganado pela Entidade.",
    fullDescription:
      "Rei do reino dos celestiais. Responsável por confiar na Entidade (ser enganado) e liderar os exércitos celestiais para Genewins, tornando-se um serviçal das três leis.",
    race: "Celestial",
    eyeColor: null,
    abilities: ["Comando militar", "Poder celestial"],
  },
  {
    id: 43,
    name: "Entidade",
    shortDescription: "???",
    fullDescription: "???",
    race: "Divindade",
    eyeColor: null,
    abilities: ["???", "???"],
  },
  {
    id: 44,
    name: "Zacarías",
    shortDescription:
      "Homem de alta estatura com olhos verdes e cabelos grisalhos castanhos.",
    fullDescription:
      "Homem de alta estatura, olhos verdes, cabelos grisalhos castanhos.",
    race: "Divindade",
    eyeColor: "Verde",
    abilities: ["Executor"],
  },
  {
    id: 45,
    name: "Moisés",
    shortDescription:
      "Homem de alta estatura com olhos verdes e cabelos castanhos lisos.",
    fullDescription:
      "Homem de alta estatura, olhos verdes, cabelos lisos e castanhos.",
    race: "Divindade",
    eyeColor: "Verde",
    abilities: ["Juiz"],
  },
  {
    id: 46,
    name: "Hermes",
    shortDescription:
      "Homem de alta estatura com olhos verdes e cabelos lisos pretos.",
    fullDescription:
      "Homem de alta estatura, olhos verdes, cabelos lisos e pretos.",
    race: "Divindade",
    eyeColor: "Verde",
    abilities: ["Juri"],
  },
  {
    id: 47,
    name: "Maximilian Miller Williams",
    shortDescription:
      "Rei de Magnum, de alta estatura, com barba e cabelos castanhos.",
    fullDescription:
      "Maximilian Miller Williams é o rei de Magnum, conhecido por sua alta estatura e aparência imponente. Ele é casado com Margaret Vicent Valentina e tem dois filhos, Benjamin Vicent Miller e Arthur Vicent Miller. Com pele branca, olhos verdes e uma presença régia, Maximilian é um líder respeitado e dedicado ao seu reino.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Liderança", "Sabedoria", "Habilidade com Espada"],
  },
  {
    id: 48,
    name: "Arnold Silverstone Ajax",
    shortDescription: "Pai de Talion, sábio, calmo e poderoso.",
    fullDescription:
      "Arnold Silverstone Ajax é um homem de alta estatura e grande sabedoria. Pai de Talion, ele ocupa um alto escalão em Callhalla e é conhecido por sua calma, poder e sua habilidade estratégica. De pele branca, olhos laranjas e cabelos longos com barba média, ele é uma figura respeitada e tem um papel fundamental no destino de seu povo.",
    race: "Humano",
    eyeColor: "Laranja",
    abilities: ["Sabedoria", "Poder", "Estratégia"],
  },
  {
    id: 49,
    name: "Ezequias Miller Williams",
    shortDescription:
      "Rei de Warrar, alta estatura, pele escura, olhos castanhos, cabelos longos e barba pretas.",
    fullDescription:
      "Ezequias Miller Williams é o rei de Warrar, com alta estatura, pele escura, olhos castanhos, cabelos longos e barba pretas. Um líder imponente que lidera seu reino com força e sabedoria.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Liderança", "Sabedoria", "Força"],
  },
  {
    id: 50,
    name: "Hakon Miller Williams",
    shortDescription:
      "Rei de Hal, alta estatura, pardo, cabelos grisalhos e castanhos, olhos castanhos.",
    fullDescription:
      "Hakon Miller Williams é o rei de Hal, um homem de alta estatura e aparência imponente. Com pele parda, cabelos grisalhos e castanhos, e olhos castanhos, ele governa seu reino com grande respeito e sabedoria.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Liderança", "Sabedoria", "Força"],
  },
  {
    id: 51,
    name: "Iseu Miller Williams",
    shortDescription:
      "Rei de Magnum, pele clara, cabelos dourados, olhos roxos, alta estatura e gótico.",
    fullDescription:
      "Iseu Miller Williams, também conhecido como Iseu Castelo Silvestre, é o rei de Magnum. Com pele clara, cabelos dourados e olhos roxos, ele possui uma aparência gótica marcante e é um governante de alta estatura e grande poder.",
    race: "Humano",
    eyeColor: "Roxo",
    abilities: ["Liderança", "Habilidade com Magia", "Força"],
  },
  {
    id: 52,
    name: "David Miller Williams",
    shortDescription:
      "Rei de Dinewings, alta estatura, branco, cabelos castanhos, olhos verdes.",
    fullDescription:
      "David Miller Williams é o rei de Dinewings, um governante imponente com alta estatura, pele branca, cabelos castanhos e olhos verdes. Seu reinado é marcado por sua sabedoria e habilidades estratégicas.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Estratégia", "Liderança", "Sabedoria"],
  },
  {
    id: 53,
    name: "Alexandre Miller Williams",
    shortDescription:
      "Rei de Varahal, negro, cabelos pretos, olhos castanhos, barba grande, sobrancelhas notáveis, alta estatura.",
    fullDescription:
      "Alexandre Miller Williams é o rei de Varahal, um homem de estatura alta e imponente. Ele possui pele negra, cabelos pretos, olhos castanhos, uma barba grande e sobrancelhas notáveis, sendo um líder respeitado em seu reino.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Liderança", "Sabedoria", "Força"],
  },
  {
    id: 54,
    name: "Afonse Miller Williams",
    shortDescription:
      "Rei de Sarus, negro, cabelos castanhos, olhos verdes, sobrancelhas finas e grande barba, média estatura.",
    fullDescription:
      "Afonse Miller Williams é o rei de Sarus, com pele negra, cabelos castanhos, olhos verdes e uma grande barba. Ele tem sobrancelhas finas e é de média estatura, mas sua presença é marcante e sua liderança, respeitada.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Liderança", "Sabedoria", "Força"],
  },
  {
    id: 55,
    name: "Elliot Miller Williams",
    shortDescription:
      "Rei de Var, branco, cabelos e barba longos e amarelos, média estatura, olhos laranjas.",
    fullDescription:
      "Elliot Miller Williams é o rei de Var, com cabelos e barba longos e amarelos, além de média estatura e olhos laranjas. Ele é conhecido por sua habilidade de liderança e por ser um governante sábio.",
    race: "Humano",
    eyeColor: "Laranja",
    abilities: ["Liderança", "Sabedoria", "Estratégia"],
  },
  {
    id: 56,
    name: "Tamur Miller Williams",
    shortDescription:
      "Rei de Largox, pardo, cabelos e olhos castanhos, média estatura, barba rala.",
    fullDescription:
      "Tamur Miller Williams é o rei de Largox, com pele parda, cabelos e olhos castanhos e uma barba rala. Ele é de média estatura, mas sua habilidade como líder e sua presença são notáveis.",
    race: "Humano",
    eyeColor: "Castanho",
    abilities: ["Liderança", "Sabedoria", "Força"],
  },
  {
    id: 57,
    name: "Guilherme Miller Williams",
    shortDescription:
      "Rei de Bonohills, estatura muito alta, pardo, cabelos e barba 'vermelhos' e olhos verdes.",
    fullDescription:
      "Guilherme Miller Williams é o rei de Bonohills, de estatura muito alta e com pele parda. Seus cabelos e barba 'vermelhos' e olhos verdes são características marcantes. Ele é um líder respeitado e carismático.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Liderança", "Sabedoria", "Carisma"],
  },
  {
    id: 58,
    name: "Harry Miller Williams",
    shortDescription:
      "Rei de Wex, menor dos irmãos, olhos verdes, cabelos grandes e grisalhos, pardo.",
    fullDescription:
      "Harry Miller Williams é o rei de Wex, o menor dos irmãos, mas com grande sabedoria. Seus olhos verdes e cabelos grandes e grisalhos fazem dele uma figura distinta entre os governantes.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Liderança", "Sabedoria", "Estratégia"],
  },
  {
    id: 59,
    name: "Ricardo Miller Williams",
    shortDescription:
      "Rei de Hoalwex, branco, alta estatura, barba e cabelos grandes e dourados, olhos verdes.",
    fullDescription:
      "Ricardo Miller Williams é o rei de Hoalwex, com alta estatura e aparência imponente. Seus cabelos e barba grandes e dourados, junto com seus olhos verdes, fazem dele um líder marcante.",
    race: "Humano",
    eyeColor: "Verde",
    abilities: ["Liderança", "Força", "Sabedoria"],
  },
  {
    id: 60,
    name: "David Miller Williams",
    shortDescription:
      "Rei de Winescasteli, pele branca, olhos azuis, média estatura, ótimo estrategista, sempre um passo à frente.",
    fullDescription:
      "David Miller Williams é o rei de Winescasteli, um estrategista brilhante conhecido por estar sempre um passo à frente. Com pele branca, olhos azuis e média estatura, ele é um líder que se destaca pela sua inteligência.",
    race: "Humano",
    eyeColor: "Azul",
    abilities: ["Estratégia", "Liderança", "Inteligência"],
  },
]
