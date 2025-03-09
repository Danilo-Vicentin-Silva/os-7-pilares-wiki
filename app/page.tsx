import Aside from "./components/Aside"
import Book from "./components/book"
import Main from "./components/Main"

export default function Home() {
  return (
    <div className="max-lg:overflow-scroll">
      <Book />
      <Aside />
      <Main />
    </div>
  )
}
