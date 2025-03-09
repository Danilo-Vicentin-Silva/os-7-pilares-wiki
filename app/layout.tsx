import { Vesper_Libre } from "next/font/google"
import "./globals.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Metadata } from "next"

const vesperLibre = Vesper_Libre({ subsets: ["latin"], weight: ["400", "700"] }) // Defina os pesos necessários

export const metadata: Metadata = {
  title: "Os 7 Pilares Wiki",
  description: "Conheça o universo de Os 7 Pilares",
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={vesperLibre.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
