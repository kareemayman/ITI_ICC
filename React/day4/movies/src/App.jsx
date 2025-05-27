import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "./pages/movies"
import NavBar from "./NavBar"
import About from "./pages/about"
import Contact from "./pages/contact"
import NotFound from "./pages/NotFound"
import MovieDetails from "./pages/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/movies/:id" element={<MovieDetails></MovieDetails>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
