"use client"
import { motion } from "framer-motion"

export default function Aside() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 right-0 w-[46%] h-full bg-[#d9a036] shadow-xl p-28 flex flex-col max-xl:hidden"
    >
      <div className="ml-14">
        <h2 className="text-5xl font-bold">Os 7 Pilares</h2>
        <h3 className="text-3xl font-semibold">A Jornada Além da Montanha</h3>
        <br />
        <h4 className="text-xl font-semibold">284 páginas</h4>

        {/* Sinopse */}
        <p className="text-gray-600 mt-4">
          <i>
            Oséias é um jovem comerciante, com um passado assombrado pela morte
            de seu pai, que se sente obrigado a terminar a missão de salvar os
            reinos da Grande Montanha do terrível reinado de Iseu, especialmente
            quando seu irmão morre tentando realizar o sonho de seu pai, tantos
            anos negligenciado por Oséias. Mas para isso, busca ajuda de reinos
            além da montanha para conseguir vencer o exército implacável de
            Iseu. Porém, a jornada apresenta diversos perigos e obstáculos,
            ensinamentos e escolhas, riscos esses que envolveram os sagrados 7
            Pilares, principais sustentadores do universo.
          </i>
        </p>
        <p className="text-gray-500 mt-2">- Danilo Vicentin da Silva, 2024</p>

        <br />

        {/* Gênero e Público-Alvo */}
        <h4 className="text-lg font-semibold">📖 Gênero:</h4>
        <p className="text-gray-700">Fantasia Épica | Aventura | Drama</p>

        <h4 className="text-lg font-semibold mt-4">
          🎯 Para quem é este livro?
        </h4>
        <p className="text-gray-700">
          Para fãs de histórias épicas como <q>O Senhor dos Anéis</q>,
          <q>As Crônicas de Gelo e Fogo</q> e <q>O Nome do Vento</q>.
        </p>

        <br />

        {/* Trecho Marcante */}
        <h4 className="text-lg font-semibold">📜 Trecho do livro:</h4>
        <p className="text-gray-700 italic">
          <q>
            É fato que: tirando vocês, TODOS da Grande Montanha querem que o
            reinado dos doze reis, inclusive de Iseu, acabe, mas sequer querem
            tentar impedir eles, e digamos que eles estão mais preocupados em
            sobreviver da péssima situação que nosso rei astuto os colocou.
            Então eu me volto para os reinos além da grande montanha, e é lá que
            nós entramos: buscaremos possíveis aliados que podem nos ajudar
            nessa luta, então os mesmos terão direito de receber metade do
            tesouro de Iseu, que não é nem um pouco
          </q>
        </p>

        <br />

        {/* Call to Action */}
        <a
          href="https://a.co/d/eRoZtnP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 text-lg font-semibold rounded-md shadow-lg hover:bg-gray-800 transition-all"
        >
          📚 Adquira agora na Amazon
        </a>
      </div>
    </motion.div>
  )
}
