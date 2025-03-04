"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export default function FavoriteButton() {
  const [favorited, setFavorited] = useState(false)

  return (
    <button
      onClick={() => setFavorited(!favorited)}
      className="bg-[#402d09] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md hover:bg-[#402d0984] transition"
    >
      <Heart
        className={`w-6 h-6 transition ${
          favorited ? "fill-red-500 text-red-500" : "text-white"
        }`}
      />
    </button>
  )
}
