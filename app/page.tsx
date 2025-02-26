import Aside from "./components/Aside"
import Book from "./components/book"
import Header from "./components/Header"
import Main from "./components/Main"
import Nav from "./components/Nav"

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Book />
      <Aside />
      <Main />
    </div>
  )
}
