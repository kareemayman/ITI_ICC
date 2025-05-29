import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { MovieProvider } from "./context/MovieContext"
import { Provider } from "react-redux"
import store from "./redux/store/store"

function App() {
  return (
    <MovieProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </MovieProvider>
  )
}

export default App
