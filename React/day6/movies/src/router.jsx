import { createBrowserRouter, Outlet } from "react-router-dom"
import { lazy } from "react"

const NavBar = lazy(() => import("./NavBar"))
const Movies = lazy(() => import("./pages/movies"))
const About = lazy(() => import("./pages/about"))
const Contact = lazy(() => import("./pages/contact"))
const NotFound = lazy(() => import("./pages/NotFound"))
const MovieDetails = lazy(() => import("./pages/MovieDetails"))

export const router = createBrowserRouter([
  {
    element: <NavLayout></NavLayout>,
    children: [
      { path: "/", element: <Movies /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails></MovieDetails> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
])

function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
