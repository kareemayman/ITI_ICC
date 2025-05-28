import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { MovieProvider } from "./context/MovieContext"

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router}></RouterProvider>
    </MovieProvider>
  )
}

export default App
