"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"

export default function ShareButton() {
  const [copied, setCopied] = useState(false)
  const linkToCopy = "https://a.co/d/btg3mLB"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Mensagem some após 2 segundos
    } catch (err) {
      console.error("Falha ao copiar o link", err)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="bg-[#402d09] text-white w-14 h-14 flex items-center justify-center text-center rounded-full shadow-md hover:bg-[#402d0984] transition"
      >
        <Share2 className="w-6 h-6" />
      </button>

      {copied && (
        <span className="absolute -right-4 top-16 bg-gray-900 text-white text-xs py-1 px-2 rounded-md">
          Link copiado!
        </span>
      )}
    </div>
  )
}
